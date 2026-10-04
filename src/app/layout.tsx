import type { Metadata } from "next";

import "@fontsource-variable/archivo";
import "@fontsource-variable/inter";

import "./globals.css";

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "PT Digitals | AI Music & Entertainment",
    template: "%s | PT Digitals",
  },
  description:
    "Where music, entertainment and news converge, powered by data, artificial intelligence and an intellectual property rights ecosystem.",
  keywords: [
    "music",
    "entertainment",
    "artificial intelligence",
    "intellectual property",
  ],
  openGraph: {
    title: "PT Digitals | AI Music & Entertainment",
    description: "Culture, amplified. Rights, respected.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PT Digitals | AI Music & Entertainment",
    description: "Culture, amplified. Rights, respected.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="bg-background text-foreground flex min-h-full flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
