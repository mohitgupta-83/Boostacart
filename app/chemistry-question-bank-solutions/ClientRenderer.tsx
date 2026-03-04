"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronRight, BookOpen, Atom, Beaker } from "lucide-react";
import Link from "next/link";

export default function ClientRenderer({ markdownContent }: { markdownContent: string }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Animation variants
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
            <style dangerouslySetInnerHTML={{
                __html: `
              .katex-display { overflow-x: auto; overflow-y: hidden; padding-bottom: 0.5rem; }
              body { overflow-x: hidden; width: 100%; }
            `}} />
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

                <header className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/10 backdrop-blur-md shadow-2xl shadow-emerald-500/10"
                    >
                        <Atom className="w-8 h-8 text-emerald-400 mr-3 animate-pulse" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 tracking-wider uppercase">
                            FYJC Final Exams 2026
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
                    >
                        Chemistry Question Bank <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-300">
                            Solutions Guide
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
                    >
                        A premium, highly-optimized study vault designed for ultimate exam preparation. Contains answers to all major sections.
                    </motion.p>
                </header>

                {/* Content Card container */}
                <motion.main
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-2xl rounded-3xl p-6 md:p-12"
                >
                    <div className="prose prose-invert max-w-full overflow-hidden prose-lg break-words">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm, remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                            components={{
                                h1: ({ node, ...props }) => (
                                    <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-black text-white mt-16 mb-8 pb-4 border-b border-white/10 flex items-center gap-3">
                                        <BookOpen className="w-8 h-8 text-blue-400" />
                                        {props.children}
                                    </motion.h1>
                                ),
                                h2: ({ node, ...props }) => (
                                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-emerald-300 mt-12 mb-6 flex items-center gap-2">
                                        <Beaker className="w-6 h-6 opacity-70" />
                                        {props.children}
                                    </motion.h2>
                                ),
                                h3: ({ node, ...props }) => (
                                    <motion.h3 variants={itemVariants} className="text-xl font-semibold text-blue-300 mt-10 mb-4">
                                        {props.children}
                                    </motion.h3>
                                ),
                                h4: ({ node, ...props }) => (
                                    <h4 className="text-lg font-medium text-slate-200 mt-8 mb-3">
                                        {props.children}
                                    </h4>
                                ),
                                p: ({ node, ...props }) => {
                                    // Safely extract text content from the syntax tree node instead of React children
                                    const extractText = (nodes: any[]): string => {
                                        if (!nodes) return '';
                                        return nodes.map(n => n.type === 'text' ? n.value : (n.children ? extractText(n.children) : '')).join('');
                                    };
                                    const content = extractText(node?.children as any[]);
                                    const isAnswer = content.includes('✅');
                                    return (
                                        <motion.p variants={itemVariants} className={`text-slate-300 leading-relaxed mb-6 ${isAnswer ? 'bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-emerald-100 font-medium my-4' : ''}`}>
                                            {props.children}
                                        </motion.p>
                                    );
                                },
                                strong: ({ node, ...props }) => <strong className="font-semibold text-emerald-400">{props.children}</strong>,
                                blockquote: ({ node, ...props }) => (
                                    <motion.blockquote variants={itemVariants} className="border-l-4 border-blue-500/70 pl-6 py-3 italic bg-blue-500/5 text-slate-300 my-8 rounded-r-2xl shadow-inner text-lg">
                                        {props.children}
                                    </motion.blockquote>
                                ),
                                ul: ({ node, ...props }) => (
                                    <motion.ul variants={itemVariants} className="list-none space-y-3 mb-8 pl-2">
                                        {props.children}
                                    </motion.ul>
                                ),
                                ol: ({ node, ...props }) => (
                                    <motion.ol variants={itemVariants} className="list-decimal text-emerald-200 space-y-3 mb-8 pl-6 marker:text-emerald-500/70 marker:font-bold">
                                        {props.children}
                                    </motion.ol>
                                ),
                                li: ({ node, ...props }) => (
                                    <li className="relative flex items-start text-slate-300">
                                        <span className="mr-3 mt-1 text-blue-400 block w-4 h-4 flex-shrink-0">
                                            <ChevronRight className="w-4 h-4" />
                                        </span>
                                        <span className="flex-1">{props.children}</span>
                                    </li>
                                ),
                                table: ({ node, ...props }) => (
                                    <motion.div variants={itemVariants} className="overflow-x-auto w-full max-w-full my-10 rounded-2xl border border-white/10 shadow-xl bg-black/20">
                                        <table className="w-full text-left border-collapse min-w-[600px]">
                                            {props.children}
                                        </table>
                                    </motion.div>
                                ),
                                th: ({ node, ...props }) => (
                                    <th className="bg-white/5 font-semibold text-white p-5 border-b border-white/10 text-lg">
                                        {props.children}
                                    </th>
                                ),
                                td: ({ node, ...props }) => (
                                    <td className="p-5 border-b border-white/[0.05] text-slate-300 bg-black/10">
                                        {props.children}
                                    </td>
                                ),
                                hr: ({ node, ...props }) => (
                                    <motion.hr variants={itemVariants} className="border-white/10 my-16 max-w-2xl mx-auto opacity-50 block h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent border-0" />
                                ),
                                code: ({ node, className, children, ...props }) => {
                                    const match = /language-(\w+)/.exec(className || "");
                                    const isInline = !match;
                                    return isInline ? (
                                        <code className="bg-white/10 text-emerald-200 px-2 py-0.5 rounded-md font-mono text-sm border border-white/5">
                                            {children}
                                        </code>
                                    ) : (
                                        <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-5 my-6 overflow-x-auto shadow-2xl">
                                            <code className="text-blue-300 font-mono text-sm">
                                                {children}
                                            </code>
                                        </div>
                                    );
                                },
                            }}
                        >
                            {markdownContent}
                        </ReactMarkdown>
                    </div>
                </motion.main>

                <footer className="mt-20 text-center pb-10">
                    <p className="text-slate-500 text-sm">
                        This page is temporarily available for the final exams. Good luck!
                    </p>
                </footer>
            </div>
        </div>
    );
}
