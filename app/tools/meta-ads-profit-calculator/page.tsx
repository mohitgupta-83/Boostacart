"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Facebook, IndianRupee, DollarSign, TrendingUp, Sparkles, Zap, ArrowRight, Activity, MousePointer2 } from "lucide-react"
import Link from "next/link"

export default function MetaAdsProfitCalculatorPage() {
    const [mode, setMode] = useState<"CPM" | "CPC">("CPM")
    const [cpmOrCpc, setCpmOrCpc] = useState("")
    const [ctr, setCtr] = useState("")
    const [convRate, setConvRate] = useState("")
    const [aov, setAov] = useState("")
    const [productCost, setProductCost] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ cpa: 0, profit: 0, roas: 0, margin: 0 })

    const calculate = () => {
        const val = parseFloat(cpmOrCpc) || 0
        const ctrVal = (parseFloat(ctr) || 0) / 100
        const crVal = (parseFloat(convRate) || 0) / 100
        const aovVal = parseFloat(aov) || 0
        const costVal = parseFloat(productCost) || 0

        let cpa = 0
        if (mode === "CPM") {
            // Visitors per 1000 impressions = 1000 * CTR
            // Conversions per 1000 impressions = (1000 * CTR) * CR
            // CPA = CPM / Conversions
            const conversionsPer1000 = (1000 * ctrVal) * crVal
            cpa = conversionsPer1000 > 0 ? val / conversionsPer1000 : 0
        } else {
            // CPA = CPC / CR
            cpa = crVal > 0 ? val / crVal : 0
        }

        const profit = aovVal - cpa - costVal
        const roas = cpa > 0 ? aovVal / cpa : 0
        const margin = aovVal > 0 ? (profit / aovVal) * 100 : 0

        setResults({ cpa, profit, roas, margin })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 1
    }).format(val)

    const getInsight = () => {
        if (results.roas < 1.8) {
            return "Critical warning: Your projected ROAS is below break-even for most stores. Meta's CPMs are rising, and ad efficiency is dropping. You MUST increase your AOV through bundles or recover at least 25% of abandoned carts to make this campaign viable."
        }
        if (results.cpa > (parseFloat(aov) || 0) * 0.4) {
            return "High CPA detected. Meta finds it easy to spend your budget but hard to find buyers at this cost. Focus on improving your creative 'Hook' to increase CTR, which directly lowers your CPA in Meta's auction."
        }
        return "Profitable projection! At this CPA, your economics are healthy. We recommend scaling 20% every 48 hours to maintain stability. Don't forget that 70% of clicks don't convert instantly—ensure your remarketing is active."
    }

    return (
        <ToolLayout
            title="Meta Ads Profit Projection"
            icon={Facebook}
            description={[
                "Model your Meta (Facebook/IG) ad profitability before you spend a single rupee.",
                "Simulate different CPM, CTR, and Conversion Rate scenarios to find your winning pocket."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full opacity-50"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10 gap-4">
                        <div className="flex bg-slate-950/50 p-1.5 rounded-2xl border border-white/5">
                            {["CPM", "CPC"].map((m) => (
                                <button
                                    key={m}
                                    onClick={() => setMode(m as any)}
                                    className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${mode === m ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                                >
                                    {m} MODE
                                </button>
                            ))}
                        </div>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button key={curr} onClick={() => setCurrency(curr as any)} className={`px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all ${currency === curr ? "bg-slate-700 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}>
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { label: mode === "CPM" ? "Estimated CPM" : "Target CPC", state: cpmOrCpc, set: setCpmOrCpc, help: mode === "CPM" ? "Cost per 1000 impressions" : "Cost per single click" },
                                { label: "Target CTR (%)", state: ctr, set: setCtr, help: "Click-Through Rate (%)", suffix: "%" },
                                { label: "Conversion Rate (%)", state: convRate, set: setConvRate, help: "Store conversion rate (%)", suffix: "%" },
                                { label: "Average Order Value", state: aov, set: setAov, help: "Target AOV" },
                                { label: "Product Cost (Unit)", state: productCost, set: setProductCost, help: "Sourcing + Shipping per unit" },
                            ].map((field, i) => (
                                <div key={i} className="group/field">
                                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block px-1">{field.label}</label>
                                    <div className="relative">
                                        {(field.label.includes("Cost") || field.label.includes("AOV") || field.label.includes("CPM") || field.label.includes("CPC")) && (
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                                {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                            </div>
                                        )}
                                        <input
                                            type="number"
                                            value={field.state}
                                            onChange={(e) => field.set(e.target.value)}
                                            className={`w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 transition-all focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 text-white font-medium ${(field.label.includes("Cost") || field.label.includes("AOV") || field.label.includes("CPM") || field.label.includes("CPC")) ? "pl-12" : "pl-6"} pr-10`}
                                            placeholder="0"
                                        />
                                        {field.suffix && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-600 font-black">{field.suffix}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95 text-white font-black py-5 rounded-[1.5rem] transition-all mt-6 flex items-center justify-center gap-3 text-lg border border-white/10 uppercase tracking-widest"
                        >
                            <Sparkles className="w-6 h-6" /> Run Projection Simulator
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-5 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-950 border border-white/5 rounded-[2.5rem] p-12 text-center h-[560px] flex flex-col items-center justify-center group relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="w-28 h-28 rounded-[2rem] bg-slate-900 flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500 shadow-2xl border border-white/5">
                                <Facebook className="w-14 h-14 text-blue-600" />
                            </div>
                            <h4 className="text-2xl font-black text-slate-300 mb-2 italic tracking-tight uppercase">Simulate Profitability</h4>
                            <p className="text-xs text-slate-600 leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest font-black">
                                "In Meta Ads, the fortune is made in the backend, not the auction."
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            {/* ROAS Projection Card */}
                            <div className="bg-[#0f121a] border border-white/10 rounded-[2.5rem] p-10 text-center shadow-2xl relative overflow-hidden group">
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Projected Ad ROAS</p>
                                    <h2 className="text-8xl font-black text-white drop-shadow-2xl tracking-tighter transition-all group-hover:scale-105 duration-300">
                                        {results.roas.toFixed(2)}<span className="text-2xl text-slate-700">x</span>
                                    </h2>
                                    <div className="mt-8 flex items-center justify-center gap-2 px-6 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 w-fit mx-auto">
                                        <TrendingUp className="w-4 h-4 text-blue-400" />
                                        <span className="text-xs font-black text-blue-400 uppercase tracking-widest leading-none">Healthy Signal</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-950 border border-white/5 rounded-3xl p-6 text-center">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Projected CPA</p>
                                    <p className="text-xl font-bold text-white">{formatCurr(results.cpa)}</p>
                                </div>
                                <div className="bg-slate-950 border border-white/5 rounded-3xl p-6 text-center">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Net Margin</p>
                                    <p className={`text-xl font-bold ${results.margin > 0 ? 'text-green-400' : 'text-red-400'}`}>{results.margin.toFixed(1)}%</p>
                                </div>
                            </div>

                            {/* Stat of Net Profit */}
                            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 flex items-center justify-between group hover:border-blue-500/20 transition-all duration-500">
                                <div>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1.5 leading-none">
                                        <Activity className="w-3 h-3 text-blue-400" /> Net Profit Per Order
                                    </p>
                                    <p className={`text-3xl font-black ${results.profit > 0 ? 'text-white' : 'text-red-500'}`}>{formatCurr(results.profit)}</p>
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                                    <Zap className="w-5 h-5 text-blue-500 opacity-60" />
                                </div>
                            </div>

                            {/* Risk Assessment */}
                            <div className="bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] p-8 relative group overflow-hidden">
                                <h5 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-3 leading-none underline decoration-blue-500/50 underline-offset-4">Strategic Assessment:</h5>
                                <p className="text-slate-400 text-sm leading-relaxed font-light">
                                    {getInsight()}
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <Link href="/" className="group flex items-center justify-center gap-3 p-6 bg-white text-slate-950 rounded-3xl hover:bg-slate-200 transition-all font-black text-xs uppercase tracking-[0.2em] shadow-2xl">
                                Boost Meta Retention <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </ToolLayout>
    )
}
