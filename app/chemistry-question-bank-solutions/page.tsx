import fs from "fs/promises";
import path from "path";
import ClientRenderer from "./ClientRenderer";

export const metadata = {
    title: "FYJC Chemistry Solutions Question Bank",
    description: "Chemistry questions bank solutions for FYJC exams with a modern, fast, and optimized viewing experience.",
    robots: {
        index: false,
        follow: false,
    }
};

export default async function ChemistryQuestionBankPage() {
    const dataDir = path.join(process.cwd(), "data");
    let content = "";

    try {
        // Read all markdown files in the data directory and concatenate them
        const files = await fs.readdir(dataDir);
        const mdFiles = files.filter(f => f.toLowerCase().endsWith('.md')).sort();

        if (mdFiles.length === 0) {
            content = "## No Solutions Found\nPlease place the markdown solution files in the `data` directory.";
        } else {
            for (const file of mdFiles) {
                const fileContent = await fs.readFile(path.join(dataDir, file), "utf8");
                content += `\n\n${fileContent}`;
            }
        }
    } catch (error) {
        console.error("Failed to read markdown directory/files", error);
        content = "## Error Loading Solutions\nThe system encountered an error loading the files. Please ensure the `data` directory exists and contains the `.md` files.";
    }

    return <ClientRenderer markdownContent={content} />;
}
