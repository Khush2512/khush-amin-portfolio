"use client";

import React from "react";
import { PROJECTS } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import { FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-emerald-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono text-purple-300">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>HONOURS CASE STUDIES & PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Featured <span className="gradient-text-purple-emerald">Software Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            In-depth technical deep-dives into enterprise platforms built during De Montfort University degree coursework and full-stack software development.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
