import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { LayoutGrid, Shuffle, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://boostacart.com/alternatives"
  },
  title: "Shopify App Alternatives & Software Migrations (2025)",
  description: "Browse our directory of the best cart recovery alternatives. Stop overpaying for legacy tools and scale profitably.",
};

export default function AlternativesHub() {
  const alternatives = [
    {
      title: "Cartloop Alternative",
      description: "Why scale with human labor when you can dominate with AI? Stop losing 15% revenue share to live agents.",
      href: "/cartloop-alternative",
      original: "Cartloop",
      tag: "SMS Focus"
    },
    {
      title: "Klaviyo Alternative",
      description: "Break free from aggressive tiered pricing and delayed checkout capture. Capture pre-checkout intent instantly.",
      href: "/klaviyo-alternative",
      original: "Klaviyo",
      tag: "Email Focus"
    },
    {
      title: "Recart Alternative",
      description: "Pivot off declining Messenger metrics and intercept the user right on the product page.",
      href: "/recart-alternative",
      original: "Recart",
      tag: "Messenger Focus"
    },
    {
      title: "Attentive & Postscript Alternatives",
      description: "Compare SMS compliance costs and discover the power of international WhatsApp deployment.",
      href: "/best-shopify-cart-recovery-apps",
      original: "General SMS",
      tag: "Cost Analysis"
    },
    {
      title: "Privy Alternative",
      description: "Switch from generic popups to high-intent Add-to-Cart capture for a 10x larger lead list.",
      href: "/privy-alternative",
      original: "Privy",
      tag: "List Growth"
    },
    {
      title: "Omnisend Alternative",
      description: "A specialized recovery choice for stores that need massive ROI without the bloated CRM pricing.",
      href: "/omnisend-alternative",
      original: "Omnisend",
      tag: "Performance Focus"
    }
  ];

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-rose-500/30 overflow-hidden ${outfit.className}`}>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-32 pb-24">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link href="/tools" className="px-6 py-2 rounded-full border border-white/10 text-indigo-200/70 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-all flex items-center gap-2">
                <LayoutGrid className="w-4 h-4" /> Tools Hub
            </Link>
            <span className="px-6 py-2 rounded-full border border-rose-500/50 text-rose-400 bg-rose-500/10 flex items-center gap-2 font-semibold">
                <Shuffle className="w-4 h-4" /> Software Alternatives
            </span>
        </div>

        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className={`${syne.className} text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent mb-6`}>
                Software Alternatives
            </h1>
            <p className="text-indigo-100/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Discover modern, high-ROI replacements for bloated legacy cart recovery solutions. <Link href="/shopify-cart-recovery" className="text-rose-400 underline hover:text-rose-300">Recover abandoned carts using BoostACart</Link> today.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {alternatives.map((alt, i) => (
                <Link key={i} href={alt.href} className="group block p-8 bg-[#0b102b]/50 backdrop-blur-md border border-white/5 rounded-3xl hover:border-rose-500/30 hover:bg-[#0b102b] transition-all duration-300 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] group-hover:bg-rose-500/20 transition-colors pointer-events-none"></div>
                    
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-rose-300 uppercase tracking-widest mb-6">
                        <Shield className="w-3 h-3"/> {alt.tag}
                    </span>
                    
                    <h3 className={`${syne.className} text-3xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors`}>
                        {alt.title}
                    </h3>
                    <p className="text-rose-200/40 text-sm mb-6 font-semibold uppercase tracking-widest">Migrating from: {alt.original}</p>
                    
                    <p className="text-indigo-100/60 text-lg leading-relaxed mb-8">
                        {alt.description}
                    </p>
                    
                    <div className="flex items-center text-rose-400 font-semibold group-hover:translate-x-2 transition-transform">
                        Read Analysis <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                </Link>
            ))}
        </div>

        {/* Global Nav Integrations */}
        <section className="bg-gradient-to-r from-rose-900/10 to-transparent border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">View All Pricing</h2>
            <p className="text-indigo-100/60">Compare our simple flat rates to your current tool.</p>
          </div>
          <Link href="/pricing" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">View Pricing <CheckCircle className="w-5 h-5"/></Link>
        </section>

      </div>
      <Footer />
    </div>
  );
}
