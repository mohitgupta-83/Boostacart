"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { CheckCircle2, IndianRupee, DollarSign, TrendingUp, Zap, ArrowRight, Gauge, Info } from "lucide-react"
import Link from "next/link"

export default function WinningProductValidatorPage() {
    const [price, setPrice] = useState("")
    const [cost, setCost] = useState("")
    const [shipping, setShipping] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ margin: 0, marginPct: 0 })

    const calculate = () => {
        const p = parseFloat(price) || 0
        const c = parseFloat(cost) || 0
        const s = parseFloat(shipping) || 0

        const totalCost = c + s
        const margin = p - totalCost
        const marginPct = p > 0 ? (margin / p) * 100 : 0

        setResults({ margin, marginPct })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(val)

    const getScaleScore = (m: number) => {
        if (m < 40) return { label: "Low Success Probablity", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" }
        if (m < 60) return { label: "Moderate Scaling Potential", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" }
        return { label: "Strong Winning Signal", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" }
    }

    const getInsight = () => {
        if (results.marginPct < 40) {
            return "This product has a very low margin. Most of your profit will be consumed by ad platforms (Meta/Google). We recommend either negotiating a lower product cost or finding a unique bundle set to increase the AOV (Average Order Value)."
        }
        if (results.marginPct < 60) {
            return "Solid margins. This product can likely be profitable with efficient creative testing. At this level, your conversion rate on the product page is critical. High-intent cart capture is mandatory to maintain profit."
        }
        return "Outstanding margins! This is a textbook 'winning product' candidate. You have enough breathing room to scale aggressively even with high ad costs. Focus on brand-building and customer retention once you hit volume."
    }

    return (
        <ToolLayout
            title="Winning Product Margin Validator"
            icon={CheckCircle2}
            description={[
                "Validate the profitability potential of your new product ideas.",
                "Instantly check if a product has enough 'breathing room' to survive modern advertising platforms."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Product Inputs */}
                <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full opacity-50"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Zap className="w-5 h-5 text-emerald-400" /> Economics Entry
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button
                                    key={curr}
                                    onClick={() => setCurrency(curr as any)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${currency === curr ? "bg-emerald-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                                >
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {[
                            { label: "Target Selling Price", state: price, set: setPrice, help: "Final price including taxes if any" },
                            { label: "Sourcing Cost (Unit)", state: cost, set: setCost, help: "Unit price from your supplier" },
                            { label: "Shipping Cost Per Order", state: shipping, set: setShipping, help: "Packaging + Courier + Platform fees" },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-bold text-slate-300 tracking-tight">{field.label}</label>
                                    <span className="text-[10px] text-slate-500 uppercase font-black opacity-0 group-hover/field:opacity-100 transition-opacity tracking-widest">{field.help}</span>
                                </div>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within/field:text-emerald-400 transition-colors">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 pl-12 pr-6 transition-all focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 text-white font-medium shadow-inner"
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:scale-[1.02] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-emerald-900/40 mt-6 flex items-center justify-center gap-3 text-lg"
                        >
                            <Gauge className="w-6 h-6" /> Validate Product Economics
                        </button>
                    </div>
                </div>

                {/* Validation Results */}
                <div className="lg:col-span-5 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 border-dashed rounded-[2.5rem] p-12 text-center h-[460px] flex flex-col items-center justify-center group opacity-50 hover:opacity-100 transition-all duration-700">
                            <div className="w-24 h-24 rounded-full bg-slate-950 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl ring-1 ring-white/10">
                                <CheckCircle2 className="w-12 h-12 text-slate-800" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-400 mb-2 italic">Waiting for Signal...</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto italic font-light">
                                "Winning products are found, then validated. Don't skip the second step."
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            {/* Margin Percentage Circle Style */}
                            <div className="bg-slate-950 rounded-[2.5rem] border border-white/10 p-10 text-center shadow-2xl relative overflow-hidden group">
                                <div className={`absolute inset-0 opacity-10 blur-3xl transition-colors duration-1000 ${results.marginPct < 40 ? 'bg-red-500' : results.marginPct < 60 ? 'bg-orange-500' : 'bg-green-500'}`}></div>

                                <div className="relative z-10">
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Gross Margin Percentage</p>
                                    <div className="flex items-center justify-center gap-4 mb-8">
                                        <span className={`text-8xl font-black tracking-tighter drop-shadow-lg ${results.marginPct < 40 ? 'text-red-400' : results.marginPct < 60 ? 'text-orange-400' : 'text-green-400'}`}>
                                            {results.marginPct.toFixed(0)}
                                        </span>
                                        <div className="flex flex-col text-left">
                                            <span className="text-3xl text-slate-700 font-bold">%</span>
                                            <span className="text-[10px] text-slate-600 uppercase font-black">Margin</span>
                                        </div>
                                    </div>

                                    <div className={`p-4 rounded-2xl border ${getScaleScore(results.marginPct).bg}`}>
                                        <h5 className={`font-black uppercase tracking-widest text-sm ${getScaleScore(results.marginPct).color}`}>
                                            {getScaleScore(results.marginPct).label}
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            {/* Profit per Unit Stat */}
                            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 flex items-center justify-between group hover:border-emerald-500/20 transition-all duration-500 px-8">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Profit Per Unit</p>
                                    <p className="text-3xl font-black text-white">{formatCurr(results.margin)}</p>
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                                </div>
                            </div>

                            {/* Validation Insight */}
                            <div className="bg-emerald-600/10 border border-emerald-500/20 rounded-[2.5rem] p-8 flex items-start gap-6 relative group overflow-hidden hover:border-emerald-500/40 transition-all duration-300">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.05),transparent_60%)]"></div>
                                <div className="relative z-10 w-full text-center">
                                    <div className="p-4 bg-emerald-600 rounded-2xl shadow-xl shadow-emerald-900/40 mb-4 inline-flex items-center justify-center">
                                        <Info className="w-6 h-6 text-white" />
                                    </div>
                                    <h5 className="text-lg font-bold text-white mb-2">Next Strategic Step:</h5>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                                        {getInsight()}
                                    </p>
                                    <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-widest hover:text-white transition-colors">
                                        Learn How Winners Scale <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* SEO STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "What is a good margin for a winning product?",
                            "acceptedAnswer": { "@type": "Answer", "text": "A good margin for a winning product in ecommerce is generally 60% or higher. This provides enough room for customer acquisition costs, shipping, and returns while maintaining a healthy net profit." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
