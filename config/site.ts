// © 2025 JoeWork.co

import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://joework.co";

export const SOURCE_CODE_URL = "https://github.com/joeworkco";
export const PRO_VERSION = "";

const GITHUB_URL = "https://github.com/joeworkco";
const EMAIL_URL = "mailto:hello@joework.co";

export const siteConfig: SiteConfig = {
  name: "JoeWork",
  tagLine: "Trabajadores IA para empresas",
  description:
    "Trabajadores IA, Company Brain y consultoría para vender más, operar mejor y construir una organización que aprende.",
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
    { media: "(prefers-color-scheme: light)", color: "#FAFAF6" },
    { media: "(prefers-color-scheme: dark)", color: "#FAFAF6" },
  ],
  defaultNextTheme: "light",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
};
