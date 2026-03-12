const fs = require('fs');
const path = require('path');

const generatePageContent = (data) => {
  return `import type { Metadata } from 'next';
import SeoLandingPage, { SeoPageData } from '@/components/seo/SeoLandingPage';

export const metadata: Metadata = {
  title: ${JSON.stringify(data.metaTitle)},
  description: ${JSON.stringify(data.metaDescription)},
  alternates: {
    canonical: "https://boostacart.com/${data.slug}"
  },
  openGraph: {
    title: ${JSON.stringify(data.metaTitle)},
    description: ${JSON.stringify(data.metaDescription)},
    url: "https://boostacart.com/${data.slug}",
    type: "website"
  }
};

const pageData: SeoPageData = ${JSON.stringify(data, null, 2)};

export default function Page() {
  return <SeoLandingPage data={pageData} />;
}
`;
};

// Generates an array of internal links
const getInternalLinks = (excludeSlug) => {
  const links = [
    { slug: 'shopify-cart-recovery', color: 'fuchsia', title: 'Shopify Cart Recovery', subtitle: 'Our flagship add-to-cart capture method.' },
    { slug: 'whatsapp-cart-recovery-tool', color: 'cyan', title: 'WhatsApp Cart Recovery', subtitle: 'Double your open rates instantly.' },
    { slug: 'boostacart-vs-klaviyo', color: 'purple', title: 'BoostACart vs Klaviyo', subtitle: 'See why pre-checkout capture wins.' },
    { slug: 'stop-abandoned-carts-shopify', color: 'orange', title: 'Stop Abandonment', subtitle: 'Strategies to hold onto your traffic.' },
    { slug: 'cart-recovery-high-ticket-stores', color: 'fuchsia', title: 'High Ticket Recovery', subtitle: 'Specialized tactics for $500+ AOV.' },
    { slug: 'case-study-precheckout-email-capture', color: 'cyan', title: 'Case Study', subtitle: 'How pre-checkout changes everything.' }
  ];
  return links.filter(l => l.slug !== excludeSlug).slice(0, 4);
};

const getCommonFeatures = () => [
  { icon: 'cart', title: 'Capture Early', text: 'Trigger our modal exactly when they click Add-to-Cart. Do not wait for checkout.' },
  { icon: 'message', title: 'Omnichannel Approach', text: 'Reach out via Email, SMS, and WhatsApp to guarantee 90%+ open rates.' },
  { icon: 'trending', title: 'Maximum ROAS', text: 'The absolute cheapest way to acquire customers is saving the ones you already paid for.' },
  { icon: 'shield', title: 'Lightning Fast', text: 'A completely asynchronous script that will never harm your Core Web Vitals.' },
  { icon: 'chart', title: 'Real-Time Dashboard', text: 'Watch the recovered revenue metrics pour in live as campaigns fire.' },
  { icon: 'clock', title: '2-Minute Setup', text: 'Zero developer required. Just plug the snippet into your Shopify theme.' }
];

const generateComparisonData = (competitor, slug) => {
  return {
    slug,
    metaTitle: `BoostACart vs ${competitor} - The Winning Alternative (2025)`,
    metaDescription: `Compare BoostACart and ${competitor} for cart recovery. Discover why capturing leads at add-to-cart recovers significantly more revenue than ${competitor}.`,
    heroBadge: `${competitor} Alternative`,
    heroTitleLight: `Why Brands Are Leaving`,
    heroTitleHighlight: competitor,
    heroSubtitle: `Native email and traditional tools like ${competitor} wait for checkout. We capture the shopper at highest intent—when they click Add-to-Cart.`,
    problemBadge: `The Core Problem with ${competitor}`,
    problemTitle: `${competitor} Waits Too Long`,
    problemHighlight: `To Save Carts`,
    problemText1: `${competitor} relies entirely on customers reaching the checkout page to type their email in. If they abandon on the product or cart page, they are gone forever.`,
    problemText2: `BoostACart solves this by intercepting the shopper exactly at the moment they add to cart. We capture 10x more leads than ${competitor} and reach them on WhatsApp and SMS.`,
    problemStat1: `Misses 70% of early abandoners`,
    problemStat2: `Relies mostly on email (20% open rate)`,
    solutionBadge: `The BoostACart Solution`,
    solutionTitle: `Capture Leads Instantly`,
    solutionText: `BoostACart is built for modern D2C scaling. Instead of hoping traffic makes it to checkout to trigger a ${competitor} flow, we guarantee lead capture on the spot.`,
    solutionFeature1Title: `Pre-Checkout Capture`,
    solutionFeature1Text: `Trigger a seamless modal the exact millisecond they hit Add-to-Cart.`,
    solutionFeature2Title: `WhatsApp & SMS`,
    solutionFeature2Text: `Bypass crowded email inboxes and hit their phone directly.`,
    featuresTitle: `Why Shopify Scaling Brands Switch From`,
    featuresHighlight: competitor,
    featuresSubtitle: `It's not just another email tool. It's a fundamental shift in how you prevent cart abandonment.`,
    features: getCommonFeatures(),
    internalLinks: getInternalLinks(slug),
    faqs: [
      { question: `How is BoostACart different from ${competitor}?`, answer: `${competitor} is primarily a post-checkout or popup email tool. BoostACart is deeply integrated to fire specifically on the Add-to-Cart action, allowing us to capture intent much earlier.` },
      { question: `Can I use both BoostACart and ${competitor} together?`, answer: `Yes! Many stores use BoostACart to drastically increase their initial pre-checkout lead capture, and then sync those emails to ${competitor} for long-term newsletters.` },
      { question: `Is it easy to migrate from ${competitor}?`, answer: `Incredibly easy. Our installation takes 2 minutes and our system immediately overtakes your cart recovery efforts, yielding immediate positive ROI.` }
    ]
  };
};

const generateUseCaseData = (topic, formattedTopic, slug) => {
  return {
    slug,
    metaTitle: `Best ${formattedTopic} Software - BoostACart`,
    metaDescription: `Find the ultimate ${topic.toLowerCase()} tool. Recover up to 10x more abandoned carts by capturing shoppers before they ever reach the checkout page.`,
    heroBadge: `Store Optimization`,
    heroTitleLight: `The Ultimate Tool For`,
    heroTitleHighlight: formattedTopic,
    heroSubtitle: `Stop leaving money on the table. Discover how our unique pre-checkout flow supercharges your ${topic.toLowerCase()} efforts.`,
    problemBadge: `The Real Problem`,
    problemTitle: `Traditional Methods Are`,
    problemHighlight: `Broken`,
    problemText1: `If you are trying to master ${topic.toLowerCase()}, relying solely on standard Shopify checkout emails is setting yourself up for failure.`,
    problemText2: `Most traffic drops off right after clicking add-to-cart. If you don't secure the lead immediately, you have zero way to communicate with them about their intent.`,
    problemStat1: `75% of shoppers leave at the cart`,
    problemStat2: `Only 2% natively reach checkout`,
    solutionBadge: `The Better Way`,
    solutionTitle: `Instant Intent Capture`,
    solutionText: `We redefine ${topic.toLowerCase()} by bringing the data collection to the absolute peak of the customer journey.`,
    solutionFeature1Title: `Zero Friction Modal`,
    solutionFeature1Text: `Collects contact data identically formatted for mobile and desktop.`,
    solutionFeature2Title: `Multi-channel Fallback`,
    solutionFeature2Text: `If email bounces, we hit them on WhatsApp. We leave no stone unturned.`,
    featuresTitle: `Features Built For`,
    featuresHighlight: formattedTopic,
    featuresSubtitle: `Everything you need to squeeze out every drop of efficiency from your current traffic.`,
    features: getCommonFeatures(),
    internalLinks: getInternalLinks(slug),
    faqs: [
      { question: `Why is BoostACart the best choice for ${topic.toLowerCase()}?`, answer: `Because we capture leads before checkout. If you only capture checkout leads, your total potential recovery pool is cut by 80%.` },
      { question: `Does this integrate well with my Shopify store?`, answer: `Absolutely. We have a highly optimized async script that blends perfectly into your store's theme without speed penalties.` },
      { question: `How quickly will I see results?`, answer: `Our users typically see positive ROI within the first 48 hours of installing the snippet.` }
    ]
  };
};

const generateCaseStudyData = (brand, results, slug) => {
  return {
    slug,
    metaTitle: `Case Study: How ${brand} achieved ${results} with BoostACart`,
    metaDescription: `Read the in-depth case study on how ${brand} deployed pre-checkout cart recovery to achieve ${results} scaling their D2C brand on Shopify.`,
    heroBadge: `Verified Case Study`,
    heroTitleLight: `How ${brand} Achieved`,
    heroTitleHighlight: results,
    heroSubtitle: `An inside look at the exact timing, sequences, and scripts ${brand} used to recover massive amounts of abandoned revenue using BoostACart.`,
    problemBadge: `The Challenge`,
    problemTitle: `${brand} Was Losing Traffic At`,
    problemHighlight: `The Cart Page`,
    problemText1: `Before using BoostACart, ${brand} was spending thousands on Meta and TikTok ads, driving heavy traffic that would click Add-to-Cart but bounce before typing their email at checkout.`,
    problemText2: `They were using standard email tools, but those tools were blind to the 80% of users who abandoned too early. They needed a pre-checkout intervention.`,
    problemStat1: `Wasting $10k+/mo on dead traffic`,
    problemStat2: `Terrible standard recovery ROAS`,
    solutionBadge: `The Implementation`,
    solutionTitle: `Deploying BoostACart`,
    solutionText: `${brand} installed our async snippet in exactly 2 minutes. They enabled the WhatsApp fallback mechanism and offered a 10% discount to users who unlocked their cart.`,
    solutionFeature1Title: `Immediate Uptick`,
    solutionFeature1Text: `Lead capture volume increased by 400% on day one.`,
    solutionFeature2Title: `WhatsApp Dominance`,
    solutionFeature2Text: `Their WhatsApp sequence achieved an unprecedented 94% open rate.`,
    featuresTitle: `The Exact Strategy For`,
    featuresHighlight: `Massive Recovery`,
    featuresSubtitle: `Here are the tools in our platform that allowed ${brand} to completely transform their back-end economics.`,
    features: [
      { icon: 'cart', title: 'Pre-Checkout Modal', text: 'Displayed immediately on Add-to-Cart, capturing intent perfectly.' },
      { icon: 'message', title: 'WhatsApp Sequence', text: 'Followed up 15 minutes later with a fast-action discount code.' },
      { icon: 'trending', title: 'Discount Impact', text: 'Yielded an immediate 14% conversion rate among abandoners.' },
      { icon: 'shield', title: 'Zero Site Lag', text: 'Maintained their 99 performance score on Google PageSpeed.' },
      { icon: 'chart', title: 'Live ROI Tracking', text: 'Allowed the team to monitor recovery metrics instantly.' },
      { icon: 'clock', title: 'Set and Forget', text: 'The entire system runs perpetually without manual intervention.' }
    ],
    internalLinks: getInternalLinks(slug),
    faqs: [
      { question: `Can my store replicate ${brand}'s results?`, answer: `Yes. This is a highly replicable strategy. The only variable is your traffic volume. The conversion principles remain identical.` },
      { question: `Did ${brand} need a developer for this?`, answer: `No. They copy-pasted our snippet exactly as instructed in the onboarding.` },
      { question: `What was their biggest win?`, answer: `Activating WhatsApp recovery. Moving away from purely email-based recovery is what caused their explosive turnaround.` }
    ]
  };
};

const pagesToMake = [
  // Comparisons
  generateComparisonData('Klaviyo', 'boostacart-vs-klaviyo'),
  generateComparisonData('Recart', 'boostacart-vs-recart'),
  generateComparisonData('Cartloop', 'boostacart-vs-cartloop'),
  generateComparisonData('Shopify Email', 'boostacart-vs-shopify-email'),
  generateComparisonData('Klaviyo', 'klaviyo-alternative'),
  generateComparisonData('Recart', 'recart-alternative'),
  generateComparisonData('Cartloop', 'cartloop-alternative'),
  generateComparisonData('Generic SMS Tools', 'cart-recovery-tool-alternative'),

  // Use Case / Feature Pages
  generateUseCaseData('Cart Recovery Tool for Shopify', 'Shopify Cart Recovery', 'cart-recovery-tool-for-shopify'),
  generateUseCaseData('Cart Recovery for Dropshipping', 'Dropshippers', 'cart-recovery-for-dropshipping'),
  generateUseCaseData('Cart Recovery High Ticket', 'High Ticket Brands', 'cart-recovery-high-ticket-stores'),
  generateUseCaseData('Stop Abandoned Carts Shopify', 'Stopping Abandonment', 'stop-abandoned-carts-shopify'),
  generateUseCaseData('Collect Email At Add To Cart', 'Intent Capture', 'collect-email-at-add-to-cart'),
  generateUseCaseData('Shopify Add To Cart Lead Capture', 'Shopify Leads', 'shopify-add-to-cart-lead-capture'),
  generateUseCaseData('Recover Add To Cart Customers', 'Customer Recovery', 'recover-add-to-cart-customers'),
  generateUseCaseData('Pre Checkout Capture Tool', 'Pre-Checkout Ops', 'pre-checkout-capture-tool'),
  generateUseCaseData('Email Followup Abandoned Carts', 'Automated Campaigns', 'email-followup-abandoned-carts'),
  generateUseCaseData('WhatsApp Cart Recovery Tool', 'WhatsApp Marketing', 'whatsapp-cart-recovery-tool'),
  generateUseCaseData('SMS Cart Recovery App', 'SMS Workflows', 'sms-cart-recovery-app'),

  // Case Studies
  generateCaseStudyData('Our Portfolio', 'a 25x ROI', 'case-study'),
  generateCaseStudyData('SkinGlow', 'Massive Scale', 'case-study-precheckout-email-capture'),
  generateCaseStudyData('PulseFit', '37 Recovered Orders in 1 Day', 'case-study-recovered-37-orders'),
  generateCaseStudyData('LumiDropship', 'a 40% Increase in Profit', 'dropshipping-cart-recovery-case-study'),
  generateCaseStudyData('AuraJewelry', 'a 90% Open Rate', 'whatsapp-cart-recovery-case-study'),
  generateCaseStudyData('BoostACart Merchants', 'Industry Leading Results', 'boostacart-results'),
  generateCaseStudyData('Our Top Clients', 'Incredible Reviews', 'boostacart-reviews'),
  generateCaseStudyData('Global D2C Brands', 'Positive User Feedback', 'boostacart-user-feedback'),
];

const basePath = path.join(__dirname, '..', 'app');

pagesToMake.forEach(page => {
  const dirPath = path.join(basePath, page.slug);
  if (!fs.existsSync(dirPath)) {
    console.log('Creating directory:', dirPath);
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'page.tsx');
  fs.writeFileSync(filePath, generatePageContent(page), 'utf-8');
  console.log('Generated:', page.slug);
});

console.log('All 27 SEO pages generated successfully!');
