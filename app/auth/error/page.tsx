import Link from "next/link"
import { AlertTriangle, MessageCircle, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Authentication Error – BoostACart",
  alternates: { canonical: "https://boostacart.com/auth/error" },
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-[#04091A] flex items-center justify-center p-6 relative overflow-hidden selection:bg-cyan-500/30">
      {/* Ambient glow orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 group">
            <div className="h-10 w-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">BoostACart</span>
          </Link>
        </div>

        {/* Error Card */}
        <div className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl p-8 text-center">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400/20 to-orange-500/20 border border-rose-400/30 flex items-center justify-center shadow-[0_0_30px_rgba(251,113,133,0.15)]">
              <AlertTriangle className="h-10 w-10 text-rose-400" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Authentication Failed
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 font-semibold mb-4">
            Something went wrong during authentication
          </p>

          {/* Divider */}
          <div className="h-px bg-white/5 my-6" />

          {/* Error message */}
          {params?.error ? (
            <div className="flex items-start gap-3 bg-rose-500/5 border border-rose-500/10 rounded-xl p-4 text-left mb-6">
              <AlertTriangle className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium text-sm mb-1">Error code</p>
                <p className="text-indigo-100/60 text-sm font-mono break-all">{params.error}</p>
              </div>
            </div>
          ) : (
            <p className="text-indigo-100/60 text-sm mb-6 leading-relaxed">
              An unexpected error occurred. This could be due to an expired link, an invalid session, or a temporary issue with our servers.
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Link
              href="/auth/login"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-200"
            >
              Try Signing In Again
            </Link>
            <Link
              href="/auth/sign-up"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              Create New Account
            </Link>
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Support
            </Link>
          </div>

          <div className="mt-6">
            <Link href="/" className="inline-flex items-center gap-1.5 text-indigo-100/40 text-xs hover:text-indigo-100/70 transition-colors">
              <ArrowLeft className="h-3 w-3" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
