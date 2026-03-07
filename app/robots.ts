import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/dashboard/", "/admin/", "/onboarding/", "/api/", "/auth/", "/embed/", "/widget/", "/setup/", "/protected/"],
        },
        sitemap: "https://boostacart.com/sitemap.xml",
    }
}
