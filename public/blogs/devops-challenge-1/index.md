# Set Up a Web App in the Cloud

## Introduction

> Credit to nextwork.org for assisting with instructions and content

This project is Day ONE of a seven day DevOps Challenge! In this project, we're going to set up the foundations of a CI/CD pipeline by creating a web app from scratch. We'll need to launch an EC2 instance and connect to the instance using VSCode to generate a web app inside.

### Key tools and concepts
Services I used were Amazon EC2 and AWS CLI to set up and access a cloud-based web server. Key concepts I learnt include how to launch virtual machines in the cloud, configure security groups, and deploy a simple web app to a remote server laying the foundation for hosting and deploying applications in a real-world cloud environment.

## Setting Up the Cloud Environment

### Launching an EC2 instance
I started this project by launching an EC2 instance because it provides a virtual server in the cloud where I can deploy and run my web application. This allows me to simulate a real production environment and practice deploying code to a live server using AWS infrastructure.

### Configuring SSH Access
Secure Shell (SSH) is a protocol used to make sure only authorized users can access a remote server. When you connect to your EC2 instance, SSH verifies you have the correct private key that matches the public key on the server.

#### Key pairs and Security
A **key pair** in AWS refers to a set of two cryptographic keys used for securely connecting to your EC2 instances:

* **Public Key** – Stored on the EC2 instance by AWS.
* **Private Key** – Downloaded and kept by you (usually a `.pem` file).

🔐 **Why it's important:**
When you launch an EC2 instance, AWS uses the **public key** to allow secure SSH access. You use the **private key** to prove your identity when connecting to the instance. This ensures only you (or someone with your private key) can access the server.

If you lose the private key, you won't be able to connect to your EC2 instance, so it's important to store it safely.

## Development Environment Setup

### Setting up VS Code
VS Code is a lightweight, open-source code editor developed by Microsoft. It supports multiple programming languages, offers powerful features like IntelliSense (code completion), debugging, Git integration, and extensions. 

I installed VS Code to develop and manage my web application, as well as to deploy it to AWS. With the help of the AWS Toolkit extension, I used VS Code to connect to my AWS account, access my EC2 instance, upload files, and run deployment-related tasks directly from the editor.

![VS Code Setup](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_53d05e68)

### Initial Configuration Steps

1. First, I set up my working directory:
```bash
cd ~/Documents/Devops
```

2. Then, I secured my private key with the correct permissions:
```bash
chmod 400 your-key-name.pem
```
This command restricts access to the key file so that only the owner can read it, which is required by SSH for security reasons.

### Connecting to EC2
To connect to my EC2 instance, I used:
```bash
ssh -i your-key-name.pem ec2-user@your-ec2-public-ip
```

The server's IPv4 DNS is the public address that the internet uses to find and connect to your EC2 instance.

## Creating the Web Application

### Setting up the Development Tools
Before creating our web app, we need to set up Java and Maven:

- **Java**: A popular programming language used to build different types of applications
- **Maven**: A tool that helps developers build and organize Java software projects, managing dependencies and build processes

### Creating the Application with Maven
I created a Java web app using the Maven command:

```bash 
mvn archetype:generate \
   -DgroupId=com.nextwork.app \
   -DartifactId=nextwork-web-project \
   -DarchetypeArtifactId=maven-archetype-webapp \
   -DinteractiveMode=false
```

### Project Structure
Using VS Code's file explorer, I could see the directory structure:

- The `src` folder holds all the source code files
- `webapp` contains web files (HTML, CSS, JavaScript, JSP)
- `resources` stores configuration files
- `pom.xml` is Maven's configuration file

![Project Structure](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_45f91fd7)

### Editing the Web Application
I had two options for editing files:

1. **Using VS Code Remote-SSH**:
   - More user-friendly interface
   - Better code completion and syntax highlighting
   - Sometimes connection issues occurred

2. **Using Terminal (nano)**:
   ```bash
   nano index.jsp
   ```
   - More basic but reliable
   - Useful when VS Code's remote connection is unstable

### Project Reflection
This project took me approximately an hour to complete. The most challenging part was dealing with VS Code's remote SSH connection stability. Despite the challenges, seeing the web application running on AWS was very rewarding!

Next up: Day 2 of the DevOps Challenge, coming in 24 hours!

---

![Project Complete](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_7a1de541)
