// © 2025 JoeWork.co
import { DEFAULT_LOCALE, routing } from "@/i18n/routing";
import "@/styles/globals.css"; // Keep globals
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
// Removed other imports like Metadata, constructMetadata, Nav, Footer, ThemeProvider, siteConfig

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// Removed generateMetadata function

export default async function LocaleLayout({ children, params }: Props) {
  const locale = params.locale;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    // Use DEFAULT_LOCALE as fallback for lang attribute
    <html lang={locale || DEFAULT_LOCALE} suppressHydrationWarning>
      <head />
      {/* Removed ThemeProvider and Nav/Footer for testing */}
      <body className="min-h-screen bg-white dark:bg-gray-950 font-sans antialiased flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Render only children directly */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
