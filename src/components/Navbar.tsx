"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <header className="fixed top-5 left-0 right-0 z-50 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto max-w-fit mx-auto backdrop-blur-xl bg-zinc-900/70 border border-zinc-800/80 rounded-full px-4 sm:px-6 py-2 flex items-center gap-4 sm:gap-6 shadow-2xl transition-all duration-300 ${
          scrolled ? "bg-zinc-900/90 border-zinc-700/80 shadow-black/80" : ""
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

        <div className="h-3.5 w-px bg-zinc-800" />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 rounded-full text-xs font-mono text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block h-3.5 w-px bg-zinc-800" />

        {/* Dual Native CV Anchors */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.cvSoftwareEngineer}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 transition-all shadow-sm group"
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
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all group"
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
