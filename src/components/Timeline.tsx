"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMMERCIAL_EXPERIENCES, CERTIFICATIONS, PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight, GraduationCap, ShieldCheck, Briefcase } from "lucide-react";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 relative border-t border-zinc-800/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimalist Section Header */}
        <div className="space-y-2 mb-16">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block font-medium">
            // EXPERIENCE & CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Commercial IT Ops & Dual Track Certifications
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl leading-relaxed">
            Proven track record bridging 2 years of commercial sysadmin experience with First-Class Honours Computer Science and Oracle Cloud specialization.
          </p>
        </div>

        {/* Hairline Divided 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Column A: Commercial IT Operations */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 pb-4 border-b border-zinc-800/80">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                Commercial IT Infrastructure & Ops
              </h3>
            </div>

            <div className="space-y-8">
              {COMMERCIAL_EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-3 relative pl-4 border-l border-zinc-800"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-purple-400 font-semibold">
                      {exp.title}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-500">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-zinc-300 font-medium">
                    {exp.company} — <span className="text-zinc-500">{exp.location}</span>
                  </div>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-zinc-300 font-sans">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 font-mono">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column B: Professional Certifications & Academic Degree */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 pb-4 border-b border-zinc-800/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                Certifications & Academic Distinction
              </h3>
            </div>

            <div className="space-y-8">
              {/* BSc Degree Box */}
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-purple-900/40 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-purple-300">
                    BSc (Hons) Computer Science
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full font-bold">
                    1st Class Honours (70%)
                  </span>
                </div>
                <div className="text-xs font-mono text-zinc-400">{PERSONAL_INFO.university}</div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  Specialized in C# enterprise software architecture, SQL Server database normalization (3NF), parameterized query security, and web software engineering.
                </p>
              </div>

              {/* Oracle Cloud Certifications */}
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-3 hover:border-zinc-700 transition duration-300"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white font-sans">
                        {cert.title}
                      </h4>
                      <span className="font-mono text-xs text-purple-400">{cert.issuer}</span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-md shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsVerified.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors group"
                    >
                      <span>Verify Credential on Oracle</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
