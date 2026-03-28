"use client"

export const dynamic = "force-dynamic"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Users, Download, Save, ArrowLeft, Check, Sparkles, PhoneCall, CheckCircle2 } from "lucide-react"
import { defaultTemplates, WATemplate, generateWhatsAppLink } from "@/lib/whatsapp-templates"

type LeadStatus = "new" | "contacted" | "converted"

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  product_name?: string
  detected_product?: string
  created_at: string
  is_saved?: boolean
  status: LeadStatus
}

// ── Status config ─────────────────────────────────────────────────────────────
const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string; bg: string; border: string; icon: React.ReactNode }> = {
  new:       { label: "New",       color: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/30",    icon: <Sparkles    className="h-3 w-3" /> },
  contacted: { label: "Contacted", color: "text-amber-300",  bg: "bg-amber-500/10",  border: "border-amber-500/30",  icon: <PhoneCall   className="h-3 w-3" /> },
  converted: { label: "Converted", color: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/30",icon: <CheckCircle2 className="h-3 w-3" /> },
}

// ── StatusDropdown ────────────────────────────────────────────────────────────
import React from "react"
function StatusDropdown({ leadId, currentStatus, onStatusChange }: { leadId: string; currentStatus: LeadStatus; onStatusChange: (id: string, s: LeadStatus) => void }) {
  const [updating, setUpdating] = useState(false)
  const supabase = createClient()
  const cfg = STATUS_CONFIG[currentStatus]
  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as LeadStatus
    setUpdating(true)
    try {
      const { error } = await supabase.from("leads").update({ status: newStatus }).eq("id", leadId)
      if (!error) onStatusChange(leadId, newStatus)
    } finally { setUpdating(false) }
  }
  return (
    <div className="relative">
      {updating && <span className="absolute right-6 top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-white/40 border-t-transparent rounded-full animate-spin" />}
      <select value={currentStatus} onChange={handleChange} disabled={updating}
        className={`appearance-none pl-2 pr-6 py-1 text-xs font-semibold rounded-full border cursor-pointer outline-none focus:ring-1 focus:ring-white/20 transition-all ${cfg.color} ${cfg.bg} ${cfg.border} disabled:opacity-60`}
        style={{ backgroundImage: "none" }}
      >
        {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map(s => (
          <option key={s} value={s} className="bg-slate-900 text-white font-normal">{STATUS_CONFIG[s].label}</option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-white/40 text-[10px]">▾</span>
    </div>
  )
}

export default function TotalLeadsPage() {
  const router = useRouter()
  const supabase = createClient()
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLeads, setSelectedLeads] = useState<Set<string>>(new Set())
  const [storeId, setStoreId] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [waTemplates, setWaTemplates] = useState<WATemplate[]>([])
  const [activeWaTemplate, setActiveWaTemplate] = useState<string>("")

  const handleStatusChange = useCallback((id: string, newStatus: LeadStatus) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l))
  }, [])

  useEffect(() => {
    const loadLeads = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        if (!user) {
          router.push("/auth/login")
          return
        }

        const { data: storeResults } = await supabase.from("stores").select("id").eq("user_id", user.id).limit(1)

        console.log("[v0] Store lookup returned:", storeResults?.length || 0, "rows")

        if (!storeResults || storeResults.length === 0) {
          console.log("[v0] No store found for user")
          return
        }

        const storeData = storeResults[0]
        setStoreId(storeData.id)

        const { data: leadsData, error } = await supabase
          .from("leads")
          .select("*")
          .eq("store_id", storeData.id)
          .order("created_at", { ascending: false })

        if (!error && leadsData) {
          setLeads(leadsData)
        }
      } catch (err) {
        console.error("Error loading leads:", err)
      } finally {
        setLoading(false)
      }
    }

    loadLeads()

    const stored = localStorage.getItem("wa_templates")
    if (stored) {
      try { setWaTemplates(JSON.parse(stored)) } catch (e) {}
    } else {
      setWaTemplates(defaultTemplates)
      localStorage.setItem("wa_templates", JSON.stringify(defaultTemplates))
    }
    
    const active = localStorage.getItem("wa_active_template")
    if (active) setActiveWaTemplate(active)
    else {
      setActiveWaTemplate(defaultTemplates[0].id)
      localStorage.setItem("wa_active_template", defaultTemplates[0].id)
    }
  }, [router, supabase])

  const handleWaTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveWaTemplate(e.target.value)
    localStorage.setItem("wa_active_template", e.target.value)
  }

  const getActiveTemplate = () => {
    return waTemplates.find(t => t.id === activeWaTemplate) || defaultTemplates[0]
  }

  const toggleSelectAll = () => {
    if (selectedLeads.size === leads.length) {
      setSelectedLeads(new Set())
    } else {
      setSelectedLeads(new Set(leads.map((l) => l.id)))
    }
  }

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedLeads)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedLeads(newSelected)
  }

  const handleSaveLeads = async () => {
    if (selectedLeads.size === 0) return

    setIsSaving(true)

    try {
      const leadsToSave = leads.filter((lead) => selectedLeads.has(lead.id))

      const savedLeadsData = leadsToSave.map((lead) => ({
        store_id: storeId,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        product_name: lead.product_name,
        detected_product: lead.detected_product,
        status: "saved",
      }))

      const { error: insertError } = await supabase.from("saved_leads").insert(savedLeadsData)

      if (insertError) {
        console.error("Error saving leads:", insertError)
        showToast(`Failed to save leads: ${insertError.message}`, "error")
        return
      }

      const updates = Array.from(selectedLeads).map((id) => ({
        id,
        is_saved: true,
      }))

      const { error: updateError } = await supabase.from("leads").upsert(updates)

      if (!updateError) {
        setLeads(leads.map((lead) => (selectedLeads.has(lead.id) ? { ...lead, is_saved: true } : lead)))
        setSelectedLeads(new Set())
        showToast(`${leadsToSave.length} lead(s) saved successfully! 🎉`, "success")
      }
    } catch (err) {
      console.error("Error saving leads:", err)
      showToast("Failed to save leads", "error")
    } finally {
      setTimeout(() => setIsSaving(false), 600)
    }
  }

  const handleDownload = () => {
    const leadsToDownload = selectedLeads.size > 0 ? leads.filter((l) => selectedLeads.has(l.id)) : leads

    if (leadsToDownload.length === 0) {
      alert("No leads to download")
      return
    }

    const headers = ["Name", "Email", "Phone", "Product", "Status", "Timestamp", "Saved"]
    const csvRows = leadsToDownload.map((lead) => [
      lead.name || "",
      lead.email || "",
      lead.phone || "",
      lead.product_name || lead.detected_product || "Unknown",
      lead.status || "new",
      new Date(lead.created_at).toLocaleString(),
      lead.is_saved ? "Yes" : "No",
    ])

    const csvContent = [headers, ...csvRows]
      .map((row) => row.map((field) => `"${field.toString().replace(/"/g, '""')}"`).join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `all_leads_${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const showToast = (message: string, type: "success" | "error" = "success") => {
    const toast = document.createElement("div")
    toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-[9999] animate-fade-in ${type === "success"
        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
        : "bg-gradient-to-r from-red-500 to-pink-500 text-white"
      }`
    toast.textContent = message
    document.body.appendChild(toast)
    setTimeout(() => {
      toast.style.opacity = "0"
      toast.style.transition = "opacity 0.3s"
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast)
        }
      }, 300)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-300" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Users className="h-6 w-6 mr-2 text-blue-400" />
                Total Leads
              </h1>
              <p className="text-sm text-gray-400 mt-1">{leads.length} total leads</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={activeWaTemplate}
              onChange={handleWaTemplateChange}
              className="bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-green-500/50"
            >
              <option disabled value="">Select WhatsApp Template</option>
              {waTemplates.map(t => (
                <option key={t.id} value={t.id} className="text-slate-900">{t.name}</option>
              ))}
            </select>

            {selectedLeads.size > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-300">{selectedLeads.size} selected</span>
              <button
                onClick={handleSaveLeads}
                disabled={isSaving}
                className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all duration-300 shadow-lg ${isSaving
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transform hover:scale-105"
                  }`}
              >
                {isSaving ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    <span>Save Leads</span>
                  </>
                )}
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
          )}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/20">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedLeads.size === leads.length && leads.length > 0}
                      onChange={toggleSelectAll}
                      className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-600 rounded bg-white/10"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto"></div>
                    </td>
                  </tr>
                ) : leads.length > 0 ? (
                  leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className={`hover:bg-white/5 transition-all duration-200 ${selectedLeads.has(lead.id) ? "bg-blue-500/10" : lead.is_saved ? "animate-flash-green" : ""
                        }`}
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedLeads.has(lead.id)}
                          onChange={() => toggleSelect(lead.id)}
                          className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-600 rounded bg-white/10"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-white">{lead.name || "N/A"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-300">{lead.email || "N/A"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-300">{lead.phone || "N/A"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-300">{lead.product_name || lead.detected_product || "Unknown"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-400 text-sm">{new Date(lead.created_at).toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusDropdown
                          leadId={lead.id}
                          currentStatus={lead.status ?? "new"}
                          onStatusChange={handleStatusChange}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.phone ? (
                          <a 
                            href={generateWhatsAppLink(lead, getActiveTemplate())} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-full text-xs font-semibold shadow-md transition-colors inline-block"
                          >
                            WhatsApp
                          </a>
                        ) : (
                          <span 
                            className="px-3 py-1.5 bg-slate-800 text-slate-500 rounded-full text-xs font-semibold cursor-not-allowed inline-block"
                            title="No phone number"
                          >
                            WhatsApp
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-12">
                      <Users className="mx-auto h-12 w-12 text-gray-500" />
                      <h3 className="mt-2 text-sm font-medium text-white">No leads yet</h3>
                      <p className="mt-1 text-sm text-gray-400">Start capturing leads with your widget!</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
