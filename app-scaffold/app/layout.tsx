import type { Metadata } from "next";
import { Providers } from "@/lib/providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Khanif Alfan — UI/UX Designer",
    template: "%s | Khanif Alfan",
  },
  description:
    "Innovative UI/UX Designer with 5+ years of experience delivering 15+ successful digital products — mobile apps, responsive websites, and complex back-office systems. Based in Yogyakarta, Indonesia.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Design Systems",
    "Interaction Design",
    "Figma",
    "User Research",
    "Yogyakarta",
    "Indonesia",
    "Khanif Alfan",
  ],
  authors: [{ name: "Muhammad Khanif Alfan Akhsani" }],
  creator: "Khanif Alfan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khanifal.fan",
    siteName: "Khanif Alfan Portfolio",
    title: "Khanif Alfan — UI/UX Designer",
    description:
      "Innovative UI/UX Designer specializing in scalable design systems, human-centered digital products, and AI-assisted design workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khanif Alfan — UI/UX Designer",
    description:
      "Innovative UI/UX Designer with 5+ years delivering 15+ digital products.",
    creator: "@hialpan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
