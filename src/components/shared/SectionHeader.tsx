import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  centered = true,
  className,
  light = false,
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <span className={cn(
          "inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4",
          light ? "bg-white/10 text-accent" : "bg-surface text-secondary"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight",
        light ? "text-white" : "text-primary"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg md:text-xl leading-relaxed",
          light ? "text-slate-300" : "text-slate-600"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
