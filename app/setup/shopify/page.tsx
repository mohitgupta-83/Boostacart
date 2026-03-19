"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check, Code, ShoppingCart, HelpCircle } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"

export default function ShopifySetupPage() {
  const [copied, setCopied] = useState(false)

  const embedCode = `<!-- ========================= -->
<!-- BoostACart FINAL INSTALL -->
<!-- ========================= -->

{% if template contains 'product' %}
<script>
(function () {
  function getVariantId() {
    const input = document.querySelector('[name="id"]');
    return input ? input.value : null;
  }

  function getQuantity() {
    const qty = document.querySelector('[name="quantity"]');
    return qty ? parseInt(qty.value, 10) || 1 : 1;
  }

  document.addEventListener('click', async function (e) {
    const button = e.target.closest(
      'button[type="submit"], .add-to-cart, [aria-label*="Add to cart"]'
    );
    if (!button) return;

    e.preventDefault();

    const variantId = getVariantId();
    if (!variantId) return;

    const productData = {
      product_title: {{ product.title | json }},
      product_handle: {{ product.handle | json }},
      product_id: {{ product.id | json }},
      product_url: window.location.href,
      variant_id: variantId,
      quantity: getQuantity(),
      shop: "{{ shop.permanent_domain }}"
    };

    // 1️⃣ Add product to cart (AJAX-safe)
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ id: variantId, quantity: productData.quantity }]
      })
    });

    // 2️⃣ Open widget in new tab
    const params = new URLSearchParams(productData).toString();
    const widgetUrl =
      'https://boostacaartt.netlify.app/widget/' +
      productData.shop +
      '?' +
      params;

    window.open(widgetUrl, '_blank');
  });
})();
</script>
{% endif %}

<!-- ========================= -->
<!-- End BoostACart -->
<!-- ========================= -->`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="min-h-screen bg-[#04091A] font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      {/* Header */}
      <header className="bg-[#04091A]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/setup"
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Setup</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Shopify Integration</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">Shopify Integration Setup</h1>
          <p className="text-xl text-indigo-100/70 max-w-2xl mx-auto font-light">
            Follow these simple steps to integrate BoostACart into your Shopify store and start capturing more leads.
          </p>
        </div>

        <div className="mb-12 bg-[#0b102b]/60 backdrop-blur-xl p-6 rounded-2xl text-white border border-cyan-500/20 shadow-2xl">
          <div className="flex items-center mb-4">
            <HelpCircle className="h-6 w-6 mr-2 text-cyan-400" />
            <h3 className="text-xl font-bold">Need Help Getting Started?</h3>
          </div>
          <p className="text-indigo-100/70 mb-4">Our support team is here to assist you with the integration process.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://youtu.be/sQOZcoPP31I"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-lg hover:brightness-110 transition-all duration-300 font-bold border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] hover:-translate-y-0.5 text-center"
            >
              Watch Setup Video
            </a>
            <Link
              href="/contact"
              className="flex-1 px-4 py-3 bg-[#0a0f24] text-white rounded-lg hover:bg-white/5 transition-all duration-300 font-bold border border-white/10 text-center"
            >
              Contact Support
            </Link>
            <a
              href={getWhatsAppLink("918303208502", "support")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-400 to-green-600 text-white rounded-lg hover:brightness-110 transition-all duration-300 font-bold border-0 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 text-center"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-8 mb-12">
          {/* Step 1 */}
          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-xl hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shadow-lg shadow-emerald-500/20 text-lg">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">Access Your Shopify Admin</h2>
            </div>
            <p className="text-indigo-100/70 mb-4">
              Log in to your Shopify admin dashboard and navigate to your store's theme editor.
            </p>
            <div className="bg-[#030510] p-4 rounded-lg border border-white/5">
              <p className="text-indigo-200/60 text-sm">
                <span className="text-emerald-400 font-medium">Path:</span> Online Store → Themes → Click "Edit Code" on
                your active theme
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-xl hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shadow-lg shadow-emerald-500/20 text-lg">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">Open theme.liquid File</h2>
            </div>
            <p className="text-indigo-100/70 mb-4">In the code editor sidebar, locate and open the main layout file.</p>
            <div className="bg-[#030510] p-4 rounded-lg border border-white/5">
              <p className="text-indigo-200/60 text-sm">
                <span className="text-emerald-400 font-medium">File:</span> Layout/theme.liquid
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-xl hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shadow-lg shadow-emerald-500/20 text-lg">
                3
              </div>
              <h2 className="text-2xl font-bold text-white">Locate the Closing Body Tag</h2>
            </div>
            <p className="text-indigo-100/70 mb-4">Scroll to the bottom of the file and find the closing body tag.</p>
            <div className="bg-[#030510] p-4 rounded-lg border border-white/5">
              <p className="text-indigo-200/60 text-sm font-mono">
                Look for: <span className="text-cyan-400">{"</body>"}</span> and{" "}
                <span className="text-cyan-400">{"</html>"}</span>
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-xl hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shadow-lg shadow-emerald-500/20 text-lg">
                4
              </div>
              <h2 className="text-2xl font-bold text-white">Paste the BoostACart Code</h2>
            </div>
            <p className="text-indigo-100/70 mb-4">
              Copy the code below and paste it just before the closing {"</body>"} tag.
            </p>
            <div className="bg-[#030510] p-4 rounded-lg border border-white/5">
              <p className="text-indigo-200/60 text-sm">
                <span className="text-emerald-400 font-medium">Position:</span> Just before {"</body>"} and {"</html>"}
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-xl hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shadow-lg shadow-emerald-500/20 text-lg">
                5
              </div>
              <h2 className="text-2xl font-bold text-white">Save and Deploy</h2>
            </div>
            <p className="text-indigo-100/70 mb-4">
              Click the "Save" button in Shopify to deploy your changes. Your BoostACart widget is now live!
            </p>
            <div className="bg-[#030510] p-4 rounded-lg border border-white/5">
              <p className="text-indigo-200/60 text-sm">
                <span className="text-emerald-400 font-medium">Status:</span> Changes are live immediately after saving
              </p>
            </div>
          </div>
        </div>

        {/* Code Display Section */}
        <div className="mb-12">
          <div className="bg-[#0b102b]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Embed Code</h3>
              </div>
              <button
                onClick={handleCopy}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  copied
                    ? "bg-green-600/20 text-green-400 border border-green-500/50"
                    : "bg-blue-600/20 text-blue-400 border border-blue-500/50 hover:bg-blue-600/30"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Block */}
            <div className="bg-[#030510] rounded-lg border border-white/5 overflow-hidden">
              <div className="overflow-x-auto">
                <pre className="p-4 text-sm text-cyan-400 font-mono whitespace-pre-wrap break-words">
                  <code>{embedCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-gradient-to-r from-[#0d163a] to-[#0a0f24] backdrop-blur-sm p-8 rounded-2xl text-white text-center border border-cyan-500/20 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-indigo-100/70 mb-6">
            If you encounter any issues during the integration process, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtu.be/sQOZcoPP31I"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white rounded-lg hover:brightness-110 transition-all duration-300 font-bold border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] hover:-translate-y-0.5"
            >
              Watch Setup Video
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#0a0f24] text-white rounded-lg hover:bg-white/5 transition-all duration-300 font-bold border border-white/10"
            >
              Contact Support
            </Link>
            <a
              href={getWhatsAppLink("918303208502", "support")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-green-600 text-white rounded-lg hover:brightness-110 transition-all duration-300 font-bold border-0 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
