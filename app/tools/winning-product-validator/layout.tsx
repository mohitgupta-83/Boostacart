import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Winning Product Validator – Free Ecommerce Calculator for Shopify",
    description: "Use our free Winning Product Validator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://boostacart.com/tools/winning-product-validator"
    },
    openGraph: {
        title: "Winning Product Validator – Free Ecommerce Calculator for Shopify",
        description: "Use our free Winning Product Validator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://boostacart.com/tools/winning-product-validator",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
