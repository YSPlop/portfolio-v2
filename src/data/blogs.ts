export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
  tags: string[];
  readingTime?: number; // Will be calculated dynamically
  folder: string; // Path to the blog folder
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "Large Language Models",
    slug: "large-language-models",
    excerpt: "A deep dive into Large Language Models, Tokens, and N-grams.",
    date: "2025-05-19",
    author: "Yukash Sivaraj",
    coverImage: "/blogs/large-language-models/cover.jpg",
    tags: ["Large Language Models", "Tokens", "N-grams"],
    folder: "large-language-models"
  },
  
]; 