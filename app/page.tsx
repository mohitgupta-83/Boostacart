"use client"
import Link from "next/link"
import Image from "next/image"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Check, ShoppingCart, TrendingUp, Zap, Users, ArrowRight, Star } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"
import ArrowRightIcon from "@/components/icons/ArrowRightIcon"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"
import type { User } from "@supabase/supabase-js"
import { RoiCalculator } from "@/components/roi-calculator"

const ShoppingCartIcon = () => (
  <ShoppingCart className="h-8 w-8" />
)

const ZapIcon = () => (
  <Zap className="h-6 w-6" />
)

const TrendingUpIcon = () => (
  <TrendingUp className="h-6 w-6" />
)

const UsersIcon = () => (
  <Users className="h-6 w-6" />
)

export default function LandingPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    // Check current session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Header */}
      <header className="bg-slate-950/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                <Image src="/favicon.png" alt="BoostACart Logo" width={24} height={24} className="brightness-110" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">BoostACart</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-10">
              {["Tools", "Pricing", "Features"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-wide uppercase"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {loading ? null : user ? (
                <Link
                  href="/dashboard"
                  className="px-6 py-2.5 bg-white text-slate-950 rounded-xl hover:bg-slate-200 transition-all font-bold text-sm shadow-xl shadow-white/5"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/auth/login" className="text-sm font-bold text-slate-400 hover:text-white px-4 transition-colors">
                    Login
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:scale-105 transition-all font-bold text-sm shadow-xl shadow-blue-500/20"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 text-slate-400 hover:text-white">
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-950 border-white/5 pt-20">
                  <div className="flex flex-col gap-6">
                    {["Tools", "Pricing", "Features", "Blog"].map((item) => (
                      <Link key={item} href={`/${item.toLowerCase()}`} className="text-xl font-bold text-white">
                        {item}
                      </Link>
                    ))}
                    <hr className="border-white/5" />
                    <Link href="/auth/sign-up" className="w-full py-4 bg-blue-600 text-white rounded-2xl text-center font-bold">
                      Start Free Trial
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroGeometric
        badge="Premium Cart Recovery"
        title1="Capture Interest"
        title2="Before They Leave"
      />

      {/* Trust Section */}
      <section className="py-12 border-y border-white/5 bg-slate-950/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-10">Trusted by growing Shopify stores</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-2xl font-black text-white italic tracking-tighter">LUXE_D2C</div>
            <div className="text-2xl font-black text-white italic tracking-tighter underline decoration-blue-500">TRENDFLOW</div>
            <div className="text-2xl font-black text-white italic tracking-tighter opacity-80 uppercase">Urban_Glow</div>
          </div>
        </div>
      </section>

      {/* Core Value Props */}
      <section className="py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic tracking-tight">Built for Shopify Dropshippers & D2C Brands</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              We focus on the most profitable stage of the customer journey: <span className="text-blue-400 font-bold italic underline decoration-blue-500/30 underline-offset-8">The Add-to-Cart moment.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SpotlightCard className="p-10 border-white/5 hover:border-blue-500/20 transition-all group rounded-[2.5rem] bg-slate-900/20 backdrop-blur-3xl">
              <div className="w-16 h-16 rounded-[1.5rem] bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner shadow-blue-500/10 border border-blue-500/20">
                <ShoppingCart className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Add-to-Cart Capture</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                Standard tools wait for checkout. We capture interest 2 steps earlier, giving you 4x more recovery leads than Klaviyo alone.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-10 border-white/5 hover:border-green-500/20 transition-all group rounded-[2.5rem] bg-slate-900/20 backdrop-blur-3xl">
              <div className="w-16 h-16 rounded-[1.5rem] bg-green-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner shadow-green-500/10 border border-green-500/20">
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">WhatsApp Recovery</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                Bridge the gap with 98% open-rate WhatsApp follow-ups that feel personal and drive instant action on abandoned carts.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-10 border-white/5 hover:border-purple-500/20 transition-all group rounded-[2.5rem] bg-slate-900/20 backdrop-blur-3xl relative overflow-hidden">
              <div className="absolute top-4 right-6 bg-purple-600 text-[9px] font-black uppercase px-3 py-1 rounded-full text-white tracking-widest animate-pulse border border-white/20">V2 Coming Soon</div>
              <div className="w-16 h-16 rounded-[1.5rem] bg-purple-500/10 flex items-center justify-center mb-8 shadow-inner shadow-purple-500/10 border border-purple-500/20">
                <Zap className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Voice Agent</h3>
              <p className="text-slate-400 leading-relaxed font-light italic">
                Automated high-ticket recovery through intelligent AI voice calls that sound 100% human and handle objections in real-time.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-12 sm:py-20 relative z-10">
        <RoiCalculator />
      </section>

      {/* Testimonials */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
              </div>
              <h2 className="text-5xl font-black text-white mb-8 italic leading-tight tracking-tighter italic">"BoostACart added ₹2.4 Lakhs to our store in 30 days."</h2>
              <p className="text-sm text-slate-500 font-black uppercase tracking-[0.3em] mb-8">— Founders, Trendflow D2C</p>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 relative shadow-2xl">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-[80px]"></div>
              <p className="text-xl text-slate-300 font-light italic leading-relaxed mb-10 relative z-10">
                "We were spending heavily on Meta Ads but losing 70% of carts. Setting up BoostACart took 5 minutes and the results were instant. Our blended ROAS jumped from 2.1 to 3.4 by capturing leads early."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center text-white font-bold text-xl">HV</div>
                <div>
                  <p className="text-white font-black text-lg tracking-tight">Harsh Vardhan</p>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Founder, Luxe Commerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 sm:py-32 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 italic">Simple Performance Pricing</h2>
            <p className="text-xl text-slate-400">Scale your brand without breaking the bank.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Starter", price: "$19", leads: "600", color: "blue", popular: false },
              { name: "Scaling", price: "$49", leads: "2,000", color: "indigo", popular: true },
              { name: "Omnichannel", price: "$99", leads: "Unlimited", color: "purple", popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`relative group p-10 rounded-[2.5rem] border ${plan.popular ? 'border-blue-500/50 bg-blue-500/5 scale-105' : 'border-white/5 bg-slate-900/20'} backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-black`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-black uppercase px-4 py-1.5 rounded-full text-white tracking-widest shadow-lg shadow-blue-500/20">Recommended</div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm">/mo</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-slate-300 font-medium">
                    <Check className="w-5 h-5 text-green-400" /> {plan.leads} Leads / mo
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" /> WhatsApp Integration
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" /> Analytics Dashboard
                  </li>
                </ul>
                <Link
                  href="/auth/sign-up"
                  className={`w-full block text-center py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${plan.popular ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/40 hover:scale-[1.02]' : 'bg-white/5 text-white hover:bg-white/10'}`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] p-10 text-center max-w-4xl mx-auto">
            <div className="inline-block bg-blue-600 text-[10px] font-black uppercase px-4 py-1.5 rounded-full text-white tracking-[0.2em] mb-6">Beta Partner Offer</div>
            <h3 className="text-3xl font-black text-white mb-4 italic">FREE for Limited period</h3>
            <p className="text-slate-400 leading-relaxed font-light">All plans are currently 100% free during our early access launch. Lock in your spot today and help us shape the future of cart recovery.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/favicon.png" alt="Logo" width={32} height={32} />
              <span className="text-2xl font-black text-white tracking-tighter uppercase">BoostACart</span>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed">Recovering lost ecommerce sales through intelligent add-to-cart capture and automated follow-ups.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 italic">Company</h4>
            <ul className="space-y-4">
              {["About", "Tools", "Blog", "Contact"].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-white transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 italic">Legal</h4>
            <ul className="space-y-4">
              {["Privacy", "Terms", "Refunds", "Shopify Apps"].map(item => (
                <li key={item}>
                  <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">© 2026 BoostACart Hub. Built for growth.</p>
          <div className="flex gap-6">
            <Link href="/" className="text-slate-600 hover:text-white transition-colors"><TrendingUp className="w-5 h-5" /></Link>
            <Link href="/" className="text-slate-600 hover:text-white transition-colors"><Zap className="w-5 h-5" /></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
