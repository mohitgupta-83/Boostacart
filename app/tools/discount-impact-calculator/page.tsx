"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, ArrowRight, TrendingDown, Zap, Info, Percent } from "lucide-react"
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
            marginDropPct: Number(margin_drop_pct.toFixed(1))
        })
        setHasCalculated(true)
    }

    const formatCurr = (amount: number) => {
        return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
            style: "currency",
            currency: currency,
            maximumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <ToolLayout
            title="Discount Profit Impact Calculator"
            icon={TrendingDown}
            description={[
                "Expose the hidden cost of discounting your products.",
                "See exactly how much volume you need to make up for margin losses."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:scale-[1.005] transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full"></div>

                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Zap className="w-5 h-5 text-red-500" /> Margin Analysis
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button
                                    key={curr}
                                    onClick={() => setCurrency(curr as any)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${currency === curr ? "bg-red-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                                >
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            { label: "Base Selling Price", state: price, set: setPrice, help: "Original retail price" },
                            { label: "Landed Product Cost", state: cost, set: setCost, help: "COGS + Shipping per unit" },
                            { label: "Discount Offered (%)", state: discount, set: setDiscount, help: "e.g. 15% off coupon", noIcon: true },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-bold text-slate-300 tracking-tight">{field.label}</label>
                                    <span className="text-[10px] text-slate-500 uppercase font-black opacity-0 group-hover/field:opacity-100 transition-opacity">{field.help}</span>
                                </div>
                                <div className="relative">
                                    {!field.noIcon && (
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within/field:text-red-500 transition-colors">
                                            {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                        </div>
                                    )}
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 transition-all focus:ring-4 focus:ring-red-500/10 focus:border-red-500/50 text-white font-medium ${!field.noIcon ? "pl-12 pr-6" : "px-6"}`}
                                        placeholder="0"
                                    />
                                    {field.noIcon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold px-4"> % </div>}
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={handleCalculate}
                            className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:scale-[1.02] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-red-900/40 mt-6 flex items-center justify-center gap-3 text-lg"
                        >
                            <Calculator className="w-6 h-6" /> Evaluate Profit Bleed
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-5 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 border-dashed rounded-[2rem] p-12 text-center h-full flex flex-col items-center justify-center group opacity-50 hover:opacity-100 transition-all duration-500">
                            <div className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <TrendingDown className="w-10 h-10 text-slate-700" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-400 mb-2">Bleed Analysis</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">Most store owners underestimate how much profit they lose to "small" discounts.</p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-500">
                            {/* Main Result Card */}
                            <div className="bg-slate-950/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden group backdrop-blur-xl text-center">
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_right_top,rgba(239,68,68,0.1),transparent_50%)]"></div>

                                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Total Net Profit Bleed</p>
                                <h2 className="text-7xl font-black text-red-500 tracking-tighter mb-4">
                                    {results.marginDropPct}<span className="text-2xl text-slate-600 ml-1">%</span>
                                </h2>

                                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-red-500/20 bg-red-500/5 text-xs font-black uppercase tracking-widest text-red-400">
                                    Effective Profit Loss
                                </div>
                            </div>

                            {/* Stat Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">New Profit / Sale</p>
                                    <p className={`text-2xl font-black ${results.newProfit > 0 ? 'text-white' : 'text-red-500'}`}>{formatCurr(results.newProfit)}</p>
                                </div>
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Cash Loss / Order</p>
                                    <p className="text-2xl font-black text-red-400">{formatCurr(results.profitLossValue)}</p>
                                </div>
                            </div>

                            {/* Strategy Insight */}
                            <div className="bg-orange-600/10 border border-orange-500/20 rounded-[2rem] p-8 flex items-start gap-4 hover:border-orange-500/40 transition-all">
                                <div className="p-3 bg-red-600 rounded-xl shadow-lg shadow-red-900/40 group-hover:scale-110 transition-transform">
                                    <Info className="w-5 h-5 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <h5 className="font-bold text-white text-sm">Strategic Warning:</h5>
                                    <p className="text-slate-400 text-xs leading-relaxed font-light">
                                        {results.newProfit <= 0
                                            ? "You are selling at a loss. No amount of scale will fix this. Stop the discount immediately."
                                            : `A ${discount}% discount killed ${results.marginDropPct}% of your profits. To make the same money as before, you need to sell ${(results.originalProfit / results.newProfit).toFixed(1)}x more units.`
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            <Link href="/" className="group flex items-center justify-between p-6 bg-slate-950/50 border border-white/5 rounded-3xl hover:border-white/10 transition-all">
                                <span className="text-slate-500 group-hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                    Build a high-margin brand <ArrowRight className="w-4 h-4 text-red-500" />
                                </span>
                            </Link>

                        </div>
                    )}
                </div>
            </div>
        </ToolLayout>
    )
}
