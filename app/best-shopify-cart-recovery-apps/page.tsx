import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, Star, ShoppingCart, MessageSquare, Mail, Zap, Check, ShieldCheck, Trophy, Info } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "5 Best Shopify Cart Recovery Apps (2025 Review)",
  description: "Comparing the best Shopify cart recovery apps. See top-rated solutions for abandoned cart emails, SMS, and pre-checkout lead capture. Find the best ROI for your store.",
  alternates: { canonical: "https://boostacart.com/best-shopify-cart-recovery-apps" },
  openGraph: {
    title: "5 Best Shopify Cart Recovery Apps (2025 Review)",
    description: "Comparing the best Shopify cart recovery apps. See top-rated solutions for abandoned cart emails, SMS, and pre-checkout lead capture. Find the best ROI for your store.",
    url: "https://boostacart.com/best-shopify-cart-recovery-apps",
    type: "website",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function BestShopifyCartApps() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the best cart recovery app for beginners?", "acceptedAnswer": { "@type": "Answer", "text": "Shopify's native email tool is great for beginners, but it only recovers about 5% of lost revenue. As you scale and spend on ads, you need a specialized tool like BoostACart." } },
      { "@type": "Question", "name": "Which app has the best recovery rate?", "acceptedAnswer": { "@type": "Answer", "text": "BoostACart consistently achieves the highest recovery rates (25-35%) because it captures leads at the Add-to-Cart moment, whereas other apps wait for the shopper to reach checkout." } },
      { "@type": "Question", "name": "Are abandoned cart apps worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Since 7 out of 10 shoppers abandon their carts, even a 10% recovery rate can increase your total revenue by thousands of dollars per month with zero additional ad spend." } }
    ]
  };

  const apps = [
    {
      name: "BoostACart",
      rating: "5.0",
      bestFor: "Max ROI & Pre-Checkout Capture",
      tag: "Top Choice",
      desc: "BoostACart is the only app in this list that changes the fundamental recovery logic. Most apps wait for checkout step 1. BoostACart captures email and phone numbers directly on the product's Add-to-Cart button. This allows you to follow up with 10x more shoppers.",
      features: ["Pre-Checkout Lead Capture", "Automated WhatsApp Recovery", "SMS & Email Sequences", "No-Code Setup"],
      badge: <Trophy className="w-6 h-6 text-yellow-400" />
    },
    {
      name: "Klaviyo",
      rating: "4.7",
      bestFor: "Enterprise Email Marketing",
      tag: "Email King",
      desc: "Klaviyo is the industry standard for lifecycle email marketing. While powerful for newsletters and segmentation, their abandoned cart triggers rely on shoppers providing an email during checkout or being logged in.",
      features: ["Advanced Segmentation", "Deep CRM Integration", "Robust Flow Builder"],
      badge: <Mail className="w-6 h-6 text-indigo-400" />
    },
    {
      name: "Recart",
      rating: "4.5",
      bestFor: "Messenger & SMS Marketing",
      tag: "Channel Specialist",
      desc: "Recart focuses on Messenger and SMS. They were pioneers in moving away from pure email, but rely heavily on intrusive popups for lead collection, which can sometimes hurt store conversion rates.",
      features: ["SMS Marketing", "Facebook Messenger Integration", "Popup Builder"],
      badge: <MessageSquare className="w-6 h-6 text-fuchsia-400" />
    },
    {
      name: "Cartloop",
      rating: "4.4",
      bestFor: "Manual SMS Recovery",
      tag: "Conversational",
      desc: "Cartloop uses real humans to text your customers. It's high-touch and great for high-ticket items, but can be difficult to scale and takes a significant percentage of recovered revenue.",
      features: ["Real Human SMS Agents", "Conversational Marketing", "Revenue Share Pricing"],
      badge: <ShoppingCart className="w-6 h-6 text-emerald-400" />
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
            <Link href="/alternatives" className="hover:text-indigo-300">Alternatives</Link>
          </nav>
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider">Expert Review 2025</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            Best Shopify <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Cart Recovery Apps</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            We've tested every top-rated shopify app to find the ones that drive real revenue. In this guide, we break down top tools for abandoned cart emails, SMS, and WhatsApp recovery.
          </p>
        </div>

        {/* Intro */}
        <section className="bg-[#0b102b]/60 border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-6">
          <h2 className={`${syne.className} text-3xl font-bold text-white`}>The True Cost of Abandoned Carts</h2>
          <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-4">
            <p>
              According to industry data, 69.99% of shopping carts are abandoned. For a store doing $10,000 in monthly sales, that's nearly <span className="text-white font-bold">$23,000 in missed revenue</span> every single month.
            </p>
            <p>
              While Shopify has built-in recovery tools, they are limited. They wait for shoppers to reach the checkout, they only send emails, and they have zero personalization features. Specialized <Link href="/shopify-cart-recovery" className="text-cyan-400 hover:underline">checkout recovery tools</Link> can bridge this gap, often paying for themselves within the first 24 hours of installation.
            </p>
          </div>
        </section>

        {/* Checklist */}
        <section className="space-y-8">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>What to Look for in a Recovery App</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Lead Capture Depth", desc: "Does it capture leads at Add-to-Cart or only at Checkout?" },
              { title: "Multi-Channel Support", desc: "Can it send WhatsApp, SMS, and Email sequences?" },
              { title: "Automation Flexibility", desc: "Can you customize timing and triggers per product?" },
              { title: "Deliverability Rates", desc: "Does the app ensure messages don't land in spam folders?" },
              { title: "Integration Ease", desc: "Does it work with your current theme and tech stack?" },
              { title: "Direct Cart Links", desc: "Does it take shoppers directly back to their saved items?" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-[#0b102b]/40 border border-white/5 rounded-2xl items-start">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400"><Check className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-indigo-100/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* App Reviews */}
        <section className="space-y-12">
          {apps.map((app, i) => (
            <div key={i} className="group relative bg-[#0b102b]/40 border border-white/5 rounded-3xl p-8 md:p-12 hover:border-cyan-500/20 transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">{app.badge}</div>
                    <div>
                      <h3 className={`${syne.className} text-3xl font-bold text-white flex items-center gap-3`}>
                        {app.name}
                        {app.tag && <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-md border border-cyan-500/30 uppercase tracking-widest">{app.tag}</span>}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-indigo-200/60 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-white">{app.rating}</span> / 5.0 — {app.bestFor}
                      </div>
                    </div>
                  </div>
                </div>
                {app.name === "BoostACart" ? (
                  <Link href="/" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">Visit App Store</Link>
                ) : (
                  <Link href={app.name.toLowerCase().includes('klaviyo') ? '/boostacart-vs-klaviyo' : app.name.toLowerCase().includes('recart') ? '/best-recart-alternatives' : app.name.toLowerCase().includes('cartloop') ? '/cartloop-alternative' : '#'} className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 text-sm">Read Comparsion <ArrowRight className="w-4 h-4"/></Link>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <p className="text-lg text-indigo-100/70 leading-relaxed italic border-l-2 border-indigo-500/30 pl-6">"{app.desc}"</p>
                  <div className="p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl flex gap-3 text-sm text-cyan-400/80">
                    <Info className="w-5 h-5 shrink-0"/>
                    <p>Best for store owners who want to <Link href="/shopify-cart-recovery" className="font-bold underline">recover abandoned carts on shopify</Link> with zero technical friction.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {app.features.map((f, i) => (
                      <li key={i} className="flex gap-3 text-indigo-100/60 items-center"><ShieldCheck className="w-5 h-5 text-emerald-500/50" /> {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Global CTA */}
        <section className="bg-gradient-to-r from-cyan-900/40 to-indigo-900/40 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-transparent pointer-events-none">
            <div className="absolute -top-24 -left-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-24 -right-32 w-80 h-80 bg-indigo-400/10 rounded-full blur-[120px]"></div>
          </div>
          <h2 className={`${syne.className} text-4xl md:text-6xl font-bold text-white leading-tight`}>
            Launch The Winner in <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">90 Seconds</span>
          </h2>
          <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto">
            Stop comparing and start recovering. BoostACart installs via one simple snippet and starts capturing leads instantly. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Start Recovering Now <Zap className="w-5 h-5 fill-black"/></Link>
            <Link href="/tools" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">Free ROI Calculators</Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-8">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Shopify App FAQ</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
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
