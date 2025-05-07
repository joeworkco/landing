// © 2025 JoeWork.co
"use client"; // Needs to be a client component for useState

import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

interface FaqItemProps {
  question: string;
  answer: ReactNode; // Allow for rich text/components in answers
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-foreground hover:text-foreground/80"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-4 text-muted-foreground animate-in fade-in-0 slide-in-from-top-4 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
