import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, BarChart, ChevronRight, ShoppingCart, Info, TrendingUp } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "10 Proven Ways to Reduce Cart Abandonment on Shopify (2025)",
  description: "Learn how to reduce cart abandonment on your Shopify store. From checkout optimization to pre-checkout lead capture, discover strategies to boost ROI by 25%.",
  alternates: { canonical: "https://boostacart.com/reduce-cart-abandonment" },
  openGraph: {
    title: "10 Proven Ways to Reduce Cart Abandonment on Shopify (2025)",
    description: "Learn how to reduce cart abandonment on your Shopify store. From checkout optimization to pre-checkout lead capture, discover strategies to boost ROI by 25%.",
    url: "https://boostacart.com/reduce-cart-abandonment",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function ReduceCartAbandonment() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the fastest way to reduce cart abandonment?", "acceptedAnswer": { "@type": "Answer", "text": "The fastest way to reduce cart abandonment impact is to implement pre-checkout lead capture. By collecting email/phone at the 'Add to Cart' moment, you can recover shoppers who never even reach your checkout page." } },
      { "@type": "Question", "name": "Should I offer free shipping to reduce abandonment?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Unexpected shipping costs are the #1 reason for abandonment. Offering free shipping or clear shipping thresholds significantly increases conversion rates." } },
      { "@type": "Question", "name": "Does guest checkout help reduce abandonment?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Forcing shoppers to create an account is the #2 reason they leave. Providing a fast, frictionless guest checkout is essential for modern ecommerce." } }
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
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider">Conversion Strategy</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text shadow-2xl">Reduce Cart Abandonment</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Improving your cart abandonment rate by just 5% can result in a 20%+ increase in yearly revenue. Discover the 10 data-backed strategies to keep your shoppers moving toward the finish line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-xl">Start Recovering Now</Link>
            <Link href="/abandoned-cart-statistics" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">View 2025 Stats <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>

        {/* The Strategy List */}
        <section className="space-y-12">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white`}>10 Ways to Stop the Bleeding</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: "Implement Pre-Checkout Capture", desc: "Collect data before they reach checkout. This is the only way to recover the 70% of abandoners who leave early.", accent: "cyan" },
                    { title: "Transparent Shipping Costs", desc: "Display shipping fees on the product page or use a shipping calculator early in the funnel.", accent: "indigo" },
                    { title: "Enable One-Click Guest Checkout", desc: "Don't force account creation. Let them buy fast and register after they've purchased.", accent: "fuchsia" },
                    { title: "Optimize for Mobile Speed", desc: "If your cart takes more than 3 seconds to load on mobile, you've already lost the sale.", accent: "emerald" },
                    { title: "Use High-Trust Social Proof", desc: "Display star ratings and 'Secure Checkout' badges precisely at the Add-to-Cart and Checkout buttons.", accent: "amber" },
                    { title: "Offer Multiple Payment Methods", desc: "Apple Pay, Google Pay, and Shop Pay can reduce abandonment by up to 18%.", accent: "rose" },
                    { title: "Implement Exit-Intent Modals", desc: "Use a non-intrusive modal to offer a final incentive before they close the tab.", accent: "violet" },
                    { title: "Send Multi-Channel Sequences", desc: "Don't just email. Use WhatsApp and SMS to reach them where they are most active.", accent: "sky" },
                    { title: "Use Progress Bars in Checkout", desc: "Let shoppers know exactly how many steps are left in the process to reduce cognitive load.", accent: "lime" },
                    { title: "Optimize Your Product Descriptions", desc: "Clear, benefit-driven copy reduces last-minute 'buyers remorse' before the click.", accent: "cyan" },
                ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-8 bg-[#0b102b]/60 border border-white/5 rounded-3xl hover:border-white/10 transition-all">
                        <div className={`w-12 h-12 rounded-2xl bg-${item.accent}-500/10 border border-${item.accent}-500/20 flex items-center justify-center text-${item.accent}-400 font-black text-xl flex-shrink-0`}>{i+1}</div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-indigo-100/60 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Deep Dive on Rule #1 */}
        <section className="bg-gradient-to-br from-[#0b102b] to-transparent border border-white/5 rounded-[3.5rem] p-10 md:p-20 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]"></div>
            <div className="flex items-center gap-4 text-cyan-400">
                <Zap className="w-8 h-8 fill-cyan-400"/>
                <span className="font-bold uppercase tracking-widest text-sm">Most Impactful Strategy</span>
            </div>
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white`}>The Pre-Checkout Revoluton</h2>
            <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-6">
                <p>
                    For years, ecommerce was taught that abandoned cart recovery starts at the checkout. But modern data proves this is too late. <Link href="/shopify-cart-recovery" className="text-cyan-400 font-bold hover:underline decoration-white/20">70% of shoppers who add to cart never even see your checkout page.</Link>
                </p>
                <p>
                    By moving your lead capture up to the <span className="text-white font-black underline decoration-fuchsia-500">Add-to-Cart click</span>, you shift your capture rate from 5% to nearly 100% of high-intent shoppers. This strategy alone can double your monthly recovered revenue overnight without touching any other part of your store.
                </p>
                <div className="flex gap-4 pt-4">
                   <Link href="/" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">How BoostACart Does It <ChevronRight className="w-4 h-4"/></Link>
                </div>
            </div>
        </section>

        {/* Industry specific advice */}
        <section className="space-y-8">
            <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Industry-Specific Shortcuts</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { name: "Apparel & Fashion", tip: "Highlight easy returns and size guides to reduce decision anxiety during the cart phase." },
                    { name: "Gadgets & Electronics", tip: "Emphasize warranties and technical support availability in your recovery messages." },
                    { name: "Home & Professional", tip: "Use multi-channel WhatsApp recovery to answer complex questions about high-ticket items." },
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-[#0b102b]/40 border border-white/5 rounded-3xl text-center space-y-4">
                        <TrendingUp className="w-8 h-8 text-indigo-400 mx-auto opacity-50"/>
                        <h4 className="font-bold text-white">{item.name}</h4>
                        <p className="text-sm text-indigo-100/50 leading-relaxed">{item.tip}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-7xl font-bold text-white leading-tight`}>
               Seal Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-shadow-xl">Leaky Funnel</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
                Applying these 10 tips is great. Implementing the right tool is better. Join thousands of brands using BoostACart to stop abandoned carts at the source.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Start Your Unlimited Trial <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Pricing Plans</Link>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Reduce Abandonment FAQ</h2>
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
