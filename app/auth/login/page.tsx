"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: {
          emailRedirectTo:
            process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
            `${typeof window !== "undefined" ? window.location.origin : "https://boostacart-beta-v1.vercel.app"}/dashboard`,
        },
      })
      if (error) throw error
      router.push("/dashboard")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
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
        <div className="flex flex-col gap-6">
          <Card className="bg-[#0b102b]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">Login to Your Store</CardTitle>
              <CardDescription className="text-white/60">
                Enter your email below to access your BoostACart dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
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
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-[#0a0f24] border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20 backdrop-blur-sm"
                    />
                  </div>
                  {error && (
                    <div className="space-y-1.5">
                      <p className="text-sm text-rose-400">{error}</p>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        Need help? Contact Support
                      </a>
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 hover:brightness-110 text-white font-bold border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login to Dashboard"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  <span className="text-white/60">Don't have an account? </span>
                  <Link
                    href="/auth/sign-up"
                    className="text-cyan-400 hover:text-cyan-300 font-medium tracking-wide underline underline-offset-4 transition-colors"
                  >
                    Create Store Account
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
