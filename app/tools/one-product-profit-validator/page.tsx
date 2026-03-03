"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { PackageOpen, IndianRupee, DollarSign, TrendingUp, Sparkles, Zap, ArrowRight, Activity, Percent, Gauge } from "lucide-react"
import Link from "next/link"

export default function OneProductProfitValidatorPage() {
    const [price, setPrice] = useState("")
    const [cost, setCost] = useState("")
    const [gatewayFee, setGatewayFee] = useState("2")
    const [adSpendPerOrder, setAdSpendPerOrder] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ grossProfit: 0, netProfit: 0, margin: 0, score: 0 })

    const calculate = () => {
        const p = parseFloat(price) || 0
        const c = parseFloat(cost) || 0
        const fee = parseFloat(gatewayFee) || 0
        const ads = parseFloat(adSpendPerOrder) || 0

        const gatewayTotal = p * (fee / 100)
        const grossProfit = p - c
        const netProfit = p - c - gatewayTotal - ads
        const margin = p > 0 ? (netProfit / p) * 100 : 0

        // Scoring (0-100)
        let score = 0
        if (margin > 30) score += 40
        else if (margin > 15) score += 20

        if (grossProfit > (currency === "INR" ? 800 : 15)) score += 30
        if (ads < grossProfit * 0.5) score += 30

        setResults({ grossProfit, netProfit, margin, score })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 1
    }).format(val)

    const getInsight = () => {
        if (results.score < 40) return "High Risk Selection: Your margins are razor thin. This product is likely to lose money after the first minor ad spend fluctuation. You MUST find a cheaper supplier or increase price by at least 20%. Stop active scaling until the numbers improve."
        if (results.score < 70) return "Moderate Potential: You have a working product, but it's middle-of-the-road. Success will depend on your 'Add-to-Cart' conversion efficiency. Focus on high-ticket bundles to bump your AOV and cushion these margins."
        return "Winner Detected: Exceptional economics. This product has the margin 'breathing room' required for massive scaling across Meta and TikTok. Double down on creative production and ensure your recovery flow is primed for high volume."
    }

    const getScoreColor = () => {
        if (results.score < 40) return "text-red-500 shadow-red-500/20"
        if (results.score < 70) return "text-amber-500 shadow-amber-500/20"
        return "text-green-400 shadow-green-500/20"
    }

    return (
        <ToolLayout
            title="Single-Product Margin Validator"
            icon={PackageOpen}
            description={[
                "Validate a single product's unit-economics before importing to Shopify.",
                "Know your real net profit after ads and hidden gateway fees."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-12 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 blur-3xl rounded-full opacity-50"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-xl font-black text-white tracking-widest uppercase flex items-center gap-3">
                            <Gauge className="w-5 h-5 text-blue-400" /> Unit Economy
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button key={curr} onClick={() => setCurrency(curr as any)} className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${currency === curr ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}>
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {[
                            { label: "Target Selling Price", state: price, set: setPrice, help: "Frontend price" },
                            { label: "Product Cost (COGS)", state: cost, set: setCost, help: "Sourcing + Shipping" },
                            { label: "Ad Spend / Purchase", state: adSpendPerOrder, set: setAdSpendPerOrder, help: "Target CPA", suffix: "CPA" },
                            { label: "Payment Gateway Fee (%)", state: gatewayFee, set: setGatewayFee, help: "Razorpay/Stripe Fee", suffix: "%" },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block px-1">{field.label}</label>
                                <div className="relative">
                                    {(field.label.includes("Price") || field.label.includes("Cost") || field.label.includes("Spend")) && (
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500">
                                            {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                        </div>
                                    )}
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-slate-950/50 border border-white/5 rounded-[1.5rem] py-5 transition-all focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 text-white font-medium ${(field.label.includes("Price") || field.label.includes("Cost") || field.label.includes("Spend")) ? "pl-14" : "pl-8"} pr-10`}
                                        placeholder="0"
                                    />
                                    {field.suffix && <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] text-slate-600 font-black uppercase tracking-widest">{field.suffix}</div>}
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:scale-[1.01] hover:brightness-110 active:scale-95 text-white font-black py-6 rounded-[1.5rem] transition-all flex items-center justify-center gap-4 text-xl border border-white/10 shadow-xl shadow-blue-900/40 uppercase tracking-widest mt-6"
                        >
                            <Sparkles className="w-7 h-7" /> Validate Unit Economics
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-6 space-y-8">
                    {!hasCalculated ? (
                        <div className="bg-[#0b0c0d] border border-white/5 border-dashed rounded-[3rem] p-12 text-center h-[620px] flex flex-col items-center justify-center group relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="w-32 h-32 rounded-[2rem] bg-slate-900 flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500 shadow-2xl border border-white/5">
                                <PackageOpen className="w-16 h-16 text-slate-800" />
                            </div>
                            <h4 className="text-3xl font-black text-slate-400 mb-2 italic tracking-tight uppercase">Analyze Unit ROI</h4>
                            <p className="text-[10px] text-slate-600 leading-relaxed max-w-[240px] mx-auto uppercase tracking-widest font-black italic">
                                "Revenue is vanity, Profit is sanity, Margin is the king."
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            {/* Score Card */}
                            <div className="bg-slate-950 border border-white/10 rounded-[3rem] p-12 text-center shadow-3xl relative overflow-hidden group">
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Product Potential Score</p>
                                    <h2 className={`text-9xl font-black transition-all drop-shadow-3xl tracking-tighter ${getScoreColor()}`}>
                                        {results.score}<span className="text-2xl opacity-40">/100</span>
                                    </h2>
                                    <div className="mt-8 bg-slate-900/50 px-6 py-2 rounded-full border border-white/5 w-fit mx-auto flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-blue-400" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Profitability Signal</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 text-center hover:border-blue-500/20 transition-all">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Net Margin</p>
                                    <p className="text-4xl font-black text-white">{results.margin.toFixed(1)}%</p>
                                </div>
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 text-center hover:border-blue-500/20 transition-all">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Net / Order</p>
                                    <p className="text-4xl font-black text-blue-400">{formatCurr(results.netProfit)}</p>
                                </div>
                            </div>

                            {/* Insight Card */}
                            <div className="bg-blue-600/5 border border-blue-500/10 rounded-3xl p-10 relative group overflow-hidden">
                                <h5 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-4 underline decoration-blue-500/50 underline-offset-8">Critical Decision Insight:</h5>
                                <p className="text-slate-400 text-sm leading-relaxed font-light italic">
                                    {getInsight()}
                                </p>
                            </div>

                            <Link href="/" className="group flex items-center justify-between p-8 bg-white text-slate-950 rounded-[2rem] hover:bg-slate-200 transition-all font-black text-xs uppercase tracking-widest shadow-2xl">
                                Recover more profit per product <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </ToolLayout>
    )
}
