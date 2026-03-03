const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, 'app', 'tools');
const tools = fs.readdirSync(toolsDir).filter(f => fs.statSync(path.join(toolsDir, f)).isDirectory());

tools.forEach(tool => {
    const toolName = tool.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const layoutPath = path.join(toolsDir, tool, 'layout.tsx');

    const content = `import { Metadata } from "next";

export const metadata: Metadata = {
    title: "${toolName} – Free Ecommerce Calculator for Shopify",
    description: "Use our free ${toolName} to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
    alternates: {
        canonical: "https://www.boostacart.com/tools/${tool}"
    },
    openGraph: {
        title: "${toolName} – Free Ecommerce Calculator for Shopify",
        description: "Use our free ${toolName} to calculate and optimize your Shopify store metrics. Discover data-driven insights to improve your conversion rates and ecommerce profitability.",
        url: "https://www.boostacart.com/tools/${tool}",
        type: "website"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
`;

    fs.writeFileSync(layoutPath, content);
});
console.log("Successfully created layout.tsx for all tools.");
