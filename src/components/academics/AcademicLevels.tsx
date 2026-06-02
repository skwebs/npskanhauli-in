import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { academicLevels } from "@/data/academics";
import { Book, GraduationCap, School } from "lucide-react";

const icons = [School, Book, GraduationCap];

const AcademicLevels = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Educational Levels"
          subtitle="Academic Structure"
          description="We offer a comprehensive educational journey from early childhood to middle school."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {academicLevels.map((level, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={level.id}
                className="bg-surface p-10 rounded-card border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-primary text-accent flex items-center justify-center mb-8 group-hover:rotate-[360deg] transition-transform duration-700">
                  <Icon size={40} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-primary">{level.title}</h3>
                <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-6 bg-secondary/10 px-4 py-1 rounded-full">
                  {level.classes}
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {level.description}
                </p>
                
                {level.subjects && (
                  <div className="w-full pt-8 border-t border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Key Subjects</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {level.subjects.map((subject) => (
                        <span key={subject} className="px-3 py-1 bg-white rounded-lg text-sm text-primary font-semibold border border-slate-100">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicLevels;
