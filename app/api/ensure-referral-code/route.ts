import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Service-role client to bypass RLS
const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userId } = body

    if (!userId) {
      return NextResponse.json({ error: "userId is required" }, { status: 400 })
    }

    // First check if user already has a code (race condition guard)
    const { data: existing } = await adminSupabase
      .from("profiles")
      .select("referral_code")
      .eq("id", userId)
      .single()

    if (existing?.referral_code) {
      // Ensure wallet exists too
      await adminSupabase
        .from("referral_wallet")
        .upsert({ user_id: userId }, { onConflict: "user_id", ignoreDuplicates: true })
      return NextResponse.json({ referral_code: existing.referral_code })
    }

    // Generate a unique 6-char alphanumeric code
    let code = ""
    let attempts = 0
    while (attempts < 20) {
      // Generate random 6-char uppercase code
      const raw = Math.random().toString(36).substring(2, 8).toUpperCase()
      code = raw.padEnd(6, "X").substring(0, 6)
      // Check uniqueness
      const { count } = await adminSupabase
        .from("profiles")
        .select("id", { count: "exact", head: true })
        .eq("referral_code", code)
      if ((count ?? 0) === 0) break
      attempts++
    }

    if (!code) {
      return NextResponse.json({ error: "Could not generate unique code" }, { status: 500 })
    }

    // Update the profile with the new code
    const { data: updated, error: updateErr } = await adminSupabase
      .from("profiles")
      .upsert(
        { id: userId, referral_code: code, updated_at: new Date().toISOString() },
        { onConflict: "id" }
      )
      .select("referral_code")
      .single()

    if (updateErr) {
      console.error("[ensure-referral-code] Update error:", updateErr)
      return NextResponse.json({ error: updateErr.message }, { status: 500 })
    }

    // Ensure wallet exists
    await adminSupabase
      .from("referral_wallet")
      .upsert({ user_id: userId }, { onConflict: "user_id", ignoreDuplicates: true })

    return NextResponse.json({ referral_code: updated?.referral_code ?? code })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error"
    console.error("[ensure-referral-code] Error:", msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
