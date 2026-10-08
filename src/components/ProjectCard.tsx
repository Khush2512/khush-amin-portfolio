"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import {
  Award,
  Layers,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Code2,
} from "lucide-react";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        onMouseMove={handleMouseMove}
        className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group border border-zinc-800/80 transform hover:scale-[1.02] transition-all duration-100 ease-out shadow-lg hover:shadow-2xl hover:shadow-purple-950/40"
      >
        {/* Spotlight Highlight */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
          style={{
            background: `radial-gradient(350px circle at var(--mx, 50%) var(--my, 50%), rgba(168, 85, 247, 0.15), transparent 75%)`,
          }}
        />

        <div className="relative z-10">
          {/* Top Header & Stat Badge */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-purple-950/80 border border-purple-800/50 font-mono text-[11px] font-bold text-purple-300">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">{project.subtitle}</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-sans group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Stat Badge Highlight */}
            {project.stat && (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-500/40 text-emerald-300 font-mono shadow-md">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold leading-none">{project.stat}</span>
                  <span className="text-[10px] text-emerald-400/80 font-medium leading-tight">
                    {project.statLabel}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Project Description */}
          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Technical Highlights */}
          <div className="space-y-2 mb-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold block">
              Engineering Accomplishments:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {project.keyHighlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button & Badges Footer */}
        <div className="relative z-10 pt-4 border-t border-zinc-800/80 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-purple-300 group-hover:border-purple-800/50 transition-colors"
              >
                #{badge}
              </span>
            ))}
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-mono text-xs font-bold text-purple-200 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/80 hover:border-purple-500 transition-all shadow-md group/btn"
          >
            <Layers className="w-4 h-4 text-purple-400 group-hover/btn:rotate-12 transition-transform" />
            <span>View Technical Deep-Dive</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-400 ml-auto" />
          </button>
        </div>
      </motion.div>

      <ProjectModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
