"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import {
  Award,
  ChevronDown,
  ChevronUp,
  Layers,
  CheckCircle2,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showArchitecture, setShowArchitecture] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Dynamic Cursor 3D Tilt State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    // Calculate 3D tilt angle
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 25;
    const tiltY = (centerX - x) / 25;

    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      data-cursor-text="PROJECT"
      className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group border border-zinc-800/80 cursor-pointer"
    >
      {/* Interactive Cursor Spotlight Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(168, 85, 247, 0.18), transparent 80%)`,
        }}
      />
      
      {/* Border Highlight Following Cursor */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl border border-purple-500/40"
        style={{
          background: `radial-gradient(300px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(52, 211, 153, 0.25), transparent 70%)`,
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
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

        {/* Architecture Breakdown Accordion */}
        {project.architectureNotes && (
          <div className="mb-6 rounded-xl bg-zinc-950/80 border border-zinc-800/90 overflow-hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowArchitecture(!showArchitecture);
              }}
              className="w-full flex items-center justify-between p-3.5 text-xs font-mono font-medium text-zinc-300 hover:text-purple-300 hover:bg-zinc-900/60 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>System Architecture & Relational Design</span>
              </div>
              {showArchitecture ? (
                <ChevronUp className="w-4 h-4 text-zinc-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-zinc-400" />
              )}
            </button>

            <AnimatePresence>
              {showArchitecture && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 border-t border-zinc-800 text-xs text-zinc-300 font-mono space-y-2 bg-zinc-950"
                >
                  <p className="text-purple-300 font-semibold">{project.architectureNotes}</p>
                  <p className="text-zinc-400 leading-relaxed text-[11px]">
                    Integrated strict parameterized query handlers to eliminate SQL injection attack vectors, along with normalized schemas up to 3NF to maintain transactional integrity.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Bottom Tech Badges Footer */}
      <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
        {project.badges.map((badge) => (
          <span
            key={badge}
            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-purple-300 group-hover:border-purple-800/50 transition-colors"
          >
            #{badge}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
