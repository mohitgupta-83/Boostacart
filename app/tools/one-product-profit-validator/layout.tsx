import { Metadata } from "next";

export const metadata: Metadata = {
    title: "One Product Profit Validator – Free Ecommerce Calculator for Shopify",
    description: "Use our free One Product Profit Validator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://boostacart.com/tools/one-product-profit-validator"
    },
    openGraph: {
        title: "One Product Profit Validator – Free Ecommerce Calculator for Shopify",
        description: "Use our free One Product Profit Validator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://boostacart.com/tools/one-product-profit-validator",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
