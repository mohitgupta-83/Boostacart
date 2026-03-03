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
    Zap
} from "lucide-react"

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
        <div className="min-h-screen bg-[#020817] text-white py-16 px-4 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
                        Free Ecommerce Tools & Calculators
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Professional-grade tools to help you optimize margins, analyze ad performance, and stop losing revenue to abandoned carts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, i) => (
                        <Link
                            key={i}
                            href={tool.href}
                            className="group block p-6 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-black/20"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${tool.color}`}>
                                <tool.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {tool.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {tool.description}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
                            Stop Guessing, Start Recovering.
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10">
                            The best way to improve your profit margin is to stop losing customers who already added to cart. Join 500+ stores using BoostACart.
                        </p>
                        <Link href="/auth/sign-up" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-slate-100 font-bold px-8 py-4 rounded-full transition-all relative z-10 active:scale-95 shadow-lg">
                            Get Started Free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
