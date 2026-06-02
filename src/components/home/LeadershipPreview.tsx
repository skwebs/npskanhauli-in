import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { schoolInfo } from "@/data/school";
import { Quote } from "lucide-react";
import SafeImage from "../shared/SafeImage";

const LeadershipPreview = () => {
  const leaders = [
    {
      ...schoolInfo.leadership.director,
      id: "director",
      fallback: "/images/placeholders/director.jpg"
    },
    {
      ...schoolInfo.leadership.principal,
      id: "principal",
      fallback: "/images/placeholders/principal.jpg"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Messages from Our Leadership"
          subtitle="Inspiring Excellence"
          description="Hear from the visionaries who lead National Public School towards a brighter future."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader) => (
            <div 
              key={leader.id}
              className="bg-surface rounded-card p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-48 h-64 shrink-0">
                <div className="absolute inset-0 bg-accent rounded-2xl rotate-3 -z-10" />
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-slate-200 relative">
                  <SafeImage
                    src={leader.photo}
                    fallbackSrc={leader.fallback}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 192px, 192px"
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <Quote className="text-secondary opacity-20" size={48} />
                <p className="text-slate-600 leading-relaxed italic relative z-10 text-lg">
                  {leader.message}
                </p>
                <div className="mt-4 pt-6 border-t border-slate-200">
                  <h4 className="text-2xl font-black text-primary">{leader.name}</h4>
                  <p className="text-secondary font-black uppercase tracking-widest text-xs mt-1">{leader.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
