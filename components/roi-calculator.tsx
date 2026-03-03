"use client"

import { useState } from "react"
import { Calculator, IndianRupee, DollarSign, ArrowRight, percent, CheckCircle2 } from "lucide-react"

export function RoiCalculator() {
    const [visitors, setVisitors] = useState<string>("")
    const [conversionRate, setConversionRate] = useState<string>("")
    const [aov, setAov] = useState<string>("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")

    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({
        currentRevenue: 0,
        abandonedCarts: 0,
        lostRevenue: 0,
        recoveryPotential10: 0,
        recoveryPotential25: 0,
    })

    const handleCalculate = () => {
        const v = parseFloat(visitors) || 0
        const cr = parseFloat(conversionRate) || 0
        const avgOrderValue = parseFloat(aov) || 0

        const estimated_orders = v * (cr / 100)
        const estimated_add_to_carts = v * 0.08
        const current_revenue = estimated_orders * avgOrderValue
        const abandoned_carts = Math.max(0, estimated_add_to_carts - estimated_orders)
        const lost_revenue = abandoned_carts * avgOrderValue
        const recovery_potential_10 = lost_revenue * 0.10
        const recovery_potential_25 = lost_revenue * 0.25

        setResults({
            currentRevenue: Math.round(current_revenue),
            abandonedCarts: Math.round(abandoned_carts),
            lostRevenue: Math.round(lost_revenue),
            recoveryPotential10: Math.round(recovery_potential_10),
            recoveryPotential25: Math.round(recovery_potential_25),
        })
        setHasCalculated(true)
    }

    const formatCurrency = (amount: number) => {
        if (currency === "INR") {
            return new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
            }).format(amount)
        }
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4 relative z-10">
            <h2 className="sr-only">Abandoned Cart Loss Calculator for Shopify Stores</h2>

            <div className="text-center mb-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Abandoned Cart Revenue Loss Calculator
                </h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Most Shopify stores lose 60–80% of add-to-cart visitors. This free calculator helps estimate how much revenue may be slipping away.
                </p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/10 transition-shadow">

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Inputs Section */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Store Visitors</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    min="0"
                                    value={visitors}
                                    onChange={(e) => setVisitors(e.target.value)}
                                    placeholder="10000"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Conversion Rate (%)</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={conversionRate}
                                    onChange={(e) => setConversionRate(e.target.value)}
                                    placeholder="2"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">%</div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="block text-sm font-medium text-gray-300">Average Order Value</label>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setCurrency("INR")}
                                        className={`text-xs px-2 py-0.5 rounded transition-colors ${currency === "INR" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}
                                    >
                                        INR
                                    </button>
                                    <button
                                        onClick={() => setCurrency("USD")}
                                        className={`text-xs px-2 py-0.5 rounded transition-colors ${currency === "USD" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}
                                    >
                                        USD
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                    {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                </div>
                                <input
                                    type="number"
                                    min="0"
                                    value={aov}
                                    onChange={(e) => setAov(e.target.value)}
                                    placeholder="1500"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleCalculate}
                            className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-[0.98]"
                        >
                            <Calculator className="w-5 h-5" />
                            Calculate My Lost Revenue
                        </button>
                    </div>

                    {/* Results Section */}
                    <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-slate-500 py-10">
                                <Calculator className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Enter your store metrics to see your<br />abandoned cart revenue loss.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Estimated Abandoned Carts</p>
                                    <p className="text-2xl font-semibold text-white">
                                        {new Intl.NumberFormat("en-US").format(results.abandonedCarts)} <span className="text-xl text-slate-500 font-normal">/ month</span>
                                    </p>
                                </div>

                                <div className="h-px w-full bg-slate-800/50"></div>

                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Estimated Monthly Revenue Lost</p>
                                    <p className="text-3xl font-bold text-red-400">
                                        {formatCurrency(results.lostRevenue)}
                                    </p>
                                </div>

                                {/* Revenue Graph */}
                                {results.lostRevenue > 0 && (
                                    <div className="space-y-3 mt-4 pt-4 border-t border-slate-800/50">
                                        <p className="text-sm font-medium text-slate-300 mb-2">Revenue visual breakdown</p>

                                        <div>
                                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                <span>Current Revenue</span>
                                                <span>{formatCurrency(results.currentRevenue)}</span>
                                            </div>
                                            <div className="w-full bg-slate-800 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(100, (results.currentRevenue / (results.currentRevenue + results.lostRevenue)) * 100)}%` }}></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                <span>Lost Revenue</span>
                                                <span className="text-red-400">{formatCurrency(results.lostRevenue)}</span>
                                            </div>
                                            <div className="w-full bg-slate-800 rounded-full h-2">
                                                <div className="bg-red-500 h-2 rounded-full" style={{ width: `${Math.min(100, (results.lostRevenue / (results.currentRevenue + results.lostRevenue)) * 100)}%` }}></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                <span>Recoverable (25%)</span>
                                                <span className="text-green-400">{formatCurrency(results.recoveryPotential25)}</span>
                                            </div>
                                            <div className="w-full bg-slate-800 rounded-full h-2">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.min(100, (results.recoveryPotential25 / (results.currentRevenue + results.lostRevenue)) * 100)}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-slate-900 border border-slate-700/50 rounded-xl p-4">
                                        <p className="text-xs text-slate-400 font-medium mb-1">If you recover just 10% →</p>
                                        <p className="text-xl font-bold text-white">
                                            {formatCurrency(results.recoveryPotential10)}
                                        </p>
                                    </div>
                                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 shadow-[0_0_15px_rgba(34,197,94,0.1)] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                                        <p className="text-xs text-green-400 font-medium mb-1">If you recover 25% →</p>
                                        <p className="text-2xl font-bold text-green-400 relative z-10">
                                            {formatCurrency(results.recoveryPotential25)}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-green-400/60 mt-1 text-center">
                                    *Based on industry average abandoned cart recovery rates.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Suggested Recovery Flow */}
                {hasCalculated && (
                    <div className="mt-10 pt-8 border-t border-slate-800/80">
                        <h4 className="text-lg font-semibold text-white mb-6 text-center">Suggested Recovery Flow</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3">1</div>
                                <p className="text-sm text-gray-300 font-medium">Capture contact at Add-to-Cart</p>
                            </div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center">
                                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">2</div>
                                <p className="text-sm text-gray-300 font-medium">Send WhatsApp within 5 minutes</p>
                            </div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center">
                                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-3">3</div>
                                <p className="text-sm text-gray-300 font-medium">Offer limited-time discount</p>
                            </div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center">
                                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3">4</div>
                                <p className="text-sm text-gray-300 font-medium">Follow-up reminder in 24 hours</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
