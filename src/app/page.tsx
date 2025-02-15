import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <Projects />
      <Contact /> 
      <Footer />
      {/* Add other sections */}
    </main>
  );
}
