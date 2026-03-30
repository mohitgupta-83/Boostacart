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
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // 1. Unlink store
    const { error: storeError } = await adminSupabase
      .from("stores")
      .update({
        user_id: null,
        owner_email: null,
        is_verified_owner: false,
        deleted_at: new Date().toISOString()
      })
      .eq("user_id", user.id)

    if (storeError) {
      console.error("[delete-account] Failed to update store:", storeError)
      return NextResponse.json({ error: "Failed to update store" }, { status: 500 })
    }

    // 2. Delete user account
    const { error: deleteError } = await adminSupabase.auth.admin.deleteUser(user.id)

    if (deleteError) {
      console.error("[delete-account] Failed to delete user:", deleteError)
      return NextResponse.json({ error: "Failed to delete user" }, { status: 500 })
    }

    // Log out is handled on the client-side
    // Clear auth cookie manually on the server just to be completely safe
    const res = NextResponse.json({ success: true })
    
    // In next.js app dir architecture, the supabase server client handles clearing via auth.signOut() 
    // which the client calls.

    return res

  } catch (err: any) {
    console.error("[delete-account] Error:", err.message)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
