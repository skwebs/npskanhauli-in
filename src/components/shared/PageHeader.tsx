import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, className }) => {
  return (
    <section className={cn("bg-primary pt-32 pb-24 relative overflow-hidden", className)}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 -translate-y-1/2 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full -translate-x-1/2 translate-y-1/2 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
