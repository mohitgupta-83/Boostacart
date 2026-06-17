import Link from "next/link";
import { Syne, Outfit } from 'next/font/google';
import { BookOpen, ArrowRight, LayoutGrid, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

const guides = [
    {
        title: "How to Recover Shopify Abandoned Carts",
        description: "The complete guide to setting up automated flows and pre-checkout lead capture to save 20%+ of lost revenue.",
        href: "/shopify-cart-recovery",
        category: "Strategy"
    },
    {
        title: "Cart Recovery for Dropshipping",
        description: "Why most dropshippers fail at cart recovery and the exact strategy to fix it.",
        href: "/cart-recovery-for-dropshipping",
        category: "Dropshipping"
    },
    {
        title: "Stop Abandoned Carts Before They Happen",
        description: "Advanced psychological triggers and checkout optimizations to reduce initial drop-off rates.",
        href: "/stop-abandoned-carts-shopify",
        category: "Optimization"
    },
    {
        title: "Pre-Checkout Email Capture Explained",
        description: "How moving your email capture from exit-intent popups to the Add-to-Cart button doubles your list size.",
        href: "/pre-checkout-capture-tool",
        category: "Lead Gen"
    },
    {
        title: "Best Shopify Abandoned Cart Apps",
        description: "A comprehensive review of the top abandoned cart recovery apps available on the Shopify App Store.",
        href: "/shopify-abandoned-cart-app",
        category: "Apps"
    },
    {
        title: "How to Reduce Cart Abandonment",
        description: "Proven strategies and design principles to reduce shopping cart abandonment rates on ecommerce stores.",
        href: "/reduce-cart-abandonment",
        category: "Optimization"
    },
    {
        title: "Shopify Add to Cart Popup Guide",
        description: "How to implement high-converting Add-to-Cart popups that capture leads without disrupting user experience.",
        href: "/shopify-add-to-cart-popup",
        category: "Lead Gen"
    },
    {
        title: "Shopify Email Capture Popup Playbook",
        description: "Best practices for designing, timing, and targeting email capture popups on Shopify websites.",
        href: "/shopify-email-capture-popup",
        category: "Lead Gen"
    },
    {
        title: "Add-to-Cart Rate Optimization",
        description: "How to optimize your product pages and buttons to increase the percentage of visitors adding items to their carts.",
        href: "/add-to-cart-rate-optimization",
        category: "CRO"
    },
    {
        title: "Cart Recovery Tools for Shopify Compared",
        description: "Compare automated cart recovery features, pricing, and setup difficulty for Shopify store owners.",
        href: "/cart-recovery-tool-for-shopify",
        category: "Comparison"
    },
    {
        title: "Dropshipping Conversion Rate Tips",
        description: "Specific conversion rate optimization (CRO) tips designed for dropshipping stores utilizing paid traffic.",
        href: "/dropshipping-conversion-tips",
        category: "Dropshipping"
    },
    {
        title: "DTC Cart Recovery Strategy",
        description: "Building a cohesive, multi-channel recovery flow using email, SMS, and WhatsApp for direct-to-consumer brands.",
        href: "/dtc-cart-recovery-strategy",
        category: "Strategy"
    },
    {
        title: "Ecommerce Conversion Rate Optimization (CRO)",
        description: "The complete guide to analyzing and optimizing your ecommerce conversion funnel from landing to purchase.",
        href: "/ecommerce-conversion-rate-optimization",
        category: "CRO"
    },
    {
        title: "Ecommerce Lead Generation Strategies",
        description: "Modern lead generation tactics to build a high-quality email and SMS list of prospective buyers.",
        href: "/ecommerce-lead-generation-strategies",
        category: "Lead Gen"
    },
    {
        title: "Email Followup Sequences for Abandoned Carts",
        description: "A step-by-step blueprint for writing high-converting checkout recovery emails that win back lost buyers.",
        href: "/email-followup-abandoned-carts",
        category: "Email"
    },
    {
        title: "Email vs SMS vs WhatsApp Marketing",
        description: "An analytical comparison of open rates, click rates, and ROI across email, SMS, and WhatsApp recovery channels.",
        href: "/email-vs-sms-vs-whatsapp-marketing",
        category: "Channels"
    },
    {
        title: "How to Increase Shopify Conversion Rate",
        description: "Practical speed, design, trust, and pricing updates that will immediately boost your Shopify store conversion rate.",
        href: "/how-to-increase-shopify-conversion-rate",
        category: "CRO"
    },
    {
        title: "Shopify Add-to-Cart Lead Capture",
        description: "A deep dive into capturing lead information at the exact moment a customer clicks the Add-to-Cart button.",
        href: "/shopify-add-to-cart-lead-capture",
        category: "Lead Gen"
    },
    {
        title: "Shopify Conversion Rate Benchmarks",
        description: "See where your store stands compared to average Shopify conversion rates by industry, country, and traffic source.",
        href: "/shopify-conversion-rate-benchmarks",
        category: "CRO"
    },
    {
        title: "SMS Cart Recovery App Setup",
        description: "How to launch compliance-friendly SMS cart recovery automations that convert mobile traffic.",
        href: "/sms-cart-recovery-app",
        category: "SMS"
    },
    {
        title: "SMS Marketing for Shopify Stores",
        description: "The complete guide to list building, compliance, and automated text messaging campaigns on Shopify.",
        href: "/sms-marketing-for-shopify",
        category: "SMS"
    },
    {
        title: "WhatsApp Business API for Ecommerce",
        description: "How to access, integrate, and scale your customer support and recovery using the official WhatsApp Business API.",
        href: "/whatsapp-business-api-ecommerce",
        category: "WhatsApp"
    },
    {
        title: "WhatsApp Marketing for Ecommerce Stores",
        description: "Utilize high-open-rate WhatsApp campaigns to recover carts, share updates, and increase customer lifetime value.",
        href: "/whatsapp-marketing-for-ecommerce",
        category: "WhatsApp"
    }
];

export const metadata = {
  alternates: {
    canonical: "https://boostacart.com/guides"
  },
    title: "Ecommerce Growth Guides | BoostACart",
    description: "Read our comprehensive guides on ecommerce growth, cart recovery, and profit optimization for Shopify stores.",
}

export default function GuidesIndexPage() {
    return (
        <div className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-purple-500/30 overflow-hidden relative ${outfit.className}`}>
            <Navbar />
            
            {/* Background elements */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
                 <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
                 <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 pt-32 pb-24 px-4">
                
                {/* Hub Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                    <Link href="/tools" className="px-6 py-2 rounded-full border border-white/10 text-indigo-200/70 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4" /> Tools Hub
                    </Link>
                    <span className="px-6 py-2 rounded-full border border-cyan-500/50 text-cyan-400 bg-cyan-500/10 flex items-center gap-2 font-semibold">
                        <BookOpen className="w-4 h-4" /> Growth Guides
                    </span>
                    <Link href="/seo" className="px-6 py-2 rounded-full border border-white/10 text-indigo-200/70 hover:text-white hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all flex items-center gap-2">
                        <Search className="w-4 h-4" /> SEO Resources
                    </Link>
                </div>

                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h1 className={`${syne.className} text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6`}>
                        Ecommerce Growth Guides
                    </h1>
                    <p className="text-indigo-100/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Data-backed strategies to plug the holes in your sales funnel, increase conversion rates, and safely scale your ad spend.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
                    {guides.map((guide, i) => (
                        <Link
                            key={i}
                            href={guide.href}
                            className="group block p-8 bg-[#0b102b]/50 backdrop-blur-md border border-white/5 rounded-3xl hover:border-cyan-500/30 hover:bg-[#0b102b] transition-all duration-300 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition-colors pointer-events-none"></div>
                            
                            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-indigo-300 uppercase tracking-widest mb-6">
                                {guide.category}
                            </span>
                            
                            <h3 className={`${syne.className} text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors`}>
                                {guide.title}
                            </h3>
                            
                            <p className="text-indigo-100/60 text-base leading-relaxed mb-8">
                                {guide.description}
                            </p>
                            
                            <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                                Read Full Guide <ArrowRight className="w-5 h-5 ml-2" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
