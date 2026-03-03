"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function ExitIntentModal() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        if (hasShown) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                showModal();
            }
        };

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollPosition + windowHeight >= documentHeight * 0.8) {
                showModal();
            }
        };

        const timer = setTimeout(() => {
            showModal();
        }, 40000);

        document.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, [hasShown]);

    const showModal = () => {
        if (!hasShown) {
            setIsVisible(true);
            setHasShown(true);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 pt-[20vh] px-4 animate-in fade-in duration-300">
            <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative shadow-blue-500/10 mb-auto">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-3xl font-bold text-white mb-4">
                    Before You Go — Want to Recover These Lost Sales?
                </h2>

                <p className="text-slate-300 text-lg mb-8">
                    Most Shopify stores recover 20–30% of abandoned carts using BoostACart.
                </p>

                <div className="flex flex-col gap-3">
                    <Link
                        href="/"
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 rounded-xl text-center transition-all shadow-lg hover:shadow-blue-500/25"
                        onClick={() => setIsVisible(false)}
                    >
                        See How It Works
                    </Link>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-3 rounded-xl transition-colors font-medium"
                    >
                        No Thanks
                    </button>
                </div>
            </div>
        </div>
    );
}
