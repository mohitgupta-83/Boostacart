import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, Smartphone, MessageSquare, Zap, Clock, CheckCircle, BarChart } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "10 Abandoned Cart SMS Templates That Convert in 3 Minutes",
  description: "Copy-paste these 10 high-converting abandoned cart SMS templates. 98% open rates. Recover sales instantly with proven text message sequences for Shopify.",
  alternates: { canonical: "https://boostacart.com/abandoned-cart-sms-template" },
  openGraph: {
    title: "10 Abandoned Cart SMS Templates That Convert in 3 Minutes",
    description: "Copy-paste these 10 high-converting abandoned cart SMS templates. 98% open rates. Recover sales instantly with proven text message sequences for Shopify.",
    url: "https://boostacart.com/abandoned-cart-sms-template",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function AbandonedCartSMSTemplate() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is SMS better than email for cart recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for many stores. SMS typically sees a 98% open rate, compared to 20% for email. Most SMS messages are read within 3 minutes of delivery, making them ideal for high-urgency recovery." } },
      { "@type": "Question", "name": "What is the best time to send a cart recovery SMS?", "acceptedAnswer": { "@type": "Answer", "text": "The first SMS should be sent 30-60 minutes after abandonment. This avoids bothering the user while they are still on your site but captures them before they forget about the purchase." } },
      { "@type": "Question", "name": "Do I need permission to send cart recovery texts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You must comply with TCPA or GDPR regulations by having users opt-in to marketing communications. BoostACart handles this natively at the Add-to-Cart moment." } }
    ]
  };

  const templates = [
    {
      title: "The Friendly Reminder",
      timing: "30 Minutes After Abandonment",
      body: "Hey {name}! 🛒 We noticed you left some great items in your cart at {store_name}. Still thinking? You can pick up where you left off here: {link}",
      label: "highest converting",
      color: "cyan"
    },
    {
      title: "The Stock Warning",
      timing: "4 Hours After Abandonment",
      body: "{store_name}: Your cart items are selling fast! 🔥 We can only hold them for another 2 hours. Claim yours now: {link}",
      label: "high urgency",
      color: "amber"
    },
    {
      title: "The Discount Hook",
      timing: "24 Hours After Abandonment",
      body: "Hi {name}, we really want to see you enjoy your new {product}! Use code SAVE10 for 10% off your cart for the next 4 hours: {link}",
      label: "final attempt",
      color: "emerald"
    },
    {
      title: "The Customer Support Approach",
      timing: "1 Hour After Abandonment",
      body: "{store_name}: Hey {name}, did you have a question about {product}? Just reply to this text and we'll help out! Or finish checkout here: {link}",
      label: "service focused",
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
          <span className="inline-block px-4 py-1 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-full text-fuchsia-400 text-sm font-semibold uppercase tracking-wider">High-Conversion Texting</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
             Abandoned Cart <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-amber-400">SMS Templates</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            SMS has a 98% open rate. If you're only using email, you're missing 80% of your recovery potential. Copy-paste these 10 proven text message templates to drive instant ROI.
          </p>
        </div>

        {/* The Power of SMS Section */}
        <section className="bg-[#0b102b]/60 border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-8">
            <h2 className={`${syne.className} text-3xl font-bold text-white`}>Why SMS is the King of Recovery</h2>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-4">
                    <p>In a world of crowded email inboxes and "promotions" tabs, SMS remains the only channel where your message is virtually guaranteed to be seen. Text messages are direct, personal, and urgent.</p>
                    <p>However, successful SMS marketing requires brevity and timing. You have 160 characters to make your case. The templates below are optimized for character count while maximizing purchase intent.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-white/5 rounded-xl">
                        <BarChart className="text-indigo-400 w-6 h-6 shrink-0"/>
                        <div>
                            <div className="text-2xl font-black text-white">98%</div>
                            <div className="text-xs text-indigo-400/60 font-bold uppercase">Average Open Rate</div>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white/5 rounded-xl">
                        <Clock className="text-fuchsia-400 w-6 h-6 shrink-0"/>
                        <div>
                            <div className="text-2xl font-black text-white">3 Min</div>
                            <div className="text-xs text-fuchsia-400/60 font-bold uppercase">Average Response Time</div>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white/5 rounded-xl">
                        <Zap className="text-amber-400 w-6 h-6 shrink-0"/>
                        <div>
                            <div className="text-2xl font-black text-white">10-15x</div>
                            <div className="text-xs text-amber-400/60 font-bold uppercase">Higher Click-Through vs Email</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Template Showcase */}
        <section className="space-y-8">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white text-center`}>The SMS Template Library</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {templates.map((t, i) => (
                    <div key={i} className={`group bg-[#0b102b]/40 border border-${t.color}-500/10 hover:border-${t.color}-500/30 rounded-3xl p-8 space-y-6 transition-all`}>
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-white">{t.title}</h3>
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-${t.color}-500/20 text-${t.color}-400 rounded-md border border-${t.color}-500/20`}>{t.label}</span>
                        </div>
                        <div className="bg-[#04091A] border border-white/5 rounded-2xl p-6 font-mono text-sm leading-relaxed text-indigo-100/70 relative">
                             <div className="absolute top-2 right-4 text-[10px] text-white/20 font-bold uppercase tracking-widest">SMS Preview</div>
                             "{t.body}"
                        </div>
                        <div className="flex items-center gap-2 text-sm text-indigo-100/40">
                            <Clock className="w-4 h-4"/> Timing: <span className={`text-${t.color}-400`}>{t.timing}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center pt-8">
                 <p className="text-indigo-100/50 italic mb-6">Need more specialized options? <Link href="/whatsapp-cart-recovery-tool" className="text-amber-400 underline">See our WhatsApp Library.</Link></p>
            </div>
        </section>

        {/* SMS Best Practices */}
        <section className="bg-gradient-to-br from-[#0b102b] to-transparent border border-white/5 rounded-[3rem] p-8 md:p-16 space-y-12">
            <h2 className={`${syne.className} text-3xl font-bold text-white`}>SMS Best Practices for 2025</h2>
            <div className="grid md:grid-cols-3 gap-8 text-sm text-indigo-100/60 leading-relaxed">
                <div className="space-y-4">
                    <div className="text-white font-bold flex items-center gap-2"><CheckCircle className="text-emerald-400 w-4 h-4"/> Identify Yourself</div>
                    <p>Always include your store name at the beginning of the text. Shoppers receive dozens of texts; anonymity breeds distrust.</p>
                </div>
                <div className="space-y-4">
                    <div className="text-white font-bold flex items-center gap-2"><CheckCircle className="text-emerald-400 w-4 h-4"/> Use Direct Cart Links</div>
                    <p>Link directly back to their pre-filled cart. Don't send them to your homepage. Every extra click reduces recovery by 20%.</p>
                </div>
                <div className="space-y-4">
                    <div className="text-white font-bold flex items-center gap-2"><CheckCircle className="text-emerald-400 w-4 h-4"/> Respect Opt-Outs</div>
                    <p>Legally and ethically, you must include "STOP to opt-out" instructions. BoostACart automates this for 100% compliance.</p>
                </div>
            </div>
        </section>

        {/* Global CTA */}
        <section className="bg-gradient-to-r from-fuchsia-900/20 to-amber-900/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-transparent pointer-events-none">
            <div className="absolute -top-10 right-10 w-64 h-64 bg-fuchsia-400/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-10 left-10 w-64 h-64 bg-amber-400/10 rounded-full blur-[100px]"></div>
          </div>
          <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-white leading-tight`}>
            Start Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-amber-400">High-ROI SMS Engine</span>
          </h2>
          <p className="text-xl text-indigo-200/60 max-w-2xl mx-auto font-light">
            Don't leave your recovery to chance. Scale your Shopify store with the SMS and WhatsApp tools used by the top 1%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Start Free Trial <Zap className="w-5 h-5 fill-black"/></Link>
            <Link href="/abandoned-cart-email-template" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">Get Email Templates</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Shopify SMS FAQ</h2>
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
