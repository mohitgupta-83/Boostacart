"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign } from "lucide-react"

export default function CpaAnalyzerPage() {
    const [adSpend, setAdSpend] = useState("")
    const [purchases, setPurchases] = useState("")
    const [aov, setAov] = useState("")
    const [cost, setCost] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ cpa: 0, netProfit: 0 })

    const calculate = () => {
        const spend = parseFloat(adSpend) || 0
        const p = parseFloat(purchases) || 0
        const a = parseFloat(aov) || 0
        const c = parseFloat(cost) || 0

        const cpa = p > 0 ? spend / p : 0
        const revenue = p * a
        const grossProfit = revenue - (p * c)
        const netProfit = grossProfit - spend

        setResults({ cpa, netProfit })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency }).format(val)

    return (
        <ToolLayout
            title="Cost Per Acquisition (CPA) Analyzer"
            description={[
                "Understand the true cost of acquiring a customer with your ads.",
                "Calculate your CPA and see if your current marketing strategy is actually profitable after product costs."
            ]}
            ctaTitle="Is your CPA too high?"
            ctaDescription="Improve CPA by recovering high-intent visitors before checkout."
        >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-white">Campaign Metrics</h3>
                            <div className="flex gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                                <button onClick={() => setCurrency("INR")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "INR" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "USD" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>USD</button>
                            </div>
                        </div>

                        {[
                            { label: "Total Ad Spend", val: adSpend, set: setAdSpend, icon: true },
                            { label: "Total Purchases", val: purchases, set: setPurchases, icon: false },
                            { label: "Average Order Value (AOV)", val: aov, set: setAov, icon: true },
                            { label: "Product Cost per unit", val: cost, set: setCost, icon: true },
                        ].map((field, i) => (
                            <div key={i}>
                                <label className="block text-sm font-medium text-slate-300 mb-1">{field.label}</label>
                                <div className="relative">
                                    {field.icon && (
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                            {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                        </div>
                                    )}
                                    <input
                                        type="number"
                                        value={field.val}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-slate-950 border border-slate-800 rounded-xl py-3 text-white focus:border-blue-500 focus:outline-none ${field.icon ? 'pl-10 pr-4' : 'px-4'}`}
                                    />
                                </div>
                            </div>
                        ))}

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all mt-6">
                            <Calculator className="w-5 h-5" /> Analyze CPA
                        </button>
                    </div>

                    <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-slate-500">
                                <Calculator className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Enter your ad metrics to analyze your true CPA.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Your Actual CPA</p>
                                    <p className="text-5xl font-bold text-white mb-2">
                                        {formatCurr(results.cpa)}
                                    </p>
                                </div>
                                <div className="h-px w-full bg-slate-800"></div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Total Net Profit</p>
                                    <p className={`text-3xl font-bold ${results.netProfit >= 0 ? "text-green-400" : "text-red-400"}`}>
                                        {formatCurr(results.netProfit)}
                                    </p>
                                </div>
                                <div className={`inline-block px-4 py-2 rounded-full border border-opacity-30 font-semibold ${results.netProfit >= 0 ? 'bg-green-500/10 text-green-400 border-green-500' : 'bg-red-500/10 text-red-400 border-red-500'}`}>
                                    {results.netProfit >= 0 ? "Profitable Campaign ✅" : "Losing Campaign ❌"}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* FAQ Schema hidden visually */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "How is CPA calculated in ecommerce?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Cost Per Acquisition (CPA) is calculated by dividing your total advertising spend by the total number of purchases." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
