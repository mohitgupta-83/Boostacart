import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, ShoppingBag, Eye, Heart, ListChecks } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Abandoned Cart Recovery for Fashion Brands: Recover 2x More Style Sales",
  description: "Fashion shoppers are window shoppers. Learn how to capture leads at the Add-to-Cart moment and use visual WhatsApp recovery to bring style-conscious buyers back.",
  alternates: { canonical: "https://boostacart.com/cart-recovery-for-fashion-brands" },
  openGraph: {
    title: "Abandoned Cart Recovery for Fashion Brands: Recover 2x More Style Sales",
    description: "Fashion shoppers are window shoppers. Learn how to capture leads at the Add-to-Cart moment and use visual WhatsApp recovery to bring style-conscious buyers back.",
    url: "https://boostacart.com/cart-recovery-for-fashion-brands",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function FashionRecovery() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why is cart abandonment so high in fashion?", "acceptedAnswer": { "@type": "Answer", "text": "Fashion has some of the highest abandonment rates (68%+) because many users use the cart as a 'wishlist' or 'waiting room' while they compare prices or wait for a paycheck. Effective recovery reminds them why they fell in love with the item in the first place." } },
      { "@type": "Question", "name": "Does BoostACart support visual product recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our WhatsApp and email sequences automatically pull in the product images of the items left in the cart, creating a visual and emotional reminder for the style-conscious shopper." } },
      { "@type": "Question", "name": "Should I use a discount for fashion recovery?", "acceptedAnswer": { "@type": "Answer", "text": "For fashion, 'Scarcity' (low stock alerts) and 'Social Proof' (user-generated content photos) often perform better than simple discounts, as they reinforce the value and desirability of the item." } }
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
          <span className="inline-block px-4 py-1 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-semibold uppercase tracking-wider">Style & Strategy</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
             Boost Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400">Fashion Store</span> Recovery
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            In fashion, the sale isn't dead until the shopper leaves your entire digital ecosystem. Re-engage the "wishlisters" and "windshoebrowsers" with high-visual, high-impact recovery sequences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Reclaim Your Sales <Heart className="w-5 h-5 fill-rose-500 text-rose-500"/></Link>
            <Link href="/abandoned-cart-email-template" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Visual Templates</Link>
          </div>
        </div>

        {/* The Wishlist Problem Section */}
        <section className="bg-gradient-to-br from-[#0b102b] to-transparent border border-white/5 rounded-[3.5rem] p-10 md:p-20 space-y-12 overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-500/5 blur-[120px]"></div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="space-y-8">
                     <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white`}>The "Cart as a Wishlist" Phenomenon</h2>
                     <p className="text-lg text-indigo-100/60 leading-relaxed">
                        Fashion shoppers use the 'Add to Cart' button as a way to bookmark items they like. If you only wait for the checkout to capture their details, you are missing 80% of your style-conscious leads.
                     </p>
                     <div className="p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl flex items-center gap-4">
                         <div className="text-4xl font-black text-rose-400">82%</div>
                         <div className="text-sm text-indigo-100/50">Of fashion shoppers add items to cart to "see the price with shipping" and then leave. Capture them instantly before they forget the look.</div>
                     </div>
                 </div>
                 <div className="bg-[#0b102b]/80 border border-white/10 rounded-[2.5rem] p-10 space-y-8 text-center shadow-2xl">
                     <Eye className="w-12 h-12 text-rose-400 mx-auto opacity-50"/>
                     <h3 className={`${syne.className} text-2xl font-bold text-white`}>The Visual Recovery Rule</h3>
                     <p className="text-indigo-100/70 leading-relaxed italic">
                        "Since switching to BoostACart's visual WhatsApp recovery, we've seen a 45% uplift in recovered revenue. Seeing the product image directly on their phone makes it impossible for them to ignore."
                     </p>
                     <div className="pt-6 border-t border-white/5">
                        <span className="text-rose-400 font-bold">— Sophia L., Creative Director @ ModeLux</span>
                     </div>
                 </div>
            </div>
        </section>

        {/* Strategies Section */}
        <section className="space-y-12">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white text-center`}>Fashion-First Recovery Strategies</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Dynamic Product Previews", desc: "Our sequences automatically inject the exact color/size variant the shopper added to cart.", icon: <ShoppingBag className="w-8 h-8"/> },
                    { title: "Limited Run Urgency", desc: "Automate messages that trigger when stock levels for an abandoned item drop below a certain threshold.", icon: <Zap className="w-8 h-8"/> },
                    { title: "Social Proof Stacking", desc: "Include user-generated photos of the product in your email and WhatsApp follow-ups.", icon: <CheckCircle className="w-8 h-8"/> },
                ].map((strategy, i) => (
                    <div key={i} className="p-8 bg-[#0b102b]/40 border border-white/5 rounded-3xl space-y-6 text-center hover:border-rose-400/20 transition-all group">
                         <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mx-auto group-hover:scale-110 transition-transform">{strategy.icon}</div>
                         <h4 className="text-xl font-bold text-white">{strategy.title}</h4>
                         <p className="text-sm text-indigo-100/50 leading-relaxed">{strategy.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-7xl font-bold text-white leading-tight`}>
               Make Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400 text shadow-2xl">Impression Count</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
               Don't let your style get lost in the noise. Join thousands of fashion stores using BoostACart to turn browsers into buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Scale Your Fashion Brand <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View ROI Plans</Link>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Fashion Recovery FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-rose-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
