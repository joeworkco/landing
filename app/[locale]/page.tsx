// © 2025 JoeWork.co
import CtaSection from "@/components/sections/CtaSection";
import Differentiators from "@/components/sections/Differentiators";
import Faq from "@/components/sections/Faq";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Hero from "@/components/sections/Hero";
import LogoWall from "@/components/sections/LogoWall";
import QuoteSection from "@/components/sections/QuoteSection";
// import { useTranslations } from "next-intl"; // Uncomment if using translations

export default function LocaleHomePage() {
  // const t = useTranslations("Page.Home"); // Uncomment if using translations

  return (
    <>
      <Hero />
      <FeatureGrid />
      <QuoteSection />
      <Differentiators />
      <LogoWall />
      <Faq />
      <CtaSection />
    </>
  );
}
