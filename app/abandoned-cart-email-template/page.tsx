import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, Copy, CheckCircle, MessageSquare, Clock, Zap } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Abandoned Cart Email Templates That Recover Sales (Copy-Paste)",
  description: "Get 5 proven abandoned cart email templates. Copy-paste subject lines, body text, and CTAs that convert 15-25% of abandoners back into buyers.",
  alternates: { canonical: "https://boostacart.com/abandoned-cart-email-template" },
  openGraph: {
    title: "Abandoned Cart Email Templates That Recover Sales (Copy-Paste)",
    description: "Get 5 proven abandoned cart email templates. Copy-paste subject lines, body text, and CTAs that convert 15-25% of abandoners back into buyers.",
    url: "https://boostacart.com/abandoned-cart-email-template",
    type: "website",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function AbandonedCartEmailTemplate() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "When should I send the first abandoned cart email?", "acceptedAnswer": { "@type": "Answer", "text": "Send the first email within 1 hour of abandonment for the highest conversion rate. After 1 hour, the shopper's intent cools rapidly." } },
      { "@type": "Question", "name": "How many abandoned cart emails should I send?", "acceptedAnswer": { "@type": "Answer", "text": "A 3-email sequence is the proven sweet spot: 1 hour, 24 hours, and 72 hours. More than 3 emails typically hurts conversion and increases unsubscribes." } },
      { "@type": "Question", "name": "Should I include a discount in my abandoned cart email?", "acceptedAnswer": { "@type": "Answer", "text": "Not in the first email. Save discounts for the 3rd message to avoid training buyers to abandon intentionally. The first email should simply remind and provide a direct link back." } },
      { "@type": "Question", "name": "What is the average open rate for abandoned cart emails?", "acceptedAnswer": { "@type": "Answer", "text": "Abandoned cart emails average a 45% open rate — significantly higher than standard marketing emails (22%). Subject line quality is the biggest variable." } }
    ]
  };

  const templates = [
    {
      timing: "Email 1 — Within 1 Hour",
      subject: "Hey, you left something behind 🛒",
      preview: "Your cart is waiting — and so is your item.",
      body: `Hi {First Name},

You were checking out {Product Name} a little while ago — and you got close!

Your cart is still holding your items, but we can't guarantee stock much longer.

→ Complete your purchase: {Cart Link}

If you have any questions, just reply to this email. We're happy to help.

Talk soon,
{Store Name} Team`,
      tip: "Keep it short and zero-pressure. No discount. Just a clean reminder.",
      color: "cyan"
    },
    {
      timing: "Email 2 — 24 Hours Later",
      subject: "Still thinking? Here's what others are saying...",
      preview: "1,200+ 5-star reviews. See why they love it.",
      body: `Hi {First Name},

We noticed your cart is still waiting. You clearly have great taste 😄

Here's what customers who bought {Product Name} are saying:

★★★★★ "{Customer Review 1}" — {Customer Name}
★★★★★ "{Customer Review 2}" — {Customer Name}

You're also backed by our 30-day hassle-free return policy, so there's zero risk.

→ Pick up where you left off: {Cart Link}

Cheers,
{Store Name}`,
      tip: "Include 2-3 authentic reviews and reinforce trust signals (returns policy, guarantee).",
      color: "fuchsia"
    },
    {
      timing: "Email 3 — 72 Hours Later (Final)",
      subject: "Last chance: 10% off just for you ⚡",
      preview: "Offer expires in 24 hours.",
      body: `Hi {First Name},

We're holding your cart for just a little longer — but your 10% discount code expires soon.

Use code RECOVER10 at checkout:
→ {Cart Link}

⏰ This offer expires in 24 hours.

After that, we'll release your cart items back to general stock.

If you have questions, hit reply — we read every email.

{Store Name} Team`,
      tip: "Create genuine scarcity. 72-hour offers see the highest urgency conversion when combined with the earlier touchpoints.",
      color: "emerald"
    }
  ];

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 overflow-hidden ${outfit.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 pt-32 pb-24 space-y-20">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-indigo-400/60">
          <Link href="/" className="hover:text-indigo-300">Home</Link>
          <span>/</span>
          <Link href="/abandoned-cart-recovery" className="hover:text-indigo-300">Abandoned Cart Recovery</Link>
          <span>/</span>
          <span className="text-indigo-200">Email Templates</span>
        </nav>

        {/* Hero */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-full text-fuchsia-400 text-sm font-semibold">Free Copy-Paste Templates</span>
          <h1 className={`${syne.className} text-5xl md:text-6xl font-bold text-white leading-tight`}>
            Abandoned Cart <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Email Templates</span> That Actually Recover Sales
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            5 battle-tested email templates for your 3-step abandoned cart recovery sequence. Proven subject lines, body copy, and CTAs — ready to copy, paste, and deploy today.
          </p>
        </div>

        {/* Why email templates matter */}
        <section className="bg-[#0b102b]/60 border border-white/5 rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className={`${syne.className} text-3xl font-bold text-white`}>Why Most Abandoned Cart Emails Fail</h2>
          <div className="text-lg text-indigo-100/70 leading-relaxed space-y-4">
            <p>The average abandoned cart email recovery rate is just 5-10%. Yet best-in-class stores consistently achieve 20-35%. The difference isn't the tool — it's the copy, timing, and channel strategy.</p>
            <p>Most brands make three critical mistakes: they send too late (more than 1 hour after abandonment), they lead with a discount (training customers to game the system), and they ignore channels where their customers actually pay attention — like <Link href="/whatsapp-cart-recovery-tool" className="text-cyan-400 hover:underline">WhatsApp</Link> and SMS.</p>
            <p>The templates below are structured around behavioral psychology principles: urgency, social proof, loss aversion, and reciprocity — the four drivers of cart recovery conversion.</p>
          </div>
        </section>

        {/* Templates */}
        {templates.map((template, i) => (
          <section key={i} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl bg-${template.color}-500/20 border border-${template.color}-500/30 flex items-center justify-center text-${template.color}-400 font-bold`}>{i+1}</div>
              <h2 className={`${syne.className} text-2xl md:text-3xl font-bold text-white`}>{template.timing}</h2>
            </div>

            <div className="bg-[#0b102b]/60 border border-white/5 rounded-3xl overflow-hidden">
              <div className="border-b border-white/5 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-indigo-400/60 uppercase tracking-widest">Subject</span>
                  <code className="text-white font-mono text-base">{template.subject}</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-indigo-400/60 uppercase tracking-widest">Preview</span>
                  <code className="text-indigo-300/70 font-mono text-sm">{template.preview}</code>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="bg-[#04091A] border border-white/5 rounded-2xl p-6 font-mono text-sm text-indigo-100/80 leading-relaxed whitespace-pre-line mb-6">
                  {template.body}
                </div>
                <div className={`flex items-start gap-3 p-4 bg-${template.color}-500/10 border border-${template.color}-500/20 rounded-xl`}>
                  <MessageSquare className={`w-5 h-5 text-${template.color}-400 shrink-0 mt-0.5`}/>
                  <p className="text-sm text-indigo-100/70"><span className={`font-bold text-${template.color}-400`}>Pro Tip: </span>{template.tip}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Why BoostACart beats email alone */}
        <section className="bg-gradient-to-r from-cyan-900/20 to-fuchsia-900/20 border border-white/10 rounded-3xl p-10 md:p-16 space-y-6">
          <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-white`}>Email Is Just the Start</h2>
          <p className="text-xl text-indigo-100/70 leading-relaxed">
            Even perfect email templates only reach customers who made it to checkout. The majority of abandoners never provide their email during checkout at all. <Link href="/shopify-cart-recovery" className="text-cyan-400 hover:underline">BoostACart captures their details at Add-to-Cart</Link> — giving you email, phone, and WhatsApp access to 10x more potential recoveries before anyone reaches checkout.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center space-y-2 p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-4xl font-black text-cyan-400">Email</div>
              <div className="text-indigo-400/60 text-sm">22% open rate on average</div>
            </div>
            <div className="text-center space-y-2 p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-4xl font-black text-fuchsia-400">SMS</div>
              <div className="text-indigo-400/60 text-sm">98% open rate, read in 3 min</div>
            </div>
            <div className="text-center space-y-2 p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-4xl font-black text-emerald-400">WhatsApp</div>
              <div className="text-indigo-400/60 text-sm">90%+ open, conversational</div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">Start Recovering Carts <ArrowRight className="w-5 h-5"/></Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className={`${syne.className} text-3xl font-bold text-white`}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6 hover:bg-[#0b102b] transition-all">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-fuchsia-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-white/5 pt-10">
          <h2 className={`${syne.className} text-2xl font-bold text-white mb-6`}>More Recovery Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Abandoned Cart Recovery Guide", href: "/abandoned-cart-recovery" },
              { title: "Abandoned Cart SMS Templates", href: "/abandoned-cart-sms-template" },
              { title: "Shopify Cart Recovery Setup", href: "/shopify-cart-recovery" },
              { title: "Cart Recovery for Dropshipping", href: "/cart-recovery-for-dropshipping" },
              { title: "All Free Tools", href: "/tools" },
              { title: "Case Studies", href: "/case-studies" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="p-4 bg-[#0b102b]/40 border border-white/5 rounded-xl hover:border-fuchsia-500/30 hover:bg-[#0b102b] transition-all text-indigo-200 hover:text-fuchsia-400 text-sm font-medium flex items-center gap-2">
                <ArrowRight className="w-4 h-4 shrink-0"/> {link.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
