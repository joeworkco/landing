import { Badge } from "@/components/ui/badge";
import RotatingWords from "@/components/ui/RotatingWords";
import { cn } from "@/lib/utils";
import React from "react";

interface BentoGridItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  lgColSpan?: number;
  className?: string; // For any specific item styling if needed
}

interface FeatureSectionWithBentoGridProps {
  badgeText: string;
  mainTitle: string;
  mainDescription: string;
  items: BentoGridItem[];
}

function FeatureSectionWithBentoGrid({
  badgeText,
  mainTitle,
  mainDescription,
  items,
}: FeatureSectionWithBentoGridProps) {
  return (
    <div className="w-full py-20 lg:py-32 bg-black text-neutral-100">
      {" "}
      {/* Updated for dark theme similar to agency page */}
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 md:gap-16">
          <div className="flex gap-4 flex-col items-start">
            <div>
              {/* Using neutral-800/text-neutral-300 for badge on dark background */}
              <Badge
                variant="outline"
                className="bg-neutral-800 text-neutral-300 border-neutral-700"
              >
                {badgeText}
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left">
                Transforma tu Operación <RotatingWords /> Sin Fricción
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-neutral-400 text-left">
                {mainDescription}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "bg-neutral-900 rounded-xl p-6 flex flex-col justify-between min-h-[220px]", // Darker item background
                  item.lgColSpan && `lg:col-span-${item.lgColSpan}`,
                  item.className
                )}
              >
                {/* Icon Wrapper with consistent styling */}
                <div className="w-fit rounded-lg border border-neutral-700/80 bg-neutral-800 p-2 text-neutral-400 mb-4">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-100">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-base mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureSectionWithBentoGrid };
