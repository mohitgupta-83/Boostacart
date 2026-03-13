import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowLeft, CheckCircle, Smartphone, Zap, Shield, AlertTriangle, Monitor, MoveDownIcon } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "The Best Shopify Exit Intent Popup Alternative for 2025",
  description: "Standard Shopify exit intent popups are annoying and hurt conversion. Learn how to capture leads silently at Add-to-Cart and recover 30%+ more sales.",
  alternates: { canonical: "https://boostacart.com/shopify-exit-intent-popup" },
  openGraph: {
    title: "The Best Shopify Exit Intent Popup Alternative for 2025",
    description: "Standard Shopify exit intent popups are annoying and hurt conversion. Learn how to capture leads silently at Add-to-Cart and recover 30%+ more sales.",
    url: "https://boostacart.com/shopify-exit-intent-popup",
    type: "website",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function ShopifyExitIntent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is an exit-intent popup?", "acceptedAnswer": { "@type": "Answer", "text": "An exit-intent popup is a modal that appears on a website when a user's mouse movement indicates they are about to close the tab or navigate away. While effective for data capture, they often frustrate users." } },
      { "@type": "Question", "name": "Why are exit-intent popups failing in 2025?", "acceptedAnswer": { "@type": "Answer", "text": "Over-exposure (popup fatigue) and better mobile browsers have made exit-intent less effective. Users now expect seamless, non-intrusive experiences. Pre-checkout capture at the Add-to-Cart moment is the modern alternative." } },
      { "@type": "Question", "name": "Does BoostACart help with exit intent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Instead of waiting for a user to leave, BoostACart captures their details when they express the highest intent (adding an item to cart). This results in a higher quality lead list and better recovery rates." } }
    ]
  };

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 overflow-hidden ${outfit.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 pt-32 pb-24 space-y-20">

        {/* Hero */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold uppercase tracking-wider">Beyond the Popup</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            The Shopify <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Exit Intent Popup</span> Evolution
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Stop annoying your customers with "Wait! Don't Go" popups. Capture their email and phone numbers silently when they are most excited about your products — <span className="text-white font-bold italic underline underline-offset-4 decoration-amber-500/50">exactly</span> when they click Add to Cart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-xl">Start Capturing Leads</Link>
            <Link href="/best-shopify-cart-recovery-apps" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">Compare Best Apps <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>

        {/* The Problem with Exit Intent */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className={`${syne.className} text-3xl font-bold text-white`}>The Problem with Standard Exit Intent Popups</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
                <AlertTriangle className="w-6 h-6 text-rose-500 shrink-0"/>
                <div>
                  <h4 className="font-bold text-white mb-1">User Frustration</h4>
                  <p className="text-sm text-indigo-100/60 leading-relaxed">Popups that trigger on exit interrupt the user's flow and often feel like "digital desperation." This can hurt brand Trust and long-term LT V.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
                <Monitor className="w-6 h-6 text-rose-500 shrink-0"/>
                <div>
                  <h4 className="font-bold text-white mb-1">Mobile Inaccuracy</h4>
                  <p className="text-sm text-indigo-100/60 leading-relaxed">"Mouse escape" detection doesn't exist on mobile. Most mobile exit intent relies on "tab-switching" or "back-button" detection, which is wildly unreliable.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
                <Zap className="w-6 h-6 text-rose-500 shrink-0"/>
                <div>
                  <h4 className="font-bold text-white mb-1">Low Intent Leads</h4>
                  <p className="text-sm text-indigo-100/60 leading-relaxed">People often enter fake emails just to clear the screen or get a discount, leading to high bounce rates and low-quality recovery metrics.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0b102b]/80 border border-white/10 rounded-[3rem] p-12 text-center space-y-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[80px]"></div>
            <MoveDownIcon className="w-16 h-16 text-amber-500 mx-auto animate-bounce"/>
            <h3 className={`${syne.className} text-3xl font-bold text-white`}>Shift Your Strategy Up-Funnel</h3>
            <p className="text-indigo-100/60 leading-relaxed">
              By collecting details at the <span className="text-fuchsia-400 font-bold">Add-to-Cart moment</span>, you capture data from users who are already 8x more likely to buy than someone merely browsing your home page.
            </p>
            <div className="pt-6">
                <Link href="/shopify-cart-recovery" className="text-amber-400 font-bold flex items-center justify-center gap-2 hover:translate-x-1 transition-transform">How Pre-Checkout Capture Works <ArrowRight className="w-4 h-4"/></Link>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="space-y-8">
          <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white text-center`}>BoostACart vs standard Exit Intent Popups</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-[#0b102b]/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-6 font-bold text-white">Capability</th>
                  <th className="p-6 font-bold text-amber-400">BoostACart</th>
                  <th className="p-6 font-bold text-indigo-400/60">Legacy Popups</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-indigo-100/70">
                <tr>
                  <td className="p-6 font-semibold">Trigger Point</td>
                  <td className="p-6 bg-amber-500/5 flex items-center gap-2 text-white"><CheckCircle className="w-4 h-4 text-emerald-400"/> Add-to-Cart Click</td>
                  <td className="p-6 flex items-center gap-2"><Zap className="w-4 h-4 text-rose-500"/> Mouse behavior (Exit)</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">Mobile Accuracy</td>
                  <td className="p-6 bg-amber-500/5 flex items-center gap-2 text-white"><CheckCircle className="w-4 h-4 text-emerald-400"/> 100% Reliable</td>
                  <td className="p-6 flex items-center gap-2 text-rose-500/50"><AlertTriangle className="w-4 h-4"/> 15-20% Accurate</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">User Experience</td>
                  <td className="p-6 bg-amber-500/5 flex items-center gap-2 text-white"><CheckCircle className="w-4 h-4 text-emerald-400"/> Native / Low Friction</td>
                  <td className="p-6 flex items-center gap-2 text-rose-500/50"><AlertTriangle className="w-4 h-4"/> High Intrusiveness</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">Lead Quality</td>
                  <td className="p-6 bg-amber-500/5 flex items-center gap-2 text-white"><CheckCircle className="w-4 h-4 text-emerald-400"/> High Intent Buyers</td>
                  <td className="p-6">Low Intent Browsers</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">Recovery Methods</td>
                  <td className="p-6 bg-amber-500/5 text-white">WhatsApp, SMS, Email</td>
                  <td className="p-6">Email Only (usually)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Use Cases section */}
        <section className="bg-gradient-to-br from-indigo-900/20 to-transparent border border-white/5 rounded-[3rem] p-8 md:p-16 space-y-12">
            <div className="text-center space-y-4">
                <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white`}>Maximize Every Impression</h2>
                <p className="text-indigo-100/60 text-lg max-w-2xl mx-auto">BoostACart works alongside your current Shopify apps to plug the leaky holes in your funnel.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">For Dropshippers</h3>
                    <p className="text-indigo-100/70 leading-relaxed">High impulse purchases require fast, silent data collection. Don't let your TikTok ad spend bleed away because your popup didn't load fast enough or annoyed the user. <Link href="/cart-recovery-for-dropshipping" className="text-amber-400 hover:underline">See Dropshipping results.</Link></p>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">For High-Ticket Brands</h3>
                    <p className="text-indigo-100/70 leading-relaxed">Luxury consumers hate popups. Our pre-checkout engine captures their details with a professional, theme-matched modal that increases brand trust while securing the lead. <Link href="/cart-recovery-high-ticket-stores" className="text-amber-400 hover:underline">See High-Ticket Blueprint.</Link></p>
                </div>
            </div>
        </section>

        {/* ROI Calculator CTA */}
        <section className="bg-amber-500/10 border border-amber-500/20 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-4 text-center md:text-left">
             <h2 className={`${syne.className} text-3xl font-bold text-white`}>Calculate Your Recovery Potential</h2>
             <p className="text-indigo-100/60 max-w-md">See exactly how much revenue you're losing to poor exit intent and what you stand to gain with pre-checkout capture.</p>
           </div>
           <Link href="/tools/roas-calculator" className="px-10 py-5 bg-amber-500 text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.3)]">Launch Calculator</Link>
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
           <h2 className={`${syne.className} text-4xl md:text-6xl font-bold text-white leading-tight`}>
             Stop The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Digital Desperation</span>
           </h2>
           <p className="text-xl text-indigo-100/60 max-w-3xl mx-auto font-light">
             Switch to the non-intrusive, 100% reliable <Link href="/shopify-cart-recovery" className="text-amber-400 hover:underline">Shopify exit intent alternative</Link> used by high-performance Shopify stores. Start your free trial today.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Deploy BoostACart Now <Zap className="w-5 h-5 fill-black"/></Link>
             <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Pricing Plans</Link>
           </div>
        </div>

        {/* FAQ */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Exit Intent FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-amber-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
