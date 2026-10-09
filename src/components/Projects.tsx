"use client";

import React from "react";
import { PROJECTS } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative scroll-mt-24">
      {/* Soft Ambient Spotlight */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimalist Section Header */}
        <div className="space-y-2 mb-12">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest block font-medium">
            // FEATURED CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Honours Software Architecture & Capstones
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl leading-relaxed">
            Technical deep-dives into enterprise platforms engineered with ASP.NET C#, normalized SQL Server schemas (3NF), and RESTful microservices.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
