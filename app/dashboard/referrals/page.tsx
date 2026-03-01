"use client"

export const dynamic = "force-dynamic"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Copy, Check, Users, Gift, Wallet, TrendingUp, ExternalLink, Share2, Tag, Info } from "lucide-react"

interface ReferralWallet {
  credits_balance: number
  pending_commission: number
  withdrawable_commission: number
  total_earned: number
}

interface Referral {
  id: string
  referred_user_id: string
  status: string
  created_at: string
  profiles: { email: string } | null
}

interface WithdrawalRequest {
  id: string
  amount: number
  upi_id: string
  status: string
  created_at: string
  admin_note: string | null
}

export default function ReferralsPage() {
  const router = useRouter()
  const supabase = createClient()

  const [userId, setUserId] = useState<string | null>(null)
  const [referralCode, setReferralCode] = useState<string | null>(null)
  const [wallet, setWallet] = useState<ReferralWallet | null>(null)
  const [referrals, setReferrals] = useState<Referral[]>([])
  const [withdrawals, setWithdrawals] = useState<WithdrawalRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const [copiedCoupon, setCopiedCoupon] = useState(false)

  // Withdraw form
  const [showWithdrawForm, setShowWithdrawForm] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [upiId, setUpiId] = useState("")
  const [withdrawLoading, setWithdrawLoading] = useState(false)
  const [withdrawError, setWithdrawError] = useState<string | null>(null)
  const [withdrawSuccess, setWithdrawSuccess] = useState(false)

  const loadData = useCallback(async (uid: string) => {
    const [profileRes, walletRes, referralsRes, withdrawalsRes] = await Promise.all([
      supabase.from("profiles").select("referral_code").eq("id", uid).single(),
      supabase.from("referral_wallet").select("*").eq("user_id", uid).single(),
      supabase
        .from("referrals")
        .select("id, referred_user_id, status, created_at")
        .eq("referrer_user_id", uid)
        .order("created_at", { ascending: false }),
      supabase
        .from("withdrawal_requests")
        .select("*")
        .eq("user_id", uid)
        .order("created_at", { ascending: false }),
    ])

    if (profileRes.data) setReferralCode(profileRes.data.referral_code)
    if (walletRes.data) setWallet(walletRes.data)
    if (referralsRes.data) setReferrals(referralsRes.data as Referral[])
    if (withdrawalsRes.data) setWithdrawals(withdrawalsRes.data)
  }, [supabase])

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push("/auth/login"); return }
      setUserId(user.id)
      await loadData(user.id)
      setLoading(false)
    }
    init()
  }, [router, supabase, loadData])

  const referralLink = typeof window !== "undefined" && referralCode
    ? `${window.location.origin}/auth/sign-up?ref=${referralCode}`
    : ""

  const copyLink = async () => {
    if (!referralLink) return
    await navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyCouponCode = async () => {
    if (!referralCode) return
    await navigator.clipboard.writeText(referralCode)
    setCopiedCoupon(true)
    setTimeout(() => setCopiedCoupon(false), 2000)
  }

  const shareLink = async () => {
    if (!referralLink) return
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join BoostACart",
          text: `Sign up for BoostACart using my referral link and get started capturing leads!`,
          url: referralLink,
        })
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userId) return
    setWithdrawLoading(true)
    setWithdrawError(null)

    const amount = parseFloat(withdrawAmount)
    if (isNaN(amount) || amount < 100) {
      setWithdrawError("Minimum withdrawal is ₹100")
      setWithdrawLoading(false)
      return
    }
    if (!wallet || amount > wallet.withdrawable_commission) {
      setWithdrawError("Insufficient withdrawable balance")
      setWithdrawLoading(false)
      return
    }

    const { error } = await supabase.from("withdrawal_requests").insert({
      user_id: userId,
      amount,
      upi_id: upiId,
      status: "pending",
    })

    if (error) {
      setWithdrawError(error.message)
    } else {
      setWithdrawSuccess(true)
      setShowWithdrawForm(false)
      setWithdrawAmount("")
      setUpiId("")
      await loadData(userId)
    }
    setWithdrawLoading(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const statusColor: Record<string, string> = {
    pending: "text-yellow-400 bg-yellow-400/10",
    qualified: "text-green-400 bg-green-400/10",
    expired: "text-gray-400 bg-gray-400/10",
    approved: "text-blue-400 bg-blue-400/10",
    paid: "text-green-400 bg-green-400/10",
    rejected: "text-red-400 bg-red-400/10",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-1">Referrals & Earnings</h1>
        <p className="text-slate-400 text-sm mb-8">
          Share your link or coupon code. Earn 40% commission on your referral&apos;s first subscription payment.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Pending", value: `₹${(wallet?.pending_commission ?? 0).toFixed(2)}`, icon: Gift, color: "text-green-400" },
            { label: "Total Referrals", value: referrals.length, icon: Users, color: "text-blue-400" },
            { label: "Withdrawable", value: `₹${(wallet?.withdrawable_commission ?? 0).toFixed(2)}`, icon: Wallet, color: "text-purple-400" },
            { label: "Total Earned", value: `₹${(wallet?.total_earned ?? 0).toFixed(2)}`, icon: TrendingUp, color: "text-yellow-400" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`h-4 w-4 ${color}`} />
                <span className="text-slate-400 text-xs">{label}</span>
              </div>
              <p className={`text-2xl font-bold ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        {/* My Coupon Code */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="h-4 w-4 text-blue-400" />
            <h2 className="text-white font-semibold">My Coupon Code</h2>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white/10 border border-white/20 rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-white font-mono tracking-wider">{referralCode}</span>
            </div>
            <button
              onClick={copyCouponCode}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
            >
              {copiedCoupon ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copiedCoupon ? "Copied" : "Copy Code"}
            </button>
            <button
              onClick={shareLink}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
            >
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
            <p className="text-slate-400 text-xs mb-1">Share this signup link:</p>
            <div className="flex gap-2">
              <input
                readOnly
                value={referralLink}
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-xs text-white/80 font-mono truncate focus:outline-none"
              />
              <button
                onClick={copyLink}
                className="flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg transition-colors"
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        {/* Commission Model */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex items-start gap-3">
          <Info className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white text-sm font-medium">Commission Model</p>
            <p className="text-slate-400 text-xs mt-0.5">Earn 40% on first subscription month only. Commission unlocks 10 days after the referred store&apos;s first subscription remains active.</p>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: "1", title: "Share your link or code", desc: "Send your referral link or coupon code to Shopify store owners." },
              { step: "2", title: "They sign up & subscribe", desc: "When they sign up using your link/code and subscribe to a paid plan." },
              { step: "3", title: "Earn 40% commission", desc: "Earn 40% of their first subscription payment. Commission unlocks after 10 days." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold">
                  {step}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{title}</p>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referrals list */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">Your Referrals ({referrals.length})</h2>
          {referrals.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-8 w-8 text-slate-600 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">No referrals yet. Share your link to get started.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {referrals.map((r) => (
                <div key={r.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div>
                    <p className="text-slate-300 text-sm font-mono">{r.referred_user_id.slice(0, 12)}…</p>
                    <p className="text-slate-500 text-xs">{new Date(r.created_at).toLocaleDateString()}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[r.status] ?? "text-slate-400 bg-slate-400/10"}`}>
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Withdrawals */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Withdrawal Requests</h2>
            {(wallet?.withdrawable_commission ?? 0) > 0 ? (
              <button
                onClick={() => { setShowWithdrawForm(!showWithdrawForm); setWithdrawSuccess(false) }}
                className="flex items-center gap-2 text-xs px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Request Withdrawal
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-slate-400 rounded-lg cursor-not-allowed">
                <ExternalLink className="h-3 w-3" />
                Request Withdrawal
              </div>
            )}
          </div>

          {withdrawSuccess && (
            <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
              Withdrawal request submitted. We&apos;ll process it within 3-5 business days.
            </div>
          )}

          {(wallet?.withdrawable_commission ?? 0) === 0 && (
            <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-300 text-xs flex items-start gap-2">
              <Info className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              Commission unlocks 10 days after the referred store&apos;s first subscription remains active.
            </div>
          )}

          {showWithdrawForm && (
            <form onSubmit={handleWithdraw} className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
              <p className="text-white text-sm font-medium">New Withdrawal Request</p>
              <div className="grid gap-1">
                <label className="text-slate-400 text-xs">Amount (₹, min ₹100)</label>
                <input
                  type="number"
                  min="100"
                  step="1"
                  required
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="500"
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="grid gap-1">
                <label className="text-slate-400 text-xs">UPI ID</label>
                <input
                  type="text"
                  required
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="yourname@upi"
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-400"
                />
              </div>
              {withdrawError && <p className="text-red-400 text-xs">{withdrawError}</p>}
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={withdrawLoading}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors disabled:opacity-50"
                >
                  {withdrawLoading ? "Submitting…" : "Submit Request"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowWithdrawForm(false)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {withdrawals.length === 0 ? (
            <div className="text-center py-6">
              <Wallet className="h-8 w-8 text-slate-600 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">No withdrawal requests yet.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {withdrawals.map((w) => (
                <div key={w.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div>
                    <p className="text-white text-sm font-semibold">₹{w.amount.toFixed(2)}</p>
                    <p className="text-slate-500 text-xs">{w.upi_id} · {new Date(w.created_at).toLocaleDateString()}</p>
                    {w.admin_note && <p className="text-slate-400 text-xs mt-0.5 italic">{w.admin_note}</p>}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[w.status] ?? "text-slate-400 bg-slate-400/10"}`}>
                    {w.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
