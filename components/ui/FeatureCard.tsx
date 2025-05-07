// © 2025 JoeWork.co
import { LucideProps } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  icon: React.ElementType<LucideProps>; // Use ElementType for flexibility
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-start p-6 rounded-lg shadow-lg bg-card text-card-foreground ${className}`}
    >
      <div className="mb-4 flex items-center justify-center rounded-lg bg-primary/10 p-3">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground text-balance">{description}</p>
    </div>
  );
};

export default FeatureCard;
