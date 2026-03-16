import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, BarChart3, PieChart, TrendingDown, Clock, Globe, ShoppingCart, Info, CheckCircle, Zap, Shield, Smartphone, Monitor } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Cart Abandonment Rate by Industry 2025: Global Benchmarks",
  description: "Discover the latest cart abandonment rates by industry for 2025. Benchmark your store against Fashion, Beauty, Tech, and Automotive sectors.",
  alternates: { canonical: "https://boostacart.com/cart-abandonment-rate-by-industry" },
  openGraph: {
    title: "Cart Abandonment Rate by Industry 2025: Global Benchmarks",
    description: "Discover the latest cart abandonment rates by industry for 2025. Benchmark your store against Fashion, Beauty, Tech, and Automotive sectors.",
    url: "https://boostacart.com/cart-abandonment-rate-by-industry",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function IndustryAbandonmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { 
        "@type": "Question", "name": "Which industry has the highest cart abandonment rate?", 
        "acceptedAnswer": { "@type": "Answer", "text": "The Travel and Hospitality industry typically suffers from the highest abandonment rates, often exceeding 84%, due to the high research intensity and complex checkout processes involved." } 
      },
      { 
        "@type": "Question", "name": "What is the average cart abandonment rate for Fashion and Apparel?", 
        "acceptedAnswer": { "@type": "Answer", "text": "In 2025, the Fashion and Apparel industry sees an average abandonment rate of 67.4%. This is often driven by 'window shopping' behavior and sizing uncertainty." } 
      },
      { 
        "@type": "Question", "name": "Why do abandonment rates vary so much between industries?", 
        "acceptedAnswer": { "@type": "Answer", "text": "Variations are caused by differences in Average Order Value (AOV), the length of the decision-making cycle, mobile vs. desktop traffic split, and the emotional nature of the purchase." } 
      },
      { 
        "@type": "Question", "name": "How can I lower my industry's specific abandonment rate?", 
        "acceptedAnswer": { "@type": "Answer", "text": "Implementation of pre-checkout lead capture (like BoostACart), transparent shipping costs, and high-velocity multi-channel recovery (WhatsApp/SMS) are the most effective methods to beat industry benchmarks." } 
      }
    ]
  };

  const industries = [
    { name: "Travel & Hospitality", rate: "84.5%", trend: "up", impact: "High Research Cycle", color: "from-blue-500 to-indigo-500" },
    { name: "Automotive", rate: "79.1%", trend: "stable", impact: "High Price Point", color: "from-slate-500 to-gray-700" },
    { name: "Electronics", rate: "74.2%", trend: "down", impact: "Feature Comparison", color: "from-cyan-500 to-blue-500" },
    { name: "Health & Beauty", rate: "61.3%", trend: "down", impact: "Replenishment Needs", color: "from-rose-400 to-rose-600" },
    { name: "Fashion & Apparel", rate: "67.4%", trend: "stable", impact: "Size & Fit Anxiety", color: "from-fuchsia-500 to-pink-500" },
    { name: "Food & Beverage", rate: "58.2%", trend: "down", impact: "Impulse Purchase", color: "from-emerald-400 to-emerald-600" },
  ];

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 overflow-hidden ${outfit.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-32 pb-24 space-y-24 relative">
        {/* Ambient Background Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

        {/* Hero Section */}
        <section className="text-center space-y-8 animate-in fade-in slide-in-from-top-10 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest">
            <Globe className="w-4 h-4" /> 2025 Research Report
          </div>
          <h1 className={`${syne.className} text-5xl md:text-8xl font-black text-white leading-[1.1]`}>
            Cart Abandonment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-400">
              Rate by Industry
            </span>
          </h1>
          <p className="text-xl text-indigo-100/60 max-w-3xl mx-auto leading-relaxed font-light italic">
            "Generic benchmarks are dangerous. To optimize your Shopify store, you must compare your performance against your specific tactical niche."
          </p>
        </section>

        {/* Global Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl space-y-4 group hover:border-blue-500/30 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <PieChart className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-black text-white">70.1%</h3>
            <p className="text-indigo-200/50 text-sm font-bold uppercase tracking-wider">Global Average Rate</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl space-y-4 group hover:border-fuchsia-500/30 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-black text-white">85.6%</h3>
            <p className="text-indigo-200/50 text-sm font-bold uppercase tracking-wider">Mobile-Only Abandonment</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl space-y-4 group hover:border-emerald-500/30 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-black text-white">2.4x</h3>
            <p className="text-indigo-200/50 text-sm font-bold uppercase tracking-wider">Recovery via WhatsApp vs Email</p>
          </div>
        </div>

        {/* Detailed Industry Breakdown */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white`}>The Industry Matrix</h2>
            <p className="text-indigo-100/60 max-w-2xl mx-auto">Click into your niche to see the specific physiological reasons for abandonment and how to solve them.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-[#0b102b]/40 border border-white/5 p-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative p-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">{ind.name}</h4>
                    <span className="text-3xl font-black text-white">{ind.rate}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${ind.color} group-hover:scale-x-105 transition-transform origin-left`} style={{ width: ind.rate }}></div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
                    <Info className="w-4 h-4" /> {ind.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Analysis Content */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed">
            <h2 className={`${syne.className} text-4xl font-bold text-white not-prose`}>Why Niche Matters: The AOV Trap</h2>
            <p>
              A Shopify store selling $2,000 electric bikes (High-Ticket) cannot be judged by the same metrics as a store selling $12 lip gloss (Beauty). The "Abandonment Rate" is a direct reflection of the consumer's emotional and financial friction.
            </p>
            <p>
              In <strong>Luxury & Automotive</strong>, abandonment is often part of a multi-week research journey. Shoppers use the cart as a "Wishlist" or "Configurator." Recovering these sales requires a high-touch, conversational approach—often via <Link href="/whatsapp-cart-recovery-tool" className="text-blue-400 font-bold hover:underline">WhatsApp Business recovery</Link>.
            </p>
            <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/20 space-y-4 not-prose">
              <h4 className="text-white font-bold flex items-center gap-2 underline decoration-blue-500/50 underline-offset-4"><TrendingDown className="text-rose-500" /> The Hidden Cost of "Cheap" Traffic</h4>
              <p className="text-indigo-100/60 text-base leading-relaxed">
                If your abandonment rate is climbing while your ad spend increases, you're likely paying for "High Curiosity, Low Intent" traffic. Standard popups will fail these users because they haven't emotionally committed to the purchase yet.
              </p>
            </div>
            <p>
              Conversely, in <strong>Home Decor & Electronics</strong>, abandonment is purely tactical: unexpected shipping costs. Over 48% of shoppers cite "Extra Costs" as the primary reason for leaving step 2 of checkout.
            </p>
          </div>

          <div className="space-y-8 relative">
             <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
             <div className="relative p-10 rounded-[3rem] bg-[#0b102b]/60 border border-white/5 shadow-2xl space-y-8">
                <div className="space-y-2">
                  <h3 className={`${syne.className} text-2xl font-bold text-white`}>Solve Your Industry Gap</h3>
                  <p className="text-indigo-200/50 text-sm uppercase tracking-widest font-bold">The Strategic Playbook</p>
                </div>

                <div className="space-y-6">
                  {[
                    { title: "Capture Data Earlier", desc: "Don't wait for the checkout page. Intercept 100% of shoppers at the 'Add to Cart' click.", icon: <ShoppingCart className="w-5 h-5" /> },
                    { title: "Switch to WhatsApp", desc: "Email open rates are dying. WhatsApp sees 90%+ open rates in Fashion and Beauty.", icon: <Clock className="w-5 h-5" /> },
                    { title: "Transparency First", desc: "Display shipping estimates on the product page to kill 'Fear of Fees' early.", icon: <Globe className="w-5 h-5" /> },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">{item.icon}</div>
                      <div>
                        <h5 className="text-white font-bold mb-1">{item.title}</h5>
                        <p className="text-sm text-indigo-100/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/shopify-cart-recovery" className="block w-full text-center py-4 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] transition-transform">
                  Master Your Recovery ROI
                </Link>
             </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 p-1 px-1">
           <div className="bg-[#04091A] rounded-[2.9rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
              
              <h2 className={`${syne.className} text-4xl md:text-7xl font-black text-white leading-tight`}>
                Crush Your <br /> Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400">Benchmarks</span>
              </h2>
              <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto leading-relaxed font-light">
                Average stores lose 70%. Best-in-class stores recover 25%. Which one are you? Use <Link href="/shopify-cart-recovery" className="text-blue-400 hover:underline font-bold">BoostACart</Link> to secure your lost sales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/" className="px-12 py-5 bg-white text-black font-black rounded-full hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                  Launch Your Engine <Zap className="w-5 h-5 fill-black" />
                </Link>
                <Link href="/tools" className="px-12 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
                  Browse Free Tools
                </Link>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto space-y-12">
           <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-center text-white`}>Industry FAQ</h2>
           <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-start gap-4">
                    <span className="text-blue-500 font-black text-sm pt-1">Q:</span> {faq.name}
                  </h3>
                  <p className="text-indigo-100/60 leading-relaxed pl-8 border-l border-white/10">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
           </div>
        </section>

        {/* Dynamic Footer Cluster Links */}
        <div className="pt-20 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6">
           <Link href="/abandoned-cart-statistics" className="text-sm text-indigo-400/60 hover:text-white transition-colors">Global Stats 2025</Link>
           <Link href="/cart-recovery-for-dropshipping" className="text-sm text-indigo-400/60 hover:text-white transition-colors">Dropshipping Guide</Link>
           <Link href="/klaviyo-alternative" className="text-sm text-indigo-400/60 hover:text-white transition-colors">Klaviyo vs BoostACart</Link>
           <Link href="/tools" className="text-sm text-indigo-400/60 hover:text-white transition-colors">Free Calculators Hub</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
