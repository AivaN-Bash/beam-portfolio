import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk, inter, jetbrainsMono } from "./fonts";

function getBaseUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (raw) {
    try {
      return new URL(raw);
    } catch {
      console.error(
        `[layout] NEXT_PUBLIC_SITE_URL is set to an invalid URL ("${raw}"). ` +
          `Falling back to https://beamfolio.dev — fix the env var so canonical URLs, ` +
          `the sitemap, and OG images point at the right domain.`
      );
    }
  }
  return new URL("https://beamfolio.dev");
}

const BASE_URL = getBaseUrl();

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beam — Staff Engineer & Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beam — Staff Engineer & Systems Architect",
    description:
      "Staff Software Engineer based in Bangkok. I build secure, high-performance systems with elegant APIs and production-grade architecture.",
    creator: "@beamfolio",
    images: ["/og-image.png"],
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
