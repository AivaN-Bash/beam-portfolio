import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Staff Engineer based in Bangkok. Systems thinker. People-first. Security engineering, API design, and real-time infrastructure.",
  openGraph: {
    title: "About — Beam",
    description:
      "Staff Engineer based in Bangkok. Systems thinker. People-first.",
    url: "/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Beam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Beam",
    description: "Staff Engineer based in Bangkok. Systems thinker. People-first.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
