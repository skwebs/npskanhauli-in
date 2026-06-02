import React from "react";
import { stats } from "@/data/school";
import { Award, Users, GraduationCap, BookOpen } from "lucide-react";

const icons = [Award, Users, GraduationCap, BookOpen];

const Stats = () => {
  return (
    <section className="py-0 relative z-30 mt-0 md:-mt-10 lg:-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-2 md:p-3">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            {stats.map((stat, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div 
                  key={stat.label} 
                  className="p-4 md:p-8 lg:p-10 rounded-xl md:rounded-2xl flex flex-col items-center text-center group hover:bg-slate-50 transition-all duration-300 h-full"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary mb-3 md:mb-5 lg:mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                    <Icon size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <div className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-primary mb-1 md:mb-2 tracking-tighter">
                    {stat.value}<span className="text-accent">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 max-w-[100px] md:max-w-[140px] leading-tight">
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

