import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, IndianRupee } from "lucide-react";

export const metadata = {
    title: "Case Study: How a Shopify Store Recovered ₹1,87,000 in 30 Days",
    description: "Read how an average Shopify store used BoostACart to recover over ₹1,87,000 in lost add-to-cart leads in just 30 days without increasing ad spend."
};

export default function CartRecoveryCaseStudy() {
    return (
        <div className="min-h-screen bg-[#020617] text-white py-20 px-4 font-sans relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <Link href="/tools" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Tools
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
                        How a Shopify Store Recovered <span className="text-white">₹1,87,000</span> in 30 Days
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        A behind-the-scenes look at how we implemented exit-intent capture to recover abandoned carts that were previously invisible.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12">
                    {/* The Problem */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white mb-6">The Problem: High Traffic, Low Margins</h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-[#0f172a] rounded-2xl p-6 border border-slate-800">
                                <p className="text-slate-400 text-sm mb-2">Ad Spend</p>
                                <p className="text-3xl font-bold text-red-400">₹4.2L</p>
                                <p className="text-xs text-red-500 mt-2">Monthly Budget</p>
                            </div>
                            <div className="bg-[#0f172a] rounded-2xl p-6 border border-slate-800">
                                <p className="text-slate-400 text-sm mb-2">Add-to-Carts</p>
                                <p className="text-3xl font-bold text-yellow-400">1,450</p>
                                <p className="text-xs text-yellow-500 mt-2">Solid Interest</p>
                            </div>
                            <div className="bg-[#0f172a] rounded-2xl p-6 border border-slate-800">
                                <p className="text-slate-400 text-sm mb-2">Lost Revenue</p>
                                <p className="text-3xl font-bold text-white">72%</p>
                                <p className="text-xs text-slate-500 mt-2">Abandonment Rate</p>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none text-slate-300">
                            <p className="text-lg leading-relaxed">
                                Most of their ad spend was disappearing. They had a solid funnel: good ads, good product page, but the moment a customer added an item to their cart, 72% vanished before reaching the checkout page. In the Shopify backend, these weren't "Abandoned Checkouts"—they were just "ghosts" who never even gave an email address.
                            </p>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white mb-6">The Implementation</h2>

                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1 space-y-6">
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    We installed BoostACart to trigger an intelligent exit-intent modal *only* when a user had items in their cart but attempted to leave the site.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-300">Offered a highly-targeted 10% personalized discount code.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-300">Required phone number to unlock the code.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-300">Automated SMS sequence for those who still didn't purchase.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-1 w-full bg-[#0a0f1c] border border-slate-800 rounded-xl p-4 shadow-xl">
                                {/* Mockup of Dashboard */}
                                <div className="border border-slate-800/50 rounded-lg p-6 bg-slate-950">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-semibold text-slate-400">Live Dashboard</span>
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[85%]"></div>
                                        </div>
                                        <div className="flex justify-between text-xs text-slate-500">
                                            <span>Capture Rate</span>
                                            <span className="text-green-400 font-bold">18.4%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Results */}
                    <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                        <div className="flex items-center gap-4 mb-8">
                            <TrendingUp className="w-10 h-10 text-blue-400" />
                            <h2 className="text-3xl font-bold text-white">The Recovery (Month 1)</h2>
                        </div>

                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Instead of paying Mark Zuckerberg more money for new traffic, they extracted pure profit from the traffic they already owned.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                <p className="text-slate-400 mb-2">Total Contacts Captured</p>
                                <p className="text-4xl font-extrabold text-white">312</p>
                            </div>
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                <p className="text-slate-400 mb-2">Revenue Recovered</p>
                                <p className="text-4xl font-extrabold text-green-400 flex items-center">
                                    <IndianRupee className="w-8 h-8" />
                                    1,87,420
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main CTA */}
                <div className="mt-20 text-center bg-slate-900 border border-slate-800 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Stop Losing Revenue to the "Ghost" Abandoners</h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                        Install BoostACart in 2 minutes and start capturing emails and phone numbers before your customers leave forever.
                    </p>
                    <Link
                        href="/auth/sign-up"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Start Capturing Add-to-Cart Leads
                    </Link>
                </div>

            </div>
        </div>
    );
}
