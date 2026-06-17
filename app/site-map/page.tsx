import Link from "next/link";
import { Syne, Outfit } from 'next/font/google';
import { Map, ArrowRight, LayoutGrid, BookOpen, Sliders, Trophy, ShieldAlert, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata = {
  alternates: {
    canonical: "https://boostacart.com/site-map"
  },
  title: "BoostACart HTML Sitemap & Resource Directory",
  description: "A comprehensive index of all resources, guides, tools, case studies, and comparison pages on BoostACart.",
}

export default function SiteMapPage() {
  const sections = [
    {
      title: "Core Pages",
      icon: LayoutGrid,
      color: "text-blue-400",
      bg: "from-blue-500/10 to-transparent",
      links: [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "Features", href: "/features" },
        { label: "Free Tools Hub", href: "/tools" },
        { label: "Strategy Hub", href: "/abandoned-cart-recovery" },
        { label: "App Reviews", href: "/best-shopify-cart-recovery-apps" },
        { label: "Partners", href: "/affiliate" },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Free Tools & Calculators",
      icon: Sliders,
      color: "text-fuchsia-400",
      bg: "from-fuchsia-500/10 to-transparent",
      links: [
        { label: "Ecommerce Profit Calculator", href: "/tools/ecommerce-profit-calculator" },
        { label: "Cost Per Acquisition (CPA) Analyzer", href: "/tools/cpa-analyzer" },
        { label: "Checkout Recovery Readiness Score", href: "/tools/checkout-recovery-score" },
        { label: "Ad Scaling Budget Simulator", href: "/tools/ads-scaling-simulator" },
        { label: "Winning Product Margin Validator", href: "/tools/winning-product-validator" },
        { label: "TikTok Ads Profit Calculator", href: "/tools/tiktok-profit-calculator" },
        { label: "Meta Ads Profit Calculator", href: "/tools/meta-ads-profit-calculator" },
        { label: "Psychological Pricing Calculator", href: "/tools/psychological-pricing" },
        { label: "Dropshipping Break-Even CPM", href: "/tools/break-even-cpm" },
        { label: "One-Product Store Profit Validator", href: "/tools/one-product-profit-validator" },
        { label: "Store Profit Validator", href: "/tools/store-profit-validator" },
        { label: "ROAS Calculator", href: "/tools/roas-calculator" },
        { label: "Add-to-Cart Benchmark Tool", href: "/tools/add-to-cart-benchmark" },
        { label: "Break-Even ROAS Calculator", href: "/tools/break-even-roas" },
        { label: "Discount Profit Impact Calculator", href: "/tools/discount-impact-calculator" },
        { label: "SaaS Pricing Model Calculator", href: "/tools/saas-pricing-calculator" }
      ]
    },
    {
      title: "Growth & CRO Guides",
      icon: BookOpen,
      color: "text-cyan-400",
      bg: "from-cyan-500/10 to-transparent",
      links: [
        { label: "Shopify Abandoned Cart Guide", href: "/shopify-cart-recovery" },
        { label: "Cart Recovery for Dropshipping", href: "/cart-recovery-for-dropshipping" },
        { label: "Stop Abandoned Carts Strategy", href: "/stop-abandoned-carts-shopify" },
        { label: "Pre-Checkout Email Capture Explained", href: "/pre-checkout-capture-tool" },
        { label: "Best Shopify Abandoned Cart Apps", href: "/shopify-abandoned-cart-app" },
        { label: "How to Reduce Cart Abandonment", href: "/reduce-cart-abandonment" },
        { label: "Shopify Add to Cart Popup Guide", href: "/shopify-add-to-cart-popup" },
        { label: "Shopify Email Capture Popup Playbook", href: "/shopify-email-capture-popup" },
        { label: "Add-to-Cart Rate Optimization", href: "/add-to-cart-rate-optimization" },
        { label: "Cart Recovery Tools for Shopify Compared", href: "/cart-recovery-tool-for-shopify" },
        { label: "Dropshipping Conversion Rate Tips", href: "/dropshipping-conversion-tips" },
        { label: "DTC Cart Recovery Strategy", href: "/dtc-cart-recovery-strategy" },
        { label: "Ecommerce CRO Complete Guide", href: "/ecommerce-conversion-rate-optimization" },
        { label: "Ecommerce Lead Generation Strategies", href: "/ecommerce-lead-generation-strategies" },
        { label: "Email Sequences for Abandoned Carts", href: "/email-followup-abandoned-carts" },
        { label: "Email vs SMS vs WhatsApp Marketing", href: "/email-vs-sms-vs-whatsapp-marketing" },
        { label: "How to Increase Shopify Conversion Rate", href: "/how-to-increase-shopify-conversion-rate" },
        { label: "Shopify Add-to-Cart Lead Capture", href: "/shopify-add-to-cart-lead-capture" },
        { label: "Shopify Conversion Rate Benchmarks", href: "/shopify-conversion-rate-benchmarks" },
        { label: "SMS Cart Recovery App Setup", href: "/sms-cart-recovery-app" },
        { label: "SMS Marketing for Shopify Stores", href: "/sms-marketing-for-shopify" },
        { label: "WhatsApp Business API for Ecommerce", href: "/whatsapp-business-api-ecommerce" },
        { label: "WhatsApp Marketing for Ecommerce", href: "/whatsapp-marketing-for-ecommerce" }
      ]
    },
    {
      title: "Software Comparisons",
      icon: Sliders,
      color: "text-purple-400",
      bg: "from-purple-500/10 to-transparent",
      links: [
        { label: "BoostACart vs Klaviyo", href: "/boostacart-vs-klaviyo" },
        { label: "BoostACart vs Recart", href: "/boostacart-vs-recart" },
        { label: "BoostACart vs Cartloop", href: "/boostacart-vs-cartloop" },
        { label: "BoostACart vs Shopify Email", href: "/boostacart-vs-shopify-email" },
        { label: "Best Shopify Cart Recovery Apps", href: "/best-shopify-cart-recovery-apps" },
        { label: "Best Shopify Lead Capture Tools", href: "/best-shopify-lead-capture-tools" },
        { label: "Klaviyo Alternative", href: "/klaviyo-alternative" },
        { label: "Recart Alternative", href: "/recart-alternative" },
        { label: "Cartloop Alternative", href: "/cartloop-alternative" },
        { label: "Cart Recovery Tool Alternative", href: "/cart-recovery-tool-alternative" },
        { label: "Privy Alternative", href: "/privy-alternative" },
        { label: "Omnisend Alternative", href: "/omnisend-alternative" },
        { label: "PushOwl Alternative", href: "/pushowl-alternative" },
        { label: "Tidio Alternative for Shopify", href: "/tidio-alternative-for-shopify" },
        { label: "Best Recart Alternatives", href: "/best-recart-alternatives" },
        { label: "Comparisons Hub", href: "/comparisons" },
        { label: "Alternatives Hub", href: "/alternatives" }
      ]
    },
    {
      title: "Real Case Studies",
      icon: Trophy,
      color: "text-emerald-400",
      bg: "from-emerald-500/10 to-transparent",
      links: [
        { label: "Case Study: 37 Carts Recovered in 24 Hours", href: "/case-study-recovered-37-orders" },
        { label: "Pre-Checkout vs Post-Checkout Email Capture", href: "/case-study-precheckout-email-capture" },
        { label: "Dropshipping Cart Recovery Setup", href: "/dropshipping-cart-recovery-case-study" },
        { label: "WhatsApp Cart Recovery Case Study", href: "/whatsapp-cart-recovery-case-study" },
        { label: "Concierge Cart Recovery Case Study", href: "/case-study/cart-recovery" },
        { label: "BoostACart Performance Results", href: "/boostacart-results" },
        { label: "BoostACart Merchant Reviews", href: "/boostacart-reviews" },
        { label: "BoostACart User Feedback Teardown", href: "/boostacart-user-feedback" },
        { label: "D2C Portfolio 25x ROI Case Study", href: "/case-study" },
        { label: "Case Studies Hub", href: "/case-studies" }
      ]
    },
    {
      title: "Feature Deep Dives",
      icon: Users,
      color: "text-indigo-400",
      bg: "from-indigo-500/10 to-transparent",
      links: [
        { label: "Pre-Checkout Capture Tool", href: "/pre-checkout-capture-tool" },
        { label: "Collect Email at Add-to-Cart", href: "/collect-email-at-add-to-cart" },
        { label: "Recover Add-to-Cart Customers", href: "/recover-add-to-cart-customers" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Users,
      color: "text-yellow-400",
      bg: "from-yellow-500/10 to-transparent",
      links: [
        { label: "Cart Recovery for Fashion Brands", href: "/cart-recovery-for-fashion-brands" },
        { label: "Cart Recovery for Beauty Brands", href: "/cart-recovery-for-beauty-brands" },
        { label: "Cart Recovery for Dropshipping", href: "/cart-recovery-for-dropshipping" },
        { label: "High-Ticket Dropshipping Cart Recovery", href: "/high-ticket-dropshipping-cart-recovery" },
        { label: "Cart Recovery for High-Ticket Stores", href: "/cart-recovery-for-high-ticket-stores" },
        { label: "Cart Recovery High-Ticket Stores Guide", href: "/cart-recovery-high-ticket-stores" },
        { label: "Shopify Cart Recovery Operations", href: "/shopify-cart-recovery" }
      ]
    },
    {
      title: "Templates & Legal",
      icon: ShieldAlert,
      color: "text-red-400",
      bg: "from-red-500/10 to-transparent",
      links: [
        { label: "Abandoned Cart Email Templates", href: "/abandoned-cart-email-template" },
        { label: "Abandoned Cart SMS Templates", href: "/abandoned-cart-sms-template" },
        { label: "Abandoned Cart WhatsApp Templates", href: "/abandoned-cart-whatsapp-template" },
        { label: "Abandoned Cart Statistics", href: "/abandoned-cart-statistics" },
        { label: "Cart Abandonment Rate Benchmarks", href: "/cart-abandonment-rate-by-industry" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" }
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-purple-500/30 overflow-hidden relative ${outfit.className}`}>
      <Navbar />
      
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/5 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/5 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-32 pb-24">
        
        {/* Title */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-semibold mb-6">
            <Map className="w-5 h-5" /> Site Directory
          </div>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6`}>
            HTML Sitemap
          </h1>
          <p className="text-indigo-100/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Quick links to all guides, calculators, comparisons, case studies, and resources across the BoostACart platform.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => {
            const SectionIcon = section.icon;
            return (
              <div key={idx} className="group p-8 bg-[#0b102b]/30 backdrop-blur-md border border-white/5 rounded-3xl hover:border-cyan-500/20 hover:bg-[#0b102b]/50 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${section.bg} rounded-full blur-[40px] pointer-events-none`}></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${section.color}`}>
                    <SectionIcon className="w-5 h-5" />
                  </div>
                  <h2 className={`${syne.className} text-xl font-bold text-white`}>{section.title}</h2>
                </div>

                <ul className="space-y-3 flex-grow">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href={link.href} className="group/link flex items-center text-indigo-200/70 hover:text-white transition-colors text-sm py-1">
                        <ArrowRight className="w-3.5 h-3.5 mr-2 text-indigo-500/50 group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transition-all" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>

      <Footer />
    </div>
  );
}
