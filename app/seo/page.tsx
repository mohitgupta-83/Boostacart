import Link from "next/link";
import { Syne, Outfit } from 'next/font/google';
import { Search, ArrowRight, LayoutGrid, BookOpen, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

const seoPages = [
    {
        title: "Cart Recovery Alternatives",
        description: "Explore why BoostACart is outperforming legacy legacy text providers.",
        href: "/cartloop-alternative",
        category: "Comparisons"
    },
    {
        title: "High Ticket Cart Recovery",
        description: "Specific methodologies for recovering large AOV abandoned carts.",
        href: "/cart-recovery-high-ticket-stores",
        category: "Niche Strategy"
    },
    {
        title: "Shopify Email Integration vs Real Time SMS",
        description: "Breaking down the success rates of native email vs immediate omnichannel outreach.",
        href: "/boostacart-vs-shopify-email",
        category: "Platform Analysis"
    },
    {
        title: "Case Study: 37 Carts Recovered in 24 Hours",
        description: "A deep dive into the exact funnel used by a new Shopify merchant to claw back 37 lost orders.",
        href: "/case-study-recovered-37-orders",
        category: "Data Analysis"
    }
];

export const metadata = {
  alternates: {
    canonical: "https://boostacart.com/seo"
  },
    title: "SEO Strategy Database | BoostACart",
    description: "Deep dive comparisons, platform analysis, and niche recovery operations for scaling ecommerce brands.",
}

export default function SEOIndexPage() {
    return (
        <div className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-purple-500/30 overflow-hidden relative ${outfit.className}`}>
            <Navbar />
            
            {/* Background elements */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
                 <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
                 <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 pt-32 pb-24 px-4">
                
                {/* Hub Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                    <Link href="/tools" className="px-6 py-2 rounded-full border border-white/10 text-indigo-200/70 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4" /> Tools Hub
                    </Link>
                    <Link href="/guides" className="px-6 py-2 rounded-full border border-white/10 text-indigo-200/70 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Growth Guides
                    </Link>
                    <span className="px-6 py-2 rounded-full border border-emerald-500/50 text-emerald-400 bg-emerald-500/10 flex items-center gap-2 font-semibold">
                        <Layers className="w-4 h-4" /> SEO Resources
                    </span>
                </div>

                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h1 className={`${syne.className} text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6`}>
                        SEO Strategy Database
                    </h1>
                    <p className="text-indigo-100/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        In-depth comparative analysis, product teardowns, and niche ecommerce structural data.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
                    {seoPages.map((page, i) => (
                        <Link
                            key={i}
                            href={page.href}
                            className="group block p-8 bg-[#0b102b]/50 backdrop-blur-md border border-white/5 rounded-3xl hover:border-emerald-500/30 hover:bg-[#0b102b] transition-all duration-300 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-colors pointer-events-none"></div>
                            
                            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-emerald-400/80 uppercase tracking-widest mb-6">
                                {page.category}
                            </span>
                            
                            <h3 className={`${syne.className} text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors`}>
                                {page.title}
                            </h3>
                            
                            <p className="text-indigo-100/60 text-base leading-relaxed mb-8">
                                {page.description}
                            </p>
                            
                            <div className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                                Explore <ArrowRight className="w-5 h-5 ml-2" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
