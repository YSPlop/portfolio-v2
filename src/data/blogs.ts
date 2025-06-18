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
    tags: ["Automation", "AWS", "CI/CD", "Cloud Computing", "DevOps"],
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
    tags: ["AWS", "CI/CD", "DevOps", "EC2", "Java", "Maven", "SSH", "VS Code"],
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
    tags: ["AWS", "DevOps", "EC2", "Git", "GitHub", "IAM", "Version Control"],
    folder: "devops-challenge-2"
  },
  {
    id: "5",
    title: "Secure Packages with CodeArtifact",
    slug: "devops-challenge-3",
    excerpt: "Day 3 of the DevOps Challenge: Learn how to use AWS CodeArtifact to securely store and manage software packages, set up IAM policies, and integrate with Maven for Java applications.",
    date: "2024-03-18",
    author: "Yukash Sivaraj",
    coverImage: "http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codeartifact-updated_1d79e699",
    tags: ["AWS", "CodeArtifact", "DevOps", "IAM", "Maven", "Package Management", "Security"],
    folder: "devops-challenge-3"
  },
  {
    id: "6",
    title: "Continuous Integration with CodeBuild",
    slug: "devops-challenge-4",
    excerpt: "Day 4 of the DevOps Challenge: Learn how to set up AWS CodeBuild for automated builds, integrate with GitHub using AWS CodeConnections, configure build environments, and implement automated testing in your CI/CD pipeline.",
    date: "2024-03-19",
    author: "Yukash Sivaraj",
    coverImage: "http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codebuild-updated_35588a47",
    tags: ["AWS", "CodeBuild", "CI/CD", "DevOps", "GitHub", "IAM", "S3", "Testing"],
    folder: "devops-challenge-4"
  },
  {
    id: "7",
    title: "Deploy a Web App with CodeDeploy",
    slug: "devops-challenge-5",
    excerpt: "Day 5 of the DevOps Challenge: Learn how to use AWS CodeDeploy for automated deployments, set up deployment groups, configure rollback strategies, and implement disaster recovery in your CI/CD pipeline.",
    date: "2024-03-20",
    author: "Yukash Sivaraj",
    coverImage: "http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codedeploy-updated_val-27",
    tags: ["AWS", "CodeDeploy", "CI/CD", "DevOps", "CloudFormation", "IAM", "EC2", "Disaster Recovery"],
    folder: "devops-challenge-5"
  },
  {
    id: "8",
    title: "Automating CI/CD Infrastructure with AWS CloudFormation",
    slug: "devops-challenge-6",
    excerpt: "Day 6 of the DevOps Challenge: Learn how to automate the provisioning of a complete CI/CD pipeline on AWS using CloudFormation, embrace Infrastructure as Code (IaC) best practices, and resolve real-world deployment challenges.",
    date: "2024-03-21",
    author: "Yukash Sivaraj",
    coverImage: "http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-cloudformation-updated_bd8b836b",
    tags: ["AWS", "CloudFormation", "CI/CD", "DevOps", "IaC", "Automation", "Infrastructure as Code"],
    folder: "devops-challenge-6"
  }
]; 