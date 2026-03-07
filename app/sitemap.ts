import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://boostacart.com'

    const appDir = path.join(process.cwd(), 'app')

    // Get all directories in app
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

    const sitemapData: MetadataRoute.Sitemap = allRoutes.map((route) => ({
        url: `${baseUrl}${route === '' ? '' : '/'}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : route === 'tools' ? 0.9 : 0.8,
    }))

    return sitemapData
}
