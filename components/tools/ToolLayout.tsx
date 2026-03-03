import { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ExitIntentModal from "@/components/ExitIntentModal"
import SEOContentSection from "@/components/SEOContentSection"
import FAQSection from "@/components/FAQSection"

interface ToolLayoutProps {
    title: string;
    description: string[];
    children: ReactNode;
    ctaTitle: string;
    ctaDescription: string;
}

export default function ToolLayout({
    title,
    description,
    children,
    ctaTitle,
    ctaDescription
}: ToolLayoutProps) {
    return (
        <div
            className="min-h-screen text-white py-16 px-4 font-sans select-none relative"
            style={{
                background: "radial-gradient(circle at top left, #0f172a, #020617)"
            }}
        >
            <ExitIntentModal />
            {/* Subtle Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Breadcrumb Navigation */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 mt-[-20px]">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/tools" className="hover:text-blue-400 transition-colors">Tools</Link>
                    <span>/</span>
                    <span className="text-slate-300">Calculator</span>
                </div>

                <Link
                    href="/tools"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Tools
                </Link>

                {/* Header Redesign */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
                        {title}
                    </h1>
                    <div className="text-slate-400 text-lg max-w-2xl mx-auto space-y-4">
                        {description.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-12"></div>

                {/* Glassmorphism Wrapping Main Children Content */}
                <div className="animate-[fade-in-up_300ms_ease-out]">
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .glass-card {
                            background: rgba(15, 23, 42, 0.6);
                            backdrop-filter: blur(12px);
                            -webkit-backdrop-filter: blur(12px);
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
                            transition: transform 200ms ease;
                        }
                        .glass-card:hover {
                            transform: scale(1.01);
                        }
                        @keyframes fade-in-up {
                            0% { opacity: 0; transform: translateY(20px); }
                            100% { opacity: 1; transform: translateY(0); }
                        }
                    `}} />
                    {/* The child components will inherently be styled by applying 'glass-card' to their containers */}
                    {children}
                </div>

                {/* Auto-injected SEO and FAQ Content Below Every Calculator */}
                <SEOContentSection
                    topic={title}
                    relatedTools={[
                        { name: "Profit Calculator", url: "/tools/ecommerce-profit-calculator" },
                        { name: "CPA Analyzer", url: "/tools/cpa-analyzer" },
                        { name: "ROAS Calculator", url: "/tools/roas-calculator" }
                    ]}
                />
                <FAQSection topic={title} />

                {/* Main Dynamic CTA within Layout */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">{ctaTitle}</h3>
                        <p className="text-slate-400 mb-6">
                            {ctaDescription}
                        </p>
                        <Link href="/case-study/cart-recovery" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:brightness-110 font-bold px-8 py-3 rounded-full transition-all active:scale-[0.98] shadow-xl shadow-blue-500/20 hover:scale-105">
                            See Real Cart Recovery Example
                        </Link>
                    </div>
                </div>

                {/* Floating CTA Section at Bottom */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-[#0a1128] to-[#1a1025] rounded-xl p-6 border border-slate-800/50 shadow-[0_0_30px_rgba(59,130,246,0.1)] inline-block">
                        <h4 className="text-xl font-bold text-white mb-3">Recover 2030% of Lost Add-to-Cart Revenue</h4>
                        <Link href="/case-study/cart-recovery" className="inline-flex items-center gap-2 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-6 py-2 rounded-full transition-all hover:bg-slate-800">
                            See Real Cart Recovery Example
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
