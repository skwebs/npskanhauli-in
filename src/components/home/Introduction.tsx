import React from "react";
import SafeImage from "../shared/SafeImage";
import SectionHeader from "../shared/SectionHeader";
import { schoolInfo } from "@/data/school";

const Introduction = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-card overflow-hidden shadow-2xl">
              <SafeImage
                src="/images/school/intro-image.jpg"
                fallbackSrc="/images/placeholders/facility.jpg"
                alt="Students at National Public School"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            {/* Decorative boxes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-card -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-card -z-10" />
            
            {/* Premium Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-1 rounded-3xl shadow-2xl hidden md:block max-w-xs z-20 animate-bounce-slow">
               <div className="bg-primary text-white p-8 rounded-[22px] border-4 border-slate-50 flex flex-col items-center text-center">
                  <p className="text-accent font-black text-5xl mb-1 tracking-tighter">26+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 leading-tight">
                    Years of Academic<br />Excellence
                  </p>
               </div>
            </div>
          </div>
          
          <div>
            <SectionHeader
              title={`Welcome to ${schoolInfo.name}`}
              subtitle="Excellence in Education"
              centered={false}
              className="mb-8"
            />
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                National Public School, situated in the heart of Sinhpur, Kanhauli, is more than just an educational institution. It is a place where young minds are nurtured, characters are built, and futures are shaped.
              </p>
              <p>
                With a legacy of excellence and a commitment to holistic development, we provide a modern learning environment that balances academic rigor with co-curricular activities. Our dedicated faculty ensures that every student receives personalized attention to reach their full potential.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Values-driven education system",
                  "Modern infrastructure and safe campus",
                  "Focus on digital literacy and computer education",
                  "Comprehensive sports and cultural programs"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="font-semibold text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
