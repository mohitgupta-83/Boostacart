"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { Calculator, IndianRupee, DollarSign, TrendingUp, Sparkles, Zap, ArrowRight, Activity, LineChart } from "lucide-react"
import Link from "next/link"

export default function AdsScalingSimulatorPage() {
    const [budget, setBudget] = useState("")
    const [roas, setRoas] = useState("")
    const [scalePct, setScalePct] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ newBudget: 0, monthlyRevenue: 0, monthlySpend: 0, monthlyProfit: 0 })

    const calculate = () => {
        const b = parseFloat(budget) || 0
        const r = parseFloat(roas) || 0
        const s = parseFloat(scalePct) || 0

        const newDailyBudget = b * (1 + (s / 100))
        const projectedDailyRevenue = newDailyBudget * r
        const projectedMonthlyRevenue = projectedDailyRevenue * 30
        const projectedMonthlySpend = newDailyBudget * 30
        const projectedMonthlyProfit = projectedMonthlyRevenue - projectedMonthlySpend

        setResults({
            newBudget: newDailyBudget,
            monthlyRevenue: projectedMonthlyRevenue,
            monthlySpend: projectedMonthlySpend,
            monthlyProfit: projectedMonthlyProfit
        })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(val)

    const getInsight = () => {
        const s = parseFloat(scalePct) || 0
        if (s > 100) {
            return `Aggressive scale of ${s}% detected. Be aware that scaling over 20% in 24h as per Meta/Google algorithms often triggers 'Learning Phase', which typically causes a temporary ROAS crash. We recommend a slow scale of 15% every 48h while ensuring high-intent visitors are captured early to offset ad efficiency loss.`
        }
        if (parseFloat(roas) < 2) {
            return "Your current ROAS is below 2.0x. Scaling an unprofitable or barely break-even campaign will only compound your losses. Focus on increasing your conversion rate by recovering abandoned carts first before increasing ad budget."
        }
        return `Healthy scaling projected. At this volume, your monthly ad spend will reach ${formatCurr(results.monthlySpend)}. Implementing automated WhatsApp recovery will ensure your CPA stays stable even when you hit audience saturation.`
    }

    return (
        <ToolLayout
            title="Ad Scaling Budget Simulator"
            icon={TrendingUp}
            description={[
                "Simulate your revenue growth when scaling ad budgets.",
                "See projected monthly returns and ad spend before you allocate more capital."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full opacity-50"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Zap className="w-5 h-5 text-orange-400" /> Current Stats
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button
                                    key={curr}
                                    onClick={() => setCurrency(curr as any)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all animate-in fade-in duration-300 ${currency === curr ? "bg-orange-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                                >
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {[
                            { label: "Daily Ad Spend", state: budget, set: setBudget, help: "Current daily ad budget on platform" },
                            { label: "Current ROAS", state: roas, set: setRoas, help: "Return on Ad Spend (e.g. 2.5x)", noIcon: true, endIcon: "x" },
                            { label: "Scaling Growth (%)", state: scalePct, set: setScalePct, help: "Target percentage to increase budget", noIcon: true, endIcon: "%" },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-bold text-slate-300 tracking-tight">{field.label}</label>
                                    <span className="text-[10px] text-slate-500 uppercase font-black opacity-0 group-hover/field:opacity-100 transition-opacity tracking-widest">{field.help}</span>
                                </div>
                                <div className="relative">
                                    {!field.noIcon && (
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within/field:text-orange-400 transition-colors">
                                            {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                        </div>
                                    )}
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className={`w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 transition-all focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500/50 text-white font-medium ${!field.noIcon ? "pl-12 pr-6" : "px-6"}`}
                                        placeholder="0"
                                    />
                                    {field.endIcon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold px-2">{field.endIcon}</div>}
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:scale-[1.02] hover:brightness-110 active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-orange-900/40 mt-6 flex items-center justify-center gap-3 text-lg"
                        >
                            <LineChart className="w-6 h-6" /> Simulate Monthly Scale
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-6 space-y-6">
                    {!hasCalculated ? (
                        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 border-dashed rounded-[2.5rem] p-12 text-center h-[520px] flex flex-col items-center justify-center group opacity-50 hover:opacity-100 transition-all duration-700">
                            <div className="w-24 h-24 rounded-full bg-slate-950 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                                <TrendingUp className="w-12 h-12 text-slate-800" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-400 mb-2">Simulate Growth</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto italic font-light">
                                "Scaling is the ultimate test of unit economics. Ensure yours are bulletproof."
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            {/* Monthly Projection High Level */}
                            <div className="bg-[#0f172a] border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                                <div className="relative z-10 grid gap-6 text-center">
                                    <div>
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Projected Monthly Revenue</p>
                                        <h2 className="text-7xl font-black text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.25)] tracking-tighter">
                                            {formatCurr(results.monthlyRevenue)}
                                        </h2>
                                    </div>
                                    <div className="h-px w-32 bg-slate-800 mx-auto opacity-50"></div>
                                    <div className="grid grid-cols-2 gap-8 text-center">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">New Monthly Ad Spend</p>
                                            <p className="text-xl font-bold text-white opacity-80">{formatCurr(results.monthlySpend)}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Projected Monthly P&L</p>
                                            <p className={`text-xl font-bold ${results.monthlyProfit > 0 ? 'text-green-500' : 'text-red-500'}`}>{formatCurr(results.monthlyProfit)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stat Card Row */}
                            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 flex items-center justify-between group hover:border-orange-500/20 transition-all duration-500">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                                        <Activity className="w-3 h-3 text-orange-400" /> New Daily Budget Target
                                    </p>
                                    <p className="text-3xl font-black text-white">{formatCurr(results.newBudget)}</p>
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                                    <TrendingUp className="w-6 h-6 text-orange-400 opacity-60" />
                                </div>
                            </div>

                            {/* Scale Insight Design */}
                            <div className="bg-orange-600/10 border border-orange-500/20 rounded-[2.5rem] p-8 flex items-start gap-6 relative group overflow-hidden hover:border-orange-500/40 transition-all duration-300">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(249,115,22,0.05),transparent_60%)]"></div>
                                <div className="relative z-10">
                                    <div className="p-4 bg-orange-600 rounded-2xl shadow-xl shadow-orange-900/40 mb-4 inline-flex items-center justify-center">
                                        <Info className="w-6 h-6 text-white" />
                                    </div>
                                    <h5 className="text-lg font-bold text-white mb-2">Scale Risk Assessment:</h5>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                                        {getInsight()}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Home/Strategy Link */}
                            <Link href="/" className="group flex items-center justify-between p-6 bg-slate-950/50 border border-white/5 rounded-3xl hover:border-white/10 transition-all">
                                <span className="text-slate-500 group-hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                    Protect your profit while scaling <ArrowRight className="w-4 h-4 text-orange-500" />
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* SEO STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "How is ad scaling projected?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Ad scaling is projected by increasing the daily budget by a percentage, then applying the existing ROAS to estimate projected revenue and profit." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
