import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Break Even Roas – Free Ecommerce Calculator for Shopify",
    description: "Use our free Break Even Roas to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://boostacart.com/tools/break-even-roas"
    },
    openGraph: {
        title: "Break Even Roas – Free Ecommerce Calculator for Shopify",
        description: "Use our free Break Even Roas to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://boostacart.com/tools/break-even-roas",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
