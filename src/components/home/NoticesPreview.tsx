import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { notices } from "@/data/notices";
import { Calendar, Bell, ChevronRight } from "lucide-react";

const NoticesPreview = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Latest Announcements"
          subtitle="Notice Board"
          description="Stay updated with the latest news, events, and announcements from National Public School."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {notices.map((notice) => (
            <div 
              key={notice.id}
              className="bg-white p-6 md:p-8 rounded-card border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-secondary/5 text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Calendar size={24} className="mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {notice.title}
                  </h3>
                  {notice.isNew && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-accent text-primary uppercase animate-pulse">
                      <Bell size={10} /> New
                    </span>
                  )}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {notice.content}
                </p>
              </div>
              
              <div className="shrink-0">
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                    <ChevronRight size={20} />
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-slate-500 text-sm">
             For older notices and academic calendars, please visit our <span className="text-secondary font-bold cursor-pointer hover:underline">Notice Archive</span>.
           </p>
        </div>
      </div>
    </section>
  );
};

export default NoticesPreview;
