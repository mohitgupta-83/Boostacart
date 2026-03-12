"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, ShoppingBag } from "lucide-react"

export default function OneProductProfitValidatorPage() {
    const [price, setPrice] = useState("")
    const [cost, setCost] = useState("")
    const [orders, setOrders] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ daily: 0, monthly: 0 })

    const calculate = () => {
        const p = parseFloat(price) || 0
        const c = parseFloat(cost) || 0
        const o = parseFloat(orders) || 0

        const daily = (p - c) * o
        const monthly = daily * 30

        setResults({ daily, monthly })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(val)

    return (
        <ToolLayout
            title="One-Product Store Profit Validator"
            description={[
                "Validate the scalability of your one-product store model.",
                "See the impact of daily order volume on your monthly bottom line."
            ]}
            ctaTitle="Ready to scale your store?"
            ctaDescription="High-volume one-product stores are the most vulnerable to cart abandonment. Protect your growth."
        >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-white">Daily Operations</h3>
                            <div className="flex gap-2">
                                <button onClick={() => setCurrency("INR")} className={`text-xs p-1 ${currency === "INR" ? "text-white" : "text-slate-600"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs p-1 ${currency === "USD" ? "text-white" : "text-slate-600"}`}>USD</button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-1">Product Price</label>
                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="1999" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-1">Total Cost per order (Product + Ads + Ship)</label>
                            <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="1200" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-1">Projected Daily Orders</label>
                            <input type="number" value={orders} onChange={(e) => setOrders(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="50" />
                        </div>

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 hover:brightness-110 border border-white/10 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-0 text-white font-semibold py-4 rounded-xl transition-all mt-6 shadow-lg shadow-blue-900/20">
                            <ShoppingBag className="w-5 h-5" /> Validate Scalability
                        </button>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-white/40">
                                <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-10" />
                                <p>Project your earnings for a high-volume one-product store.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-sm text-white/60 mb-1">Estimated Daily Profit</p>
                                    <p className={`text-4xl font-bold text-green-400 mb-2`}>
                                        {formatCurr(results.daily)}
                                    </p>
                                </div>
                                <div className="h-px w-full bg-slate-800"></div>
                                <div>
                                    <p className="text-sm text-white/60 mb-1">Estimated Monthly Profit</p>
                                    <p className="text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                        {formatCurr(results.monthly)}
                                    </p>
                                </div>
                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mt-6 text-left">
                                    <p className="text-xs text-blue-300 leading-relaxed font-medium">
                                        <strong className="text-blue-200">Scalability Note:</strong> High daily order volumes require robust support and recovery systems. At {orders} orders/day, even a 5% recovery rate improvement can add {formatCurr(results.daily * 0.05 * 30)} to your monthly profit.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "How is daily profit calculated for a one-product store?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Daily profit is (Product Price - Total Cost Per Order) multiplied by the number of daily orders." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
