// © 2025 JoeWork.co

import FeatureCard from "@/components/landing/FeatureCard";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import JoeWorkHeader from "@/components/landing/JoeWorkHeader";
import { Globe, MonitorPlay, Video } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Record Once",
    description:
      "Simply record your browser actions. JoeWork learns and is ready to repeat.",
  },
  {
    icon: MonitorPlay,
    title: "Runs in Your Browser",
    description:
      "Tasks execute locally, ensuring your data stays with you. No cloud processing.",
  },
  {
    icon: Globe,
    title: "Local‑First & Bilingual",
    description:
      "Works offline after initial setup. Understands instructions in multiple languages.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-gray-950">
      <JoeWorkHeader />

      <Hero />

      <section
        id="features"
        className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-900 dark:text-white text-balance">
            How JoeWork Empowers You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
