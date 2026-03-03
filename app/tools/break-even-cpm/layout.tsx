import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Break Even Cpm – Free Ecommerce Calculator for Shopify",
    description: "Use our free Break Even Cpm to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://www.boostacart.com/tools/break-even-cpm"
    },
    openGraph: {
        title: "Break Even Cpm – Free Ecommerce Calculator for Shopify",
        description: "Use our free Break Even Cpm to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://www.boostacart.com/tools/break-even-cpm",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
