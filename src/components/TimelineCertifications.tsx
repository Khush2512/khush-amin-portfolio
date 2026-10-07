"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES, CERTIFICATIONS, PERSONAL_INFO } from "@/data/portfolioData";
import {
  Briefcase,
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function TimelineCertifications() {
  return (
    <section id="experience" className="py-24 relative bg-zinc-950/80 border-t border-b border-zinc-900">
      {/* Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono text-purple-300">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>COMMERCIAL IMPACT & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Career Timeline & <span className="gradient-text-purple-emerald">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Enterprise system administration experience combined with industry-recognized Oracle Cloud credentials and academic distinction.
          </p>
        </div>

        {/* Split Layout: Left (Commercial Experience) & Right (Certifications & Degree) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Commercial Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-800/60 text-purple-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-sans">Commercial & Operational Experience</h3>
                <p className="text-xs text-zinc-400 font-mono">Enterprise IT Support & Commercial Customer Operations</p>
              </div>
            </div>

            {/* Timeline Vertical Track */}
            <div className="relative pl-6 border-l-2 border-zinc-800 space-y-10">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 group-hover:border-emerald-400 group-hover:scale-125 transition-all shadow-md shadow-purple-900/50" />

                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-zinc-800/90 space-y-4">
                    {/* Role Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-800/50 text-[11px] font-mono font-semibold text-purple-300">
                          {exp.badge}
                        </span>
                        <h4 className="text-lg font-bold text-white font-sans mt-1.5 group-hover:text-purple-300 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-xs font-mono text-emerald-400 font-medium">
                          {exp.company} — <span className="text-zinc-400">{exp.location}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800">
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
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-3 flex flex-wrap gap-1.5 border-t border-zinc-800/60">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Academic Degree */}
          <div id="certifications" className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-sans">Oracle Cloud & Degree</h3>
                <p className="text-xs text-zinc-400 font-mono">Professional Certifications & Academic Standing</p>
              </div>
            </div>

            {/* Academic Degree Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border-2 border-purple-500/40 relative overflow-hidden bg-gradient-to-br from-purple-950/30 via-zinc-950 to-zinc-900"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                  <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                    Degree Distinction
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-mono font-extrabold shadow-sm">
                  1st Class Hons (70%)
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-white font-sans">
                BSc (Hons) Computer Science
              </h4>
              <p className="text-xs font-mono text-zinc-400 mt-1">{PERSONAL_INFO.university}</p>
              <p className="text-xs text-zinc-300 font-sans mt-3 leading-relaxed">
                Focused on Object-Oriented Software Engineering (C# / Java), Database Systems & Architecture (SQL Server / MySQL), and Web Application Security.
              </p>
            </motion.div>

            {/* Oracle Cloud Certifications List */}
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 border border-zinc-800/90 relative overflow-hidden group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 transition-colors">
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-[10px] font-mono font-bold text-emerald-300">
                          {cert.badgeText}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 ml-2">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white font-sans group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-purple-400 mt-0.5">{cert.issuer}</p>

                  <p className="text-xs text-zinc-300 font-sans mt-3 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                    {cert.skillsVerified.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-emerald-300"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
