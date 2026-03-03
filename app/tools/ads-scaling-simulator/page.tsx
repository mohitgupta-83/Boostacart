"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, TrendingUp } from "lucide-react"

export default function AdsScalingSimulatorPage() {
    const [budget, setBudget] = useState("")
    const [roas, setRoas] = useState("")
    const [scalePct, setScalePct] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ newBudget: 0, monthlyRevenue: 0 })

    const calculate = () => {
        const b = parseFloat(budget) || 0
        const r = parseFloat(roas) || 0
        const s = parseFloat(scalePct) || 0

        const newDailyBudget = b * (1 + (s / 100))
        const projectedDailyRevenue = newDailyBudget * r
        const projectedMonthlyRevenue = projectedDailyRevenue * 30

        setResults({ newBudget: newDailyBudget, monthlyRevenue: projectedMonthlyRevenue })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(val)

    return (
        <ToolLayout
            title="Ad Scaling Budget Simulator"
            description={[
                "Simulate your revenue growth when scaling ad budgets.",
                "See projected monthly returns before physically allocating more capital into your campaigns."
            ]}
            ctaTitle="Scared of ROAS dropping when scaling?"
            ctaDescription="Increase revenue without scaling your budget. Recover abandoned carts instead of paying for more traffic."
        >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-white">Current Metrics</h3>
                            <div className="flex gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                                <button onClick={() => setCurrency("INR")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "INR" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs px-3 py-1 rounded-md transition-all ${currency === "USD" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"}`}>USD</button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Current Daily Budget</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                    {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                </div>
                                <input
                                    type="number"
                                    value={budget}
                                    placeholder="5000"
                                    onChange={(e) => setBudget(e.target.value)}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Current ROAS (Multiplier)</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={roas}
                                    step="0.1"
                                    placeholder="2.5"
                                    onChange={(e) => setRoas(e.target.value)}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">x</div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Scaling Percentage (%)</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={scalePct}
                                    placeholder="30"
                                    onChange={(e) => setScalePct(e.target.value)}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">%</div>
                            </div>
                        </div>

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all mt-6">
                            <TrendingUp className="w-5 h-5" /> Simulate Scale
                        </button>
                    </div>

                    <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-slate-500">
                                <Calculator className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Enter your daily budget and target scale (%) to map revenue volume.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">New Projected Daily Budget</p>
                                    <p className="text-3xl font-bold text-white mb-2">
                                        {formatCurr(results.newBudget)}
                                    </p>
                                </div>
                                <div className="h-px w-full bg-slate-800"></div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Projected Monthly Revenue</p>
                                    <p className="text-5xl font-bold text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                                        {formatCurr(results.monthlyRevenue)}
                                    </p>
                                </div>
                                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mt-4">
                                    <p className="text-xs text-orange-400/80">
                                        <strong>Risk Note:</strong> Scaling budget almost always reduces ROAS due to audience saturation. Be prepared for declining margins as you scale.
                                    </p>
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
                            "name": "How does scaling affect ROAS?",
                            "acceptedAnswer": { "@type": "Answer", "text": "As you allocate more ad budget to scale campaigns, ROAS typically decreases because you begin reaching broader, less targeted audiences and increase cost-per-click." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
