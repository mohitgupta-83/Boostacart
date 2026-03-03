"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Music2, IndianRupee, DollarSign, TrendingUp, Sparkles, Zap, ArrowRight, Activity, Percent } from "lucide-react"
import Link from "next/link"

export default function TikTokProfitCalculatorPage() {
    const [adSpend, setAdSpend] = useState("")
    const [orders, setOrders] = useState("")
    const [aov, setAov] = useState("")
    const [productCost, setProductCost] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ revenue: 0, profit: 0, roas: 0, margin: 0 })

    const calculate = () => {
        const spend = parseFloat(adSpend) || 0
        const ord = parseFloat(orders) || 0
        const val = parseFloat(aov) || 0
        const cost = parseFloat(productCost) || 0

        const revenue = ord * val
        const totalProductCost = ord * cost
        const profit = revenue - spend - totalProductCost
        const roas = spend > 0 ? revenue / spend : 0
        const margin = revenue > 0 ? (profit / revenue) * 100 : 0

        setResults({ revenue, profit, roas, margin })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(val)

    const getInsight = () => {
        if (results.roas < 2.5) {
            return "TikTok ad fatigue is real. Your ROAS is below the scaling threshold. Focus on 'Lo-Fi' content that doesn't look like an ad. At this volume, every cart recovered is pure profit since your ad spend is already committed."
        }
        if (results.margin < 15) {
            return "Low margins detected. TikTok is great for volume, but your backend economics are tight. Implementing a 'pre-checkout' lead capture via BoostACart can help you remarket via WhatsApp for free."
        }
        return "Excellent performance! These metrics are ready for 'Pulse' or 'Spark' ad scaling. Ensure your checkout flow is optimized to handle the influx of mobile-first traffic."
    }

    return (
        <ToolLayout
            title="TikTok Ads Profit Calculator"
            icon={Music2}
            description={[
                "Calculate your TikTok campaign profitability instantly.",
                "Know your real margins after ad spend and product costs."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs */}
                <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 blur-3xl rounded-full opacity-50"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Zap className="w-5 h-5 text-pink-400" /> Campaign Metrics
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button
                                    key={curr}
                                    onClick={() => setCurrency(curr as any)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${currency === curr ? "bg-pink-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                                >
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {[
                            { label: "Total Ad Spend", state: adSpend, set: setAdSpend, help: "Budget spent on TikTok Ads" },
                            { label: "Total Orders", state: orders, set: setOrders, help: "Number of conversions" },
                            { label: "Average Order Value", state: aov, set: setAov, help: "Average price customers paid" },
                            { label: "Product Cost (Per Unit)", state: productCost, set: setProductCost, help: "Sourcing + Shipping per item" },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-bold text-slate-300 tracking-tight">{field.label}</label>
                                    <span className="text-[10px] text-slate-500 uppercase font-black opacity-0 group-hover/field:opacity-100 transition-opacity tracking-widest">{field.help}</span>
                                </div>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within/field:text-pink-400 transition-colors">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 pl-12 pr-6 transition-all focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500/50 text-white font-medium"
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-pink-600 to-cyan-500 hover:scale-[1.02] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-pink-900/40 mt-6 flex items-center justify-center gap-3 text-lg"
                        >
                            <TrendingUp className="w-6 h-6" /> Calculate Campaign Profit
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-6 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 border-dashed rounded-[2.5rem] p-12 text-center h-[520px] flex flex-col items-center justify-center group opacity-50 hover:opacity-100 transition-all duration-700">
                            <div className="w-24 h-24 rounded-full bg-slate-950 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                                <Music2 className="w-12 h-12 text-slate-800" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-400 mb-2">Ready to Trend?</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto italic font-light">
                                "Don't make ads. Make TikToks. But first, check the numbers."
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            {/* Main Profit Stat */}
                            <div className="bg-[#0f1012] border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(6,182,212,0.05),transparent_50%)]"></div>

                                <div className="relative z-10 grid gap-6 text-center">
                                    <div>
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Net Campaign Profit</p>
                                        <h2 className={`text-7xl font-black drop-shadow-[0_0_20px_rgba(236,72,153,0.25)] tracking-tighter ${results.profit > 0 ? 'text-pink-400' : 'text-red-400'}`}>
                                            {formatCurr(results.profit)}
                                        </h2>
                                    </div>
                                    <div className="h-px w-32 bg-slate-800 mx-auto opacity-50"></div>
                                    <div className="grid grid-cols-2 gap-8 text-center">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Gross Revenue</p>
                                            <p className="text-xl font-bold text-white opacity-80">{formatCurr(results.revenue)}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Ad ROAS</p>
                                            <p className="text-xl font-bold text-cyan-400">{results.roas.toFixed(2)}x</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Margin Card */}
                            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 flex items-center justify-between group hover:border-pink-500/20 transition-all duration-500">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                                        <Activity className="w-3 h-3 text-pink-400" /> Net Profit Margin
                                    </p>
                                    <p className="text-3xl font-black text-white">{results.margin.toFixed(1)}%</p>
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/5">
                                    <Percent className="w-5 h-5 text-pink-400 opacity-60" />
                                </div>
                            </div>

                            {/* Strategic Insight */}
                            <div className="bg-slate-900/80 border border-white/10 rounded-[2.5rem] p-8 relative group overflow-hidden">
                                <div className="relative z-10">
                                    <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-pink-400" /> Performance Insight:
                                    </h5>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                                        {getInsight()}
                                    </p>
                                </div>
                            </div>

                            {/* CTA Link */}
                            <Link href="/" className="group flex items-center justify-between p-6 bg-pink-600/10 border border-pink-500/20 rounded-3xl hover:border-pink-500/40 transition-all">
                                <span className="text-pink-400 group-hover:text-white transition-colors text-xs font-black uppercase tracking-widest flex items-center gap-3">
                                    Unlock 30% more TikTok Profit <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </ToolLayout>
    )
}
