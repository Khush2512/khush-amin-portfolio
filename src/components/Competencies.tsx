"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Sparkles,
  CheckCircle2,
  Layers,
  Terminal,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-purple-400" />,
  Database: <Database className="w-6 h-6 text-emerald-400" />,
  Cloud: <Cloud className="w-6 h-6 text-purple-400" />,
  GitBranch: <GitBranch className="w-6 h-6 text-emerald-400" />,
};

export default function Competencies() {
  return (
    <section id="competencies" className="py-24 relative bg-zinc-950/60 border-t border-b border-zinc-900 scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-950/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-950/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono text-purple-300">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>TECHNICAL ARCHITECTURE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Core Engineering <span className="gradient-text-purple-emerald">Competencies</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Categorized technical stack spanning enterprise .NET software engineering, relational database optimization (3NF), commercial system administration, and Oracle Cloud architecture.
          </p>
        </div>

        {/* Competencies Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 relative overflow-hidden group"
            >
              {/* Top Accent Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-purple-500 to-purple-800"
                    : "bg-gradient-to-r from-emerald-400 to-teal-600"
                }`}
              />

              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-purple-500/40 transition-colors shadow-lg">
                    {ICON_MAP[category.iconName] || <Layers className="w-6 h-6 text-purple-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-sans">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      skill.highlight
                        ? "bg-purple-950/20 border-purple-800/40 hover:border-purple-500/60 shadow-sm"
                        : "bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 ${
                          skill.highlight ? "text-purple-400" : "text-emerald-400"
                        }`}
                      />
                      <span className="text-xs font-mono font-medium text-zinc-200">{skill.name}</span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                        skill.level === "Advanced"
                          ? "bg-purple-950 text-purple-300 border-purple-800"
                          : skill.level === "Certified"
                          ? "bg-emerald-950 text-emerald-300 border-emerald-800 font-bold"
                          : "bg-zinc-800 text-zinc-300 border-zinc-700"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Excellence Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-zinc-900/60 to-emerald-950/40 border border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-sans">
                Academic Distinction — De Montfort University
              </h4>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                BSc (Hons) Computer Science degree completed with First Class Honours (70% overall average) & 82% in ASP.NET Core enterprise development.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-purple-500 text-xs font-mono font-semibold text-zinc-200 hover:text-white transition-all shrink-0"
          >
            VERIFY CASE STUDIES &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
