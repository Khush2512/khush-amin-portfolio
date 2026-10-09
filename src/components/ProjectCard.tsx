"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Bento span logic based on index
  const bentoSpan =
    index === 0
      ? "md:col-span-7"
      : index === 1
      ? "md:col-span-5"
      : "md:col-span-12 lg:col-span-6";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        onClick={() => setModalOpen(true)}
        className={`${bentoSpan} p-8 rounded-3xl bg-zinc-900/35 backdrop-blur-xl backdrop-saturate-150 border border-white/10 hover:border-white/20 hover:bg-zinc-900/50 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.25)] flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
      >
        <div>
          {/* Upper Corner Monospace Mark */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="font-mono text-xs text-purple-400 tracking-wide font-medium px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10">
              {project.category.toUpperCase()}
            </span>
            {project.stat && (
              <span className="font-mono text-xs text-emerald-300 bg-emerald-950/40 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-full font-semibold">
                {project.stat} • {project.statLabel?.includes("First Class") ? "1st Class" : project.statLabel || "Honours"}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-purple-300 transition-colors mb-3 flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Engineering Highlights */}
          <div className="space-y-2 mb-6">
            {project.keyHighlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Minimalist iOS Glass Tech Tags */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.06] backdrop-blur-md border border-white/10 text-zinc-300"
              >
                {badge}
              </span>
            ))}
          </div>

          <span className="text-xs font-mono text-purple-400 group-hover:underline flex items-center gap-1 shrink-0">
            <Layers className="w-3.5 h-3.5" />
            <span>Deep-Dive</span>
          </span>
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
