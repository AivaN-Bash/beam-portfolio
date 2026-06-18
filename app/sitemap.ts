import type { MetadataRoute } from "next";
import { projects } from "./data/portfolio";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://beamfolio.dev").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, priority: 1 },
    { url: `${BASE_URL}/work`, lastModified: now, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, priority: 0.7 },
    { url: `${BASE_URL}/experience`, lastModified: now, priority: 0.6 },
    ...projects.map((p) => ({
      url: `${BASE_URL}/work/${p.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}
