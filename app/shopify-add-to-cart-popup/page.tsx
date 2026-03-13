import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, MousePointer2, Target, BarChart, ChevronRight } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Shopify Add to Cart Popup: Capture Leads Before Checkout",
  description: "Why wait for checkout? Implement a high-converting Shopify Add to Cart popup to capture email and phone numbers instantly. Recover 30% more lost sales.",
  alternates: { canonical: "https://boostacart.com/shopify-add-to-cart-popup" },
  openGraph: {
    title: "Shopify Add to Cart Popup: Capture Leads Before Checkout",
    description: "Why wait for checkout? Implement a high-converting Shopify Add to Cart popup to capture email and phone numbers instantly. Recover 30% more lost sales.",
    url: "https://boostacart.com/shopify-add-to-cart-popup",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function ShopifyAddToCartPopup() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is an Add to Cart popup?", "acceptedAnswer": { "@type": "Answer", "text": "An Add to Cart popup is a lead capture modal that appears when a user clicks the 'Add to Cart' button on a product page. It allows store owners to collect email or phone data immediately, before the user ever reaches the checkout stage." } },
      { "@type": "Question", "name": "Does an Add to Cart popup lower conversion rates?", "acceptedAnswer": { "@type": "Answer", "text": "When implemented correctly with a high-trust design, it actually increases recovery ROI. While it adds a minor step, the ability to recover 10x more shoppers far outweighs the negligible impact on initial checkout start rates." } },
      { "@type": "Question", "name": "Is BoostACart's Add to Cart popup customizable?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can customize the colors, text, and fields of the BoostACart popup to perfectly match your Shopify theme and brand guidelines." } }
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
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider">The Pre-Checkout Edge</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
             The Ultimate <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Shopify Add to Cart</span> Popup
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Ninety-five percent of your shoppers who add to cart will never start your checkout process. Don't let them walk away. Capture their data at the moment of peak excitement with a high-trust pre-checkout popup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-xl">Get Started for Free</Link>
            <Link href="/shopify-cart-recovery" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">How It Works</Link>
          </div>
        </div>

        {/* Core Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0b102b]/60 border border-white/5 rounded-3xl space-y-4">
                <MousePointer2 className="w-10 h-10 text-cyan-400"/>
                <h3 className="text-xl font-bold text-white">Capture Intent Faster</h3>
                <p className="text-sm text-indigo-100/60 leading-relaxed">By capturing details the moment they click the button, you secure the lead before distraction or friction can set in.</p>
            </div>
            <div className="p-8 bg-[#0b102b]/60 border border-white/5 rounded-3xl space-y-4">
                <Target className="w-10 h-10 text-cyan-400"/>
                <h3 className="text-xl font-bold text-white">10x Your Recovery List</h3>
                <p className="text-sm text-indigo-100/60 leading-relaxed">Legacy apps miss shoppers who don't touch the checkout. BoostACart captures every single high-intent visitor.</p>
            </div>
            <div className="p-8 bg-[#0b102b]/60 border border-white/5 rounded-3xl space-y-4">
                <BarChart className="w-10 h-10 text-cyan-400"/>
                <h3 className="text-xl font-bold text-white">Direct-to-Cart Links</h3>
                <p className="text-sm text-indigo-100/60 leading-relaxed">Our recovery messages take users back to their exact cart, pre-filled and ready for one-click payment.</p>
            </div>
        </div>

        {/* The Evolution section */}
        <section className="bg-gradient-to-br from-[#0b102b] to-transparent border border-white/5 rounded-[3.5rem] p-10 md:p-20 space-y-12">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white`}>The Evolution of Lead Capture</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-6">
                    <p>
                        In the early days of Shopify, you waited for shoppers to reach "Step 1" of your checkout to capture an email. Then came exit-intent popups. Both were improvements, but both were reactive.
                    </p>
                    <p>
                        The <Link href="/" className="text-cyan-400 font-bold underline decoration-white/20">Shopify Add to Cart popup</Link> is <span className="text-white font-black italic">proactive.</span> It treats the 'Add to Cart' click as the start of the conversion, not just a precursor. By acknowledging this high-intent action with a simple, high-trust data request, you bridge the gap between "browsing" and "buying" instantly.
                    </p>
                </div>
                <div className="bg-[#04091A] border border-white/10 rounded-[2rem] p-8 space-y-6">
                    <h4 className="font-bold text-white">Why it converts:</h4>
                    <ul className="space-y-4">
                        {[
                            "Native feel that matches your theme",
                            "Fast, asynchronous script loading",
                            "One-tap SMS and WhatsApp opt-ins",
                            "Privacy-first consent framework",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-indigo-100/60 items-center"><CheckCircle className="text-cyan-400 w-4 h-4 shrink-0"/> {item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* Implementation Guide */}
        <section className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>Setup in 90 Seconds</h2>
                <p className="text-indigo-100/60 max-w-2xl mx-auto">No coding. No complex theme modifications. No headache.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
                {[
                    { title: "Connect", desc: "Install the BoostACart app from the Shopify App Store and connect your account." },
                    { title: "Customize", desc: "Design your popup modal to match your store's colors, fonts, and brand voice." },
                    { title: "Activate", desc: "Turn it on and start capturing 10x more leads from your high-intent shoppers." },
                ].map((step, i) => (
                    <div key={i} className="p-10 bg-[#0b102b] space-y-4 text-center">
                        <div className="text-4xl font-black text-white/5 italic">STEP 0{i+1}</div>
                        <h4 className="text-xl font-bold text-white">{step.title}</h4>
                        <p className="text-sm text-indigo-100/50 leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-7xl font-bold text-white leading-tight`}>
               Stop Guessing, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Start Capturing</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
               Join the high-growth stores using the most advanced Add to Cart popup for Shopify. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Deploy Now <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Pricing Plans</Link>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>ATC Popup FAQ</h2>
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
