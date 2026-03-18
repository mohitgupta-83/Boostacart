import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const HIGH_PRIORITY_CORE = ['', 'pricing', 'features', 'about', 'tools']

const COMPARISON_PAGES = [
    'boostacart-vs-klaviyo', 'boostacart-vs-recart', 'boostacart-vs-cartloop',
    'boostacart-vs-shopify-email', 'klaviyo-alternative', 'recart-alternative',
    'cartloop-alternative', 'cart-recovery-tool-alternative', 'privy-alternative',
    'omnisend-alternative', 'pushowl-alternative', 'tidio-alternative-for-shopify',
    'best-recart-alternatives', 'comparisons', 'alternatives'
]

const CASE_STUDY_PAGES = [
    'case-study', 'case-study-precheckout-email-capture', 'case-study-recovered-37-orders',
    'dropshipping-cart-recovery-case-study', 'whatsapp-cart-recovery-case-study',
    'boostacart-results', 'boostacart-reviews', 'boostacart-user-feedback', 'case-studies'
]

const LEGAL_PAGES = ['privacy', 'terms', 'contact', 'about', 'protected', 'setup']

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://boostacart.com'

    const appDir = path.join(process.cwd(), 'app')

    const dirs = fs.readdirSync(appDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)

    const excludeDirs = [
        'api', 'auth', 'dashboard', 'admin', 'embed', 'widget',
        'protected', 'onboarding', 'memohit', 'setup', 'tools'
    ]

    const pages = dirs.filter((dir) => !excludeDirs.includes(dir))

    // Get all tools
    const toolsDir = path.join(process.cwd(), 'app', 'tools')
    let tools: string[] = []
    if (fs.existsSync(toolsDir)) {
        tools = fs.readdirSync(toolsDir, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => `tools/${dirent.name}`)
    }

    const allRoutes = ['', 'tools', ...pages, ...tools]

    function getPriority(route: string): number {
        if (route === '') return 1.0
        if (route === 'pricing' || route === 'features') return 0.9
        if (route === 'tools') return 0.9
        if (COMPARISON_PAGES.includes(route)) return 0.8
        if (CASE_STUDY_PAGES.includes(route)) return 0.7
        if (route.startsWith('tools/')) return 0.7
        if (LEGAL_PAGES.includes(route)) return 0.3
        return 0.7 // Default for use-case pages
    }

    function getChangeFrequency(route: string): 'monthly' | 'weekly' | 'daily' | 'always' | 'hourly' | 'yearly' | 'never' {
        if (route === '' || route === 'pricing') return 'weekly'
        if (LEGAL_PAGES.includes(route)) return 'monthly'
        return 'weekly'
    }

    const sitemapData: MetadataRoute.Sitemap = allRoutes.map((route) => ({
        url: `${baseUrl}${route === '' ? '' : '/'}${route}`,
        lastModified: new Date(),
        changeFrequency: getChangeFrequency(route),
        priority: getPriority(route),
    }))

    return sitemapData
}
