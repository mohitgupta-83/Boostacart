"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { ShieldAlert, ShieldCheck, CheckSquare, XCircle, Info, Sparkles, AlertCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CheckoutRecoveryScorePage() {
    const [toggles, setToggles] = useState({
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
    })

    const score = Object.values(toggles).filter(Boolean).length * 20

    const getRisk = () => {
        if (score < 40) return { label: "High Vulnerability", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20 shadow-red-500/10" }
        if (score < 80) return { label: "Moderate Risk", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20 shadow-orange-500/10" }
        return { label: "Optimized Shield", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20 shadow-green-500/10" }
    }

    const missing = [
        { id: "q1", label: "Email Collection Early", msg: "You are losing customer data before they even reach checkout.", recovery: "Recover 5-10% more carts." },
        { id: "q2", label: "Instant WhatsApp Folow-up", msg: "WhatsApp has 98% open rates compared to 20% for email.", recovery: "Recover 15-20% more carts." },
        { id: "q3", label: "Exit-Intent Discount Strategy", msg: "70% of users leave without an incentive to stay.", recovery: "Lower bounce rates by 12%." },
        { id: "q4", label: "Add-to-Cart Lead Capture", msg: "Most recovery tools wait for checkout. You're losing visitors who just added to cart.", recovery: "2x your recovery pool." },
        { id: "q5", label: "Dynamic Retargeting Ads", msg: "You're not staying top-of-mind after they leave your site.", recovery: "Improve ad ROAS by 3x." },
    ].filter(item => !toggles[item.id as keyof typeof toggles])

    return (
        <ToolLayout
            title="Checkout Recovery Readiness Score"
            icon={ShieldCheck}
            description={[
                "Is your store leaking revenue through incomplete checkouts?",
                "Grade your defense system against abandonment and find precisely where you're losing money."
            ]}
        >
            <div className="grid lg:grid-cols-12 gap-10 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Checklist Section */}
                <div className="lg:col-span-7 space-y-4">
                    <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_50%)]"></div>

                        <h3 className="text-2xl font-bold text-white mb-10 tracking-tight flex items-center gap-3 relative z-10">
                            <CheckSquare className="w-6 h-6 text-blue-400" /> Store Checklist
                        </h3>

                        <div className="space-y-4 relative z-10">
                            {[
                                { id: "q1", label: "Do you collect emails before checkout?", benefit: "Email recovery baseline" },
                                { id: "q2", label: "Do you send WhatsApp/SMS within 5 mins?", benefit: "High-open rate recovery" },
                                { id: "q3", label: "Do you offer a discount on exit-intent?", benefit: "In-session conversion" },
                                { id: "q4", label: "Do you capture Add-to-Cart (pre-checkout)?", benefit: "BoostACart Speciality" },
                                { id: "q5", label: "Do you run dynamic retargeting ads?", benefit: "Ubiquity strategy" },
                            ].map((item, i) => (
                                <label key={i} className={`group/item flex items-center justify-between p-5 md:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${toggles[item.id as keyof typeof toggles] ? 'bg-blue-600/10 border-blue-500/50 shadow-lg shadow-blue-500/10' : 'bg-slate-950/50 border-white/5 hover:border-white/20'}`}>
                                    <div className="flex flex-col">
                                        <span className={`text-base md:text-lg font-bold transition-colors ${toggles[item.id as keyof typeof toggles] ? 'text-white' : 'text-slate-400'}`}>
                                            {item.label}
                                        </span>
                                        <span className={`text-[10px] font-black uppercase tracking-widest mt-1 ${toggles[item.id as keyof typeof toggles] ? 'text-blue-400' : 'text-slate-600'}`}>
                                            {item.benefit}
                                        </span>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={toggles[item.id as keyof typeof toggles]}
                                            onChange={(e) => setToggles({ ...toggles, [item.id]: e.target.checked })}
                                        />
                                        <div className="w-14 h-8 bg-slate-800 rounded-full transition-all peer-checked:bg-blue-600 peer-hover:ring-4 peer-hover:ring-blue-500/20 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-6"></div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Insights Block Based on Missing */}
                    {missing.length > 0 && (
                        <div className="bg-slate-900/20 border border-white/5 rounded-[2.5rem] p-10 animate-in fade-in duration-700">
                            <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" /> Detected Vulnerabilities
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                {missing.slice(0, 4).map((msg, i) => (
                                    <div key={i} className="p-5 bg-slate-950/40 rounded-2xl border border-white/5 group hover:border-red-500/20 transition-all">
                                        <p className="text-white font-bold text-sm mb-1 group-hover:text-red-400 transition-colors uppercase italic">{msg.label}</p>
                                        <p className="text-slate-500 text-xs leading-relaxed">{msg.msg}</p>
                                        <p className="text-blue-500/80 text-[10px] mt-2 font-black uppercase tracking-wider">Potential Gain: {msg.recovery}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Score Section */}
                <div className="lg:col-span-5 sticky top-12">
                    <div className="bg-slate-950 rounded-[3rem] border border-white/10 p-10 text-center shadow-2xl relative overflow-hidden group">
                        <div className={`absolute inset-0 opacity-10 blur-3xl transition-colors duration-1000 ${score < 40 ? 'bg-red-500' : score < 80 ? 'bg-orange-500' : 'bg-green-500'}`}></div>

                        <div className="relative z-10 space-y-8">
                            <div>
                                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4 group-hover:text-blue-400 transition-colors">Safety Index</p>
                                <div className="flex items-center justify-center gap-4">
                                    <span className={`text-8xl font-black tracking-tighter ${score < 40 ? 'text-red-400' : score < 80 ? 'text-orange-400' : 'text-green-400'}`}>
                                        {score}
                                    </span>
                                    <span className="text-2xl text-slate-700 font-bold">/ 100</span>
                                </div>
                            </div>

                            <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-1 shadow-inner border border-white/5">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(59,130,246,0.3)] ${score < 40 ? 'bg-red-500' : score < 80 ? 'bg-orange-400' : 'bg-green-500'}`}
                                    style={{ width: `${score}%` }}
                                ></div>
                            </div>

                            <div className={`p-6 rounded-[2rem] border transition-all duration-500 hover:scale-105 ${getRisk().bg} shadow-lg shadow-black/40`}>
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    {score < 70 ? <ShieldAlert className={`w-6 h-6 ${getRisk().color}`} /> : <ShieldCheck className={`w-6 h-6 ${getRisk().color}`} />}
                                    <span className={`text-xl font-black italic tracking-tight ${getRisk().color}`}>
                                        {getRisk().label}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-400 font-light leading-relaxed">
                                    {score < 40 ? "Your store is leaking profit every second. You are missing core recovery components used by top 1% Shopify stores." : score < 80 ? "Good start, but you're still leaving substantial revenue on the table. You need a more proactive capture strategy." : "Outstanding! Your store is a conversion machine. You are well-defended against abandonment."}
                                </p>
                            </div>

                            {score < 100 && (
                                <div className="bg-blue-600 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] rounded-2xl p-6 text-white group/cta hover:bg-blue-500 transition-all cursor-pointer select-none ring-1 ring-white/20">
                                    <h5 className="font-black text-lg mb-1 flex items-center justify-center gap-2">
                                        <Sparkles className="w-5 h-5 fill-white" /> Fix Security Gaps
                                    </h5>
                                    <p className="text-blue-100 text-xs font-medium mb-4">Implement automated cart capture in 5 mins.</p>
                                    <Link href="/" className="inline-flex items-center gap-2 bg-white text-blue-600 font-black px-6 py-2 rounded-full text-xs uppercase group-hover/cta:gap-4 transition-all tracking-widest">
                                        Explore Global Home <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Structured Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "How is checkout recovery readiness scored?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Scoring is based on 5 parameters: early email collection, instant follow-up via WhatsApp/SMS, exit-intent discounts, pre-checkout cart capture, and dynamic retargeting." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
