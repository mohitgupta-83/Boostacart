"use client"

import { useState } from "react"
import { Calculator, ArrowRight, MousePointerClick } from "lucide-react"
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
        if (rate < 4) return { text: "Low", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" }
        if (rate < 8) return { text: "Average", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" }
        return { text: "Strong", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" }
    }

    return (
        <div className={`min-h-screen bg-[#04091A] text-white py-16 px-4 select-none relative overflow-hidden `}>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6`}>
                        Add-to-Cart Benchmark Checker
                    </h1>
                    <div className="text-white/60 text-lg max-w-2xl mx-auto space-y-4">
                        <p>
                            Your Add-to-Cart (ATC) rate shows the percentage of store visitors who add an item to their cart.
                        </p>
                        <p>
                            Find out if your product pages are converting well or if you are losing potential buyers before they even reach checkout.
                        </p>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Input Section */}
                        <div className="space-y-6">
                            <h3 className={`text-xl font-bold text-white mb-2`}>Enter Traffic Metrics</h3>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Monthly Store Visitors</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        min="0"
                                        value={visitors}
                                        onChange={(e) => setVisitors(e.target.value)}
                                        placeholder="10000"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Monthly Add-to-Carts</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        min="0"
                                        value={atc}
                                        onChange={(e) => setAtc(e.target.value)}
                                        placeholder="450"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleCalculate}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 hover:brightness-110 border border-white/10 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-0 text-white font-semibold py-4 rounded-xl transition-all"
                            >
                                <Calculator className="w-5 h-5" />
                                Check My Benchmark
                            </button>
                        </div>

                        {/* Results Section */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
                            {!hasCalculated ? (
                                <div className="text-center text-white/40">
                                    <MousePointerClick className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>Enter your visitors and ATC metrics to see your store's performance grade.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-sm text-white/60 mb-1">Your Add-to-Cart Rate</p>
                                        <div className="flex items-center gap-3">
                                            <p className="text-5xl font-bold text-white">{results.rate}%</p>
                                        </div>
                                    </div>

                                    <div className={`border rounded-xl p-4 ${getBenchmarkStatus(results.rate).bg}`}>
                                        <p className="text-sm font-medium text-white/80 mb-1">Performance Grade</p>
                                        <p className={`text-xl font-bold ${getBenchmarkStatus(results.rate).color}`}>
                                            {getBenchmarkStatus(results.rate).text}
                                        </p>
                                        <p className="text-sm text-white/60 mt-2">
                                            {results.rate < 4 && "Your ATC rate is below average. Consider improving product page copy, images, or pricing."}
                                            {results.rate >= 4 && results.rate < 8 && "You are performing at the industry average. Steady conversion flow."}
                                            {results.rate >= 8 && "Excellent! Your product pages are highly persuasive."}
                                        </p>
                                    </div>

                                    <div className="h-px w-full bg-slate-800"></div>

                                    <div>
                                        <p className="text-sm text-white/60">
                                            <strong>Did you know?</strong> Most stores lose 60–80% of Add-to-Cart visitors before they complete checkout.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">Don't let high-intent buyers slip away!</h3>
                        <p className="text-white/60 mb-6">
                            Capture these high-intent visitors using BoostACart. Auto-send personalized WhatsApp reminders when they abandon their cart.
                        </p>
                        <Link href="/auth/sign-up" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-colors">
                            Capture More Sales <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
