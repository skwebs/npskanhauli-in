import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { Shield, Star, Users, Lightbulb, Heart, Zap } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description: "Acting with honesty, fairness, and ethical strength in all situations.",
    icon: Shield,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Excellence",
    description: "Striving for the highest standards in academics and character.",
    icon: Star,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Respect",
    description: "Valuing diversity and treating others with dignity and kindness.",
    icon: Heart,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    title: "Innovation",
    description: "Encouraging curiosity, creativity, and new ways of thinking.",
    icon: Lightbulb,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Community",
    description: "Building strong bonds between students, parents, and teachers.",
    icon: Users,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Discipline",
    description: "Developing self-control and a sense of responsibility.",
    icon: Zap,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Core Values"
          subtitle="The NPS Way"
          description="These principles guide everything we do and help define our school culture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div 
              key={value.title}
              className="flex flex-col gap-6 p-10 rounded-card border border-slate-100 hover:border-secondary/20 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                <value.icon className={value.color} size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
