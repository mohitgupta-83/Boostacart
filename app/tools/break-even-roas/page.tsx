"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, ArrowRight, TrendingUp, Zap, Info, Percent } from "lucide-react"
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
        marginPercent: 0,
        grossProfit: 0
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
            profitMarginText: new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency: currency, maximumFractionDigits: 0 }).format(gross_profit),
            marginPercent: Number(margin_percent.toFixed(1)),
            grossProfit: gross_profit
        })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(val)

    return (
        <ToolLayout
            title="Break-Even ROAS Calculator"
            icon={TrendingUp}
            description={[
                "Determine the minimum return you need to stay profitable.",
                "Calculate your ceiling for ad spend based on COGS, shipping, and gateway fees."
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
                            { label: "Selling Price", state: price, set: setPrice, help: "Gross price before discounts" },
                            { label: "Product Cost (COGS)", state: cost, set: setCost, help: "Your landing cost" },
                            { label: "Shipping Cost", state: shipping, set: setShipping, help: "Average per-order fulfillment" },
                            { label: "Gateway Fees (%)", state: fees, set: setFees, help: "e.g. 2.5%", noIcon: true },
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
                                    {field.noIcon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold px-4"> % </div>}
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={handleCalculate}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/40 mt-6 flex items-center justify-center gap-3 text-lg"
                        >
                            <Calculator className="w-6 h-6" /> Calculate Threshold
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-5 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 border-dashed rounded-[2rem] p-12 text-center h-full flex flex-col items-center justify-center group opacity-50 hover:opacity-100 transition-all duration-500">
                            <div className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-10 h-10 text-slate-700" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-400 mb-2">Define Your Ceiling</h4>
                            <p className="text-sm text-slate-500">Enter your numbers to find the minimum ROAS your ads must hit.</p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-500">
                            {/* Main Result Card */}
                            <div className="bg-slate-950/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden group backdrop-blur-xl">
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_right_top,rgba(59,130,246,0.1),transparent_50%)]"></div>
                                <div className="relative z-10 text-center">
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Minimum Break-Even ROAS</p>
                                    <h2 className={`text-6xl font-black mb-4 tracking-tighter ${results.grossProfit > 0 ? 'text-white' : 'text-red-400'}`}>
                                        {results.breakEvenRoas}x
                                    </h2>
                                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-widest ${results.grossProfit > 0 ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                                        {results.grossProfit > 0 ? "Profitable Margin ✅" : "Unprofitable Margin ❌"}
                                    </div>
                                </div>
                            </div>

                            {/* Stat Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Gross Margin %</p>
                                    <p className="text-2xl font-black text-white">{results.marginPercent}%</p>
                                </div>
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Max Ad Spend</p>
                                    <p className="text-2xl font-black text-blue-400">{results.profitMarginText}</p>
                                    <p className="text-[10px] text-slate-500">per order</p>
                                </div>
                            </div>

                            {/* Dynamic Insight Card */}
                            <div className="bg-blue-600/10 border border-blue-500/20 rounded-[2rem] p-8 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-900/40 group-hover:scale-110 transition-transform">
                                        <Info className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Pro Scaling Tip:</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                                            {results.grossProfit <= 0
                                                ? "Current economics are fundamentally broken. You cannot scale out of this. Find ways to reduce COGS or increase pricing before running ads."
                                                : `To scale effectively, aim for a 20% buffer above your ${results.breakEvenRoas}x ROAS. Capture abandoned carts to essentially 'lower' your effective break-even point.`
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <Link href="/" className="group flex items-center justify-between p-6 bg-slate-950/50 border border-white/5 rounded-3xl hover:border-white/10 transition-all">
                                <span className="text-slate-500 group-hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                    Boost your net margins <ArrowRight className="w-4 h-4 text-blue-500" />
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Structured Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "How is Break-Even ROAS calculated?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Break-Even ROAS = Selling Price / (Selling Price - Total Variable Costs). It tells you the exact multiple of ad spend you need to hit to reach zero net profit." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
