import React from "react";
import { Target, Eye } from "lucide-react";

const VisionMission = () => {
  return (
    <section id="vision" className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-12 rounded-card shadow-sm border border-slate-100 flex flex-col gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={120} className="text-secondary" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-primary leading-tight">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be a leading educational institution that empowers students with knowledge, skills, and values to become compassionate leaders and responsible global citizens in an ever-changing world.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-primary p-12 rounded-card shadow-xl flex flex-col gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} className="text-accent" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-white leading-tight">Our Mission</h2>
            <ul className="text-slate-300 text-lg leading-relaxed space-y-4">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>To provide a nurturing and safe learning environment.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>To foster academic excellence through modern pedagogy.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>To encourage holistic development through sports and arts.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
