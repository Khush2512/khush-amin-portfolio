"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  refractionStrength?: number;
  chromaticAberration?: number;
  fresnel?: boolean;
  onClick?: () => void;
}

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uHover;
uniform float uRefractionStrength;
uniform float uChromaticAberration;
uniform float uFresnel;
varying vec2 vUv;

float wave(vec2 p, float freq, float speed) {
  return sin(p.x * freq + uTime * speed) * cos(p.y * freq + uTime * speed);
}

void main() {
  vec2 uv = vUv;

  // Fluid cursor wake effect
  vec2 mouseDelta = uv - uMouse;
  float distToMouse = length(mouseDelta);
  float mouseWave = sin(distToMouse * 22.0 - uTime * 3.5) * exp(-distToMouse * 4.0) * uHover;

  // Dynamic multi-frequency liquid wave ripples
  float ripple = wave(uv * 3.5, 3.2, 0.8) * 0.025;
  ripple += wave(uv * 6.5 + vec2(uTime * 0.1, 0.0), 5.5, 1.1) * 0.012;

  // Total refraction distortion
  vec2 distortion = (vec2(ripple) + (mouseDelta / (distToMouse + 0.001)) * mouseWave * 0.04) * uRefractionStrength;

  // Chromatic Aberration (RGB prism split)
  float ca = uChromaticAberration * (0.012 + uHover * 0.018);
  vec2 uvR = uv + distortion + vec2(ca, ca * 0.5);
  vec2 uvG = uv + distortion;
  vec2 uvB = uv + distortion - vec2(ca, ca * 0.5);

  // Optical refractions with deep violet & emerald undertones
  float rVal = 0.08 + 0.35 * (0.5 + 0.5 * sin(uvR.x * 4.0 + uTime * 0.8 + uvR.y * 3.0));
  float gVal = 0.07 + 0.28 * (0.5 + 0.5 * cos(uvG.x * 3.5 - uTime * 0.6 + uvG.y * 4.5));
  float bVal = 0.12 + 0.45 * (0.5 + 0.5 * sin(uvB.y * 5.0 + uTime * 1.1 - uvB.x * 2.0));
  vec3 liquidColor = vec3(rVal, gVal, bVal);

  // Fresnel edge rim calculation
  vec2 edgeDist = min(uv, 1.0 - uv);
  float edge = 1.0 - min(edgeDist.x, edgeDist.y) * 4.0;
  edge = clamp(edge, 0.0, 1.0);
  float fresnelRim = pow(edge, 2.5) * uFresnel * 0.55;

  // Specular gleam at mouse cursor
  float specularGleam = pow(max(1.0 - distToMouse * 3.0, 0.0), 3.0) * 0.35 * uHover;

  // Final composited glass color
  vec3 finalColor = liquidColor + vec3(fresnelRim * 0.6, fresnelRim * 0.7, fresnelRim * 0.9) + vec3(specularGleam);

  // Frosted opacity
  float alpha = 0.22 + fresnelRim * 0.3 + uHover * 0.12;

  gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 0.85));
}
`;

function LiquidShaderQuad({
  mousePos,
  isHovered,
  refractionStrength,
  chromaticAberration,
  fresnel,
}: {
  mousePos: React.MutableRefObject<[number, number]>;
  isHovered: React.MutableRefObject<boolean>;
  refractionStrength: number;
  chromaticAberration: number;
  fresnel: boolean;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
      uRefractionStrength: { value: refractionStrength },
      uChromaticAberration: { value: chromaticAberration },
      uFresnel: { value: fresnel ? 1.0 : 0.0 },
    }),
    [refractionStrength, chromaticAberration, fresnel]
  );

  useFrame((_, delta) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value += Math.min(delta, 0.1) * 1.5;

    // Smooth lerp mouse coordinates
    const targetX = mousePos.current[0];
    const targetY = mousePos.current[1];
    materialRef.current.uniforms.uMouse.value.x +=
      (targetX - materialRef.current.uniforms.uMouse.value.x) * 0.12;
    materialRef.current.uniforms.uMouse.value.y +=
      (targetY - materialRef.current.uniforms.uMouse.value.y) * 0.12;

    // Smooth lerp hover
    const targetHover = isHovered.current ? 1.0 : 0.0;
    materialRef.current.uniforms.uHover.value +=
      (targetHover - materialRef.current.uniforms.uHover.value) * 0.08;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function LiquidGlassCard({
  children,
  className = "",
  refractionStrength = 1.0,
  chromaticAberration = 1.0,
  fresnel = true,
  onClick,
}: LiquidGlassCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef<[number, number]>([0.5, 0.5]);
  const isHoveredRef = useRef<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!containerRef.current) return;

    // IntersectionObserver to pause WebGL rendering when out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height; // Invert Y for WebGL UV coordinate space
    mousePosRef.current = [Math.max(0, Math.min(1, x)), Math.max(0, Math.min(1, y))];
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl overflow-hidden bg-zinc-900/35 backdrop-blur-xl backdrop-saturate-150 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.25)] ${className}`}
    >
      {/* WebGL LiquidGL Shader Refraction Plane */}
      {mounted && isVisible && (
        <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden -z-10">
          <Canvas
            dpr={[1, 1.5]}
            frameloop={isVisible ? "always" : "never"}
            gl={{ powerPreference: "low-power", antialias: false, alpha: true }}
            className="w-full h-full"
          >
            <LiquidShaderQuad
              mousePos={mousePosRef}
              isHovered={isHoveredRef}
              refractionStrength={refractionStrength}
              chromaticAberration={chromaticAberration}
              fresnel={fresnel}
            />
          </Canvas>
        </div>
      )}

      {/* Clean DOM Text Layer above WebGL with subtle blur overlay for crisp legibility */}
      <div className="relative z-10 w-full h-full backdrop-blur-[1px]">
        {children}
      </div>
    </div>
  );
}
