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
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";
import { formatDate } from "@/utils/date";
import { useState } from "react";
import { Input } from "./ui/input";

interface BlogsProps {
  blogs: BlogPost[];
}

export function Blogs({ blogs }: BlogsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(blogs.flatMap(blog => blog.tags))
  ).sort();
  
  // Filter blogs based on search term and selected tag
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-zinc-900/70 border-zinc-800 text-white"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {selectedTag && (
            <Badge 
              variant="outline" 
              className="cursor-pointer bg-zinc-800 hover:bg-zinc-700"
              onClick={() => setSelectedTag(null)}
            >
              Clear Filter
            </Badge>
          )}
          {allTags.slice(0, 5).map(tag => (
            <Badge 
              key={tag} 
              variant={selectedTag === tag ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No blogs found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
      )}
    </div>
  );
} 