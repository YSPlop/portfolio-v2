# Set Up a Web App in the Cloud

## Set Up a Web App Using AWS and VS Code

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_7a1de541)

---

## Introducing Today's Project!

This project is Day ONE of a seven day DevOps Challenge! In
this project, we're going to set up the foundations of a CI/CD
pipeline by creating a web app from scratch. We'll need to
launch an EC2 instance and connect to the instance using
VSCode to generate a web app inside.

### Key tools and concepts

Services I used were Amazon EC2 and AWS CLI to set up and access a cloud-based web server. Key concepts I learnt include how to launch virtual machines in the cloud, configure security groups, and deploy a simple web app to a remote server laying the foundation for hosting and deploying applications in a real-world cloud environment.

### Project reflection

I did not expect the remote-ssh to be so flimsy, changing my EC2 instance config files to the point where i cant ssh in again without restarting the server.

This project took me approximately an hour to complete. The most challenging part was figuring out how to fix my instance crashing from VSCode remote SSH. It was most rewarding to see the whole thing work!

This project is part one of a series of DevOps projects where I'm building a CI/CD pipeline! I'll be working on the next project in 24 hours

---

## Launching an EC2 instance

I started this project by launching an EC2 instance because it provides a virtual server in the cloud where I can deploy and run my web application. This allows me to simulate a real production environment and practice deploying code to a live server using AWS infrastructure.

### I also enabled SSH

Secure Shell is a protocol used to make sure only authorized users can access a remote server. When you connect to your EC2 instance later in this project, SSH verifies you have the correct private key that matches the public key on the server.

### Key pairs

A **key pair** in AWS refers to a set of two cryptographic keys used for securely connecting to your EC2 instances:

* **Public Key** – Stored on the EC2 instance by AWS.
* **Private Key** – Downloaded and kept by you (usually a `.pem` file).

### 🔐 Why it's important:

When you launch an EC2 instance, AWS uses the **public key** to allow secure SSH access. You use the **private key** to prove your identity when connecting to the instance. This ensures only you (or someone with your private key) can access the server.

If you lose the private key, you won’t be able to connect to your EC2 instance, so it's important to store it safely.


Once I set up my key pair, AWS automatically downloaded a .pem file to my local computer. This file contains the private key, which is essential for securely connecting to my EC2 instance via SSH. I saved it in a secure location and ensured it had the correct file permissions so I could use it to authenticate my connection to the cloud server.

---

## Set up VS Code

VS Code is a lightweight, open-source code editor developed by Microsoft. It supports multiple programming languages, offers powerful features like IntelliSense (code completion), debugging, Git integration, and extensions. In this project, I used VS Code to write code, manage files, and deploy my web application to AWS using the AWS Toolkit extension.

I installed VS Code to develop and manage my web application, as well as to deploy it to AWS. With the help of the AWS Toolkit extension, I used VS Code to connect to my AWS account, access my EC2 instance, upload files, and run deployment-related tasks directly from the editor. It streamlined the development and deployment process in a single interface.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_53d05e68)

---

## My first terminal commands

A terminal is a command-line interface that allows me to interact with my computer or remote servers by typing commands. The first command I ran for this project is:

cd ~/Documents/Devops

I also updated my private key's permissions by running the following command in the terminal:

```bash
chmod 400 your-key-name.pem
```

This command restricts access to the key file so that only the owner can read it, which is required by SSH for security reasons. Without setting the correct permissions, the connection to the EC2 instance would be denied.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_9328ada1)

---

## SSH connection to EC2 instance

To connect to my EC2 instance, I ran the command:

```bash
ssh -i your-key-name.pem ec2-user@your-ec2-public-ip
```
This command uses SSH along with my private key file to securely access the remote EC2 server. It established a terminal session where I could manage and configure the instance directly from my local machine.

### This command required an IPv4 address

A server's IPV4 DNS is the public address for your EC2 server that the internet uses to find and connect to it. The local computer you're using to do this project will find and connect to your EC2 instance through this IPv4 DNS.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_e3069dca)

---

## Maven & Java

Apache Maven is a tool that helps developers build and organize Java software projects. It's also a package manager, which means it automatically download any external pieces of code your project depends on to work.

Maven is required in this project because it manages the build lifecycle of the Java application. It helps compile the source code, manage dependencies, package the app into a .war file, and ensures a consistent, repeatable build process—essential for automation in CI/CD pipelines.

Java is a popular programming language used to build different types of applications, from mobile apps to large enterprise systems.

Java is required in this project because we have installed Maven to build our app. Without Java we won't be able to use Maven to generate/build our web app.

---

## Create the Application

I created a Java web app using the mvn command

```bash 
mvn archetype:generate \
   -DgroupId=com.nextwork.app \
   -DartifactId=nextwork-web-project \
   -DarchetypeArtifactId=maven-archetype-webapp \
   -DinteractiveMode=false
```



I installed Remote - SSH, which is a Visual Studio Code extension that allows you to open and work with a remote server directly from your local VS Code interface. I installed it to connect to my EC2 instance, so I could edit files, run commands, and manage my web application on the server without leaving VS Code. This made the development and deployment process more efficient and streamlined.

Configuration details required to set up a remote connection include 
- Host IP address
- Identity file: location of private key
- User

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_2939cf01)

---

## Create the Application using vscode

Using VS Code's file explorer, I could see the directory structure and files inside my EC2 instance. This included folders like src, webapp, and configuration files such as pom.xml. It allowed me to easily navigate, open, and edit files on the remote server as if they were on my local machine.

- The src (source) folder holds all the source code files that define how your web app looks and works.
- src is further divided into webapp, which are the web app's files e.g. HTML, CSS, JavaScript, and JSP files, and resources, which are the configuration files a web app might need e.g. connection settings to a database.
- pom.xml is a Maven Project Object Model file. It stores information and configuration details that Maven will use to build the project. 

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_45f91fd7)

---

## Using Remote - SSH

index.jsp is a file used in Java web apps. It's similar to an HTML file because it contains markup to display web pages.

However, index.jsp can also include Java code, which lets it generate dynamic content.

i edited index.jsp by including my name in the file.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_7a1de541)

---

## Using nano

An alternative to using IDEs is editing files directly from the terminal using command-line text editors. To edit index.jsp, I ran the command:
```bash
nano index.jsp
```
This allowed me to make quick changes to the web app directly on the server.

Compared to using an IDE, editing index.jsp in the terminal felt slower to navigate. I'd be more likely to use an IDE if my remote-ssh connection in vscode didnt keep crashing every few seconds.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-vscode_a3324ad41)

---

---
