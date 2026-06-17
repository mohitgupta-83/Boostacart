import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syne, Outfit } from 'next/font/google';
import { LayoutGrid, ArrowRight, Shield, CheckCircle, Sliders } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://boostacart.com/comparisons"
  },
  title: "Shopify Cart Recovery Software Comparisons",
  description: "Comparing the top cart recovery softwares for Shopify. Find out which platform has the highest ROI and lead capture rates.",
};

export default function ComparisonsHub() {
  const comparisons = [
    {
      title: "BoostACart vs Klaviyo",
      description: "Comparing BoostACart vs Klaviyo for cart abandonment. Discover the difference between capturing high-intent clicks vs delayed checkout emails.",
      href: "/boostacart-vs-klaviyo",
      tag: "Deep Dive"
    },
    {
      title: "BoostACart vs Recart",
      description: "Analyze the shifting economics of SMS broadcasting against hyper-focused automated pre-checkout lead capture.",
      href: "/boostacart-vs-recart",
      tag: "ROI Analysis"
    },
    {
      title: "Best Shopify Cart Recovery Apps",
      description: "Review and comparison of the top-performing recovery tools in the Shopify ecosystem.",
      href: "/best-shopify-cart-recovery-apps",
      tag: "Buyer Review"
    },
    {
      title: "Best Shopify Lead Capture Tools",
      description: "Compare the conversion rates and UX of the industry's most popular lead capture solutions.",
      href: "/best-shopify-lead-capture-tools",
      tag: "Listicle Review"
    },
    {
      title: "BoostACart vs Cartloop",
      description: "A head-to-head comparison detailing the cost-to-benefit ratio of conversational SMS versus automated pre-checkout widgets.",
      href: "/boostacart-vs-cartloop",
      tag: "vs Cartloop"
    },
    {
      title: "BoostACart vs Shopify Email",
      description: "Why relying solely on Shopify's native checkout recovery emails could be leaving up to 70% of potential recoveries on the table.",
      href: "/boostacart-vs-shopify-email",
      tag: "vs Shopify Email"
    },
    {
      title: "Klaviyo Alternative",
      description: "A strategic overview of Klaviyo alternatives focused specifically on conversion optimization and pre-checkout data capture.",
      href: "/klaviyo-alternative",
      tag: "Klaviyo Alternative"
    },
    {
      title: "Recart Alternative",
      description: "Compare modern approaches to SMS and Messenger marketing with pre-checkout lead capture that doesn't annoy customers.",
      href: "/recart-alternative",
      tag: "Recart Alternative"
    },
    {
      title: "Cartloop Alternative",
      description: "Find the best SMS recovery alternative for your store. Compare conversion rates and compliance rules.",
      href: "/cartloop-alternative",
      tag: "Cartloop Alternative"
    },
    {
      title: "Cart Recovery Tool Alternative",
      description: "Explore why standard cart recovery tools fail to capture early-stage drop-offs and find the best alternatives.",
      href: "/cart-recovery-tool-alternative",
      tag: "Tool Alternative"
    },
    {
      title: "Privy Alternative",
      description: "Compare high-impact email capture methods. Learn how to transition from annoying popups to frictionless pre-checkout capture.",
      href: "/privy-alternative",
      tag: "Privy Alternative"
    },
    {
      title: "Omnisend Alternative",
      description: "Evaluate your email and SMS marketing options. Compare omnichannel recovery structures for scaling Shopify brands.",
      href: "/omnisend-alternative",
      tag: "Omnisend Alternative"
    },
    {
      title: "PushOwl Alternative",
      description: "Compare web push notifications with direct SMS and email pre-checkout capture channels.",
      href: "/pushowl-alternative",
      tag: "PushOwl Alternative"
    },
    {
      title: "Tidio Alternative for Shopify",
      description: "Learn how to replace manual live chat recovery with automated high-conversion cart recapture sequences.",
      href: "/tidio-alternative-for-shopify",
      tag: "Tidio Alternative"
    },
    {
      title: "Best Recart Alternatives",
      description: "An in-depth guide comparing alternatives to Recart for automated text messaging and pre-checkout capture.",
      href: "/best-recart-alternatives",
      tag: "Alternatives List"
    }
  ];

  return (
    <div className={`min-h-screen bg-[#04091A] text-slate-200 selection:bg-purple-500/30 overflow-hidden ${outfit.className}`}>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-32 pb-24">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link href="/tools" className="px-6 py-2 rounded-full border border-white/10 text-indigo-200/70 hover:text-white hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all flex items-center gap-2">
                <LayoutGrid className="w-4 h-4" /> Tools Hub
            </Link>
            <span className="px-6 py-2 rounded-full border border-fuchsia-500/50 text-fuchsia-400 bg-fuchsia-500/10 flex items-center gap-2 font-semibold">
                <Sliders className="w-4 h-4" /> Feature Comparisons
            </span>
        </div>

        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className={`${syne.className} text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-6`}>
                Software Comparisons
            </h1>
            <p className="text-indigo-100/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Head-to-head tactical analyses between modern acquisition infrastructure and legacy systems. Learn to <Link href="/shopify-cart-recovery" className="text-fuchsia-400 underline hover:text-fuchsia-300">recover abandoned carts using BoostACart</Link> directly against the competitors.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
            {comparisons.map((comp, i) => (
                <Link key={i} href={comp.href} className="group block p-8 bg-[#0b102b]/50 backdrop-blur-md border border-white/5 rounded-3xl hover:border-fuchsia-500/30 hover:bg-[#0b102b] transition-all duration-300 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-full blur-[50px] group-hover:bg-fuchsia-500/20 transition-colors pointer-events-none"></div>
                    
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-fuchsia-300 uppercase tracking-widest mb-6">
                        <Shield className="w-3 h-3"/> {comp.tag}
                    </span>
                    
                    <h3 className={`${syne.className} text-xl font-bold text-white mb-6 group-hover:text-fuchsia-400 transition-colors`}>
                        {comp.title}
                    </h3>
                    
                    <p className="text-indigo-100/60 leading-relaxed mb-8">
                        {comp.description}
                    </p>
                    
                    <div className="flex items-center text-fuchsia-400 font-semibold group-hover:translate-x-2 transition-transform">
                        Read Breakdown <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                </Link>
            ))}
        </div>

        {/* Global Nav Integrations */}
        <section className="bg-gradient-to-r from-fuchsia-900/10 to-transparent border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Compare Features Directly</h2>
            <p className="text-indigo-100/60">See exactly what BoostACart offers out-of-the-box.</p>
          </div>
          <Link href="/features" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">View Full Feature List <CheckCircle className="w-5 h-5"/></Link>
        </section>

      </div>
      <Footer />
    </div>
  );
}
