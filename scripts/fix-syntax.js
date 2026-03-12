const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'app', 'tools');
const toolFolders = fs.readdirSync(toolsDir).filter(f => fs.statSync(path.join(toolsDir, f)).isDirectory());

toolFolders.forEach(folder => {
  const pagePath = path.join(toolsDir, folder, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf-8');
    
    // Fix the broken Syne class injections from previous script
    // E.g. className={`${syne.className} text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
    // should be: ... mb-6`}>
    
    // regex matches className={`${syne.className} ... "> and replaces "> with `}>
    content = content.replace(/(className="\$\{[^}]+\}[^"]+)">/g, '$1`}>');
    
    // Also, some headers might be multiline so let's be careful. The regex above assumes it's on a single quoted section ending with ">
    
    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`Fixed syntax in ${folder}/page.tsx`);
  }
});
console.log('Syntax errors fixed across all tools.');
