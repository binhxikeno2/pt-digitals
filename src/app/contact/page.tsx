import type { Metadata } from "next";

import { ContactLandingPage } from "@/features/entertainment/components/contact-landing-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Share a project or partnership idea with the PT Digitals team.",
};

export default function ContactPage() {
  return <ContactLandingPage />;
}
