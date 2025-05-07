// © 2025 JoeWork.co

import CtaSection from "@/components/sections/CtaSection";
import Differentiators from "@/components/sections/Differentiators";
import Faq from "@/components/sections/Faq";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Hero from "@/components/sections/Hero";
import LogoWall from "@/components/sections/LogoWall";

// Note: Removed metadata generation from page, handled by root layout now.

export default function HomePage() {
  // Removed async and params
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <FeatureGrid />
      <Differentiators />
      <LogoWall />
      <Faq />
      <CtaSection />
    </div>
  );
}
