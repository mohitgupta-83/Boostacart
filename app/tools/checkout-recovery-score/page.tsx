"use client"

import { useState } from "react"
import ToolLayout from "@/components/tools/ToolLayout"
import { ShieldAlert, ShieldCheck } from "lucide-react"

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
        if (score < 40) return { label: "High Risk", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" }
        if (score < 70) return { label: "Moderate Danger", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" }
        return { label: "Optimized", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" }
    }

    const missing = [
        !toggles.q1 && "Not collecting emails before checkout.",
        !toggles.q2 && "Missing instant WhatsApp follow-up.",
        !toggles.q3 && "No exit-intent discount offered.",
        !toggles.q4 && "Not capturing high-intent Add-to-Cart leads.",
        !toggles.q5 && "Missing retargeting ad campaigns.",
    ].filter(Boolean)

    return (
        <ToolLayout
            title="Checkout Recovery Readiness Score"
            description={[
                "Find out how much revenue you are permanently losing.",
                "Evaluate your store's defense against checkout abandonment in 10 seconds."
            ]}
            ctaTitle="Want a perfect 100/100 score?"
            ctaDescription="Implement a fully automated Add-to-Cart lead capture system with BoostACart."
        >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-white mb-4">Complete Your Checklist</h3>

                        <div className="space-y-3">
                            {[
                                { id: "q1", label: "Collect email before checkout?" },
                                { id: "q2", label: "Send WhatsApp / Email within 5 minutes?" },
                                { id: "q3", label: "Offer exit-intent discount?" },
                                { id: "q4", label: "Capture Add-to-Cart leads?" },
                                { id: "q5", label: "Use retargeting ads?" },
                            ].map((item, i) => (
                                <label key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:border-blue-500/50 transition-colors">
                                    <span className="text-sm font-medium text-white/80 pointer-events-none select-none">{item.label}</span>
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={toggles[item.id as keyof typeof toggles]}
                                            onChange={(e) => setToggles({ ...toggles, [item.id]: e.target.checked })}
                                        />
                                        <div className="w-11 h-6 bg-slate-800 rounded-full peer peer-checked:bg-blue-600 transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
                        <div className="text-center space-y-6">
                            <div>
                                <p className="text-sm text-white/60 mb-1">Your Store Readiness Score</p>
                                <div className="flex items-center justify-center gap-3">
                                    <p className="text-6xl font-bold text-white">{score}</p>
                                    <span className="text-xl text-white/40">/ 100</span>
                                </div>
                            </div>

                            <div className="w-full bg-slate-800 rounded-full h-3">
                                <div className={`h-3 rounded-full transition-all duration-500 ${score < 40 ? 'bg-red-500' : score < 70 ? 'bg-orange-500' : 'bg-green-500'}`} style={{ width: `${score}%` }}></div>
                            </div>

                            <div className={`p-4 rounded-xl border ${getRisk().bg}`}>
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    {score >= 70 ? <ShieldCheck className={`w-5 h-5 ${getRisk().color}`} /> : <ShieldAlert className={`w-5 h-5 ${getRisk().color}`} />}
                                    <p className={`font-bold ${getRisk().color}`}>{getRisk().label}</p>
                                </div>
                                <p className="text-xs text-white/60">
                                    {score < 40 ? "You are losing significant revenue every day." : score < 70 ? "There is still plenty of room to improve recovery." : "Your recovery system is highly optimized."}
                                </p>
                            </div>

                            {missing.length > 0 && (
                                <div className="text-left mt-6">
                                    <p className="text-sm font-semibold text-white/80 mb-2">Vulnerabilities Detected:</p>
                                    <ul className="space-y-1">
                                        {missing.map((msg, i) => (
                                            <li key={i} className="text-xs text-white/60 flex items-start gap-2">
                                                <span className="text-red-400">•</span> {msg}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
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
                            "name": "How to prevent checkout abandonment?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Collect emails early, send WhatsApp reminders within 5 minutes, offer exit discounts, and run retargeting ads." }
                        }]
                    })
                }}
            />
        </ToolLayout>
    )
}
