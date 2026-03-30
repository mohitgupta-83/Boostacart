"use client"

import type React from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, Suspense, useEffect } from "react"

function ClaimForm() {
  const searchParams = useSearchParams()
  const [domain, setDomain] = useState(searchParams.get("domain") || "")
  const [email, setEmail] = useState("")
  const [step, setStep] = useState<"domain" | "email" | "link" | "success">(domain ? "email" : "domain")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isFinalizing, setIsFinalizing] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  // Auto-finalize if user returns from magic link
  useEffect(() => {
    const handleAuthRedirect = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session && domain && !isFinalizing && step !== "success") {
        setIsFinalizing(true)
        try {
          await finalizeClaim(domain, session.user.email!)
        } catch (err) {
          console.error("Auto-finalize error:", err)
          setIsFinalizing(false)
        }
      }
    }
    handleAuthRedirect()
  }, [domain, step])

  const finalizeClaim = async (targetDomain: string, userEmail: string) => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/claim-domain/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: targetDomain, email: userEmail })
      })

      if (!res.ok) {
        const errData = await res.json()
        throw new Error(errData.error || "Failed to transfer ownership")
      }

      setStep("success")
    } catch (err: any) {
      setError(err.message || "Failed to finalize ownership transfer.")
    } finally {
      setIsLoading(true) 
      // Keep loading true for success state transition if needed, 
      // but actually setStep handles it.
    }
  }

  const handleDomainSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!domain.trim()) {
      setError("Please enter a domain.")
      return
    }
    setError(null)
    setStep("email")
  }

  const handleSendLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    // Validate email domain
    const emailDomain = email.split("@")[1]?.toLowerCase()
    const targetDomain = domain.toLowerCase()
    
    if (emailDomain !== targetDomain && !emailDomain.endsWith(`.${targetDomain}`)) {
      setError(`Your email must end with @${targetDomain} to claim this store.`)
      setIsLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: window.location.href, // Redirect back to this exact page
        }
      })
      
      if (error) throw error
      setStep("link")
    } catch (err: any) {
      setError(err.message || "Failed to send verification link. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Removed handleVerifyOtp as we use Magic Link now

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
                <form onSubmit={handleSendLink} className="space-y-4">
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
                    {isLoading ? "Sending link..." : "Send Verification Link"}
                  </Button>
                </form>
              </CardContent>
            </>
          )}

          {step === "link" && (
            <>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <CardTitle className="text-2xl font-bold text-white text-center">Check Your Email</CardTitle>
                <CardDescription className="text-white/60 text-center">
                  We sent a secure magic link to <strong className="text-white">{email}</strong>.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl">
                    <p className="text-sm text-blue-200 leading-relaxed text-center">
                        Please click the link in the email to automatically verify your business and claim <strong className="text-white">{domain}</strong>.
                    </p>
                </div>
                {isFinalizing && (
                    <div className="flex items-center justify-center space-x-2 text-cyan-400">
                        <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm font-medium">Finalizing ownership...</span>
                    </div>
                )}
                {error && <p className="text-sm text-rose-400 text-center">{error}</p>}
                <div className="text-center pt-2">
                    <button 
                        type="button" 
                        onClick={() => setStep("email")} 
                        className="text-white/40 hover:text-white text-sm underline transition-colors"
                        disabled={isFinalizing}
                    >
                        Use a different email
                    </button>
                </div>
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
