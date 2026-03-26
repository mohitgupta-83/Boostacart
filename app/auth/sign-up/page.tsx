"use client"

import type React from "react"
import { ensureStoreExists } from "./actions"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"

function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [storeName, setStoreName] = useState("")
  const [storeDomain, setStoreDomain] = useState("")
  const [referralCode, setReferralCode] = useState("")
  const [referralValid, setReferralValid] = useState<boolean | null>(null)
  const [referralChecking, setReferralChecking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const refCode = searchParams.get("ref") || ""

  // Auto-fill referral code from URL and validate
  useEffect(() => {
    if (refCode) {
      setReferralCode(refCode.toUpperCase())
      validateReferralCode(refCode.toUpperCase())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refCode])

  const validateReferralCode = async (code: string) => {
    if (!code.trim()) {
      setReferralValid(null)
      return
    }
    setReferralChecking(true)
    try {
      const supabase = createClient()
      // Use ilike for case-insensitive matching to handle codes like "372F70"
      const { data, error } = await supabase
        .from("profiles")
        .select("id, referral_code")
        .ilike("referral_code", code.trim())
        .maybeSingle()
      
      if (error) {
        // If there's an RLS/permission error, don't block user — assume valid
        console.warn("Referral validation error (will allow sign-up):", error.message)
        setReferralValid(null)
        return
      }
      setReferralValid(!!data)
    } catch {
      // Network or unknown error — don't block sign-up
      setReferralValid(null)
    } finally {
      setReferralChecking(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (password !== repeatPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!storeName.trim() || !storeDomain.trim()) {
      setError("Store name and domain are required")
      setIsLoading(false)
      return
    }

    // Block submission only if referral code is entered AND explicitly confirmed invalid
    if (referralCode.trim() && referralValid === false) {
      setError("Invalid referral code. Please check and try again, or leave it blank.")
      setIsLoading(false)
      return
    }

    const finalRefCode = referralCode.trim().toUpperCase() || (refCode ? refCode.toUpperCase() : "")

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo:
            process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
            `${typeof window !== "undefined" ? window.location.origin : "https://boostacart-beta-v1.vercel.app"}/dashboard`,
          data: {
            store_name: storeName,
            store_domain: storeDomain,
            ...(finalRefCode ? { ref_code: finalRefCode } : {}),
          },
        },
      })

      if (authError) throw authError

      if (authData.user) {
        const storeResult = await ensureStoreExists(authData.user.id, storeName, storeDomain)
        if (!storeResult.success) {
          console.error("[v0] Store creation fallback failed:", storeResult.error)
        }
      }

      router.push("/auth/sign-up-success")
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("Database error saving new user")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#04091A] flex items-center justify-center p-6 md:p-10 relative overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Abstract Background Glows */}
      <div className="absolute top-[0%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      
      <div className="w-full max-w-sm relative z-10">
        <div className="flex flex-col gap-6">
          <Card className="bg-[#0b102b]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">Create Your Store</CardTitle>
              <CardDescription className="text-indigo-200/60 font-light">
                Set up your BoostACart account and store
                {refCode && (
                  <span className="block mt-2 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-md w-fit">
                    Referral code applied: {refCode.toUpperCase()}
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#0a0f24] border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20 backdrop-blur-sm"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="text-white">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-[#0a0f24] border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20 backdrop-blur-sm"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="repeat-password" className="text-white">Repeat Password</Label>
                    <Input
                      id="repeat-password"
                      type="password"
                      required
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      className="bg-[#0a0f24] border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20 backdrop-blur-sm"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="store-name" className="text-white">Store Name</Label>
                    <Input
                      id="store-name"
                      type="text"
                      placeholder="My Awesome Store"
                      required
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      className="bg-[#0a0f24] border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20 backdrop-blur-sm"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="store-domain" className="text-white">Store Domain</Label>
                    <Input
                      id="store-domain"
                      type="text"
                      placeholder="mystore.com"
                      required
                      value={storeDomain}
                      onChange={(e) => setStoreDomain(e.target.value)}
                      className="bg-[#0a0f24] border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20 backdrop-blur-sm"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="referral-code" className="text-white/70 text-xs">
                      Referral / Coupon Code (Optional)
                    </Label>
                    <Input
                      id="referral-code"
                      type="text"
                      placeholder="e.g. ABC123"
                      value={referralCode}
                      onChange={(e) => {
                        const val = e.target.value.toUpperCase()
                        setReferralCode(val)
                        if (val.length >= 3) {
                          validateReferralCode(val)
                        } else {
                          setReferralValid(null)
                        }
                      }}
                      className={`bg-[#0a0f24] border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20 backdrop-blur-sm ${referralValid === true ? "border-emerald-500/50" : referralValid === false ? "border-rose-500/50" : ""
                        }`}
                    />
                    {referralChecking && (
                      <p className="text-xs text-indigo-200/50">Checking code...</p>
                    )}
                    {!referralChecking && referralValid === true && (
                      <p className="text-xs text-emerald-400">✓ Valid referral code applied</p>
                    )}
                    {!referralChecking && referralValid === false && referralCode.trim() && (
                      <p className="text-xs text-rose-400">Invalid referral code</p>
                    )}
                  </div>
                  {error && <p className="text-sm text-rose-400">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 hover:brightness-110 text-white font-bold border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Store Account"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  <span className="text-white/60">Already have an account? </span>
                  <Link
                    href="/auth/login"
                    className="text-cyan-400 hover:text-cyan-300 font-medium tracking-wide underline underline-offset-4 transition-colors"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense>
      <SignUpForm />
    </Suspense>
  )
}
