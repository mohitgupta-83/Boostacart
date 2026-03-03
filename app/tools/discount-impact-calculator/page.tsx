"use client"

import { useState } from "react"
import { Calculator, IndianRupee, DollarSign, ArrowRight, TrendingDown } from "lucide-react"
import Link from "next/link"

export default function DiscountImpactCalculatorPage() {
    const [price, setPrice] = useState<string>("")
    const [cost, setCost] = useState<string>("")
    const [discount, setDiscount] = useState<string>("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")

    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({
        newSellingPrice: 0,
        originalProfit: 0,
        newProfit: 0,
        profitLossValue: 0,
        marginDropPct: 0,
    })

    const handleCalculate = () => {
        const original_price = parseFloat(price) || 0
        const product_cost = parseFloat(cost) || 0
        const discount_pct = parseFloat(discount) || 0

        const discount_amount = original_price * (discount_pct / 100)
        const new_selling_price = original_price - discount_amount

        const original_profit = original_price - product_cost
        const new_profit = new_selling_price - product_cost

        const profit_loss = original_profit - new_profit
        const margin_drop_pct = original_profit > 0 ? (profit_loss / original_profit) * 100 : 0

        setResults({
            newSellingPrice: new_selling_price,
            originalProfit: original_profit,
            newProfit: new_profit,
            profitLossValue: profit_loss,
            marginDropPct: Number(margin_drop_pct.toFixed(2))
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

    return (
        <div className="min-h-screen bg-[#020817] text-white py-16 px-4 font-sans select-none">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
                        Shopify Discount Profit Impact Calculator
                    </h1>
                    <div className="text-slate-400 text-lg max-w-2xl mx-auto space-y-4">
                        <p>
                            Offering a 10% discount doesn't mean your profit drops by 10%. It usually drops significantly more.
                        </p>
                        <p>
                            Use this calculator to determine the true financial impact of discounting your products to drive volume.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Input Section */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold text-white">Enter Details</h3>
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
                                <label className="block text-sm font-medium text-slate-300 mb-2">Original Product Price</label>
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
                                <label className="block text-sm font-medium text-slate-300 mb-2">Total Product Cost</label>
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
                                <label className="block text-sm font-medium text-slate-300 mb-2">Discount Offered (%)</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        min="0"
                                        value={discount}
                                        onChange={(e) => setDiscount(e.target.value)}
                                        placeholder="15"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">%</div>
                                </div>
                            </div>

                            <button
                                onClick={handleCalculate}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-0 text-white font-semibold py-4 rounded-xl transition-all"
                            >
                                <Calculator className="w-5 h-5" />
                                Validate Profit Impact
                            </button>
                        </div>

                        {/* Results Section */}
                        <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center">
                            {!hasCalculated ? (
                                <div className="text-center text-slate-500">
                                    <TrendingDown className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>Enter your margins to see how dangerous discounts can be.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {results.newProfit <= 0 && results.marginDropPct > 0 ? (
                                        <div className="text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                                            <strong>Warning:</strong> You are actively losing money at this discount level!
                                        </div>
                                    ) : results.marginDropPct >= 20 ? (
                                        <div className="text-orange-400 bg-orange-400/10 p-4 rounded-xl border border-orange-400/20">
                                            <strong>Heads up:</strong> Your profit margin is taking a huge hit. Is the extra volume worth losing {results.marginDropPct}% of your profits per sale?
                                        </div>
                                    ) : null}

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-slate-400 mb-1">New Selling Price</p>
                                            <p className="text-2xl font-bold text-white">{formatCurrency(results.newSellingPrice)}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 mb-1">New Profit / Sale</p>
                                            <p className={`text-2xl font-bold ${results.newProfit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                {formatCurrency(results.newProfit)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-slate-800"></div>

                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Actual Drop in Profit Margin</p>
                                        <p className="text-5xl font-bold text-red-400 mb-2">
                                            -{results.marginDropPct}%
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            A simple {discount}% discount actually destroyed {results.marginDropPct}% of your final profit per order. You are sacrificing {formatCurrency(results.profitLossValue)} on every single sale.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">Stop relying on margin-killing discounts!</h3>
                        <p className="text-slate-400 mb-6">
                            Instead of giving high discounts to everyone just to squeeze out conversions, capture intent at Add-to-Cart and recover abandons smartly. Give discounts only to users who actually need them.
                        </p>
                        <Link href="/auth/sign-up" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-colors">
                            Protect Your Margins <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
