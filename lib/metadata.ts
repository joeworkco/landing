// © 2025 JoeWork.co
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

// Base metadata used across the site
const baseMetadata = {
  name: siteConfig.name,
  siteUrl: siteConfig.url,
  description: siteConfig.description,
  ogImage: `${siteConfig.url}/og/default.png`, // Default OG Image path
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  keywords: [
    "AI staff",
    "AI worker",
    "browser automation",
    "task automation",
    "automatización",
    "asistente virtual",
    "PyME LATAM",
    "JoeWork",
    // Add more relevant keywords
  ],
};

type MetadataProps = {
  title?: string;
  description?: string;
  path?: string; // Relative path (e.g., '/use-cases/sunat')
  ogImageName?: string; // e.g., 'use-case-sunat.png' to load from /public/og/
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description,
  path = "",
  ogImageName = "default.png",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${baseMetadata.name}`
    : baseMetadata.name;
  const pageDescription = description || baseMetadata.description;
  const pageUrl = `${baseMetadata.siteUrl}${path}`;
  const ogImageUrl = `${baseMetadata.siteUrl}/og/${ogImageName}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: baseMetadata.keywords,
    authors: baseMetadata.authors,
    creator: baseMetadata.creator,
    metadataBase: new URL(baseMetadata.siteUrl),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: baseMetadata.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200, // Standard OG width
          height: 630, // Standard OG height
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      site: pageUrl, // Or maybe siteConfig.socialLinks.twitter handle?
      images: [ogImageUrl],
      creator: baseMetadata.creator,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    // Add icons if not handled in root layout
    // icons: siteConfig.icons,
  };
}
