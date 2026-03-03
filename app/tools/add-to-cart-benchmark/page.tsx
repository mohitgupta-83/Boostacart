"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, ArrowRight, MousePointerClick, Zap, Info, Percent, TrendingUp, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function AddToCartBenchmarkPage() {
    const [visitors, setVisitors] = useState<string>("")
    const [atc, setAtc] = useState<string>("")

    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({
        rate: 0,
    })

    const handleCalculate = () => {
        const v = parseFloat(visitors) || 0
        const a = parseFloat(atc) || 0

        const rate_val = v > 0 ? (a / v) * 100 : 0

        setResults({
            rate: Number(rate_val.toFixed(2)),
        })
        setHasCalculated(true)
    }

    const getBenchmarkStatus = (rate: number) => {
        if (rate < 4) return { text: "Critical Loss", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", icon: ShieldAlert }
        if (rate < 8) return { text: "Industry Average", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20", icon: Info }
        return { text: "High Performance", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", icon: ShieldCheck }
    }

    // Helper since icon imports might be tricky in the array
    const getStatusDetails = (rate: number) => {
        if (rate < 4) return { label: "Underperforming", color: "text-red-400", sub: "Most of your traffic is bouncing before adding to cart." }
        if (rate < 8) return { label: "Competitive", color: "text-blue-400", sub: "You are tracking with standard Shopify benchmarks." }
        return { label: "Elite Tier", color: "text-green-400", sub: "Your product pages are in the top 5% for conversion intent." }
    }

    return (
        <ToolLayout
            title="Add-to-Cart Benchmark Checker"
            icon={ShoppingCart}
            description={[
                "Compare your store's performance against global Shopify averages.",
                "Identify if your traffic is high-quality or if your product pages need an overhaul."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Input Section */}
                <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full opacity-50"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Zap className="w-5 h-5 text-blue-400" /> Store Metrics
                        </h3>
                    </div>

                    <div className="space-y-8 relative z-10">
                        <div className="space-y-6">
                            {[
                                { label: "Monthly Store Visitors", state: visitors, set: setVisitors, placeholder: "10,000", help: "Total unique users per month" },
                                { label: "Monthly Add-to-Carts", state: atc, set: setAtc, placeholder: "500", help: "Number of 'Add to Cart' button clicks" },
                            ].map((field, i) => (
                                <div key={i} className="group/field">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-sm font-bold text-slate-300 tracking-tight">{field.label}</label>
                                        <span className="text-[10px] text-slate-500 uppercase font-black opacity-0 group-hover/field:opacity-100 transition-opacity tracking-widest">{field.help}</span>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={field.state}
                                            onChange={(e) => field.set(e.target.value)}
                                            className={`w-full bg-slate-950/50 border border-white/5 rounded-2xl py-5 px-6 transition-all focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 text-white font-medium text-lg`}
                                            placeholder={field.placeholder}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleCalculate}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/40 mt-4 flex items-center justify-center gap-3 text-lg"
                        >
                            <TrendingUp className="w-6 h-6" /> Evaluate My Performance
                        </button>
                    </div>
                </div>

                {/* Score Section */}
                <div className="lg:col-span-5 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 border-dashed rounded-[2.5rem] p-12 text-center h-[520px] flex flex-col items-center justify-center group opacity-50 hover:opacity-100 transition-all duration-700">
                            <div className="w-24 h-24 rounded-full bg-slate-950 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl border border-white/5">
                                <MousePointerClick className="w-12 h-12 text-slate-800" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-400 mb-2">Awaiting Data</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                                Enter your store's traffic and ATC numbers to see where you rank.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            <div className="bg-[#0f172a] border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group shadow-2xl text-center">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

                                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Your Add-to-Cart Intent</p>
                                <h2 className="text-8xl font-black text-white tracking-tighter mb-4">
                                    {results.rate}<span className="text-3xl text-slate-600 ml-1">%</span>
                                </h2>

                                <div className={`inline-flex px-6 py-2 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-6 ${getStatusDetails(results.rate).color.replace('text-', 'bg-').replace('-400', '-500/10')} ${getStatusDetails(results.rate).color} border-white/10`}>
                                    {getStatusDetails(results.rate).label}
                                </div>

                                <div className="h-px w-full bg-white/5 mb-6"></div>

                                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                                    {getStatusDetails(results.rate).sub}
                                </p>
                            </div>

                            {/* Actionable insight */}
                            <div className="bg-blue-600/10 border border-blue-500/20 rounded-[2rem] p-8 flex items-start gap-4 hover:border-blue-500/40 transition-all">
                                <div className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-900/40">
                                    <Info className="w-5 h-5 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <h5 className="font-bold text-white text-sm">Strategist Analysis:</h5>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        {results.rate < 4
                                            ? "Your conversion pipeline is broken at the first stage. Focus on 'Add to Cart' offer parity and mobile UX before spending a single dollar more on traffic."
                                            : "You've proven intent. Now the game is won by capturing these visitors and following up via WhatsApp before they lose interest."
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            <Link href="/" className="group flex items-center justify-between p-7 bg-slate-950/80 backdrop-blur-md border border-white/5 rounded-3xl hover:border-white/10 transition-all shadow-2xl">
                                <div className="flex flex-col">
                                    <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">Recover Lost Carts</span>
                                    <span className="text-[10px] text-slate-600 mt-0.5">Automated high-intent follow-ups</span>
                                </div>
                                <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </ToolLayout>
    )
}
