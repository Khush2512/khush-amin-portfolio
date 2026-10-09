import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import Competencies from "@/components/Competencies";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import InteractiveParticles from "@/components/InteractiveParticles";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 relative overflow-hidden selection:bg-purple-900/50 selection:text-purple-200">
      {/* Fixed Ambient Light Orbs for Liquid Glass Refraction */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[128px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none -z-10" />
      <div className="fixed top-2/3 left-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Interactive Particle Backdrop */}
      <InteractiveParticles />

      {/* Main Recruiter-Ready iOS Glass Showcase Sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero3D />
        <Competencies />
        <Projects />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
}
