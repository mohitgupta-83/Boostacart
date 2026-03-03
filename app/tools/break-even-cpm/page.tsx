"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, Activity } from "lucide-react"

export default function BreakEvenCpmCalculatorPage() {
    const [aov, setAov] = useState("")
    const [cr, setCr] = useState("")
    const [cost, setCost] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ maxCpa: 0, breakEvenCpm: 0 })

    const calculate = () => {
        const avgOrder = parseFloat(aov) || 0
        const convRate = parseFloat(cr) || 0
        const prodCost = parseFloat(cost) || 0

        const maxCpa = avgOrder - prodCost
        const breakEvenCpm = (maxCpa * (convRate / 100)) * 1000

        setResults({ maxCpa, breakEvenCpm })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency }).format(val)

    return (
        <ToolLayout
            title="Dropshipping Break-Even CPM Calculator"
            description={[
                "Know exactly what CPM you can afford on Facebook, TikTok, or Google Ads.",
                "If your current CPM is higher than the break-even value calculated here, your product economics will not allow for profitability at your current conversion rate."
            ]}
            ctaTitle="CPM too high?"
            ctaDescription="You can't control ad costs, but you can control your conversion. Recover abandoned carts to move your break-even point in your favor."
        >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-white">Input Economics</h3>
                            <div className="flex gap-2">
                                <button onClick={() => setCurrency("INR")} className={`text-xs p-1 ${currency === "INR" ? "text-white" : "text-slate-600"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs p-1 ${currency === "USD" ? "text-white" : "text-slate-600"}`}>USD</button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Average Order Value (AOV)</label>
                            <input type="number" value={aov} onChange={(e) => setAov(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="2000" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Conversion Rate (%)</label>
                            <input type="number" value={cr} onChange={(e) => setCr(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="2.5" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Product Sourcing + Shipping Cost</label>
                            <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="800" />
                        </div>

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all mt-6 shadow-lg shadow-blue-900/20">
                            <Activity className="w-5 h-5" /> Calculate Max CPM
                        </button>
                    </div>

                    <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-slate-500">
                                <Activity className="w-12 h-12 mx-auto mb-4 opacity-10" />
                                <p>Determine the maximum ad cost your product can withstand.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Break-Even CPM</p>
                                    <p className="text-5xl font-bold text-white mb-2">
                                        {formatCurr(results.breakEvenCpm)}
                                    </p>
                                    <p className="text-xs text-slate-500">Maximum budget per 1,000 impressions</p>
                                </div>
                                <div className="h-px w-full bg-slate-800"></div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Max CPA (Allowance)</p>
                                    <p className="text-3xl font-bold text-blue-400">
                                        {formatCurr(results.maxCpa)}
                                    </p>
                                    <p className="text-xs text-slate-500">Max you can pay to get one sales</p>
                                </div>
                                {results.breakEvenCpm < 100 && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-400">
                                        Warning: Your Break-even CPM is very low. This product might be difficult to market profitably on modern platforms.
                                    </div>
                                )}
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
                            "name": "Why is Break-even CPM important?",
                            "acceptedAnswer": { "@type": "Answer", "text": "It helps you understand if you can afford to advertise on a platform. If your Break-even CPM is $5 but Facebook costs $15, you will lose money on every impression." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
