import React from "react";

interface FAQSectionProps {
    topic: string;
}

export default function FAQSection({ topic }: FAQSectionProps) {
    const faqs = [
        {
            question: `What is a good ${topic} for a Shopify store?`,
            answer: `A healthy metric for ${topic} depends highly on your specific niche, Average Order Value (AOV), and baseline profit margins. Most profitable ecommerce businesses aim for benchmarks that allow sustainable customer acquisition without dipping heavily into recurring net profit.`
        },
        {
            question: "How can I improve my metrics without increasing ad spend?",
            answer: "Optimizing your checkout flow, using trust badges, offering clear shipping policies, and employing add-to-cart lead capture plugins like BoostACart are proven strategies to boost your conversion rate and improve bottom-line metrics without higher CPA."
        },
        {
            question: "What is the average cart abandonment rate?",
            answer: "Across the ecommerce industry, the average cart abandonment rate is approximately 70%. Specifically for mobile shoppers, this number can be even higher. Recovering just 10-20% of these abandoned carts has a monumental impact on overall store profitability."
        },
        {
            question: "Why should I track this specific metric regularly?",
            answer: `Consistently tracking ${topic} allows you to identify trends and seasonal shifts in your business before they become critical issues. It provides an objective baseline to compare the performance of new marketing campaigns or website redesigns against historic data.`
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="mt-16 bg-slate-900/40 p-8 rounded-2xl border border-slate-800/50">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-slate-800 pb-6 last:border-0 last:pb-0">
                        <h3 className="text-xl font-semibold text-slate-200 mb-3">{faq.question}</h3>
                        <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
