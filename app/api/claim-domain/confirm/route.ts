import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { createClient as createAdminClient } from "@supabase/supabase-js"

const adminSupabase = createAdminClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

export async function POST(req: NextRequest) {
  try {
    const { domain, email } = await req.json()
    if (!domain || !email) {
      return NextResponse.json({ error: "Domain and email are required" }, { status: 400 })
    }

    // Get the authenticated user from the session
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Verify the user's email matches the submitted email and domain rules
    if (user.email !== email) {
      return NextResponse.json({ error: "Authenticated email does not match." }, { status: 403 })
    }

    const emailDomain = email.split("@")[1]?.toLowerCase()
    const targetDomain = domain.toLowerCase()

    if (emailDomain !== targetDomain && !emailDomain.endsWith(`.${targetDomain}`)) {
      return NextResponse.json({ error: "Email domain does not match store domain." }, { status: 403 })
    }

    // Check if the store exists and is already verified
    const { data: store, error: storeError } = await adminSupabase
      .from("stores")
      .select("id, is_verified_owner")
      .eq("domain", targetDomain)
      .single()

    if (storeError) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 })
    }

    if (store.is_verified_owner) {
      return NextResponse.json({ error: "Store is already owned by a verified user. Contact support." }, { status: 400 })
    }

    // Transfer ownership
    const { error: updateError } = await adminSupabase
      .from("stores")
      .update({
        user_id: user.id,
        is_verified_owner: true,
        owner_email: user.email,
        updated_at: new Date().toISOString()
      })
      .eq("id", store.id)

    if (updateError) {
      throw updateError
    }

    return NextResponse.json({ success: true })

  } catch (err: any) {
    console.error("[claim-domain] Error:", err.message)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
