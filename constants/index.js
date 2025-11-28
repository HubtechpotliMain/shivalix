import { assets } from "@/app/assets";

const {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} = assets;

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Services",
    url: "/services",
  },
  {
    id: "2",
    title: "Currency Converter",
    url: "/currency-converter",
  },
  {
    id: "3",
    title: "Why Shivalix",
    url: "/why-shivalix",
  },
  {
    id: "4",
    title: "Talk to us",
    url:
      "https://wa.me/919599516159?text=" +
      encodeURIComponent(
        "Hi Shivalix Forex, I would like to talk to you about forex services."
      ),
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  { id: "0", value: "1.2K+", label: "Happy customers" },
  { id: "1", value: "22+", label: "Indian branches" },
  { id: "2", value: "650K+", label: "Bank & FX partners" },
  { id: "3", value: "48h", label: "Avg. credit time" },
];

export const fxServices = [
  {
    id: "currency-exchange",
    title: "Currency Exchange",
    badge: "Exchange Currency",
    description:
      "Lock live rates online, upload documents, and receive cash notes or traveler cheques at your doorstep within 48 working hours.",
    highlights: [
      "5%+ better than market walk-in rates with Lowest Rate Guarantee",
      "22+ Indian branches plus doorstep KYC and delivery support",
      "Exotic currencies such as IDR, THB and more always in stock",
    ],
    dropdownLabel: "Currency Exchange",
    dropdownOptions: [
      "Currency Exchange in Delhi",
      "Currency Exchange in Mumbai",
      "Currency Exchange in Kolkata",
      "Currency Exchange in Chennai",
      "Currency Exchange in Hyderabad",
      "Currency Exchange in Pune",
      "Currency Exchange in Ahmedabad",
      "Currency Exchange in Gurgaon",
      "Currency Exchange in Noida",
      "Currency Exchange in Bangalore",
    ],
  },
  {
    id: "send-money-abroad",
    title: "Send Money Abroad",
    badge: "Outward Remittance",
    description:
      "Fast, compliant outward remittances for education, medical, maintenance and investments powered by same-day SWIFT transfers.",
    highlights: [
      "Canadian GIC & German blocked accounts funded with zero bank fees",
      "Swift T+0/T+1 credit timelines with real-time tracking",
      "End-to-end RBI documentation and dedicated relationship managers",
    ],
    dropdownLabel: "Top Currencies",
    dropdownOptions: [
      "USD Rate",
      "Euro Rate",
      "British Pound Rate",
      "Australian Dollar Rate",
      "Canadian Dollar Rate",
      "Singapore Dollar Rate",
      "New Zealand Dollar Rate",
      "Hong Kong Dollar Rate",
      "UAE Dirham Rate",
      "Saudi Riyal Rate",
      "Swiss Franc Rate",
      "Japanese Yen Rate",
      "Thai Bhat Rate",
    ],
  },
  {
    id: "prepaid-travel-card",
    title: "Prepaid Travel Forex Card",
    badge: "Travel Card",
    description:
      "Zero-markup, zero ATM withdrawal and zero cross-currency fee card to cover tuition, lifestyle spends and in-trip emergencies.",
    highlights: [
      "Load multiple currencies online or via concierge support",
      "Complimentary travel insurance and 24/7 card assistance",
      "Earn up to 3.3% cashback (max ₹7,500) on new card activations",
    ],
  },
  {
    id: "trade-remittance",
    title: "Trade Remittance",
    badge: "Enterprise FX",
    description:
      "Specialized corporate desks for importer/exporter payables, vendor payouts and tour operators with transparent FX hedging.",
    highlights: [
      "Bulk file uploads, approval workflows and single-view tracking",
      "Doorstep KYC, pickup/drop for documents and banker coordination",
      "Integrated compliance reviews for FEMA/RBI documentation",
    ],
  },
  {
    id: "faas",
    title: "Forex as a Service (FaaS)",
    badge: "Embedded FX",
    description:
      "Plug-and-play forex rails for universities, travel platforms and fintechs to embed currency exchange & remittances natively.",
    highlights: [
      "REST APIs, white-label journeys and co-branded experiences",
      "Shared compliance, treasury and settlement infrastructure",
      "Dedicated success pods plus predictable revenue share models",
    ],
  },
];

export const roadmap = [
  {
    id: "0",
    title: "Share your travel or transfer need",
    text: "Visit our portal, register or call a branch to tell us whether you need currency, forex card or outward remittance.",
    date: "Step 01",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Choose currency & upload documents",
    text: "Select buy currency/forex card, enter the value, and upload mandatory RBI documents for instant verification.",
    date: "Step 02",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Confirm delivery or pickup preference",
    text: "Opt for doorstep delivery/collection or schedule a branch visit across 22+ Indian locations.",
    date: "Step 03",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Make payment & track credit",
    text: "Complete payment online, receive real-time tracking, and get funds credited within 48 working hours.",
    date: "Step 04",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Complete suite of forex, remittance, visa and student solutions with real-time tracking and dedicated experts.";

export const collabContent = [
  {
    id: "0",
    title: "Private & business travel currency",
    text: "Lock in best exchange rates for leisure, corporate or group travel.",
  },
  {
    id: "1",
    title: "Education & student remittances",
    text: "Zero-fee student cards, tuition fee payments, and GIC/blocked accounts.",
  },
  {
    id: "2",
    title: "Compliance-ready corporate desks",
    text: "Doorstep KYC, RBI-compliant documentation and transparent tracking.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Private Visit",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Business Visit",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Education",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Employment",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Emigration",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Medical travel",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Blocked accounts",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Travel insurance",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Travel Forex Essentials",
    description: "Best exchange rates on cash currency & multi-currency cards.",
    price: null,
    features: [
      "Save 5%+ versus market walk-in rates with transparent pricing",
      "Doorstep cash currency delivery or branch pickup in 22+ cities",
      "Reload/unload support and 24/7 emergency card blocking",
    ],
  },
  {
    id: "1",
    title: "Zero-fee Student Card",
    description:
      "Zero markup, zero ATM withdrawal fee, zero cross-currency charges.",
    price: null,
    features: [
      "Covers tuition fee payments, lifestyle spends and university fees",
      "Up to ₹7,500 cashback + zero bank charges on GIC/blocked account funding",
      "Dedicated student desk and document concierge for parents",
    ],
  },
  {
    id: "2",
    title: "Global Remittance Suite",
    description:
      "Fast outward remittances for GIC, medical, business and salary transfers.",
    price: null,
    features: [
      "Same-day credit (T+0/T+1) to Canadian GIC & German blocked accounts",
      "Corporate solutions for payroll, vendor, and tour operator payouts",
      "Expert compliance reviews & RBI documentation assistance",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Save More",
    text: "Get 5%+ better-than-market exchange rates plus lowest-rate guarantee.",
    backgroundUrl: "../app/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Fast Credit",
    text: "Currency deliveries and remittance credit within 48 working hours*.",
    backgroundUrl: "../app/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Expert Help",
    text: "Dedicated forex experts guide every document and compliance step.",
    backgroundUrl: "../app/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Seasonal Cashback",
    text: "Earn up to 3.3% cashback (max ₹7,500) on new forex card or cash orders.",
    backgroundUrl: "../app/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Zero-fee Student Card",
    text: "Zero markup, cross-currency, ATM and tuition fee charges built-in.",
    backgroundUrl: "../app/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "GIC & Blocked Accounts",
    text: "Fund Canadian GIC or German blocked accounts with zero bank fees.",
    backgroundUrl: "../app/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
