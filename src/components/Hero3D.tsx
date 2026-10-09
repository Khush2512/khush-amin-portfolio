"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ShieldCheck,
  MapPin,
  Mail,
  Award,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import SplineCanvas from "./SplineCanvas";

export default function Hero3D() {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden scroll-mt-24">
      {/* Subtle Radial Backdrop Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-emerald-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Beacon Badge & Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Status Beacon Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Graduate SWE & Cloud roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
                Khush Amin
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-zinc-300 font-sans">
                Software Engineer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-emerald-400 to-purple-300">Cloud Infrastructure Specialist</span>
              </h2>
            </div>

            {/* Concise Subtext */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans max-w-2xl">
              First-Class Honours Computer Science Graduate (<strong className="text-zinc-200">De Montfort University</strong>, 70% average) with dual <strong className="text-emerald-400">Oracle Cloud Certifications</strong> and <strong className="text-purple-400">2 years of commercial sysadmin experience</strong> managing 50+ enterprise workstations, Active Directory, and C# / ASP.NET Core systems.
            </p>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Leicester, UK</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>1st Class Hons (70%)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dual Oracle OCI Certified</span>
              </div>
            </div>

            {/* Minimalist Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/40"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.cvSoftwareEngineer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors group"
              >
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>View CV (.NET)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={PERSONAL_INFO.cvCloudInfrastructure}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800/80 transition-colors group"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>View CV (Cloud)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Seamless 3D Spline Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-zinc-950/40 border border-zinc-800/60 overflow-hidden backdrop-blur-sm">
              <SplineCanvas sceneUrl="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />

              {/* Minimal overlay labels */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-400 px-3 py-1.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md pointer-events-none">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  C# ASP.NET Core & OCI
                </span>
                <span className="text-zinc-500">50+ Nodes SysAdmin</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
