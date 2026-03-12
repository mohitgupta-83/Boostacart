const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'app', 'tools');
const toolFolders = fs.readdirSync(toolsDir).filter(f => fs.statSync(path.join(toolsDir, f)).isDirectory());

const replacements = [
  // Container Backgrounds
  { from: /bg-slate-900\/80/g, to: 'bg-white/5' },
  { from: /bg-slate-950/g, to: 'bg-white/5' },
  { from: /bg-slate-900/g, to: 'bg-white/5' },
  { from: /border-slate-800/g, to: 'border-white/10' },
  
  // Inputs
  { from: /bg-slate-950 border border-slate-800/g, to: 'bg-white/5 border border-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' },
  { from: /placeholder:text-slate-600/g, to: 'placeholder:text-white/20' },
  { from: /text-slate-500/g, to: 'text-white/40' },
  { from: /text-slate-400/g, to: 'text-white/60' },
  { from: /text-slate-300/g, to: 'text-white/80' },
  
  // Primary Buttons
  { from: /bg-blue-600 hover:bg-blue-500/g, to: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border border-white/10' },
  { from: /bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600/g, to: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 hover:brightness-110 border border-white/10' },
  
  // Specific flat colored backgrounds
  { from: /bg-[#020817]/g, to: 'bg-[#04091A]' },
  
  // Specific gradients
  { from: /bg-gradient-to-r from-slate-900 to-slate-900\/50/g, to: 'bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 backdrop-blur-md' },
  { from: /bg-gradient-to-r from-\[\#0a1128\] to-\[\#1a1025\]/g, to: 'bg-gradient-to-br from-[#0b1026] to-[#04091A]' },
  
  // Text Gradients
  { from: /from-blue-400 to-blue-600/g, to: 'from-cyan-400 to-fuchsia-400' }
];

toolFolders.forEach(folder => {
  const pagePath = path.join(toolsDir, folder, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf-8');
    
    // Always add Outfit and Syne to body if not exist
    if (!content.includes('next/font/google')) {
      content = `import { Syne, Outfit } from 'next/font/google'\nconst syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })\nconst outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })\n` + content;
    }
    
    // If it mentions min-h-screen bg-[#020817] directly (like ROAS), replace it with outfit class
    content = content.replace(/className="min-h-screen bg-\[\#020817\] text-white py-16 px-4 font-sans select-none"/g, 'className={`min-h-screen bg-[#04091A] text-white py-16 px-4 select-none relative overflow-hidden ${outfit.className}`}');
    content = content.replace(/className="max-w-4xl mx-auto"/g, 'className="max-w-4xl mx-auto relative z-10"');
    
    replacements.forEach(rep => {
      content = content.replace(rep.from, rep.to);
    });

    // Syne Font for Headers
    content = content.replace(/className="text-4xl/g, 'className={`${syne.className} text-4xl');
    content = content.replace(/className="text-lg font-semibold/g, 'className={`${syne.className} text-xl font-bold');
    
    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`Updated ${folder}/page.tsx`);
  }
});
console.log('All individual tool UIs upgraded!');
