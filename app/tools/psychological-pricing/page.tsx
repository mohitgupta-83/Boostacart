"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { BrainCircuit, IndianRupee, DollarSign, TrendingUp, Sparkles, Zap, ArrowRight, Activity, Percent, MousePointer2 } from "lucide-react"
import Link from "next/link"

export default function PsychologicalPricingToolPage() {
    const [price, setPrice] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ charm: "", rounding: "", decimal: "", premium: "" })

    const calculate = () => {
        const val = parseFloat(price) || 0
        if (val === 0) return

        // Charm Pricing (.99 / .95)
        const charmPrice = Math.floor(val) + (val >= 1000 ? 0.99 : 0.95)

        // Rounding (Even Pricing)
        const roundPrice = Math.round(val / 10) * 10

        // Decimal Strategy (Charm + Ending)
        const decPrice = Math.floor(val) + 0.49

        // Premium Pricing (Ending in 00 or 50)
        const premPrice = Math.round(val / 50) * 50

        setResults({
            charm: charmPrice.toString(),
            rounding: roundPrice.toString(),
            decimal: decPrice.toString(),
            premium: premPrice.toString()
        })
        setHasCalculated(true)
    }

    const formatCurr = (val: string) => {
        const num = parseFloat(val)
        return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
            style: "currency",
            currency,
            maximumFractionDigits: 2
        }).format(num)
    }

    return (
        <ToolLayout
            title="Psychological Pricing Optimizer"
            icon={BrainCircuit}
            description={[
                "Hack consumer brain patterns to increase your conversion rate.",
                "Optimizing for .99 or .95 can sometimes outperform raw logic."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-12 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-12 max-w-2xl mx-auto w-full bg-[#0a0b0d] border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group mb-12">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[120px] rounded-full opacity-50"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-xl font-black text-white tracking-[0.1em] uppercase flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-purple-400" /> Current Price Point
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button key={curr} onClick={() => setCurrency(curr as any)} className={`px-5 py-2 rounded-lg text-xs font-black transition-all ${currency === curr ? "bg-purple-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}>
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8 relative z-10">
                        <div className="relative group/input">
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within/input:text-purple-400">
                                {currency === "INR" ? <IndianRupee className="w-6 h-6" /> : <DollarSign className="w-6 h-6" />}
                            </div>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full bg-slate-950/50 border border-white/5 rounded-[2rem] py-8 pl-16 pr-8 transition-all focus:ring-8 focus:ring-purple-500/10 focus:border-purple-500/50 text-white text-5xl font-black tracking-tighter"
                                placeholder="0.00"
                            />
                        </div>

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:scale-[1.01] hover:brightness-110 active:scale-95 text-white font-black py-6 rounded-[1.5rem] transition-all flex items-center justify-center gap-4 text-xl border border-white/10 shadow-xl shadow-purple-900/40 uppercase tracking-widest"
                        >
                            <BrainCircuit className="w-8 h-8" /> Find The winning Price Point
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {!hasCalculated ? (
                        [1, 2, 3, 4].map(i => (
                            <div key={i} className="h-64 rounded-[2.5rem] border border-white/5 border-dashed flex items-center justify-center bg-slate-900/10 opacity-30 grayscale blur-[1px]">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em]">Neural Link Offline</p>
                            </div>
                        ))
                    ) : (
                        <>
                            {[
                                { title: "Charm Pricing", val: results.charm, icon: Zap, color: "blue", help: "The classic '9' ending trick for bargain perception." },
                                { title: "Even Value", val: results.rounding, icon: TrendingUp, color: "green", help: "Best for luxury/premium positioning for emotional buys." },
                                { title: "The Decoy Ending", val: results.decimal, icon: Activity, color: "purple", help: "Optimized for mid-range product anchors." },
                                { title: "Premium Rounded", val: results.premium, icon: Sparkles, color: "orange", help: "Used for high-trust high-value D2C brands." },
                            ].map((res, i) => (
                                <div key={i} className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className={`w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform`}>
                                            <res.icon className="w-6 h-6 text-white opacity-60" />
                                        </div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{res.title}</p>
                                        <p className="text-3xl font-black text-white tracking-tighter mb-4">{formatCurr(res.val)}</p>
                                        <p className="text-[10px] text-slate-500 leading-relaxed font-bold italic opacity-60 group-hover:opacity-100 transition-opacity">
                                            "{res.help}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <div className="lg:col-span-12 max-w-4xl mx-auto w-full mt-12 bg-white/5 border border-white/10 rounded-[3rem] p-10 text-center animate-in fade-in slide-in-from-bottom-5 delay-500">
                    <p className="text-sm font-black text-purple-400 uppercase tracking-widest mb-6 px-1 italic">🚨 Strategic Note:</p>
                    <h4 className="text-3xl md:text-4xl font-black text-white mb-6 italic tracking-tight">Price creates the first impression. <br /> BoostACart maintains the second.</h4>
                    <p className="text-slate-400 leading-relaxed font-light mb-10 max-w-2xl mx-auto italic">
                        Once you've optimized your price point, 70% of people will still abandon their carts. Psychological pricing gets them to the 'Add-to-Cart' button; BoostACart gets them through the checkout.
                    </p>
                    <Link href="/" className="inline-flex items-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-white/5">
                        Recover Abandoned Neuromarketing Losses <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </ToolLayout>
    )
}
