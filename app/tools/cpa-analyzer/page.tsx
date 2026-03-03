"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Target, IndianRupee, DollarSign, ArrowRight, Zap, TrendingUp, Info, AlertCircle, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function CpaAnalyzerPage() {
    const [adSpend, setAdSpend] = useState("")
    const [purchases, setPurchases] = useState("")
    const [aov, setAov] = useState("")
    const [cost, setCost] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ cpa: 0, netProfit: 0, revenue: 0, costs: 0 })

    const calculate = () => {
        const spend = parseFloat(adSpend) || 0
        const p = parseFloat(purchases) || 0
        const a = parseFloat(aov) || 0
        const c = parseFloat(cost) || 0

        const cpa = p > 0 ? spend / p : 0
        const revenue = p * a
        const totalProductCost = p * c
        const costs = totalProductCost + spend
        const netProfit = revenue - costs

        setResults({ cpa, netProfit, revenue, costs })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(val)

    const getInsight = () => {
        if (results.netProfit <= 0) {
            return `Your CPA of ${formatCurr(results.cpa)} is higher than your remaining gross profit. You are losing money on every sale. To make this profitable, you must recover high-intent visitors who already added products to their cart without paying extra for more traffic.`
        }
        if (results.cpa > results.revenue * 0.4) {
            return "Your CPA is eating over 40% of your revenue. While you are profitable, your business is extremely sensitive to ad platform fluctuations. Cart recovery can help you maintain profitability even if Meta or Google ad costs spike."
        }
        return "Excellent CPA! Your campaigns are highly efficient. This is the optimal time to scale budget while using abandonment recovery to squeeze even more volume out of the traffic you've already paid for."
    }

    return (
        <ToolLayout
            title="Cost Per Acquisition (CPA) Analyzer"
            icon={Target}
            description={[
                "Understand the true cost of acquiring a customer with your ads.",
                "Calculate your CPA and see if your current marketing strategy is actually profitable after product costs."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:scale-[1.005] transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full"></div>

                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-400" /> Campaign Metrics
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button
                                    key={curr}
                                    onClick={() => setCurrency(curr as any)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${currency === curr ? "bg-purple-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                                >
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            { label: "Total Ad Spend", state: adSpend, set: setAdSpend, help: "Total budget spent in date range" },
                            { label: "Total Purchases", state: purchases, set: setPurchases, help: "Number of orders generated", noIcon: true },
                            { label: "Average Order Value (AOV)", state: aov, set: setAov, help: "Average price customers pay" },
                            { label: "Product Cost Per Unit", state: cost, set: setCost, help: "Your cost including shipping to warehouse" },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-bold text-slate-300 tracking-tight">{field.label}</label>
                                    <span className="text-[10px] text-slate-500 uppercase font-black opacity-0 group-hover/field:opacity-100 transition-opacity">{field.help}</span>
                                </div>
                                <div className="relative">
                                    {!field.noIcon && (
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within/field:text-purple-400 transition-colors">
                                            {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                        </div>
                                    )}
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 transition-all focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500/50 text-white font-medium ${!field.noIcon ? "pl-12 pr-6" : "px-6"}`}
                                        placeholder="0"
                                    />
                                    {field.noIcon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold px-4"> orders </div>}
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-[1.02] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-purple-900/40 mt-6 flex items-center justify-center gap-3 text-lg"
                        >
                            <TrendingUp className="w-6 h-6" /> Calculate Net CPA
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-5 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 border-dashed rounded-[2rem] p-12 text-center h-full flex flex-col items-center justify-center group opacity-50 hover:opacity-100 transition-all duration-500">
                            <div className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-10 h-10 text-slate-700" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-400 mb-2">Campaign Ready?</h4>
                            <p className="text-sm text-slate-500">Enter your ad metrics to uncover your true customer cost.</p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-500">
                            {/* Main Result Card */}
                            <div className="bg-slate-950/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden group backdrop-blur-xl">
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_right_top,rgba(168,85,247,0.1),transparent_50%)]"></div>
                                <div className="relative z-10 text-center">
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Actual Cost Per Acquisition</p>
                                    <h2 className="text-6xl font-black mb-4 tracking-tighter text-white">
                                        {formatCurr(results.cpa)}
                                    </h2>
                                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-widest ${results.netProfit > 0 ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                                        {results.netProfit > 0 ? "Profitable ✅" : "Losing Money ❌"}
                                    </div>
                                </div>
                            </div>

                            {/* Stat Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Total Revenue</p>
                                    <p className="text-2xl font-black text-white">{formatCurr(results.revenue)}</p>
                                </div>
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Total Net Profit</p>
                                    <p className={`text-2xl font-black ${results.netProfit > 0 ? 'text-green-400' : 'text-red-400'}`}>{formatCurr(results.netProfit)}</p>
                                </div>
                            </div>

                            {/* Dynamic Insight Card */}
                            <div className="bg-purple-600/10 border border-purple-500/20 rounded-[2rem] p-8 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="p-3 bg-purple-600 rounded-2xl shadow-lg shadow-purple-900/40 group-hover:scale-110 transition-transform">
                                        <Info className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">CPA Insights:</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                                            {getInsight()}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Comparison Link */}
                            <Link href="/tools/add-to-cart-benchmark" className="flex items-center justify-between w-full p-6 bg-slate-950 border border-white/5 rounded-3xl group hover:border-white/10 transition-all font-bold text-sm">
                                <div className="flex items-center gap-3">
                                    <ShoppingCart className="w-5 h-5 text-purple-400" />
                                    <span className="text-slate-400 group-hover:text-white transition-colors">Improve conversion rate</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* SEO JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "How is CPA calculated in ecommerce?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Cost Per Acquisition (CPA) = Total Advertising Spend / Number of Purchases. To evaluate profitability, subtract CPA and product costs from revenue." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
