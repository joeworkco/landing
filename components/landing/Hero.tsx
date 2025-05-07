// © 2025 JoeWork.co

import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance text-gray-900 dark:text-white">
          JoeWork – AI Staff Ready on‑Screen.
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-300 text-balance">
          Drop‑in AI workers that run your browser tasks so humans don't have
          to.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="https://wa.me/123456789?text=I'm%20interested%20in%20joining%20the%20JoeWork%20beta!"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Join the Beta
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
