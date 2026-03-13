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
            updateCanonical(fullPath);
        }
    }
}

function updateCanonical(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Compute URL path
    let relPath = path.relative(path.join(__dirname, '../app'), filePath);
    relPath = relPath.replace(/\\/g, '/').replace(/\/page\.tsx$/, '').replace(/^page\.tsx$/, '');
    
    if (relPath.includes('[')) return; // Ignore dynamic variants
    
    const urlPath = `https://boostacart.com${relPath ? '/' + relPath : ''}`;
    
    let updated = false;

    // Check if the file has metadata 
    if (content.includes('export const metadata') && !content.includes('canonical:')) {
        // If it's a strongly typed metadata block, we inject inside alternates
        if (content.includes('alternates: {')) {
             content = content.replace(/alternates:\s*\{/, `alternates: {\n    canonical: "${urlPath}",`);
        } else {
             content = content.replace(/(export const metadata[^=]*=\s*\{)/s, `$1\n  alternates: {\n    canonical: "${urlPath}"\n  },`);
        }
        updated = true;
    } else if (!content.includes('export const metadata') && !content.includes('"use client"') && !content.includes("'use client'")) {
        const metaStr = `\nexport const metadata = {\n  alternates: { canonical: "${urlPath}" }\n};\n\n`;
        const lastImportIndex = content.lastIndexOf('import ');
        if (lastImportIndex !== -1) {
            const endOfImport = content.indexOf('\n', lastImportIndex);
            if(endOfImport !== -1) {
              content = content.substring(0, endOfImport) + metaStr + content.substring(endOfImport);
            } else {
              content = metaStr + content; 
            }
        } else {
             content = metaStr + content;
        }
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated canonical for /${relPath}`);
    }
}

processDirectory(path.join(__dirname, '../app'));
