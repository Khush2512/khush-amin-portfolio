import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Competencies from "@/components/Competencies";
import Projects from "@/components/Projects";
import TimelineCertifications from "@/components/TimelineCertifications";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070709] text-zinc-100 relative overflow-hidden">
      <Navbar />
      <Hero />
      <Competencies />
      <Projects />
      <TimelineCertifications />
      <ContactFooter />
    </main>
  );
}
