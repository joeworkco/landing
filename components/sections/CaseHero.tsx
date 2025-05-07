// © 2025 JoeWork.co
import { LucideProps } from "lucide-react";
import React from "react";

interface CaseHeroProps {
  icon: React.ElementType<LucideProps>;
  title: string;
  subtitle: string;
}

const CaseHero: React.FC<CaseHeroProps> = ({ icon: Icon, title, subtitle }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl text-balance">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default CaseHero;
