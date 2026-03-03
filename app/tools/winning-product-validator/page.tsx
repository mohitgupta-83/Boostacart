"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign } from "lucide-react"

export default function WinningProductValidatorPage() {
    const [cost, setCost] = useState("")
    const [shipping, setShipping] = useState("")
    const [price, setPrice] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ marginPct: 0, profitPerUnit: 0 })

    const calculate = () => {
        const c = parseFloat(cost) || 0
        const s = parseFloat(shipping) || 0
        const p = parseFloat(price) || 0

        const grossMargin = p - (c + s)
        const marginPct = p > 0 ? (grossMargin / p) * 100 : 0

        setResults({ marginPct, profitPerUnit: grossMargin })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency }).format(val)

    const getStatus = (m: number) => {
        if (m < 20) return { label: "Weak - Hard to Scale", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" }
        if (m < 40) return { label: "Moderate Margins", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" }
        return { label: "Strong - Ready to Scale", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" }
    }

    return (
        <ToolLayout
            title="Winning Product Margin Validator"
            description={[
                "Before spending money testing a dropshipping or ecommerce product, validate the margins.",
                "Ensure you actually have enough gross profit to afford advertising costs."
            ]}
            ctaTitle="Want to increase your product's margin?"
            ctaDescription="Recover abandoned carts to instantly improve your profit per unit without increasing price."
        >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-white">Product Metrics</h3>
                            <div className="flex gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                                <button onClick={() => setCurrency("INR")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "INR" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "USD" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>USD</button>
                            </div>
                        </div>

                        {[
                            { label: "Product Sourcing Cost", val: cost, set: setCost },
                            { label: "Shipping Cost", val: shipping, set: setShipping },
                            { label: "Target Selling Price", val: price, set: setPrice },
                        ].map((field, i) => (
                            <div key={i}>
                                <label className="block text-sm font-medium text-slate-300 mb-1">{field.label}</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        value={field.val}
                                        onChange={(e) => field.set(e.target.value)}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:border-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>
                        ))}

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all mt-6">
                            <Calculator className="w-5 h-5" /> Validate Potential
                        </button>
                    </div>

                    <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-slate-500">
                                <Calculator className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Validate your product's underlying economics.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Gross Margin %</p>
                                    <p className="text-5xl font-bold text-white mb-2">
                                        {results.marginPct.toFixed(1)}%
                                    </p>
                                </div>
                                <div className={`p-4 rounded-xl border ${getStatus(results.marginPct).bg}`}>
                                    <p className={`font-bold text-lg ${getStatus(results.marginPct).color}`}>
                                        {getStatus(results.marginPct).label}
                                    </p>
                                </div>
                                <div className="h-px w-full bg-slate-800"></div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Gross Profit Per Unit</p>
                                    <p className="text-3xl font-bold text-blue-400">
                                        {formatCurr(results.profitPerUnit)}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">(This is your maximum budget to acquire 1 customer)</p>
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
                            "name": "What is a good gross margin for dropshipping?",
                            "acceptedAnswer": { "@type": "Answer", "text": "A gross margin above 40% is considered healthy for scaling ecommerce and dropshipping products, allowing enough overhead for advertising." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
