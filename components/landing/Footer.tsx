// © 2025 JoeWork.co

import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ©2025 JoeWork.co
        </p>
        <Link
          href="https://github.com/joeworkco"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
          aria-label="JoeWork.co GitHub repository"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
