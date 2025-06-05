# Deploy a Web App with CodeDeploy

> Credit to nextwork.org for assisting with instructions and content

**Author:** Yukash Sivaraj  
**Email:** sivarajyukash@gmail.com

---

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codedeploy-updated_val-27)

---

## Introducing Today's Project!

In this project, I will demonstrate the use of AWS CodeDeploy to auto deploy code with rollback. I'm doing this project to learn the continous deployment part of the CI/CD cycle using AWS resources.

### Key tools and concepts

Services I used were `CodeDeploy`, `CloudFormation`, `S3`, `CodeBuild`, `CodeArtifact`. 

Key Concepts I learnt include
- How to automate deployment with rollback
- How to verify deployment, manage IAM roles for EC2 instances for production and development. 

### Project reflection

This project took me approximately 4 hours. The most challenging part was figuring out which IAM roles are assigned to which EC2 instances with which policies. It was most rewarding to see the deployment go through.

This projetc is part five of a series of Devops projects wherre I'm building a CI/CD pipeline! I'll be working on the next project in 24 hours!

---

## Deployment Environment

To set up for CodeDeploy, I launched an EC2 instance and VPC because:
- **EC2 Instance**: The EC2 instance serves as the target server where the web application will be deployed. CodeDeploy automates the process of getting new software versions onto servers, and an EC2 instance provides the necessary compute environment for the application to run.
- **VPC (Virtual Private Cloud)**: The VPC provides a secure and isolated virtual network environment within AWS for the EC2 instance to reside in. It's crucial for defining the network configuration (like IP ranges, subnets, and security groups) that allows the EC2 instance to operate, communicate with other necessary services (including CodeDeploy), and potentially serve the web application to end-users in a controlled manner.

Instead of launching these resources manually, I used a AWS CloudFormation with a script. When i need to delete these resources I can just delete the stack!

Other resources created in this template include:
VPC (Virtual Private Cloud): A virtual network in the cloud for your AWS resources.
- **Subnet**: A subdivision of the VPC where you can place resources.
- **Route Tables**: Define how network traffic is routed within the VPC.
-**Internet Gateway**: Allows resources in your VPC to connect to the internet.
-**Security Group**: Acts as a virtual firewall to control inbound and outbound traffic for your EC2 instance.
-**EC2 Instance**: The virtual server where your web application will be deployed.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codedeploy-updated_val-5)

---

## Deployment Scripts

Scripts are automated sequences of commands that configure systems or execute tasks. For CodeDeploy, I wrote scripts to automate deployment commands. 

The `install_dependencies.sh` script, for instance, sets up the web application's environment. It installs software like Tomcat (a Java application server) and Apache HTTP server. It also configures Apache to act as a reverse proxy for Tomcat, ensuring Apache forwards internet requests to our application. This automation guarantees a consistent and correct deployment setup, crucial for reliable continuous deployment with CodeDeploy.

`start_server.sh` will startup `Tomcat` (our java application server) and our `Apache` HTTP server and enabling them so they will auto reboot whenever the server restarts

The `stop_server.sh` script will check if Tomcat and Apache is running and if they are it will stop them. The activity is checked using `pgrep` and the task is stopped using `systemctl stop`

---

## appspec.yml

Then, I wrote an appspec.yml file to give instruction to CodeDeploy on how to deploy. The key section in `appspec.yml` are:

* **`version: 0.0`**: CodeDeploy format version.
* **`os: linux`**: Targets a **Linux** system.

**Files**

This section defines what files go where:

* **`source: /target/nextwork-web-project.war`**: Takes the WAR file from the artifact.
* **`destination: /usr/share/tomcat10/webapps/`**: Puts it on the EC2 instance.

**Hooks**

These are event triggers for deployment stages:

* **`BeforeInstall`**: Runs a script *before* install (e.g., stop server).
* **`AfterInstall`**: Runs a script *after* files copy (e.g., install dependencies).
* **`ApplicationStart`**: Runs a script when ready (e.g., start server).

Each hook specifies script location, `timeout` (5 mins max), and `runas: root`.

I also updated `buildspec.yml` because I needed to include the artifacts in the final package as this will be needed by CodeDeploy to deploy the application properly.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codedeploy-updated_val-12)

---

## Setting Up CodeDeploy

- A **deployment group** is a group of EC2 instances that are grouped to deploy something together. It's also where you plan out exactly where and how your application gets deployed on this group of instances. In other words, it's where you tell CodeDeploy "let's deploy this app to these specific servers, using this deployment pattern, with these load balancing settings, and handle failures this way."


The power of deployment groups is that you can have multiple groups within the same application - maybe one for your test environment, another for staging, and a third for production. Each can have different settings and target different sets of servers, but they all deploy the same core application.

- CodeDeploy application is a namespace or container that groups deployment configurations, deployment groups, and revisions for a specific application. Having separate CodeDeploy applications helps you manage multiple applications without mixing up their deployment resources.

To setup a deployement group, you also need to create an IAM role to give it the necessary permission to:

- **Auto Scaling**: Allows CodeDeploy to manage deployments even when instances are being scaled up or down automatically.
- **EC2**: Enables CodeDeploy to interact directly with your instances—tagging them, querying their status, and deploying applications to them.
- **Elastic Load Balancing**: Lets CodeDeploy temporarily remove instances from load balancers during a deployment to ensure traffic isn't routed to an instance that's being updated.
- **CloudWatch**: CodeDeploy sends logs and metrics to CloudWatch, providing you with monitoring capabilities to see what's happening during deployments.
- **S3**: CodeDeploy needs access to S3 buckets to retrieve the build artifacts (your application code) that are stored there.

Tags significantly boost efficiency, offering three key advantages:

- **Flexibility**: New instances added with the same tag are **automatically included** in future CodeDeploy deployments.
- **Self-documentation**: Tags like `role: webserver` clearly **explain an instance's purpose**, making your AWS environment easier to understand.
- **Integration**: Our CloudFormation template already **tagged the EC2 instance** with `role: webserver`, ensuring seamless operation with CodeDeploy.

I used the tag to identify the EC2 instance made through CloudFormation for my CloudDeploy Service


![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codedeploy-updated_val-18)

---

## Deployment configurations

Another key settings is the deployment configuration which affects the number of servers/instances being updates at once. I used CodeDeployDefault.AllAtOnce, so all my instances would be updated at once (cause i only have one instance). This could look different for large scale organisations

In order to connect my EC2 instance to my CodeDeploy a CodeDeploy Agent is also set up to receive deployement instructions (bash scripts) from CodeDeploy and carries them out on the EC2 instance. 

Allowing it top update every 14 days makes sure the agents software is upto date with latest version that AWS released.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codedeploy-updated_val-20)

---

## Success!

A CodeDeploy **deployment** is a single application update with a unique ID and history. When you create one, you specify:

* **Which version** (the revision)
* **Where to deploy** (the deployment group)
* **How to deploy** (the deployment settings)

CodeDeploy then orchestrates the process—stopping services, copying files, running scripts, and starting services tracking success or failure. You can monitor it in real-time.

The difference to a deployement group is 
A **CodeDeploy deployment** is the *action* of pushing a specific application version (revision) to instances. It's a single, tracked update process.

A **CodeDeploy deployment group** is the *target environment* a defined collection of instances (e.g., via tags, Auto Scaling groups) that your application gets deployed *to*. It also holds deployment settings like how updates occur.

Simply, the **group** is *where* you deploy, and the **deployment** is *what* and *how* you update *to* that group.

I had to configure a revision location, which means that is where CodeDeploy will look for the applications build artifacts. My revision location for my zip file in my `S3` bucket.

To check that the deployment was a success, I visited my Public address for my deployment EC2 instance. I saw the content from my `index.js` file

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codedeploy-updated_val-27)

---

## Disaster Recovery

In a project extension, I decided to implement rollback for my deployment, The intentional error I created was changed my `systemctl` command on my `stop_server.sh` file to `systemctll`. This will cause the deployment to fail because it is a syntax error.

I also enabled rollbacks with this deployment, which means if the build failed or if there are errors, the server will go to the last safe version. 

When a deployment failed, the **automatic rollback** would immediately kick in because our monitoring detected issues like high error rates. This would trigger a redeployment of the last known-good version, quickly restoring service.

To fully recover, I'd then **fix the broken code**, push it to our repository, rebuild the application, and initiate a new deployment of this corrected version.

**Implementing Automatic Rollbacks in Production**

In production environments, we'd implement automated rollbacks using tools like **AWS CodePipeline**. We'd configure specific success/failure criteria based on application metrics (e.g., error rates, latency). If these criteria aren't met, the pipeline automatically deploys the previous stable version.

This tight integration with version control systems allows for rapid identification and deployment of past successful builds. Advanced strategies like **canary deployments** or **blue/green deployments** also contribute to smoother, faster ro

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-codedeploy-updated_rollback-validation-upload)

---

