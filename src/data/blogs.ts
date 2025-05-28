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
  {
    id: "2",
    title: "Join the 7 Day DevOps Challenge!",
    slug: "devops",
    excerpt: "Follow my journey as I build a complete CI/CD pipeline using AWS services in just 7 days, learning essential DevOps practices and tools along the way.",
    date: "2024-03-15",
    author: "Yukash Sivaraj",
    coverImage: "http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-cicd_ba6d42ae",
    tags: ["DevOps", "AWS", "CI/CD", "Cloud Computing", "Automation"],
    folder: "devops"
  }
]; 