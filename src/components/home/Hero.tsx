import React from "react";
import SafeImage from "../shared/SafeImage";
import { Button } from "../shared/Button";
import { schoolInfo } from "@/data/school";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary pt-16">
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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Admissions Open 2026-27</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight animate-fade-in-up">
            {schoolInfo.name}
          </h1>
          
          <div className="flex flex-col gap-4 mb-16 animate-fade-in-up delay-100">
            <div className="flex items-center gap-4">
               <span className="w-12 h-[2px] bg-accent" />
               <p className="text-accent text-xl md:text-3xl font-black uppercase tracking-[0.2em]">
                 {schoolInfo.location}
               </p>
            </div>
            <p className="text-white/70 text-base md:text-xl font-bold uppercase tracking-[0.2em] ml-16">
              26+ Years of Educational Excellence
            </p>
          </div>
          
          <div className="relative mb-16 max-w-2xl animate-fade-in-up delay-200">
             <p className="text-slate-200 text-xl md:text-2xl leading-relaxed italic font-medium opacity-95 pl-10 border-l-4 border-accent/50">
               &quot;{schoolInfo.tagline}&quot;
             </p>
             <div className="absolute -top-6 -left-2 text-8xl text-white/5 font-serif pointer-events-none">&quot;</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-300">
            <Button variant="accent" size="lg" href="/contact" className="text-lg font-black px-12 py-8 rounded-xl shadow-xl shadow-accent/20 hover:scale-[1.02] transition-transform">
              Admissions Open 2026
            </Button>
            <Button variant="outline" size="lg" href="/about" className="text-lg font-black border-white/30 text-white hover:bg-white hover:text-primary px-12 py-8 rounded-xl backdrop-blur-md">
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

