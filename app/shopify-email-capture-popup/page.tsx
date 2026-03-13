import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Mail, Layout, Eye, MousePointer2, UserPlus } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Shopify Email Capture Popup: The 2025 Guide to Better Leads",
  description: "Stop using boring Shopify email capture popups. Discover how to collect 10x more leads with high-intent Add-to-Cart capture that shoppers actually love.",
  alternates: { canonical: "https://boostacart.com/shopify-email-capture-popup" },
  openGraph: {
    title: "Shopify Email Capture Popup: The 2025 Guide to Better Leads",
    description: "Stop using boring Shopify email capture popups. Discover how to collect 10x more leads with high-intent Add-to-Cart capture that shoppers actually love.",
    url: "https://boostacart.com/shopify-email-capture-popup",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function ShopifyEmailPopup() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the best Shopify email capture popup?", "acceptedAnswer": { "@type": "Answer", "text": "The 'best' popup depends on your goals. While exit-intent popups are common, Add-to-Cart capture popups (like BoostACart) provide much higher intent leads and significantly better recovery ROI." } },
      { "@type": "Question", "name": "How do I add an email capture popup to Shopify?", "acceptedAnswer": { "@type": "Answer", "text": "You can add a popup via a Shopify app. BoostACart offers a 2-minute installation that places a high-trust capture modal directly on your Add-to-Cart button for maximum efficiency." } },
      { "@type": "Question", "name": "Does an email popup hurt store speed?", "acceptedAnswer": { "@type": "Answer", "text": "Many legacy popup apps can slow down your site. BoostACart uses an optimized, asynchronous script that ensures zero impact on your Core Web Vitals and store load speed." } }
    ]
  };

  const types = [
    { title: "Standard Entry Popup", desc: "Triggers as soon as a user lands. High volume, but often high bounce and low intent.", icon: <UserPlus className="w-6 h-6"/>, color: "indigo" },
    { title: "Exit Intent Popup", desc: "Triggers when a user's mouse leaves the screen. Good for saving browsers, but mobile accuracy is low.", icon: <Eye className="w-6 h-6"/>, color: "fuchsia" },
    { title: "Add-to-Cart Capture", desc: "Triggers when a user expresses the highest possible intent. Captures 10x more actionable leads.", icon: <MousePointer2 className="w-6 h-6"/>, color: "cyan" },
    { title: "In-Line Forms", desc: "Static signup fields in your footer. Trustworthy but often ignored by active shoppers.", icon: <Layout className="w-6 h-6"/>, color: "emerald" },
  ];

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 overflow-hidden ${outfit.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 pt-32 pb-24 space-y-20">

        {/* Hero */}
        <div className="space-y-6">
          <nav className="flex items-center gap-2 text-sm text-indigo-400/60 mb-4">
            <Link href="/" className="hover:text-indigo-300">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-indigo-300">Guides</Link>
          </nav>
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider">Lead Generation Masterclass</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Shopify Email Capture</span> Strategies
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Forget "Spin to Win" wheels and intrusive entry popups. In 2025, high-converting stores use behavior-based email capture to build lists that actually buy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]">Start Capturing Today</Link>
            <Link href="/best-shopify-cart-recovery-apps" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">Best App Comparison</Link>
          </div>
        </div>

        {/* Feature Grid: Popup Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {types.map((type, i) => (
             <div key={i} className="bg-[#0b102b]/60 border border-white/5 rounded-3xl p-8 space-y-4 hover:border-white/10 transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-${type.color}-500/10 border border-${type.color}-500/20 flex items-center justify-center text-${type.color}-400 mx-auto`}>{type.icon}</div>
                <h3 className="font-bold text-white text-sm uppercase tracking-widest">{type.title}</h3>
                <p className="text-xs text-indigo-100/40 leading-relaxed">{type.desc}</p>
             </div>
          ))}
        </div>

        {/* The Capture Problem Section */}
        <section className="space-y-12">
            <div className="space-y-6">
                <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white`}>Why Your Current Popup is Leaving Money on the Table</h2>
                <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-4">
                    <p>
                        Most Shopify stores rely on a "10% Off Welcome" popup that fires 5 seconds after a user lands. While this builds your email list, it has two massive flaws: it captures low-intent browsers who just want a discount code, and it annoys the 70% of people who aren't ready to buy yet.
                    </p>
                    <p>
                        A <Link href="/shopify-cart-recovery" className="text-cyan-400 font-bold hover:underline">Shopify email capture popup</Link> that triggers at the <span className="text-white font-bold italic">Add-to-Cart moment</span> solves both. You only capture users who have already chosen a product. This results in a lead list with 5-10x higher purchase intent and virtually zero bounce rate in your recovery flows.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-[3rem] overflow-hidden border border-white/5">
                <div className="p-10 md:p-16 bg-[#0b102b]/80 space-y-6">
                    <h3 className="text-2xl font-bold text-white">The BoostACart Method</h3>
                    <ul className="space-y-4">
                        {["Capture at point of maximum intent", "Zero disruption to browsing experience", "Captures Email & Phone (WhatsApp)", "Directly linked to specific products", "10x higher quality recovery data"].map((f, i) => (
                          <li key={i} className="flex gap-3 text-emerald-400 items-start"><CheckCircle className="w-5 h-5 shrink-0"/> <span className="text-indigo-100/70">{f}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="p-10 md:p-16 bg-[#04091A] space-y-6 opacity-60">
                    <h3 className="text-2xl font-bold text-white">Legacy Entry/Exit Method</h3>
                    <ul className="space-y-4">
                        {["Triggers for low-intent browsers", "Interrupts the shopping flow", "High volume of low-value emails", "Subject to popup-blockers", "Mobile accuracy issues (exit intent)"].map((f, i) => (
                          <li key={i} className="flex gap-3 text-rose-400 items-start"><CheckCircle className="w-5 h-5 shrink-0 opacity-20"/> <span className="text-indigo-100/60">{f}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-7xl font-bold text-white leading-tight`}>
               Build A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Better List</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
               Don't just collect emails. Collect buyers. Switch to the high-intent Shopify capture tool that top 1% brands use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Deploy BoostACart Now <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View ROI Plans</Link>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Capture FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-indigo-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
