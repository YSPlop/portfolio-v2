import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { AboutNew } from "@/components/AboutNew";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <AboutNew />
      <Projects />
      <Contact /> 
      <Footer />
      {/* Add other sections */}
    </main>
  );
}
