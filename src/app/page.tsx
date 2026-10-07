import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Competencies from "@/components/Competencies";
import Projects from "@/components/Projects";
import TimelineCertifications from "@/components/TimelineCertifications";
import ContactFooter from "@/components/ContactFooter";
import InteractiveParticles from "@/components/InteractiveParticles";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070709] text-zinc-100 relative overflow-hidden">
      {/* Reactive Particle Backdrop (Mouse Proximity Repulsion) */}
      <InteractiveParticles />

      {/* Main Page Layout Sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Competencies />
        <Projects />
        <TimelineCertifications />
        <ContactFooter />
      </div>
    </main>
  );
}
