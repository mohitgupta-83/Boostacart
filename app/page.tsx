import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { Check } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"
import ArrowRightIcon from "@/components/icons/ArrowRightIcon"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroCTA from "@/components/landing/HeroCTA"
import { Syne, Outfit } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: "BoostACart – Add-to-Cart Lead Capture Tool to Recover Lost Sales",
  description: "BoostACart helps online stores capture email and phone numbers at add-to-cart to recover lost sales via WhatsApp, SMS, and email follow-ups.",
  alternates: {
    canonical: "https://boostacart.com"
  },
  openGraph: {
    title: "BoostACart – Add-to-Cart Lead Capture Tool to Recover Lost Sales",
    description: "BoostACart helps online stores capture email and phone numbers at add-to-cart to recover lost sales via WhatsApp, SMS, and email follow-ups.",
    url: "https://boostacart.com",
    type: "website"
  }
}
import { RoiCalculator } from "@/components/roi-calculator"

const ShoppingCartIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
  </svg>
)

const ZapIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
  </svg>
)

export default function LandingPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BoostACart",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://boostacart.com",
    "description": "BoostACart captures email and phone numbers when shoppers click Add-to-Cart, enabling automated WhatsApp, SMS, and email follow-ups to recover abandoned carts.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free trial available"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BoostACart",
    "url": "https://boostacart.com",
    "logo": "https://boostacart.com/favicon.png",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://boostacart.com/contact"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is BoostACart?",
        "acceptedAnswer": { "@type": "Answer", "text": "BoostACart is a Shopify cart recovery tool that captures email and phone numbers when shoppers click Add to Cart, enabling instant WhatsApp, SMS, and email follow-ups to recover abandoned carts." }
      },
      {
        "@type": "Question",
        "name": "How does BoostACart recover abandoned carts?",
        "acceptedAnswer": { "@type": "Answer", "text": "Unlike traditional tools that wait for checkout, BoostACart intercepts shoppers the moment they click Add to Cart, capturing up to 10x more leads before they abandon." }
      },
      {
        "@type": "Question",
        "name": "What is a good ecommerce conversion rate?",
        "acceptedAnswer": { "@type": "Answer", "text": "The average ecommerce conversion rate is 2-3%. With cart recovery tools like BoostACart, brands can recover 15-25% of abandoned carts, significantly boosting overall revenue." }
      },
      {
        "@type": "Question",
        "name": "How do you calculate ROAS?",
        "acceptedAnswer": { "@type": "Answer", "text": "ROAS (Return on Ad Spend) = Revenue from ads / Ad spend. A ROAS of 3x means you earn $3 for every $1 spent on ads." }
      }
    ]
  };

  return (
    <main className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-fuchsia-500/30 overflow-hidden ${outfit.className}`}>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Abstract Background Noise & Geometry */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

      <div className="relative z-10">
      {/* Header */}
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "BoostACart",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Add-to-Cart Lead Capture Tool to Recover Lost Sales for Shopify."
          })
        }}
      />

      {/* Hero Section */}
      <HeroGeometric
        badge="Lead Generation Platform"
        title1="Capture Add-to-Cart Shoppers"
        title2="Before They Leave"
      />

      {/* Call to Action Section */}
      <section className="py-10 sm:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 relative">
          <p className="text-base sm:text-xl text-indigo-100/70 mb-8 leading-relaxed px-2">
            BoostACart helps online stores capture email and phone numbers the moment a shopper clicks "Add to Cart", so
            you can recover lost sales with WhatsApp, SMS, and email follow-ups.
          </p>
          <HeroCTA />
        </div>
      </section>


      {/* YouTube Demo Video Section */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-sm font-medium">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Watch How It Works
            </span>
          </div>
          <div className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl overflow-hidden hover:border-fuchsia-500/20 transition-all duration-300 hover:shadow-fuchsia-500/10 hover:shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/sQOZcoPP31I"
                title="BoostACart Demo – See How It Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 relative">
          <SpotlightCard className="p-8 sm:p-10">
            <h2 className={`${syne.className} text-3xl sm:text-4xl font-bold text-white mb-6 text-center`}>What Is BoostACart?</h2>
            <div className="text-lg text-indigo-100/70 leading-relaxed space-y-4">
              <p>
                BoostACart is an add-to-cart lead capture tool for online stores. Instead of waiting for customers to
                abandon checkout, BoostACart captures their contact details at the add-to-cart stage, when purchase
                intent is highest.
              </p>
              <p>You can then follow up instantly or later using WhatsApp, SMS, or email to recover sales.</p>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* How BoostACart Works Section */}
      <section className="py-12 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className={`${syne.className} text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4`}>How BoostACart Works</h2>
            <p className="text-base sm:text-xl text-indigo-100/70 max-w-3xl mx-auto px-2">
              Simple 5-step process to capture leads and recover lost sales
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <SpotlightCard className="p-6 sm:p-8">
              <ol className="space-y-4 text-indigo-100/70">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </span>
                  <span className="pt-1">A shopper clicks "Add to Cart"</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </span>
                  <span className="pt-1">BoostACart displays a small popup or widget</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </span>
                  <span className="pt-1">The shopper enters their email or phone number</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </span>
                  <span className="pt-1">The lead is captured instantly</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    5
                  </span>
                  <span className="pt-1">You follow up and recover the sale</span>
                </li>
              </ol>
            </SpotlightCard>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <SpotlightCard className="p-4 sm:p-6 hover:scale-[1.02] transition-transform">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-white">
                <ZapIcon />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                Lead Capture at Add-to-Cart
              </h3>
              <p className="text-xs sm:text-base text-indigo-100/70 leading-relaxed">
                Customer clicks Add to Cart → BoostACart widget pops up and never lose anonymous shoppers again.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-6 hover:scale-[1.02] transition-transform">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-white">
                <TrendingUpIcon />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-3 sm:mb-4">Customizable Widget</h3>
              <p className="text-xs sm:text-base text-indigo-100/70 leading-relaxed">
                Collects Name, Email, or Phone → customer details saved in your dashboard. Change text, colors, and
                design to match your brand.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-6 hover:scale-[1.02] transition-transform">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-white">
                <UsersIcon />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-3 sm:mb-4">Smart Dashboard</h3>
              <p className="text-xs sm:text-base text-indigo-100/70 leading-relaxed">
                Redirects to Checkout or Shows Discount → you keep them moving towards purchase. Track leads, monthly
                limits, and plan status.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-6 hover:scale-[1.02] transition-transform">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-white">
                <ShoppingCartIcon />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-3 sm:mb-4">Exit-Intent Popup</h3>
              <p className="text-xs sm:text-base text-indigo-100/70 leading-relaxed">
                Catch visitors before they leave your store and turn them into leads you can follow up with.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-6 hover:scale-[1.02] transition-transform">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-white">
                <TrendingUpIcon />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-3 sm:mb-4">Follow-Up Ready</h3>
              <p className="text-xs sm:text-base text-indigo-100/70 leading-relaxed">
                Export leads for WhatsApp, SMS, or sales calls. Increase conversions by 20–30% and reduce cost per
                purchase.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-6 hover:scale-[1.02] transition-transform">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-white">
                <ZapIcon />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-3 sm:mb-4">Why BoostACart?</h3>
              <p className="text-xs sm:text-base text-indigo-100/70 leading-relaxed">
                Ad spend is expensive. Purchases are fewer than Add-to-Carts. Without customer details, you can't
                recover those carts.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 sm:py-24 relative z-10">
        {/* Background Glows for Calculator Section */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
           <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen opacity-60"></div>
           <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-fuchsia-600/10 rounded-full blur-[100px] mix-blend-screen opacity-60 animate-pulse"></div>
        </div>
        <RoiCalculator />
      </section>

      {/* Who Should Use Section */}
      <section className="py-12 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 relative">
          <SpotlightCard className="p-6 sm:p-8">
            <div className="text-center">
              <h2 className={`${syne.className} text-3xl sm:text-4xl font-bold text-white mb-6`}>Who Should Use BoostACart?</h2>
              <p className="text-lg text-indigo-100/70 mb-6">BoostACart is built for:</p>
              <ul className="space-y-3 text-left text-indigo-100/70 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Shopify and eCommerce store owners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Dropshipping stores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>DTC brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>High-ticket product sellers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Marketing agencies managing eCommerce clients</span>
                </li>
              </ul>
              <p className="text-lg text-indigo-100/70 mt-6">
                If you are losing customers before checkout, BoostACart helps you recover them.
              </p>
              <div className="mt-8">
                <Link
                  href="/shopify-cart-recovery"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-colors"
                >
                  Cart Recovery for Shopify Stores
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Why Store Owners Use Section */}
      <section className="py-12 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 relative">
          <SpotlightCard className="p-6 sm:p-8">
            <div className="text-center">
              <h2 className={`${syne.className} text-3xl sm:text-4xl font-bold text-white mb-6`}>Why Store Owners Use BoostACart</h2>
              <ul className="space-y-4 text-left text-indigo-100/70 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">
                    Capture high-intent shoppers before checkout
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">
                    Recover lost carts using WhatsApp, SMS, or email
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">Increase conversion rates without ads</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">
                    Lower cost-per-purchase with owned traffic
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">
                    Automate follow-ups using integrations
                  </span>
                </li>
              </ul>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className={`${syne.className} text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4`}>
              Choose the plan that fits your store
            </h2>
            <p className="text-base sm:text-xl text-indigo-100/70">Capture more leads from the same ad budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="group bg-[#0b1026]/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/5 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-colors group-hover:text-blue-400">
                  Free Plan
                </h3>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">$0</div>
                <p className="text-indigo-100/70 text-sm sm:text-base">Try it risk-free</p>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <div className="text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">Up to 50 leads/month</span>
                </li>
                <li className="flex items-center">
                  <div className="text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <div className="text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">Email support</span>
                </li>
              </ul>
              <Link
                href="/auth/sign-up"
                className="w-full py-2 sm:py-3 px-4 bg-[#0b1026]/50 text-white rounded-lg transition-all duration-300 hover:bg-slate-700/70 hover:shadow-lg font-medium text-center block border border-[#1e274f] hover:border-slate-600 text-sm sm:text-base"
              >
                Get Started Free
              </Link>
            </div>

            {/* Starter Plan - Most Popular */}
            <div className="group bg-[#0b1026]/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border-2 border-blue-500/50 relative transition-all duration-300 hover:scale-110 hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3">
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-colors group-hover:text-blue-400">
                  Starter Plan
                </h3>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">$19</div>
                <p className="text-indigo-100/70 text-sm sm:text-base">For growing stores</p>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <div className="text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">600 leads per month</span>
                </li>
                <li className="flex items-center">
                  <div className="text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <div className="text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">Priority support</span>
                </li>
              </ul>
              <a
                href={getWhatsAppLink("918303208502", "pricing")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 sm:py-3 px-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-full transition-all duration-300 hover:from-cyan-600 hover:to-fuchsia-600 hover:shadow-xl hover:shadow-cyan-500/50 font-bold text-center block text-sm sm:text-base"
              >
                Get Started Free - Limited Time
              </a>
            </div>

            {/* Pro Plan */}
            <div className="group bg-[#0b1026]/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-[#1e274f] transition-all duration-300 hover:scale-105 hover:border-fuchsia-500/50 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:-translate-y-2">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-colors group-hover:text-fuchsia-400">
                  Pro Plan
                </h3>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">$99</div>
                <p className="text-indigo-100/70 text-xs sm:text-base">For scaling brands with heavy traffic</p>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <div className="text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">Unlimited leads</span>
                </li>
                <li className="flex items-center">
                  <div className="text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <div className="text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-indigo-100/70 ml-3 text-sm sm:text-base">Dedicated support</span>
                </li>
              </ul>
              <a
                href={getWhatsAppLink("918303208502", "upgrade")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 sm:py-3 px-4 bg-white/5 text-white rounded-full transition-all duration-300 hover:bg-white/10 hover:shadow-lg font-bold text-center block border border-white/10 hover:border-white/20 text-sm sm:text-base"
              >
                Get Started Free - Limited Time
              </a>
            </div>
          </div>

          {/* Early Access Promotional Banner */}
          <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 sm:p-8 text-center shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <div className="inline-block bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-1 mb-4">
                <span className="text-emerald-400 font-semibold text-sm sm:text-base">🎉 Early Access Offer</span>
              </div>
              <h3 className={`${syne.className} text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4`}>
                Completely FREE for Limited Time!
              </h3>
              <p className="text-base sm:text-lg text-indigo-100/80 mb-2">
                All plans are <span className="text-green-400 font-semibold">100% free</span> during our early access
                period.
              </p>
              <p className="text-sm sm:text-base text-indigo-100/70">
                Use BoostACart unlimited times, capture unlimited leads, and boost your sales without any cost. Start
                now and lock in your early access benefits!
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-16">
            <h3 className={`${syne.className} text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4`}>Still on the fence?</h3>
            <p className="text-base sm:text-xl text-indigo-100/70 mb-6 sm:mb-8">
              Try BoostACart free and see how many sales you recover this week.
            </p>
            <Link
              href="/auth/sign-up"
              className="inline-flex px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-full hover:brightness-110 transition-all duration-300 font-bold text-lg shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(217,70,239,0.5)] hover:scale-105 items-center justify-center gap-2"
            >
              Start Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* Setup Guide Card Section */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-[#0b1026]/50 backdrop-blur-sm border border-[#1e274f]/50 rounded-xl p-8 sm:p-10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className={`${syne.className} text-2xl sm:text-3xl font-bold text-white mb-4`}>Quick Setup Guide</h3>
              <p className="text-indigo-100/70 text-base sm:text-lg mb-6 max-w-xl mx-auto">
                Get started in minutes with our step-by-step setup guide. Configure your widget and start capturing
                leads right away.
              </p>
              <Link
                href="/setup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/20 border border-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                View Setup Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 relative">
          <SpotlightCard className="p-8 sm:p-12">
            <h2 className={`${syne.className} text-3xl sm:text-5xl font-bold text-white mb-6`}>
              Ready to Stop Losing Customers at Add-to-Cart?
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of eCommerce stores using BoostACart to capture leads and recover sales. Start free today.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-full hover:brightness-110 transition-all duration-300 font-bold text-lg shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(217,70,239,0.5)] hover:scale-105 items-center justify-center gap-2"
            >
              Start Free Trial →
            </Link>
          </SpotlightCard>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      </div>
    </main>
  )
}
