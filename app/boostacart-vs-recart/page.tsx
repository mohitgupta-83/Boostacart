import { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ArrowRight, Smartphone, Zap, ShieldAlert, BadgeInfo, MessageSquare, Megaphone, DollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://boostacart.com/boostacart-vs-recart"
  },
  title: "BoostACart vs Recart - Stop Losing Sales to Weak Forms",
  description: "A deep dive comparing BoostACart and Recart for Shopify cart recovery. Why capturing leads before checkout is necessary in 2025.",
};

export default function BoostACartVsRecart() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question", "name": "How is Recart different from BoostACart?", 
        "acceptedAnswer": { "@type": "Answer", "text": "Recart heavily relies on Messenger and generic SMS popups, whereas BoostACart focuses intensely on frictionless, instant capture at the exact moment a customer clicks Add-to-Cart without forcing them into a massive marketing pipeline first." }
      },
      {
        "@type": "Question", "name": "Does BoostACart require an entire app ecosystem?", 
        "acceptedAnswer": { "@type": "Answer", "text": "No. BoostACart is a surgical, pure-performance recovery module. You do not need to rewrite your entire theme or delete your existing marketing stack." }
      },
      {
        "@type": "Question", "name": "Why is WhatsApp better than Messenger?", 
        "acceptedAnswer": { "@type": "Answer", "text": "Facebook Messenger open rates have plummeted due to platform fatigue, but WhatsApp boasts an astounding 90%+ read rate for critical transactional follow-ups." }
      }
    ]
  };

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-orange-500/30 overflow-hidden ${outfit.className}`}>
      <Navbar />
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
         <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-32 pb-24 space-y-24">
        
        {/* Hub Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
           <Link href="/tools" className="px-5 py-2 rounded-full border border-white/10 text-indigo-300 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all font-medium text-sm">Our ROI Tools</Link>
           <Link href="/comparisons" className="px-5 py-2 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/50 font-medium text-sm">Competitor Comparisons</Link>
        </div>

        {/* Hero */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
           <h1 className={`${syne.className} text-5xl md:text-7xl font-bold leading-tight`}>
             BoostACart vs Recart: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">The Pre-Checkout Evolution</span>
           </h1>
           <p className="text-xl text-indigo-100/60 leading-relaxed font-light">
             Comparing the differences between legacy messenger/SMS broadcast platforms and hyper-vertical cart recovery engines. Learn why the world's best scaling brands <Link href="/shopify-cart-recovery" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">recover abandoned carts using BoostACart</Link>.
           </p>
        </section>

        {/* Introduction */}
        <section className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 blur-[80px]"></div>
          <h2 className={`${syne.className} text-3xl md:text-4xl font-bold mb-6 text-white relative z-10`}>Introduction: Fixing the Leaky Bucket</h2>
          <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-6 relative z-10">
            <p>
              Recart was a pioneer in transitioning ecommerce merchants away from pure email and into Facebook Messenger marketing. For a time, their messenger popups and automated sequences were the absolute gold standard for ROI. But the landscape of consumer behavior radically shifted under their feet. Facebook severely restricted promotional messaging limits, consumer fatigue for Messenger skyrocketed, and SMS suddenly became incredibly expensive per message.
            </p>
            <p>
              In this new reality, merchants don't want massive broadcast platforms that are bloated with generic promotional bells and whistles. They need a laser-focused, ruthlessly effective recovery engine. BoostACart stepped into this exact gap. By sidestepping the massive Messenger opt-in structures and directly triggering seamless pre-checkout capture modals, BoostACart generates exponentially more usable phone numbers and emails right at the height of user intent.
            </p>
            <p>
              If your goal is to send 10,000 promo texts about Black Friday to past buyers, Recart is a fine choice. But if you have an active ad campaign hemorrhaging cash because traffic is adding to cart and instantly bouncing, you must pivot. Leveraging native WhatsApp and SMS, BoostACart is the supreme specialized tool. Check out our <Link href="/pricing" className="text-cyan-400">transparent tiering structures</Link> here to calculate the massive difference in fixed overhead.
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
                  <th className="p-6 text-indigo-200 font-semibold border-b border-white/5 text-lg">Platform Capability</th>
                  <th className="p-6 text-white font-bold border-b border-white/5 border-l bg-cyan-500/10 text-xl text-center">BoostACart</th>
                  <th className="p-6 text-indigo-300 font-medium border-b border-white/5 border-l text-xl text-center">Recart</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-indigo-100/70">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Core Acquisition Logic</td>
                  <td className="p-6 border-l border-white/5 bg-cyan-500/5"><span className="flex items-center gap-2 text-cyan-300"><Check className="w-5 h-5"/> Deep ATC Triggers</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-indigo-400"/> Exit Intent & Chat Bubbles</span></td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Capture Friction</td>
                  <td className="p-6 border-l border-white/5 bg-cyan-500/5"><span className="flex items-center gap-2 text-cyan-300"><Check className="w-5 h-5"/> Extremely Low (Flows Naturally)</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-rose-500"/> High (Intrusive Popups)</span></td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Facebook Messenger Reliance</td>
                  <td className="p-6 border-l border-white/5 bg-cyan-500/5"><span className="flex items-center gap-2 text-cyan-300"><Check className="w-5 h-5"/> Zero (Uses Email/SMS/WA)</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><Megaphone className="w-5 h-5 text-indigo-400"/> Heavy Legacy Reliance</span></td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium">Onboarding Time</td>
                  <td className="p-6 border-l border-white/5 bg-cyan-500/5"><span className="flex items-center gap-2 text-cyan-300"><Zap className="w-5 h-5"/> 2 Minutes (Snippets)</span></td>
                  <td className="p-6 border-l border-white/5"><span className="flex items-center gap-2"><BadgeInfo className="w-5 h-5 text-indigo-400"/> Several Hours (Compliance)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
           <div className="bg-gradient-to-br from-[#12193b] to-[#04091A] border border-orange-500/20 p-10 rounded-[2.5rem] relative overflow-hidden order-last lg:order-first">
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><DollarSign className="w-8 h-8 text-orange-400"/> The Pricing Verdict</h3>
              <ul className="space-y-6 text-lg text-indigo-100/70">
                <li className="flex items-start gap-4"><Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1"/> <div><strong>BoostACart:</strong> Transparent monthly flats focused purely on recovery usage. High-ROI focus.</div></li>
                <li className="flex items-start gap-4"><X className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1"/> <div><strong>Recart:</strong> Complex carrier/SMS delivery fees scaling dangerously high with list size.</div></li>
              </ul>
           </div>
           
           <div className="space-y-6">
             <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>Pricing Comparison: Don't Subsidize SMS Sprawl</h2>
             <p className="text-lg text-indigo-100/60 leading-relaxed">
               Because Recart is a massive broadcast SMS tool, their pricing must artificially inflate to cover massive telecom delivery costs across millions of texts. You end up inadvertently paying for the entire platform's infrastructural sprawl. 
             </p>
             <p className="text-lg text-indigo-100/60 leading-relaxed">
               BoostACart avoids this massive overhead by specializing solely in immediate abandoned cart interventions. We lean heavily into WhatsApp routing and high-deliverability transactional email triggers instead of blasting dead leads with expensive carrier text messages. This means our pricing remains beautifully decoupled from traditional SMS penalties. <Link href="/features" className="text-orange-400 hover:text-orange-300 underline">See our feature suite here.</Link>
             </p>
           </div>
        </section>

        {/* Pros and Cons */}
        <section className="text-center">
             <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white mb-6`}>Use Cases, Pros & Cons</h2>
             <p className="text-lg text-indigo-100/60 leading-relaxed max-w-3xl mx-auto mb-12">
               Are you trying to blast a 30% off coupon to 100,000 old buyers? Or are you trying to stop the $50 CPM ad campaign from bleeding cash? Here is the breakdown.
             </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-[#0b102b]/60 border border-cyan-500/30 rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">BoostACart</h3>
                <h4 className="font-semibold text-cyan-300 mb-4 px-3 py-1 bg-cyan-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Pros</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 text-indigo-100/70"><Check className="text-cyan-400 w-5 h-5 shrink-0"/> Triggers instantly to capture details without navigating away.</li>
                  <li className="flex gap-3 text-indigo-100/70"><Check className="text-cyan-400 w-5 h-5 shrink-0"/> Multi-channel fallback (WA/SMS/Email) ensures delivery.</li>
                </ul>
                <h4 className="font-semibold text-rose-400 mb-4 px-3 py-1 bg-rose-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Cons</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-indigo-100/70"><X className="text-rose-500 w-5 h-5 shrink-0"/> Built strictly for cart recovery, not generalized CRM marketing.</li>
                </ul>
              </div>
              <div className="bg-[#0b102b]/60 border border-indigo-500/30 rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Recart</h3>
                <h4 className="font-semibold text-indigo-300 mb-4 px-3 py-1 bg-indigo-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Pros</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 text-indigo-100/70"><Check className="text-indigo-400 w-5 h-5 shrink-0"/> Tremendous platform for mass SMS announcements and sales broadcasts.</li>
                  <li className="flex gap-3 text-indigo-100/70"><Check className="text-indigo-400 w-5 h-5 shrink-0"/> Drag and drop custom popups and sweepstakes wheels.</li>
                </ul>
                <h4 className="font-semibold text-rose-400 mb-4 px-3 py-1 bg-rose-500/10 inline-block rounded-md tracking-widest text-sm uppercase">Cons</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-indigo-100/70"><X className="text-rose-500 w-5 h-5 shrink-0"/> Severe compliance headaches with global SMS opt-in laws.</li>
                  <li className="flex gap-3 text-indigo-100/70"><X className="text-rose-500 w-5 h-5 shrink-0"/> Exceedingly high costs for marginal ROI on small lists.</li>
                </ul>
              </div>
            </div>
        </section>

        {/* When to choose BoostACart */}
        <section className="bg-gradient-to-r from-cyan-900/20 to-orange-900/20 border-y border-white/5 py-16 -mx-4 px-4 md:px-12 md:rounded-[3rem] md:mx-0 shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-[#04091A]/50 backdrop-blur-sm z-0"></div>
           <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
             <MessageSquare className="w-16 h-16 text-cyan-400 mx-auto"/>
             <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}>When to Choose BoostACart vs Recart</h2>
             <p className="text-xl text-indigo-100/80 leading-relaxed font-light">
               The decision is binary. If you need a fully bloated CRM that blasts out text messages via massive exit-intent popups, Recart is standard. But if you want to silently deploy a mathematical arbitrage system that intercepts high-intent traffic directly at Add To Cart—guaranteeing 2x to 5x higher lead volume—you must <Link href="/shopify-cart-recovery" className="text-cyan-400 hover:underline">recover abandoned carts using BoostACart</Link>.
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
                <div key={i} className="bg-[#0b102b]/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-[#0b102b] hover:border-orange-500/20 transition-all">
                  <h3 className="text-xl font-bold text-white mb-3 text-orange-50">Q: {faq.name}</h3>
                  <p className="text-indigo-200/60 leading-relaxed pl-6 border-l-2 border-orange-500/30">
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
