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
      .select("id, is_verified_owner")
      .eq("domain", domain.trim().toLowerCase())
      .maybeSingle()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ exists: false })
    }

    return NextResponse.json({ 
      exists: true, 
      isVerifiedOwner: data.is_verified_owner 
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
