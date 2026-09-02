import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SecurityFocus from "@/components/SecurityFocus";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import EngineeringApproach from "@/components/EngineeringApproach";
import SecurityLab from "@/components/SecurityLab";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import CareerFocus from "@/components/CareerFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <main>
        <Hero />
        <SecurityFocus />
        <FeaturedProject />
        <Projects />
        <EngineeringApproach />
        <SecurityLab />
        <Skills />
        <Education />
        <Certifications />
        <CareerFocus />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}