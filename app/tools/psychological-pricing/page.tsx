"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, Tag } from "lucide-react"

export default function PsychologicalPricingPage() {
    const [cost, setCost] = useState("")
    const [margin, setMargin] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [tiers, setTiers] = useState<any[]>([])

    const calculate = () => {
        const c = parseFloat(cost) || 0
        const m = parseFloat(margin) || 0
        const targetPrice = c / (1 - (m / 100))

        const results = [
            generateTier(targetPrice, 49),
            generateTier(targetPrice, 99),
            generateTier(targetPrice, 499),
            generateTier(targetPrice, 999),
        ].sort((a, b) => a.price - b.price).filter(t => t.price > c)

        setTiers(results)
        setHasCalculated(true)
    }

    const generateTier = (base: number, ending: number) => {
        // Find nearest price ending in 'ending'
        const baseRound = Math.floor(base / 1000) * 1000
        let p = baseRound + ending
        if (p < base * 0.8) p += 1000 // avoid too low
        const profit = p - parseFloat(cost)
        const marginPct = (profit / p) * 100
        return { price: p, profit, marginPct, ending }
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(val)

    return (
        <ToolLayout
            title="Psychological Pricing Calculator"
            description={[
                "Discover high-converting price points for your products.",
                "Using 'Charm Pricing' (like endings in 99 or 499) has been proven to increase conversion rates by making prices appear significantly lower."
            ]}
            ctaTitle="Boost Conversions Further"
            ctaDescription="Psychological pricing gets them to Add to Cart. BoostACart gets them to complete the purchase."
        >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-white">Target Metrics</h3>
                            <div className="flex gap-2">
                                <button onClick={() => setCurrency("INR")} className={`text-xs p-1 ${currency === "INR" ? "text-white" : "text-slate-600"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs p-1 ${currency === "USD" ? "text-white" : "text-slate-600"}`}>USD</button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Product Sourcing Cost</label>
                            <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="400" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Desired Profit Margin (%)</label>
                            <input type="number" value={margin} onChange={(e) => setMargin(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="60" />
                        </div>

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all mt-6 shadow-lg shadow-blue-900/20">
                            <Tag className="w-5 h-5" /> Generate Price Tiers
                        </button>
                    </div>

                    <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-slate-500">
                                <Tag className="w-12 h-12 mx-auto mb-4 opacity-10" />
                                <p>Enter your cost and target margin to see suggested price points.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <p className="text-sm font-semibold text-slate-300 mb-2">Recommended Pricing Tiers:</p>
                                {tiers.map((t, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-colors group">
                                        <div>
                                            <p className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{formatCurr(t.price)}</p>
                                            <p className="text-xs text-slate-500">Ending in {t.ending}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-green-400">+{t.marginPct.toFixed(1)}% Margin</p>
                                            <p className="text-xs text-slate-500">Profit: {formatCurr(t.profit)}</p>
                                        </div>
                                    </div>
                                ))}
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
                            "name": "What is psychological pricing in ecommerce?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Psychological pricing is a strategy where vendors use prices that have a psychological impact, such as ending a price in .99 or .49 to make it seem lower than it actually is." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
