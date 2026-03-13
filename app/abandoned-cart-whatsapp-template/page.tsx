import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, MessageCircle, MessageSquare, Zap, Clock, CheckCircle, Smartphone, Globe, BarChart } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Shopify Abandoned Cart WhatsApp Templates That Actually Work",
  description: "Download 10 high-converting WhatsApp abandoned cart templates. 90% open rates. See how to automate WhatsApp recovery for Shopify with BoostACart.",
  alternates: { canonical: "https://boostacart.com/abandoned-cart-whatsapp-template" },
  openGraph: {
    title: "Shopify Abandoned Cart WhatsApp Templates That Actually Work",
    description: "Download 10 high-converting WhatsApp abandoned cart templates. 90% open rates. See how to automate WhatsApp recovery for Shopify with BoostACart.",
    url: "https://boostacart.com/abandoned-cart-whatsapp-template",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function AbandonedCartWhatsAppTemplate() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why use WhatsApp for cart recovery?", "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp sees 90%+ open rates and allows for a two-way, asynchronous conversation with shoppers. It is significantly more personal and high-trust than email, leading to 3-4x higher recovery rates in many regions." } },
      { "@type": "Question", "name": "Can I automate WhatsApp abandoned cart messages?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. BoostACart uses the WhatsApp Business API to trigger automated, personalized messages the moment a user abandons their cart after clicking 'Add to Cart'." } },
      { "@type": "Question", "name": "Do I need a WhatsApp Business number?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for professional automation you need a verified WhatsApp Business API account. BoostACart helps streamline this process so you can start sending recovery messages in minutes." } }
    ]
  };

  const templates = [
    {
      title: "The Personalized Concierge",
      timing: "45 Minutes After Abandonment",
      body: "Hey {name}! 👋 It's {founder_name} from {store_name}. I saw you were looking at the {product} earlier. Did you have any questions I can answer for you? \n\nYour cart is safe here if you want to take another look: {link}",
      label: "highest trust",
      color: "emerald"
    },
    {
      title: "The Stock Alert",
      timing: "6 Hours After Abandonment",
      body: "Quick update for {name}! ⚡ Our {product} is currently trending and we're down to our last few units. We've saved yours for now, but we'll have to release it soon. \n\nSecure your order here: {link}",
      label: "high urgency",
      color: "rose"
    },
    {
      title: "The Exclusive WhatsApp Discount",
      timing: "24 Hours After Abandonment",
      body: "Hi {name}! Since you're on our WhatsApp VIP list, I wanted to offer you an exclusive 10% discount to help you finish your order for {product}. 🎁\n\nUse code WHATSAPP10 at checkout: {link}",
      label: "vip incentive",
      color: "cyan"
    },
    {
       title: "The 'Found This For You' Hook",
       timing: "2 Hours After Abandonment",
       body: "Hey {name}! I thought you might find this helpful—here is a quick video of {product} in action. Check it out, and your cart is still ready when you are: {link}",
       label: "rich media",
       color: "indigo"
    }
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
            <Link href="/abandoned-cart-recovery" className="hover:text-indigo-300">Recovery</Link>
          </nav>
          <span className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold uppercase tracking-wider">The Future of Recovery</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
             WhatsApp <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Abandoned Cart Templates</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            WhatsApp is the most intimate and effective recovery channel on the planet. Discover the exact templates used by 8-figure Shopify brands to recover 30%+ of their lost sales via conversational marketing.
          </p>
        </div>

        {/* Why WhatsApp Section */}
        <section className="bg-[#0b102b]/60 border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-12">
            <div className="text-center space-y-4">
                <h2 className={`${syne.className} text-3xl font-bold text-white`}>Why WhatsApp Beats Email Every Time</h2>
                <p className="text-indigo-100/60 max-w-2xl mx-auto">Standard email marketing is loud and ignored. WhatsApp is conversational and essential.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                   <div className="text-4xl font-black text-emerald-400">90%+</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-indigo-300/50">Average Open Rate</div>
                </div>
                <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                   <div className="text-4xl font-black text-emerald-400">45%+</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-indigo-300/50">Average Click Rate</div>
                </div>
                <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                   <div className="text-4xl font-black text-emerald-400">3x</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-indigo-300/50">Higher ROI than SMS</div>
                </div>
            </div>
            <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-4 pt-4">
                <p>WhatsApp's native interface allows for interactive buttons, images, and quick replies, making it the most engaging recovery channel. Because it's a two-way street, shoppers can ask questions, solve objections, and feel like they are talking to a real human — not a bot.</p>
            </div>
        </section>

        {/* Template Showcase */}
        <section className="space-y-10">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white text-center`}>The WhatsApp Library</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {templates.map((t, i) => (
                    <div key={i} className={`group bg-[#0b102b]/40 border border-${t.color}-500/10 hover:border-${t.color}-500/30 rounded-3xl p-8 space-y-6 transition-all relative overflow-hidden`}>
                        <div className="flex justify-between items-start relative z-10">
                            <h3 className="text-xl font-bold text-white">{t.title}</h3>
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-${t.color}-500/20 text-${t.color}-400 rounded-md border border-${t.color}-500/20`}>{t.label}</span>
                        </div>
                        <div className="bg-[#04091A] border border-white/5 rounded-2xl p-6 font-mono text-sm leading-relaxed text-indigo-100/70 relative z-10">
                             <div className="absolute top-2 right-4 text-[10px] text-white/20 font-bold uppercase tracking-widest">WhatsApp UI</div>
                             {t.body}
                        </div>
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="flex items-center gap-2 text-xs text-indigo-100/40">
                                <Clock className="w-4 h-4"/> Timing: <span className={`text-${t.color}-400`}>{t.timing}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* The Power of Conversational Marketing */}
        <section className="bg-gradient-to-br from-[#0b102b] to-transparent border border-white/5 rounded-[3rem] p-8 md:p-16 space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className={`${syne.className} text-3xl font-bold text-white`}>Conversational Recovery = Unlimited Scale</h2>
                    <p className="text-lg text-indigo-100/70 leading-relaxed">
                        WhatsApp isn't just about sending a one-off text. It's about opening a line of communication. When you use <Link href="/whatsapp-cart-recovery-tool" className="text-emerald-400 font-bold hover:underline">BoostACart's WhatsApp engine</Link>, you are not just recovering a cart — you are building a customer relationship.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Rich Media Support (Images/Video/PDF)",
                            "Interactive Quick-Reply Buttons",
                            "Asynchronous Two-Way Chat",
                            "Verified Business Profile Trust",
                            "Automatic Language Localization",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-indigo-100/60 items-start font-medium"><CheckCircle className="text-emerald-400 w-5 h-5 shrink-0"/> {item}</li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[100px]"></div>
                    <div className="bg-[#0b102b] border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl relative">
                        <MessageCircle className="w-12 h-12 text-emerald-400 mx-auto"/>
                        <h4 className="text-xl font-bold text-white text-center italic">"Recovering 37% of carts on WhatsApp since launch."</h4>
                        <div className="pt-4 border-t border-white/5 text-center">
                            <span className="text-indigo-400 text-sm font-bold">— Liam K., Growth @ UrbanStyles</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Global CTA */}
        <section className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-transparent pointer-events-none">
            <div className="absolute -top-10 right-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-10 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px]"></div>
          </div>
          <h2 className={`${syne.className} text-4xl md:text-6xl font-bold text-white leading-tight`}>
            Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WhatsApp ROI</span>
          </h2>
          <p className="text-xl text-indigo-200/60 max-w-2xl mx-auto font-light leading-relaxed">
            Stop leaving your most valuable customers on read. Switch to the only Shopify app built for native, automated WhatsApp recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Start Recovering for Free <Zap className="w-5 h-5 fill-black"/></Link>
            <Link href="/abandoned-cart-sms-template" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">Common SMS Templates</Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>WhatsApp Recovery FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-emerald-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
