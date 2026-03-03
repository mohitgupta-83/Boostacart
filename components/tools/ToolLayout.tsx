"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, LucideIcon, Sparkles } from "lucide-react"

interface ToolLayoutProps {
    title: string;
    description: string[];
    children: ReactNode;
    icon: LucideIcon;
    iconColor?: string;
}

export default function ToolLayout({
    title,
    description,
    children,
    icon: Icon,
    iconColor = "text-blue-400"
}: ToolLayoutProps) {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#020617] text-white font-sans selection:bg-blue-500/30">
            {/* Premium Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-40" style={{
                backgroundImage: `radial-gradient(circle at top left, #1e293b, transparent 40%), radial-gradient(circle at bottom right, #0f172a, transparent 40%)`
            }}></div>

            {/* Subtle Noise Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 lg:py-24">
                {/* Back Link */}
                <Link
                    href="/tools"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-12 transition-all duration-300 group"
                >
                    <div className="p-2 rounded-full bg-slate-900 group-hover:bg-slate-800 border border-slate-800 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Back to Tools Central</span>
                </Link>

                {/* Tool Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative group`}>
                        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <Icon className={`w-10 h-10 ${iconColor} relative z-10`} />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 uppercase md:normal-case italic md:not-italic">
                        {title}
                    </h1>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {description.map((desc, index) => (
                            <p key={index} className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                                {desc}
                            </p>
                        ))}
                    </div>

                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-12"></div>
                </div>

                {/* Tool Main Content */}
                <div className="relative">
                    {children}
                </div>

                {/* Floating CTA Section */}
                <div className="mt-24 md:mt-32">
                    <div className="relative group overflow-hidden bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl transition-all duration-500 hover:border-white/20">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                                Recover 20–30% of Lost Add-to-Cart Revenue
                            </h3>
                            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                                Don't let high-intent buyers slip away. BoostACart automatically bridges the gap between Add-to-Cart and Purchase.
                            </p>

                            <div className="flex flex-col items-center gap-4">
                                <Link
                                    href="/"
                                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] active:scale-95 text-lg"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    See How BoostACart Recovers Lost Sales
                                </Link>
                                <span className="text-sm text-slate-500 font-medium">
                                    No signup required to explore.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Internal Links / Breadcrumbs */}
                <div className="mt-16 pt-8 border-t border-slate-900 flex justify-center gap-8 text-xs text-slate-500 uppercase tracking-widest font-bold">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <span className="opacity-20">•</span>
                    <Link href="/tools" className="hover:text-blue-400 transition-colors">All Tools</Link>
                    <span className="opacity-20">•</span>
                    <Link href="/blog" className="hover:text-blue-400 transition-colors">Strategy Blog</Link>
                </div>
            </div>
        </div>
    )
}
