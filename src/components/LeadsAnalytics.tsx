"use client"

import type React from "react"
import type { Store, Lead } from "../types"
import {
  TrendingUp, Users, Package, Calendar, Clock,
  Download, Bookmark, List, DollarSign, CheckCircle2,
  PhoneCall, Sparkles,
} from "lucide-react"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts"
import { useState, useEffect, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { defaultTemplates, WATemplate, generateWhatsAppLink } from "@/lib/whatsapp-templates"

// ─── Types ────────────────────────────────────────────────────────────────────
type LeadStatus = "new" | "contacted" | "converted"

interface LeadRow {
  id: string
  name?: string
  email?: string
  phone?: string
  product_name?: string
  detected_product?: string
  product_url?: string
  created_at: string
  is_saved?: boolean
  status: LeadStatus
}

interface LeadsAnalyticsProps {
  store: Store
  leads: Lead[]
}

// ─── Status config ────────────────────────────────────────────────────────────
const STATUS_CONFIG: Record<
  LeadStatus,
  { label: string; color: string; bg: string; border: string; icon: React.ReactNode }
> = {
  new: {
    label: "New",
    color: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "border-sky-500/30",
    icon: <Sparkles className="h-3 w-3" />,
  },
  contacted: {
    label: "Contacted",
    color: "text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    icon: <PhoneCall className="h-3 w-3" />,
  },
  converted: {
    label: "Converted",
    color: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: <CheckCircle2 className="h-3 w-3" />,
  },
}

// ─── StatusBadge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: LeadStatus }) {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG.new
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border
        ${cfg.color} ${cfg.bg} ${cfg.border}`}
    >
      {cfg.icon}
      {cfg.label}
    </span>
  )
}

// ─── StatusDropdown ───────────────────────────────────────────────────────────
function StatusDropdown({
  leadId,
  currentStatus,
  onStatusChange,
}: {
  leadId: string
  currentStatus: LeadStatus
  onStatusChange: (id: string, status: LeadStatus) => void
}) {
  const [updating, setUpdating] = useState(false)
  const supabase = createClient()

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as LeadStatus
    setUpdating(true)
    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", leadId)
      if (!error) onStatusChange(leadId, newStatus)
    } catch (err) {
      console.error("Status update failed:", err)
    } finally {
      setUpdating(false)
    }
  }

  const cfg = STATUS_CONFIG[currentStatus]

  return (
    <div className="relative">
      {updating && (
        <span className="absolute right-6 top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-white/40 border-t-transparent rounded-full animate-spin" />
      )}
      <select
        value={currentStatus}
        onChange={handleChange}
        disabled={updating}
        className={`appearance-none pl-2 pr-6 py-1 text-xs font-semibold rounded-full border cursor-pointer
          transition-all duration-150 outline-none focus:ring-1 focus:ring-white/20
          ${cfg.color} ${cfg.bg} ${cfg.border} disabled:opacity-60`}
        style={{ backgroundImage: "none" }}
      >
        {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map((s) => (
          <option key={s} value={s} className="bg-slate-900 text-white font-normal">
            {STATUS_CONFIG[s].label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-white/40 text-[10px]">
        ▾
      </span>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
const LeadsAnalytics: React.FC<LeadsAnalyticsProps> = ({ store, leads: initialLeads }) => {
  const router = useRouter()
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle")
  const [leads, setLeads] = useState<LeadRow[]>([])
  const [loading, setLoading] = useState(true)
  const [chartLeads, setChartLeads] = useState<any[]>([])
  const [topProductsData, setTopProductsData] = useState<any[]>([])
  const [avgOrderValue, setAvgOrderValue] = useState<number>(800)
  const [metrics, setMetrics] = useState({
    totalLeads: 0,
    leadsThisMonth: 0,
    leadsToday: 0,
  })
  const [statusCounts, setStatusCounts] = useState({
    new: 0,
    contacted: 0,
    converted: 0,
  })
  const [waTemplates, setWaTemplates] = useState<WATemplate[]>([])
  const [activeWaTemplate, setActiveWaTemplate] = useState<string>("")
  const supabase = createClient()

  // ── Fetch data ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchLeads = async () => {
      if (!store?.id) return
      try {
        // Stats
        const { data: statsData } = await supabase
          .from("store_lead_stats")
          .select("total_leads, leads_this_month, leads_today")
          .eq("store_id", store.id)
          .maybeSingle()

        if (statsData) {
          setMetrics({
            totalLeads: statsData.total_leads || 0,
            leadsThisMonth: statsData.leads_this_month || 0,
            leadsToday: statsData.leads_today || 0,
          })
        }

        // AOV from store
        const { data: storeData } = await supabase
          .from("stores")
          .select("avg_order_value")
          .eq("id", store.id)
          .maybeSingle()
        if (storeData?.avg_order_value) setAvgOrderValue(Number(storeData.avg_order_value))

        // Recent leads with status
        const { data: leadsData } = await supabase
          .from("leads")
          .select("*")
          .eq("store_id", store.id)
          .order("created_at", { ascending: false })
          .limit(20)
        if (leadsData) setLeads(leadsData as LeadRow[])

        // Status counts via view
        const { data: statusData } = await supabase
          .from("store_lead_status_counts")
          .select("new_leads, contacted_leads, converted_leads")
          .eq("store_id", store.id)
          .maybeSingle()
        if (statusData) {
          setStatusCounts({
            new: Number(statusData.new_leads) || 0,
            contacted: Number(statusData.contacted_leads) || 0,
            converted: Number(statusData.converted_leads) || 0,
          })
        }

        // Chart data (last 7 days)
        const sevenDaysAgo = new Date()
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
        const { data: chartLeadsData } = await supabase
          .from("leads")
          .select("created_at")
          .eq("store_id", store.id)
          .gte("created_at", sevenDaysAgo.toISOString())
          .order("created_at", { ascending: false })
        if (chartLeadsData) setChartLeads(chartLeadsData)

        // Top products
        const { data: allLeadsData } = await supabase
          .from("leads")
          .select("product_name, detected_product")
          .eq("store_id", store.id)
        if (allLeadsData) setTopProductsData(allLeadsData)
      } catch (err) {
        console.error("Error loading leads:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchLeads()

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
  }, [store?.id])

  // ── Status change optimistic update ─────────────────────────────────────────
  const handleStatusChange = useCallback((id: string, newStatus: LeadStatus) => {
    setLeads((prev) => {
      const oldStatus = prev.find((l) => l.id === id)?.status
      if (oldStatus === newStatus) return prev
      // Update status counts
      setStatusCounts((counts) => ({
        ...counts,
        [oldStatus ?? "new"]: Math.max(0, counts[oldStatus ?? "new"] - 1),
        [newStatus]: counts[newStatus] + 1,
      }))
      return prev.map((l) => l.id === id ? { ...l, status: newStatus } : l)
    })
  }, [])

  const handleWaTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveWaTemplate(e.target.value)
    localStorage.setItem("wa_active_template", e.target.value)
  }

  const getActiveTemplate = () =>
    waTemplates.find((t) => t.id === activeWaTemplate) || defaultTemplates[0]

  if (!store) return null

  // ── Derived metrics ──────────────────────────────────────────────────────────
  const resolveProductName = (lead: any): string =>
    lead.product_name || lead.detected_product || "Unknown Product"

  const recoveredRevenue = statusCounts.converted * avgOrderValue

  const chartData = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - i))
    const dateStr = date.toISOString().split("T")[0]
    return {
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      leads: chartLeads.filter((l) => l.created_at?.startsWith(dateStr)).length,
    }
  })

  const productLeads = topProductsData.reduce((acc, lead) => {
    const product = resolveProductName(lead)
    acc[product] = (acc[product] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const topProducts = Object.entries(productLeads)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 5)
    .map(([product, count]) => ({ product, count }))

  const downloadCSV = () => {
    if (leads.length === 0) { alert("No leads to download"); return }
    const headers = ["Name", "Email", "Phone", "Product", "Status", "Timestamp"]
    const csvRows = leads.map((lead) => [
      lead.name || "",
      lead.email || "",
      lead.phone || "",
      resolveProductName(lead),
      lead.status || "new",
      new Date(lead.created_at).toLocaleString(),
    ])
    const csvContent = [headers, ...csvRows]
      .map((row) => row.map((f) => `"${f.toString().replace(/"/g, '""')}"`).join(","))
      .join("\n")
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `${store.name}_leads_${new Date().toISOString().split("T")[0]}.csv`
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-8">
      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => router.push("/dashboard/total-leads")}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
        >
          <List className="h-4 w-4" />
          <span>View All Leads</span>
        </button>
        <button
          onClick={() => router.push("/dashboard/saved-leads")}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg"
        >
          <Bookmark className="h-4 w-4" />
          <span>Saved Leads</span>
        </button>
      </div>

      {/* ── 4 Metric Cards ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Total Leads */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Total Leads</p>
              <p className="text-3xl font-bold text-white mt-0.5">{metrics.totalLeads}</p>
              <p className="text-xs text-gray-400 mt-1">All time</p>
            </div>
            <div className="p-3 bg-blue-500/20 rounded-full">
              <Users className="h-6 w-6 text-blue-400" />
            </div>
          </div>
        </div>

        {/* This Month */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">This Month</p>
              <p className="text-3xl font-bold text-white mt-0.5">{metrics.leadsThisMonth}</p>
              <p className="text-xs text-gray-400 mt-1">Current month</p>
            </div>
            <div className="p-3 bg-green-500/20 rounded-full">
              <Calendar className="h-6 w-6 text-green-400" />
            </div>
          </div>
        </div>

        {/* Today */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Today</p>
              <p className="text-3xl font-bold text-white mt-0.5">{metrics.leadsToday}</p>
              <p className="text-xs text-gray-400 mt-1">Today</p>
            </div>
            <div className="p-3 bg-purple-500/20 rounded-full">
              <Clock className="h-6 w-6 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Recovered Revenue ← NEW */}
        <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/30 border border-emerald-500/30 p-5 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-300">Recovered Revenue</p>
              <p className="text-3xl font-bold text-white mt-0.5">
                ₹{recoveredRevenue.toLocaleString("en-IN")}
              </p>
              <p className="text-xs text-emerald-400/70 mt-1">
                {statusCounts.converted} converted × ₹{avgOrderValue} AOV
              </p>
            </div>
            <div className="p-3 bg-emerald-500/20 rounded-full">
              <DollarSign className="h-6 w-6 text-emerald-400" />
            </div>
          </div>
          <div className="relative mt-3 pt-3 border-t border-emerald-500/15">
            <p className="text-xs text-emerald-400/50 italic">Estimated based on converted leads</p>
          </div>
        </div>
      </div>

      {/* ── Lead Status Funnel ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3">
        {(["new", "contacted", "converted"] as LeadStatus[]).map((s) => {
          const cfg = STATUS_CONFIG[s]
          const count = statusCounts[s]
          const pct = metrics.totalLeads > 0
            ? Math.round((count / metrics.totalLeads) * 100)
            : 0
          return (
            <div
              key={s}
              className={`rounded-2xl border p-4 flex items-center gap-3 ${cfg.bg} ${cfg.border}`}
            >
              <div className={`p-2.5 rounded-xl ${cfg.bg} border ${cfg.border}`}>
                <span className={`${cfg.color} block`}>{cfg.icon}</span>
              </div>
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wide ${cfg.color}`}>
                  {cfg.label}
                </p>
                <p className="text-2xl font-bold text-white">{count}</p>
                <p className="text-xs text-gray-400">{pct}% of total</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Charts ──────────────────────────────────────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
            Leads Over Time (Last 7 Days)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="date" stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(10,15,36,0.95)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              />
              <Line type="monotone" dataKey="leads" stroke="#60A5FA" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Package className="h-5 w-5 mr-2 text-purple-400" />
            Top Lead Generating Products
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topProducts}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="product" angle={-35} textAnchor="end" height={65} stroke="#9CA3AF" tick={{ fontSize: 10 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(10,15,36,0.95)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              />
              <Bar dataKey="count" fill="#A78BFA" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Recent Leads Table (with Status) ───────────────────────────────── */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
        <div className="p-5 border-b border-white/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-400" />
              Recent Leads
              <span className="text-sm text-gray-400 font-normal">(Last 20)</span>
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <select
                value={activeWaTemplate}
                onChange={handleWaTemplateChange}
                className="bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-green-500/50"
              >
                {waTemplates.map((t) => (
                  <option key={t.id} value={t.id} className="text-slate-900">
                    {t.name}
                  </option>
                ))}
              </select>
              <button
                onClick={downloadCSV}
                disabled={leads.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
              >
                <Download className="h-4 w-4" />
                CSV
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-white/5">
              <tr>
                {["Name", "Email", "Phone", "Product", "Status", "Time", "WhatsApp"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400 mx-auto" />
                  </td>
                </tr>
              ) : leads.length > 0 ? (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="font-medium text-white text-sm">{lead.name || "N/A"}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-gray-300 text-sm">{lead.email || "—"}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-gray-300 text-sm">{lead.phone || "—"}</span>
                    </td>
                    <td className="px-4 py-3 max-w-[160px]">
                      {lead.product_url ? (
                        <a
                          href={lead.product_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 hover:underline text-sm truncate block"
                          title={resolveProductName(lead)}
                        >
                          {resolveProductName(lead)}
                        </a>
                      ) : (
                        <span className="text-gray-300 text-sm truncate block" title={resolveProductName(lead)}>
                          {resolveProductName(lead)}
                        </span>
                      )}
                    </td>
                    {/* ── Status Dropdown ── */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <StatusDropdown
                        leadId={lead.id}
                        currentStatus={lead.status ?? "new"}
                        onStatusChange={handleStatusChange}
                      />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-gray-400 text-xs">
                        {new Date(lead.created_at).toLocaleString("en-IN", {
                          month: "short", day: "numeric",
                          hour: "2-digit", minute: "2-digit",
                        })}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
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
                        <span className="px-3 py-1.5 bg-slate-800 text-slate-500 rounded-full text-xs font-semibold cursor-not-allowed inline-block">
                          No Phone
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-16">
                    <Users className="mx-auto h-12 w-12 text-gray-500 mb-3" />
                    <h3 className="text-sm font-medium text-white">No leads yet</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Start capturing leads with your widget!
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LeadsAnalytics
