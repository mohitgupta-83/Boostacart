import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, ShoppingCart, Target, BarChart, ChevronRight } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Shopify Cart Recovery: The Ultimate Guide for 2025",
  description: "Master Shopify cart recovery. Learn how to recover 30% of your lost sales using automated WhatsApp, SMS, and Email flows triggered at Add-to-Cart.",
  alternates: { canonical: "https://boostacart.com/shopify-cart-recovery" },
  openGraph: {
    title: "Shopify Cart Recovery: The Ultimate Guide for 2025",
    description: "Master Shopify cart recovery. Learn how to recover 30% of your lost sales using automated WhatsApp, SMS, and Email flows triggered at Add-to-Cart.",
    url: "https://boostacart.com/shopify-cart-recovery",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function ShopifyCartRecovery() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Shopify cart recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Shopify cart recovery is the process of re-engaging customers who added items to their shopping cart but left without completing the purchase. This is done via automated sequences of messages (Email, SMS, WhatsApp) designed to bring them back to finish the transaction." } },
      { "@type": "Question", "name": "How do I set up cart recovery on Shopify?", "acceptedAnswer": { "@type": "Answer", "text": "Basic recovery can be enabled in Shopify's admin settings for checkout-step collection. For more advanced recovery (Add-to-Cart capture), you need an app like BoostACart which automates the capture and follow-up process across multiple channels." } },
      { "@type": "Question", "name": "What is a good Shopify cart recovery rate?", "acceptedAnswer": { "@type": "Answer", "text": "A standard recovery rate is between 3-7%. High-performance stores using multi-channel recovery and pre-checkout capture often see recovery rates of 15% to 35%." } }
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
            <Link href="/guides" className="hover:text-indigo-300">Guides</Link>
          </nav>
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider">Pillar Guide 2025</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Shopify Cart Recovery</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Ninety-five percent of cart recovery data is captured too late. Discover how the world's fastest-growing Shopify brands use pre-checkout capture and automated WhatsApp sequences to reclaim millions in lost revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-xl">Start Your Recovery Engine</Link>
            <Link href="/abandoned-cart-statistics" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Statistics</Link>
          </div>
        </div>

        {/* The Problem Section */}
        <section className="bg-[#0b102b]/60 border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-8">
            <h2 className={`${syne.className} text-3xl font-bold text-white`}>The Leaky Bucket: Why Shopify Stores Lose 70% of Sales</h2>
            <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-4">
                <p>
                    Every Shopify store owner knows the pain of seeing "Abandoned Checkouts" in their dashboard. But what the dashboard doesn't show you is the <span className="text-white font-bold">Abandoned Carts</span> — the people who added to cart but never even reached the checkout page.
                </p>
                <div className="p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl flex items-center gap-6 my-8">
                    <div className="text-5xl font-black text-cyan-400">10x</div>
                    <div className="text-sm text-indigo-200/60">More shoppers abandon before checkout than during it. If you only recover checkouts, you are missing 90% of your potential revenue.</div>
                </div>
                <p>
                    Effective <Link href="/abandoned-cart-recovery" className="text-cyan-400 font-bold hover:underline">Shopify cart recovery</Link> requires moving your data collection further up the funnel. By capturing email and phone at the <span className="text-white font-bold italic underline underline-offset-4 decoration-fuchsia-500">Add-to-Cart moment</span>, you transform your abandoned cart strategy from a minor cleanup operation into a primary revenue driver.
                </p>
            </div>
        </section>

        {/* Recovery Strategy Grid */}
        <section className="space-y-12">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white text-center`}>The 3 Pillars of Omnichannel Recovery</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Native WhatsApp", desc: "90% Open Rates. Conversational, two-way recovery that builds massive brand trust.", icon: <Smartphone className="w-8 h-8"/>, accent: "emerald" },
                    { title: "High-Priority SMS", desc: "98% Open Rates. Instant, urgent, and direct. Perfect for stock-out warnings.", icon: <Zap className="w-8 h-8"/>, accent: "amber" },
                    { title: "Behavioral Email", desc: "30% Open Rates. High-detail, rich media follow-ups for long-term re-engagement.", icon: <Shield className="w-8 h-8"/>, accent: "indigo" },
                ].map((item, i) => (
                    <div key={i} className={`p-10 bg-[#0b102b] border border-white/5 rounded-[3rem] space-y-6 text-center hover:border-${item.accent}-500/30 transition-all`}>
                        <div className={`w-16 h-16 rounded-full bg-${item.accent}-500/10 border border-${item.accent}-500/20 flex items-center justify-center text-${item.accent}-400 mx-auto`}>{item.icon}</div>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <p className="text-sm text-indigo-100/50 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-7xl font-bold text-white leading-tight`}>
               Build A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-shadow-xl">Revenue Engine</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
               Join 5,000+ Shopify brands using the world's most advanced cart recovery system. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Deploy BoostACart Now <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View ROI Plans</Link>
            </div>
        </div>

        {/* Internal Hub Links */}
        <section className="border-t border-white/5 pt-10">
          <h2 className={`${syne.className} text-2xl font-bold text-white mb-6 text-center`}>Advanced Industry Guides</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Dropshipping", href: "/cart-recovery-for-dropshipping" },
              { title: "High-Ticket", href: "/cart-recovery-for-high-ticket-stores" },
              { title: "Statistics", href: "/abandoned-cart-statistics" },
              { title: "SMS Templates", href: "/abandoned-cart-sms-template" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="p-4 bg-[#0b102b]/40 border border-white/5 rounded-xl hover:border-cyan-500/30 hover:bg-[#0b102b] transition-all text-indigo-200 hover:text-cyan-400 text-sm font-medium flex items-center justify-center gap-2 text-center">
                 {link.title} <ArrowRight className="w-4 h-4"/>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Shopify Recovery FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-cyan-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
