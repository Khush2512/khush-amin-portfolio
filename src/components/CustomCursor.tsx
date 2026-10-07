"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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

      // Check if mouse is hovering over an interactive element or card
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "button, a, input, textarea, .glass-panel-hover, [data-cursor]"
        );
        setIsHovered(!!interactive);
      }
    };

    // Fast lerp loop (0.75 lerp speed for instant snappy tracking)
    const render = () => {
      currentX += (mouseX - currentX) * 0.75;
      currentY += (mouseY - currentY) * 0.75;

      if (cursorRef.current) {
        const sizeOffset = isHovered ? 32 : 18;
        cursorRef.current.style.transform = `translate3d(${currentX - sizeOffset}px, ${currentY - sizeOffset}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isHovered]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Dynamic Outer Follower Ring - Fast & Snappy tracking */}
      <div
        ref={cursorRef}
        className={`absolute top-0 left-0 rounded-full border-2 transition-all duration-100 ease-out pointer-events-none will-change-transform ${
          isHovered
            ? "w-16 h-16 border-emerald-400/90 bg-emerald-500/10 shadow-[0_0_25px_rgba(52,211,153,0.4)] scale-110"
            : "w-9 h-9 border-purple-400/90 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.4)] scale-100"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Sharp Inner Precision Dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 -ml-1 -mt-1 rounded-full pointer-events-none will-change-transform transition-all duration-75 ${
          isHovered
            ? "w-3 h-3 bg-purple-400 shadow-[0_0_12px_#a855f7]"
            : "w-2.5 h-2.5 bg-emerald-400 shadow-[0_0_10px_#34d399]"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </div>
  );
}
