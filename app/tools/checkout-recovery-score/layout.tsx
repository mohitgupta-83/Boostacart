import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout Recovery Score – Free Ecommerce Calculator for Shopify",
    description: "Use our free Checkout Recovery Score to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://www.boostacart.com/tools/checkout-recovery-score"
    },
    openGraph: {
        title: "Checkout Recovery Score – Free Ecommerce Calculator for Shopify",
        description: "Use our free Checkout Recovery Score to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://www.boostacart.com/tools/checkout-recovery-score",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
