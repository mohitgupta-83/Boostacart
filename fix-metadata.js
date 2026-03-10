const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory()) {
            processDir(path.join(dir, entry.name));
        } else if (entry.name === 'page.tsx') {
            let content = fs.readFileSync(path.join(dir, entry.name), 'utf8');
            if (content.includes('export const metadata') && !content.includes('openGraph')) {
                // Extract title and description
                const titleMatch = content.match(/title:\s*["']([^\"']+)["']/);
                const descMatch = content.match(/description:\s*["']([^\"']+)["']/m);
                // What if description is multi-line string?
                // Let's use a more robust regex for description if needed, or simply extract the whole value.
                if (!titleMatch) continue;

                const title = titleMatch[1];
                let description = "";

                // Try to find description block
                const descRegex = /description:\s*([^,}]+)/;
                const match = content.match(descRegex);
                if (match) {
                    description = match[1].trim().replace(/^['"`]/, '').replace(/['"`]$/, '');
                } else {
                    description = "BoostACart captures email and phone numbers at Add-to-Cart and follows up to recover lost sales.";
                }

                // Get slug
                let relativePath = path.relative(path.join(__dirname, 'app'), dir);
                relativePath = relativePath.replace(/\\/g, '/');
                if (relativePath === '') relativePath = '';
                else relativePath = '/' + relativePath;

                const newMetadataBlock = `export const metadata: Metadata = {
  title: "${title}",
  description: "${description.replace(/"/g, '\\"')}",
  alternates: {
    canonical: "https://boostacart.com${relativePath}"
  },
  openGraph: {
    title: "${title}",
    description: "${description.replace(/"/g, '\\"')}",
    url: "https://boostacart.com${relativePath}",
    type: "website"
  }
}`;

                // Replace the whole metadata block
                // It usually looks like `export const metadata: Metadata = { ... }`
                const newContent = content.replace(/export const metadata:?(\s*Metadata)?\s*=\s*{[^}]+}/s, newMetadataBlock);

                if (newContent !== content) {
                    fs.writeFileSync(path.join(dir, entry.name), newContent);
                    console.log(`Updated ${path.join(dir, entry.name)}`);
                }
            }
        }
    }
}

processDir(path.join(__dirname, 'app'));
