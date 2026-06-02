"use client";

import React from "react";
import { Button } from "../shared/Button";
import { Send } from "lucide-react";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here in Phase 2
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-card shadow-2xl border border-slate-100">
      <h3 className="text-3xl font-black text-primary mb-8">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-slate-500">Full Name</label>
            <input
              id="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-slate-500">Email Address</label>
            <input
              id="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 00000 00000"
              className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-slate-500">Subject</label>
            <select
              id="subject"
              className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
            >
              <option>General Inquiry</option>
              <option>Admission Inquiry</option>
              <option>Career Opportunities</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-slate-500">Your Message</label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="How can we help you?"
            className="w-full p-4 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
          />
        </div>
        
        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto font-bold gap-3">
          Send Message <Send size={20} />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
