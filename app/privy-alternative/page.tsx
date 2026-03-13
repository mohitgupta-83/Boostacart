import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, BarChart, ChevronRight, XCircle, Info } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "The #1 Privy Alternative for Shopify Cart Recovery",
  description: "Searching for a Privy alternative? BoostACart captures email and phone numbers at the Add-to-Cart moment, recovering 30%+ more revenue than standard popups.",
  alternates: { canonical: "https://boostacart.com/privy-alternative" },
  openGraph: {
    title: "The #1 Privy Alternative for Shopify Cart Recovery",
    description: "Searching for a Privy alternative? BoostACart captures email and phone numbers at the Add-to-Cart moment, recovering 30%+ more revenue than standard popups.",
    url: "https://boostacart.com/privy-alternative",
    type: "website",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function PrivyAlternative() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why is BoostACart a better Privy alternative?", "acceptedAnswer": { "@type": "Answer", "text": "While Privy relies on interruptive popups and exit intent, BoostACart captures lead data silently when shoppers click the 'Add to Cart' button. This leads to higher conversion and less customer frustration." } },
      { "@type": "Question", "name": "Can I use BoostACart alongside Privy?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many of our users keep Privy for their newsletter signups and use BoostACart specifically for their high-performance abandoned cart recovery engine to maximize revenue." } },
      { "@type": "Question", "name": "Does BoostACart offer WhatsApp recovery like Privy?", "acceptedAnswer": { "@type": "Answer", "text": "BoostACart offers a much deeper WhatsApp integration, allowing for automated, personalized recovery flows that outperform Privy's basic SMS and Email offerings." } }
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
            <Link href="/alternatives" className="hover:text-indigo-300">Alternatives</Link>
          </nav>
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider">Better ROI, Less Friction</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            A High-Performance <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Privy Alternative</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Privy is great for generic lead magnets — but when it comes to <span className="text-white font-bold underline decoration-cyan-500/50">recovering abandoned carts</span>, you need more than just popups. You need a pre-checkout engine that captures data at the point of maximum excitement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]">Switch to BoostACart</Link>
            <Link href="/pricing" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">View Pricing <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>

        {/* Comparison Section */}
        <section className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h2 className={`${syne.className} text-3xl font-bold text-white`}>Why Modern Stores are Switching from Privy</h2>
                <div className="space-y-6">
                    <div className="p-6 bg-[#0b102b]/60 border border-white/5 rounded-2xl space-y-2 relative group">
                        <div className="flex items-center gap-2 text-cyan-400 font-bold"><CheckCircle className="w-5 h-5"/> Higher Lead Capture Rate</div>
                        <p className="text-sm text-indigo-100/60 leading-relaxed">Most Privy users see a 3-5% signup rate. BoostACart captures details for 100% of the users who click your 'Add to Cart' button.</p>
                    </div>
                    <div className="p-6 bg-[#0b102b]/60 border border-white/5 rounded-2xl space-y-2 relative group">
                        <div className="flex items-center gap-2 text-cyan-400 font-bold"><CheckCircle className="w-5 h-5"/> Omnichannel Automations</div>
                        <p className="text-sm text-indigo-100/60 leading-relaxed">We automate your recovery sequences across WhatsApp, SMS, and Email in a single, unified flow built for conversion.</p>
                    </div>
                    <div className="p-6 bg-[#0b102b]/60 border border-white/5 rounded-2xl space-y-2 relative group">
                        <div className="flex items-center gap-2 text-cyan-400 font-bold"><CheckCircle className="w-5 h-5"/> Lower Customer Friction</div>
                        <p className="text-sm text-indigo-100/60 leading-relaxed">No annoying exit popups. No 'Spin to Win' wheels. Just a clean, high-trust interaction that protects your brand image.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#0b102b]/40 border border-white/5 rounded-[3rem] p-10 flex flex-col justify-center text-center space-y-8">
                <Zap className="w-16 h-16 text-cyan-400 mx-auto animate-pulse"/>
                <h3 className={`${syne.className} text-3xl font-bold text-white`}>The Pre-Checkout Advantage</h3>
                <p className="text-indigo-100/60 leading-relaxed text-lg italic">
                    "Since switching from Privy, our cart recovery revenue has jumped by 42%. The ability to capture details at the Add-to-Cart moment is a game changer for our ad ROI."
                </p>
                <div className="pt-4">
                  <span className="text-white font-bold">— Marcus T., Founder of GlowStore</span>
                </div>
            </div>
        </section>

        {/* Feature Grid Table */}
        <section className="space-y-8">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white text-center`}>BoostACart vs Privy</h2>
            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
                <div className="p-8 md:p-12 bg-[#0b102b] space-y-8">
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-white">BoostACart</span>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase rounded">Recommended</span>
                    </div>
                    <ul className="space-y-4">
                        {["Capture at Add-to-Cart moment", "Automated WhatsApp Recovery", "No-interrupt UX for shoppers", "ROI-based recovery dashboard", "Syncs with Klaviyo/Omnisend"].map((f, i) => (
                          <li key={i} className="flex gap-3 text-emerald-400 items-start"><CheckCircle className="w-5 h-5 shrink-0"/> <span className="text-indigo-100/70">{f}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="p-8 md:p-12 bg-[#04091A] space-y-8">
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-white opacity-50">Privy</span>
                    </div>
                    <ul className="space-y-4 opacity-70">
                        {["Capture only at checkout/popup", "Wait for users to reach Step 1", "Intrusive exit-intent triggers", "Higher monthly subscription costs", "Focus on general list growth"].map((f, i) => (
                          <li key={i} className="flex gap-3 text-rose-400 items-start"><XCircle className="w-5 h-5 shrink-0"/> <span className="text-indigo-100/60">{f}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* Implementation section */}
        <section className="bg-gradient-to-br from-[#0b102b] to-transparent border border-white/5 rounded-[3rem] p-8 md:p-16 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>Can I Use Both?</h2>
                <p className="text-lg text-indigo-100/70 leading-relaxed">
                   Absolutely. Many high-growth ecommerce brands use <Link href="/shopify-cart-recovery" className="text-cyan-400 font-bold hover:underline">Privy</Link> for top-of-funnel email collection (like their welcome discount popup) but use <span className="text-white font-bold">BoostACart</span> to power their checkout recovery engine. Our script won't interfere with your current apps, it simply adds a secondary, higher-intent funnel for your most active shoppers.
                </p>
                <div className="pt-6">
                    <Link href="/guides" className="text-sm text-indigo-400 hover:text-cyan-400 flex items-center justify-center gap-1">Read our Integration Guides <ChevronRight className="w-4 h-4"/></Link>
                </div>
            </div>
        </section>

        {/* Global CTA */}
        <section className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-transparent pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-[100px]"></div>
          </div>
          <h2 className={`${syne.className} text-4xl md:text-6xl font-bold text-white leading-tight`}>
            Ready to reclaim <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">your lost revenue?</span>
          </h2>
          <p className="text-xl text-indigo-200/60 max-w-2xl mx-auto font-light">
            Stop letting shoppers slip through the cracks. Activate the ultimate Privy alternative today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Start Your Unlimited Trial <Zap className="w-5 h-5 fill-black"/></Link>
            <Link href="/shopify-exit-intent-popup" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">Common Mistakes Guide</Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Privy vs BoostACart FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-cyan-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Hub Links */}
        <section className="border-t border-white/5 pt-10">
          <h2 className={`${syne.className} text-2xl font-bold text-white mb-6 text-center`}>More Comparison Choices</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Vs Klaviyo", href: "/boostacart-vs-klaviyo" },
              { title: "Vs Recart", href: "/boostacart-vs-recart" },
              { title: "Klaviyo Alt", href: "/klaviyo-alternative" },
              { title: "Omnisend Alt", href: "/omnisend-alternative" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="p-4 bg-[#0b102b]/40 border border-white/5 rounded-xl hover:border-cyan-500/30 hover:bg-[#0b102b] transition-all text-indigo-200 hover:text-cyan-400 text-sm font-medium flex items-center justify-center gap-2">
                 {link.title} <ArrowRight className="w-4 h-4"/>
              </Link>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
