// © 2025 JoeWork.co

import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

const JoeWorkHeader = () => {
  return (
    <header className="py-4 w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 font-bold">
            <Image
              src="/joework-logo.svg"
              alt="JoeWork"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl text-gray-900 dark:text-white">
              JoeWork
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default JoeWorkHeader;
