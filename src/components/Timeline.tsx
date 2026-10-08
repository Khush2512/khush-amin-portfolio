"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { COMMERCIAL_EXPERIENCES, CERTIFICATIONS, PERSONAL_INFO } from "@/data/portfolioData";
import {
  Briefcase,
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<"commercial" | "credentials">("commercial");

  return (
    <section id="experience" className="py-24 relative bg-zinc-950/80 border-t border-b border-zinc-900 scroll-mt-24">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono text-purple-300">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>COMMERCIAL IMPACT & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Dual-Track Career & <span className="gradient-text-purple-emerald">Credentials</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Parallel expertise spanning 2 years of commercial IT infrastructure administration and industry-certified Oracle Cloud specialization.
          </p>

          {/* Interactive Track Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 gap-2 mt-4 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("commercial")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                activeTab === "commercial"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Track A: Commercial IT (2 Yrs)</span>
            </button>
            <button
              onClick={() => setActiveTab("credentials")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                activeTab === "credentials"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Track B: Certs & Education</span>
            </button>
          </div>
        </div>

        {/* Tab Content rendering */}
        <div className="mt-8">
          {activeTab === "commercial" ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {/* Timeline Track Vertical List */}
              <div className="relative pl-6 border-l-2 border-zinc-800 space-y-8">
                {COMMERCIAL_EXPERIENCES.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing Node Marker */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 group-hover:border-emerald-400 group-hover:scale-125 transition-all shadow-md shadow-purple-900/50" />

                    <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-zinc-800/90 space-y-4">
                      {/* Role Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-800/50 text-[11px] font-mono font-semibold text-purple-300">
                              {exp.badge}
                            </span>
                            {exp.uptimeMetric && (
                              <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-800/50 text-[11px] font-mono font-bold text-emerald-300">
                                {exp.uptimeMetric}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-white font-sans group-hover:text-purple-300 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-xs font-mono text-emerald-400 font-medium">
                            {exp.company} — <span className="text-zinc-400">{exp.location}</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Bullet points */}
                      <div className="space-y-2 pt-2">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="pt-4 flex flex-wrap gap-1.5 border-t border-zinc-800/60">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              {/* Academic Degree Card */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-purple-500/40 relative overflow-hidden bg-gradient-to-br from-purple-950/30 via-zinc-950 to-zinc-900">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider block">
                        ACADEMIC DEGREE DISTINCTION
                      </span>
                      <h3 className="text-xl font-extrabold text-white font-sans">
                        BSc (Hons) Computer Science
                      </h3>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-mono font-extrabold shadow-sm">
                    First Class Honours (70% Average)
                  </span>
                </div>

                <p className="text-xs font-mono text-zinc-400 mb-3">{PERSONAL_INFO.university}</p>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  Specialized in Object-Oriented Software Architecture (C# / Java), 3-Tier Enterprise Systems, Relational Database Normalization (3NF), SQL Injection defense strategies, and Web Security.
                </p>
              </div>

              {/* Oracle Cloud Certifications List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-zinc-800/90 relative overflow-hidden space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="p-2.5 rounded-2xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 shrink-0">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-[10px] font-mono font-bold text-emerald-300">
                          {cert.badgeText} ({cert.date})
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white font-sans group-hover:text-emerald-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-purple-400">{cert.issuer}</p>
                      <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-800/60 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skillsVerified.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-emerald-300"
                          >
                            ✓ {skill}
                          </span>
                        ))}
                      </div>

                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono font-semibold text-zinc-200 hover:text-white transition-all w-full justify-center"
                      >
                        <span>Verify Credential on Oracle University</span>
                        <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
