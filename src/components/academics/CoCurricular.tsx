import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { Music, Trophy, Palette, Code, Speech, Users } from "lucide-react";

const activities = [
  {
    title: "Sports & Games",
    description: "Football, Cricket, Badminton, and Athletics to ensure physical fitness.",
    icon: Trophy,
    color: "bg-blue-600",
  },
  {
    title: "Arts & Crafts",
    description: "Encouraging creativity through painting, sketching, and manual arts.",
    icon: Palette,
    color: "bg-purple-600",
  },
  {
    title: "Music & Dance",
    description: "Developing rhythm and expression through various art forms.",
    icon: Music,
    color: "bg-rose-600",
  },
  {
    title: "Computer Club",
    description: "Exploring the digital world and learning basic coding skills.",
    icon: Code,
    color: "bg-emerald-600",
  },
  {
    title: "Public Speaking",
    description: "Debates, elocution, and storytelling to build confidence.",
    icon: Speech,
    color: "bg-amber-600",
  },
  {
    title: "Scouts & Guides",
    description: "Instilling discipline, teamwork, and leadership skills.",
    icon: Users,
    color: "bg-indigo-600",
  },
];

const CoCurricular = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Beyond the Classroom"
          subtitle="Co-Curricular Activities"
          description="We provide a wide range of activities to help students discover and develop their unique talents."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div 
              key={activity.title}
              className="group relative overflow-hidden rounded-card bg-surface p-10 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className={`w-12 h-12 rounded-xl ${activity.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <activity.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">{activity.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {activity.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoCurricular;
