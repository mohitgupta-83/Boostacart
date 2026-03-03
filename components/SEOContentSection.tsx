import React from "react";
import Link from "next/link";

interface SEOContentSectionProps {
    topic: string;
    relatedTools?: { name: string; url: string }[];
}

export default function SEOContentSection({ topic, relatedTools = [] }: SEOContentSectionProps) {
    return (
        <div className="mt-16 text-slate-300 space-y-8 animate-[fade-in-up_500ms_ease-out]">
            <section className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/50">
                <h2 className="text-3xl font-bold text-white mb-6">What Is {topic}?</h2>
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        {topic} is a critical metric for scaling and sustaining profitably in the competitive ecommerce space.
                        By carefully analyzing these variables, store owners can isolate inefficiencies in their sales funnel,
                        often leading to significant improvements in long-term revenue and customer acquisition cost margins.
                    </p>
                    <p className="leading-relaxed">
                        Unlike traditional analytics, understanding {topic} allows you to transition from reactive adjustments
                        to proactive strategy. Whether you're running ads on Meta, compiling data from Google Analytics, or
                        auditing your Shopify store performance, mastering this concept provides the transparency necessary to
                        scale your ad spend safely and optimize conversions.
                    </p>
                </div>
            </section>

            <section className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/50">
                <h2 className="text-3xl font-bold text-white mb-6">Why This Matters for Shopify Stores</h2>
                <p className="leading-relaxed mb-4">
                    Most Shopify merchants struggle with rising CPAs and shrinking margins. When you track {topic} accurately,
                    you uncover exactly where your profit is leaking. For example, high traffic but low checkout completions
                    often point to unchecked cart abandonment. Addressing this specific bottleneck can instantly increase ROAS
                    without you needing to spend another dollar on additional marketing.
                </p>
            </section>

            <section className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/50">
                <h2 className="text-3xl font-bold text-white mb-6">How to Improve This Metric</h2>
                <p className="leading-relaxed mb-6">
                    Improving {topic} requires a dual approach: optimizing your frontend user experience and deploying vigorous
                    backend recovery tactics. Reducing friction at checkout, enhancing trust signals on the product page, and
                    most importantly, leveraging intelligent lead-capture tools like BoostACart, enables you to recover the
                    customers who left your funnel right before the final step.
                </p>

                {relatedTools.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-slate-800">
                        <h3 className="text-xl font-semibold text-white mb-4">Explore Related Tools</h3>
                        <div className="flex flex-wrap gap-4">
                            {relatedTools.map((tool) => (
                                <Link
                                    key={tool.name}
                                    href={tool.url}
                                    className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-blue-600/20 hover:text-blue-400 transition-colors border border-slate-700 hover:border-blue-500/30"
                                >
                                    {tool.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}
