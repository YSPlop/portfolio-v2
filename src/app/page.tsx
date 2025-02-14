import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <Projects />
      <Contact />
      {/* Add other sections */}
    </main>
  );
}
