# Connect a GitHub Repo with AWS

> Credit to nextwork.org for intructing

**Author:** Yukash Sivaraj  
**Email:** sivarajyukash@gmail.com

---

## Connecting a GitHub Repo with AWS

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-github_dd9d254e)

---

## Introducing Today's Project!

We will be connecting a github respository to an EC2 instance

### Key tools and concepts

Services I used were GitHub, AWS IAM, and AWS CodeCommit. These services were essential in setting up version control, securely connecting AWS with GitHub, and understanding how source code can be managed in a cloud environment.

Key concepts I learnt include:

Version Control with Git & GitHub: I practiced staging (git add), committing (git commit), and pushing (git push) code changes to a remote repository. This is a foundational DevOps skill for tracking and collaborating on software projects.

GitHub Authentication with Personal Access Token (PAT): I learned that GitHub no longer supports password-based authentication for Git operations. Instead, a PAT is required for secure access, which adds an extra layer of security.

AWS IAM Users and Permissions: I created an IAM user to securely access AWS services, and understood how IAM roles, policies, and credentials are used to manage permissions in the cloud.

Connecting GitHub to AWS: I configured Git credentials and used the AWS CLI.

### Project reflection

This project took me approximately 1 hour to complete. The most challenging part was authenticating GitHub with a personal access token instead of a password, especially understanding where to generate it and how to store it securely. It was most rewarding to see my changes successfully pushed to GitHub and reflected in the remote repository, confirming that my local Git setup was working correctly with AWS.

I did this project to understand how to clone a github repo into ec2.

This project is part two of a series of DevOps projects where I'm building a CI/CD pipeline! I'll be working on the next project in 24hrs

---

## Git and GitHub

Git is a version control system for your codebase. This allows for developers to go back to stable versions, collaborate without affecting each others work. I installed git using the command.

```bash
sudo dnf install git -y 
```

Github is a storage space for different versions of your project that git keeps track of. Since Github is a cloud service, we can access our work from anywhere and collaborate with other developers over the internet.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-github_efaadbf7)

---

## My local repository

A git repository is where you store your codebase for individual projects. This will allow you to access your codebase (as long as you have the necessary permissions) across anywhere in the world and allow easy collaboration.

`git init`  is a command that setups the repository your in to a local git resository. I ran `git init` in my project folder.

After running git init, the response from the terminal was that the empty repository was initialized and the default name of the initial branch will be the master branch.  A branch in Git is parrallel version of the same project. A branch can be used to develop a feature, test or hot fix bugs and will be usually a sub branch of the `master` branch. 

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-github_7bf21bae)

---

## To push local changes to GitHub, I ran three commands

### git add

The first command I ran was `git add .` A staging area is a place where Git tracks changes that are ready to be committed. This command tells Git to move all modified and new files into the staging area, preparing them to be included in the next commit.

### git commit

The second command I ran was `git commit -m "your message"`
Using -m means I'm adding a commit message directly in the command line. This message describes the changes I've staged, helping track the history of the project and making it easier to understand what each commit does.

### git push

The third command I ran was `git push -u origin main`
Using `-u` means I'm setting the upstream branch, which links my local main branch to the remote main branch on GitHub. This allows me to use git push and git pull without specifying the remote and branch every time.

---

## Authentication

When I commit changes to GitHub, Git asks for my credentials because it's verifying my identity to ensure I have permission to push changes to the remote repository. This is a security measure to protect the codebase and prevent unauthorized access.

### Local Git identity

Git needs author information for commits to track who made what change. If you don't set it manually, Git uses the system's default username, which might not accurately represent your identity in your project's version history.

Running git log showed me the details of my most recent push to the remote repository. Including but not limited the email and the name i pushed the change with and the date i did.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-github_9a27ee3b)

---

## GitHub tokens

GitHub authentication failed when I entered my password because GitHub no longer accepts account passwords for command-line operations. Instead, it requires a personal access token (PAT), which acts like a secure, app-specific password for pushing code via Git.

A Github token is a string of randomized characters that is used as an Identity verifier to approve devices to be connected to a profile's repo. I am using one in this project because user login is discontinued by github and this seems to be the most effective way to connect my EC2 instance to my github repositories.

I could set up with a Github token by 
Github > settings > Developer settings >  Select Personal access tokens. > Select Tokens (classic). > Select Generate new token.
> Select Generate new token (classic) > select repo for perms and generate token

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-github_fa11169d)

---

## Making changes again

I wanted to see Git working in action, so I updated the index.jsp file in the nextwork-web-project. I couldn't see the changes in my GitHub repo initially because I hadn’t committed and pushed the changes from my local repository to the remote repository on GitHub.

I finally saw the changes in my GitHub repo after I pushed the changes


![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-github_6becb2bc)

---

## Setting up a READMe file

A README is a document that introduces and explains your project, like what the project does, how to set it up, and how to use it.

My README is written in Markdown because it's a lightweight markup language that's easy to read and write. Special characters can help you format text in Markdown, such as # for headings, ** for bold text, and - for bullet points.

My README file has 6 sections that outline what the project is, how to install and run it, key features, technologies used, how to contribute, and licensing. It serves as a guide to help others (and future me) understand and use the project effectively.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-github_c94976902)

---

---
