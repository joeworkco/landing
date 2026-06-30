// © 2025 JoeWork.co

import HomeContent from "@/components/marketing/home";
import { faqs } from "@/config/marketing";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  description:
    "Trabajadores IA, Company Brain y consultoría para vender más, operar mejor y escalar sin aumentar la carga operativa.",
  path: "/",
});

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomeContent />
    </>
  );
}
