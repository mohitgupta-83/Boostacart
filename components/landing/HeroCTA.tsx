"use client"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"
import type { User, Session, AuthChangeEvent } from "@supabase/supabase-js"
import { Zap, Play } from "lucide-react"

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
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {loading ? (
                <div className="px-10 py-5 bg-[#0b1026]/50 text-indigo-100/50 rounded-full font-semibold text-lg border border-[#1e274f]">Loading...</div>
            ) : (
                <Link
                    href={user ? "/dashboard" : "/auth/sign-up"}
                    className="group px-10 py-5 w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-full hover:brightness-110 transition-all duration-300 font-bold text-lg shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(217,70,239,0.5)] hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10">{user ? "Go to Dashboard" : "Start Capturing Carts"}</span>
                    <Zap className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                </Link>
            )}
            <a
                href="https://youtu.be/sQOZcoPP31I"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 w-full sm:w-auto bg-white/5 text-white rounded-full font-bold text-lg border border-white/10 flex items-center justify-center gap-3 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
                <Play className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 fill-cyan-400 group-hover:fill-cyan-300 transition-colors" />
                See How It Works
            </a>
        </div>
    )
}
