import { motion } from "framer-motion";

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
  brandColor?: string;
}

/**
 * Callout Component
 * Displays highlighted content with a subtle left border
 */
export default function Callout({ children, className = "", brandColor }: CalloutProps) {
  return (
    <div
      className={`text-base sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}
