// © 2025 JoeWork.co
import { FooterDemo } from "@/components/demos/FooterDemo";
import Nav from "@/components/layout/Nav";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import "@/styles/globals.css";
import { Metadata } from "next";
import { JetBrains_Mono, Newsreader, Work_Sans } from "next/font/google";
import { ReactNode } from "react";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export function generateMetadata(): Metadata {
  return constructMetadata({
    description: siteConfig.description,
  });
}

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JoeWork",
    url: siteConfig.url,
    email: "hello@joework.co",
    description: siteConfig.description,
  };

  return (
    <html lang="es">
      <body
        className={`${workSans.variable} ${newsreader.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col bg-background text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        <main className="flex-grow">{children}</main>
        <FooterDemo />
      </body>
    </html>
  );
}
