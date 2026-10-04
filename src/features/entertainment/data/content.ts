export const navigationItems = [
  { label: "Music", href: "/" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

export const platformMetrics = [
  { value: "2.4K+", label: "Works managed", highlighted: true },
  { value: "180+", label: "Creative partners", highlighted: false },
  { value: "32M", label: "Reach / month", highlighted: false },
  { value: "14", label: "IP Markets", highlighted: false },
] as const;

export const aiCapabilities = [
  "News summaries & trend detection",
  "Playlist recommendations by mood and context",
  "IP matching for brand campaigns",
] as const;

export const aiResults = [
  { title: "Summer Pulse", detail: "92% match • Pop / Tropical" },
  { title: "Sunlit Stories", detail: "88% match • Lifestyle / Travel" },
  { title: "New Day Energy", detail: "84% match • Youth / Sports" },
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
    category: "AI & MUSIC",
    title: "When algorithms become creative collaborators",
    meta: "6 min read • 21.09.2026",
    gradient: "from-[#3a1766] to-[#b747c8]",
  },
  {
    index: "02",
    category: "RIGHTS & BUSINESS",
    title: "Copyright in the age of infinite content",
    meta: "9 min read • 18.09.2026",
    gradient: "from-[#173d42] to-[#1e8e7b]",
  },
  {
    index: "03",
    category: "CULTURE",
    title: "From local scene to global fandom",
    meta: "7 min read • 12.09.2026",
    gradient: "from-[#4a3511] to-[#b7821d]",
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
