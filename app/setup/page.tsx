import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  Copy,
  ExternalLink,
  Settings,
  BarChart3,
  Palette,
  Users,
  ShoppingCart,
} from "lucide-react"

export const metadata = {
  alternates: { canonical: "https://boostacart.com/setup" },
  title: "Setup Guide | BoostACart",
  description: "Get your BoostACart widget up and running in minutes. Follow these simple steps to start capturing more leads.",
};

export default function SetupGuidePage() {
  return (
    <div className="min-h-screen bg-[#04091A] font-sans selection:bg-cyan-500/30 overflow-hidden relative text-slate-200">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <header className="bg-[#04091A]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 py-3 sm:py-0 sm:h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-indigo-100/70 hover:text-white transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
              <span>Back to Home</span>
            </Link>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/auth/login"
                className="text-indigo-100/70 hover:text-white font-medium transition-colors text-sm sm:text-base w-full sm:w-auto text-center sm:text-left"
              >
                Sign In
              </Link>
              <Link
                href="/auth/sign-up"
                className="px-4 sm:px-6 py-2 sm:py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-lg hover:brightness-110 transition-all duration-300 font-medium border-0 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3 sm:mb-4">Setup Guide</h1>
          <p className="text-sm sm:text-xl text-indigo-100/70 max-w-2xl mx-auto px-2">
            Get your BoostACart widget up and running in minutes. Follow these simple steps to start capturing more
            leads.
          </p>
        </div>

        {/* Quick Start Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/5 text-center transition-all duration-300 hover:border-cyan-500/30 shadow-xl relative z-10">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-blue-500/25">
              <Users className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">1. Create Account</h3>
            <p className="text-xs sm:text-sm text-indigo-100/70">Sign up with your store details</p>
          </div>

          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/5 text-center transition-all duration-300 hover:border-cyan-500/30 shadow-xl relative z-10">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-green-500/25">
              <Palette className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">2. Customize Widget</h3>
            <p className="text-xs sm:text-sm text-indigo-100/70">Design your lead capture form</p>
          </div>

          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/5 text-center transition-all duration-300 hover:border-cyan-500/30 shadow-xl relative z-10">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-purple-500/25">
              <Copy className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">3. Get Widget URL</h3>
            <p className="text-xs sm:text-sm text-indigo-100/70">Copy your unique widget link</p>
          </div>

          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/5 text-center transition-all duration-300 hover:border-cyan-500/30 shadow-xl relative z-10">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-orange-500/25">
              <BarChart3 className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">4. Track Results</h3>
            <p className="text-xs sm:text-sm text-indigo-100/70">Monitor your lead generation</p>
          </div>
        </div>

        {/* Platform Integration */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Platform Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Link
              href="/setup/shopify"
              className="bg-[#0b102b]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/5 transition-all duration-300 group cursor-pointer hover:border-cyan-500/30 shadow-xl relative z-10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all flex-shrink-0">
                  <ShoppingCart className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                </div>
                <ExternalLink className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-100/40 group-hover:text-indigo-100/70 transition-colors flex-shrink-0" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Shopify Integration</h3>
              <p className="text-sm sm:text-base text-indigo-100/70 mb-4">
                Step-by-step guide to integrate BoostACart with your Shopify store and start capturing abandoned cart
                leads.
              </p>
              <div className="flex items-center text-emerald-400 font-medium group-hover:translate-x-1 transition-transform text-sm sm:text-base">
                <span>Get Started</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="space-y-6 sm:space-y-8">
          {/* Step 1 */}
          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl transition-all duration-300 hover:border-cyan-500/30 relative z-10">
            <div className="flex items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="w-7 sm:w-8 h-7 sm:h-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-blue-500/25 text-sm sm:text-base">
                1
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-white">Create Your Store Account</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">What You'll Need:</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center text-indigo-100/70 text-xs sm:text-sm">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Your email address
                  </li>
                  <li className="flex items-center text-indigo-100/70 text-xs sm:text-sm">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Store name
                  </li>
                  <li className="flex items-center text-indigo-100/70 text-xs sm:text-sm">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Store domain (e.g., mystore.com)
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  href="/auth/sign-up"
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:brightness-110 transition-all duration-300 font-medium flex items-center justify-center space-x-2 border-0 text-sm sm:text-base"
                >
                  <Users className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
                  <span>Create Account Now</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl transition-all duration-300 hover:border-cyan-500/30 relative z-10">
            <div className="flex items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="w-7 sm:w-8 h-7 sm:h-8 bg-gradient-to-r from-emerald-400 to-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-green-500/25 text-sm sm:text-base">
                2
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-white">Customize Your Widget</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Customization Options:</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center text-indigo-100/70 text-xs sm:text-sm">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Heading and description text
                  </li>
                  <li className="flex items-center text-indigo-100/70 text-xs sm:text-sm">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Colors and styling
                  </li>
                  <li className="flex items-center text-indigo-100/70 text-xs sm:text-sm">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Form fields (email/phone toggles)
                  </li>
                  <li className="flex items-center text-indigo-100/70 text-xs sm:text-sm">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Discount code settings
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-indigo-100/70 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Access the customization panel from your dashboard to design a widget that matches your brand.
                </p>
                <Link
                  href="/dashboard"
                  className="w-full bg-gradient-to-r from-emerald-400 to-green-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:brightness-110 transition-all duration-300 font-medium flex items-center justify-center space-x-2 border-0 text-sm sm:text-base"
                >
                  <Settings className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
                  <span>Go to Dashboard</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 sm:mt-12 bg-[#0b102b]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl text-white text-center border border-white/5 shadow-xl relative z-10">
          <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Need Help?</h2>
          <p className="text-xs sm:text-base text-indigo-100/70 mb-4 sm:mb-6">
            Our support team is here to help you with any questions about setting up or customizing your BoostACart
            widget.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-lg hover:brightness-110 transition-all duration-300 font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] hover:-translate-y-0.5 border-0 text-sm sm:text-base"
            >
              Contact Support
            </Link>
            <Link
              href="/setup/shopify"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-[#0a0f24] text-white rounded-lg hover:bg-[#121a40] transition-all duration-300 font-bold border border-white/10 text-sm sm:text-base"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
