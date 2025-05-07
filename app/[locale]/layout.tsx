// © 2025 JoeWork.co

import { Locale, routing } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

// Simplified metadata type
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return constructMetadata({
    title: "JoeWork – AI Staff Ready on‑Screen",
    description:
      "Drop‑in AI workers that run your browser tasks so humans don&apos;t have to.",
    locale: params.locale as Locale,
    path: "/",
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Return the children wrapped in the NextIntlClientProvider
  // but without html/body/head tags (those are in the root layout)
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
