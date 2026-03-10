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
                            <li>
                                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">Features</Link>
                            </li>
                            <li>
                                <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
                            </li>
                            <li>
                                <Link href="/cart-recovery-tool-for-shopify" className="hover:text-white transition-colors">Cart Recovery</Link>
                            </li>
                            <li>
                                <Link href="/setup/shopify" className="hover:text-white transition-colors">Setup Guide</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Top Use Cases</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link href="/shopify-cart-recovery" className="hover:text-white transition-colors">Shopify Cart Recovery</Link>
                            </li>
                            <li>
                                <Link href="/whatsapp-cart-recovery-tool" className="hover:text-white transition-colors">WhatsApp Cart Recovery</Link>
                            </li>
                            <li>
                                <Link href="/recover-add-to-cart-customers" className="hover:text-white transition-colors">Recover Add-to-Cart</Link>
                            </li>
                            <li>
                                <Link href="/stop-abandoned-carts-shopify" className="hover:text-white transition-colors">Stop Abandoned Carts</Link>
                            </li>
                            <li>
                                <Link href="/case-study-recovered-37-orders" className="hover:text-white transition-colors">Success Stories</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Comparisons</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link href="/boostacart-vs-klaviyo" className="hover:text-white transition-colors">Vs Klaviyo</Link>
                            </li>
                            <li>
                                <Link href="/klaviyo-alternative" className="hover:text-white transition-colors">Klaviyo Alternative</Link>
                            </li>
                            <li>
                                <Link href="/boostacart-vs-recart" className="hover:text-white transition-colors">Vs Recart</Link>
                            </li>
                            <li>
                                <Link href="/recart-alternative" className="hover:text-white transition-colors">Recart Alternative</Link>
                            </li>
                            <li>
                                <Link href="/boostacart-vs-cartloop" className="hover:text-white transition-colors">Vs Cartloop</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                            </li>
                            <li>
                                <Link href="/affiliate" className="hover:text-white transition-colors">Partner Program</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                            </li>
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
