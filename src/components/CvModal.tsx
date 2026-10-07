"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: "net" | "cloud";
}

export default function CvModal({ isOpen, onClose, defaultRole = "net" }: CvModalProps) {
  const [activeTab, setActiveTab] = React.useState<"net" | "cloud">(defaultRole);

  React.useEffect(() => {
    setActiveTab(defaultRole);
  }, [defaultRole]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-zinc-800/80 bg-zinc-900/40">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-100">Curriculum Vitae Download</h3>
                <p className="text-xs text-zinc-400 font-mono">Khush Amin — DMU First Class Graduate</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            {/* Role Target Switcher */}
            <div className="grid grid-cols-2 gap-3 p-1 rounded-xl bg-zinc-900 border border-zinc-800">
              <button
                onClick={() => setActiveTab("net")}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-mono text-xs font-semibold transition-all ${
                  activeTab === "net"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>.NET / SWE Track</span>
              </button>
              <button
                onClick={() => setActiveTab("cloud")}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-mono text-xs font-semibold transition-all ${
                  activeTab === "cloud"
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/30"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Cloud & Infra Track</span>
              </button>
            </div>

            {/* Overview Details */}
            {activeTab === "net" ? (
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-purple-900/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                    Target Role Alignment
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-950 text-purple-300 border border-purple-800">
                    C# / ASP.NET Focus
                  </span>
                </div>
                <h4 className="text-sm font-bold text-zinc-200">Software Engineer & .NET Specialist CV</h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Emphasizes 82% 1st Class score in Enterprise ASP.NET / C# Staff Management Subsystem.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Highlights SQL Server relational database design, 3NF schema, and RBAC authentication.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Details Agile Scrum team sprint delivery, Git code reviews, and automated unit testing.</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-emerald-900/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    Target Role Alignment
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                    OCI & SysAdmin Focus
                  </span>
                </div>
                <h4 className="text-sm font-bold text-zinc-200">Cloud & Infrastructure Specialist CV</h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Showcases Oracle Cloud Infrastructure 2024 Generative AI Professional Certification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Includes commercial Junior System Administrator experience managing 50+ enterprise workstations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Covers Active Directory identity management, LAN uptime monitoring, and security patching.</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Quick Candidate Snapshot */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono p-3 rounded-xl bg-zinc-950 border border-zinc-800">
              <div>
                <span className="text-zinc-500 block">Candidate:</span>
                <span className="text-zinc-200 font-bold">{PERSONAL_INFO.name}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Degree:</span>
                <span className="text-purple-400 font-bold">1st Class Hons (70%)</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Location:</span>
                <span className="text-zinc-200">{PERSONAL_INFO.location}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Certifications:</span>
                <span className="text-emerald-400">Oracle Cloud Gen AI</span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 p-5 border-t border-zinc-800/80 bg-zinc-900/40">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <a
              href="/Khush_Amin_CV.pdf"
              download={`Khush_Amin_CV_${activeTab === "net" ? "NET_SWE" : "Cloud_Infra"}.pdf`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-white shadow-lg transition-all ${
                activeTab === "net"
                  ? "bg-purple-600 hover:bg-purple-500 shadow-purple-900/40"
                  : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/40"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download CV ({activeTab === "net" ? ".NET / SWE" : "Cloud / Infra"})</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
