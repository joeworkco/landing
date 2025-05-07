// © 2025 JoeWork.co

import { LucideProps } from "lucide-react"; // For typing the icon component
import React from "react";

interface FeatureCardProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
        <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white text-center text-balance">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-center text-balance">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
