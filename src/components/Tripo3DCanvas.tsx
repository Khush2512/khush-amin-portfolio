"use client";

import React, { useState } from "react";
import { Sparkles, Box, ShieldCheck, Code2 } from "lucide-react";

interface Tripo3DCanvasProps {
  modelUrl?: string;
}

export default function Tripo3DCanvas({
  modelUrl = "https://studio.tripo3d.ai/3d-model/e45291e9-59e4-4bed-a46d-a9dc3718e650",
}: Tripo3DCanvasProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden border-2 border-purple-500/40 bg-zinc-950/80 shadow-2xl group">
      {/* Background Purple & Emerald Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/30 via-zinc-950 to-emerald-950/30 pointer-events-none" />
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-emerald-500/20 opacity-60 pointer-events-none" />

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-950/90 p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center shadow-xl mb-4 animate-bounce">
            <Box className="w-8 h-8 text-purple-400" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800 text-purple-300 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Loading Your Real 3D Model...</span>
          </div>
          <p className="text-xs text-zinc-400 font-sans">Tripo3D Interactive Model Embed</p>
        </div>
      )}

      {/* Tripo3D Interactive Model Embed Iframe */}
      <iframe
        src={modelUrl}
        title="Khush Amin 3D Model"
        onLoad={() => setIsLoading(false)}
        className="w-full h-full border-0 relative z-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      {/* Floating 3D Badges */}
      <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg pointer-events-none">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>3D Scan Model</span>
      </div>

      <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-purple-500/40 text-[11px] font-mono text-purple-300 flex items-center gap-1.5 shadow-lg pointer-events-none">
        <Code2 className="w-3.5 h-3.5 text-purple-400" />
        <span>Tripo3D Interactive</span>
      </div>
    </div>
  );
}
