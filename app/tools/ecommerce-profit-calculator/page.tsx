"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, ArrowRight, Zap, TrendingUp, Info } from "lucide-react"
import Link from "next/link"

export default function EcommerceProfitCalculatorPage() {
    const [price, setPrice] = useState("")
    const [cost, setCost] = useState("")
    const [shipping, setShipping] = useState("")
    const [feePct, setFeePct] = useState("")
    const [adCost, setAdCost] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ netProfit: 0, margin: 0, breakEvenAdCost: 0 })

    const calculate = () => {
        const p = parseFloat(price) || 0
        const c = parseFloat(cost) || 0
        const s = parseFloat(shipping) || 0
        const f = parseFloat(feePct) || 0
        const a = parseFloat(adCost) || 0

        const feeAmount = p * (f / 100)
        const totalCost = c + s + feeAmount + a
        const netProfit = p - totalCost
        const margin = p > 0 ? (netProfit / p) * 100 : 0
        const breakEvenAdCost = p - (c + s + feeAmount)

        setResults({ netProfit, margin, breakEvenAdCost })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(val)

    const getStatus = (m: number) => {
        if (m < 0) return { text: "Critical Loss", color: "text-red-400 font-black", bg: "bg-red-500/10 border-red-500/20" }
        if (m < 20) return { text: "Thin Margins", color: "text-orange-400 font-bold", bg: "bg-orange-500/10 border-orange-500/20" }
        return { text: "Healthy Profit", color: "text-green-400 font-bold", bg: "bg-green-500/10 border-green-500/20" }
    }

    const getInsight = () => {
        if (results.netProfit <= 0) {
            return "You are officially losing money on every order. To fix this, you must either increase your selling price, reduce your COGS, or significantly improve your cart recovery to lower your blended CAC."
        }
        if (results.margin < 20) {
            return "Your margins are very tight. A small increase in ad costs or a high return rate could erase your profits. Capturing and recovering Add-to-Cart visitors is your best path to protecting these thin margins."
        }
        return "Your unit economics are strong! This is the perfect time to scale. By recovering even 10% more of your lost carts, you could drastically increase your monthly bottom line without touching your ad spend."
    }

    return (
        <ToolLayout
            title="Ecommerce Profit Margin (Advanced)"
            icon={Calculator}
            description={[
                "Accurately calculate your net profit after all hidden ecommerce costs.",
                "factor in product sourcing, shipping, payment fees, and advertising overhead (CPA)."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:scale-[1.005] transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full"></div>

                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Zap className="w-5 h-5 text-blue-400" /> Economics Entry
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button
                                    key={curr}
                                    onClick={() => setCurrency(curr as any)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${currency === curr ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                                >
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            { label: "Final Selling Price", state: price, set: setPrice, help: "What the customer pays at checkout" },
                            { label: "Product Sourcing Cost", state: cost, set: setCost, help: "Landed cost from manufacturer" },
                            { label: "Estimated Shipping Cost", state: shipping, set: setShipping, help: "Shipping fee per order" },
                            { label: "Payment Gateway Fee (%)", state: feePct, set: setFeePct, help: "e.g. 2.5% for Stripe/Razorpay", noIcon: true },
                            { label: "Ad Cost Per Purchase (CPA)", state: adCost, set: setAdCost, help: "Amount spent on ads to get one sale" },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-bold text-slate-300 tracking-tight">{field.label}</label>
                                    <span className="text-[10px] text-slate-500 uppercase font-black opacity-0 group-hover/field:opacity-100 transition-opacity">{field.help}</span>
                                </div>
                                <div className="relative">
                                    {!field.noIcon && (
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within/field:text-blue-400 transition-colors">
                                            {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                        </div>
                                    )}
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 transition-all focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 text-white font-medium ${!field.noIcon ? "pl-12 pr-6" : "px-6"}`}
                                        placeholder="0"
                                    />
                                    {field.noIcon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">%</div>}
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:scale-[1.02] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/40 mt-6 flex items-center justify-center gap-3 text-lg"
                        >
                            <TrendingUp className="w-6 h-6" /> Analyze Net Profitability
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-5 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 border-dashed rounded-[2rem] p-12 text-center h-full flex flex-col items-center justify-center group opacity-50 hover:opacity-100 transition-all duration-500">
                            <div className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Calculator className="w-10 h-10 text-slate-700" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-400 mb-2">Ready to Calculate?</h4>
                            <p className="text-sm text-slate-500">Enter your store's numbers to discover your true net profit.</p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-500">
                            {/* Main Result Card */}
                            <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50"></div>
                                <div className="relative z-10 text-center">
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Net Profit Per Sale</p>
                                    <h2 className={`text-6xl font-black mb-4 tracking-tighter ${results.netProfit > 0 ? "text-green-400" : "text-red-400"}`}>
                                        {formatCurr(results.netProfit)}
                                    </h2>
                                    <div className={`inline-flex px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-widest ${getStatus(results.margin).bg} ${getStatus(results.margin).color}`}>
                                        {getStatus(results.margin).text}
                                    </div>
                                </div>
                            </div>

                            {/* Stat Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Net Margin %</p>
                                    <p className="text-3xl font-black text-white">{results.margin.toFixed(1)}%</p>
                                    <p className="text-[10px] text-slate-500 mt-1">Final efficiency</p>
                                </div>
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Ad Allowance</p>
                                    <p className="text-3xl font-black text-blue-400">{formatCurr(results.breakEvenAdCost)}</p>
                                    <p className="text-[10px] text-slate-500 mt-1">Break-even CPA</p>
                                </div>
                            </div>

                            {/* Dynamic Insight (conversion psychology) */}
                            <div className="bg-blue-600/10 border border-blue-500/20 rounded-[2rem] p-8 relative overflow-hidden group hover:border-blue-500/40 transition-all">
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-900/40">
                                        <Info className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">What this means for your store:</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                                            {getInsight()}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary CTA */}
                            <Link href="/" className="flex items-center justify-between w-full p-6 bg-slate-950 border border-white/5 rounded-3xl group hover:border-white/10 transition-all font-bold text-sm">
                                <span className="text-slate-400 group-hover:text-white transition-colors">Start scaling with better data</span>
                                <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "How to calculate net profit in ecommerce?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Net Ecommerce Profit = Selling Price - (Product Cost + Shipping + Payment Fees + Ad CPA)." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
