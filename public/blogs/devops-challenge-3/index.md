# Secure Packages with CodeArtifact

**Author:** Yukash Sivaraj  
**Email:** sivarajyukash@gmail.com

---

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codeartifact-updated_1d79e699)

---

## Introducing Today's Project!

In this project, I will demonstrate the use of Code Artefact my Amazon in the CI/CD pipeline. Im doing this project to learn how to upload/manage packages and integrate it as part of the CI/CD pipeline.

### Key tools and concepts

Services I used were 
- AWS CodeArtifact
- AWS EC2 instance
- AWS IAM User 

Key concepts I leant include: 
- How to manage my packages using CodeArtifact
- How to create and manage different IAM policies and roles. 
- How to manually add my own custom packages to CodeArtifact and have backups. 

### Project reflection

This project took me approximately 2 hours. The most challenging part was understanding how manual packages and managing them work. It was most rewarding to see the packages be available in CodeArtifact and be accessible in the EC2 instance.

This project is part three of a series of DevOps projects where I'm building a CI/CD pipeline! I'll be working on the next project in 24 hours!

---

## CodeArtifact Repository

CodeArtifact is a secure, central place for you to store all your software packages that will be used in your project. Engineering teams use artifact repositories because it gives a secure and reliable source to download packages from. This way even if the host of the original package goes down you have a saved version of it. In addition to this you will be able to make sure that everyone in your developement team has the same set of packages. 

A domain in this context is like a folder that holds multiple repositories for the same organisation. This will allow us to have easy control over who has access to what. My domain is nextwork!

A CodeArtifact repository can be configured with an upstream repository, allowing it to fetch packages from that source if they are not available locally. When a requested package is found in the upstream repository, it is automatically cached in the local CodeArtifact repository for future use. In this case, since the project is a Java application that uses Maven, the upstream repository is set to maven-central-core.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codeartifact-updated_n4o5p6q7)

---

## CodeArtifact Security

### Issue

To access CodeArtifact we need an authorization token. I ran into an error when retrieving a token because my EC2 instance does not have the necessary permissions to access the CodeArtifact service from AWS.

### Resolution

To resolve the error with my security token, I...
1. Updated the IAM policy to include missing permissions like `sts:GetServiceBearerToken`, `codeartifact:GetAuthorizationToken`, and `codeartifact:GetRepositoryEndpoint`.
2. Verified my AWS credentials to make sure they were correctly configured and not expired.
3. Checked the role or user permissions to ensure they matched the access needs of the CodeArtifact repository.
4. Retried the authentication process after confirming all configurations.
This resolved the error because it ensured that the correct permissions were in place and that the AWS identity had valid credentials to access CodeArtifact.

It's security best practice to use IAM roles because they provide temporary, automatically rotated credentials that reduce the risk of long-term credential exposure. Unlike IAM users, roles do not require hardcoded access keys, making them ideal for use in dynamic environments like EC2 instances, Lambda functions, or CI/CD pipelines. Roles also allow fine-grained access control and can be assumed by trusted entities only, improving overall security and compliance.

---

## The JSON policy attached to my role

The JSON policy I set up grants the necessary permissions to allow users or services to authenticate with AWS CodeArtifact, retrieve authorization tokens, and interact with the repository (such as publishing and downloading packages). Specifically, it includes actions like:

- `codeartifact: GetAuthorizationToken`: to obtain a temporary token for authenticating with CodeArtifact.

- `codeartifact: GetRepositoryEndpoint`: to get the endpoint URL for the repository.

- `codeartifact`: ReadFromRepository: to download or install packages.

- `codeartifact: PublishPackageVersion`: to publish new versions of packages.

- `sts:GetServiceBearerToken`: to assume roles or obtain temporary credentials.

These permissions are essential for developers or CI/CD pipelines to securely authenticate and interact with the CodeArtifact repository, ensuring smooth integration with build tools like Maven.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codeartifact-updated_23rp7q8r9)

---

## Maven and CodeArtifact

### To test the connection between Maven and CodeArtifact, I compiled my web app using settings.xml

The `settings.xml` file configures Maven to look at the CodeArtifact repository first when it needs to authenticate itself and pull dependencies from it.

Compiling means converting human-readable source code written in a programming language (like Java) into machine-readable bytecode or binary code that a computer can execute. This process checks the code for errors and transforms it into an optimized format that can run efficiently on the target system, such as the Java Virtual Machine (JVM) for Java projects.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codeartifact-updated_c17eace8)

---

## Verify Connection

After compiling, I checked the CodeArtifact repository. I noticed that the required dependencies and packages used by my Maven project were now present in the repository. This confirmed that CodeArtifact had successfully retrieved them from the upstream repository (like `maven-central-core`) and cached them locally for future use.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codeartifact-updated_1d79e699)

---

## Uploading My Own Packages

In a project extension, I also decided to publish my own package into CodeArtifact. This is useful in situations where teams would like to have internally developed packages like shared UI components, specialized data processing libraries.

To create my own package, I compiled my Java project using Maven, which generated a `.jar` file along with a `pom.xml`. I then used the `mvn` deploy command to publish the package to my CodeArtifact repository. I also generated a security hash because it verifies the integrity and authenticity of the package, ensuring that it hasn't been tampered with during upload or download.

To publish the package, I went into the AWS Management Console, created a simple `.txt` file, and then packaged it into a `.tar.gz` archive. I generated a security hash for the archive to ensure its integrity and then uploaded the package to my CodeArtifact domain. When I look at the package details in CodeArtifact, I can see the package name, format, version, file size, upload timestamp, and the associated hash value used to verify its authenticity.

To validate my packages, I then downloaded the package again, unzipped it and checked the contents inside it. I saw the original content inside secret-mission.txt which was "Hellooooo this is a test package!"

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codeartifact-updated_sm12-upload)

---

---
