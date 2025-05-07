// © 2025 JoeWork.co
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import "@/styles/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

// Regenerate metadata directly here, without locale
export function generateMetadata(): Metadata {
  return constructMetadata({
    title: siteConfig.name, // Use base name
    description: siteConfig.description,
    // No locale needed here anymore
  });
}

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    // Defaulting lang to 'en' for now
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-white dark:bg-gray-950 font-sans antialiased flex flex-col">
        {/* Removed NextIntlClientProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme={siteConfig.defaultNextTheme || "system"}
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="flex-grow flex flex-col items-center w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
