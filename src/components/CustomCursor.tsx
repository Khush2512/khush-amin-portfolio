"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on desktop devices with fine pointer (mouse/trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update sharp dot position immediately (zero latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    // Smooth lerp loop for the outer follower ring
    const render = () => {
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

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
      {/* Clean, Crystal-Clear Outer Follower Ring (Thin Sharp Glowing Border, NO blur) */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-9 h-9 rounded-full border-2 border-purple-400/90 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.4)] pointer-events-none will-change-transform transition-all duration-150"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Sharp Inner Precision Dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-2.5 h-2.5 -ml-1 -mt-1 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] pointer-events-none will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </div>
  );
}
