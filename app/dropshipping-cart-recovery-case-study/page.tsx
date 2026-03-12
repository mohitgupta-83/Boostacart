import type { Metadata } from 'next';
import SeoLandingPage, { SeoPageData } from '@/components/seo/SeoLandingPage';

export const metadata: Metadata = {
  title: "Case Study: How LumiDropship achieved a 40% Increase in Profit with BoostACart",
  description: "Read the in-depth case study on how LumiDropship deployed pre-checkout cart recovery to achieve a 40% Increase in Profit scaling their D2C brand on Shopify.",
  alternates: {
    canonical: "https://boostacart.com/dropshipping-cart-recovery-case-study"
  },
  openGraph: {
    title: "Case Study: How LumiDropship achieved a 40% Increase in Profit with BoostACart",
    description: "Read the in-depth case study on how LumiDropship deployed pre-checkout cart recovery to achieve a 40% Increase in Profit scaling their D2C brand on Shopify.",
    url: "https://boostacart.com/dropshipping-cart-recovery-case-study",
    type: "website"
  }
};

const pageData: SeoPageData = {
  "slug": "dropshipping-cart-recovery-case-study",
  "metaTitle": "Case Study: How LumiDropship achieved a 40% Increase in Profit with BoostACart",
  "metaDescription": "Read the in-depth case study on how LumiDropship deployed pre-checkout cart recovery to achieve a 40% Increase in Profit scaling their D2C brand on Shopify.",
  "heroBadge": "Verified Case Study",
  "heroTitleLight": "How LumiDropship Achieved",
  "heroTitleHighlight": "a 40% Increase in Profit",
  "heroSubtitle": "An inside look at the exact timing, sequences, and scripts LumiDropship used to recover massive amounts of abandoned revenue using BoostACart.",
  "problemBadge": "The Challenge",
  "problemTitle": "LumiDropship Was Losing Traffic At",
  "problemHighlight": "The Cart Page",
  "problemText1": "Before using BoostACart, LumiDropship was spending thousands on Meta and TikTok ads, driving heavy traffic that would click Add-to-Cart but bounce before typing their email at checkout.",
  "problemText2": "They were using standard email tools, but those tools were blind to the 80% of users who abandoned too early. They needed a pre-checkout intervention.",
  "problemStat1": "Wasting $10k+/mo on dead traffic",
  "problemStat2": "Terrible standard recovery ROAS",
  "solutionBadge": "The Implementation",
  "solutionTitle": "Deploying BoostACart",
  "solutionText": "LumiDropship installed our async snippet in exactly 2 minutes. They enabled the WhatsApp fallback mechanism and offered a 10% discount to users who unlocked their cart.",
  "solutionFeature1Title": "Immediate Uptick",
  "solutionFeature1Text": "Lead capture volume increased by 400% on day one.",
  "solutionFeature2Title": "WhatsApp Dominance",
  "solutionFeature2Text": "Their WhatsApp sequence achieved an unprecedented 94% open rate.",
  "featuresTitle": "The Exact Strategy For",
  "featuresHighlight": "Massive Recovery",
  "featuresSubtitle": "Here are the tools in our platform that allowed LumiDropship to completely transform their back-end economics.",
  "features": [
    {
      "icon": "cart",
      "title": "Pre-Checkout Modal",
      "text": "Displayed immediately on Add-to-Cart, capturing intent perfectly."
    },
    {
      "icon": "message",
      "title": "WhatsApp Sequence",
      "text": "Followed up 15 minutes later with a fast-action discount code."
    },
    {
      "icon": "trending",
      "title": "Discount Impact",
      "text": "Yielded an immediate 14% conversion rate among abandoners."
    },
    {
      "icon": "shield",
      "title": "Zero Site Lag",
      "text": "Maintained their 99 performance score on Google PageSpeed."
    },
    {
      "icon": "chart",
      "title": "Live ROI Tracking",
      "text": "Allowed the team to monitor recovery metrics instantly."
    },
    {
      "icon": "clock",
      "title": "Set and Forget",
      "text": "The entire system runs perpetually without manual intervention."
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
      "question": "Can my store replicate LumiDropship's results?",
      "answer": "Yes. This is a highly replicable strategy. The only variable is your traffic volume. The conversion principles remain identical."
    },
    {
      "question": "Did LumiDropship need a developer for this?",
      "answer": "No. They copy-pasted our snippet exactly as instructed in the onboarding."
    },
    {
      "question": "What was their biggest win?",
      "answer": "Activating WhatsApp recovery. Moving away from purely email-based recovery is what caused their explosive turnaround."
    }
  ]
};

export default function Page() {
  return <SeoLandingPage data={pageData} />;
}
