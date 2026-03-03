"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, Store } from "lucide-react"

export default function StoreProfitValidatorPage() {
    const [revenue, setRevenue] = useState("")
    const [cogsPct, setCogsPct] = useState("")
    const [adSpend, setAdSpend] = useState("")
    const [fixedCosts, setFixedCosts] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ netProfit: 0, margin: 0 })

    const calculate = () => {
        const r = parseFloat(revenue) || 0
        const cPct = parseFloat(cogsPct) || 0
        const ads = parseFloat(adSpend) || 0
        const fixed = parseFloat(fixedCosts) || 0

        const cogs = r * (cPct / 100)
        const netProfit = r - cogs - ads - fixed
        const margin = r > 0 ? (netProfit / r) * 100 : 0

        setResults({ netProfit, margin })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(val)

    const getHealth = (m: number) => {
        if (m < 0) return { label: "Danger - Losing Money", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" }
        if (m < 15) return { label: "Moderate Health", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" }
        return { label: "Excellent - High Profitability", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" }
    }

    return (
        <ToolLayout
            title="Store Profit Validator (Full Store)"
            description={[
                "Analyze the overall financial health of your entire ecommerce store.",
                "See your true net profit and margin after accounting for COGS, advertising, and fixed overhead costs like software and salaries."
            ]}
            ctaTitle="Want to increase your store's net margin?"
            ctaDescription="The most efficient way to grow net profit is to increase the value of existing traffic. Recover abandoned carts without spending an extra dime on ads."
        >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-white">Monthly Store Data</h3>
                            <div className="flex gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                                <button onClick={() => setCurrency("INR")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "INR" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "USD" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>USD</button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Monthly Total Revenue</label>
                            <input type="number" value={revenue} onChange={(e) => setRevenue(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="10,00,000" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Product Cost (COGS) %</label>
                            <input type="number" value={cogsPct} onChange={(e) => setCogsPct(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="35" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Total Monthly Ad Spend</label>
                            <input type="number" value={adSpend} onChange={(e) => setAdSpend(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="2,00,000" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Fixed Costs (Staff, Software, etc.)</label>
                            <input type="number" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="1,00,000" />
                        </div>

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-0 text-white font-semibold py-4 rounded-xl transition-all mt-6 shadow-lg shadow-blue-900/20">
                            <Store className="w-5 h-5" /> Analyze Store Health
                        </button>
                    </div>

                    <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-slate-500">
                                <Store className="w-12 h-12 mx-auto mb-4 opacity-10" />
                                <p>Perform a full financial health check for your ecommerce business.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Total Monthly Net Profit</p>
                                    <p className={`text-4xl font-bold mb-2 ${results.netProfit >= 0 ? "text-green-400" : "text-red-400"}`}>
                                        {formatCurr(results.netProfit)}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                                        <p className="text-sm text-slate-400 mb-1">Net Margin</p>
                                        <p className="text-2xl font-bold text-white">{results.margin.toFixed(1)}%</p>
                                    </div>
                                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-center">
                                        <p className="text-sm text-slate-400 mb-1">COGS Impact</p>
                                        <p className="text-xl font-bold text-slate-300">{formatCurr(parseFloat(revenue) * (parseFloat(cogsPct) / 100))}</p>
                                    </div>
                                </div>
                                <div className={`p-4 rounded-xl border ${getHealth(results.margin).bg}`}>
                                    <p className={`font-bold text-lg ${getHealth(results.margin).color}`}>
                                        {getHealth(results.margin).label}
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
                            "name": "What is a healthy net margin for an ecommerce store?",
                            "acceptedAnswer": { "@type": "Answer", "text": "A healthy net margin for most ecommerce stores is between 15% and 25%. Stores below 10% are often at risk from rising ad costs." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
