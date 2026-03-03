import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discount Impact Calculator – Free Ecommerce Calculator for Shopify",
    description: "Use our free Discount Impact Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://www.boostacart.com/tools/discount-impact-calculator"
    },
    openGraph: {
        title: "Discount Impact Calculator – Free Ecommerce Calculator for Shopify",
        description: "Use our free Discount Impact Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://www.boostacart.com/tools/discount-impact-calculator",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
