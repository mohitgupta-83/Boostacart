import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, Star, BarChart, ShoppingCart } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "The #1 Shopify Abandoned Cart App for 2025 – BoostACart",
  description: "Recover 25% of lost revenue with the only Shopify abandoned cart app that captures leads at the Add-to-Cart moment. Secure, automated, and ROI-focused.",
  alternates: { canonical: "https://boostacart.com/shopify-abandoned-cart-app" },
  openGraph: {
    title: "The #1 Shopify Abandoned Cart App for 2025 – BoostACart",
    description: "Recover 25% of lost revenue with the only Shopify abandoned cart app that captures leads at the Add-to-Cart moment. Secure, automated, and ROI-focused.",
    url: "https://boostacart.com/shopify-abandoned-cart-app",
    type: "website",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function ShopifyAbandonedCartApp() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the best Shopify abandoned cart app?", "acceptedAnswer": { "@type": "Answer", "text": "BoostACart is widely considered the most effective Shopify abandoned cart app for high-volume stores because it captures email and phone numbers at the Add-to-Cart moment, rather than waiting for checkout." } },
      { "@type": "Question", "name": "How much does a Shopify abandoned cart app cost?", "acceptedAnswer": { "@type": "Answer", "text": "Most apps charge a monthly fee plus a percentage of recovered revenue or a cost-per-message. BoostACart offers transparent, flat-rate pricing designed to maximize your ROI as you scale." } },
      { "@type": "Question", "name": "Do I need an app for abandoned carts on Shopify?", "acceptedAnswer": { "@type": "Answer", "text": "While Shopify has basic built-in email recovery, it only captures about 5-10% of lost sales. A specialized app like BoostACart can recover 25-35% by using SMS, WhatsApp, and pre-checkout lead capture." } },
      { "@type": "Question", "name": "Does BoostACart work with all Shopify themes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, BoostACart is compatible with all Shopify 2.0 themes and legacy themes. Installation takes less than 2 minutes via a simple script injection." } }
    ]
  };

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 overflow-hidden ${outfit.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 pt-32 pb-24 space-y-20">

        {/* Hero */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
          </div>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            The Highest-ROI <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Shopify Abandoned Cart App</span>
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed">
            Stop losing 70% of your Shopify sales. BoostACart is the only app that captures leads <span className="text-white font-semibold italic">at the Add-to-Cart moment</span>, enabling automated recovery via WhatsApp, SMS, and Email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">Get Started Free</Link>
            <Link href="/pricing" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Pricing</Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Pre-Checkout Capture", desc: "Collect email and phone numbers the second they click 'Add to Cart'. Don't wait for checkout step 1.", icon: <Zap className="w-8 h-8 text-cyan-400"/> },
            { title: "Omnichannel Recovery", desc: "Automate recovery sequences across WhatsApp (90%+ open rates), SMS, and Email simultaneously.", icon: <Smartphone className="w-8 h-8 text-fuchsia-400"/> },
            { title: "Data-Driven ROI", desc: "See exactly how much revenue is recovered per campaign with our granular analytics dashboard.", icon: <BarChart className="w-8 h-8 text-emerald-400"/> },
          ].map((f, i) => (
            <div key={i} className="bg-[#0b102b]/60 border border-white/5 rounded-3xl p-8 space-y-4 hover:border-white/10 transition-all">
              <div className="p-3 bg-white/5 rounded-2xl w-fit">{f.icon}</div>
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="text-indigo-100/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Deep Dive Content */}
        <section className="space-y-12">
          <div className="space-y-6">
            <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>Why Shopify Stores Need a Specialized Recovery App</h2>
            <div className="prose prose-invert max-w-none text-lg text-indigo-100/70 leading-relaxed space-y-4">
              <p>
                Shopify's built-in abandoned cart emails are a great starting point, but they suffer from a massive limitation: they only work for customers who have already reached the checkout page. In the competitive landscape of 2025, over 70% of shoppers abandon well before reaching that stage.
              </p>
              <p>
                A high-performance <Link href="/shopify-cart-recovery" className="text-cyan-400 hover:text-cyan-300 underline">Shopify abandoned cart app</Link> like BoostACart moves the lead capture point to the top of the funnel. By intercepting the user on the product page, you drastically increase your contactable lead list, which in turn multiplies your total revenue recovery potential by up to 10x.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className={`${syne.className} text-2xl font-bold text-white`}>WhatsApp: The Secret Weapon for Recovery</h3>
              <p className="text-indigo-100/70 leading-relaxed">
                While email open rates hover around 20%, WhatsApp messages see open rates exceeding 90%. As a primary Shopify abandoned cart app feature, our native WhatsApp integration allows you to reach shoppers in a conversational, high-trust environment where they are most likely to respond.
              </p>
              <ul className="space-y-3">
                {["Automated WhatsApp triggers", "Direct 'Return to Cart' links", "Interactive quick-reply buttons", "Rich media support (images/videos)"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-indigo-100/60"><CheckCircle className="text-cyan-400 w-5 h-5"/> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0b102b]/80 border border-white/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px]"></div>
               <div className="aspect-video bg-[#04091A] rounded-2xl border border-white/5 flex items-center justify-center p-6 text-center">
                  <div className="space-y-4">
                    <MessageCircleIcon className="w-12 h-12 text-cyan-400 mx-auto" />
                    <div className="text-2xl font-bold text-white">90% Open Rate</div>
                    <div className="text-indigo-400 text-sm">WhatsApp vs Email (20%)</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* How to install */}
        <section className="bg-[#0b102b]/40 border border-white/5 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className={`${syne.className} text-3xl font-bold text-white`}>Setup in Under 2 Minutes</h2>
            <p className="text-indigo-100/60">No coding required. No complex theme modifications.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Connect Shopify", desc: "One-click connection to your Shopify store data." },
              { step: "2", title: "Enable Capture", desc: "Toggle our 'Capture at Add-to-Cart' engine." },
              { step: "3", title: "Launch Sequences", desc: "Activate your automated WhatsApp, SMS, and Email flows." },
            ].map((s, i) => (
              <div key={i} className="relative p-6 bg-[#04091A] border border-white/5 rounded-2xl">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">{s.step}</div>
                <h4 className="font-bold text-white mb-2">{s.title}</h4>
                <p className="text-sm text-indigo-100/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust & Security */}
        <section className="text-center space-y-8">
          <Shield className="w-16 h-16 text-emerald-400 mx-auto opacity-50"/>
          <h2 className={`${syne.className} text-3xl font-bold text-white`}>Enterprise-Grade Reliability</h2>
          <p className="max-w-3xl mx-auto text-indigo-100/70 text-lg leading-relaxed">
            BoostACart is built for high-scale Shopify Plus stores. We handle millions of requests monthly with zero impact on store load speed. Our script is loaded asynchronously, ensuring your customers have a flawless, lightning-fast shopping experience.
          </p>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-transparent pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-400/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-fuchsia-400/20 rounded-full blur-[100px]"></div>
          </div>
          <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-white leading-tight`}>
            Ready to reclaim <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">your lost revenue?</span>
          </h2>
          <p className="text-xl text-indigo-200/60 max-w-2xl mx-auto font-light">
            Join the elite 1% of Shopify stores using pre-checkout recovery. Zero risk, 25%+ recovery target.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]">Start Free Trial <ArrowRight className="w-5 h-5"/></Link>
            <Link href="/case-studies" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Success Stories</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-10">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-3xl p-8 hover:bg-[#0b102b] transition-all">
                <h3 className="text-lg font-bold text-white mb-3">Q: {faq.name}</h3>
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

function MessageCircleIcon(props: any) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}
