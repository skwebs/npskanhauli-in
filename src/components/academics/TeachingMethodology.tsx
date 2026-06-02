import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { teachingMethodology } from "@/data/academics";
import { CheckCircle2 } from "lucide-react";

const TeachingMethodology = () => {
  return (
    <section id="methodology" className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="How We Teach"
              subtitle="Teaching Methodology"
              description="Our approach to education is designed to foster curiosity, critical thinking, and a lifelong love for learning."
              centered={false}
            />
            
            <div className="space-y-8 mt-12">
              {teachingMethodology.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-primary rounded-card p-12 text-white relative z-10 shadow-2xl overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
               <h3 className="text-3xl font-black mb-8 leading-tight">Focus on Holistic Development</h3>
               <p className="text-slate-300 text-lg leading-relaxed mb-8">
                 We believe that academic results are just one part of a child&apos;s growth. Our methodology integrates character building, social skills, and physical health into the daily learning process.
               </p>
               <div className="space-y-4">
                  {[
                    "Personalized attention to every student",
                    "Regular assessment and feedback",
                    "Integration of technology in classroom",
                    "Focus on conceptual understanding"
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                       <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
               </div>
            </div>
            {/* Decorative background box */}
            <div className="absolute -inset-4 bg-secondary/10 rounded-card -z-10 rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodology;
