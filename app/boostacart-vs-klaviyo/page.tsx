import { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ArrowRight, Shield, Zap, TrendingUp, Clock, DollarSign, BarChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://boostacart.com/boostacart-vs-klaviyo"
  },
  title: "BoostACart vs Klaviyo - The Ultimate Cart Recovery Comparison",
  description: "Comparing BoostACart vs Klaviyo for Shopify cart recovery. See why capturing leads at add-to-cart wins over post-checkout email flows every time.",
};

export default function BoostACartVsKlaviyo() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question", "name": "How is BoostACart different from Klaviyo?", 
        "acceptedAnswer": { "@type": "Answer", "text": "Klaviyo relies on customers reaching checkout. BoostACart captures the email exactly when they click Add to Cart, increasing lead capture by 10x." }
      },
      {
        "@type": "Question", "name": "Can I use both Klaviyo and BoostACart?", 
        "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. BoostACart acts as your highly optimized cart recovery engine while Klaviyo manages your newsletter broadcasts." }
      },
      {
        "@type": "Question", "name": "How do you calculate ROAS?", 
        "acceptedAnswer": { "@type": "Answer", "text": "ROAS (Return on Ad Spend) is calculated by dividing your total revenue generated from ads by your total ad spend." }
      }
    ]
  };

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-fuchsia-500/30 overflow-hidden ${outfit.className}`}>
      <Navbar />
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-32 pb-24 space-y-24">
        
        {/* Hub Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
           <Link href="/tools" className="px-5 py-2 rounded-full border border-white/10 text-indigo-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all font-medium text-sm">Return to Tools</Link>
           <Link href="/comparisons" className="px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 font-medium text-sm">Competitor Comparisons</Link>
        </div>

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
           <h1 className={`${syne.className} text-5xl md:text-7xl font-bold leading-tight`}>
             BoostACart vs Klaviyo: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">The Modern Cart Recovery Playbook</span>
           </h1>
           <p className="text-xl text-indigo-100/60 leading-relaxed font-light">
             Explore why fast-scaling ecommerce brands are abandoning static email flows in favor of high-intent, pre-checkout lead capture. Discover how you can <Link href="/shopify-cart-recovery" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">recover abandoned carts using BoostACart</Link> directly at the point of greatest friction.
           </p>
           <div className="flex justify-center pt-4">
             <Link href="/pricing" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(217,70,239,0.5)] transition-all hover:-translate-y-1 flex items-center gap-3">
               See Our Pricing <ArrowRight className="w-5 h-5"/>
             </Link>
           </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className={`${syne.className} text-3xl md:text-4xl font-bold mb-6 text-white`}>Introduction: The Fundamental Shift</h2>
          <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-6">
            <p>
              For the last decade, Klaviyo has been the undisputed king of ecommerce email marketing. Their powerful segmentation and deep Shopify integration allowed brands to build sophisticated post-purchase flows and generalized abandoned cart sequences. However, as paid media costs continue to rise, relying solely on a customer voluntarily making it to the checkout page is no longer mathematically viable.
            </p>
            <p>
              When comparing BoostACart vs Klaviyo, you are comparing two entirely different philosophies. Klaviyo waits for the customer to start checking out or uses intrusive "spin-to-win" popups to capture emails. BoostACart seamlessly intercepts the user at the exact millisecond they express intent: when they click "Add to Cart."
            </p>
            <p>
              By capturing the lead asynchronously behind the scenes, you <Link href="/features" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">unlock the core features</Link> of modern omnichannel recovery: immediate SMS, WhatsApp outreach, and flawless email triggers. This document fundamentally breaks down why scaling brands are plugging BoostACart into their stack to sit alongside or replace their traditional Klaviyo abandoned cart pipelines.
            </p>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section>
          <h2 className={`${syne.className} text-3xl md:text-5xl font-bold mb-10 text-center text-white`}>Head-to-Head Feature Comparison</h2>
          <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-[#0b102b]/40 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#12193b]">
                  <th className="p-6 text-indigo-200 font-semibold border-b border-white/5 text-lg">Feature Core Capability</th>
                  <th className="p-6 text-white font-bold border-b border-white/5 border-l bg-cyan-500/10 text-xl">BoostACart</th>
                  <th className="p-6 text-indigo-300 font-medium border-b border-white/5 border-l text-xl">Klaviyo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-indigo-100/70">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Lead Capture Timing</td>
                  <td className="p-6 border-l border-white/5 bg-cyan-500/5"><span className="flex items-center gap-2 text-cyan-300"><Check className="w-5 h-5"/> At Add-to-Cart Action</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><X className="w-5 h-5 text-rose-500"/> At Checkout or Popups</span></td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Lead Capture Rate</td>
                  <td className="p-6 border-l border-white/5 bg-cyan-500/5"><span className="flex items-center gap-2 text-cyan-300"><Check className="w-5 h-5"/> 15% - 25% (Extremely High)</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><X className="w-5 h-5 text-rose-500"/> 2% - 5% (Avg Popups)</span></td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">WhatsApp Integration</td>
                  <td className="p-6 border-l border-white/5 bg-cyan-500/5"><span className="flex items-center gap-2 text-cyan-300"><Check className="w-5 h-5"/> Native & Automated</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><X className="w-5 h-5 text-rose-500"/> Not Supported Natively</span></td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Primary Focus</td>
                  <td className="p-6 border-l border-white/5 bg-cyan-500/5"><span className="text-cyan-300">Revenue Recovery & Cart Saving</span></td>
                  <td className="p-6 border-l border-white/5">General Email Newsletters & Broadcasts</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Store Speed Impact</td>
                  <td className="p-6 border-l border-white/5 bg-cyan-500/5"><span className="flex items-center gap-2 text-cyan-300"><Zap className="w-5 h-5"/> Zero Impact (Async JS)</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><Clock className="w-5 h-5 text-indigo-400"/> Heavy DOM Execution</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
           <div className="space-y-6">
             <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>Pricing Comparison: Don't Get Penalized For Growing</h2>
             <p className="text-lg text-indigo-100/60 leading-relaxed">
               Traditional email platforms price heavily based on your total list size. This creates a deeply frustrating paradox where you are financially penalized for capturing more leads. The more successful your top-of-funnel marketing is, the higher your monthly Klaviyo bill skyrockets—even if those users don't buy immediately. <Link href="/pricing" className="text-fuchsia-400 hover:text-fuchsia-300 underline">See our precise pricing structure</Link>.
             </p>
             <p className="text-lg text-indigo-100/60 leading-relaxed">
               BoostACart's pricing model is completely different. We focus purely on the utility of capturing the cart abandoner. Rather than demanding massive enterprise fees simply for storing a database of email addresses, BoostACart ensures your margins remain pristine. By maximizing your ROI off your existing ad spend without expanding your fixed overhead, we scale with your real success, not just your inactive subscriber count.
             </p>
           </div>
           <div className="bg-gradient-to-br from-[#12193b] to-[#04091A] border border-fuchsia-500/20 p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-fuchsia-500/20 blur-[100px] rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><DollarSign className="w-8 h-8 text-fuchsia-400"/> The Bottom Line</h3>
              <ul className="space-y-6 text-lg text-indigo-100/70">
                <li className="flex items-start gap-4"><Check className="w-6 h-6 text-fuchsia-400 flex-shrink-0 mt-1"/> <div><strong>BoostACart:</strong> Extremely high ROI pricing tailored to massive capture volume without contact limits punishing your scale.</div></li>
                <li className="flex items-start gap-4"><X className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1"/> <div><strong>Klaviyo:</strong> Rapidly escalating tiers. 50,000 completely cold emails will cost you $600+ every single month just to store them.</div></li>
              </ul>
           </div>
        </section>

        {/* Use Case Differences & Pros / Cons */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
             <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>Core Use Case Differences</h2>
             <p className="text-lg text-indigo-100/60 leading-relaxed">
               The key differentiator is exactly when and why you use these systems. If you need a weekly newsletter editor with complex A/B testing for massive holiday blasts, Klaviyo is a magnificent tool. However, if your immediate, burning goal is to plug a leaky funnel and stop losing massive amounts of Daily Return on Ad Spend (ROAS), BoostACart is the surgical intervention needed.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0b102b]/60 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-10 shadow-lg shadow-cyan-900/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><TrendingUp className="text-cyan-400"/> BoostACart Pros & Cons</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-4 px-3 py-1 bg-cyan-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Advantages</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-indigo-100/70"><Check className="text-cyan-400 w-5 h-5 shrink-0"/> Unrivaled pre-checkout capture algorithm.</li>
                    <li className="flex gap-3 text-indigo-100/70"><Check className="text-cyan-400 w-5 h-5 shrink-0"/> Omnichannel WhatsApp, SMS, and Email routing.</li>
                    <li className="flex gap-3 text-indigo-100/70"><Check className="text-cyan-400 w-5 h-5 shrink-0"/> Designed purely to increase immediate store profitability.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-400 mb-4 px-3 py-1 bg-rose-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Limitations</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-indigo-100/70"><X className="text-rose-500 w-5 h-5 shrink-0"/> Not built for standard newsletter broadcasting.</li>
                    <li className="flex gap-3 text-indigo-100/70"><X className="text-rose-500 w-5 h-5 shrink-0"/> Does not include advanced drag-and-drop landing page builders.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#0b102b]/60 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-10 shadow-lg shadow-indigo-900/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><BarChart className="text-indigo-400"/> Klaviyo Pros & Cons</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-indigo-300 mb-4 px-3 py-1 bg-indigo-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Advantages</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-indigo-100/70"><Check className="text-indigo-400 w-5 h-5 shrink-0"/> World class email segmentation logic.</li>
                    <li className="flex gap-3 text-indigo-100/70"><Check className="text-indigo-400 w-5 h-5 shrink-0"/> Deep connections to hundreds of generic Shopify apps.</li>
                    <li className="flex gap-3 text-indigo-100/70"><Check className="text-indigo-400 w-5 h-5 shrink-0"/> Excellent templating engine for visual emails.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-400 mb-4 px-3 py-1 bg-rose-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Limitations</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-indigo-100/70"><X className="text-rose-500 w-5 h-5 shrink-0"/> Fails to capture the vast majority of cart abandoners due to timing.</li>
                    <li className="flex gap-3 text-indigo-100/70"><X className="text-rose-500 w-5 h-5 shrink-0"/> Very expensive pricing as your list grows.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to choose BoostACart */}
        <section className="bg-gradient-to-r from-cyan-900/20 to-fuchsia-900/20 border-y border-white/5 py-16 -mx-4 px-4 md:px-12 md:rounded-[3rem] md:mx-0 shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-[#04091A]/50 backdrop-blur-sm z-0"></div>
           <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
             <Shield className="w-16 h-16 text-cyan-400 mx-auto"/>
             <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}>When to Choose BoostACart</h2>
             <p className="text-xl text-indigo-100/80 leading-relaxed font-light">
               You should choose to <Link href="/shopify-cart-recovery" className="text-cyan-400 hover:underline">recover abandoned carts using BoostACart</Link> immediately if you are running paid ads (Meta, TikTok, Google) and suffering from high Customer Acquisition Costs (CAC). If you notice that you are getting hundreds of Add-to-Carts every day, but only a small fraction translate into "Reached Checkout" metrics, BoostACart is the ultimate weapon to bridge that gap. 
             </p>
             <p className="text-xl text-indigo-100/80 leading-relaxed font-light">
               The math is very simple: if Klaviyo is currently recovering 10 carts a week because it only captures 5% of abandoners, BoostACart's high-fidelity pre-checkout funnel will capture up to 10x that volume, driving immediate cash flow back into your business. Use BoostACart to secure the sale, and let Klaviyo send the monthly newsletters. It's the ultimate combination for aggressive scaling. Check out our <Link href="/tools" className="text-fuchsia-400 hover:underline">Free Tools</Link> to estimate your exact recovery impact mathematically.
             </p>
             <Link href="/" className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
               Deploy BoostACart Now
             </Link>
           </div>
        </section>

        {/* FAQ Schema Application */}
        <section className="max-w-3xl mx-auto pt-10">
           <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
           <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white mb-10 text-center`}>Frequently Asked Questions</h2>
           <div className="space-y-6">
             {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="bg-[#0b102b]/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-[#0b102b] hover:border-cyan-500/20 transition-all">
                  <h3 className="text-xl font-bold text-white mb-3 text-cyan-50">Q: {faq.name}</h3>
                  <p className="text-indigo-200/60 leading-relaxed pl-6 border-l-2 border-cyan-500/30">
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
