import Link from "next/link"
import type { Metadata } from "next"
import { ShoppingCart, Zap, TrendingUp, Users, MessageCircle, CheckCircle, ArrowRight, ShieldCheck, BarChart3, Clock } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Syne, Outfit } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: "Cart Recovery for Shopify Stores – BoostACart",
  description: "Recover abandoned Shopify carts using BoostACart's add-to-cart lead capture tool. Convert high-intent shoppers using WhatsApp, SMS, and Email.",
  alternates: {
    canonical: "https://boostacart.com/shopify-cart-recovery"
  },
  openGraph: {
    title: "Cart Recovery for Shopify Stores – BoostACart",
    description: "Recover abandoned Shopify carts using BoostACart's add-to-cart lead capture tool. Convert high-intent shoppers using WhatsApp, SMS, and Email.",
    url: "https://boostacart.com/shopify-cart-recovery",
    type: "website"
  }
}

export default function ShopifyCartRecoveryPage() {
  
  const faqs = [
    {
      question: "How does BoostACart's Shopify cart recovery differ from native Shopify emails?",
      answer: "Native Shopify recovery only works if a customer reaches checkout and enters their email. BoostACart captures the lead the moment they click 'Add to Cart', allowing you to recover up to 10x more shoppers who never even made it to the checkout page."
    },
    {
      question: "Will this slow down my Shopify store?",
      answer: "No. BoostACart is designed with a lightweight script that loads asynchronously. It will not impact your Shopify store's load speed or your Core Web Vitals."
    },
    {
      question: "Can I use WhatsApp for Shopify cart recovery?",
      answer: "Yes! While traditional tools rely solely on email, BoostACart allows you to capture phone numbers and follow up directly via WhatsApp and SMS, which typically see a 90%+ open rate compared to email's 20%."
    },
    {
      question: "Do I need coding skills to install this on Shopify?",
      answer: "Not at all. Installation on Shopify takes less than 2 minutes and requires zero coding. You simply paste a snippet into your theme or use our upcoming one-click Shopify App."
    },
    {
      question: "What is the average ROI for Shopify stores using BoostACart?",
      answer: "Most Shopify merchants see an ROI of 15x to 30x within their first 30 days. Because you are converting traffic you already paid for, recovering just a few extra carts quickly covers the cost of the software."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-purple-500/30 overflow-hidden ${outfit.className}`}>
      {/* Abstract Background Noise & Geometry */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <div className="relative pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            
            <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#10142B] border border-[#202545] shadow-[0_0_20px_rgba(32,37,69,0.5)] mb-10 backdrop-blur-md`}>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm text-cyan-200 font-medium tracking-wide">Shopify Cart Recovery</span>
            </div>

            <h1 className={`${syne.className} text-5xl sm:text-7xl lg:text-[5.5rem] font-bold mb-8 leading-[1.1]`}>
              <span className="text-white block">Recover Up To 10x More</span>
              <span className="relative">
                <span className="absolute -inset-1 block bg-gradient-to-r from-fuchsia-500 to-cyan-500 blur-2xl opacity-20"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                  Shopify Abandoned Carts
                </span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-indigo-100/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Capture email and phone details the exact moment shoppers click <span className="font-semibold text-white">Add-to-Cart</span>. 
              Stop waiting for them to reach checkout before you can save the sale.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/"
                className="group px-10 py-5 w-full sm:w-auto bg-white text-[#04091A] rounded-full hover:bg-cyan-50 transition-all duration-300 font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-indigo-200/50 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" /> No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" /> 2-minute Shopify install
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" /> Zero impact on store speed
              </div>
            </div>
          </div>
        </div>

        {/* The Problem & Solution Split View */}
        <section className="py-24 relative mt-16">
          <div className="absolute inset-0 bg-[#070b1f] skew-y-[-2deg] z-0 transform origin-top-left border-y border-[#181d3a]"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <div className="inline-block mb-6 px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full">
                  <span className="text-rose-400 font-bold text-xs tracking-wider uppercase">The Core Problem</span>
                </div>
                <h2 className={`${syne.className} text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight`}>
                  Shopify's Native Recovery is <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Fundamentally Flawed</span>
                </h2>
                <div className="space-y-6 text-lg text-indigo-100/60 leading-relaxed">
                  <p>
                    Native Shopify emails only trigger if a customer successfully reaches the checkout page and manually types in their email address. 
                  </p>
                  <p>
                    <strong className="text-white font-semibold">The harsh reality:</strong> Over 70% of your traffic abandons your store <em>after</em> clicking Add-to-Cart, but <em>before</em> ever reaching the checkout page. You are losing these customers forever.
                  </p>
                </div>
                
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-4 bg-[#0a0e24] border border-rose-500/10 p-4 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-rose-400 font-bold">—</span>
                    </div>
                    <span className="text-rose-200/80 font-medium">Loses 70% of potential leads instantly</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#0a0e24] border border-rose-500/10 p-4 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-rose-400 font-bold">—</span>
                    </div>
                    <span className="text-rose-200/80 font-medium">Relies purely on email with 20% open rates</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                {/* Decorative border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-fuchsia-500 via-transparent to-cyan-500 rounded-[2rem] opacity-50 layer-blur"></div>
                
                <div className="bg-[#0b1026] rounded-[2rem] p-8 sm:p-12 relative shadow-2xl backdrop-blur-xl">
                  <div className="inline-block mb-6 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-emerald-400 font-bold text-xs tracking-wider uppercase">The BoostACart Solution</span>
                  </div>
                  <h3 className={`${syne.className} text-3xl font-bold text-white mb-6`}>Pre-Checkout Capture</h3>
                  <p className="text-indigo-100/60 mb-10 text-lg leading-relaxed">
                    BoostACart triggers a seamless, high-converting modal the precise millisecond a user clicks your "Add to Cart" button. We capture their details instantly, when intent is at its absolute peak.
                  </p>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-colors hover:bg-white/[0.05]">
                      <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-fuchsia-500/20">
                        <Zap className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">10x More Leads Captured</h4>
                        <p className="text-indigo-200/50">Stop waiting for them to reach checkout.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-colors hover:bg-white/[0.05]">
                      <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                        <MessageCircle className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">WhatsApp & SMS Ready</h4>
                        <p className="text-indigo-200/50">Reach customers where they actually look.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 sm:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className={`${syne.className} text-4xl sm:text-5xl font-bold text-white mb-6`}>Why Shopify Brands <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Switch to Us</span></h2>
              <p className="text-xl text-indigo-100/50 max-w-2xl mx-auto font-light">
                Built specifically for the rigorous demands of modern scaling ecommerce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-[#0b1026]/80 backdrop-blur-sm border border-white-[0.05] p-10 rounded-3xl hover:border-cyan-500/30 hover:bg-[#0d1430] transition-all group shadow-xl">
                <div className="bg-[#121b3b] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  <ShoppingCart className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className={`${syne.className} text-2xl font-bold text-white mb-4`}>Capture Everything</h3>
                <p className="text-indigo-100/60 leading-relaxed">
                  Trigger our logic right when purchase intent is highest—the exact moment they add a product to their cart.
                </p>
              </div>

              <div className="bg-[#0b1026]/80 backdrop-blur-sm border border-white-[0.05] p-10 rounded-3xl hover:border-fuchsia-500/30 hover:bg-[#0d1430] transition-all group shadow-xl">
                <div className="bg-[#121b3b] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  <MessageCircle className="w-8 h-8 text-fuchsia-400" />
                </div>
                <h3 className={`${syne.className} text-2xl font-bold text-white mb-4`}>Omnichannel Recovery</h3>
                <p className="text-indigo-100/60 leading-relaxed">
                  Email is crowded. Stand out by recovering carts via WhatsApp and SMS where open rates consistently exceed 90%.
                </p>
              </div>

              <div className="bg-[#0b1026]/80 backdrop-blur-sm border border-white-[0.05] p-10 rounded-3xl hover:border-purple-500/30 hover:bg-[#0d1430] transition-all group shadow-xl">
                <div className="bg-[#121b3b] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className={`${syne.className} text-2xl font-bold text-white mb-4`}>Maximize ROAS</h3>
                <p className="text-indigo-100/60 leading-relaxed">
                  Stop paying Meta twice for the same customer. Recovering an abandoned cart is the absolute cheapest way to increase ROAS.
                </p>
              </div>

              <div className="bg-[#0b1026]/80 backdrop-blur-sm border border-white-[0.05] p-10 rounded-3xl hover:border-yellow-500/30 hover:bg-[#0d1430] transition-all group shadow-xl">
                <div className="bg-[#121b3b] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  <ShieldCheck className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className={`${syne.className} text-2xl font-bold text-white mb-4`}>Lightning Fast Script</h3>
                <p className="text-indigo-100/60 leading-relaxed">
                  Our script is brutally optimized and loads asynchronously. It will never slow down your Shopify store.
                </p>
              </div>

              <div className="bg-[#0b1026]/80 backdrop-blur-sm border border-white-[0.05] p-10 rounded-3xl hover:border-blue-500/30 hover:bg-[#0d1430] transition-all group shadow-xl">
                <div className="bg-[#121b3b] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  <BarChart3 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className={`${syne.className} text-2xl font-bold text-white mb-4`}>Real-Time Tracking</h3>
                <p className="text-indigo-100/60 leading-relaxed">
                  Watch leads roll in instantly. Our dashboard gives you a live view of captured contacts and recovered revenue.
                </p>
              </div>

              <div className="bg-[#0b1026]/80 backdrop-blur-sm border border-white-[0.05] p-10 rounded-3xl hover:border-emerald-500/30 hover:bg-[#0d1430] transition-all group shadow-xl">
                <div className="bg-[#121b3b] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  <Clock className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className={`${syne.className} text-2xl font-bold text-white mb-4`}>2-Minute Integration</h3>
                <p className="text-indigo-100/60 leading-relaxed">
                  No developer needed. Just paste one line of code into your theme and start capturing leads immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking / Topical Silo Section */}
        <section className="py-24 relative">
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#02050f] to-transparent z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="mb-12">
              <h2 className={`${syne.className} text-3xl font-bold text-white mb-4`}>Explore Cart Recovery Mastery</h2>
              <p className="text-indigo-100/50">Deep dive into specific tactics and tools to supercharge your ecommerce conversions.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Link href="/whatsapp-cart-recovery-tool" className="bg-[#090d24] border border-[#1a2145] p-6 rounded-2xl hover:border-fuchsia-500/40 hover:-translate-y-1 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-fuchsia-500/20 group-hover:bg-fuchsia-500 transition-colors"></div>
                <h3 className="text-white font-bold group-hover:text-fuchsia-400 transition-colors mb-2">WhatsApp Cart Recovery</h3>
                <p className="text-sm text-indigo-100/50">Learn how to double your open rates using WhatsApp vs Email.</p>
              </Link>
              <Link href="/recover-add-to-cart-customers" className="bg-[#090d24] border border-[#1a2145] p-6 rounded-2xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500/20 group-hover:bg-cyan-500 transition-colors"></div>
                <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors mb-2">Recover Add-To-Cart</h3>
                <p className="text-sm text-indigo-100/50">The technical strategy behind pre-checkout lead capture.</p>
              </Link>
              <Link href="/stop-abandoned-carts-shopify" className="bg-[#090d24] border border-[#1a2145] p-6 rounded-2xl hover:border-purple-500/40 hover:-translate-y-1 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-purple-500/20 group-hover:bg-purple-500 transition-colors"></div>
                <h3 className="text-white font-bold group-hover:text-purple-400 transition-colors mb-2">Stop Shopify Abandonment</h3>
                <p className="text-sm text-indigo-100/50">Actionable, proven tips to prevent abandonment before it happens.</p>
              </Link>
              <Link href="/boostacart-vs-klaviyo" className="bg-[#090d24] border border-[#1a2145] p-6 rounded-2xl hover:border-orange-500/40 hover:-translate-y-1 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors"></div>
                <h3 className="text-white font-bold group-hover:text-orange-400 transition-colors mb-2">BoostACart vs Klaviyo</h3>
                <p className="text-sm text-indigo-100/50">Why capturing at add-to-cart decisively beats email-only tools.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Study Featurette */}
        <section className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 relative">
             <Link href="/case-study/cart-recovery" className="block p-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 hover:scale-[1.02] transition-transform duration-300 shadow-xl overflow-hidden group">
               <div className="bg-[#0b1026] rounded-[22px] p-8 sm:p-10 relative flex flex-col md:flex-row items-center gap-8 md:gap-12 h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex-1 relative z-10">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                      <span className="text-cyan-300 font-bold text-xs tracking-wider uppercase">Featured Case Study</span>
                    </div>
                    <h3 className={`${syne.className} text-3xl sm:text-4xl font-bold text-white mb-4`}>
                      How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">SkinGlow</span> Recovered $14k in 30 Days
                    </h3>
                    <p className="text-indigo-100/70 text-lg">
                      See the exact cart recovery setup, messaging templates, and timing logic that turned 32% of abandoned carts into recovered sales.
                    </p>
                  </div>
                  <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center mt-6 md:mt-0">
                    <div className="flex items-center justify-center gap-3 text-white font-bold text-lg bg-white/5 px-8 py-4 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors whitespace-nowrap">
                      Read Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
               </div>
             </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#02050f] relative z-10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`${syne.className} text-4xl sm:text-5xl font-bold text-white mb-6`}>Questions & Answers</h2>
              <p className="text-xl text-indigo-100/50 font-light">Everything you need to know about scaling Shopify operations.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#050814] border border-[#121833] rounded-2xl p-8 hover:border-[#1e274f] transition-colors">
                  <h3 className={`${syne.className} text-xl font-bold text-white mb-4 flex items-start gap-4`}>
                    <span className="text-fuchsia-500/70 border border-fuchsia-500/20 bg-fuchsia-500/5 rounded-lg px-2 py-1 flex-shrink-0">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-indigo-100/60 leading-relaxed ml-12">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Massive CTA Section */}
        <section className="relative overflow-hidden py-32 bg-[#02050f] z-10 border-t border-[#090f24]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className={`${syne.className} text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight`}>
              Stop Leaving Money on the Table.
            </h2>
            <p className="text-xl sm:text-2xl text-indigo-100/60 mb-12 max-w-2xl mx-auto font-light">
              Install BoostACart in 2 minutes and watch your Shopify store's revenue scale overnight. No credit card required.
            </p>
            <div className="flex justify-center">
              <Link
                href="/"
                className="px-12 py-6 w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-full hover:brightness-110 transition-all duration-300 font-bold text-xl shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(217,70,239,0.5)] hover:scale-105 flex items-center justify-center gap-3"
              >
                Start Your Free Trial <Zap className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
