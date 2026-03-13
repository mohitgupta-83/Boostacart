import Link from "next/link"
import {
    Calculator,
    TrendingUp,
    ShieldCheck,
    Target,
    Percent,
    Facebook,
    CheckCircle2,
    DollarSign,
    ShoppingCart,
    ShoppingBag,
    BarChart3,
    MousePointerClick,
    FileSpreadsheet,
    Zap,
    ArrowLeft
} from "lucide-react"

import { Syne, Outfit } from 'next/font/google'
export const metadata = {
  alternates: { canonical: "https://boostacart.com/tools" }
  openGraph: {
    title: "Ecommerce Profit Margin Calculator",
    description: "Calculate net profit and margins factoring in ads, shipping, and fees.",
    url: "https://boostacart.com/tools",
    type: "website",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630, alt: "Ecommerce Profit Margin Calculator" }]
  },
};



const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

const tools = [
    {
        title: "Ecommerce Profit Margin Calculator",
        description: "Calculate net profit and margins factoring in ads, shipping, and fees.",
        href: "/tools/ecommerce-profit-calculator",
        icon: Calculator,
        color: "text-blue-400"
    },
    {
        title: "Cost Per Acquisition (CPA) Analyzer",
        description: "Determine if your customer acquisition cost is profitable.",
        href: "/tools/cpa-analyzer",
        icon: Target,
        color: "text-purple-400"
    },
    {
        title: "Checkout Recovery Readiness Score",
        description: "Grade your store's abandoned cart recovery system.",
        href: "/tools/checkout-recovery-score",
        icon: ShieldCheck,
        color: "text-green-400"
    },
    {
        title: "Ad Scaling Budget Simulator",
        description: "Project revenue growth and risks when increasing ad budgets.",
        href: "/tools/ads-scaling-simulator",
        icon: TrendingUp,
        color: "text-orange-400"
    },
    {
        title: "Winning Product Margin Validator",
        description: "Quickly check if a product has enough margin to scale.",
        href: "/tools/winning-product-validator",
        icon: CheckCircle2,
        color: "text-emerald-400"
    },
    {
        title: "TikTok Ads Profit Calculator",
        description: "Model profitability specifically for TikTok ad traffic.",
        href: "/tools/tiktok-profit-calculator",
        icon: BarChart3,
        color: "text-pink-400"
    },
    {
        title: "Meta Ads Profit Calculator",
        description: "Analyze profitability for Facebook & Instagram campaigns.",
        href: "/tools/meta-ads-profit-calculator",
        icon: Facebook,
        color: "text-blue-600"
    },
    {
        title: "Psychological Pricing Calculator",
        description: "Find the best high-converting price endings for your products.",
        href: "/tools/psychological-pricing",
        icon: DollarSign,
        color: "text-yellow-400"
    },
    {
        title: "Dropshipping Break-Even CPM Calculator",
        description: "Calculate the maximum CPM you can afford to pay on ads.",
        href: "/tools/break-even-cpm",
        icon: Percent,
        color: "text-indigo-400"
    },
    {
        title: "One-Product Store Profit Validator",
        description: "Validate the profitability of a single product store model.",
        href: "/tools/one-product-profit-validator",
        icon: ShoppingBag,
        color: "text-cyan-400"
    },
    {
        title: "Store Profit Validator (Full Store)",
        description: "Analyze the overall health and net profit of your entire store.",
        href: "/tools/store-profit-validator",
        icon: ShoppingCart,
        color: "text-rose-400"
    },
    {
        title: "ROAS Calculator",
        description: "Basic calculator for Return on Ad Spend and campaign profit.",
        href: "/tools/roas-calculator",
        icon: Zap,
        color: "text-yellow-500"
    },
    {
        title: "Add-to-Cart Benchmark Tool",
        description: "Compare your ATC rate with industry standard benchmarks.",
        href: "/tools/add-to-cart-benchmark",
        icon: MousePointerClick,
        color: "text-sky-400"
    },
    {
        title: "Break-Even ROAS Calculator",
        description: "Calculate the minimum ROAS needed to stay profitable.",
        href: "/tools/break-even-roas",
        icon: FileSpreadsheet,
        color: "text-gray-400"
    },
    {
        title: "Discount Profit Impact Calculator",
        description: "See how much profit you lose when offering discounts.",
        href: "/tools/discount-impact-calculator",
        icon: Percent,
        color: "text-red-400"
    }
]

export default function ToolsIndexPage() {
    return (
        <div className={`min-h-screen bg-[#04091A] text-slate-200 py-16 px-4 selection:bg-purple-500/30 overflow-hidden relative ${outfit.className}`}>
            {/* Abstract Background Noise & Geometry */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
                 <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
                 <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 pt-10">
                <div className="text-center mb-20">
                    <h1 className={`${syne.className} text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6`}>
                        Free Ecommerce Tools & Calculators
                    </h1>
                    <p className="text-indigo-100/60 text-xl max-w-2xl mx-auto font-light">
                        Professional-grade tools to help you optimize margins, analyze ad performance, and stop losing revenue to abandoned carts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {tools.map((tool, i) => (
                        <Link
                            key={i}
                            href={tool.href}
                            className="group block p-8 bg-[#0b1026] border border-white/5 rounded-3xl hover:border-cyan-500/30 hover:bg-[#0d1430] transition-all duration-300 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500/10 group-hover:bg-cyan-500 transition-colors"></div>
                            <div className={`w-14 h-14 rounded-2xl bg-[#121b3b] shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${tool.color}`}>
                                <tool.icon className="w-7 h-7" />
                            </div>
                            <h3 className={`${syne.className} text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors`}>
                                {tool.title}
                            </h3>
                            <p className="text-indigo-100/60 text-base leading-relaxed">
                                {tool.description}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="bg-[#0b1026] backdrop-blur-xl border border-white/5 rounded-[2rem] p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-fuchsia-500/0 via-transparent to-cyan-500/0 group-hover:from-fuchsia-500/20 group-hover:to-cyan-500/20 rounded-[2rem] transition-colors duration-500 blur-sm z-0"></div>
                        <div className="relative z-10">
                            <h2 className={`${syne.className} text-4xl font-bold text-white mb-6 relative z-10`}>
                                Stop Guessing, Start Recovering.
                            </h2>
                            <p className="text-indigo-100/70 mb-10 max-w-2xl mx-auto relative z-10 text-lg leading-relaxed">
                                The best way to improve your profit margin is to stop losing customers who already added to cart. Join 500+ stores using BoostACart to recover instantly.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:brightness-110 shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(217,70,239,0.5)] hover:scale-105 active:scale-95 text-lg">
                                Get Started Free <ArrowLeft className="w-5 h-5 rotate-180" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
