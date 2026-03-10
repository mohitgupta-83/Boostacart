"use client"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"
import type { User, Session, AuthChangeEvent } from "@supabase/supabase-js"

export default function HeroCTA() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const supabase = createClient()

        // Check current session
        supabase.auth.getUser().then((res: any) => {
            setUser(res.data.user || null)
            setLoading(false)
        })

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [])

    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {loading ? (
                <div className="px-8 py-4 bg-slate-800/50 text-gray-400 rounded-lg font-semibold text-lg">Loading...</div>
            ) : (
                <Link
                    href={user ? "/dashboard" : "/auth/sign-up"}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
                >
                    <span className="relative z-10">{user ? "Go to Dashboard" : "Start Capturing Cart Leads"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
            )}
            <a
                href="https://youtu.be/sQOZcoPP31I"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-slate-800/50 text-white rounded-lg font-semibold text-lg border border-slate-700 flex items-center justify-center transition-all duration-300 hover:border-slate-600 hover:bg-slate-700/60 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50"
            >
                See How It Works
            </a>
        </div>
    )
}
