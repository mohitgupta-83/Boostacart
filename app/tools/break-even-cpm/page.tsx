"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { ShieldCheck, IndianRupee, DollarSign, TrendingUp, Sparkles, Zap, ArrowRight, Activity, Percent, Crosshair } from "lucide-react"
import Link from "next/link"

export default function BreakEvenCPMCaltulatorPage() {
    const [price, setPrice] = useState("")
    const [cost, setCost] = useState("")
    const [ctr, setCtr] = useState("")
    const [cr, setCr] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ breakEvenCpm: 0, profitPerOrder: 0, roas: 0 })

    const calculate = () => {
        const p = parseFloat(price) || 0
        const c = parseFloat(cost) || 0
        const ctrVal = (parseFloat(ctr) || 0) / 100
        const crVal = (parseFloat(cr) || 0) / 100

        const profitPerOrder = p - c
        if (profitPerOrder <= 0) {
            setResults({ breakEvenCpm: 0, profitPerOrder, roas: 0 })
            setHasCalculated(true)
            return
        }

        // Break Even CPM = ProfitPerOrder * (CTR * CR * 1000)
        const breakEvenCpm = profitPerOrder * (ctrVal * crVal * 1000)
        const roas = p / (p - profitPerOrder) // Since at break even, AdSpend = ProfitPerOrder (simplified)

        setResults({ breakEvenCpm, profitPerOrder, roas })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 1
    }).format(val)

    const getInsight = () => {
        if (results.breakEvenCpm < 150 && currency === "INR") {
            return "Extreme Scaling Alert: Your break-even CPM is too low for Meta/TikTok auctions. You are likely selling a product with low margins. Increase price or bundle items immediately. In the meantime, capturing leads before checkout is your ONLY way to turn a profit on retargeting."
        }
        if (results.breakEvenCpm > 2500 && currency === "INR") {
            return "Safe Zone Found: High break-even CPM detected. You have massive breathing room in the auctions. You can afford to bid higher and dominate the competition. Focus on 'Top of Funnel' scale while BoostACart handles the 'Bottom of Funnel' leaks."
        }
        return "Steady Performance: Your break-even CPM is average. Success depends on ad creative longevity. Ensure your checkout recovery is at maximum efficiency to improve your actual net-profit beyond this break-even point."
    }

    return (
        <ToolLayout
            title="Break-Even CPM Calculator"
            icon={ShieldCheck}
            description={[
                "Know exactly what CPM you can afford before you lose money.",
                "Protect your profit margins in rising ad auctions."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-10 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full opacity-50"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-xl font-black text-white tracking-widest uppercase flex items-center gap-3">
                            <Crosshair className="w-5 h-5 text-green-400" /> Auction Targets
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button key={curr} onClick={() => setCurrency(curr as any)} className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${currency === curr ? "bg-green-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}>
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {[
                            { label: "Product Selling Price", state: price, set: setPrice, help: "What the customer pays" },
                            { label: "Product Cost (COGS)", state: cost, set: setCost, help: "Sourcing + Shipping + Handling" },
                            { label: "Est. CTR (%)", state: ctr, set: setCtr, help: "Click-Through Rate (%)", suffix: "%" },
                            { label: "Est. Conversion Rate (%)", state: cr, set: setCr, help: "Store conversion rate (%)", suffix: "%" },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block px-1">{field.label}</label>
                                <div className="relative">
                                    {(field.label.includes("Price") || field.label.includes("Cost")) && (
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                            {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                        </div>
                                    )}
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 transition-all focus:ring-4 focus:ring-green-500/10 focus:border-green-500/50 text-white font-medium ${(field.label.includes("Price") || field.label.includes("Cost")) ? "pl-12" : "pl-6"} pr-10`}
                                        placeholder="0"
                                    />
                                    {field.suffix && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-600 font-black">{field.suffix}</div>}
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-green-700 to-blue-700 hover:scale-[1.01] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-[1.5rem] transition-all flex items-center justify-center gap-3 text-lg border border-white/10 shadow-xl shadow-green-900/40 uppercase tracking-widest mt-4"
                        >
                            <ShieldCheck className="w-7 h-7" /> Find Break-Even CPM
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-6 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-[#0c0d0e] border border-white/5 border-dashed rounded-[3rem] p-12 text-center h-[540px] flex flex-col items-center justify-center group relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl border border-white/5">
                                <ShieldCheck className="w-12 h-12 text-slate-800" />
                            </div>
                            <h4 className="text-2xl font-black text-slate-400 mb-2 italic tracking-tight uppercase">Analyze Risk Threshold</h4>
                            <p className="text-xs text-slate-600 leading-relaxed max-w-[240px] mx-auto uppercase tracking-widest font-black italic">
                                "The auction doesn't care about your feelings, only your CPM math."
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            {/* Main Break Even Stat */}
                            <div className="bg-[#0f121a] border border-white/10 rounded-[2.5rem] p-12 text-center shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,197,94,0.05)_0%,transparent_100%)]"></div>

                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-green-500 uppercase tracking-[0.4em] mb-4">Break-Even CPM Ceiling</p>
                                    <h2 className="text-8xl font-black text-white drop-shadow-2xl tracking-tighter truncate leading-none mb-2">
                                        {formatCurr(results.breakEvenCpm)}
                                    </h2>
                                    <p className="text-sm font-black text-slate-500 uppercase tracking-widest mt-8">Maximum Affordable Auction Cost</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-950 border border-white/5 rounded-3xl p-8 text-center group hover:border-green-500/20 transition-all">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Profit/Order</p>
                                    <p className="text-3xl font-black text-white">{formatCurr(results.profitPerOrder)}</p>
                                </div>
                                <div className="bg-slate-950 border border-white/5 rounded-3xl p-8 text-center group hover:border-green-500/20 transition-all">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Auction ROAS</p>
                                    <p className="text-3xl font-black text-green-400">1.0<span className="text-lg opacity-50">x</span></p>
                                </div>
                            </div>

                            {/* Strategic Insight */}
                            <div className="bg-green-600/5 border border-green-500/10 rounded-[2.5rem] p-10 relative group overflow-hidden">
                                <div className="absolute left-0 top-0 w-1 h-full bg-green-500/30"></div>
                                <h5 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                                    <Sparkles className="w-4 h-4 text-green-400" /> Ceiling Analysis:
                                </h5>
                                <p className="text-slate-400 text-sm leading-relaxed font-light italic">
                                    {getInsight()}
                                </p>
                            </div>

                            {/* CTA Link */}
                            <Link href="/" className="group flex items-center justify-between p-8 bg-white text-slate-950 rounded-[2rem] hover:bg-slate-200 transition-all font-black text-xs uppercase tracking-widest shadow-2xl">
                                Lower Your CPM with Better Retention <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </ToolLayout>
    )
}
