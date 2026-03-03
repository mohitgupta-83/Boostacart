"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, ArrowRight, TrendingUp, Zap, Info } from "lucide-react"
import Link from "next/link"

export default function RoasCalculatorPage() {
    const [adSpend, setAdSpend] = useState<string>("")
    const [revenue, setRevenue] = useState<string>("")
    const [cogs, setCogs] = useState<string>("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")

    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({
        roas: 0,
        profit: 0,
    })

    const handleCalculate = () => {
        const spend = parseFloat(adSpend) || 0
        const rev = parseFloat(revenue) || 0
        const cost_of_goods = parseFloat(cogs) || 0

        const roas_val = spend > 0 ? (rev / spend) : 0
        const profit_val = rev - spend - cost_of_goods

        setResults({
            roas: Number(roas_val.toFixed(2)),
            profit: profit_val,
        })
        setHasCalculated(true)
    }

    const formatCurr = (amount: number) => {
        return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
            style: "currency",
            currency: currency,
            maximumFractionDigits: 0,
        }).format(amount)
    }

    const getStatus = (roas: number) => {
        if (roas < 1.5) return { text: "Efficiency Drop", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" }
        if (roas < 3) return { text: "Average Performance", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" }
        return { text: "High Efficiency", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" }
    }

    return (
        <ToolLayout
            title="ROAS Calculator for Shopify & Ecom"
            icon={TrendingUp}
            description={[
                "Calculate your Return on Ad Spend (ROAS) instantly.",
                "Understand if your traffic is profitable after ad spend and COGS."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:scale-[1.005] transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full"></div>

                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Zap className="w-5 h-5 text-blue-400" /> Campaign Metrics
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button
                                    key={curr}
                                    onClick={() => setCurrency(curr as any)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${currency === curr ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                                >
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            { label: "Total Ad Spend", state: adSpend, set: setAdSpend, help: "Campaign spend in selected timeframe" },
                            { label: "Ad Revenue", state: revenue, set: setRevenue, help: "Total sales attributed to ads" },
                            { label: "Cost of Goods (Optional)", state: cogs, set: setCogs, help: "Landed cost of products sold" },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-bold text-slate-300 tracking-tight">{field.label}</label>
                                    <span className="text-[10px] text-slate-500 uppercase font-black opacity-0 group-hover/field:opacity-100 transition-opacity">{field.help}</span>
                                </div>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within/field:text-blue-400 transition-colors">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 pl-12 pr-6 transition-all focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 text-white font-medium`}
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={handleCalculate}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/40 mt-6 flex items-center justify-center gap-3 text-lg"
                        >
                            <Calculator className="w-6 h-6" /> Analyze Ad Performance
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-5 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 border-dashed rounded-[2rem] p-12 text-center h-full flex flex-col items-center justify-center group opacity-50 hover:opacity-100 transition-all duration-500">
                            <div className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Calculator className="w-10 h-10 text-slate-700" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-400 mb-2">Efficiency Check</h4>
                            <p className="text-sm text-slate-500">Enter your metrics to reveal your actual Return on Ad Spend.</p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-500">
                            {/* Main Result Card */}
                            <div className="bg-slate-950/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden group backdrop-blur-xl text-center">
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_right_top,rgba(59,130,246,0.1),transparent_50%)]"></div>

                                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Current Ad ROAS</p>
                                <h2 className="text-7xl font-black text-white tracking-tighter mb-4">
                                    {results.roas}<span className="text-2xl text-slate-600 ml-1">x</span>
                                </h2>

                                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-widest ${getStatus(results.roas).bg} ${getStatus(results.roas).color}`}>
                                    {getStatus(results.roas).text}
                                </div>
                            </div>

                            {/* Stat Card */}
                            {cogs && (
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Net Ad Profit</p>
                                    <p className={`text-3xl font-black ${results.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {formatCurr(results.profit)}
                                    </p>
                                    <p className="text-[10px] text-slate-500 mt-1">Revenue - Spend - COGS</p>
                                </div>
                            )}

                            {/* Strategy Insight */}
                            <div className="bg-blue-600/10 border border-blue-500/20 rounded-[2rem] p-8 flex items-start gap-4 hover:border-blue-500/40 transition-all">
                                <div className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-900/40">
                                    <Info className="w-5 h-5 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <h5 className="font-bold text-white text-sm">Growth Insight:</h5>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        {results.roas < 2
                                            ? "Your ads are likely below break-even once fulfillment costs are added. Don't scale until you implement recovery sequences to lower your blended CPA."
                                            : "You've hit the sweet spot. Every abandoned cart you recover now is pure high-margin profit that increases your final multi-channel ROAS."
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            <Link href="/" className="group flex items-center justify-between p-6 bg-slate-950/50 border border-white/5 rounded-3xl hover:border-white/10 transition-all">
                                <span className="text-slate-500 group-hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                    Scale your profitability <ArrowRight className="w-4 h-4 text-blue-500" />
                                </span>
                            </Link>

                        </div>
                    )}
                </div>
            </div>
        </ToolLayout>
    )
}
