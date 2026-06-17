import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { LayoutGrid, ArrowRight, Shield, CheckCircle, Trophy } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://boostacart.com/case-studies"
  },
  title: "Shopify Ecommerce Case Studies & Success Stories",
  description: "Read real-world case studies detailing exactly how successful merchants deploy top-of-funnel cart recovery techniques to vastly improve ROI.",
};

export default function CaseStudiesHub() {
  const caseStudies = [
    {
      title: "Case Study: 37 Carts Recovered in 24 Hours",
      description: "A complete breakdown of the funnel, ad strategy, and precise pre-checkout capture timings deployed by a scaling merchant.",
      href: "/case-study-recovered-37-orders",
      tag: "Revenue Growth"
    },
    {
      title: "Pre-Checkout vs Post-Checkout Email Capture",
      description: "Data analysis proving that capturing users exactly when they click Add-to-Cart yields significantly higher volume than popup modals.",
      href: "/case-study-precheckout-email-capture",
      tag: "Conversion Physics"
    },
    {
      title: "Dropshipping Cart Recovery Setup",
      description: "How high-margin, high-volume dropshippers stop losing their TikTok ad margins to rapid abandonment.",
      href: "/dropshipping-cart-recovery-case-study",
      tag: "Niche Tactics"
    },
    {
      title: "WhatsApp Cart Recovery Case Study",
      description: "Analyzing the astoundingly high open rates of WhatsApp vs standard email recovery in a live ecommerce environment.",
      href: "/whatsapp-cart-recovery-case-study",
      tag: "Omnichannel"
    },
    {
      title: "Concierge Cart Recovery Case Study",
      description: "How a high-ticket store implemented concierge recovery to recover orders over $1,000.",
      href: "/case-study/cart-recovery",
      tag: "High-Ticket ROI"
    },
    {
      title: "BoostACart Performance Results",
      description: "Compiled data across 500+ Shopify stores demonstrating overall revenue growth, cart capture, and recovery statistics.",
      href: "/boostacart-results",
      tag: "Performance Study"
    },
    {
      title: "BoostACart Merchant Reviews",
      description: "In-depth reviews and detailed breakdown of results shared by independent merchants using BoostACart.",
      href: "/boostacart-reviews",
      tag: "Merchant Feedback"
    },
    {
      title: "BoostACart User Feedback Teardown",
      description: "A deep dive study on user experience, checkout flow sentiment, and customer feedback on pre-checkout modals.",
      href: "/boostacart-user-feedback",
      tag: "UX Teardown"
    },
    {
      title: "D2C Portfolio 25x ROI Case Study",
      description: "Read the in-depth case study on how a major D2C portfolio achieved a 25x ROI scaling their brand on Shopify.",
      href: "/case-study",
      tag: "25x ROI Study"
    }
  ];

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-emerald-500/30 overflow-hidden ${outfit.className}`}>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-32 pb-24">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link href="/tools" className="px-6 py-2 rounded-full border border-white/10 text-indigo-200/70 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all flex items-center gap-2">
                <LayoutGrid className="w-4 h-4" /> Tools Hub
            </Link>
            <span className="px-6 py-2 rounded-full border border-emerald-500/50 text-emerald-400 bg-emerald-500/10 flex items-center gap-2 font-semibold">
                <Trophy className="w-4 h-4" /> Real Case Studies
            </span>
        </div>

        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className={`${syne.className} text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6`}>
                Scale With Data
            </h1>
            <p className="text-indigo-100/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                We've compiled exact playbooks and tactical teardowns. Stop guessing how to patch your funnels and <Link href="/shopify-cart-recovery" className="text-emerald-400 underline hover:text-emerald-300">recover abandoned carts using BoostACart</Link>.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((study, i) => (
                <Link key={i} href={study.href} className="group block p-8 bg-[#0b102b]/50 backdrop-blur-md border border-white/5 rounded-3xl hover:border-emerald-500/30 hover:bg-[#0b102b] transition-all duration-300 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-colors pointer-events-none"></div>
                    
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-emerald-300 uppercase tracking-widest mb-6">
                        <Shield className="w-3 h-3"/> {study.tag}
                    </span>
                    
                    <h3 className={`${syne.className} text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors`}>
                        {study.title}
                    </h3>
                    
                    <p className="text-indigo-100/60 text-lg leading-relaxed mb-8">
                        {study.description}
                    </p>
                    
                    <div className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                        Read Blueprint <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                </Link>
            ))}
        </div>

        {/* Global Nav Integrations */}
        <section className="bg-gradient-to-r from-emerald-900/10 to-transparent border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Integrate Within Minutes</h2>
            <p className="text-indigo-100/60">Ready to build your own success story? Start the free setup process.</p>
          </div>
          <Link href="/pricing" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">Launch Now <CheckCircle className="w-5 h-5"/></Link>
        </section>

      </div>
      <Footer />
    </div>
  );
}
