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
      {/* Interactive Subtle Background Backdrop */}
      <InteractiveParticles />

      {/* Main Recruiter-Ready Minimalist Showcase Sections */}
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
