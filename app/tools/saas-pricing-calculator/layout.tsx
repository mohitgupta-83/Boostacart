import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Saas Pricing Calculator – Free Ecommerce Calculator for Shopify",
    description: "Use our free Saas Pricing Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://boostacart.com/tools/saas-pricing-calculator"
    },
    openGraph: {
        title: "Saas Pricing Calculator – Free Ecommerce Calculator for Shopify",
        description: "Use our free Saas Pricing Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://boostacart.com/tools/saas-pricing-calculator",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
