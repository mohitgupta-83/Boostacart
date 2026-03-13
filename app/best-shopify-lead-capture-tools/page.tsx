import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Mail, MessageCircle, BarChart, ShoppingBag, ListChecks } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "5 Best Shopify Lead Capture Tools in 2025 (Review)",
  description: "Comparing the top-rated Shopify lead capture tools. See which app has the best conversion rates for email, SMS, and WhatsApp capture. Find your ROI winner.",
  alternates: { canonical: "https://boostacart.com/best-shopify-lead-capture-tools" },
  openGraph: {
    title: "5 Best Shopify Lead Capture Tools in 2025 (Review)",
    description: "Comparing the top-rated Shopify lead capture tools. See which app has the best conversion rates for email, SMS, and WhatsApp capture. Find your ROI winner.",
    url: "https://boostacart.com/best-shopify-lead-capture-tools",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function BestLeadCaptureTools() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the most effective lead capture for Shopify?", "acceptedAnswer": { "@type": "Answer", "text": "While popups are common, pre-checkout capture (triggered at Add-to-Cart) is currently the most effective method, as it captures users with the highest purchase intent." } },
      { "@type": "Question", "name": "Do I need separate tools for email and SMS capture?", "acceptedAnswer": { "@type": "Answer", "text": "You can use separate tools, but all-in-one solutions like BoostACart allow for unified sequences across Email, SMS, and WhatsApp, which usually results in a better customer experience and higher ROI." } },
      { "@type": "Question", "name": "Should I use a 'Spin to Win' wheel for leads?", "acceptedAnswer": { "@type": "Answer", "text": "Gamified popups can increase volume, but lead quality is often much lower as users are only there for the game. For high-ticket items, we recommend professional, behavior-based capture instead." } }
    ]
  };

  const tools = [
    {
       name: "BoostACart",
       bestFor: "Max ROI & Pre-Checkout Capture",
       tag: "Overall Winner",
       rating: "5.0",
       desc: "BoostACart focuses on the Add-to-Cart moment. It's the only tool that allows you to collect email and phone data before the checkout process starts, resulting in a 10x larger recovery list.",
       features: ["Add-to-Cart Modal", "Native WhatsApp Bot", "Automated SMS/Email"],
       icon: <Zap className="w-6 h-6 text-fuchsia-400"/>
    },
    {
       name: "OptinMonster",
       bestFor: "Enterprise Targeting & Rules",
       tag: "Logic King",
       rating: "4.8",
       desc: "A powerhouse of targeting rules. Great for huge sites that need complex display logic based on referrers, locations, and historical browsing behavior.",
       features: ["Advanced Logic Engine", "Exit-Intent Tech", "A/B Testing"],
       icon: <BarChart className="w-6 h-6 text-indigo-400"/>
    },
    {
       name: "Attentive",
       bestFor: "Mobile-First SMS Growth",
       tag: "SMS Specialist",
       rating: "4.7",
       desc: "The industry leader for high-growth SMS lists. Attentive is ideal for massive brands that want to power scale-based mobile marketing campaigns.",
       features: ["Mobile Tap-to-Join", "Compliance Management", "SMS Flows"],
       icon: <MessageCircle className="w-6 h-6 text-emerald-400"/>
    },
    {
       name: "PopUp Smart",
       bestFor: "No-Code Simplicity",
       tag: "Best for Basic",
       rating: "4.5",
       desc: "A clean, simple popup builder. Perfect for stores that just want a beautiful, easy-to-template entry popup without complex logic.",
       features: ["High-Quality Designs", "Speed Optimized", "Simple Integrations"],
       icon: <ShoppingBag className="w-6 h-6 text-amber-400"/>
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
            <Link href="/alternatives" className="hover:text-indigo-300">Comparisons</Link>
          </nav>
          <span className="inline-block px-4 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-semibold uppercase tracking-wider">Software Review 2025</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            5 Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Shopify Lead Capture</span> Tools
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            We reviewed the top-performing apps in the Shopify ecosystem to find the best tools for building a high-intent, high-value customer list. Here is the 2025 leaderboard.
          </p>
        </div>

        {/* Intro */}
        <section className="bg-[#0b102b]/60 border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-6">
           <h2 className={`${syne.className} text-3xl font-bold text-white`}>What Makes a Great Lead Capture Tool?</h2>
           <p className="text-lg text-indigo-100/60 leading-relaxed max-w-2xl">
              In 2025, a lead capture tool needs to do more than just show a popup. It needs to be <span className="text-white font-bold">mobile-responsive</span>, <span className="text-white font-bold">Privacy-compliant</span>, and most importantly, <span className="text-indigo-400 font-bold">Behavior-aware</span>.
           </p>
           <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                  "Consent-First Architecture",
                  "Multi-Channel Support (WhatsApp/SMS)",
                  "Zero Store Speed Impact",
                  "High-Intent Behavioral Triggers",
              ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-indigo-100/40 items-center"><CheckCircle className="text-emerald-400 w-4 h-4"/> {item}</div>
              ))}
           </div>
        </section>

        {/* Comparison Showcase */}
        <section className="space-y-12">
            {tools.map((tool, i) => (
               <div key={i} className="group bg-[#0b102b]/40 border border-white/5 hover:border-indigo-500/20 rounded-[3rem] p-8 md:p-16 transition-all space-y-10 relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]"></div>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                             <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">{tool.icon}</div>
                             <div>
                                <h3 className={`${syne.className} text-3xl font-bold text-white flex items-center gap-3`}>{tool.name} <span className="text-[10px] font-black uppercase bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded tracking-tighter">{tool.tag}</span></h3>
                                <div className="flex items-center gap-1 text-sm text-indigo-100/40 mt-1">
                                    <Star className="text-yellow-500 fill-yellow-500 w-4 h-4"/>
                                    <span className="font-bold text-white">{tool.rating}</span> / 5.0 — {tool.bestFor}
                                </div>
                             </div>
                        </div>
                        <p className="text-lg text-indigo-200/60 italic leading-relaxed max-w-2xl border-l-2 border-indigo-500/20 pl-6">"{tool.desc}"</p>
                      </div>
                      <Link href={tool.name === 'BoostACart' ? '/' : '#'} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex-shrink-0">Explore Tool</Link>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                      {tool.features.map((f, idx) => (
                        <div key={idx} className="flex gap-3 items-center text-sm text-indigo-100/50 bg-[#04091A] p-4 rounded-xl border border-white/5">
                            <ListChecks className="w-4 h-4 text-indigo-400 opacity-50"/> {f}
                        </div>
                      ))}
                  </div>
               </div>
            ))}
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-7xl font-bold text-white leading-tight`}>
               Build A <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">High-ROI List</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
               Ready to stop following and start leading? Join the thousands of stores using BoostACart to fuel their growth with high-intent shopper data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Deploy Winner Now <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View ROI Plans</Link>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Lead Capture FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-indigo-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
