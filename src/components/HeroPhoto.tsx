"use client";

import React, { useState, useRef } from "react";
import { ShieldCheck, Code2, Sparkles, Terminal, Award } from "lucide-react";

interface HeroPhotoProps {
  imageSrc?: string;
  name?: string;
}

export default function HeroPhoto({
  imageSrc = "/khush-profile.png",
  name = "Khush Amin",
}: HeroPhotoProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [imageError, setImageError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 20;
    const tiltY = (centerX - x) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Background Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-emerald-500/20 rounded-3xl blur-[90px] pointer-events-none" />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl bg-zinc-950/80 border-2 border-purple-500/40 p-4 shadow-2xl overflow-hidden cursor-pointer transition-transform duration-150 ease-out group"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dynamic Holographic Spotlight Light */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-3xl"
          style={{
            background: `radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(168, 85, 247, 0.25), transparent 80%)`,
          }}
        />

        {/* Profile Image Container */}
        <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          {!imageError ? (
            <img
              src={imageSrc}
              alt={name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Fallback 3D Portrait Visual if image isn't uploaded yet */
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600/40 to-emerald-500/30 border border-purple-400/50 flex items-center justify-center shadow-xl animate-pulse">
                <Terminal className="w-12 h-12 text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">{name}</h3>
                <p className="text-xs font-mono text-purple-400 mt-1">1st Class Computer Science Graduate</p>
                <p className="text-[11px] text-zinc-500 font-mono mt-3">
                  Add <code className="text-emerald-400 font-bold">public/khush-profile.png</code> to display your real photo here!
                </p>
              </div>
            </div>
          )}

          {/* Bottom Dark Gradient Shadow */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />
        </div>

        {/* Floating 3D Tech Badges */}
        <div className="absolute top-8 right-8 z-20 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-xl">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Active Directory SysAdmin</span>
        </div>

        <div className="absolute bottom-8 left-8 z-20 px-3.5 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-purple-500/40 text-xs font-mono text-purple-300 flex items-center gap-2 shadow-xl">
          <Code2 className="w-4 h-4 text-purple-400" />
          <div className="flex flex-col">
            <span className="font-bold text-white leading-none">C# .NET & OCI</span>
            <span className="text-[10px] text-zinc-400 font-normal leading-tight">Software Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
