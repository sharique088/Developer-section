export const DEVELOPER_LOGIN_URL = "https://developer.hayy.ai";
export const DEVELOPER_HUB_URL = "https://agent.hayy.ai";

export const navLinks = [
  { label: "Buyer/Seller", href: "#", active: false },
  { label: "Developer", href: "#", active: true },
  { label: "Agent Portal", href: "#", active: false },
  { label: "For Service Provider", href: "#", active: false },
] as const;

export const featureBarItems = [
  {
    title: "Al-Powered Matching",
    lines: ["Smarter matching,", "better outcomes"],
    icon: "/images/icons/ai-matching.svg",
  },
  {
    title: "Global Exposure",
    lines: ["Reach qualified buyers", "in 30+ languages"],
    icon: "/images/icons/global.svg",
  },
  {
    title: "Faster Conversions",
    lines: ["Shorter sales cycle &", "higher close rates"],
    icon: "/images/icons/growth.svg",
  },
  {
    title: "Trusted & Compliant",
    lines: ["DLD-accredited platform", "with secure data practices"],
    icon: "/images/icons/shield.svg",
  },
] as const;

export const platformFeatures = [
  {
    title: "Project Showcase",
    lines: ["Create stunning listings", "with floor plans, media", "& details."],
    icon: "/images/icons/building.svg",
  },
  {
    title: "AI-Qualified Leads",
    lines: ["Receive only high-intent", "leads matched to your", "projects."],
    icon: "/images/icons/profile.svg",
  },
  {
    title: "Lead Management",
    lines: ["Track, manage & communicate", "with leads and our agencies effortlessly."],
    icon: "/images/icons/list.svg",
  },
  {
    title: "Performance Insights",
    lines: ["Real-time analytics to monitor", "engagement, lead", " and conversions."],
    icon: "/images/icons/growth-insights.svg",
  },
  {
    title: "Inventory Control",
    lines: ["Manage availability, prices,", "phases & updates in", "real-time."],
    icon: "/images/icons/box.svg",
  },
  {
    title: "Secure & Compliant",
    lines: ["Built on trust with DLD", "accreditation & enterprise-", "grade security."],
    icon: "/images/icons/shield-tick.svg",
  },
] as const;

export const footerPlatform = ["For Developers", "For Agencies", "How it Works", "Festures"];
export const footerCompany = [
  "Process Coverage",
  "Work Products",
  "Compliance",
  "Assessment Readiness",
];
export const footerResources = ["Blog", "Help Center", "Guides", "Case Studies"];

export const demoFormBullets = [
  { text: "Personalized Demo", icon: "/images/icons/people.svg" },
  { text: "Global Reach", icon: "/images/icons/demo-bullet-globe.svg" },
  { text: "From Inquiry to Closing", icon: "/images/icons/people.svg" },
] as const;
