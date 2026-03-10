import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Roas Calculator – Free Ecommerce Calculator for Shopify",
    description: "Use our free Roas Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://boostacart.com/tools/roas-calculator"
    },
    openGraph: {
        title: "Roas Calculator – Free Ecommerce Calculator for Shopify",
        description: "Use our free Roas Calculator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://boostacart.com/tools/roas-calculator",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
