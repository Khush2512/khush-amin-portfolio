"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Code2, Database, Cloud, GitBranch, Layers, CheckCircle2 } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-purple-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Cloud: <Cloud className="w-5 h-5 text-purple-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-emerald-400" />,
};

export default function Competencies() {
  return (
    <section id="competencies" className="py-24 relative border-t border-zinc-800/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimalist Section Header */}
        <div className="space-y-2 mb-16">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest block font-medium">
            // TECHNICAL COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Core Engineering Stack & Cloud Architecture
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl leading-relaxed">
            Categorized skills across enterprise .NET development, SQL Server database design (3NF), Active Directory sysadmin, and Oracle Cloud services.
          </p>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition duration-300 rounded-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  {ICON_MAP[category.iconName] || <Layers className="w-5 h-5 text-purple-400" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="text-xs font-mono text-zinc-200">{skill.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
