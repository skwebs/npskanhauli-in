import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Video, Mail, Phone, MapPin } from "lucide-react";
import { schoolInfo } from "@/data/school";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* School Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white p-1">
                <Image
                  src="/images/logo/logo.svg"
                  alt={schoolInfo.name}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight leading-none">
                {schoolInfo.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing quality education and fostering excellence in a modern learning environment. Join us in shaping the leaders of tomorrow.
            </p>
            <div className="flex items-center gap-4">
              {schoolInfo.social.facebook && (
                <a
                  href={schoolInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Globe size={20} />
                </a>
              )}
              {schoolInfo.social.youtube && (
                <a
                  href={schoolInfo.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Video size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent uppercase tracking-wider">School</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About NPS</Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Admissions</Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/about#vision" className="hover:text-white transition-colors">Vision & Mission</Link>
              </li>
              <li>
                <Link href="/academics#methodology" className="hover:text-white transition-colors">Teaching Methodology</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent uppercase tracking-wider">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              <li className="flex gap-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span className="text-sm">{schoolInfo.location}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <div className="flex flex-col gap-1">
                  {schoolInfo.contact.phone.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="text-sm hover:text-white transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="text-accent shrink-0" size={20} />
                <div className="flex flex-col gap-1">
                  {schoolInfo.contact.email.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="text-sm hover:text-white transition-colors">
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-500 text-sm">
              © {currentYear} {schoolInfo.name}. All rights reserved.
            </p>
            <p className="text-slate-600 text-[10px] font-medium tracking-wider uppercase">
              Website by <a href="https://skwebs.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">SKWebs</a>
            </p>
          </div>
          <div className="flex gap-8 text-xs text-slate-500 font-medium">
             <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
