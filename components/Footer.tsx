import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-slate-950/80 backdrop-blur-sm border-t border-slate-800/50 py-16 relative z-10 w-full mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity mb-6">
                            <ShoppingCart className="w-6 h-6 text-blue-500" />
                            <span className="text-xl font-bold text-white">BoostACart</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Capture email and phone numbers at Add-to-Cart and follow up automatically to recover lost sales.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link></li>
                            <li><Link href="/abandoned-cart-recovery" className="hover:text-white transition-colors">Strategy Hub</Link></li>
                            <li><Link href="/best-shopify-cart-recovery-apps" className="hover:text-white transition-colors">App Reviews</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Industries</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/cart-recovery-for-dropshipping" className="hover:text-white transition-colors">Dropshipping</Link></li>
                            <li><Link href="/cart-recovery-for-high-ticket-stores" className="hover:text-white transition-colors">High-Ticket</Link></li>
                            <li><Link href="/cart-recovery-for-fashion-brands" className="hover:text-white transition-colors">Fashion & Apparel</Link></li>
                            <li><Link href="/cart-recovery-for-beauty-brands" className="hover:text-white transition-colors">Beauty & Cosmetics</Link></li>
                            <li><Link href="/shopify-cart-recovery" className="hover:text-white transition-colors">All Shopify Stores</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Comparisons</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/privy-alternative" className="hover:text-white transition-colors">Privy Alternative</Link></li>
                            <li><Link href="/omnisend-alternative" className="hover:text-white transition-colors">Omnisend Alternative</Link></li>
                            <li><Link href="/klaviyo-alternative" className="hover:text-white transition-colors">Klaviyo Alternative</Link></li>
                            <li><Link href="/boostacart-vs-klaviyo" className="hover:text-white transition-colors">Vs Klaviyo</Link></li>
                            <li><Link href="/boostacart-vs-recart" className="hover:text-white transition-colors">Vs Recart</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/abandoned-cart-statistics" className="hover:text-white transition-colors">2025 Statistics</Link></li>
                            <li><Link href="/cart-abandonment-rate-by-industry" className="hover:text-white transition-colors">Industry Benchmarks</Link></li>
                            <li><Link href="/abandoned-cart-whatsapp-template" className="hover:text-white transition-colors">WhatsApp Templates</Link></li>
                            <li><Link href="/abandoned-cart-sms-template" className="hover:text-white transition-colors">SMS Templates</Link></li>
                            <li><Link href="/reduce-cart-abandonment" className="hover:text-white transition-colors">Reduce Abandonment</Link></li>
                            <li><Link href="/shopify-email-capture-popup" className="hover:text-white transition-colors">Lead Capture Guide</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/affiliate" className="hover:text-white transition-colors">Partners</Link></li>
                            <li><Link href="/site-map" className="hover:text-white transition-colors">Sitemap</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} BoostACart. All rights reserved.</p>
                    <div className="flex space-x-6 text-sm">
                        <Link href="/auth/login" className="text-gray-500 hover:text-white transition-colors">Sign In</Link>
                        <Link href="/auth/sign-up" className="text-gray-500 hover:text-white transition-colors">Create Account</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
