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
    ArrowRight,
    Sparkles
} from "lucide-react"

const tools = [
    {
        title: "Ecommerce Profit Margin (Advanced)",
        description: "Calculate net profit and margins factoring in ads, shipping, and fees.",
        benefit: "Know exactly how much you keep per order.",
        href: "/tools/ecommerce-profit-calculator",
        icon: Calculator,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Cost Per Acquisition (CPA) Analyzer",
        description: "Determine if your customer acquisition cost is profitable.",
        benefit: "Stop burning cash on unprofitable ads.",
        href: "/tools/cpa-analyzer",
        icon: Target,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Checkout Recovery Score",
        description: "Grade your store's abandoned cart recovery system.",
        benefit: "Find gaps in your recovery funnel.",
        href: "/tools/checkout-recovery-score",
        icon: ShieldCheck,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Ad Scaling Budget Simulator",
        description: "Project revenue growth and risks when increasing ad budgets.",
        benefit: "Scale without killing your ROAS.",
        href: "/tools/ads-scaling-simulator",
        icon: TrendingUp,
        color: "from-orange-500 to-yellow-500"
    },
    {
        title: "Winning Product Margin Validator",
        description: "Quickly check if a product has enough margin to scale.",
        benefit: "Pick products that are actually worth testing.",
        href: "/tools/winning-product-validator",
        icon: CheckCircle2,
        color: "from-emerald-500 to-teal-500"
    },
    {
        title: "TikTok Ads Profit Calculator",
        description: "Model profitability specifically for TikTok ad traffic.",
        benefit: "Optimize for TikTok's unique CPC/CPM flow.",
        href: "/tools/tiktok-profit-calculator",
        icon: BarChart3,
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Meta Ads Profit Calculator",
        description: "Analyze profitability for Facebook & Instagram campaigns.",
        benefit: "Understand your Meta Ads P&L in seconds.",
        href: "/tools/meta-ads-profit-calculator",
        icon: Facebook,
        color: "from-blue-600 to-indigo-600"
    },
    {
        title: "Psychological Pricing Calculator",
        description: "Find high-converting price endings for your products.",
        benefit: "Convert 2x more with charm pricing science.",
        href: "/tools/psychological-pricing",
        icon: DollarSign,
        color: "from-yellow-400 to-orange-400"
    },
    {
        title: "Dropshipping Break-Even CPM",
        description: "Calculate the maximum CPM you can afford to pay on ads.",
        benefit: "Know your ad limit before launching.",
        href: "/tools/break-even-cpm",
        icon: Percent,
        color: "from-indigo-400 to-blue-400"
    },
    {
        title: "One-Product Store Validator",
        description: "Validate the profitability of a single product store model.",
        benefit: "Map your route to 100 orders a day.",
        href: "/tools/one-product-profit-validator",
        icon: ShoppingBag,
        color: "from-cyan-400 to-blue-400"
    },
    {
        title: "Store Profit Validator (Full Store)",
        description: "Analyze the overall health and net profit of your entire store.",
        benefit: "See the big picture of your finances.",
        href: "/tools/store-profit-validator",
        icon: ShoppingCart,
        color: "from-rose-400 to-red-400"
    },
    {
        title: "ROAS Calculator",
        description: "Basic calculator for Return on Ad Spend and campaign profit.",
        benefit: "Get instant return stats on any ad spend.",
        href: "/tools/roas-calculator",
        icon: Zap,
        color: "from-yellow-500 to-orange-500"
    },
    {
        title: "Add-to-Cart Benchmark Tool",
        description: "Compare your ATC rate with industry standard benchmarks.",
        benefit: "See if your product page is truly winning.",
        href: "/tools/add-to-cart-benchmark",
        icon: MousePointerClick,
        color: "from-sky-400 to-blue-500"
    },
    {
        title: "Break-Even ROAS Calculator",
        description: "Calculate the minimum ROAS needed to stay profitable.",
        benefit: "Know when your ads are losing money.",
        href: "/tools/break-even-roas",
        icon: FileSpreadsheet,
        color: "from-slate-400 to-slate-600"
    },
    {
        title: "Discount Profit Impact Calculator",
        description: "See how much profit you lose when offering discounts.",
        benefit: "Protect your margins from high discounting.",
        href: "/tools/discount-impact-calculator",
        icon: Percent,
        color: "from-red-400 to-orange-400"
    }
]

export default function ToolsIndexPage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#020617] text-white font-sans selection:bg-blue-500/30 py-20 px-6">
            <div className="absolute inset-0 z-0 opacity-40" style={{
                backgroundImage: `radial-gradient(circle at 40% 10%, #1e293b, transparent 50%), radial-gradient(circle at 80% 80%, #0f172a, transparent 50%)`
            }}></div>
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm font-bold uppercase tracking-widest mb-8 animate-pulse shadow-lg shadow-blue-500/10 active:scale-95 transition-transform cursor-default">
                        <Sparkles className="w-4 h-4" /> Professional Toolkit
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent italic">
                        The Optimizer's Suite
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
                        A collection of precision engineering tools designed to help Shopify store owners recover lost revenue, optimize ad spend, and maximize net profit.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool, i) => (
                        <Link
                            key={i}
                            href={tool.href}
                            className="group relative block p-8 rounded-[2rem] bg-slate-900/30 backdrop-blur-xl border border-white/5 hover:border-white/15 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl`}></div>

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-8 shadow-2xl shadow-blue-900/10 relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                                <tool.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors relative z-10 tracking-tight leading-tight">
                                {tool.title}
                            </h3>

                            <p className="text-slate-400 mb-6 font-light leading-relaxed text-sm relative z-10 group-hover:text-slate-300 transition-colors">
                                {tool.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 relative z-10">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-blue-400/80 transition-colors">
                                    {tool.benefit}
                                </span>
                                <div className="text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-32 text-center border-t border-white/5 pt-20">
                    <div className="relative inline-block group">
                        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 transition-opacity group-hover:opacity-30"></div>
                        <Link
                            href="/"
                            className="relative z-10 inline-flex items-center gap-4 bg-white text-slate-900 font-black px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl text-xl"
                        >
                            Explore Global Strategy <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                    <p className="mt-8 text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                        No credit card required • Trust by 500+ D2C Brands
                    </p>
                </div>
            </div>
        </div>
    )
}
