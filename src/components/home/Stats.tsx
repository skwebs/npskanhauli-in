import React from "react";
import { stats } from "@/data/school";
import { Award, Users, GraduationCap, BookOpen } from "lucide-react";

const icons = [Award, Users, GraduationCap, BookOpen];

const Stats = () => {
  return (
    <section className="py-0 relative z-30 -mt-10 md:-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-2 md:p-3">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            {stats.map((stat, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div 
                  key={stat.label} 
                  className="p-6 md:p-10 rounded-2xl flex flex-col items-center text-center group hover:bg-slate-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary mb-4 md:mb-6 group-hover:bg-secondary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    <Icon size={stat.label.includes('Teachers') ? 32 : 28} />
                  </div>
                  <div className="text-3xl md:text-5xl font-black text-primary mb-2 tracking-tighter">
                    {stat.value}<span className="text-accent">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400 max-w-[120px]">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

