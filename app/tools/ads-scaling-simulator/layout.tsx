import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ads Scaling Simulator – Free Ecommerce Calculator for Shopify",
    description: "Use our free Ads Scaling Simulator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://www.boostacart.com/tools/ads-scaling-simulator"
    },
    openGraph: {
        title: "Ads Scaling Simulator – Free Ecommerce Calculator for Shopify",
        description: "Use our free Ads Scaling Simulator to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://www.boostacart.com/tools/ads-scaling-simulator",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
