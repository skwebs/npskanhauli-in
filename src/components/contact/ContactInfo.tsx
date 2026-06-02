import React from "react";
import { schoolInfo } from "@/data/school";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      title: "Our Address",
      content: schoolInfo.location,
      icon: MapPin,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Call Us",
      content: schoolInfo.contact.phone.join(", "),
      icon: Phone,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Email Us",
      content: schoolInfo.contact.email.join(", "),
      icon: Mail,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      title: "Office Hours",
      content: "Mon - Sat: 8:00 AM - 3:00 PM",
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {contactDetails.map((item) => (
        <div 
          key={item.title}
          className="bg-white p-8 rounded-card border border-slate-100 flex gap-6 items-start hover:shadow-lg transition-shadow duration-300"
        >
          <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}>
            <item.icon className={item.color} size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
