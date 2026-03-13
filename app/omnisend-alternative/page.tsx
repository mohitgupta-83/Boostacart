import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, BarChart, ChevronRight, XCircle, Mail, MessageSquare } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "The Best Omnisend Alternative for High-Conversion Cart Recovery",
  description: "Searching for an Omnisend alternative? BoostACart provides superior shopify cart recovery by capturing leads at Add-to-Cart and automating WhatsApp and SMS flows.",
  alternates: { canonical: "https://boostacart.com/omnisend-alternative" },
  openGraph: {
    title: "The Best Omnisend Alternative for High-Conversion Cart Recovery",
    description: "Searching for an Omnisend alternative? BoostACart provides superior shopify cart recovery by capturing leads at Add-to-Cart and automating WhatsApp and SMS flows.",
    url: "https://boostacart.com/omnisend-alternative",
    type: "website",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function OmnisendAlternative() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why choose BoostACart over Omnisend?", "acceptedAnswer": { "@type": "Answer", "text": "Omnisend is a broad email marketing suite. BoostACart is a specialized cart recovery engine. We capture 10x more leads by triggering at the 'Add to Cart' moment rather than waiting for checkout step 1." } },
      { "@type": "Question", "name": "Does BoostACart integrate with Omnisend?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most of our high-volume merchants keep Omnisend for their brand newsletters but use BoostACart to power their mission-critical abandoned cart recovery sequences for a higher ROI." } },
      { "@type": "Question", "name": "Is WhatsApp recovery better in BoostACart or Omnisend?", "acceptedAnswer": { "@type": "Answer", "text": "BoostACart focuses on native, conversational WhatsApp recovery which sees 90%+ open rates. Omnisend's primary focus remains on email, making their SMS/WhatsApp offerings secondary channels." } }
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
          <span className="inline-block px-4 py-1 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-full text-fuchsia-400 text-sm font-semibold uppercase tracking-wider">The Specialized Choice</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            A High-Velocity <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Omnisend Alternative</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Omnisend is built for general email marketing. BoostACart is built for one thing: <span className="text-white font-bold underline decoration-fuchsia-500/50">recovering your lost revenue.</span> Stop waiting for checkout and start capturing intent at the source.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.1)]">Start Your Free Trial</Link>
            <Link href="/best-shopify-cart-recovery-apps" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">Compare Best Apps <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>

        {/* The Difference Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
                <div className="space-y-4">
                    <h2 className={`${syne.className} text-3xl font-bold text-white`}>What Omnisend Missing</h2>
                    <p className="text-indigo-100/60 leading-relaxed text-lg">
                        Omnisend relies on standard Shopify checkout data. This means if a user adds a product to their cart but doesn't start the checkout process (70% of shoppers), Omnisends doesn't know they exist.
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400 h-fit"><XCircle className="w-6 h-6"/></div>
                        <div>
                            <h4 className="font-bold text-white">Delayed Capture</h4>
                            <p className="text-sm text-indigo-100/50">Omnisend waits for the shopper to reach the checkout step, missing the highest-intent window.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400 h-fit"><XCircle className="w-6 h-6"/></div>
                        <div>
                            <h4 className="font-bold text-white">Email-First Focus</h4>
                            <p className="text-sm text-indigo-100/50">Omnisend started as as email tool. Their SMS and WhatsApp delivery is secondary and often less conversational.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#0b102b]/80 border border-white/10 rounded-[3rem] p-10 md:p-16 space-y-8 text-center">
                    <Zap className="w-16 h-16 text-fuchsia-400 mx-auto"/>
                    <h3 className={`${syne.className} text-3xl font-bold text-white`}>The BoostACart Winner</h3>
                    <p className="text-indigo-100/70 leading-relaxed text-lg italic">
                        "We used Omnisend for 2 years. After adding BoostACart to handle our cart recovery, we recovered $4,200 in the first week alone. The Add-to-Cart capture is magic."
                    </p>
                    <div className="pt-6 border-t border-white/5">
                        <span className="text-indigo-400 font-bold">James R., E-com Manager @ ZenithWear</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Core Comparisons Table */}
        <section className="space-y-8">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white text-center`}>Omnisend vs BoostACart</h2>
            <div className="overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0b102b]/40">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5">
                            <th className="p-8 font-bold text-white text-lg">Feature Stack</th>
                            <th className="p-8 font-bold text-fuchsia-400 text-lg">BoostACart</th>
                            <th className="p-8 font-bold text-indigo-100/30 text-lg">Omnisend</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {[
                            { f: "Recovery Trigger", b: "Instant Add-to-Cart Click", o: "Checkout Start Only" },
                            { f: "Lead Volume", b: "10x More Captured Leads", o: "Restricted to Checkout" },
                            { f: "WhatsApp Channel", b: "Native, Two-Way Focus", o: "Basic Integration" },
                            { f: "Main Purpose", b: "Revenue Recovery Engine", o: "General Brand Marketing" },
                            { f: "Pricing Model", b: "ROI-Focused Growth Plans", o: "Per-Contact Tiered Sub" },
                        ].map((row, i) => (
                            <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="p-8 font-semibold text-white/80">{row.f}</td>
                                <td className="p-8 text-fuchsia-400 font-bold bg-fuchsia-500/[0.03]">{row.b}</td>
                                <td className="p-8 text-indigo-100/50">{row.o}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Better Together Section */}
        <section className="bg-gradient-to-br from-[#0b102b] to-transparent border border-white/5 rounded-[3rem] p-10 md:p-20 text-center space-y-10">
            <div className="flex justify-center -space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border-4 border-[#04091A] flex items-center justify-center"><Mail className="w-8 h-8 text-fuchsia-400"/></div>
                <div className="w-16 h-16 rounded-full bg-white/5 border-4 border-[#04091A] flex items-center justify-center"><MessageSquare className="w-8 h-8 text-indigo-400"/></div>
                <div className="w-16 h-16 rounded-full bg-white/5 border-4 border-[#04091A] flex items-center justify-center"><Zap className="w-8 h-8 text-cyan-400"/></div>
            </div>
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white`}>Keep Your Email, <br/>Upgrade Your Recovery</h2>
            <p className="text-xl text-indigo-100/70 max-w-3xl mx-auto leading-relaxed">
                You don't have to quit <Link href="/shopify-cart-recovery" className="text-fuchsia-400 font-bold hover:underline">Omnisend</Link> to win. Many stores keep their current email tool for loyalty and promo blasts, while letting <span className="text-white font-black italic">BoostACart</span> handle the high-intensity recovery work. We play well with others.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-fuchsia-400 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">See Compatibility Guide <ArrowRight className="w-4 h-4"/></Link>
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-6xl font-bold text-white leading-tight`}>
               Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400 text shadow-2xl">Shopify ROI</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
                Stop paying for features you don't use and start paying for revenue you recover. Activate the ultimate Omnisend alternative today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_50px_rgba(255,255,255,0.1)]">Claim Your Early Access <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View ROI Plans</Link>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Omnisend vs BoostACart FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-fuchsia-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
