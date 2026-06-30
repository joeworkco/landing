import { useCases } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/trabajadores-ia",
    "/company-brain",
    "/consultoria-ia",
    "/casos-de-uso",
    "/recursos",
    "/recursos/calculadora-roi",
    "/recursos/como-crear-company-brain",
    "/blog",
    "/privacy-policy",
    "/terms-of-service",
  ];
  const casePaths = useCases.map(({ slug }) => `/casos-de-uso/${slug}`);

  return [...staticPaths, ...casePaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/casos-de-uso/") ? 0.7 : 0.8,
  }));
}
