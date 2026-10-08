"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Code2,
  Terminal,
  Cpu,
  ChevronDown,
  Database,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="about" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Radial Purple & Emerald Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-950/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Value Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-purple-500/30 text-xs font-mono text-purple-300 shadow-lg shadow-purple-950/30">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Award className="w-4 h-4 text-purple-400" />
              <span className="font-semibold">First Class Honours • Oracle Cloud Certified</span>
            </div>

            {/* High Impact Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.15]">
                Hi, I'm <span className="gradient-text-purple-emerald">Khush</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-mono text-zinc-300 font-medium flex flex-wrap items-center gap-2">
                <span className="text-purple-400">Software Engineer</span>
                <span className="text-zinc-600">|</span>
                <span className="text-emerald-400">Cloud & Infrastructure Specialist</span>
                <span className="text-zinc-600">|</span>
                <span className="text-purple-300">Junior .NET Developer</span>
              </h2>
            </div>

            {/* Commercial & Technical Value Pitch */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans max-w-2xl">
              De Montfort University <strong className="text-white">First-Class Honours (70%)</strong> Computer Science graduate. Uniquely bridges commercial <strong className="text-emerald-400">enterprise sysadmin expertise</strong> (Active Directory, 50+ workstation infrastructure, LAN monitoring) with robust <strong className="text-purple-400">full-stack C# / ASP.NET Core & OCI Cloud architecture</strong>.
            </p>

            {/* Quick Contact & Degree Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Leicester, UK</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>khushpatel0344@gmail.com</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>+44 7733908167</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 shadow-xl shadow-purple-900/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 max-w-xl">
              <div className="space-y-1">
                <span className="block text-2xl font-extrabold text-purple-400 font-mono">1st Class</span>
                <span className="block text-xs text-zinc-400">De Montfort BSc (Hons)</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl font-extrabold text-emerald-400 font-mono">82%</span>
                <span className="block text-xs text-zinc-400">ASP.NET / C# Mark</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl font-extrabold text-purple-300 font-mono">2x OCI</span>
                <span className="block text-xs text-zinc-400">Oracle Cloud Certs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Code Terminal Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-emerald-500/20 rounded-3xl blur-[90px] pointer-events-none" />

            <div className="relative rounded-2xl bg-zinc-950 border-2 border-zinc-800 shadow-2xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">khush-amin-sys.config</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE ARCHITECTURE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono space-y-6 text-xs bg-zinc-950/90">
                {/* System Diagnostics Header */}
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                  <div className="text-purple-400 font-bold">$ khush --version --status</div>
                  <div className="text-zinc-300">
                    &gt; Khush Amin | Software Engineer & OCI Architect
                  </div>
                  <div className="text-emerald-400">
                    &gt; DMU Computer Science: 1st Class Honours (70%)
                  </div>
                </div>

                {/* Tech Stack Command Matrix */}
                <div className="space-y-2">
                  <div className="text-zinc-400 uppercase tracking-wider font-semibold text-[10px]">
                    // CORE SYSTEM STACK & CERTIFICATIONS
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-zinc-200">
                    <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-purple-900/30 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>C# / ASP.NET</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-emerald-900/30 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>OCI Cloud Gen AI</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-purple-900/30 flex items-center gap-2">
                      <Database className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>SQL Server / 3NF</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-emerald-900/30 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Active Directory</span>
                    </div>
                  </div>
                </div>

                {/* Academic Mark Breakdown */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/40 to-emerald-950/40 border border-purple-800/40 space-y-2">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Enterprise Staff System:</span>
                    <span className="text-purple-300 font-bold">82% Mark (1st Class)</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Capstone Multi-Tier App:</span>
                    <span className="text-emerald-300 font-bold">78% Mark (100% Specs)</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Active Workstation IT Support:</span>
                    <span className="text-purple-300 font-bold">50+ Enterprise Nodes</span>
                  </div>
                </div>

                {/* Status Command Line Footer */}
                <div className="pt-2 text-zinc-400 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">$ system_status --ready</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
                    AVAILABLE FOR HIRE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-16">
          <a
            href="#competencies"
            className="flex flex-col items-center gap-2 text-xs font-mono text-zinc-500 hover:text-purple-400 transition-colors group"
          >
            <span>DISCOVER COMPETENCIES</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-purple-500 group-hover:text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
