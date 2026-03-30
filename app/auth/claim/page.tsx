"use client"

import type React from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"

function ClaimForm() {
  const searchParams = useSearchParams()
  const [domain, setDomain] = useState(searchParams.get("domain") || "")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState<"domain" | "email" | "otp" | "success">(domain ? "email" : "domain")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleDomainSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!domain.trim()) {
      setError("Please enter a domain.")
      return
    }
    setError(null)
    setStep("email")
  }

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    // Validate email domain
    const emailDomain = email.split("@")[1]?.toLowerCase()
    const targetDomain = domain.toLowerCase()
    
    // Check if the domains match exactly, or if the email is a subdomain of the target domain
    if (emailDomain !== targetDomain && !emailDomain.endsWith(`.${targetDomain}`)) {
      setError(`Your email must end with @${targetDomain} to claim this store.`)
      setIsLoading(false)
      return
    }

    const supabase = createClient()
    try {
      const dbCheck = await fetch("/api/check-domain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
      })
      if (dbCheck.ok) {
        const json = await dbCheck.json()
        if (!json.exists) {
          setError("This store domain is not registered. Please go to Sign Up to create it.")
          setIsLoading(false)
          return
        }
      }
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
        }
      })
      
      if (error) throw error
      setStep("otp")
    } catch (err: any) {
      setError(err.message || "Failed to send verification code. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    const supabase = createClient()
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email"
      })

      if (error) throw error

      if (data.user) {
        // Once verified and logged in, transfer ownership
        const res = await fetch("/api/claim-domain/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ domain, email })
        })

        if (!res.ok) {
          const errData = await res.json()
          throw new Error(errData.error || "Failed to transfer ownership")
        }

        setStep("success")
      }
    } catch (err: any) {
      setError(err.message || "Invalid verification code.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#04091A] flex items-center justify-center p-6 md:p-10 relative overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Abstract Background Glows */}
      <div className="absolute top-[0%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="w-full max-w-sm relative z-10">

        <Card className="bg-[#0b102b]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          {step === "domain" && (
            <>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold text-white">Find Your Store</CardTitle>
                <CardDescription className="text-white/60">
                  Enter your store's domain to begin the claim process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDomainSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="storeDomain" className="text-white">Store Domain</Label>
                    <Input
                      id="storeDomain"
                      type="text"
                      placeholder="e.g. mystore.com"
                      required
                      value={domain}
                      onChange={(e) => setDomain(e.target.value.toLowerCase().trim())}
                      className="bg-[#0a0f24] border-white/10 text-white focus:border-cyan-500"
                    />
                  </div>
                  {error && <p className="text-sm text-rose-400">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold"
                  >
                    Continue
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  <Link href="/auth/sign-up" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Looking to create a new store?
                  </Link>
                </div>
              </CardContent>
            </>
          )}

          {step === "email" && (
            <>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold text-white">Claim {domain}</CardTitle>
                <CardDescription className="text-white/60">
                  Enter your <strong className="text-white">@{domain}</strong> email to verify ownership.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Work Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={`you@${domain}`}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#0a0f24] border-white/10 text-white focus:border-cyan-500"
                    />
                  </div>
                  {error && <p className="text-sm text-rose-400">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending code..." : "Send Verification Code"}
                  </Button>
                </form>
              </CardContent>
            </>
          )}

          {step === "otp" && (
            <>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Check Your Email</CardTitle>
                <CardDescription className="text-white/60">
                  We sent a 6-digit verification code to <strong className="text-white">{email}</strong>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp" className="text-white">Verification Code</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="123456"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="bg-[#0a0f24] border-white/10 text-white focus:border-cyan-500 text-center tracking-widest text-lg"
                      maxLength={6}
                    />
                  </div>
                  {error && <p className="text-sm text-rose-400">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold"
                    disabled={isLoading}
                  >
                    {isLoading ? "Verifying..." : "Verify & Claim Store"}
                  </Button>
                  <div className="text-center pt-2">
                    <button type="button" onClick={() => setStep("email")} className="text-white/40 hover:text-white text-sm transition-colors">
                      Use a different email
                    </button>
                  </div>
                </form>
              </CardContent>
            </>
          )}

          {step === "success" && (
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Ownership Claimed!</h2>
              <p className="text-white/60 text-sm mb-6">
                You have successfully claimed and verified ownership for <strong className="text-white">{domain}</strong>.
              </p>
              <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 font-bold">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

export default function ClaimPage() {
  return (
    <Suspense>
      <ClaimForm />
    </Suspense>
  )
}
