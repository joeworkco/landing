// © 2025 JoeWork.co

import Footer from "@/components/landing/Footer";
import JoeWorkHeader from "@/components/landing/JoeWorkHeader";

export default function ThanksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <JoeWorkHeader />

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance text-gray-900 dark:text-white">
          Thanks for joining!
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          We&apos;ll be in touch soon with updates about JoeWork.co.
        </p>
      </main>

      <Footer />
    </div>
  );
}
