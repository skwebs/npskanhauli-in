import React from "react";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";
import { galleryImages } from "@/data/gallery";
import { Button } from "../shared/Button";
import { ArrowRight, Plus } from "lucide-react";
import SafeImage from "../shared/SafeImage";

const GalleryPreview = () => {
  // Show only first 6 on home
  const displayImages = galleryImages.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeader
            title="Glimpses of NPS"
            subtitle="Our Gallery"
            description="A visual journey through the activities, events, and life at National Public School."
            centered={false}
            className="mb-0"
          />
          <Button variant="outline" href="/gallery" className="hidden md:flex gap-2 font-bold">
            View Full Gallery <ArrowRight size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayImages.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-square rounded-card overflow-hidden group border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <SafeImage
                src={image.src}
                fallbackSrc="/images/placeholders/gallery.jpg"
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
                <Link href="/gallery" className="absolute inset-0 z-10">
                  <span className="sr-only">View Gallery</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" href="/gallery" className="w-full font-bold">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
