import Link from "next/link"
import type { Metadata } from "next"
import { ShoppingCart, Zap, TrendingUp, ShieldCheck, BarChart3, Clock, MessageCircle, CheckCircle, ArrowRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Syne, Outfit } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export interface SeoFeature {
  icon: 'cart' | 'message' | 'trending' | 'shield' | 'chart' | 'clock';
  title: string;
  text: string;
}

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoInternalLink {
  slug: string;
  color: 'fuchsia' | 'cyan' | 'purple' | 'orange';
  title: string;
  subtitle: string;
}

export interface SeoPageData {
  slug: string;
  heroBadge: string;
  heroTitleLight: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  problemBadge: string;
  problemTitle: string;
  problemHighlight: string;
  problemText1: string;
  problemText2: string;
  problemStat1: string;
  problemStat2: string;
  solutionBadge: string;
  solutionTitle: string;
  solutionText: string;
  solutionFeature1Title: string;
  solutionFeature1Text: string;
  solutionFeature2Title: string;
  solutionFeature2Text: string;
  featuresTitle: string;
  featuresHighlight: string;
  featuresSubtitle: string;
  features: SeoFeature[];
  internalLinks: SeoInternalLink[];
  faqs: SeoFaq[];
}

export default function SeoLandingPage({ data }: { data: SeoPageData }) {
  const getIcon = (type: string, className: string) => {
    switch (type) {
      case 'cart': return <ShoppingCart className={className} />;
      case 'message': return <MessageCircle className={className} />;
      case 'trending': return <TrendingUp className={className} />;
      case 'shield': return <ShieldCheck className={className} />;
      case 'chart': return <BarChart3 className={className} />;
      case 'clock': return <Clock className={className} />;
      default: return <CheckCircle className={className} />;
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
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
              <span className="text-sm text-cyan-200 font-medium tracking-wide">{data.heroBadge}</span>
            </div>

            <h1 className={`${syne.className} text-5xl sm:text-7xl lg:text-[5.5rem] font-bold mb-8 leading-[1.1]`}>
              <span className="text-white block">{data.heroTitleLight}</span>
              <span className="relative">
                <span className="absolute -inset-1 block bg-gradient-to-r from-fuchsia-500 to-cyan-500 blur-2xl opacity-20"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                  {data.heroTitleHighlight}
                </span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-indigo-100/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              {data.heroSubtitle}
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
                  <span className="text-rose-400 font-bold text-xs tracking-wider uppercase">{data.problemBadge}</span>
                </div>
                <h2 className={`${syne.className} text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight`}>
                  {data.problemTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">{data.problemHighlight}</span>
                </h2>
                <div className="space-y-6 text-lg text-indigo-100/60 leading-relaxed">
                  <p>{data.problemText1}</p>
                  <p>{data.problemText2}</p>
                </div>
                
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-4 bg-[#0a0e24] border border-rose-500/10 p-4 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-rose-400 font-bold">—</span>
                    </div>
                    <span className="text-rose-200/80 font-medium">{data.problemStat1}</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#0a0e24] border border-rose-500/10 p-4 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-rose-400 font-bold">—</span>
                    </div>
                    <span className="text-rose-200/80 font-medium">{data.problemStat2}</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-fuchsia-500 via-transparent to-cyan-500 rounded-[2rem] opacity-50 blur-sm"></div>
                <div className="bg-[#0b1026] rounded-[2rem] p-8 sm:p-12 relative shadow-2xl backdrop-blur-xl">
                  <div className="inline-block mb-6 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-emerald-400 font-bold text-xs tracking-wider uppercase">{data.solutionBadge}</span>
                  </div>
                  <h3 className={`${syne.className} text-3xl font-bold text-white mb-6`}>{data.solutionTitle}</h3>
                  <p className="text-indigo-100/60 mb-10 text-lg leading-relaxed">{data.solutionText}</p>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-colors hover:bg-white/[0.05]">
                      <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-fuchsia-500/20">
                        <Zap className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{data.solutionFeature1Title}</h4>
                        <p className="text-indigo-200/50">{data.solutionFeature1Text}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-colors hover:bg-white/[0.05]">
                      <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                        <MessageCircle className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{data.solutionFeature2Title}</h4>
                        <p className="text-indigo-200/50">{data.solutionFeature2Text}</p>
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
              <h2 className={`${syne.className} text-4xl sm:text-5xl font-bold text-white mb-6`}>{data.featuresTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">{data.featuresHighlight}</span></h2>
              <p className="text-xl text-indigo-100/50 max-w-2xl mx-auto font-light">
                {data.featuresSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.features.map((feature, idx) => (
                <div key={idx} className="bg-[#0b1026]/80 backdrop-blur-sm border border-white/5 p-10 rounded-3xl hover:border-cyan-500/30 hover:bg-[#0d1430] transition-all group shadow-xl">
                  <div className="bg-[#121b3b] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                    {getIcon(feature.icon, "w-8 h-8 text-cyan-400")}
                  </div>
                  <h3 className={`${syne.className} text-2xl font-bold text-white mb-4`}>{feature.title}</h3>
                  <p className="text-indigo-100/60 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
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
              {data.internalLinks.map((link, idx) => (
                <Link key={idx} href={`/${link.slug}`} className={`bg-[#090d24] border border-[#1a2145] p-6 rounded-2xl hover:-translate-y-1 transition-all group relative overflow-hidden hover:border-${link.color}-500/40`}>
                  <div className={`absolute top-0 left-0 w-2 h-full transition-colors bg-${link.color}-500/20 group-hover:bg-${link.color}-500`}></div>
                  <h3 className={`text-white font-bold transition-colors mb-2 group-hover:text-${link.color}-400`}>{link.title}</h3>
                  <p className="text-sm text-indigo-100/50">{link.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Featurette */}
        <section className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 relative">
             <Link href="/case-study-precheckout-email-capture" className="block p-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 hover:scale-[1.02] transition-transform duration-300 shadow-xl overflow-hidden group">
               <div className="bg-[#0b1026] rounded-[22px] p-8 sm:p-10 relative flex flex-col md:flex-row items-center gap-8 md:gap-12 h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex-1 relative z-10">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                      <span className="text-cyan-300 font-bold text-xs tracking-wider uppercase">Featured Case Study</span>
                    </div>
                    <h3 className={`${syne.className} text-3xl sm:text-4xl font-bold text-white mb-4`}>
                      How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">BoostACart</span> Recovers 10x More Revenue
                    </h3>
                    <p className="text-indigo-100/70 text-lg">
                      See the exact cart recovery setup, messaging templates, and timing logic that turns abandoned carts into recovered sales.
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
              {data.faqs.map((faq, index) => (
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
