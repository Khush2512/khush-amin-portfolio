"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Copy, Check, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 relative border-t border-zinc-800/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest block font-medium">
              // GET IN TOUCH
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
              Let's connect.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              Available for Graduate Software Engineer, Junior .NET Developer, and Cloud Infrastructure roles across the UK.
            </p>
          </div>

          {/* 1-Click Copy Email Pill */}
          <div className="inline-flex items-center gap-3 p-2 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl">
            <div className="flex items-center gap-2 px-3 py-1.5 font-mono text-xs sm:text-sm text-zinc-200">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>{PERSONAL_INFO.email}</span>
            </div>

            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                copied
                  ? "bg-emerald-950 text-emerald-300 border border-emerald-700"
                  : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Minimal Links Bar */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-zinc-400 border-t border-zinc-900">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-purple-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <div className="flex items-center gap-1.5 text-zinc-500">
              <MapPin className="w-3 h-3" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>&copy; {new Date().getFullYear()} Khush Amin. All rights reserved.</div>
          <div>DMU 1ST CLASS HONS • ORACLE CLOUD CERTIFIED</div>
        </div>
      </div>
    </footer>
  );
}
