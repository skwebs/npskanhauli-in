import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { facilities } from "@/data/facilities";
import { Button } from "../shared/Button";
import { ArrowRight } from "lucide-react";
import SafeImage from "../shared/SafeImage";

const FacilitiesPreview = () => {
  // Show only first 4 on home
  const displayFacilities = facilities.slice(0, 4);

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeader
            title="World-Class Facilities"
            subtitle="Our Campus"
            description="We provide the best infrastructure to ensure a comfortable and effective learning environment."
            centered={false}
            className="mb-0"
          />
          <Button variant="outline" href="/academics" className="hidden md:flex gap-2 font-bold">
            View All Facilities <ArrowRight size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayFacilities.map((facility) => (
            <div 
              key={facility.id}
              className="bg-white rounded-card overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <SafeImage
                  src={facility.image}
                  fallbackSrc="/images/placeholders/facility.jpg"
                  alt={facility.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                  {facility.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" href="/academics" className="w-full font-bold">
            View All Facilities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPreview;
