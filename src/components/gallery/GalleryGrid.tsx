"use client";

import React, { useState } from "react";
import SafeImage from "../shared/SafeImage";
import { galleryImages, categories } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 border-2",
                activeCategory === category
                  ? "bg-primary border-primary text-white shadow-lg"
                  : "bg-surface border-transparent text-slate-500 hover:border-slate-200 hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-square rounded-card overflow-hidden group border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <SafeImage
                src={image.src}
                fallbackSrc="/images/placeholders/gallery-placeholder.svg"
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <Plus className="text-primary" size={24} />
                </div>
                <h4 className="text-white font-bold text-lg mb-1 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.alt}
                </h4>
                <p className="text-accent text-sm font-semibold uppercase tracking-widest transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-surface rounded-card border-2 border-dashed border-slate-200">
            <p className="text-slate-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
