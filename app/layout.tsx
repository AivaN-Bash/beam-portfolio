import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beam — Staff Engineer & Systems Architect",
  description:
    "Staff Software Engineer based in Bangkok. I build secure, high-performance systems with elegant APIs, real-time infrastructure, and production-grade architecture.",
  keywords: ["software engineer", "staff engineer", "Bangkok", "TypeScript", "Next.js", "systems architecture"],
  authors: [{ name: "Beam" }],
  openGraph: {
    title: "Beam — Staff Engineer & Systems Architect",
    description:
      "Staff Software Engineer based in Bangkok. I build secure, high-performance systems with elegant APIs and production-grade architecture.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
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
