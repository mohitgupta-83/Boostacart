import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Zap, TrendingUp, ShoppingCart, MessageCircle, BarChart, Clock } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Abandoned Cart Recovery – The Complete 2025 Guide",
  description: "80% of shoppers abandon their carts. Learn the proven strategies, tools, and templates to recover abandoned carts and boost Shopify revenue by 25%+.",
  alternates: { canonical: "https://boostacart.com/abandoned-cart-recovery" },
  openGraph: {
    title: "Abandoned Cart Recovery – The Complete 2025 Guide",
    description: "80% of shoppers abandon their carts. Learn the proven strategies, tools, and templates to recover abandoned carts and boost Shopify revenue by 25%+.",
    url: "https://boostacart.com/abandoned-cart-recovery",
    type: "website",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function AbandonedCartRecovery() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is abandoned cart recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Abandoned cart recovery is the process of re-engaging shoppers who added products to their cart but left without purchasing, using follow-up emails, SMS, or WhatsApp messages." } },
      { "@type": "Question", "name": "What is a good abandoned cart recovery rate?", "acceptedAnswer": { "@type": "Answer", "text": "The average abandoned cart recovery rate is 5-15% through email. BoostACart achieves 20-35%+ by capturing leads at Add-to-Cart and using omnichannel follow-ups." } },
      { "@type": "Question", "name": "How long should my abandoned cart recovery sequence be?", "acceptedAnswer": { "@type": "Answer", "text": "The optimal sequence is 3 messages: first within 1 hour (highest conversion), second at 24 hours, and third at 72 hours with an incentive." } },
      { "@type": "Question", "name": "What is the cart abandonment rate?", "acceptedAnswer": { "@type": "Answer", "text": "The global cart abandonment rate is approximately 70-80%, meaning 7-8 out of every 10 shoppers who add to cart don't complete their purchase." } }
    ]
  };

  const stats = [
    { value: "70%+", label: "Average cart abandonment rate", color: "text-rose-400" },
    { value: "$18B", label: "Lost annually to cart abandonment", color: "text-orange-400" },
    { value: "25%", label: "Average recovery rate with BoostACart", color: "text-cyan-400" },
    { value: "10x", label: "More leads captured vs checkout-only tools", color: "text-fuchsia-400" },
  ];

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 overflow-hidden ${outfit.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 pt-32 pb-24 space-y-20">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-indigo-400/60">
          <Link href="/" className="hover:text-indigo-300">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-indigo-300">Guides</Link>
          <span>/</span>
          <span className="text-indigo-200">Abandoned Cart Recovery</span>
        </nav>

        {/* Hero */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">The Complete Playbook</span>
          <h1 className={`${syne.className} text-5xl md:text-6xl font-bold text-white leading-tight`}>
            Abandoned Cart Recovery: <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">The 2025 Master Guide</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            Every day, millions of shoppers abandon their carts. This comprehensive guide covers the exact strategies, message templates, and tools you need to recover 20-35% of that lost revenue — starting this week.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0b102b]/60 border border-white/5 rounded-2xl p-6 text-center">
              <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-indigo-200/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* What is Abandoned Cart Recovery */}
        <section className="space-y-6">
          <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>What Is Abandoned Cart Recovery?</h2>
          <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-4">
            <p>
              Abandoned cart recovery is the systematic process of re-engaging shoppers who have added one or more products to their cart but left your store without completing the purchase. This is one of the highest-ROI activities available to any ecommerce store owner because you are targeting people who already demonstrated purchase intent.
            </p>
            <p>
              Traditional recovery tools wait for a shopper to reach the checkout page and enter their email before they can trigger any follow-up sequence. This is a fundamentally flawed approach because the vast majority (70%+) of shoppers who add to cart never reach checkout — they abandon on the product page, cart page, or at the very first checkout form.
            </p>
            <p>
              <Link href="/shopify-cart-recovery" className="text-cyan-400 hover:text-cyan-300 underline">BoostACart pioneered a more effective approach</Link>: capturing the shopper's contact information the exact moment they click "Add to Cart," before they ever see the checkout. This pre-checkout capture model unlocks 5-10x more recovery opportunities than any post-checkout email flow.
            </p>
          </div>
        </section>

        {/* Why Carts Get Abandoned */}
        <section className="bg-[#0b102b]/50 border border-white/5 rounded-3xl p-8 md:p-12 space-y-8">
          <h2 className={`${syne.className} text-3xl font-bold text-white`}>Why Do Shoppers Abandon Their Carts?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg text-indigo-100/70 leading-relaxed">
            <div className="space-y-4">
              <p>Understanding the root cause of abandonment is the first step to recovery. Research from the Baymard Institute identifies the top abandonment reasons:</p>
              <ul className="space-y-3">
                {["Extra costs (shipping, taxes) too high — 48%", "Account creation required — 24%", "Slow delivery times — 23%", "Trust concerns with payment — 18%", "Complicated checkout process — 17%"].map((r, i) => (
                  <li key={i} className="flex gap-3"><CheckCircle className="text-cyan-400 w-5 h-5 shrink-0 mt-0.5"/>{r}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p>Many of these issues can be directly addressed in your recovery messaging. A well-timed follow-up that:</p>
              <ul className="space-y-3">
                {["Highlights free shipping thresholds", "Offers a guest checkout link", "Shows social proof and trust badges", "Provides a time-limited discount offer", "Answers common product questions"].map((r, i) => (
                  <li key={i} className="flex gap-3"><Zap className="text-fuchsia-400 w-5 h-5 shrink-0 mt-0.5"/>{r}</li>
                ))}
              </ul>
              <p>...can convert 20-35% of those who would have otherwise been permanently lost.</p>
            </div>
          </div>
        </section>

        {/* The 3-Step Recovery Framework */}
        <section className="space-y-8">
          <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>The 3-Step Recovery Framework That Works in 2025</h2>
          <p className="text-lg text-indigo-100/70 leading-relaxed">
            The most successful abandoned cart recovery strategies follow a precise timing sequence. Each touchpoint serves a distinct psychological purpose in guiding the shopper back to complete their purchase.
          </p>
          <div className="space-y-6">
            {[
              { step: "1", time: "Within 1 Hour", title: "The Intent Hook", icon: <Zap className="w-6 h-6"/>, color: "cyan", desc: "Strike while the iron is hot. The shopper is still in buying mode. A simple reminder with a direct link back to their cart converts at the highest rate — often 10-15% of recipients. No discount needed at this stage. Keep it short, direct, and personal. WhatsApp and SMS outperform email at this stage due to instant delivery and high open rates." },
              { step: "2", time: "24 Hours Later", title: "The Value Reinforcement", icon: <TrendingUp className="w-6 h-6"/>, color: "fuchsia", desc: "The shopper has had time to think — and possibly shop competitors. Reinforce the value of your product. Include social proof (reviews, testimonials), answer likely objections, highlight unique benefits, and remind them what they are missing. This is the right time to mention standard shipping terms or easy returns policy." },
              { step: "3", time: "72 Hours Later", title: "The Final Incentive", icon: <BarChart className="w-6 h-6"/>, color: "emerald", desc: "Your last attempt. If they haven't converted yet, offer a time-sensitive incentive — a discount code, free shipping, or a small bonus gift. Make it clear this offer expires. Urgency is your most powerful conversion lever at this stage. This message typically converts at 5-8% — lower than the first, but still extremely profitable." },
            ].map((step, i) => (
              <div key={i} className={`flex gap-6 p-8 bg-[#0b102b]/50 border border-${step.color}-500/20 rounded-2xl`}>
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-${step.color}-500/10 border border-${step.color}-500/30 flex items-center justify-center text-${step.color}-400`}>
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-${step.color}-400 font-bold text-lg`}>Step {step.step}</span>
                    <span className="text-indigo-400/60 text-sm flex items-center gap-1"><Clock className="w-4 h-4"/>{step.time}</span>
                    <span className="font-bold text-white">{step.title}</span>
                  </div>
                  <p className="text-indigo-100/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Channel Strategy */}
        <section className="space-y-8">
          <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>Which Channel Recovers the Most Revenue?</h2>
          <p className="text-lg text-indigo-100/70 leading-relaxed">
            Channel selection dramatically impacts your recovery rate. Here is a data-driven comparison of the three primary channels used for cart recovery in 2025:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { channel: "Email", open: "22%", recovery: "5-10%", icon: <BarChart className="w-8 h-8"/>, color: "indigo", pros: "Low cost, high deliverability, easy automation", cons: "Low open rates, often lands in promotions tab" },
              { channel: "SMS", open: "95%", recovery: "15-20%", icon: <MessageCircle className="w-8 h-8"/>, color: "fuchsia", pros: "Extremely high open rates, fast delivery", cons: "Carrier costs, compliance requirements" },
              { channel: "WhatsApp", open: "90%+", recovery: "20-35%", icon: <Zap className="w-8 h-8"/>, color: "cyan", pros: "Highest conversational engagement, international reach", cons: "Requires WhatsApp Business API integration" },
            ].map((ch, i) => (
              <div key={i} className={`bg-[#0b102b]/60 border border-${ch.color}-500/20 rounded-2xl p-6 space-y-4`}>
                <div className={`text-${ch.color}-400`}>{ch.icon}</div>
                <h3 className="text-xl font-bold text-white">{ch.channel}</h3>
                <div className="space-y-1">
                  <p className="text-sm text-indigo-400/60">Open Rate</p>
                  <p className={`text-2xl font-bold text-${ch.color}-400`}>{ch.open}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-indigo-400/60">Recovery Rate</p>
                  <p className="text-lg font-bold text-white">{ch.recovery}</p>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-2 text-sm text-indigo-100/60">
                  <p><span className="text-cyan-400">✓</span> {ch.pros}</p>
                  <p><span className="text-rose-400">✗</span> {ch.cons}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-indigo-100/70 leading-relaxed">
            <Link href="/shopify-cart-recovery" className="text-cyan-400 hover:underline">BoostACart enables all three channels simultaneously</Link>. By capturing the lead pre-checkout via Add-to-Cart, you unlock a multi-channel sequence that covers Email, SMS, and WhatsApp — maximizing your reach regardless of which channel the shopper prefers.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-900/20 to-fuchsia-900/20 border border-white/10 rounded-3xl p-10 md:p-16 text-center space-y-6">
          <ShoppingCart className="w-16 h-16 text-cyan-400 mx-auto"/>
          <h2 className={`${syne.className} text-4xl font-bold text-white`}>Start Recovering Carts Today</h2>
          <p className="text-xl text-indigo-100/70 max-w-2xl mx-auto">
            Join thousands of Shopify stores using BoostACart to capture leads at Add-to-Cart and recover 25%+ of abandoned purchases automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">Start Free Trial</Link>
            <Link href="/tools/roas-calculator" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">Calculate Your ROAS <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className={`${syne.className} text-3xl font-bold text-white`}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6 hover:bg-[#0b102b] transition-all">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-cyan-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-white/5 pt-10">
          <h2 className={`${syne.className} text-2xl font-bold text-white mb-6`}>Continue Reading</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Shopify Cart Recovery", href: "/shopify-cart-recovery" },
              { title: "Cart Recovery for Dropshipping", href: "/cart-recovery-for-dropshipping" },
              { title: "Abandoned Cart Email Templates", href: "/abandoned-cart-email-template" },
              { title: "ROAS Calculator", href: "/tools/roas-calculator" },
              { title: "All Free Tools", href: "/tools" },
              { title: "BoostACart vs Klaviyo", href: "/boostacart-vs-klaviyo" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="p-4 bg-[#0b102b]/40 border border-white/5 rounded-xl hover:border-cyan-500/30 hover:bg-[#0b102b] transition-all text-indigo-200 hover:text-cyan-400 text-sm font-medium flex items-center gap-2">
                <ArrowRight className="w-4 h-4 shrink-0"/> {link.title}
              </Link>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
