"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Code2, Shield } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Competencies", href: "#competencies" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-fit pointer-events-none">
      <nav
        className={`pointer-events-auto px-6 py-3 rounded-full bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center gap-4 sm:gap-6 transition-all duration-300 ${
          scrolled ? "bg-zinc-900/60 border-white/20 shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        {/* Brand Monogram */}
        <a
          href="#about"
          className="flex items-center gap-2 group font-mono text-xs font-bold text-white tracking-tight"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>KHUSH</span>
          <span className="text-zinc-500 font-normal">/</span>
          <span className="text-zinc-400 group-hover:text-purple-400 transition-colors">DEV</span>
        </a>

        <div className="h-3.5 w-px bg-white/10" />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 rounded-full text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block h-3.5 w-px bg-white/10" />

        {/* Dual Native CV Anchors */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.cvSoftwareEngineer}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all shadow-sm group"
            title="View Software Engineer CV"
          >
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>CV (.NET)</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={PERSONAL_INFO.cvCloudInfrastructure}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/10 backdrop-blur-md border border-white/10 transition-all group"
            title="View Cloud & Infrastructure CV"
          >
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>CV (Cloud)</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </nav>
    </header>
  );
}
