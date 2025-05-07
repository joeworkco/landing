// © 2025 JoeWork.co

import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://joework.co";

export const SOURCE_CODE_URL = "https://github.com/joeworkco";
export const PRO_VERSION = "";

const GITHUB_URL = "https://github.com/joeworkco";
const EMAIL_URL = "mailto:hello@joework.co";

export const siteConfig: SiteConfig = {
  name: "JoeWork.co",
  tagLine: "AI Staff Ready on‑Screen",
  description:
    "Drop‑in AI workers that run your browser tasks so humans don't have to.",
  url: BASE_URL,
  authors: [
    {
      name: "JoeWork Team",
      url: BASE_URL,
    },
  ],
  creator: "JoeWork Team",
  socialLinks: {
    bluesky: "",
    twitter: "",
    email: EMAIL_URL,
    github: GITHUB_URL,
  },
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  defaultNextTheme: "system", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
};
