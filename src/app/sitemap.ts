import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/institutions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/entreprises", priority: 0.9, changeFrequency: "monthly" },
    { path: "/particuliers", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "monthly" },
    { path: "/confidentialite", priority: 0.2, changeFrequency: "monthly" },
    { path: "/cgv", priority: 0.2, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
