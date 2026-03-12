"use client"

import { useState } from "react"
import { Calculator, IndianRupee, DollarSign, ArrowRight } from "lucide-react"
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

    const formatCurrency = (amount: number) => {
        const locale = currency === "INR" ? "en-IN" : "en-US"
        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
            maximumFractionDigits: 0,
        }).format(amount)
    }

    const getRoasStatus = (roas: number) => {
        if (roas < 1.5) return { text: "Losing", color: "text-red-400" }
        if (roas < 3) return { text: "Average", color: "text-orange-400" }
        return { text: "Strong", color: "text-green-400" }
    }

    return (
        <div className={`min-h-screen bg-[#04091A] text-white py-16 px-4 select-none relative overflow-hidden `}>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6`}>
                        Free ROAS Calculator for Ecommerce & Shopify
                    </h1>
                    <div className="text-white/60 text-lg max-w-2xl mx-auto space-y-4">
                        <p>
                            Return on Ad Spend (ROAS) measures how much revenue your business earns for every dollar or rupee spent on advertising.
                        </p>
                        <p>
                            Use this tool to easily calculate your ROAS and determine if your ad campaigns are profitable. Understanding your ROAS allows you to scale winning campaigns and cutoff losing ones.
                        </p>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Input Section */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className={`text-xl font-bold text-white`}>Enter Metrics</h3>
                                <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
                                    <button
                                        onClick={() => setCurrency("INR")}
                                        className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "INR" ? "bg-slate-800 text-white" : "text-white/40 hover:text-white/80"}`}
                                    >
                                        INR
                                    </button>
                                    <button
                                        onClick={() => setCurrency("USD")}
                                        className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "USD" ? "bg-slate-800 text-white" : "text-white/40 hover:text-white/80"}`}
                                    >
                                        USD
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Total Ad Spend</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={adSpend}
                                        onChange={(e) => setAdSpend(e.target.value)}
                                        placeholder="5000"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Revenue Generated from Ads</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={revenue}
                                        onChange={(e) => setRevenue(e.target.value)}
                                        placeholder="12000"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Cost of Goods (Optional)</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={cogs}
                                        onChange={(e) => setCogs(e.target.value)}
                                        placeholder="3000"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleCalculate}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border border-white/10 text-white font-semibold py-4 rounded-xl transition-all"
                            >
                                <Calculator className="w-5 h-5" />
                                Calculate ROAS
                            </button>
                        </div>

                        {/* Results Section */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
                            {!hasCalculated ? (
                                <div className="text-center text-white/40">
                                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>Enter your ad metrics to view your ROAS and profitability.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-sm text-white/60 mb-1">Return on Ad Spend (ROAS)</p>
                                        <div className="flex items-baseline gap-3">
                                            <p className="text-5xl font-bold text-white">{results.roas}x</p>
                                            <p className={`font-semibold ${getRoasStatus(results.roas).color}`}>
                                                {getRoasStatus(results.roas).text}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-slate-800"></div>

                                    {cogs && (
                                        <div>
                                            <p className="text-sm text-white/60 mb-1">Net Profit</p>
                                            <p className={`text-3xl font-bold ${results.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                {formatCurrency(results.profit)}
                                            </p>
                                        </div>
                                    )}

                                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mt-6">
                                        <p className="text-sm font-medium text-blue-400 mb-2">💡 Quick Insight</p>
                                        <p className="text-sm text-white/60">
                                            Recover abandoned carts to increase your final ROAS <strong>without increasing your ad spend</strong>. Capturing high-intent users is the easiest way to jump from Average to Strong ROAS.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">Want higher ROAS automatically?</h3>
                        <p className="text-white/60 mb-6">
                            Join BoostACart to recover 15-25% of your lost checkouts automatically through smart WhatsApp sequences.
                        </p>
                        <Link href="/auth/sign-up" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-colors">
                            Start Recovering Revenue <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
