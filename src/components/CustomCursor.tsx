"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth follower motion
  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Detect interactive elements under cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "button, a, input, textarea, [data-cursor], .glass-panel-hover"
        );

        if (interactive) {
          setIsHovered(true);
          const customLabel = interactive.getAttribute("data-cursor-text");
          if (customLabel) {
            setCursorText(customLabel);
          } else if (interactive.tagName === "BUTTON" || interactive.tagName === "A") {
            setCursorText("VIEW");
          } else {
            setCursorText("");
          }
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Ambient Large Cursor Spotlight Light */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-purple-600/10 via-emerald-500/5 to-transparent blur-[100px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing Outer Spring Ring */}
      <motion.div
        className={`absolute rounded-full border transition-colors duration-200 flex items-center justify-center ${
          isHovered
            ? "border-purple-400/80 bg-purple-950/40 backdrop-blur-sm"
            : "border-purple-500/40 bg-transparent"
        }`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 80 : 54) : 36,
          height: isHovered ? (cursorText ? 80 : 54) : 36,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-mono text-[10px] font-bold tracking-widest text-purple-200 uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Sharp Inner Dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.5 : isHovered ? 0 : 1,
          opacity: isHovered && !cursorText ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
