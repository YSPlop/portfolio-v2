'use client';

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Clock } from "lucide-react";
import Image from "next/image";
import { SparklesCore } from "./ui/sparkles";
import { Meteors } from "./ui/meteors";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";
import { formatDate } from "@/utils/date";

interface BlogsProps {
  blogs: BlogPost[];
}

export function Blogs({ blogs }: BlogsProps) {
  return (
    <section id="blogs" className="relative py-20 bg-black text-white overflow-hidden">
      <SparklesCore
        background="black"
        minSize={0.4}
        maxSize={1}
        particleDensity={70}
        className="absolute inset-0 w-full h-full"
      />
      <Meteors className="absolute inset-0" />
      <div className="container relative z-10 px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Latest Blogs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.slice(0, 3).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blogs/${blog.slug}`} className="block h-full">
                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full flex flex-col hover:border-zinc-700 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  {blog.coverImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {formatDate(blog.date)}
                      </Badge>
                      <Badge variant="secondary" className="text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {blog.readingTime} min read
                      </Badge>
                    </div>
                    <CardTitle className="text-white">{blog.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {blog.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 flex-wrap">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      {blog.tags.length > 3 && (
                        <Badge variant="secondary">+{blog.tags.length - 3}</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
        <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="bg-white text-black hover:bg-black hover:text-white transition-colors"
          >
            <Link href="/blogs">
              View All Blogs
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 