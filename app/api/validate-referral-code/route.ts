import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Service-role client to bypass RLS — used only for reading referral codes
const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { code } = body

    if (!code || typeof code !== "string" || code.trim().length < 3) {
      return NextResponse.json({ valid: false })
    }

    // Case-insensitive lookup using ilike
    const { data, error } = await adminSupabase
      .from("profiles")
      .select("id")
      .ilike("referral_code", code.trim())
      .maybeSingle()

    if (error) {
      console.error("[validate-referral-code] DB error:", error.message)
      // On error, return valid=null so the client doesn't block sign-up
      return NextResponse.json({ valid: null, error: error.message })
    }

    return NextResponse.json({ valid: !!data })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error"
    console.error("[validate-referral-code] Error:", msg)
    // On unexpected error, return null so client doesn't block
    return NextResponse.json({ valid: null })
  }
}
