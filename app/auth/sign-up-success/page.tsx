import Link from "next/link"
import { CheckCircle, Mail, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Account Created – BoostACart",
  description: "You've successfully signed up. Check your email to confirm your account.",
  alternates: { canonical: "https://boostacart.com/auth/sign-up-success" },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#04091A] flex items-center justify-center p-6 relative overflow-hidden selection:bg-cyan-500/30">
      {/* Ambient glow orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
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

        {/* Card */}
        <div className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 border border-emerald-400/30 flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.15)]">
              <CheckCircle className="h-10 w-10 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            You're almost in! 🎉
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-semibold text-lg mb-4">
            Account created successfully
          </p>

          {/* Divider */}
          <div className="h-px bg-white/5 my-6" />

          <div className="flex items-start gap-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-4 text-left mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-cyan-500/20 flex-shrink-0 mt-0.5">
              <Mail className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-white font-medium text-sm mb-1">Check your inbox</p>
              <p className="text-indigo-100/60 text-sm leading-relaxed">
                We've sent a confirmation email to your address. Click the link inside to activate your account and start capturing leads.
              </p>
            </div>
          </div>

          <Link
            href="/auth/login"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-200 border-0"
          >
            Go to Login
            <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="mt-4 text-indigo-100/40 text-xs">
            Didn't get the email? Check your spam folder or{" "}
            <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
