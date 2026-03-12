"use client"
;

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, DollarSign, Percent, TrendingUp, Users } from "lucide-react";

export default function SaasPricingCalculatorPage() {
    // Calculator States
    const [cac, setCac] = useState<string>("20");
    const [conversionRate, setConversionRate] = useState<string>("5");
    const [targetPayback, setTargetPayback] = useState<string>("3"); // months
    const [hasCalculated, setHasCalculated] = useState(false);

    const [results, setResults] = useState({
        recommendedPrice: 0,
        ltv: 0,
        mrr: 0,
    });

    const handleCalculate = () => {
        const cacVal = parseFloat(cac) || 0;
        const convRate = parseFloat(conversionRate) || 1;
        const paybackMonths = parseFloat(targetPayback) || 1;

        // Basic estimation logic for demo purposes
        // Recommended monthly price to pay back CAC in target months
        const recommendedMonthlyPrice = cacVal / paybackMonths;

        // Assuming average lifespan of 24 months for LTV
        const estimatedLtv = recommendedMonthlyPrice * 24;

        // Assuming 1000 visitors * conversion rate
        const estimatedCustomers = 1000 * (convRate / 100);
        const estimatedMrr = estimatedCustomers * recommendedMonthlyPrice;

        setResults({
            recommendedPrice: Number(recommendedMonthlyPrice.toFixed(2)),
            ltv: Number(estimatedLtv.toFixed(0)),
            mrr: Number(estimatedMrr.toFixed(0)),
        });
        setHasCalculated(true);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is SaaS pricing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SaaS pricing refers to the subscription model used by software companies to charge customers monthly or annually."
                }
            },
            {
                "@type": "Question",
                "name": "How do SaaS companies calculate pricing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most SaaS companies use metrics such as CAC, lifetime value, and conversion rates to determine sustainable pricing."
                }
            },
            {
                "@type": "Question",
                "name": "What is a good SaaS price?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pricing depends on your market, but most SaaS tools range from $9 to $99 per month."
                }
            },
            {
                "@type": "Question",
                "name": "Why do SaaS startups fail with pricing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Many founders underprice their product, which limits revenue and growth."
                }
            },
            {
                "@type": "Question",
                "name": "How can BoostACart help ecommerce businesses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BoostACart captures leads when shoppers click add to cart, allowing store owners to recover abandoned purchases."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#020817] text-white/80 py-16 px-4 font-sans selection:bg-blue-500/30">
            {/* FAQ Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto space-y-16">

                {/* Hero Section */}
                <div className="text-center space-y-6">
                    <h1 className={`text-4xl md:text-6xl font-extrabold text-white tracking-tight`}>
                        SaaS Pricing Calculator <span className="text-blue-500 block text-3xl mt-2">(Free Tool)</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                        Choosing the right pricing for your SaaS product can determine whether your startup succeeds or fails. Many founders struggle with setting the correct price that balances customer acquisition and revenue growth.
                    </p>
                    <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
                        This free SaaS pricing calculator helps you estimate the optimal pricing for your product based on conversion rates, customer lifetime value, and expected growth.
                    </p>
                </div>

                {/* Calculator Interactive Section */}
                <div className="bg-white/5/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Inputs */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white mb-4">Pricing Variables</h3>

                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Customer Acquisition Cost (CAC)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                    <input
                                        type="number"
                                        value={cac}
                                        onChange={(e) => setCac(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Estimated Conversion Rate (%)</label>
                                <div className="relative">
                                    <Percent className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                    <input
                                        type="number"
                                        value={conversionRate}
                                        onChange={(e) => setConversionRate(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Target Payback Period (Months)</label>
                                <div className="relative">
                                    <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                    <input
                                        type="number"
                                        value={targetPayback}
                                        onChange={(e) => setTargetPayback(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleCalculate}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border border-white/10 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                            >
                                <Calculator className="w-5 h-5" />
                                Calculate Pricing
                            </button>
                        </div>

                        {/* Results */}
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

                            {!hasCalculated ? (
                                <div className="text-center text-white/40">
                                    <Calculator className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                    <p>Enter your metrics to generate<br />an optimal pricing recommendation.</p>
                                </div>
                            ) : (
                                <div className="space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div>
                                        <p className="text-sm font-medium text-white/60 mb-2 uppercase tracking-wider">Recommended Pricing</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-black text-white">${results.recommendedPrice}</span>
                                            <span className="text-xl text-white/40">/ month</span>
                                        </div>
                                    </div>

                                    <div className="h-px bg-slate-800 w-full" />

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-medium text-white/60 mb-1">Estimated LTV</p>
                                            <p className="text-2xl font-bold text-blue-400">${results.ltv}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white/60 mb-1">Projected MRR*</p>
                                            <p className="text-2xl font-bold text-green-400">${results.mrr}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-600">*Based on 1,000 monthly visitors</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* SEO Content Sections */}
                <article className="prose prose-invert max-w-none space-y-12">

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">What Is a SaaS Pricing Calculator?</h2>
                        <p className="text-lg leading-relaxed text-white/60 mb-4">
                            A SaaS pricing calculator helps founders determine the most effective price point for their product by analyzing:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-lg text-white/60">
                            <li>conversion rate</li>
                            <li>customer acquisition cost (CAC)</li>
                            <li>monthly recurring revenue (MRR)</li>
                            <li>lifetime value (LTV)</li>
                        </ul>
                        <p className="text-lg leading-relaxed text-white/60 mt-4">
                            Using these metrics, you can quickly estimate sustainable pricing that supports long-term growth and profitability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">How the Tool Works</h2>
                        <p className="text-lg leading-relaxed text-white/60">
                            This calculator takes your core acquisition metrics—how much it costs to acquire a user and how fast you want to make that money back (payback period)—and outputs a target monthly subscription price. It automatically models what your Monthly Recurring Revenue (MRR) might look like based on typical SaaS conversion rates, allowing you to fine-tune your financial model before officially launching. <Link href="/tools" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Explore our other free tools</Link> to help scale your business.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Why Pricing Matters for SaaS</h2>
                        <p className="text-lg leading-relaxed text-white/60 mb-4">Pricing directly affects:</p>
                        <ul className="list-disc pl-6 space-y-2 text-lg text-white/60 mb-4">
                            <li>overall revenue</li>
                            <li>conversion rates</li>
                            <li>user churn</li>
                            <li>profitability margins</li>
                        </ul>
                        <p className="text-lg leading-relaxed text-white/60">
                            Many SaaS founders underprice their products, which leads to slow growth, an inability to acquire customers via paid ads, and difficulty funding future development. If you don't charge enough to cover your Customer Acquisition Cost, your startup cannot scale. Tools like this calculator allow you to simulate pricing scenarios before launching to guarantee unit economics are viable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Example Pricing Calculation</h2>
                        <p className="text-lg leading-relaxed text-white/60 mb-4">Here is an example scenario for a new startup:</p>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-4 font-mono text-sm text-blue-300">
                            <p>CAC = $20</p>
                            <p>Conversion rate = 5%</p>
                            <p>Monthly target customers = 1000</p>
                            <p className="mt-4 text-white">Estimated price recommendation: $19–$29 per month</p>
                        </div>
                        <p className="text-lg leading-relaxed text-white/60">
                            By pricing at $19/month, the founder recoups their marketing cost in the first month (a 1-month payback period), creating a highly scalable cash-flow engine.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Benefits of Using This Tool</h2>
                        <p className="text-lg leading-relaxed text-white/60 mb-4">
                            Predictability is the lifeblood of software businesses. By identifying an optimal price early, you avoid the painful process of grandfathering old users or dealing with a backlash when you inevitably have to raise prices later. Furthermore, establishing clear financial benchmarks gives founders the confidence to aggressively spend on marketing knowing exactly what their maximum allowable CPA is.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Common Mistakes in SaaS Pricing</h2>
                        <p className="text-lg leading-relaxed text-white/60 mb-4">
                            Founders often price based on features rather than value. Another fatal error is blindly copying competitors without knowing their internal CAC or churn metrics. A $10/mo competitor might have massive organic distribution that lets them sustain low prices, whereas a new entrant relying on paid ads will quickly go bankrupt trying to match that price.
                        </p>
                    </section>
                </article>

                {/* Related Tools */}
                <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
                    <p className="text-white/60 mb-6">You may also find these tools helpful for planning your startup:</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <Link href="/tools/business-valuation-calculator" className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-500 transition-colors text-white font-medium text-sm text-center">
                            Business Valuation Calculator
                        </Link>
                        <Link href="/tools/startup-idea-validator" className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-500 transition-colors text-white font-medium text-sm text-center">
                            Startup Idea Validator
                        </Link>
                        <Link href="/tools/freelance-rate-calculator" className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-500 transition-colors text-white font-medium text-sm text-center">
                            Freelance Rate Calculator
                        </Link>
                        <Link href="/tools/meta-ads-profit-calculator" className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-500 transition-colors text-white font-medium text-sm text-center">
                            Ads Profit Calculator
                        </Link>
                    </div>
                </section>

                {/* BoostACart Product Section / CTA */}
                <section className="bg-gradient-to-br from-blue-900/40 to-blue-600/10 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Recover Lost Revenue with BoostACart</h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
                        Many SaaS companies and ecommerce stores lose potential customers when visitors abandon their carts before completing checkout.
                        BoostACart helps capture customer details when a visitor clicks Add to Cart, allowing businesses to recover lost sales through follow-up messages and calls. <Link href="/guides/how-to-recover-abandoned-carts" className="underline hover:text-white">Learn how to recover abandoned carts</Link>.
                    </p>
                    <Link href="/shopify-abandoned-cart-recovery" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border border-white/10 text-white font-bold px-8 py-4 rounded-full transition-all relative z-10 shadow-lg shadow-blue-900/50">
                        Try BoostACart Today <ArrowRight className="w-5 h-5" />
                    </Link>
                </section>

                {/* FAQ Section */}
                <section className="space-y-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                    </div>
                    <div className="grid gap-4 max-w-3xl mx-auto">
                        <div className="bg-white/5/50 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-white mb-2">What is SaaS pricing?</h3>
                            <p className="text-white/60">SaaS pricing refers to the subscription model used by software companies to charge customers monthly or annually.</p>
                        </div>
                        <div className="bg-white/5/50 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-white mb-2">How do SaaS companies calculate pricing?</h3>
                            <p className="text-white/60">Most SaaS companies use metrics such as CAC, lifetime value, and conversion rates to determine sustainable pricing.</p>
                        </div>
                        <div className="bg-white/5/50 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-white mb-2">What is a good SaaS price?</h3>
                            <p className="text-white/60">Pricing depends on your market, but most SaaS tools range from $9 to $99 per month.</p>
                        </div>
                        <div className="bg-white/5/50 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-white mb-2">Why do SaaS startups fail with pricing?</h3>
                            <p className="text-white/60">Many founders underprice their product, which limits revenue and growth.</p>
                        </div>
                        <div className="bg-white/5/50 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-white mb-2">How can BoostACart help ecommerce businesses?</h3>
                            <p className="text-white/60">BoostACart captures leads when shoppers click add to cart, allowing store owners to recover abandoned purchases. <Link href="/shopify-abandoned-cart-recovery" className="text-blue-400 hover:text-blue-300">Learn more</Link>.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
