import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, Sparkles, Smile, MessageCircle, BarChart } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Abandoned Cart Recovery for Beauty & Cosmetics Brands",
  description: "Beauty and cosmetics shoppers require high-trust recovery. Learn how to use WhatsApp and Email to answer questions and recover 30%+ of your abandoned beauty sales.",
  alternates: { canonical: "https://boostacart.com/cart-recovery-for-beauty-brands" },
  openGraph: {
    title: "Abandoned Cart Recovery for Beauty & Cosmetics Brands",
    description: "Beauty and cosmetics shoppers require high-trust recovery. Learn how to use WhatsApp and Email to answer questions and recover 30%+ of your abandoned beauty sales.",
    url: "https://boostacart.com/cart-recovery-for-beauty-brands",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function BeautyRecovery() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why do shoppers abandon beauty carts?", "acceptedAnswer": { "@type": "Answer", "text": "Common reasons include uncertainty about skin type compatibility, shades, or ingredients. High-impact recovery for beauty brands focuses on education and answering these lingering questions." } },
      { "@type": "Question", "name": "How can WhatsApp help beauty brands?", "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp allows for personalized skin consultations or ingredient walkthroughs directly in the recovery thread, turning a 'lost' shopper into a lifelong customer through superior service." } },
      { "@type": "Question", "name": "When should I send a beauty recovery message?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend the first follow-up within 45 minutes of the Add-to-Cart click, focusing on a helpful 'Can I answer any questions?' approach rather than just a hard sell." } }
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
          <span className="inline-block px-4 py-1 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-full text-fuchsia-400 text-sm font-semibold uppercase tracking-wider">Beauty & Trust</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
             Recover More <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-rose-400">Beauty & Cosmetic</span> Sales
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            In beauty, consumers are looking for transformation, not just a product. Build deep trust and answer the questions that stop people from checking out with high-touch recovery sequences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Reclaim Your Sales <Sparkles className="w-5 h-5 fill-fuchsia-400 text-fuchsia-400"/></Link>
            <Link href="/abandoned-cart-whatsapp-template" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Beauty Templates</Link>
          </div>
        </div>

        {/* Deep Dive on Beauty Abandonment */}
        <section className="bg-[#0b102b]/60 border border-white/5 rounded-[3rem] p-8 md:p-16 space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 blur-[100px]"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                     <h2 className={`${syne.className} text-3xl font-bold text-white`}>The Trust-Gap in Beauty E-commerce</h2>
                     <p className="text-lg text-indigo-100/60 leading-relaxed">
                        Cosmetics shoppers are some of the most researching-intensive users online. If they abandon your cart, it's often because they aren't 100% sure the product will work for them.
                     </p>
                     <div className="space-y-6">
                        {[
                            { title: "Shade Uncertainty", desc: "Use WhatsApp to send high-res swatches and skin-tone comparisons automatically." },
                            { title: "Ingredient Sensitivity", desc: "Automate responses that clarify ingredient lists if a user expresses concern." },
                            { title: "Application Questions", desc: "Send how-to videos directly to their phone 1 hour after they abandon the cart." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400 h-fit"><CheckCircle className="w-6 h-6"/></div>
                                <div>
                                    <h4 className="font-bold text-white">{item.title}</h4>
                                    <p className="text-sm text-indigo-100/50">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                 </div>
                 <div className="bg-[#04091A] border border-white/10 rounded-[4rem] p-12 text-center space-y-8 group transition-all hover:border-fuchsia-500/30 shadow-2xl">
                     <Smile className="w-16 h-16 text-fuchsia-400 mx-auto opacity-50"/>
                     <h3 className={`${syne.className} text-3xl font-extrabold text-white`}>The Consultation <br/>Effect</h3>
                     <p className="text-indigo-100/70 leading-relaxed text-lg italic">
                        "By using BoostACart to offer a quick 'Consultation via Text,' we converted 32% of our abandoned carts. People just needed a quick confirmation that our moisturizer worked with oily skin."
                     </p>
                     <div className="pt-6 border-t border-white/5">
                        <span className="text-fuchsia-400 font-bold">— Elena G., Founder of GlowEssence</span>
                     </div>
                 </div>
            </div>
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-7xl font-bold text-white leading-tight`}>
               Build A <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-rose-400 shadow-xl">Glowing Business</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
               Don't let your beauty brand be an afterthought. Join thousands of cosmetic stores using BoostACart to turn abandoned carts into lifelong fans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Scale Your Beauty Brand <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Growth Plans</Link>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Beauty Recovery FAQ</h2>
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
