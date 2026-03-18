import type { Metadata } from 'next';
import SeoLandingPage, { SeoPageData } from '@/components/seo/SeoLandingPage';

export const metadata: Metadata = {
  title: "Best Recart Alternative for Shopify (2025) - BoostACart",
  description: "Looking for a Recart alternative? See why modern Shopify brands are switching to BoostACart for higher-converting, intent-driven lead capture.",
  alternates: {
    canonical: "https://boostacart.com/best-recart-alternatives"
  },
  openGraph: {
    title: "Best Recart Alternative for Shopify (2025) - BoostACart",
    description: "Looking for a Recart alternative? See why modern Shopify brands are switching to BoostACart for higher-converting, intent-driven lead capture.",
    url: "https://boostacart.com/best-recart-alternatives",
    type: "website"
  }
};

const pageData: SeoPageData = {
  "slug": "best-recart-alternatives",
  "metaTitle": "Best Recart Alternative for Shopify (2025) - BoostACart",
  "metaDescription": "Looking for a Recart alternative? See why modern Shopify brands are switching to BoostACart for higher-converting, intent-driven lead capture.",
  "heroBadge": "Recart Alternative",
  "heroTitleLight": "The Superior Alternative To",
  "heroTitleHighlight": "Recart",
  "heroSubtitle": "If you are tired of legacy popup flows and low cart recovery rates, our pre-checkout capture system is the exact upgrade you need.",
  "problemBadge": "The Core Problem",
  "problemTitle": "Recart Waits Too Long",
  "problemHighlight": "To Save Carts",
  "problemText1": "Most Recart users rely entirely on customers reaching the checkout page or triggering annoying popups. But generic popups annoy users, and waiting for checkout means you lose 80% of your traffic.",
  "problemText2": "If a user drops off at the product page or cart drawer, traditional tools are completely blind. You can't remarket to them because you never got their contact info.",
  "problemStat1": "High bounce rates on standard popups",
  "problemStat2": "Misses pre-checkout abandoners",
  "solutionBadge": "The BoostACart Solution",
  "solutionTitle": "Catch Shoppers Before They",
  "solutionText": "BoostACart captures emails and phone numbers frictionlessly the exact millisecond a customer clicks \"Add to Cart\". It is seamless, invisible, and hyper-effective.",
  "solutionFeature1Title": "Zero Friction Modal",
  "solutionFeature1Text": "Trigger a native-feeling interceptor at the exact moment of highest purchase intent.",
  "solutionFeature2Title": "WhatsApp & SMS Ready",
  "solutionFeature2Text": "Instantly push captured leads into automated WhatsApp loops for unignorable recovery.",
  "featuresTitle": "Why Brands Switch From",
  "featuresHighlight": "Recart",
  "featuresSubtitle": "It is a fundamental shift in how you secure and retain your existing store traffic.",
  "features": [
    {
      "icon": "cart",
      "title": "Capture Early",
      "text": "Trigger our modal exactly when they click Add-to-Cart. Do not wait for checkout."
    },
    {
      "icon": "message",
      "title": "Omnichannel Approach",
      "text": "Reach out via Email, SMS, and WhatsApp to guarantee 90%+ open rates."
    },
    {
      "icon": "trending",
      "title": "Maximum ROAS",
      "text": "The absolute cheapest way to acquire customers is saving the ones you already paid for."
    },
    {
      "icon": "shield",
      "title": "Lightning Fast",
      "text": "A completely asynchronous script that will never harm your Core Web Vitals."
    },
    {
      "icon": "chart",
      "title": "Real-Time Dashboard",
      "text": "Watch the recovered revenue metrics pour in live as campaigns fire."
    },
    {
      "icon": "clock",
      "title": "2-Minute Setup",
      "text": "Zero developer required. Just plug the snippet into your Shopify theme."
    }
  ],
  "internalLinks": [
    {
      "slug": "shopify-cart-recovery",
      "color": "fuchsia",
      "title": "Shopify Cart Recovery",
      "subtitle": "Our flagship add-to-cart capture method."
    },
    {
      "slug": "whatsapp-cart-recovery-tool",
      "color": "cyan",
      "title": "WhatsApp Cart Recovery",
      "subtitle": "Double your open rates instantly."
    },
    {
      "slug": "boostacart-vs-klaviyo",
      "color": "purple",
      "title": "BoostACart vs Klaviyo",
      "subtitle": "See why pre-checkout capture wins."
    },
    {
      "slug": "stop-abandoned-carts-shopify",
      "color": "orange",
      "title": "Stop Abandonment",
      "subtitle": "Strategies to hold onto your traffic."
    }
  ],
  "faqs": [
    {
      "question": "Why is BoostACart a great Recart alternative?",
      "answer": "Because it operates before checkout. Traditional popups annoy users. Capturing emails silently at the Add-to-Cart click provides a frictionless 10x lead generation boost."
    },
    {
      "question": "Is it hard to uninstall Recart and install BoostACart?",
      "answer": "Not at all. You just disable your legacy app and install our lightweight async snippet in less than two minutes. No coding required."
    },
    {
      "question": "Can I use both at the same time?",
      "answer": "Yes! You can use BoostACart to drastically increase your initial pre-checkout lead capture volume, and let your existing ESP handle standard newsletters."
    },
    {
      "question": "Which platform offers better ROI?",
      "answer": "Since BoostACart captures up to 10x more leads by intercepting the Add-to-Cart event, the resulting cart recovery ROI is mathematically much higher."
    }
  ]
};

export default function Page() {
  return <SeoLandingPage data={pageData} />;
}
