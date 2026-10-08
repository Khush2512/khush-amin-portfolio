"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Code2,
  ChevronDown,
  Camera,
  Box,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import SplineCanvas from "./SplineCanvas";
import HeroPhoto from "./HeroPhoto";
import Tripo3DCanvas from "./Tripo3DCanvas";

export default function Hero() {
  const [viewMode, setViewMode] = useState<"tripo" | "photo" | "spline">("tripo");

  return (
    <section id="about" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
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

          {/* Right Column: Interactive 3D Model & View Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Display Switcher Toggle */}
            <div className="flex items-center justify-center gap-1.5 mb-4 bg-zinc-900/90 p-1.5 rounded-2xl border border-zinc-800 max-w-sm mx-auto shadow-lg">
              <button
                onClick={() => setViewMode("tripo")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                  viewMode === "tripo"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span>Tripo3D Model</span>
              </button>
              <button
                onClick={() => setViewMode("photo")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                  viewMode === "photo"
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/30"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Photo Card</span>
              </button>
              <button
                onClick={() => setViewMode("spline")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                  viewMode === "spline"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/30"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>Spline Scene</span>
              </button>
            </div>

            {/* Render Selected 3D View */}
            {viewMode === "tripo" ? (
              <Tripo3DCanvas modelUrl="https://studio.tripo3d.ai/3d-model/e45291e9-59e4-4bed-a46d-a9dc3718e650" />
            ) : viewMode === "photo" ? (
              <HeroPhoto imageSrc="/khush-profile.png" name="Khush Amin" />
            ) : (
              <SplineCanvas sceneUrl="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
            )}
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
