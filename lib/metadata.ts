// import { siteConfig } from "@/config/site"; // This line will be removed
import { DEFAULT_LOCALE, LOCALE_NAMES, Locale } from "@/i18n/routing";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type MetadataProps = {
  page?: string;
  title?: string;
  description?: string;
  images?: string[];
  noIndex?: boolean;
  locale: Locale;
  path?: string;
  canonicalUrl?: string;
};

const siteConfig = {
  name: "JoeWork.co",
  description:
    "Drop‑in AI workers that run your browser tasks so humans don't have to.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000", // Add fallback URL
  ogImage:
    (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") +
    "/opengraph-image.png", // Add fallback URL
  links: {
    twitter: "https://twitter.com/joework", // Replace with actual Twitter if available
    github: "https://github.com/joework",
  },
  creator: "JoeWork.co Team", // Or your name/handle
  authors: [{ name: "JoeWork.co", url: process.env.NEXT_PUBLIC_SITE_URL! }], // Or your name/handle
  keywords: [
    "AI staff",
    "AI worker",
    "browser automation",
    "task automation",
    "JoeWork",
  ],
};

export async function constructMetadata({
  page = "Home",
  title = "JoeWork – AI Staff Ready on‑Screen",
  description = "Drop‑in AI workers that run your browser tasks so humans don't have to.",
  images = [],
  noIndex = false,
  locale,
  path,
  canonicalUrl,
}: MetadataProps): Promise<Metadata> {
  // get translations
  const t = await getTranslations({ locale, namespace: "Home" });

  // get page specific metadata translations
  const pageTitle = title || t(`title`);
  const pageDescription = description || t(`description`);

  // build full title
  const finalTitle =
    page === "Home"
      ? `${pageTitle} - ${t("tagLine")}`
      : `${pageTitle} | ${t("title")}`;

  // build image URLs
  const imageUrls =
    images.length > 0
      ? images.map((img) => ({
          url: img.startsWith("http") ? img : `${siteConfig.url}/${img}`,
          alt: pageTitle,
        }))
      : [
          {
            url: `${siteConfig.url}/og.png`,
            alt: pageTitle,
          },
        ];

  // Open Graph Site
  const pageURL =
    `${locale === DEFAULT_LOCALE ? "" : locale}${path}` || siteConfig.url;

  // build alternate language links
  const alternateLanguages = Object.keys(LOCALE_NAMES).reduce(
    (acc, lang) => {
      const path = canonicalUrl
        ? `/${lang === DEFAULT_LOCALE ? "" : lang}${canonicalUrl}`
        : `/${lang === DEFAULT_LOCALE ? "" : lang}`;
      acc[lang] = `${siteConfig.url}/${path}`;
      return acc;
    },
    {} as Record<string, string>
  );

  return {
    title: finalTitle,
    description: pageDescription,
    keywords: [],
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl ? `${siteConfig.url}/${canonicalUrl}` : undefined,
      languages: alternateLanguages,
    },
    openGraph: {
      type: "website",
      title: finalTitle,
      description: pageDescription,
      url: pageURL,
      siteName: "JoeWork – AI Staff Ready on‑Screen",
      locale: locale,
      images: imageUrls,
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: pageDescription,
      site: `${siteConfig.url}/${pageURL}`,
      images: imageUrls,
      creator: siteConfig.creator,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}
