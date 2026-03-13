const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file === 'page.tsx') {
            addOpengraph(fullPath);
        }
    }
}

function addOpengraph(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Only process files with metadata but missing openGraph
    if (!content.includes('export const metadata') || content.includes('openGraph:')) return;
    if (content.includes('[') && filePath.includes('[')) return; // skip dynamic routes

    // Extract title and description from existing metadata
    const titleMatch = content.match(/title:\s*["'`]([^"'`\n]+)["'`]/);
    const descMatch = content.match(/description:\s*["'`]([^"'`\n]+)["'`]/);
    const canonicalMatch = content.match(/canonical:\s*["'`]([^"'`\n]+)["'`]/);

    if (!titleMatch || !descMatch) return;

    const title = titleMatch[1];
    const desc = descMatch[1];
    const url = canonicalMatch ? canonicalMatch[1] : 'https://boostacart.com';

    const ogBlock = `  openGraph: {\n    title: "${title}",\n    description: "${desc}",\n    url: "${url}",\n    type: "website",\n    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630, alt: "${title}" }]\n  },\n`;

    // Inject before the closing brace of the metadata block
    // Find the alternates block or description, and inject after
    if (content.includes('alternates:')) {
        content = content.replace(/(alternates:\s*\{[^}]+\},?\s*\n)(\s*\};)/, `$1${ogBlock}$2`);
    } else {
        content = content.replace(/(description:\s*["'`][^"'`\n]+["'`],?\s*\n)(\s*\};)/, `$1${ogBlock}$2`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    const rel = path.relative(path.join(__dirname, '..', 'app'), filePath).replace(/\\/g, '/');
    console.log(`Added OpenGraph to: ${rel}`);
}

processDirectory(path.join(__dirname, '..', 'app'));
console.log('Done adding OpenGraph tags.');
