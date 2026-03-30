import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

export async function POST(req: NextRequest) {
  try {
    const { domain } = await req.json()
    if (!domain) {
      return NextResponse.json({ error: "Domain required" }, { status: 400 })
    }

    const { data, error } = await adminSupabase
      .from("stores")
      .select("id, user_id, is_verified_owner, owner_email, deleted_at")
      .eq("domain", domain.trim().toLowerCase())
      .maybeSingle()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    if (!data || data.deleted_at) {
      return NextResponse.json({ exists: false })
    }

    // Attempt to get the associated email
    let associatedEmail = data.owner_email

    if (!associatedEmail && data.user_id) {
      // Try to get from profiles if owner_email is null
      const { data: profile } = await adminSupabase
        .from("profiles")
        .select("email")
        .eq("id", data.user_id)
        .single()
      
      if (profile?.email) {
        associatedEmail = profile.email
      } else {
        // Fallback to auth.users using admin api
        const { data: authUser } = await adminSupabase.auth.admin.getUserById(data.user_id)
        if (authUser?.user?.email) {
          associatedEmail = authUser.user.email
        }
      }
    }

    // Removed email masking per user request
    return NextResponse.json({ 
      exists: true, 
      isVerifiedOwner: data.is_verified_owner,
      associatedEmail: associatedEmail
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
