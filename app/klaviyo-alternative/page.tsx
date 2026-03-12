import type { Metadata } from 'next';
import SeoLandingPage, { SeoPageData } from '@/components/seo/SeoLandingPage';

export const metadata: Metadata = {
  title: "BoostACart vs Klaviyo - The Winning Alternative (2025)",
  description: "Compare BoostACart and Klaviyo for cart recovery. Discover why capturing leads at add-to-cart recovers significantly more revenue than Klaviyo.",
  alternates: {
    canonical: "https://boostacart.com/klaviyo-alternative"
  },
  openGraph: {
    title: "BoostACart vs Klaviyo - The Winning Alternative (2025)",
    description: "Compare BoostACart and Klaviyo for cart recovery. Discover why capturing leads at add-to-cart recovers significantly more revenue than Klaviyo.",
    url: "https://boostacart.com/klaviyo-alternative",
    type: "website"
  }
};

const pageData: SeoPageData = {
  "slug": "klaviyo-alternative",
  "metaTitle": "BoostACart vs Klaviyo - The Winning Alternative (2025)",
  "metaDescription": "Compare BoostACart and Klaviyo for cart recovery. Discover why capturing leads at add-to-cart recovers significantly more revenue than Klaviyo.",
  "heroBadge": "Klaviyo Alternative",
  "heroTitleLight": "Why Brands Are Leaving",
  "heroTitleHighlight": "Klaviyo",
  "heroSubtitle": "Native email and traditional tools like Klaviyo wait for checkout. We capture the shopper at highest intent—when they click Add-to-Cart.",
  "problemBadge": "The Core Problem with Klaviyo",
  "problemTitle": "Klaviyo Waits Too Long",
  "problemHighlight": "To Save Carts",
  "problemText1": "Klaviyo relies entirely on customers reaching the checkout page to type their email in. If they abandon on the product or cart page, they are gone forever.",
  "problemText2": "BoostACart solves this by intercepting the shopper exactly at the moment they add to cart. We capture 10x more leads than Klaviyo and reach them on WhatsApp and SMS.",
  "problemStat1": "Misses 70% of early abandoners",
  "problemStat2": "Relies mostly on email (20% open rate)",
  "solutionBadge": "The BoostACart Solution",
  "solutionTitle": "Capture Leads Instantly",
  "solutionText": "BoostACart is built for modern D2C scaling. Instead of hoping traffic makes it to checkout to trigger a Klaviyo flow, we guarantee lead capture on the spot.",
  "solutionFeature1Title": "Pre-Checkout Capture",
  "solutionFeature1Text": "Trigger a seamless modal the exact millisecond they hit Add-to-Cart.",
  "solutionFeature2Title": "WhatsApp & SMS",
  "solutionFeature2Text": "Bypass crowded email inboxes and hit their phone directly.",
  "featuresTitle": "Why Shopify Scaling Brands Switch From",
  "featuresHighlight": "Klaviyo",
  "featuresSubtitle": "It's not just another email tool. It's a fundamental shift in how you prevent cart abandonment.",
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
      "question": "How is BoostACart different from Klaviyo?",
      "answer": "Klaviyo is primarily a post-checkout or popup email tool. BoostACart is deeply integrated to fire specifically on the Add-to-Cart action, allowing us to capture intent much earlier."
    },
    {
      "question": "Can I use both BoostACart and Klaviyo together?",
      "answer": "Yes! Many stores use BoostACart to drastically increase their initial pre-checkout lead capture, and then sync those emails to Klaviyo for long-term newsletters."
    },
    {
      "question": "Is it easy to migrate from Klaviyo?",
      "answer": "Incredibly easy. Our installation takes 2 minutes and our system immediately overtakes your cart recovery efforts, yielding immediate positive ROI."
    }
  ]
};

export default function Page() {
  return <SeoLandingPage data={pageData} />;
}
