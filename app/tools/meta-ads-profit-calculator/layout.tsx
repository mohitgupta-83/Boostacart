import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meta Ads Profit Calculator – Free Ecommerce Calculator for Shopify",
    description: "Use our free Meta Ads Profit Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://boostacart.com/tools/meta-ads-profit-calculator"
    },
    openGraph: {
        title: "Meta Ads Profit Calculator – Free Ecommerce Calculator for Shopify",
        description: "Use our free Meta Ads Profit Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://boostacart.com/tools/meta-ads-profit-calculator",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
