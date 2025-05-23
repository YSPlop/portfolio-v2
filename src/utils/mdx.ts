import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { blogData, BlogPost } from '@/data/blogs';

const blogsDirectory = path.join(process.cwd(), 'public/blogs');

export async function getBlogBySlug(slug: string): Promise<{
  blog: BlogPost;
  content: string;
  readingTime: string;
}> {
  const blog = blogData.find(blog => blog.slug === slug);
  
  if (!blog) {
    throw new Error(`Blog with slug "${slug}" not found`);
  }
  
  const fullPath = path.join(blogsDirectory, blog.folder, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);
  
  // Update blog with frontmatter data if available
  const updatedBlog = {
    ...blog,
    title: data.title || blog.title,
    date: data.date || blog.date,
    author: data.author || blog.author,
    tags: data.tags || blog.tags,
    excerpt: data.excerpt || blog.excerpt,
    coverImage: data.coverImage || blog.coverImage,
    readingTime: Math.ceil(stats.minutes)
  };
  
  return {
    blog: updatedBlog,
    content,
    readingTime: stats.text
  };
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  // Return blogs with reading time calculated
  return Promise.all(
    blogData.map(async (blog) => {
      try {
        const fullPath = path.join(blogsDirectory, blog.folder, 'index.md');
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const stats = readingTime(content);
        
        return {
          ...blog,
          title: data.title || blog.title,
          date: data.date || blog.date,
          author: data.author || blog.author,
          tags: data.tags || blog.tags,
          excerpt: data.excerpt || blog.excerpt,
          coverImage: data.coverImage || blog.coverImage,
          readingTime: Math.ceil(stats.minutes)
        };
      } catch (error) {
        console.error(`Error processing blog ${blog.slug}:`, error);
        return blog;
      }
    })
  );
} 