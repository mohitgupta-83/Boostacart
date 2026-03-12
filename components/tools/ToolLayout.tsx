import { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ExitIntentModal from "@/components/ExitIntentModal"
import SEOContentSection from "@/components/SEOContentSection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"
import { Syne, Outfit } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

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
            className={`min-h-screen text-slate-200 py-16 px-4 select-none relative overflow-hidden bg-[#04091A] ${outfit.className}`}
        >
            <ExitIntentModal />
            {/* Abstract Background Noise & Geometry */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
                 <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
                 <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
            </div>

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
                <div className="text-center mb-12 relative z-10">
                    <h1 className={`${syne.className} text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-6`}>
                        {title}
                    </h1>
                    <div className="text-indigo-100/60 text-lg max-w-2xl mx-auto space-y-4">
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

                {/* Seamless Strategy Section */}
                <div className="mt-16 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10 w-full mb-16">
                    <div className="text-center mb-10">
                        <h4 className={`${syne.className} text-2xl font-bold text-white`}>How We Recover <span className="text-emerald-400">25%+</span> Of Your Revenue</h4>
                        <p className="text-indigo-200/60 mt-2 text-sm">Automated flows that trigger the moment a customer shows exit intent.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        <div className="bg-[#0b102b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 relative hover:border-cyan-500/30 transition-all group shadow-xl">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mb-4 shadow-sm border border-cyan-500/20">1</div>
                            <h5 className="text-white font-semibold mb-2">Capture Lead</h5>
                            <p className="text-sm text-indigo-200/60 leading-relaxed">BoostACart securely grabs their contact details precisely at Add-to-Cart.</p>
                        </div>
                        <div className="bg-[#0b102b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 relative hover:border-fuchsia-500/30 transition-all group shadow-xl">
                            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 font-bold mb-4 shadow-sm border border-fuchsia-500/20">2</div>
                            <h5 className="text-white font-semibold mb-2">Immediate Outreach</h5>
                            <p className="text-sm text-indigo-200/60 leading-relaxed">A gentle, automated WhatsApp or SMS goes out within 5 minutes of abandonment.</p>
                        </div>
                        <div className="bg-[#0b102b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 relative hover:border-emerald-500/30 transition-all group shadow-xl">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4 shadow-sm border border-emerald-500/20">3</div>
                            <h5 className="text-white font-semibold mb-2">Sweeten the Deal</h5>
                            <p className="text-sm text-indigo-200/60 leading-relaxed">If they don't bite, offer a time-sensitive 10% discount to push them over the edge.</p>
                        </div>
                        <div className="bg-[#0b102b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 relative hover:border-orange-500/30 transition-all group shadow-xl">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold mb-4 shadow-sm border border-orange-500/20">4</div>
                            <h5 className="text-white font-semibold mb-2">Nurture Flow</h5>
                            <p className="text-sm text-indigo-200/60 leading-relaxed">Follow-up reminders in 24 hours to secure the sale before the lead goes cold.</p>
                        </div>
                    </div>
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
                <div className="mt-20 text-center relative z-10">
                    <div className="bg-[#0b1026] backdrop-blur-xl border border-white/5 rounded-[2rem] p-10 max-w-3xl mx-auto shadow-2xl relative overflow-hidden group">
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-fuchsia-500/0 via-transparent to-cyan-500/0 group-hover:from-fuchsia-500/20 group-hover:to-cyan-500/20 rounded-[2rem] transition-colors duration-500 blur-sm z-0"></div>
                        <div className="relative z-10">
                            <h3 className={`${syne.className} text-3xl font-bold text-white mb-4`}>{ctaTitle}</h3>
                            <p className="text-indigo-100/60 mb-8 max-w-xl mx-auto text-lg">
                                {ctaDescription}
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:brightness-110 shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(217,70,239,0.5)] hover:scale-105">
                                See Real Cart Recovery Example <ArrowLeft className="w-5 h-5 rotate-180" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Floating CTA Section at Bottom */}
                <div className="mt-16 text-center relative z-10">
                    <div className="bg-gradient-to-br from-[#0b1026] to-[#04091A] rounded-2xl p-8 border border-white/5 shadow-[0_0_30px_rgba(6,182,212,0.1)] inline-block relative overflow-hidden group">
                        <h4 className={`${syne.className} text-2xl font-bold text-white mb-4`}>Recover 20%—30% of Lost Add-to-Cart Revenue</h4>
                        <Link href="/" className="inline-flex items-center gap-2 border border-white/10 hover:border-cyan-400/50 text-indigo-100/70 hover:text-white px-8 py-3 rounded-full transition-all bg-white/[0.02] hover:bg-white/[0.05]">
                            See How SkinGlow Does It
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
