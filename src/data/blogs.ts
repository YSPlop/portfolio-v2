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
  },
  {
    id: "3",
    title: "Set Up a Web App in the Cloud",
    slug: "devops-challenge-1",
    excerpt: "Day 1 of the DevOps Challenge: Learn how to set up an EC2 instance, configure SSH access, and deploy a Java web application using VS Code and Maven.",
    date: "2024-03-16",
    author: "Yukash Sivaraj",
    coverImage: "http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_7a1de541",
    tags: ["DevOps", "AWS", "CI/CD", "EC2", "Java", "Maven", "VS Code", "SSH"],
    folder: "devops-challenge-1"
  },
  {
    id: "4",
    title: "Connect a GitHub Repo with AWS",
    slug: "devops-challenge-2",
    excerpt: "Day 2 of the DevOps Challenge: Learn how to set up Git version control, create a GitHub repository, configure authentication with personal access tokens, and connect your EC2 instance to GitHub.",
    date: "2024-03-17",
    author: "Yukash Sivaraj",
    coverImage: "http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-github_dd9d254e",
    tags: ["DevOps", "AWS", "GitHub", "Git", "Version Control", "IAM", "EC2"],
    folder: "devops-challenge-2"
  }
]; 