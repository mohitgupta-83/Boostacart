"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign } from "lucide-react"

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

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency }).format(val)

    const getStatus = (m: number) => {
        if (m < 0) return { text: "Negative", color: "text-red-400 border-red-400" }
        if (m < 20) return { text: "Low", color: "text-orange-400 border-orange-400" }
        return { text: "Healthy", color: "text-green-400 border-green-400" }
    }

    return (
        <ToolLayout
            title="Ecommerce Profit Margin Calculator"
            description={[
                "Accurately calculate your true profit margin by factoring in product costs, shipping, payment gateway fees, and advertising costs.",
                "Knowing your exact margin allows you to scale confidently without burning cash."
            ]}
            ctaTitle="Want to increase margins?"
            ctaDescription="Recover abandoned carts to increase margin without increasing your ad spend."
        >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-white">Metrics</h3>
                            <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
                                <button onClick={() => setCurrency("INR")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "INR" ? "bg-slate-800 text-white" : "text-white/40 hover:text-white/80"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "USD" ? "bg-slate-800 text-white" : "text-white/40 hover:text-white/80"}`}>USD</button>
                            </div>
                        </div>

                        {[
                            { label: "Selling Price", val: price, set: setPrice, icon: true },
                            { label: "Product Cost", val: cost, set: setCost, icon: true },
                            { label: "Shipping Cost", val: shipping, set: setShipping, icon: true },
                            { label: "Payment Gateway Fee (%)", val: feePct, set: setFeePct, icon: false },
                            { label: "Ad Cost Per Purchase (CPA)", val: adCost, set: setAdCost, icon: true },
                        ].map((field, i) => (
                            <div key={i}>
                                <label className="block text-sm font-medium text-white/80 mb-1">{field.label}</label>
                                <div className="relative">
                                    {field.icon && (
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                                            {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                        </div>
                                    )}
                                    <input
                                        type="number"
                                        value={field.val}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-white/5 border border-white/10 rounded-xl py-3 text-white focus:border-blue-500 focus:outline-none ${field.icon ? 'pl-10 pr-4' : 'px-4'}`}
                                    />
                                </div>
                            </div>
                        ))}

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 hover:brightness-110 border border-white/10 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-0 text-white font-semibold py-4 rounded-xl transition-all mt-6">
                            <Calculator className="w-5 h-5" /> Calculate Margin
                        </button>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-white/40">
                                <Calculator className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Enter your economics to see your true profit margin.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-sm text-white/60 mb-1">Net Profit per Unit</p>
                                    <p className={`text-4xl font-bold ${results.netProfit >= 0 ? "text-green-400" : "text-red-400"}`}>
                                        {formatCurr(results.netProfit)}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                        <p className="text-sm text-white/60 mb-1">Profit Margin</p>
                                        <p className="text-2xl font-bold text-white">{results.margin.toFixed(2)}%</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-center items-center">
                                        <p className="text-sm text-white/60 mb-1">Status</p>
                                        <div className={`mt-1 inline-block px-3 py-1 rounded-full border text-sm font-semibold ${getStatus(results.margin).color}`}>
                                            {getStatus(results.margin).text}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mt-6">
                                    <p className="text-sm text-blue-400 mb-2">Break-even Ad Cost (Max CPA)</p>
                                    <p className="text-3xl font-bold text-blue-300 mb-2">{formatCurr(results.breakEvenAdCost)}</p>
                                    <p className="text-xs text-blue-400/70">If your Cost Per Purchase exceeds this amount, you lose money on every sale.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "How to calculate ecommerce profit margin?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Subtract product cost, shipping, payment gateway fees, and advertising costs from your selling price." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
