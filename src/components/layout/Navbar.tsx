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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Removed body overflow lock to allow scrolling when sidebar is open

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className={cn(
        "bg-primary text-white py-2 px-4 transition-all duration-300 hidden lg:block",
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
          "fixed w-full z-[100] transition-all duration-500",
          isScrolled 
            ? "top-0 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2 border-b border-slate-100" 
            : "top-0 lg:top-10 bg-white py-4 border-b border-slate-100"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between gap-4">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-4 shrink-0 group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 transition-transform duration-500">
                <Image
                  src="/images/logo/logo.svg"
                  alt={schoolInfo.name}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-xl md:text-2xl tracking-tight leading-none whitespace-nowrap">
                  {schoolInfo.name}
                </span>
                <span className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.15em] mt-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  26+ Years of Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-secondary relative group",
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
              <Button variant="accent" size="sm" href="/contact" className="font-black px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                Admissions Open
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 text-primary z-[110] transition-colors hover:bg-slate-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Sidebar (Drawer) */}
        <div
          className={cn(
            "fixed inset-0 bg-slate-900/35 backdrop-blur-[2px] z-[105] lg:hidden transition-all duration-300",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={cn(
              "absolute top-0 right-0 w-full sm:w-[420px] max-w-full h-full bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 pt-28 flex flex-col h-full">
              <div className="mb-10 pb-6 border-b border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Navigation</p>
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-2xl font-bold tracking-tight block py-4 transition-colors",
                          pathname === link.href ? "text-secondary" : "text-primary hover:text-secondary"
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <Button variant="accent" size="lg" href="/contact" className="w-full text-lg py-8 font-black rounded-xl">
                  Admissions Open 2026-27
                </Button>
                <Button variant="outline" size="lg" href="/about" className="w-full text-lg py-8 font-black rounded-xl">
                  Learn More
                </Button>
              </div>
              
              <div className="mt-auto space-y-6 pb-6">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Get in Touch</p>
                 <div className="flex gap-4 items-center">
                   <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-secondary shrink-0">
                     <Phone size={20} />
                   </div>
                   <div>
                     <p className="text-primary font-bold text-lg">{schoolInfo.contact.phone[0]}</p>
                     <p className="text-slate-500 text-xs">Available Mon-Sat 8AM-3PM</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

