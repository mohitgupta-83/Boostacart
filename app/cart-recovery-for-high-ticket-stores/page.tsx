import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, MessageCircle, BarChart, ShoppingBag, Trophy, Gem, HelpCircle } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Cart Recovery for High-Ticket Shopify Stores: The Concierge Approach",
  description: "High-ticket sales require a premium recovery touch. Learn how to use automated WhatsApp and concierge-style emails to recover $1,000+ orders.",
  alternates: { canonical: "https://boostacart.com/cart-recovery-for-high-ticket-stores" },
  openGraph: {
    title: "Cart Recovery for High-Ticket Shopify Stores: The Concierge Approach",
    description: "High-ticket sales require a premium recovery touch. Learn how to use automated WhatsApp and concierge-style emails to recover $1,000+ orders.",
    url: "https://boostacart.com/cart-recovery-for-high-ticket-stores",
    type: "article",
    images: [{ url: "https://boostacart.com/og-image.png", width: 1200, height: 630 }]
  }
};

export default function HighTicketRecovery() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How is high-ticket recovery different from standard e-com?", "acceptedAnswer": { "@type": "Answer", "text": "High-ticket recovery focuses on objection handling and trust rather than simple discounts. Shoppers spending $1,000+ often have specific questions or anxieties that need a human-like 'concierge' touch via WhatsApp or detailed email." } },
      { "@type": "Question", "name": "Does BoostACart help with objection handling?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our WhatsApp recovery engine allows for two-way communication, enabling your team or automated bots to answer product questions in real-time as users abandon their carts." } },
      { "@type": "Question", "name": "Should I offer discounts on high-ticket abandoned carts?", "acceptedAnswer": { "@type": "Answer", "text": "For high-ticket items, we recommend 'Value-Add' bonuses (like free extended warranty or a consulting call) over simple percentage discounts, which can sometimes devalue a premium brand." } }
    ]
  };

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 overflow-hidden ${outfit.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 pt-32 pb-24 space-y-20">

        {/* Hero */}
        <div className="space-y-6">
          <nav className="flex items-center gap-2 text-sm text-indigo-400/60 mb-4">
            <Link href="/" className="hover:text-indigo-300">Home</Link>
            <span>/</span>
            <Link href="/shopify-cart-recovery" className="hover:text-indigo-300">Recovery</Link>
          </nav>
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider">Premium Store Strategy</span>
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold text-white leading-tight`}>
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Concierge Approach</span> to Cart Recovery
          </h1>
          <p className="text-xl text-indigo-100/70 leading-relaxed max-w-3xl">
            High-ticket consumers don't respond to "Spin to Win" wheels. They respond to trust, service, and accessibility. Transform your deserted carts into premium sales conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Upgrade Your Store Brand <Trophy className="w-5 h-5"/></Link>
            <Link href="/abandoned-cart-whatsapp-template" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Concierge Templates</Link>
          </div>
        </div>

        {/* The Luxury Difference Section */}
        <section className="bg-[#0b102b]/60 border border-white/5 rounded-[3rem] p-8 md:p-16 space-y-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                     <h2 className={`${syne.className} text-3xl font-bold text-white`}>Why High-Ticket Requires Special Handling</h2>
                     <p className="text-lg text-indigo-100/60 leading-relaxed">
                        When a customer abandons a $2,000 order, it's rarely because they forgot. It's because they have a lingering question or a financial objection. Standard automated emails can't solve these problems.
                     </p>
                     <div className="space-y-6">
                         <div className="flex gap-4">
                             <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 h-fit"><HelpCircle className="w-6 h-6"/></div>
                             <div>
                                 <h4 className="font-bold text-white">Question Detection</h4>
                                 <p className="text-sm text-indigo-100/50">Capture the lead early and use WhatsApp to ask: "Was there something I could clarify for you?"</p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                             <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 h-fit"><Shield className="w-6 h-6"/></div>
                             <div>
                                 <h4 className="font-bold text-white">Trust Reinforcement</h4>
                                 <p className="text-sm text-indigo-100/50">Send high-detail information sheets and video demos automatically via rich-media recovery channels.</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-[120px]"></div>
                    <div className="relative bg-[#04091A] border border-white/10 rounded-[3rem] p-10 md:p-16 text-center space-y-8 group">
                        <Gem className="w-16 h-16 text-indigo-400 mx-auto animate-pulse"/>
                        <h3 className={`${syne.className} text-3xl font-bold text-white`}>The $5k Recovery Rule</h3>
                        <p className="text-indigo-100/70 leading-relaxed italic">
                           "One WhatsApp conversation recovered an $8,400 order for us. By being available to answer a custom installation question in real-time, we saved a sale that no email app ever could."
                        </p>
                        <div className="pt-6 border-t border-white/5">
                            <span className="text-indigo-400 font-bold">— Alessandro V., Founder of RivaLuxury</span>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* Strategies specialized for High Ticket */}
        <section className="space-y-12">
            <h2 className={`${syne.className} text-3xl md:text-5xl font-bold text-white text-center`}>The Premium Recovery Playbook</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: "Two-Way WhatsApp Automation", desc: "Allow shoppers to reply and ask about warranties, dimensions, or shipping directly in the recovery thread." },
                    { title: "Rich-Media Demonstrations", desc: "Don't just say your product is great. Send a high-res video of it in action automatically to their phone." },
                    { title: "Limited-Time Priority Booking", desc: "Instead of a discount, offer a priority shipping or a 'reserved build slot' in your recovery messages." },
                    { title: "Asynchronous Support", desc: "Be available on their schedule. WhatsApp allows shoppers to reply whenever they have a spare moment." },
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-[#0b102b]/40 border border-white/5 rounded-3xl space-y-4 hover:border-cyan-500/30 transition-all">
                        <h4 className="text-xl font-bold text-white flex items-center gap-3"><CheckCircle className="text-emerald-400 w-5 h-5 shrink-0"/> {item.title}</h4>
                        <p className="text-sm text-indigo-100/60 leading-relaxed pl-8">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Global CTA */}
        <div className="text-center space-y-8 pt-12">
            <h2 className={`${syne.className} text-4xl md:text-7xl font-bold text-white leading-tight`}>
               Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Sales Process</span>
            </h2>
            <p className="text-xl text-indigo-100/60 max-w-2xl mx-auto font-light leading-relaxed">
               Stop using mass-market tools for your premium brand. Implement the high-ticket recovery engine used by elite luxury retailers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
                <Link href="/" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl">Scale Your Premium Brand <Zap className="w-5 h-5 fill-black"/></Link>
                <Link href="/pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">View Solution Plans</Link>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className={`${syne.className} text-3xl font-bold text-white text-center`}>High-Ticket Recovery FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-[#0b102b]/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Q: {faq.name}</h3>
                <p className="text-indigo-200/60 pl-4 border-l-2 border-cyan-500/30">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
