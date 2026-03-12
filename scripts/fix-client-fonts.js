const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'app', 'tools');
const toolFolders = fs.readdirSync(toolsDir).filter(f => fs.statSync(path.join(toolsDir, f)).isDirectory());

toolFolders.forEach(folder => {
  const pagePath = path.join(toolsDir, folder, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf-8');
    
    // Remove imports and consts for next/font/google
    content = content.replace(/import \{ Syne, Outfit \} from 'next\/font\/google'(\n|\r\n)?/g, '');
    content = content.replace(/const syne = Syne\(\{ subsets: \['latin'\], weight: \['400', '600', '700', '800'\] \}\)(\n|\r\n)?/g, '');
    content = content.replace(/const outfit = Outfit\(\{ subsets: \['latin'\], weight: \['300', '400', '500', '600'\] \}\)(\n|\r\n)?/g, '');
    
    // Remove standard className references
    content = content.replace(/\$\{syne\.className\} /g, '');
    content = content.replace(/\$\{syne\.className\}/g, '');
    content = content.replace(/\$\{outfit\.className\} /g, '');
    content = content.replace(/\$\{outfit\.className\}/g, '');
    content = content.replace(/ \$\{outfit\.className\}/g, '');
    
    // Clean up empty template literals if any were created like className={`${}`} -> className=""
    content = content.replace(/className=\{`\s*`\}/g, '');
    content = content.replace(/className=\{`\s+/g, 'className={`');
    
    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`Cleaned fonts from ${folder}/page.tsx`);
  }
});
console.log('Successfully stripped client-side fonts to fix hydration runtime issues!');
