import React from "react";
import SafeImage from "../shared/SafeImage";
import { Button } from "../shared/Button";
import { schoolInfo } from "@/data/school";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-primary pt-24 md:pt-32 lg:pt-48 pb-20 md:pb-32 lg:pb-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
        <SafeImage
          src="/images/school/hero-bg.jpg"
          fallbackSrc="/images/placeholders/hero.jpg"
          alt="National Public School Campus"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-6 md:mb-8 animate-fade-in">
            <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[9px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">Admissions Open 2026-27</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tight animate-fade-in-up">
            {schoolInfo.name}
          </h1>
          
          <div className="flex flex-col gap-3 md:gap-4 mb-10 md:mb-16 animate-fade-in-up delay-100">
            <div className="flex items-center gap-3 md:gap-4">
               <span className="w-8 md:w-12 h-[2px] bg-accent" />
               <p className="text-accent text-lg md:text-2xl lg:text-3xl font-black uppercase tracking-[0.2em]">
                 {schoolInfo.location}
               </p>
            </div>
            <p className="text-white/70 text-sm md:text-base lg:text-xl font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] ml-11 md:ml-16">
              26+ Years of Educational Excellence
            </p>
          </div>
          
          <div className="relative mb-10 md:mb-16 max-w-2xl animate-fade-in-up delay-200">
             <p className="text-slate-200 text-lg md:text-xl lg:text-2xl leading-relaxed italic font-medium opacity-95 pl-6 md:pl-10 border-l-4 border-accent/50">
               &quot;{schoolInfo.tagline}&quot;
             </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-in-up delay-300">
            <Button variant="accent" size="lg" href="/contact" className="text-base md:text-lg font-black px-8 md:px-12 py-6 md:py-8 rounded-xl shadow-xl shadow-accent/20 hover:scale-[1.02] transition-transform">
              Admissions Open 2026
            </Button>
            <Button variant="outline" size="lg" href="/about" className="text-base md:text-lg font-black border-white/30 text-white hover:bg-white hover:text-primary px-8 md:px-12 py-6 md:py-8 rounded-xl backdrop-blur-md">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/5 blur-[150px] rounded-full -mr-40 -mb-40" />
    </section>
  );
};

export default Hero;

