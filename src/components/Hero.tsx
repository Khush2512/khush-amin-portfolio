"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Award,
  ShieldCheck,
  Mail,
} from "lucide-react";
import SplineCanvas from "./SplineCanvas";

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden scroll-mt-24">
      {/* Background Ambient Radial Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Beacon Badge & Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Live Status Beacon with Radar Ping */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-200 shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Graduate SWE & Cloud roles</span>
            </div>

            {/* Main Headline - Clean Modern Sans-Serif Inter/Geist */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
                Khush Amin
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-zinc-300 font-sans">
                Software Engineer &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-emerald-400 to-purple-300">
                  Cloud Infrastructure Specialist
                </span>
              </h2>
            </div>

            {/* Concise Subtext */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans max-w-2xl">
              First-Class Honours Computer Science Graduate (<strong className="text-white">De Montfort University</strong>, 70% average) with dual <strong className="text-emerald-400">Oracle Cloud Certifications</strong> and <strong className="text-purple-400">2 years of commercial sysadmin experience</strong> managing 50+ enterprise workstations, Active Directory, and C# / ASP.NET Core systems.
            </p>

            {/* iOS Glass Metadata Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-300 pt-1">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Leicester, UK</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>1st Class Hons (70%)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dual Oracle OCI Certified</span>
              </div>
            </div>

            {/* Refined Hero CTA Hierarchy */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Primary Action Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Action Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Enhanced 3D Card Depth & Refraction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Soft ambient back-glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-2xl -z-10" />

              {/* Glass Card Container with inner specular edge */}
              <div className="relative w-full h-full rounded-3xl bg-zinc-900/35 backdrop-blur-xl border border-white/10 border-t-white/20 shadow-2xl overflow-hidden">
                <SplineCanvas sceneUrl="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />

                {/* Bottom status bar inside card with crisp contrast */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-200 px-4 py-2.5 rounded-full bg-zinc-950/80 backdrop-blur-2xl border border-white/15 shadow-lg pointer-events-none">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-white">C# ASP.NET Core & OCI</span>
                  </span>
                  <span className="text-zinc-400 font-medium">50+ Nodes SysAdmin</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
