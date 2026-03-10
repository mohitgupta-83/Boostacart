"use client"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"
import type { User, Session, AuthChangeEvent } from "@supabase/supabase-js"

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const supabase = createClient()

        // Check current session
        supabase.auth.getUser().then((res: any) => {
            setUser(res.data.user)
            setLoading(false)
        })

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [])

    return (
        <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800/50 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-3">
                        <Image src="/favicon.png" alt="BoostACart Logo" width={32} height={32} className="rounded-lg" />
                        <span className="text-2xl font-bold text-white">BoostACart</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/contact"
                            className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors border border-slate-700 rounded-lg hover:border-slate-600 hover:bg-slate-800/50"
                        >
                            Contact Us
                        </Link>
                        {loading ? null : user ? (
                            <Link
                                href="/dashboard"
                                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors font-medium"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href="/tools" className="text-gray-400 hover:text-white transition-colors px-4 py-2">
                                    Free Tools
                                </Link>
                                <Link href="/auth/login" className="text-gray-400 hover:text-white transition-colors px-4 py-2">
                                    Sign In
                                </Link>
                                <Link
                                    href="/auth/sign-up"
                                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors font-medium"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    aria-label="Open menu"
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-gray-300 hover:text-white hover:border-slate-600 hover:bg-slate-800/50 transition-colors"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="text-sm">Menu</span>
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-slate-950/95 border-slate-800">
                                <SheetHeader>
                                    <SheetTitle className="text-white">Menu</SheetTitle>
                                </SheetHeader>
                                <div className="mt-6 flex flex-col gap-3">
                                    <Link
                                        href="/contact"
                                        className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                    <Link
                                        href="/tools"
                                        className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
                                    >
                                        Free Tools
                                    </Link>
                                    {loading ? null : user ? (
                                        <Link
                                            href="/dashboard"
                                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-center"
                                        >
                                            Go to Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href="/auth/login"
                                                className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-slate-800/50"
                                            >
                                                Sign In
                                            </Link>
                                            <Link
                                                href="/auth/sign-up"
                                                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-center"
                                            >
                                                Get Started
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
