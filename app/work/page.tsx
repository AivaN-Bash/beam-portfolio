import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Beam — case studies in security engineering, API design, real-time infrastructure, and full-stack systems.",
  openGraph: {
    title: "Work — Beam",
    description:
      "Selected projects — case studies in security engineering, API design, and real-time infrastructure.",
    url: "/work",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beam — Selected Work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Beam",
    description: "Selected projects — case studies in security engineering, API design, and real-time infrastructure.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return <WorkClient />;
}
