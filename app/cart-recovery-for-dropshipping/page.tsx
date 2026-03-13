import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, BarChart3, TrendingUp, Globe, Box } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Abandoned Cart Recovery for Dropshipping: Reclaim Your Ad Spend",
  description: "Dropshipping stores live or die by their ad ROI. Learn how to recover 25%+ more abandoned carts and slash your customer acquisition costs.",
  alternates: { canonical: "https://boostacart.com/cart-recovery-for-dropshipping" },
  openGraph: {
    title: "Abandoned Cart Recovery for Dropshipping: Reclaim Your Ad Spend",
    description: "Dropshipping stores live or die by their ad ROI. Learn how to recover 25%+ more abandoned carts and slash your customer acquisition costs.",
    url: "https://boostacart.com/cart-recovery-for-dropshipping",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function DropshippingRecovery() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why is cart recovery critical for dropshipping?", "acceptedAnswer": { "@type": "Answer", "text": "Dropshipping margins are often razor-thin and rely on paid traffic (FB/TikTok ads). Recovering even 10% more carts can be the difference between a profitable campaign and a losing one by lowering your CPA." } },
      { "@type": "Question", "name": "Does BoostACart work with international dropshipping stores?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. BoostACart's multi-channel recovery works globally. WhatsApp is particularly effective in Europe, LatAm, and Asia where it is the primary communication tool." } },
      { "@type": "Question", "name": "Will it slow down my dropshipping store?", "acceptedAnswer": { "@type": "Answer", "text": "No. BoostACart uses a lightweight script that loads asynchronously, ensuring your product pages load instantly — critical for impulse purchases from social media ads." } }
    ]
  };

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
            <Link href="/shopify-cart-recovery" className="hover:text-indigo-300">Recovery</Link>
          </nav>
          <span className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold uppercase tracking-wider">Dropshipping Advantage</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            Recover Abandoned <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Dropshipping Sales</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Social media ads are expensive. Don't let your TikTok and Facebook ad spend bleed away. Capture shoppers at the Add-to-Cart moment and recover the impulse buyers who don't reach checkout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_30px_rgba(251,191,36,0.1)]">Slash Your Ad CPA <Zap className="w-5 h-5 fill-black"/></Link>
            <Link href="/best-shopify-cart-recovery-apps" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">Compare App ROI <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>

        {/* The ROI Multiplier Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <h2 className={`${syne.className} text-3xl font-bold text-white`}>The ROI Multiplier for Paid Traffic</h2>
                <div className="space-y-6">
                    <div className="flex gap-4 p-6 bg-[#0b102b]/60 border border-white/5 rounded-2xl items-start">
                        <TrendingUp className="w-6 h-6 text-amber-400 shrink-0"/>
                        <div>
                            <h4 className="font-bold text-white mb-1">Slash Your CPA</h4>
                            <p className="text-sm text-indigo-100/60 leading-relaxed">By recovering more sales from the same traffic, you effectively lower your Cost Per Acquisition (CPA) and increase your ROAS.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-[#0b102b]/60 border border-white/5 rounded-2xl items-start">
                        <Smartphone className="w-6 h-6 text-amber-400 shrink-0"/>
                        <div>
                            <h4 className="font-bold text-white mb-1">Mobile Impulse Focus</h4>
                            <p className="text-sm text-indigo-100/60 leading-relaxed">Most dropshipping traffic is mobile. BoostACart's WhatsApp and SMS flows are perfectly optimized for mobile shoppers.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-[#0b102b]/60 border border-white/5 rounded-2xl items-start">
                        <BarChart3 className="w-6 h-6 text-amber-400 shrink-0"/>
                        <div>
                            <h4 className="font-bold text-white mb-1">Real-Time Data</h4>
                            <p className="text-sm text-indigo-100/60 leading-relaxed">See exactly which products are being abandoned and recovered, allowing you to optimize your ad sets for winrate.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-[#0b102b] to-transparent border border-white/10 rounded-[4rem] p-12 md:p-16 text-center space-y-8 relative overflow-hidden group">
               <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <Box className="w-16 h-16 text-amber-400 mx-auto opacity-50"/>
               <h3 className={`${syne.className} text-3xl font-black text-white`}>The 30-Day <br/>Scalability Test</h3>
               <p className="text-indigo-100/60 leading-relaxed text-lg italic">
                  "We added BoostACart to our $50k/month dropshipping store. Within 30 days, we reclaimed $12,400 in sales that we previously would have lost entirely. Our Facebook ROAS jumped from 2.1 to 2.8 instantly."
               </p>
               <div className="pt-6 border-t border-white/5">
                   <Link href="/pricing" className="text-amber-400 font-bold flex items-center justify-center gap-2">View Dropshipping Plans <ArrowRight className="w-4 h-4"/></Link>
               </div>
            </div>
        </div>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-7xl font-bold text-white leading-tight`}>
               Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Wins Faster</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
               Don't let your hard-earned traffic go to waste. Join the high-performance dropshippers who use BoostACart to dominate their niche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Reclaim Your Sales Now <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/abandoned-cart-statistics" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Industry Stats</Link>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Dropshipping FAQ</h2>
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
