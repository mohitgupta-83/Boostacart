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
      const { data } = await supabase
        .from("profiles")
        .select("id")
        .eq("referral_code", code.toUpperCase())
        .maybeSingle()
      setReferralValid(!!data)
    } catch {
      setReferralValid(false)
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

    // Block submission if referral code is entered but invalid
    if (referralCode.trim() && referralValid === false) {
      setError("Invalid referral code")
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
    <div className="min-h-screen bg-[#030303] flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Create Your Store</CardTitle>
              <CardDescription className="text-white/60">
                Set up your BoostACart account and store
                {refCode && (
                  <span className="block mt-1 text-green-400 text-xs">
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
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
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20 ${referralValid === true ? "border-green-500" : referralValid === false ? "border-red-500" : ""
                        }`}
                    />
                    {referralChecking && (
                      <p className="text-xs text-slate-400">Checking code...</p>
                    )}
                    {!referralChecking && referralValid === true && (
                      <p className="text-xs text-green-400">✓ Valid referral code applied</p>
                    )}
                    {!referralChecking && referralValid === false && referralCode.trim() && (
                      <p className="text-xs text-red-400">Invalid referral code</p>
                    )}
                  </div>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Store Account"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  <span className="text-white/60">Already have an account? </span>
                  <Link
                    href="/auth/login"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
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
