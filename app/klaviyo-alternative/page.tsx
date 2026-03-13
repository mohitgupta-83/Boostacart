import { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ArrowRight, TrendingUp, RefreshCcw, HandCoins, AlertTriangle, Blocks } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://boostacart.com/klaviyo-alternative"
  },
  title: "The Best Klaviyo Alternative For Shopify Cart Recovery (2025)",
  description: "Are you overpaying for Klaviyo's bloated features? Discover the most aggressive, highest-ROI alternative specifically built for instant cart recovery.",
};

export default function KlaviyoAlternative() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question", "name": "Why are Shopify stores looking for a Klaviyo alternative?", 
        "acceptedAnswer": { "@type": "Answer", "text": "Klaviyo's pricing has increased significantly while their core feature—post-checkout email recovery—struggles to capture early-stage abandoners. Stores want an alternative that captures leads instantly when they click Add to Cart." }
      },
      {
        "@type": "Question", "name": "Do I have to uninstall Klaviyo to use BoostACart?", 
        "acceptedAnswer": { "@type": "Answer", "text": "Not at all. You can turn off Klaviyo's underperforming abandoned cart flows and let BoostACart handle all recovery perfectly natively, while keeping Klaviyo for weekly newsletters." }
      },
      {
        "@type": "Question", "name": "What makes this alternative better for cart abandonment?", 
        "acceptedAnswer": { "@type": "Answer", "text": "Timing. By intercepting traffic pre-checkout, we 10x the amount of leads captured, allowing our automated systems via SMS, Email, and WhatsApp to reach shoppers Klaviyo never even saw." }
      }
    ]
  };

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-rose-500/30 overflow-hidden ${outfit.className}`}>
      <Navbar />
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-32 pb-24 space-y-24">
        
        {/* Hub Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
           <Link href="/alternatives" className="px-5 py-2 rounded-full border border-white/10 text-indigo-300 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-all font-medium text-sm">Explore Alternative Softwares</Link>
           <Link href="/tools" className="px-5 py-2 rounded-full border border-white/10 text-indigo-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all font-medium text-sm">Calculate Profit Margin</Link>
        </div>

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
           <h1 className={`${syne.className} text-5xl md:text-7xl font-bold leading-tight`}>
             The #1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Klaviyo Alternative</span> for Shopify
           </h1>
           <p className="text-xl text-indigo-100/60 leading-relaxed font-light">
             Why scaling ecommerce founders are ripping out slow, bloated post-purchase email systems and deploying high-velocity, multi-channel cart recovery infrastructure. Time to <Link href="/shopify-cart-recovery" className="text-rose-400 hover:text-rose-300 underline underline-offset-4">recover abandoned carts using BoostACart</Link> instead.
           </p>
           <div className="flex justify-center pt-4">
             <Link href="/features" className="bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all hover:-translate-y-1 flex items-center gap-3">
               See Core Capabilities <ArrowRight className="w-5 h-5"/>
             </Link>
           </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-rose-500/10 blur-[80px]"></div>
          <h2 className={`${syne.className} text-3xl md:text-4xl font-bold mb-6 text-white relative z-10`}>Introduction: The Legacy Email Problem</h2>
          <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-6 relative z-10">
            <p>
              When a Shopify store first launches, sending an automated email blast through Klaviyo's free tier makes sense. However, as the brand hits $100k/mo and begins spending heavily on paid ads, optimizing the conversion rate becomes absolutely critical. And it is here that the legacy email platforms fundamentally break down.
            </p>
            <p>
              A staggering 70% of shoppers who add an item to their cart never reach the checkout page. Klaviyo's "Added to Cart" trigger tries to fix this, but it physically cannot message anyone who hasn't previously submitted their email on the site. This creates a massive hole where the vast majority of your most expensive paid traffic bounces undetected.
            </p>
            <p>
              BoostACart was built to be the preeminent alternative to this flawed logic. By intercepting the customer's click directly on the product's Add-to-Cart button with an impossibly smooth modal, we decouple cart recovery from the traditional checkout flow. The math speaks for itself: you capture exponentially more data, allowing the multi-channel fallback engines (WhatsApp, SMS, Email) to run at maximum capacity.
            </p>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section>
          <h2 className={`${syne.className} text-3xl md:text-5xl font-bold mb-10 text-center text-white`}>A Pure Tactical Comparison</h2>
          <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-[#0b102b]/40 backdrop-blur-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#12193b]">
                  <th className="p-6 text-indigo-200 font-semibold border-b border-white/5 text-lg w-1/3">Performance Vector</th>
                  <th className="p-6 text-white font-bold border-b border-white/5 border-l bg-rose-500/10 text-xl w-1/3 text-center">BoostACart</th>
                  <th className="p-6 text-indigo-300 font-medium border-b border-white/5 border-l text-xl w-1/3 text-center">Klaviyo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-indigo-100/70">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Recovery Funnel Location</td>
                  <td className="p-6 border-l border-white/5 bg-rose-500/5"><span className="flex items-center gap-2 text-rose-300"><TrendingUp className="w-5 h-5"/> High (Product Page)</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-indigo-400"/> Low (Checkout Only)</span></td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">WhatsApp Capacity</td>
                  <td className="p-6 border-l border-white/5 bg-rose-500/5"><span className="flex items-center gap-2 text-rose-300"><Check className="w-5 h-5"/> Fully Integrated natively</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><X className="w-5 h-5 text-rose-500"/> Third-party hacks required</span></td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Javascript Weight</td>
                  <td className="p-6 border-l border-white/5 bg-rose-500/5"><span className="flex items-center gap-2 text-rose-300"><Check className="w-5 h-5"/> Invisible (< 5kb Async)</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><Blocks className="w-5 h-5 text-indigo-400"/> Historically Heavy bloat</span></td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Ideal Merchant Use</td>
                  <td className="p-6 border-l border-white/5 bg-rose-500/5"><span className="flex items-center justify-center gap-2"><span className="font-bold text-rose-300">Scaling Daily ROAS</span></span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center justify-center">Monthly Newsletter Blasts</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
           <div className="bg-gradient-to-br from-[#12193b] to-[#04091A] border border-rose-500/20 p-10 rounded-[2.5rem] relative overflow-hidden order-last lg:order-first">
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-rose-500/20 blur-[100px] rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><HandCoins className="w-8 h-8 text-rose-400"/> Financial Comparison</h3>
              <ul className="space-y-6 text-lg text-indigo-100/70">
                <li className="flex items-start gap-4"><Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1"/> <div><strong>BoostACart:</strong> Extremely fair monthly tiers dedicated strictly to the cart recovery use-case. Flat and predictable.</div></li>
                <li className="flex items-start gap-4"><X className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1"/> <div><strong>Klaviyo:</strong> Subscriber-tax system. The larger your "inactive" list gets, the higher you are charged.</div></li>
              </ul>
              <div className="mt-8 pt-8 border-t border-rose-500/10">
                 <Link href="/pricing" className="text-white font-semibold flex items-center gap-2 hover:text-rose-400 transition-colors">Analyze our exact tier breakdowns <ArrowRight className="w-4 h-4"/></Link>
              </div>
           </div>
           
           <div className="space-y-6">
             <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>Pricing Comparison: Don't Subsidize The Bloat</h2>
             <p className="text-lg text-indigo-100/60 leading-relaxed">
               As a major publicly traded company, Klaviyo is forced continually expand revenue, leading to highly aggressive pricing escalations as your active profiles grow. Often, millions of dollars of enterprise CRM infrastructure you simply don't need are baked into your small business SaaS bill. 
             </p>
             <p className="text-lg text-indigo-100/60 leading-relaxed">
               BoostACart strips away the CRM fat. There is no dragging and dropping of massive bloated page builders. We simply execute the absolute most efficient code payload to intercept the user, grab the data, and mercilessly follow up on the cart via automation. This massive difference in architectural overhead translates to wildly massive savings for you.
             </p>
           </div>
        </section>

        {/* Pros and Cons */}
        <section className="text-center">
             <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white mb-6`}>Use Cases, Pros & Cons</h2>
             <p className="text-lg text-indigo-100/60 leading-relaxed max-w-3xl mx-auto mb-12">
               If you are determining if you should rip and replace, here is the honest matrix.
             </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-[#0b102b]/60 border border-rose-500/30 rounded-3xl p-10 shadow-lg shadow-rose-900/10">
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-rose-500/20 pb-4">BoostACart Pros & Cons</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-rose-300 mb-4 px-3 py-1 bg-rose-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-indigo-100/70"><Check className="text-rose-400 w-5 h-5 shrink-0"/> The highest pre-checkout lead capture rate mathematically possible.</li>
                      <li className="flex gap-3 text-indigo-100/70"><Check className="text-rose-400 w-5 h-5 shrink-0"/> Unrivaled WhatsApp deliverability across international markets.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-400 mb-4 px-3 py-1 bg-gray-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-indigo-100/70"><X className="text-gray-500 w-5 h-5 shrink-0"/> Does not try to manage your massive holiday "Black Friday" newsletter send list.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-[#0b102b]/60 border border-indigo-500/30 rounded-3xl p-10 shadow-lg shadow-indigo-900/10">
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-indigo-500/20 pb-4">Klaviyo Pros & Cons</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-indigo-300 mb-4 px-3 py-1 bg-indigo-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Advantages</h4>
                    <ul className="space-y-3 mb-8">
                      <li className="flex gap-3 text-indigo-100/70"><Check className="text-indigo-400 w-5 h-5 shrink-0"/> Granular segmenting logic to construct cohorts of buyers.</li>
                      <li className="flex gap-3 text-indigo-100/70"><Check className="text-indigo-400 w-5 h-5 shrink-0"/> Extremely powerful template generation tools.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-400 mb-4 px-3 py-1 bg-gray-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-indigo-100/70"><X className="text-gray-500 w-5 h-5 shrink-0"/> Abysmal metrics at capturing cold ad traffic efficiently.</li>
                      <li className="flex gap-3 text-indigo-100/70"><X className="text-gray-500 w-5 h-5 shrink-0"/> Crippling structural costs per month.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* When to choose BoostACart */}
        <section className="bg-gradient-to-r from-rose-900/20 to-orange-900/20 border-y border-white/5 py-16 -mx-4 px-4 md:px-12 md:rounded-[3rem] md:mx-0 shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-[#04091A]/50 backdrop-blur-sm z-0"></div>
           <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
             <RefreshCcw className="w-16 h-16 text-rose-400 mx-auto"/>
             <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}>The Action Plan</h2>
             <p className="text-xl text-indigo-100/80 leading-relaxed font-light">
               There is no reason to rip out Klaviyo entirely. The smart, enterprise approach deployed by scaling 8-figure brands is to use Klaviyo for mass newsletter retention while aggressively intercepting high-CPA traffic using BoostACart. If you are serious about dropping your blended CPA, you need to <Link href="/shopify-cart-recovery" className="text-rose-400 hover:underline">recover abandoned carts using BoostACart</Link> today.
             </p>
             <Link href="/" className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
               Launch Recovery Engine Now
             </Link>
           </div>
        </section>

        {/* FAQ Schema Application */}
        <section className="max-w-3xl mx-auto pt-10">
           <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
           <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white mb-10 text-center`}>Frequently Asked Questions</h2>
           <div className="space-y-6">
             {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="bg-[#0b102b]/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-[#0b102b] hover:border-rose-500/20 transition-all">
                  <h3 className="text-xl font-bold text-white mb-3 text-rose-50">Q: {faq.name}</h3>
                  <p className="text-indigo-200/60 leading-relaxed pl-6 border-l-2 border-rose-500/30">
                    A: {faq.acceptedAnswer.text}
                  </p>
                </div>
             ))}
           </div>
        </section>
        
      </div>
      <Footer />
    </div>
  );
}
