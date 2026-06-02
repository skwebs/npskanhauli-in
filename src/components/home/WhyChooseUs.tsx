import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { whyChooseUs } from "@/data/facilities";
import { 
  Users, 
  Monitor, 
  GraduationCap, 
  ShieldCheck, 
  Trophy, 
  Heart 
} from "lucide-react";

const icons = [Users, Monitor, GraduationCap, ShieldCheck, Trophy, Heart];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Why Choose National Public School?"
          subtitle="Our Strengths"
          description="We are committed to providing the best possible education and environment for our students."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={item.title}
                className="bg-white p-10 rounded-card shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:rotate-6 transition-all duration-500">
                  <Icon className="text-secondary group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
