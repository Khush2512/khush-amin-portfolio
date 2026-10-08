"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Code2,
  ShieldCheck,
  ChevronDown,
  FileText,
  Download,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import SplineCanvas from "./SplineCanvas";
import CvModal from "./CvModal";

export default function Hero3D() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedCvTrack, setSelectedCvTrack] = useState<"net" | "cloud">("net");

  const openCvModal = (track: "net" | "cloud") => {
    setSelectedCvTrack(track);
    setCvModalOpen(true);
  };

  return (
    <>
      <section id="about" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden scroll-mt-24">
        {/* Background Radial Purple Glows */}
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
                  Hi, I'm <span className="gradient-text-purple-emerald">Khush Amin</span>
                </h1>
                <h2 className="text-lg sm:text-xl font-mono text-zinc-300 font-medium flex flex-wrap items-center gap-2">
                  <span className="text-purple-400">Graduate Software Engineer</span>
                  <span className="text-zinc-600">|</span>
                  <span className="text-emerald-400">Junior .NET Developer</span>
                  <span className="text-zinc-600">|</span>
                  <span className="text-purple-300">Cloud & Infra Specialist</span>
                </h2>
              </div>

              {/* Value Pitch */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans max-w-2xl">
                De Montfort University <strong className="text-white">First-Class Honours (70%)</strong> Computer Science graduate. Uniquely bridges <strong className="text-emerald-400">2 years of commercial IT sysadmin experience</strong> (Active Directory, 50+ workstation support, LAN uptime) with robust <strong className="text-purple-400">full-stack C# / ASP.NET Core & dual Oracle Cloud architectures</strong>.
              </p>

              {/* Quick Contact Pills */}
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

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 shadow-xl shadow-purple-900/30 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore Technical Deep-Dives</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Dynamic Dual CV Links (Native HTML Anchors) */}
                <a
                  href="/Khush_Amin_CV_new.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/80 transition-all shadow-lg shadow-purple-950/30"
                >
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <span>View & Download CV (.NET)</span>
                </a>

                <a
                  href="/Khush_Amin_Cloud_Infrastructure_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs font-semibold text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/80 transition-all shadow-lg shadow-emerald-950/30"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>View & Download CV (Cloud)</span>
                </a>
              </div>

              {/* Metrics Bar */}
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

            {/* Right Column: 3D Spline Canvas Viewport */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <SplineCanvas sceneUrl="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />

              {/* Badges Overlay */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg pointer-events-none">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>50+ Workstations Active Directory</span>
              </div>

              <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-purple-300 flex items-center gap-1.5 shadow-lg pointer-events-none">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>C# ASP.NET Core & OCI Architect</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-16">
            <a
              href="#competencies"
              className="flex flex-col items-center gap-2 text-xs font-mono text-zinc-500 hover:text-purple-400 transition-colors group"
            >
              <span>EXPLORE COMPETENCIES</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-purple-500 group-hover:text-emerald-400" />
            </a>
          </div>
        </div>
      </section>

      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        defaultRole={selectedCvTrack}
      />
    </>
  );
}
