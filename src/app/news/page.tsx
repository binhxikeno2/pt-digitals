import type { Metadata } from "next";

import { NewsLandingPage } from "@/features/entertainment/components/news-landing-page";

export const metadata: Metadata = {
  title: "News",
  description:
    "Global music, film and fandom stories shaping the feed today.",
};

export default function NewsPage() {
  return <NewsLandingPage />;
}
