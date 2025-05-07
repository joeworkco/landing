// © 2025 JoeWork.co

import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

// Define static metadata
export const metadata: Metadata = {
  title: "JoeWork – AI Staff Ready on‑Screen",
  description:
    "Drop‑in AI workers that run your browser tasks so humans don't have to.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    title: "JoeWork – AI Staff Ready on‑Screen",
    description:
      "Drop‑in AI workers that run your browser tasks so humans don't have to.",
    siteName: "JoeWork.co",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-white dark:bg-gray-950 flex flex-col font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>

        {process.env.NODE_ENV === "development" ? <></> : <Analytics />}
      </body>
    </html>
  );
}
