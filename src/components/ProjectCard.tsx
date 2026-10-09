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
        className={`${bentoSpan} bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition duration-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
      >
        <div>
          {/* Upper Corner Monospace Mark */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="font-mono text-xs text-purple-400 tracking-wide font-medium">
              {project.category.toUpperCase()}
            </span>
            {project.stat && (
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-0.5 rounded-full font-semibold">
                {project.stat} • {project.statLabel?.includes("First Class") ? "1st Class" : project.statLabel || "Honours"}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-purple-300 transition-colors mb-3 flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6">
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

        {/* Footer Minimalist Tech Tags */}
        <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="text-xs font-mono text-zinc-400 bg-zinc-800/50 px-2.5 py-1 rounded-md"
              >
                {badge}
              </span>
            ))}
          </div>

          <span className="text-xs font-mono text-purple-400 group-hover:underline flex items-center gap-1 shrink-0">
            <Layers className="w-3 h-3" />
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
