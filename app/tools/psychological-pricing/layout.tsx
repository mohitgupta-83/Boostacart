import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Psychological Pricing – Free Ecommerce Calculator for Shopify",
    description: "Use our free Psychological Pricing to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://www.boostacart.com/tools/psychological-pricing"
    },
    openGraph: {
        title: "Psychological Pricing – Free Ecommerce Calculator for Shopify",
        description: "Use our free Psychological Pricing to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://www.boostacart.com/tools/psychological-pricing",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
