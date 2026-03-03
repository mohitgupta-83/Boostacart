import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cpa Analyzer – Free Ecommerce Calculator for Shopify",
    description: "Use our free Cpa Analyzer to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://www.boostacart.com/tools/cpa-analyzer"
    },
    openGraph: {
        title: "Cpa Analyzer – Free Ecommerce Calculator for Shopify",
        description: "Use our free Cpa Analyzer to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://www.boostacart.com/tools/cpa-analyzer",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
