// © 2025 JoeWork.co

import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = siteConfig.url;

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never"
  | undefined;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    "",
    "/thanks",
    "/use-cases",
    "/use-cases/sunat",
    "/use-cases/ecommerce",
    "/pricing",
    "/contact",
    "/docs",
    "/blog",
  ];

  // Generate pages
  const pages = staticPages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as ChangeFrequency,
    priority: page === "" ? 1.0 : 0.8,
  }));

  return pages;
}
