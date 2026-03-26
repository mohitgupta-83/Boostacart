import Link from "next/link"
import { MessageCircle, Mail, Phone, ArrowLeft, Zap } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"

export const metadata = {
  title: "Contact Us – BoostACart",
  description: "Get in touch with the BoostACart team for support, demos, or questions about our Shopify lead capture and cart recovery tools.",
  alternates: { canonical: "https://boostacart.com/contact" },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#04091A] font-sans selection:bg-cyan-500/30 relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[140px] mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-fuchsia-600/10 blur-[140px] mix-blend-screen animate-pulse pointer-events-none" />

      {/* Header */}
      <header className="bg-[#04091A]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-indigo-100/60 hover:text-white transition-colors text-sm group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BoostACart</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            <Zap className="h-3.5 w-3.5" />
            We reply within minutes
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400">
              Touch
            </span>
          </h1>
          <p className="text-base sm:text-lg text-indigo-100/60 max-w-2xl mx-auto">
            Need help with your BoostACart setup or have questions? We're here to help you maximize your lead generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Methods */}
          <div className="space-y-4">
            {/* WhatsApp */}
            <div className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 p-5 sm:p-6 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl flex items-center justify-center border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">WhatsApp Support</h3>
                  <p className="text-sm text-indigo-100/50">Get instant help via WhatsApp</p>
                </div>
              </div>
              <a
                href={getWhatsAppLink("918303208502", "support")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-4 rounded-lg hover:brightness-110 transition-all duration-200 font-medium flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 p-5 sm:p-6 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] flex-shrink-0">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email Support</h3>
                  <p className="text-sm text-indigo-100/50">Send us your questions</p>
                </div>
              </div>
              <a
                href="mailto:boostacart@gmail.com"
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white py-3 px-4 rounded-lg hover:brightness-110 transition-all duration-200 font-medium flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>boostacart@gmail.com</span>
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 hover:border-fuchsia-500/30 p-5 sm:p-6 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-fuchsia-500/30 shadow-[0_0_15px_rgba(192,38,211,0.1)] flex-shrink-0">
                  <Phone className="h-6 w-6 text-fuchsia-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone Support</h3>
                  <p className="text-sm text-indigo-100/50">Call us directly</p>
                </div>
              </div>
              <a
                href="tel:+918303208502"
                className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:brightness-110 transition-all duration-200 font-medium flex items-center justify-center space-x-2 shadow-lg shadow-fuchsia-500/20"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 8303208502</span>
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#0b102b]/60 backdrop-blur-xl border border-white/5 p-5 sm:p-6 rounded-2xl shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="h-1 w-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full inline-block" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-5">
              {[
                {
                  q: "How do I set up my widget?",
                  a: 'After creating your account, go to the Dashboard and click on "Customization" to configure your widget settings.',
                  link: { href: "/setup", label: "View Setup Guide →" },
                },
                {
                  q: "How do I upgrade my plan?",
                  a: "Contact us via WhatsApp or email to discuss upgrading your plan and increasing your lead limits.",
                },
                {
                  q: "Can I customize the widget appearance?",
                  a: "Yes! You can customize colors, text, form fields, and discount codes in the Customization section of your dashboard.",
                },
                {
                  q: "How do leads get captured?",
                  a: "When visitors fill out your widget form, their information is automatically saved to your dashboard for follow-up.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <h4 className="font-medium text-white text-sm mb-1.5">{faq.q}</h4>
                  <p className="text-xs sm:text-sm text-indigo-100/50 leading-relaxed mb-1.5">{faq.a}</p>
                  {faq.link && (
                    <Link
                      href={faq.link.href}
                      className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors"
                    >
                      {faq.link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 backdrop-blur-xl border border-white/5 p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Ready to Boost Your Cart Conversions?
            </h3>
            <p className="text-indigo-100/60 mb-6 text-sm sm:text-base">
              Join thousands of stores already capturing more leads with BoostACart
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-lg font-semibold hover:brightness-110 transition-all duration-200 shadow-lg"
              >
                Start Free Trial
              </Link>
              <a
                href={getWhatsAppLink("918303208502", "demo")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0b102b]/80 text-white rounded-lg font-medium border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>Get Personal Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
