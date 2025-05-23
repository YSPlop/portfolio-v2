import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AboutNew } from "@/components/AboutNew";
import { Blogs } from "@/components/Blogs";
import { getAllBlogs } from "@/utils/mdx";

export default async function Home() {
  const blogs = await getAllBlogs();
  
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <AboutNew />
      <Projects />
      <Blogs blogs={blogs} />
      <Contact />
      <Footer />
      {/* Add other sections */}
    </main>
  );
}
