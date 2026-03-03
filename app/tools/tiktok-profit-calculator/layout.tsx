import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tiktok Profit Calculator – Free Ecommerce Calculator for Shopify",
    description: "Use our free Tiktok Profit Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://www.boostacart.com/tools/tiktok-profit-calculator"
    },
    openGraph: {
        title: "Tiktok Profit Calculator – Free Ecommerce Calculator for Shopify",
        description: "Use our free Tiktok Profit Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://www.boostacart.com/tools/tiktok-profit-calculator",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
