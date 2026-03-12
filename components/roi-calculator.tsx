"use client"

import { useState, useEffect } from "react"
import { IndianRupee, DollarSign, TrendingUp, ShoppingBag, ArrowRight, Calculator } from "lucide-react"
import { Syne } from "next/font/google"
import Link from "next/link"

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export function RoiCalculator() {
    const [visitors, setVisitors] = useState<string>("")
    const [conversionRate, setConversionRate] = useState<string>("")
    const [aov, setAov] = useState<string>("")
    const [currency, setCurrency] = useState<"INR" | "USD">("INR")
    const [hasCalculated, setHasCalculated] = useState(false)

    // Derive state during render directly (React best practice, fixes SSR mismatch)
    const v = parseFloat(visitors) || 0
    const cr = parseFloat(conversionRate) || 0
    const avgOrderValue = parseFloat(aov) || 0

    const estimated_orders = v * (cr / 100)
    // Industry average add-to-cart rate is around 8%
    const estimated_add_to_carts = v * 0.08
    const current_revenue = estimated_orders * avgOrderValue
    const abandoned_carts = Math.max(0, estimated_add_to_carts - estimated_orders)
    const lost_revenue = abandoned_carts * avgOrderValue
    const recovery_10 = lost_revenue * 0.10
    const recovery_25 = lost_revenue * 0.25
    
    const results = {
        currentRevenue: Math.round(current_revenue),
        abandonedCarts: Math.round(abandoned_carts),
        lostRevenue: Math.round(lost_revenue),
        recoveryPotential10: Math.round(recovery_10),
        recoveryPotential25: Math.round(recovery_25),
        totalPotentialRevenue: Math.round(current_revenue + recovery_25)
    }

    const handleCalculate = () => {
        setHasCalculated(true)
    }

    const formatCurrency = (amount: number) => {
        if (currency === "INR") {
            return new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
            }).format(amount)
        }
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <div className="w-full max-w-6xl mx-auto py-8 sm:py-16 px-4 relative z-10">
            <div className="text-center mb-16">
                <h3 className={`${syne.className} text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300 mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]`}>
                    Calculate Your Lost Revenue
                </h3>
                <p className="text-indigo-200/70 text-lg sm:text-xl max-w-2xl mx-auto font-light">
                    Over 70% of shoppers abandon their cart. See how much money you're leaving on the table every month and what you can easily recover.
                </p>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
                {/* Subtle light leak for depth */}
                <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">
                    
                    {/* --------- Left: Input Controls --------- */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                        <div>
                            <h4 className="text-2xl font-semibold text-white mb-2">Store Metrics</h4>
                            <p className="text-sm text-indigo-200/60 mb-8">Enter your monthly numbers to generate your live report.</p>
                            
                            <div className="space-y-6">
                                {/* Visitors Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-indigo-100/90 ml-1">Monthly Store Visitors</label>
                                    <div className="relative group">
                                        <input
                                            type="number"
                                            value={visitors}
                                            onChange={(e) => setVisitors(e.target.value)}
                                            className="w-full bg-[#0a0f25]/50 border border-indigo-500/20 rounded-2xl px-5 py-4 text-white placeholder:text-indigo-300/30 focus:outline-none focus:border-cyan-400/50 focus:bg-[#0a0f25]/80 transition-all font-medium text-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                                            <span className="text-xs font-semibold tracking-wider text-indigo-300/50 uppercase bg-[#1e274f]/50 px-3 py-1.5 rounded-lg backdrop-blur-sm">Visitors</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Conversion Rate Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-indigo-100/90 ml-1">Conversion Rate (%)</label>
                                    <div className="relative group">
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={conversionRate}
                                            onChange={(e) => setConversionRate(e.target.value)}
                                            className="w-full bg-[#0a0f25]/50 border border-indigo-500/20 rounded-2xl px-5 py-4 text-white placeholder:text-indigo-300/30 focus:outline-none focus:border-cyan-400/50 focus:bg-[#0a0f25]/80 transition-all font-medium text-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                                            <span className="text-xs font-semibold tracking-wider text-indigo-300/50 uppercase bg-[#1e274f]/50 px-3 py-1.5 rounded-lg backdrop-blur-sm">% Rate</span>
                                        </div>
                                    </div>
                                </div>

                                {/* AOV Input and Currency Toggle */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center mb-2 px-1">
                                        <label className="text-sm font-medium text-indigo-100/90">Average Order Value</label>
                                        <div className="flex bg-[#0a0f25]/80 p-1 rounded-xl border border-indigo-500/20">
                                            <button
                                                onClick={() => setCurrency("INR")}
                                                className={`text-xs px-4 py-1.5 font-bold rounded-lg transition-all duration-300 ${currency === "INR" ? "bg-cyan-500 text-white shadow-md" : "text-indigo-300/50 hover:text-white"}`}
                                            >
                                                INR
                                            </button>
                                            <button
                                                onClick={() => setCurrency("USD")}
                                                className={`text-xs px-4 py-1.5 font-bold rounded-lg transition-all duration-300 ${currency === "USD" ? "bg-cyan-500 text-white shadow-md" : "text-indigo-300/50 hover:text-white"}`}
                                            >
                                                USD
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 font-bold bg-transparent">
                                            {currency === "INR" ? <IndianRupee className="w-5 h-5" /> : <DollarSign className="w-5 h-5" />}
                                        </div>
                                        <input
                                            type="number"
                                            value={aov}
                                            onChange={(e) => setAov(e.target.value)}
                                            className="w-full bg-[#0a0f25]/50 border border-indigo-500/20 rounded-2xl pl-14 pr-5 py-4 text-white placeholder:text-indigo-300/30 focus:outline-none focus:border-cyan-400/50 focus:bg-[#0a0f25]/80 transition-all font-medium text-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                                            <span className="text-xs font-semibold tracking-wider text-indigo-300/50 uppercase bg-[#1e274f]/50 px-3 py-1.5 rounded-lg backdrop-blur-sm">/ Order</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <button
                                    onClick={handleCalculate}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border border-white/10 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] mt-4 active:scale-[0.98]"
                                >
                                    <Calculator className="w-5 h-5" /> Calculate Lost Revenue
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --------- Right: Live Results --------- */}
                    <div className="lg:col-span-7 bg-[#050814]/80 backdrop-blur-md rounded-[2rem] border border-white/5 p-8 sm:p-10 flex flex-col justify-center relative shadow-2xl overflow-hidden">
                        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                        
                        {!hasCalculated ? (
                            <div className="relative z-10 text-center text-white/40 h-full flex flex-col justify-center items-center py-20 min-h-[400px]">
                                <Calculator className="w-16 h-16 mx-auto mb-6 opacity-20" />
                                <h4 className={`${syne.className} text-2xl text-white/80 font-bold mb-4`}>Ready to see your lost revenue?</h4>
                                <p className="max-w-xs mx-auto text-indigo-200/60 leading-relaxed text-sm">Enter your store metrics on the left and click calculate to generate your recovery potential report.</p>
                            </div>
                        ) : (
                            <div className="relative z-10 space-y-10 animate-[fade-in-up_400ms_ease-out]">
                            
                            {/* Top Metric - Lost Revenue */}
                            <div>
                                <h5 className="text-xs font-bold text-indigo-200/50 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                                    Monthly Revenue Slipping Away
                                </h5>
                                <div className="flex items-end gap-3">
                                    <span className={`${syne.className} text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-300 to-rose-400 drop-shadow-sm`}>
                                        {formatCurrency(results.lostRevenue)}
                                    </span>
                                </div>
                                <p className="text-sm text-indigo-200/50 mt-3 font-medium">
                                    Based on <span className="text-white">{new Intl.NumberFormat("en-US").format(results.abandonedCarts)}</span> abandoned carts every month.
                                </p>
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1e274f] to-transparent opacity-50"></div>

                            {/* Potential Recovery Layout */}
                            <div>
                                <h5 className="text-xs font-bold text-indigo-200/50 uppercase tracking-widest mb-5 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    Your Recovery Potential
                                </h5>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
                                        <p className="text-xs text-indigo-200/60 font-semibold uppercase tracking-wider mb-2">Conservative (10%)</p>
                                        <p className="text-2xl font-bold text-white">
                                            {formatCurrency(results.recoveryPotential10)}
                                            <span className="text-sm font-normal text-indigo-200/50 ml-1">/ mo</span>
                                        </p>
                                        <p className="text-xs text-indigo-300/40 mt-2">Recovering just 1 in 10 carts.</p>
                                    </div>
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/40 transition-all cursor-default">
                                        <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all"></div>
                                        <p className="text-xs text-emerald-400/80 font-bold uppercase tracking-wider mb-2 relative z-10">Optimistic (25%)</p>
                                        <p className="text-3xl font-extrabold text-emerald-400 relative z-10 drop-shadow-sm">
                                            {formatCurrency(results.recoveryPotential25)}
                                            <span className="text-sm font-medium text-emerald-400/50 ml-1">/ mo</span>
                                        </p>
                                        <p className="text-xs text-emerald-400/60 mt-2 relative z-10 font-medium">Industry standard with BoostACart.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link
                                    href="/shopify-cart-recovery"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-100 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                >
                                    Start Recovering Carts Today
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Seamless Strategy Section */}
            <div className="mt-16 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="text-center mb-10">
                    <h4 className={`${syne.className} text-2xl font-bold text-white`}>How We Recover <span className="text-emerald-400">25%+</span> Of Your Revenue</h4>
                    <p className="text-indigo-200/60 mt-2 text-sm">Automated flows that trigger the moment a customer shows exit intent.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-[#0b102b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 relative hover:border-cyan-500/30 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mb-4 shadow-sm border border-cyan-500/20">1</div>
                        <h5 className="text-white font-semibold mb-2">Capture Lead</h5>
                        <p className="text-sm text-indigo-200/60 leading-relaxed">BoostACart securely grabs their contact details precisely at Add-to-Cart.</p>
                    </div>
                    <div className="bg-[#0b102b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 relative hover:border-fuchsia-500/30 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 font-bold mb-4 shadow-sm border border-fuchsia-500/20">2</div>
                        <h5 className="text-white font-semibold mb-2">Immediate Outreach</h5>
                        <p className="text-sm text-indigo-200/60 leading-relaxed">A gentle, automated WhatsApp or SMS goes out within 5 minutes of abandonment.</p>
                    </div>
                    <div className="bg-[#0b102b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 relative hover:border-emerald-500/30 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4 shadow-sm border border-emerald-500/20">3</div>
                        <h5 className="text-white font-semibold mb-2">Sweeten the Deal</h5>
                        <p className="text-sm text-indigo-200/60 leading-relaxed">If they don't bite, offer a time-sensitive 10% discount to push them over the edge.</p>
                    </div>
                    <div className="bg-[#0b102b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 relative hover:border-orange-500/30 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold mb-4 shadow-sm border border-orange-500/20">4</div>
                        <h5 className="text-white font-semibold mb-2">Nurture Flow</h5>
                        <p className="text-sm text-indigo-200/60 leading-relaxed">Follow-up reminders in 24 hours to secure the sale before the lead goes cold.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
