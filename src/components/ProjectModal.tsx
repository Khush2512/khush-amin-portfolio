"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import {
  X,
  Award,
  Layers,
  ShieldCheck,
  Database,
  CheckCircle2,
  Lock,
  Cpu,
  Code2,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-zinc-800/80 bg-zinc-900/40">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-xs font-mono font-bold text-purple-300">
                  {project.category} TECHNICAL DEEP-DIVE
                </span>
                {project.stat && (
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.stat} {project.statLabel}</span>
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-zinc-400">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            {/* Overview */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <h3 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                System Overview
              </h3>
              <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Breakdown (Client, API, DB) */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>3-Tier Architecture Breakdown</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Client Layer */}
                <div className="p-5 rounded-2xl bg-zinc-900/70 border border-purple-900/40 space-y-3">
                  <div className="flex items-center gap-2 text-purple-300 font-mono text-xs font-bold">
                    <Code2 className="w-4 h-4 text-purple-400" />
                    <span>1. Client Presentation</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {project.deepDive.clientLayer}
                  </p>
                </div>

                {/* API Layer */}
                <div className="p-5 rounded-2xl bg-zinc-900/70 border border-emerald-900/40 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-bold">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span>2. Business API Middleware</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {project.deepDive.apiLayer}
                  </p>
                </div>

                {/* Database Layer */}
                <div className="p-5 rounded-2xl bg-zinc-900/70 border border-purple-900/40 space-y-3">
                  <div className="flex items-center gap-2 text-purple-300 font-mono text-xs font-bold">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span>3. Database & Relational Persistence</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {project.deepDive.databaseLayer}
                  </p>
                </div>
              </div>
            </div>

            {/* Security & Database Strategy */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Database & Security Strategy</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Security & Parameterized Queries */}
                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                    <Lock className="w-4 h-4" />
                    <span>SQLi & Security Mitigation</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {project.deepDive.securityStrategy}
                  </p>
                </div>

                {/* Schema Normalization (3NF) */}
                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold">
                    <Database className="w-4 h-4" />
                    <span>3NF Normalization</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {project.deepDive.normalization}
                  </p>
                </div>

                {/* ACID Compliance */}
                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ACID Compliance</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {project.deepDive.acidCompliance}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Engineering Accomplishments */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                Verified Key Engineering Metrics:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyHighlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-200 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-purple-300"
                >
                  #{badge}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end p-6 border-t border-zinc-800/80 bg-zinc-900/40">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/40"
            >
              Close Deep-Dive
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
