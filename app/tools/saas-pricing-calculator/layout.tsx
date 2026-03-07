import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SaaS Pricing Calculator | Find the Most Profitable Price",
    description: "Use our free SaaS Pricing Calculator to determine the most effective price point for your software subscription based on CAC, conversion rate, and LTV.",
    openGraph: {
        title: "SaaS Pricing Calculator | Find the Most Profitable Price",
        description: "Use our free SaaS Pricing Calculator to determine the most effective price point for your software subscription based on CAC, conversion rate, and LTV.",
        type: "website",
    },
};

export default function SaasPricingCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
