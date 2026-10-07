"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Terminal, Shield, Code2 } from "lucide-react";
import CvModal from "./CvModal";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Competencies", href: "#competencies" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedCvTrack, setSelectedCvTrack] = useState<"net" | "cloud">("net");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCvModal = (track: "net" | "cloud") => {
    setSelectedCvTrack(track);
    setCvModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-black/40 border-b border-zinc-800/60 shadow-xl shadow-purple-950/5"
            : "backdrop-blur-md bg-black/20 border-b border-zinc-800/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Monospace Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-950/30 transition-all">
              <Terminal className="w-5 h-5 text-purple-400 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                KHUSH<span className="text-purple-500">.DEV</span>
              </span>
              <span className="font-mono text-[10px] text-zinc-400 font-medium">
                DMU 1ST CLASS HONS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-xs font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CV Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => openCvModal("net")}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-purple-300 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-800/60 hover:border-purple-500 transition-all shadow-sm"
              title="Download Software Engineer / .NET CV"
            >
              <Code2 className="w-3.5 h-3.5 text-purple-400" />
              <span>CV (.NET / SWE)</span>
            </button>

            <button
              onClick={() => openCvModal("cloud")}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-800/60 hover:border-emerald-500 transition-all shadow-sm"
              title="Download Cloud / Infra Specialist CV"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>CV (Cloud / Infra)</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-30 bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl lg:hidden overflow-hidden"
          >
            <div className="p-6 space-y-4 max-w-7xl mx-auto">
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
                <button
                  onClick={() => openCvModal("net")}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-mono font-semibold text-purple-200 bg-purple-950/60 border border-purple-800"
                >
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <span>Download CV (.NET / SWE)</span>
                </button>
                <button
                  onClick={() => openCvModal("cloud")}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-mono font-semibold text-emerald-200 bg-emerald-950/60 border border-emerald-800"
                >
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Download CV (Cloud / Infra)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        defaultRole={selectedCvTrack}
      />
    </>
  );
}
