"use server"

import { createClient } from "@supabase/supabase-js"

export async function ensureStoreExists(userId: string, email: string, storeName: string, storeDomain: string) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  try {
    // Check if store already exists for this exact user
    const { data: existingStore } = await supabase.from("stores").select("id").eq("user_id", userId).maybeSingle()

    if (existingStore) {
      console.log("[v0] Store already exists for user:", userId)
      return { success: true, storeId: existingStore.id }
    }

    // Check if the domain itself is already in the database
    const { data: existingDomainStore } = await supabase
      .from("stores")
      .select("id, deleted_at")
      .eq("domain", storeDomain)
      .maybeSingle()

    if (existingDomainStore) {
      if (existingDomainStore.deleted_at) {
        // Assume ownership of the existing store
        const { error: updateErr } = await supabase
          .from("stores")
          .update({
            user_id: userId,
            owner_email: email,
            name: storeName,
            shopify_domain: storeDomain,
            is_verified_owner: true,
            deleted_at: null,
            updated_at: new Date().toISOString()
          })
          .eq("id", existingDomainStore.id)
          
        if (updateErr) {
          console.error("[v0] Failed to reclaim store:", updateErr)
          return { success: false, error: updateErr.message }
        }
        console.log("[v0] Store reclaimed successfully:", existingDomainStore.id)
        return { success: true, storeId: existingDomainStore.id }
      } else {
        return { success: false, error: "Store domain already registered" }
      }
    }

    // Create store explicitly for fresh domain
    const { data: newStore, error } = await supabase
      .from("stores")
      .insert({
        user_id: userId,
        owner_email: email,
        name: storeName,
        domain: storeDomain,
        shopify_domain: storeDomain,
        plan: "Free",
        max_leads: 50,
        remaining_leads: 50,
        total_leads: 0,
        leads_this_month: 0,
        installed: false,
        is_verified_owner: true,
        deleted_at: null
      })
      .select("id")
      .single()

    if (error) {
      console.error("[v0] Failed to create store:", error)
      return { success: false, error: error.message }
    }

    console.log("[v0] Store created successfully:", newStore.id)
    return { success: true, storeId: newStore.id }
  } catch (error) {
    console.error("[v0] Error in ensureStoreExists:", error)
    return { success: false, error: "Failed to create store" }
  }
}
