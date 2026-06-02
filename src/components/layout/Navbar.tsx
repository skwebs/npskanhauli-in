"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../shared/Button";
import { schoolInfo } from "@/data/school";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menu on pathname change
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Desktop/Large Tablet Only */}
      <div className={cn(
        "bg-primary text-white py-2.5 px-4 hidden lg:block relative z-[160] transition-all duration-300",
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-10 opacity-100"
      )}>
        <div className="container mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-accent" />
              <span className="text-slate-200">{schoolInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-accent" />
              <span className="text-slate-200">{schoolInfo.contact.phone[0]}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-accent font-black">Admissions Open 2026-27</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed w-full z-[150] transition-all duration-300 bg-white border-b border-slate-100",
          isScrolled 
            ? "top-0 shadow-lg py-2" 
            : "top-0 lg:top-10 py-3 md:py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between gap-2 md:gap-4">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-2 md:gap-4 shrink-0 group min-w-0">
              <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0">
                <Image
                  src="/images/logo/logo.svg"
                  alt={schoolInfo.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-primary font-black text-sm sm:text-base md:text-xl lg:text-2xl tracking-tight leading-none whitespace-nowrap">
                  {schoolInfo.name}
                </span>
                <span className="text-secondary text-[8px] sm:text-[9px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.15em] mt-1 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                  26+ Years of Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-secondary relative group",
                        pathname === link.href ? "text-secondary" : "text-primary"
                      )}
                    >
                      {link.name}
                      <span className={cn(
                        "absolute -bottom-1.5 left-0 h-0.5 bg-secondary transition-all duration-300",
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      )} />
                    </Link>
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="sm" href="/contact" className="font-black px-6 py-5 rounded-lg text-[11px] uppercase tracking-widest">
                Admissions Open
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-primary z-[170] bg-white transition-colors hover:bg-slate-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Sidebar (Drawer) */}
      <div
        className={cn(
          "fixed inset-0 bg-slate-900/25 z-[140] lg:hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={cn(
            "absolute top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Content - Offset by header height */}
          <div className="flex-grow pt-24 md:pt-32 p-6 flex flex-col h-full overflow-y-auto">
            <div className="mb-8 pb-6 border-b border-slate-100">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 px-2">Navigation</p>
              <ul className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-2xl font-bold tracking-tight block py-4 px-2 rounded-xl transition-colors",
                        pathname === link.href ? "bg-slate-50 text-secondary" : "text-primary hover:bg-slate-50"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 px-2">
              <Button variant="accent" size="lg" href="/contact" className="w-full text-lg py-8 font-black rounded-xl shadow-lg shadow-accent/10">
                Admissions Open 2026-27
              </Button>
              <Button variant="outline" size="lg" href="/about" className="w-full text-lg py-8 font-black rounded-xl border-slate-200">
                Learn More
              </Button>
            </div>
            
            <div className="mt-auto space-y-8 pt-10 px-2 pb-6">
               <div className="p-6 bg-slate-50 rounded-2xl space-y-4">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Direct Contact</p>
                 <div className="flex gap-4 items-center">
                   <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                     <Phone size={20} />
                   </div>
                   <div>
                     <p className="text-primary font-bold text-lg leading-none mb-1">{schoolInfo.contact.phone[0]}</p>
                     <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Support Available Mon-Sat</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

