import { getAllBlogs } from '@/utils/mdx';
import { Blogs } from '@/components/BlogsList';
import { SparklesCore } from "@/components/ui/sparkles";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
export const metadata = {
  title: 'Blogs | Yukash Sivaraj',
  description: 'Technical articles, case studies, and insights on my journey as a cloud engineer',
};

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <SparklesCore
          background="black"
          minSize={0.4}
          maxSize={1}
          particleDensity={70}
          className="absolute inset-0 w-full h-full"
        />
        <Meteors className="absolute inset-0" />
        
        <div className="container relative z-10 px-4 mx-auto py-20">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/#blogs">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <h1 className="text-4xl font-bold mb-8 text-center">All Blogs</h1>
          
          <Blogs blogs={blogs} />
        </div>
      </div>
      <Footer />
    </div>
  );
} 