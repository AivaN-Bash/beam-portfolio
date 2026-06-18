import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("https://beamfolio.dev");

export const metadata: Metadata = {
  metadataBase: BASE_URL,
  title: {
    default: "Beam — Staff Engineer & Systems Architect",
    template: "%s | Beam",
  },
  description:
    "Staff Software Engineer based in Bangkok. I build secure, high-performance systems with elegant APIs, real-time infrastructure, and production-grade architecture.",
  keywords: ["software engineer", "staff engineer", "Bangkok", "TypeScript", "Next.js", "systems architecture"],
  authors: [{ name: "Beam" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beam — Staff Engineer & Systems Architect",
    description:
      "Staff Software Engineer based in Bangkok. I build secure, high-performance systems with elegant APIs and production-grade architecture.",
    url: "/",
    siteName: "Beam",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beam — Staff Engineer & Systems Architect",
    description:
      "Staff Software Engineer based in Bangkok. I build secure, high-performance systems with elegant APIs and production-grade architecture.",
    creator: "@beamdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
