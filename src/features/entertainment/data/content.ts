export const navigationItems = [
  { label: "Music", href: "/" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

export const platformMetrics = [
  { value: "64", label: "Tracks reviewed", highlighted: true },
  { value: "12", label: "Rights partners", highlighted: false },
  { value: "480K", label: "Monthly reach", highlighted: false },
  { value: "3", label: "Markets", highlighted: false },
] as const;

export const aiCapabilities = [
  "News summaries & trend detection",
  "Playlist recommendations by mood and context",
  "IP matching for brand campaigns",
] as const;

export const aiResults = [
  {
    title: "Summer Pulse",
    detail: "92% match • Pop / Tropical",
    keywords: [
      "positive",
      "energy",
      "summer",
      "launch",
      "campaign",
      "pop",
      "trend",
      "trends",
    ],
  },
  {
    title: "Sunlit Stories",
    detail: "88% match • Lifestyle / Travel",
    keywords: [
      "positive",
      "summer",
      "brand",
      "travel",
      "warm",
      "content",
      "rights",
      "licensing",
    ],
  },
  {
    title: "New Day Energy",
    detail: "84% match • Youth / Sports",
    keywords: [
      "positive",
      "energy",
      "upbeat",
      "sports",
      "youth",
      "morning",
      "trend",
      "trends",
    ],
  },
] as const;

export const ipCapabilities = [
  {
    title: "MUSIC RIGHTS",
    description: "Master, publishing, sync & performance rights",
    stat: "2.400+ assets",
  },
  {
    title: "ORIGINAL FORMATS",
    description: "Show format, branded series, character universe",
    stat: "36 franchises",
  },
  {
    title: "BRAND LICENSING",
    description: "Campaign, experience, merchandise & co-creation",
    stat: "180+ partners",
  },
] as const;

export const newsroomArticles = [
  {
    index: "01",
    category: "K-POP",
    title: "Run BTS! returns and pulls fans back into the conversation",
    meta: "1.8M reach • 01.10.2026",
    signal: "Most opened this week",
    image: "/figma/news/most-accessed-kpop.jpg",
    imageAlt: "Concert crowd facing bright stage lights",
  },
  {
    index: "02",
    category: "VIDEO PREMIERE",
    title: "Patient Zero keeps music-video watchers replaying every frame",
    meta: "1.2M reach • 28.09.2026",
    signal: "Fastest audience lift",
    image: "/figma/news/most-accessed-video.jpg",
    imageAlt: "Film crew member beside a camera on a production set",
  },
  {
    index: "03",
    category: "NEW MUSIC",
    title: "Frequency of Love climbs across R&B and pop discovery feeds",
    meta: "980K reach • 01.10.2026",
    signal: "Top saved story",
    image: "/figma/news/most-accessed-rnb.jpg",
    imageAlt: "Vocalist recording into a studio microphone",
  },
] as const;

export const footerGroups = [
  {
    title: "EXPLORE",
    accent: "lime",
    links: ["Music", "Entertainment", "Newsroom"],
  },
  {
    title: "IP & PARTNERS",
    accent: "lime",
    links: ["IP Catalog", "Licensing", "Partnerships"],
  },
  {
    title: "CONNECT",
    accent: "lime",
    links: ["Instagram", "YouTube", "TikTok"],
  },
] as const;
