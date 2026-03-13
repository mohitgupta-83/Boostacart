import React from "react";
import { Syne } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

interface FAQSectionProps {
    topic: string;
}

export default function FAQSection({ topic }: FAQSectionProps) {
    const topicLower = topic.toLowerCase();
    
    // Specifically request specific questions from the user's prompt alongside dynamic ones
    const faqs = [
        {
            question: "What is ecommerce profit margin?",
            answer: "Ecommerce profit margin is the percentage of revenue remaining after deducting the costs associated with producing and selling goods. It reveals the financial health of your store and indicates whether your pricing structure and marketing spend are sustainable for long-term growth."
        },
        {
            question: "How do you calculate ROAS?",
            answer: "Return on Ad Spend (ROAS) is calculated by dividing your total revenue generated from ads by your total ad spend. For example, if you spend $1,000 on ads and generate $5,000 in revenue, your ROAS is a 5x return or 500%."
        },
        {
            question: "What is a good conversion rate?",
            answer: "A good ecommerce conversion rate typically falls between 2% and 3%, though top-performing stores can push past 5%. Conversion rates vary significantly by industry, traffic source, and average order value. Implementing cart recovery solutions is the easiest way to instantly bump this metric."
        },
        {
            question: `Why is calculating ${topicLower} necessary for scaling?`,
            answer: `If you attempt to scale traffic without a clear understanding of your ${topicLower}, you risk amplifying losses rather than scaling profits. Precision tracking isolates exactly which components of your sales funnel are bleeding ad spend and which are driving sustainable growth.`
        },
        {
            question: `Does tracking ${topicLower} help reduce CPA?`,
            answer: `Absolutely. By accurately measuring your ${topicLower}, you gain hard data on which ad variations, audience segments, and product bundles are underperforming. Reallocating budget away from those losers and into your winners naturally decreases your overarching Customer Acquisition Cost (CPA).`
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
        <section className="mt-16 bg-[#0b102b]/30 p-8 rounded-[2rem] border border-white/5 relative z-10">
            <h2 className={`${syne.className} text-3xl font-bold text-white mb-8`}>Frequently Asked Questions</h2>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 shadow-md">
                        <h3 className="text-xl font-bold text-white mb-3 flex gap-3">
                            <span className="text-cyan-400 font-black">Q.</span>
                            {faq.question}
                        </h3>
                        <p className="text-indigo-100/70 leading-relaxed pl-8">
                            <strong className="text-emerald-400 font-bold mr-2">A.</strong> 
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
