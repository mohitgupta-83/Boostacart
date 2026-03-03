import { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ToolLayoutProps {
    title: string;
    description: string[];
    children: ReactNode;
    ctaTitle: string;
    ctaDescription: string;
}

export default function ToolLayout({
    title,
    description,
    children,
    ctaTitle,
    ctaDescription
}: ToolLayoutProps) {
    return (
        <div className="min-h-screen bg-[#020817] text-white py-16 px-4 font-sans select-none">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/tools"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Tools
                </Link>

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
                        {title}
                    </h1>
                    <div className="text-slate-400 text-lg max-w-2xl mx-auto space-y-4">
                        {description.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                </div>

                {children}

                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">{ctaTitle}</h3>
                        <p className="text-slate-400 mb-6">
                            {ctaDescription}
                        </p>
                        <Link href="/auth/sign-up" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3 rounded-full transition-colors active:scale-[0.98]">
                            Start Growing With BoostACart
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
