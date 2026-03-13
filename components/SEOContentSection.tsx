import React from "react";
import Link from "next/link";
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingUp, Search, BookOpen, Layers } from "lucide-react";

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

interface ProgrammaticSEOProps {
    topic: string;
    relatedTools?: { name: string; url: string }[];
}

export default function SEOContentSection({ topic, relatedTools = [] }: ProgrammaticSEOProps) {
    const topicLower = topic.toLowerCase();
    
    return (
        <div className="mt-20 space-y-12 animate-[fade-in-up_500ms_ease-out]">
            {/* Quick Navigation / Internal Links */}
            <div className="flex flex-wrap items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <span className="text-indigo-200/50 text-sm font-semibold uppercase tracking-wider">Internal Resources:</span>
                <Link href="/tools" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"><Layers className="w-4 h-4"/> Full Tools Hub</Link>
                <Link href="/guides" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"><BookOpen className="w-4 h-4"/> Strategy Guides</Link>
                <Link href="/seo" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"><Search className="w-4 h-4"/> SEO Database</Link>
            </div>

            {/* 1. What This Calculator Does */}
            <section className="bg-[#0b102b]/50 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                <h2 className={`${syne.className} text-3xl font-bold text-white mb-6`}>What Does the {topic} Do?</h2>
                <div className="space-y-5 text-indigo-100/70 text-lg leading-relaxed relative z-10">
                    <p>
                        The <strong>{topic}</strong> is a specialized, professional-grade utility designed for ecommerce merchants, SaaS founders, and digital marketers. In today's aggressive online market, guessing your numbers is a surefire way to bleed cash. This tool eliminates the guesswork by providing exact, data-driven outputs for your {topicLower} calculations.
                    </p>
                    <p>
                        By inputting your core business metrics, the system processes a live evaluation of your store's health, marketing efficiency, or pricing validity. It bridges the gap between raw data sets and actionable financial insights. Instead of spending hours building complex spreadsheets, you can get reliable, standardized results in milliseconds.
                    </p>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-2xl mt-6">
                        <strong className="text-cyan-400 block mb-2">Pro Tip for Scaling:</strong>
                        <p className="text-sm text-indigo-200/80">
                            Don't just run this calculation once. Successful brands recalculate their {topicLower} every time they adjust ad creatives, modify pricing structures, or expand their product catalog to ensure margins stay consistently profitable.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. How to Use & Example Calculation */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#0b102b]/50 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-xl hover:border-white/10 transition-colors">
                    <h2 className={`${syne.className} text-2xl font-bold text-white mb-6`}>How to Use This Calculator</h2>
                    <ul className="space-y-4 text-indigo-100/70">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                            <p><strong>Gather your data:</strong> Pull up your Shopify dashboard, Meta Ads Manager, or Google Analytics to find your exact recent metrics.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                            <p><strong>Enter the values:</strong> Input your numbers into the fields above. Ensure you select the correct currency (USD/INR) for accurate reporting.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                            <p><strong>Click calculate:</strong> The system will instantly highlight warning signs, baseline performance, and potential upside.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</div>
                            <p><strong>Take action:</strong> Use the generated insights to lower your CPA, increase your AOV, or trigger an abandoned cart sequence.</p>
                        </li>
                    </ul>
                </div>
                <div className="bg-[#0b102b]/50 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-xl hover:border-white/10 transition-colors">
                    <h2 className={`${syne.className} text-2xl font-bold text-white mb-6`}>Example Calculation</h2>
                    <div className="space-y-4 text-indigo-100/70">
                        <p>
                            To illustrate how powerful tracking your {topicLower} can be, imagine an ecommerce store doing $20,000 in monthly revenue.
                        </p>
                        <ul className="space-y-2 py-4 border-y border-white/5 my-4">
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Monthly Traffic:</span> <strong className="text-white">100,000</strong></li>
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Conversion Rate:</span> <strong className="text-white">2.5%</strong></li>
                            <li className="flex justify-between"><span>Ad Spend:</span> <strong className="text-white">$8,000</strong></li>
                        </ul>
                        <p className="text-sm">
                            If they optimize their {topicLower} by just 15%, they could potentially add thousands of dollars to their net bottom line over a quarter, all without increasing their initial traffic acquisition budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Why This Metric Matters & Benefits */}
            <section className="bg-gradient-to-br from-[#0b1026] to-[#04091A] p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-transparent to-transparent pointer-events-none"></div>
                
                <h2 className={`${syne.className} text-3xl font-bold text-white mb-6`}>Why Your {topic} Matters</h2>
                <div className="grid md:grid-cols-2 gap-10 relative z-10">
                    <div className="space-y-5 text-indigo-100/70 text-lg leading-relaxed">
                        <p>
                            Ignoring your {topicLower} is like driving blindfolded. It's the central nervous system of your growth architecture. When you track it meticulously, you unlock the ability to scale ad campaigns aggressively while maintaining profitability safety nets.
                        </p>
                        <p>
                            Venture-backed startups and 8-figure ecommerce brands obsess over these numbers daily. For dropshippers and independent brands, adopting this same analytical rigorousness is the only guaranteed way to outmaneuver competitors who are merely operating on "gut feeling".
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">Core Benefits of Tracking:</h3>
                        {[
                            "Identifies hidden cash flow leaks before they destroy margins.",
                            "Validates whether new ad creatives or landing pages are actually working.",
                            "Helps establish a baseline to model future revenue projections.",
                            "Highlights the exact breaking point where scaling becomes unprofitable."
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                <p className="text-sm text-indigo-100/80 leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Common Mistakes */}
            <section className="bg-rose-950/10 border border-rose-900/20 p-8 rounded-[2rem]">
                <h2 className={`${syne.className} text-2xl font-bold text-white mb-6 flex items-center gap-3`}>
                    <AlertTriangle className="w-6 h-6 text-rose-500" /> Common Mistakes to Avoid
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    <div className="bg-[#0b1026]/80 p-6 rounded-2xl border border-rose-500/10">
                        <h4 className="text-white font-bold mb-2">1. Ignoring COGS</h4>
                        <p className="text-sm text-indigo-200/60">Failing to factor in the Cost of Goods Sold drops shipping fees, and payment gateway cuts, resulting in wildly inflated "profit" metrics.</p>
                    </div>
                    <div className="bg-[#0b1026]/80 p-6 rounded-2xl border border-rose-500/10">
                        <h4 className="text-white font-bold mb-2">2. Blending Data</h4>
                        <p className="text-sm text-indigo-200/60">Averaging out the performance of highly profitable top-tier products with losing products, which masks the exact source of your losses.</p>
                    </div>
                    <div className="bg-[#0b1026]/80 p-6 rounded-2xl border border-rose-500/10">
                        <h4 className="text-white font-bold mb-2">3. Not Recovering Carts</h4>
                        <p className="text-sm text-indigo-200/60">Spending heavily to acquire traffic, but allowing a 70% checkout drop-off rate because no automated WhatsApp/SMS recovery system is in place.</p>
                    </div>
                </div>
            </section>

            {/* 5. Product Promotion / Internal SEO Link Block */}
            <section className="bg-gradient-to-r from-blue-900/20 to-fuchsia-900/20 p-8 md:p-12 rounded-[2rem] border border-blue-500/20 shadow-2xl relative overflow-hidden text-center">
                <div className="relative z-10 max-w-3xl mx-auto">
                    <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                    <h2 className={`${syne.className} text-3xl font-extrabold text-white mb-6`}>
                        Stop Losing Your Hard-Earned Traffic
                    </h2>
                    <p className="text-xl text-indigo-100/80 mb-8 leading-relaxed">
                        Calculating your metrics is only step one. Step two is plugging the holes. If your {topicLower} isn't where it needs to be, the absolute fastest way to fix it is by recovering lost traffic. <Link href="/shopify-cart-recovery" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30">Recover abandoned carts using BoostACart</Link> to instantly boost your revenue without increasing your ad spend.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link 
                            href="/shopify-cart-recovery"
                            className="bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-xl w-full sm:w-auto"
                        >
                            Explore Shopify Recovery
                        </Link>
                        <Link 
                            href="/cart-recovery-for-dropshipping"
                            className="bg-[#0b1026] text-white border border-white/10 font-bold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors w-full sm:w-auto"
                        >
                            View Dropshipping Strategies
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. Related Tools Bottom Section */}
            {relatedTools && relatedTools.length > 0 && (
                <section className="pt-10 border-t border-white/5">
                    <h3 className={`${syne.className} text-2xl font-bold text-white mb-6`}>Explore Related SEO Calculators</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {relatedTools.map((tool) => (
                            <Link
                                key={tool.name}
                                href={tool.url}
                                className="bg-[#0b102b]/50 p-5 rounded-xl border border-white/5 hover:border-cyan-500/30 hover:bg-[#0b102b] transition-all group flex items-center justify-between"
                            >
                                <span className="font-semibold text-indigo-100 group-hover:text-cyan-400 transition-colors">{tool.name}</span>
                                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
