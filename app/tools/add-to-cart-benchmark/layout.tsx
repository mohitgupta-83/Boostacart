import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add To Cart Benchmark – Free Ecommerce Calculator for Shopify",
    description: "Use our free Add To Cart Benchmark to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://boostacart.com/tools/add-to-cart-benchmark"
    },
    openGraph: {
        title: "Add To Cart Benchmark – Free Ecommerce Calculator for Shopify",
        description: "Use our free Add To Cart Benchmark to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://boostacart.com/tools/add-to-cart-benchmark",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
