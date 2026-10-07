"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on desktop/devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update sharp dot immediately for zero latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Update ambient spotlight immediately
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${mouseX - 300}px, ${mouseY - 300}px, 0)`;
      }
    };

    // Smooth lerp loop for the trailing outer cursor ring
    const render = () => {
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX - 18}px, ${currentY - 18}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Ambient Large Cursor Spotlight - Hardware Accelerated */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-radial from-purple-600/10 via-emerald-500/5 to-transparent blur-[80px] will-change-transform pointer-events-none"
        style={{ transform: "translate3d(-600px, -600px, 0)" }}
      />

      {/* Trailing Outer Spring Ring */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-9 h-9 rounded-full border border-purple-400/50 bg-purple-950/20 backdrop-blur-[2px] will-change-transform pointer-events-none transition-colors duration-200"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Sharp Inner Dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] will-change-transform pointer-events-none"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </div>
  );
}
