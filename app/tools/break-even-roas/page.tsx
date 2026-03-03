"use client"

import { useState } from "react"
import { Calculator, IndianRupee, DollarSign, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function BreakEvenRoasPage() {
    const [price, setPrice] = useState<string>("")
    const [cost, setCost] = useState<string>("")
    const [shipping, setShipping] = useState<string>("")
    const [fees, setFees] = useState<string>("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")

    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({
        breakEvenRoas: 0,
        profitMarginText: "",
        marginPercent: 0
    })

    const handleCalculate = () => {
        const selling_price = parseFloat(price) || 0
        const product_cost = parseFloat(cost) || 0
        const shipping_cost = parseFloat(shipping) || 0
        const gateway_fees_pct = parseFloat(fees) || 0

        const gateway_fee_val = selling_price * (gateway_fees_pct / 100)
        const total_cost = product_cost + shipping_cost + gateway_fee_val
        const gross_profit = selling_price - total_cost

        const be_roas = gross_profit > 0 ? (selling_price / gross_profit) : 0
        const margin_percent = selling_price > 0 ? (gross_profit / selling_price) * 100 : 0

        setResults({
            breakEvenRoas: Number(be_roas.toFixed(2)),
            profitMarginText: new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency: currency }).format(gross_profit),
            marginPercent: Number(margin_percent.toFixed(2))
        })
        setHasCalculated(true)
    }

    return (
        <div className="min-h-screen bg-[#020817] text-white py-16 px-4 font-sans select-none">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
                        Break-Even ROAS Calculator
                    </h1>
                    <div className="text-slate-400 text-lg max-w-2xl mx-auto space-y-4">
                        <p>
                            Break-Even Return on Ad Spend (ROAS) is the minimum ROAS your ads must hit to ensure you don't lose money on a sale.
                        </p>
                        <p>
                            Calculate your true margins and determine exactly how efficiently your ad campaigns need to perform.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Input Section */}
                        <div className="space-y-5">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold text-white">Product Economics</h3>
                                <div className="flex gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                                    <button
                                        onClick={() => setCurrency("INR")}
                                        className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "INR" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}
                                    >
                                        INR
                                    </button>
                                    <button
                                        onClick={() => setCurrency("USD")}
                                        className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "USD" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}
                                    >
                                        USD
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Selling Price</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="2000"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Product Cost (COGS)</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={cost}
                                        onChange={(e) => setCost(e.target.value)}
                                        placeholder="500"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Shipping Cost</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={shipping}
                                        onChange={(e) => setShipping(e.target.value)}
                                        placeholder="100"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Payment Gateway Fees (Optional %)</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        min="0"
                                        value={fees}
                                        onChange={(e) => setFees(e.target.value)}
                                        placeholder="2"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">%</div>
                                </div>
                            </div>

                            <button
                                onClick={handleCalculate}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all mt-4"
                            >
                                <Calculator className="w-5 h-5" />
                                Calculate Break-Even
                            </button>
                        </div>

                        {/* Results Section */}
                        <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center">
                            {!hasCalculated ? (
                                <div className="text-center text-slate-500">
                                    <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>Enter your product economics to see your margin and target ROAS.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {results.breakEvenRoas <= 0 ? (
                                        <div className="text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                                            Warning: You are currently losing money before even factoring in ad spend. Adjust your pricing or costs.
                                        </div>
                                    ) : (
                                        <>
                                            <div>
                                                <p className="text-sm text-slate-400 mb-1">Required Break-Even ROAS</p>
                                                <p className="text-5xl font-bold text-white mb-2">{results.breakEvenRoas}x</p>
                                                <p className="text-sm text-slate-400">
                                                    Your ads must return at least this multiple to turn a profit. Anything above this is pure profit!
                                                </p>
                                            </div>

                                            <div className="h-px w-full bg-slate-800"></div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm text-slate-400 mb-1">Gross Margin</p>
                                                    <p className="text-2xl font-semibold text-green-400">{results.marginPercent}%</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-400 mb-1">Profit per Sale</p>
                                                    <p className="text-2xl font-semibold text-white">{results.profitMarginText}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">Are you struggling to hit your Break-Even ROAS?</h3>
                        <p className="text-slate-400 mb-6">
                            If your ROAS is close to Break-Even, recovering abandoned carts is the fastest way to improve profitability across your entire store without spending more on ads.
                        </p>
                        <Link href="/auth/sign-up" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-colors">
                            Boost My Profit Margins <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
