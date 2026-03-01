"use client"

export const dynamic = "force-dynamic"

import Link from "next/link"
import { ArrowRight, Share2, UserPlus, IndianRupee, ShieldCheck, Clock, Ban, AlertTriangle, CheckCircle2 } from "lucide-react"

export default function AffiliatePage() {
    return (
        <div className="min-h-screen bg-[#030303] text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
                <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                        <IndianRupee className="h-3.5 w-3.5" />
                        Affiliate Program
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Earn <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">40% Commission</span> On Every Store You Refer
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Refer Shopify stores to BoostACart.<br />
                        Earn 40% commission on their first subscription payment.<br />
                        No recurring requirement.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/auth/sign-up"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                        >
                            Become an Affiliate
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/dashboard/referrals"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300"
                        >
                            Login to Affiliate Dashboard
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            step: "01",
                            icon: Share2,
                            title: "Share your referral link or coupon code",
                            desc: "Get your unique referral link and coupon code from your dashboard. Share it with Shopify store owners via any channel.",
                        },
                        {
                            step: "02",
                            icon: UserPlus,
                            title: "Store owner signs up & subscribes",
                            desc: "When someone signs up using your link or coupon code and subscribes to a paid plan, you become eligible for commission.",
                        },
                        {
                            step: "03",
                            icon: IndianRupee,
                            title: "Earn 40% of their first subscription payment",
                            desc: "You receive 40% of their first monthly payment. Commission is credited to your wallet after a 10-day validation period.",
                        },
                    ].map(({ step, icon: Icon, title, desc }) => (
                        <div key={step} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
                            <div className="text-xs font-bold text-blue-500/50 mb-4">STEP {step}</div>
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                                <Icon className="h-5 w-5 text-blue-400" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Commission Rules */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Commission Rules</h2>
                <p className="text-slate-400 text-center text-sm mb-12 max-w-lg mx-auto">
                    Transparent rules to ensure fair payouts for all affiliates.
                </p>
                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {[
                        {
                            icon: CheckCircle2,
                            text: "40% commission on FIRST paid month only",
                            color: "text-green-400",
                            bg: "bg-green-400/10 border-green-400/20",
                        },
                        {
                            icon: Clock,
                            text: "Commission valid if subscription happens within 14 days of signup",
                            color: "text-blue-400",
                            bg: "bg-blue-400/10 border-blue-400/20",
                        },
                        {
                            icon: ShieldCheck,
                            text: "Commission unlocks after 10 days (fraud protection)",
                            color: "text-purple-400",
                            bg: "bg-purple-400/10 border-purple-400/20",
                        },
                        {
                            icon: Ban,
                            text: "No commission on renewals",
                            color: "text-yellow-400",
                            bg: "bg-yellow-400/10 border-yellow-400/20",
                        },
                        {
                            icon: AlertTriangle,
                            text: "Self-referrals are invalid",
                            color: "text-red-400",
                            bg: "bg-red-400/10 border-red-400/20",
                        },
                    ].map(({ icon: Icon, text, color, bg }, i) => (
                        <div
                            key={i}
                            className={`flex items-start gap-3 p-4 rounded-xl border ${bg}`}
                        >
                            <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${color}`} />
                            <span className="text-slate-200 text-sm">{text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Earnings Example */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Earnings Example</h2>
                <div className="max-w-md mx-auto bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
                    <p className="text-slate-400 text-sm mb-3">If your referral subscribes to a plan worth</p>
                    <p className="text-4xl font-bold text-white mb-1">₹2,000<span className="text-lg text-slate-400 font-normal">/month</span></p>
                    <div className="my-6 h-px bg-white/10" />
                    <p className="text-slate-400 text-sm mb-3">You earn</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">₹800</p>
                    <p className="text-slate-400 text-sm">40% × ₹2,000 = <span className="text-green-400 font-semibold">₹800</span></p>
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        One-time payout
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-5xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Earning Today</h2>
                <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
                    Sign up for free, get your referral code, and start sharing. It only takes a minute.
                </p>
                <Link
                    href="/auth/sign-up"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                    Become an Affiliate
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-8 text-center">
                <p className="text-slate-500 text-xs">
                    © {new Date().getFullYear()} BoostACart. All rights reserved.
                </p>
            </footer>
        </div>
    )
}
