import { getBlogBySlug, getAllBlogs } from '@/utils/mdx';
import { SparklesCore } from "@/components/ui/sparkles";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/date";
import { MDX } from '@/components/MDX';
import { TableOfContents } from '@/components/TableOfContents';
import { SocialShare } from '@/components/SocialShare';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {

  const paramsData = await params;
  const { slug } = paramsData;
  const { blog } = await getBlogBySlug(slug);
  
  return {
    title: `${blog.title} | Yukash Sivaraj`,
    description: blog.excerpt,
  };
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({ params }: BlogPostPageProps) {
  const paramsData = await params;
  const { slug } = paramsData;
  const { blog, content, readingTime } = await getBlogBySlug(slug);
  
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
              <Link href="/blogs">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
            </Button>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Blog Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>{readingTime}</span>
                </div>
                <div className="ml-auto">
                  <SocialShare title={blog.title} />
                </div>
              </div>
              
              {blog.coverImage && (
                <div className="relative h-[300px] w-full mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="flex gap-2 flex-wrap mb-8">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Table of Contents */}
            <TableOfContents content={content} />
            
            {/* Blog Content */}
            <div className="prose prose-invert max-w-none">
              <MDX content={content} />
            </div>
            
            {/* Author Info */}
            <div className="mt-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">About the Author</h3>
              <p className="text-gray-400">
                {blog.author} is a software developer specializing in modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 