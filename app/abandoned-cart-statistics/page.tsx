import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, BarChart3, PieChart, TrendingDown, Clock, Globe, ShoppingCart, Info, CheckCircle, Zap } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Abandoned Cart Statistics 2025: Shocking Data for Ecommerce",
  description: "The latest abandoned cart statistics for 2025. Learn why 70% of shoppers leave, industry benchmarks, and how much revenue top stores are recovering.",
  alternates: { canonical: "https://boostacart.com/abandoned-cart-statistics" },
  openGraph: {
    title: "Abandoned Cart Statistics 2025: Shocking Data for Ecommerce",
    description: "The latest abandoned cart statistics for 2025. Learn why 70% of shoppers leave, industry benchmarks, and how much revenue top stores are recovering.",
    url: "https://boostacart.com/abandoned-cart-statistics",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function AbandonedCartStats() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the average cart abandonment rate in 2025?", "acceptedAnswer": { "@type": "Answer", "text": "The average ecommerce cart abandonment rate across all industries is approximately 70.19%, according to data aggregated from 49 different studies." } },
      { "@type": "Question", "name": "Which industry has the highest abandonment rate?", "acceptedAnswer": { "@type": "Answer", "text": "The Travel industry typically sees the highest abandonment rates (85%+), while Retail/Apparel averages around 68-75%." } },
      { "@type": "Question", "name": "How much revenue is lost to cart abandonment?", "acceptedAnswer": { "@type": "Answer", "text": "Globally, ecommerce stores lose an estimated $18 Billion in sales revenue every year due to cart abandonment." } },
      { "@type": "Question", "name": "What percentage of abandoned carts can be recovered?", "acceptedAnswer": { "@type": "Answer", "text": "With the right recovery tools like BoostACart, most stores can recover between 15% and 30% of their abandoned carts via Email, SMS, and WhatsApp." } }
    ]
  };

  const keyStats = [
    { label: "Global Average Rate", value: "70.19%", icon: <PieChart className="w-6 h-6 text-cyan-400" /> },
    { label: "Mobile Abandonment", value: "85.65%", icon: <SmartphoneIcon className="w-6 h-6 text-fuchsia-400" /> },
    { label: "Lost Annual Sales", value: "$18B", icon: <TrendingDown className="w-6 h-6 text-rose-400" /> },
    { label: "Top Reason: Shipping", value: "48%", icon: <Globe className="w-6 h-6 text-emerald-400" /> },
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
            <Link href="/abandoned-cart-recovery" className="hover:text-indigo-300">Recovery Guide</Link>
          </nav>
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider">Research Report 2025</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            Ecommerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Abandoned Cart Statistics</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Knowledge is power. We've aggregated the most critical data points on cart abandonment to help you benchmark your Shopify store and optimize your recovery strategy.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyStats.map((stat, i) => (
            <div key={i} className="bg-[#0b102b]/60 border border-white/5 rounded-2xl p-6 text-center space-y-3">
              <div className="flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-indigo-200/50 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Global Benchmarks Section */}
        <section className="space-y-8">
            <h2 className={`${syne.className} text-3xl font-bold text-white`}>Global Abandonment Benchmarks</h2>
            <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-6">
                <p>
                    Cart abandonment isn't just a minor technical issue; it's a multi-billion dollar behavioral phenomenon. In 2025, the average cart abandonment rate has stabilized at <span className="text-white font-bold underline decoration-cyan-500/50">70.19%</span>. This means that for every 10 shoppers who add an item to their cart, 7 will leave without completing the purchase.
                </p>
                <div className="bg-[#0b102b]/60 border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-8">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2"><BarChart3 className="text-cyan-400"/> Rate by Industry (2025 Data)</h3>
                    <div className="space-y-4">
                        {[
                            { name: "Travel/Hospitality", rate: "84.5%", color: "bg-fuchsia-500" },
                            { name: "Automotive", rate: "79.1%", color: "bg-indigo-500" },
                            { name: "Global Average", rate: "70.2%", color: "bg-cyan-500" },
                            { name: "Retail/Apparel", rate: "67.4%", color: "bg-emerald-500" },
                            { name: "Cosmetics", rate: "61.3%", color: "bg-rose-500" },
                        ].map((row, i) => (
                            <div key={i} className="space-y-1">
                                <div className="flex justify-between text-sm text-indigo-100/70">
                                    <span>{row.name}</span>
                                    <span className="font-bold text-white">{row.rate}</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full ${row.color}`} style={{ width: row.rate }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 text-center">
                        <Link href="/cart-abandonment-rate-by-industry" className="text-cyan-400 text-sm font-bold hover:underline">View Detailed Industry Breakdown Benchmarks →</Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Why They Leave section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className={`${syne.className} text-3xl font-bold text-white`}>Why Do They Leave?</h2>
                <p className="text-lg text-indigo-100/70 leading-relaxed">
                    According to 2025 survey data from the Baymard Institute, the top reasons for checkout abandonment are overwhelmingly related to friction and unexpected costs.
                </p>
                <ul className="space-y-4">
                    {[
                        "Extra costs too high (shipping, tax, fees) — 48%",
                        "The site wanted me to create an account — 24%",
                        "Delivery was too slow — 22%",
                        "I didn't trust the site with my credit card info — 18%",
                        "Too long/complicated checkout process — 17%",
                        "Site had errors/crashed — 13%",
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-indigo-100/60"><CheckCircle className="text-cyan-400 w-5 h-5 shrink-0"/> {item}</li>
                    ))}
                </ul>
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex gap-3 text-sm text-indigo-300">
                    <Info className="w-5 h-5 shrink-0"/>
                    <p>Many of these shoppers <Link href="/shopify-exit-intent-popup" className="font-bold underline">abandon before they even reach checkout</Link>. This is why Add-to-Cart capture is critical in 2025.</p>
                </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border border-white/5 rounded-[3rem] p-12 text-center space-y-6 shadow-2xl relative">
                <Clock className="w-16 h-16 text-fuchsia-400 mx-auto opacity-50"/>
                <h3 className={`${syne.className} text-2xl font-bold text-white`}>The Golden Hour Rule</h3>
                <p className="text-indigo-100/70 leading-relaxed">
                    Data shows that abandoned cart emails sent <span className="text-white font-bold underline">within 60 minutes</span> of abandonment have a <span className="text-cyan-400 font-black italic">6.33% conversion rate</span>, compared to just 1.74% if sent after 24 hours.
                </p>
                <Link href="/abandoned-cart-email-template" className="inline-flex items-center gap-2 text-fuchsia-400 font-bold hover:translate-x-1 transition-transform">Get Proven Templates <ArrowRight className="w-4 h-4"/></Link>
            </div>
        </section>

        {/* Global CTA */}
        <section className="bg-gradient-to-r from-cyan-900/40 to-fuchsia-900/40 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-transparent pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-400/10 rounded-full blur-[100px]"></div>
          </div>
          <h2 className={`${syne.className} text-4xl md:text-6xl font-bold text-white leading-tight`}>
            Beat the Benchmarks <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Next Week</span>
          </h2>
          <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto">
            Average stores lose 70%. Best-in-class stores recover 25%. Which one are you? Use BoostACart to bridge the gap and secure your lost sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Start Recovering Now <Zap className="w-5 h-5 fill-black"/></Link>
            <Link href="/tools" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">Free ROI Calculators</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Abandoned Cart Statistics FAQ</h2>
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

function SmartphoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}
