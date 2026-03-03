"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign } from "lucide-react"

export default function TiktokProfitCalculatorPage() {
    const [cpm, setCpm] = useState("")
    const [ctr, setCtr] = useState("")
    const [cr, setCr] = useState("")
    const [aov, setAov] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ profit: 0, revenue: 0, conversions: 0 })

    const calculate = () => {
        const costPerM = parseFloat(cpm) || 0
        const clickRate = parseFloat(ctr) || 0
        const convRate = parseFloat(cr) || 0
        const avgOrder = parseFloat(aov) || 0

        const clicks = 1000 * (clickRate / 100)
        const conversions = clicks * (convRate / 100)
        const revenue = conversions * avgOrder
        const profit = revenue - costPerM

        setResults({ profit, revenue, conversions })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency }).format(val)

    return (
        <ToolLayout
            title="TikTok Ads Profit Calculator"
            description={[
                "Model the profitability of TikTok Ad campaigns based on your impressions, CTR, and Conversion rate.",
                "Find out exactly how much you earn per 1,000 TikTok impressions."
            ]}
            ctaTitle="Is TikTok traffic abandoning checkout?"
            ctaDescription="TikTok traffic is high-intent but often bounces easily. Capture more of them seamlessly."
        >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-white">Campaign Metrics (Per 1k Impressions)</h3>
                            <div className="flex gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                                <button onClick={() => setCurrency("INR")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "INR" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "USD" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>USD</button>
                            </div>
                        </div>

                        {[
                            { label: "CPM (Cost Per 1,000 Impressions)", val: cpm, set: setCpm, cur: true, pct: false },
                            { label: "Click-Through Rate (CTR %)", val: ctr, set: setCtr, cur: false, pct: true },
                            { label: "Conversion Rate (CR %)", val: cr, set: setCr, cur: false, pct: true },
                            { label: "Average Order Value (AOV)", val: aov, set: setAov, cur: true, pct: false },
                        ].map((field, i) => (
                            <div key={i}>
                                <label className="block text-sm font-medium text-slate-300 mb-1">{field.label}</label>
                                <div className="relative">
                                    {field.cur && (
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                            {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                        </div>
                                    )}
                                    <input
                                        type="number"
                                        value={field.val}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-slate-950 border border-slate-800 rounded-xl py-3 text-white focus:border-blue-500 focus:outline-none ${field.cur ? 'pl-10 pr-4' : 'px-4'}`}
                                    />
                                    {field.pct && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">%</div>}
                                </div>
                            </div>
                        ))}

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all mt-6">
                            <Calculator className="w-5 h-5" /> Calculate Profitability
                        </button>
                    </div>

                    <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-slate-500">
                                <Calculator className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Calculate your ad profit margins on TikTok.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Est. Profit (per 1,000 Impressions)</p>
                                    <p className={`text-4xl font-bold mb-2 ${results.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {formatCurr(results.profit)}
                                    </p>
                                </div>
                                <div className={`inline-block px-4 py-2 rounded-full border border-opacity-30 font-semibold ${results.profit > 0 ? 'bg-green-500/10 text-green-400 border-green-500' : 'bg-red-500/10 text-red-400 border-red-500'}`}>
                                    {results.profit > 0 ? "Profitable ✅" : "Losing Money ❌"}
                                </div>
                                <div className="h-px w-full bg-slate-800"></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Gross Revenue</p>
                                        <p className="text-2xl font-bold text-white">{formatCurr(results.revenue)}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Purchases</p>
                                        <p className="text-2xl font-bold text-white">{results.conversions.toFixed(2)}</p>
                                    </div>
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
                            "name": "How is TikTok Ad profitability calculated?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Profitability is calculated by applying CTR to Impressions to get Clicks, then applying Conversion Rate to Clicks to get Purchases, multiplying Purchases by AOV for Revenue, and subtracting CPM." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
