"use client";

import React, { useState, useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import { Sparkles, Cpu, Layers } from "lucide-react";

interface SplineCanvasProps {
  sceneUrl?: string;
}

function SplineFallback({ isLoading = false }: { isLoading?: boolean }) {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-xl flex flex-col items-center justify-center p-6 overflow-hidden group">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/20 via-zinc-950 to-emerald-950/20" />
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-emerald-500/20 opacity-40 pointer-events-none" />

      {/* Floating 3D Core Visual Concept */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
        <div className="relative mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-purple-600/30 to-emerald-500/20 border border-purple-500/30 flex items-center justify-center shadow-2xl shadow-purple-900/40 animate-float">
            <Cpu className="w-12 h-12 text-purple-400 animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-mono mb-2">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>{isLoading ? "Initializing 3D Engine..." : "Interactive 3D Workspace"}</span>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
          C# .NET • Oracle Cloud Architect • Enterprise Systems Administrator
        </p>

        {isLoading && (
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
            <span className="text-[11px] text-zinc-400 font-mono">Rendering Spline Canvas...</span>
          </div>
        )}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
    </div>
  );
}

export default function SplineCanvas({
  sceneUrl = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
}: SplineCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

    let app: Application | null = null;
    let isSubscribed = true;

    try {
      app = new Application(canvasRef.current);
      app
        .load(sceneUrl)
        .then(() => {
          if (isSubscribed) {
            setIsLoaded(true);
          }
        })
        .catch((err) => {
          console.warn("Spline 3D Scene fallback activated:", err);
          if (isSubscribed) {
            setHasError(true);
          }
        });
    } catch (err) {
      console.warn("Spline runtime init fallback activated:", err);
      if (isSubscribed) {
        setHasError(true);
      }
    }

    return () => {
      isSubscribed = false;
      if (app) {
        try {
          app.dispose();
        } catch (_) {}
      }
    };
  }, [isMounted, sceneUrl]);

  if (!isMounted) {
    return <SplineFallback isLoading={true} />;
  }

  if (hasError) {
    return <SplineFallback isLoading={false} />;
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden touch-pan-y">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Skeleton Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10">
          <SplineFallback isLoading={true} />
        </div>
      )}

      {/* Mobile Touch Scroll Protection: Disable pointer events on mobile (< 768px) so user doesn't get trapped while scrolling */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block pointer-events-none md:pointer-events-auto transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
