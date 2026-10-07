"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Terminal,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: ".NET / Cloud Engineering Opportunity",
    message: "",
  });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: ".NET / Cloud Engineering Opportunity",
        message: "",
      });
    }, 1200);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-zinc-950 border-t border-zinc-800">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono text-purple-300">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            <span>CONNECT WITH KHUSH AMIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Get in <span className="gradient-text-purple-emerald">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Interested in discussing Software Engineering, .NET Development, or Cloud Infrastructure opportunities? Send a message directly or connect via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Quick Copy Contact Cards & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-zinc-800 space-y-6">
              <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Direct Contact Details</span>
              </h3>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-800/60 text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-zinc-500 block">EMAIL ADDRESS</span>
                    <span className="text-xs sm:text-sm font-mono text-zinc-200 font-semibold truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 ${
                    copiedEmail
                      ? "bg-emerald-950 text-emerald-300 border border-emerald-700"
                      : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700"
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Copy Card */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-zinc-500 block">PHONE NUMBER</span>
                    <span className="text-xs sm:text-sm font-mono text-zinc-200 font-semibold truncate block">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 ${
                    copiedPhone
                      ? "bg-emerald-950 text-emerald-300 border border-emerald-700"
                      : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700"
                  }`}
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-800/60 text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block">LOCATION</span>
                  <span className="text-xs sm:text-sm font-mono text-zinc-200 font-semibold block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Link Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4 text-emerald-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800">
              <h3 className="text-xl font-bold text-white font-sans mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-emerald-400" />
                <span>Send Direct Message</span>
              </h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-md mx-auto">
                    Thank you for reaching out. Khush will review your inquiry and get back to you promptly at your provided email address.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 block">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-purple-500 focus:outline-none text-xs sm:text-sm font-sans text-zinc-100 placeholder-zinc-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 block">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-purple-500 focus:outline-none text-xs sm:text-sm font-sans text-zinc-100 placeholder-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 block">Subject / Role Interest</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder=".NET Developer / Cloud Specialist / General Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-purple-500 focus:outline-none text-xs sm:text-sm font-sans text-zinc-100 placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 block">Message Details</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your team, project requirements, or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-purple-500 focus:outline-none text-xs sm:text-sm font-sans text-zinc-100 placeholder-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-mono text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500 shadow-lg shadow-purple-950/40 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>&copy; {new Date().getFullYear()} Khush Amin. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>DMU FIRST CLASS GRADUATE</span>
            <span>•</span>
            <span>ORACLE CLOUD CERTIFIED</span>
            <span>•</span>
            <span>C# .NET DEVELOPER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
