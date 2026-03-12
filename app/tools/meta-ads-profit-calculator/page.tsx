"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, Facebook } from "lucide-react"

export default function MetaAdsProfitCalculatorPage() {
    const [mode, setMode] = useState<"CPM" | "CPC">("CPM")
    const [cpm, setCpm] = useState("")
    const [cpc, setCpc] = useState("")
    const [ctr, setCtr] = useState("")
    const [cr, setCr] = useState("")
    const [aov, setAov] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ profit: 0, revenue: 0, conversions: 0, roas: 0 })

    const calculate = () => {
        const convRate = parseFloat(cr) || 0
        const avgOrder = parseFloat(aov) || 0
        let clicks = 0
        let cost = 0

        if (mode === "CPM") {
            const costPerM = parseFloat(cpm) || 0
            const clickRate = parseFloat(ctr) || 0
            clicks = 1000 * (clickRate / 100)
            cost = costPerM
        } else {
            const costPerClick = parseFloat(cpc) || 0
            // Model based on 100 clicks for simplicity in "per unit" thinking
            clicks = 100
            cost = clicks * costPerClick
        }

        const conversions = clicks * (convRate / 100)
        const revenue = conversions * avgOrder
        const profit = revenue - cost
        const roas = cost > 0 ? revenue / cost : 0

        setResults({ profit, revenue, conversions, roas })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency }).format(val)

    return (
        <ToolLayout
            title="Meta Ads Profit Calculator"
            description={[
                "Analyze the profitability of your Facebook & Instagram campaigns.",
                "Compare CPM-based and CPC-based models to see which targeting strategy yields higher net profit."
            ]}
            ctaTitle="Scaling Meta Ads?"
            ctaDescription="Meta's algorithms work best when you have high conversion data. Recover more sales to feed better data back to Meta."
        >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
                                <button onClick={() => setMode("CPM")} className={`text-xs px-4 py-1.5 rounded-md transition-all ${mode === "CPM" ? "bg-blue-600 text-white" : "text-white/40 hover:text-white/80"}`}>CPM Model</button>
                                <button onClick={() => setMode("CPC")} className={`text-xs px-4 py-1.5 rounded-md transition-all ${mode === "CPC" ? "bg-blue-600 text-white" : "text-white/40 hover:text-white/80"}`}>CPC Model</button>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setCurrency("INR")} className={`text-xs p-1 ${currency === "INR" ? "text-white" : "text-slate-600"}`}>INR</button>
                                <button onClick={() => setCurrency("USD")} className={`text-xs p-1 ${currency === "USD" ? "text-white" : "text-slate-600"}`}>USD</button>
                            </div>
                        </div>

                        {mode === "CPM" ? (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-1">CPM (Cost Per 1,000 Reach)</label>
                                    <input type="number" value={cpm} onChange={(e) => setCpm(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="300" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-1">CTR (%)</label>
                                    <input type="number" value={ctr} onChange={(e) => setCtr(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="1.8" />
                                </div>
                            </>
                        ) : (
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-1">Average CPC (Cost Per Click)</label>
                                <input type="number" value={cpc} onChange={(e) => setCpc(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="15" />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-1">Conversion Rate (%)</label>
                            <input type="number" value={cr} onChange={(e) => setCr(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="3.5" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-1">Average Order Value (AOV)</label>
                            <input type="number" value={aov} onChange={(e) => setAov(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:outline-none" placeholder="1800" />
                        </div>

                        <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 hover:brightness-110 border border-white/10 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-0 text-white font-semibold py-4 rounded-xl transition-all mt-6 shadow-lg shadow-blue-900/20">
                            <Facebook className="w-5 h-5" /> Calculate Meta ROI
                        </button>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
                        {!hasCalculated ? (
                            <div className="text-center text-white/40">
                                <Facebook className="w-12 h-12 mx-auto mb-4 opacity-10" />
                                <p>Perform a check to see your projected Meta Ads profitability.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-sm text-white/60 mb-1">Projected Net Profit</p>
                                    <p className={`text-5xl font-bold mb-2 ${results.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {formatCurr(results.profit)}
                                    </p>
                                    <p className="text-xs text-white/40">{mode === "CPM" ? "Based on 1,000 Impressions" : "Based on 100 Clicks"}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                        <p className="text-sm text-white/60 mb-1">ROAS</p>
                                        <p className="text-2xl font-bold text-white">{results.roas.toFixed(2)}x</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                        <p className="text-sm text-white/60 mb-1">Conversions</p>
                                        <p className="text-2xl font-bold text-white">{results.conversions.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className={`p-4 rounded-xl border ${results.profit > 0 ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}>
                                    {results.profit > 0 ? "Strong Performance ✅" : "Warning: Net Loss ❌"}
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
                            "name": "Which is better for Meta Ads: CPM or CPC model?",
                            "acceptedAnswer": { "@type": "Answer", "text": "CPM is better for scaling and awareness once your pixel is mature, while CPC helps you control costs when testing new audiences or product concepts." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
