"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { LayoutDashboard, IndianRupee, DollarSign, TrendingUp, Sparkles, Zap, ArrowRight, Activity, Percent, MousePointer2 } from "lucide-react"
import Link from "next/link"

export default function StoreProfitValidatorPage() {
    const [revenue, setRevenue] = useState("")
    const [adSpend, setAdSpend] = useState("")
    const [cogs, setCogs] = useState("")
    const [teamCost, setTeamCost] = useState("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)
    const [results, setResults] = useState({ grossProfit: 0, netProfit: 0, margin: 0, efficiency: 0 })

    const calculate = () => {
        const rev = parseFloat(revenue) || 0
        const ads = parseFloat(adSpend) || 0
        const cost = parseFloat(cogs) || 0
        const team = parseFloat(teamCost) || 0

        const grossProfit = rev - cost
        const netProfit = rev - ads - cost - team
        const margin = rev > 0 ? (netProfit / rev) * 100 : 0
        const efficiency = rev > 0 ? (ads / rev) * 100 : 0

        setResults({ grossProfit, netProfit, margin, efficiency })
        setHasCalculated(true)
    }

    const formatCurr = (val: number) => new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(val)

    const getInsight = () => {
        if (results.margin < 5) return "Survival Warning: Your store is running on fumes. At a 5% margin, one bad day of ad spend can wipe out your entire month's profit. You are essentially working for the ad platforms. Implement high-efficiency retention like WhatsApp recovery to boost profit without increasing spend."
        if (results.margin < 15) return "Growth Plateau: You have a healthy store, but you're not 'scaling' fast enough. Your ad efficiency is eating your potential. Focus on cross-selling and lead capture at the cart stage to increase your backend LTV."
        return "Profit Machine: Your store economics are elite. 15%+ net margins mean you can afford to out-spend your competition and scale aggressively. Double down on your winners and use automated recovery to maintain this lead."
    }

    return (
        <ToolLayout
            title="Ecom Store Profit Validator"
            icon={LayoutDashboard}
            description={[
                "Validate your entire store's monthly P&L in seconds.",
                "Know your real net take-home profit after all overheads."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-12 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Inputs Section */}
                <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 blur-3xl rounded-full opacity-50"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <h3 className="text-xl font-black text-white tracking-widest uppercase flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-purple-400" /> Monthly P&L
                        </h3>
                        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5">
                            {["INR", "USD"].map((curr) => (
                                <button key={curr} onClick={() => setCurrency(curr as any)} className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${currency === curr ? "bg-purple-600 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}>
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {[
                            { label: "Total Monthly Revenue", state: revenue, set: setRevenue, help: "Gross Sales" },
                            { label: "Total Ad Spend", state: adSpend, set: setAdSpend, help: "Meta/TikTok Total spend" },
                            { label: "Total COGS", state: cogs, set: setCogs, help: "Product Sourcing + Shipping" },
                            { label: "Overhead / Team Cost", state: teamCost, set: setTeamCost, help: "Tools + Salary + Rent" },
                        ].map((field, i) => (
                            <div key={i} className="group/field">
                                <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block px-1">{field.label}</label>
                                <div className="relative">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500">
                                        {currency === "INR" ? <IndianRupee className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                                    </div>
                                    <input
                                        type="number"
                                        value={field.state}
                                        onChange={(e) => field.set(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-white/5 rounded-[1.5rem] py-5 transition-all focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500/50 text-white font-medium pl-14 pr-10"
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={calculate}
                            className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:scale-[1.01] hover:brightness-110 active:scale-95 text-white font-black py-6 rounded-[1.5rem] transition-all flex items-center justify-center gap-4 text-xl border border-white/10 shadow-xl shadow-purple-900/40 uppercase tracking-widest mt-6"
                        >
                            <TrendingUp className="w-7 h-7" /> Validate Store P&L
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-6 space-y-8">
                    {!hasCalculated ? (
                        <div className="bg-[#0b0c0d] border border-white/5 border-dashed rounded-[3rem] p-12 text-center h-[620px] flex flex-col items-center justify-center group relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="w-32 h-32 rounded-[2rem] bg-slate-900 flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500 shadow-2xl border border-white/5">
                                <LayoutDashboard className="w-16 h-16 text-slate-800" />
                            </div>
                            <h4 className="text-3xl font-black text-slate-400 mb-2 italic tracking-tight uppercase">Audit Your Bottom Line</h4>
                            <p className="text-[10px] text-slate-600 leading-relaxed max-w-[240px] mx-auto uppercase tracking-widest font-black italic">
                                "Revenue is a vanity, scale is a choice, but profit is the mission."
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            {/* Net Profit Card */}
                            <div className="bg-slate-950 border border-white/10 rounded-[3rem] p-12 text-center shadow-3xl relative overflow-hidden group">
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Monthly Net Take-Home</p>
                                    <h2 className={`text-8xl font-black transition-all drop-shadow-3xl tracking-tighter ${results.netProfit > 0 ? 'text-white' : 'text-red-500'}`}>
                                        {formatCurr(results.netProfit)}
                                    </h2>
                                    <div className="mt-8 bg-purple-500/10 px-6 py-2 rounded-full border border-purple-500/20 w-fit mx-auto flex items-center gap-2">
                                        <Activity className="w-4 h-4 text-purple-400" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-purple-400">Store Health Signal</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 text-center hover:border-purple-500/20 transition-all">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Net Margin</p>
                                    <p className="text-3xl font-black text-white">{results.margin.toFixed(1)}%</p>
                                </div>
                                <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 text-center hover:border-purple-500/20 transition-all">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Ad Efficiency</p>
                                    <p className="text-3xl font-black text-purple-400">{results.efficiency.toFixed(1)}%</p>
                                </div>
                            </div>

                            {/* Insight Card */}
                            <div className="bg-purple-600/5 border border-purple-500/10 rounded-3xl p-10 relative group overflow-hidden">
                                <h5 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-4 underline decoration-purple-500/50 underline-offset-8">CEO Strategic Insight:</h5>
                                <p className="text-slate-400 text-sm leading-relaxed font-light italic">
                                    {getInsight()}
                                </p>
                            </div>

                            <Link href="/" className="group flex items-center justify-between p-8 bg-white text-slate-950 rounded-[2rem] hover:bg-slate-200 transition-all font-black text-xs uppercase tracking-widest shadow-2xl">
                                Scale your net profit without more ads <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </ToolLayout>
    )
}
