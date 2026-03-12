const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'app', 'tools');
const toolFolders = fs.readdirSync(toolsDir).filter(f => fs.statSync(path.join(toolsDir, f)).isDirectory());

toolFolders.forEach(folder => {
  const pagePath = path.join(toolsDir, folder, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf-8');
    
    // 1. Fix "use client" placement
    if (content.includes('"use client"')) {
      content = content.replace(/"use client"(\n|\r\n)?/g, ''); // Remove all existing instances
      content = '"use client"\n' + content; // Prepend to very top
    }
    
    // 2. Fix the unbalanced className strings
    // Problem: className={`${syne.className} some classes">
    // Should be: className={`${syne.className} some classes`}>
    content = content.replace(/className=\{`\$\{syne\.className\}([^"]+)"\>/g, 'className={`${syne.className}$1`}>');
    content = content.replace(/className=\{`\$\{syne\.className\}([^`]+)"\>/g, 'className={`${syne.className}$1`}>');
    content = content.replace(/className=\{`\$\{syne\.className\}(.*)"\>/g, 'className={`${syne.className}$1`}>');
    
    // 3. Fix the <h3 Enter Metrics> which has className={`${syne.className} text-xl font-bold text-white"> 
    // The previous regex might miss it if it's slightly different. Let's just do a generic replace:
    content = content.replace(/className=\{`\$\{syne\.className\}([^`]*)">/g, 'className={`${syne.className}$1`}>');

    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`Fully fixed syntax in ${folder}/page.tsx`);
  }
});
console.log('Fixed use client and jsx syntax errors across all tools.');
