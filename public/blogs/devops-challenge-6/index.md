# Automating CI/CD Infrastructure with AWS CloudFormation

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-devops-cloudformation-updated)  
**Author:** Yukash Sivaraj  
**Email:** sivarajyukash@gmail.com

---

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-cloudformation-updated_bd8b836b)

---

## Overview

In this project, I set out to automate the provisioning of a complete CI/CD pipeline on AWS using CloudFormation. My goal was to embrace Infrastructure as Code (IaC) best practices, reduce manual errors, and gain hands-on experience with AWS's powerful automation tools. This post details my journey, the challenges I faced, and the solutions I implemented to achieve a robust, repeatable deployment process.

---

## Why Infrastructure as Code?

Infrastructure as Code (IaC) is a key DevOps practice that allows you to define, provision, and manage cloud resources using machine-readable configuration files. This approach offers several benefits:

- **Consistency:** Eliminates configuration drift and manual errors.
- **Version Control:** Infrastructure changes are tracked just like application code.
- **Automation:** Enables rapid, repeatable deployments and rollbacks.
- **Collaboration:** Teams can review, share, and improve infrastructure code.

AWS CloudFormation is Amazon's native IaC service, allowing you to model and provision AWS resources using YAML or JSON templates.

---

## Project Scope and Tools

For this project, I focused on automating the following AWS resources:

- **AWS CodeArtifact**: For artifact storage and management.
- **EC2**: For compute resources.
- **IAM Roles and Policies**: For secure access control.
- **S3 Bucket**: For artifact and log storage.

> **Note:** Some services, such as CodeBuild and CodeDeploy, require more complex configuration and permissions, and were not fully included by the IaC Generator. These can be added manually for more advanced pipelines.

---

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-cloudformation-updated_0495b046)

---

## Using the AWS IaC Generator

AWS's IaC Generator is a tool that scans your existing AWS environment and generates a CloudFormation template representing your resources. This is a great starting point, especially for environments that were initially set up manually.

A CloudFormation template is essentially a blueprint for your cloud infrastructure. It defines the resources, their properties, and the relationships between them.

**Resources included in my generated template:**
1. AWS CodeArtifact
2. EC2 Instance
3. IAM Roles and Policies
4. S3 Bucket

**Resources not included (require manual addition):**
1. CodeBuild
2. CodeDeploy

The generator cannot always capture every detail, especially for services that require custom configuration or advanced permissions.

---

## Testing the Template

Before deploying the generated template, I deleted all existing resources in my AWS account to avoid naming conflicts and ensure a clean slate.

**Testing Steps:**
1. **Resource Cleanup:** Deleted all existing resources to prevent conflicts.
2. **Template Deployment:** Ran the CloudFormation template to recreate the infrastructure.
3. **Initial Failure:** The first deployment failed due to missing permissions.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-cloudformation-updated_f56730fd)

---

## Handling Dependencies with `DependsOn`

CloudFormation sometimes needs explicit instructions about the order in which to create resources, especially when one resource depends on another. The `DependsOn` attribute ensures that a resource is created only after another specified resource is complete.

**Where I used `DependsOn`:**
- CloudWatch Logs
- CodeArtifact
- CodeBuild
- CodeBuild CodeConnection

For example, the CodeArtifact policy required the IAM role to exist before it could be attached, so I added a `DependsOn` to enforce this order.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-cloudformation-updated_f0df8018)

---

## Resolving Circular Dependencies

During deployment, I encountered a classic CloudFormation challenge: **circular dependencies**. This happens when resources depend on each other in a loop, preventing CloudFormation from determining a valid creation order.

**How I fixed it:**
- Identified that the `ManagedPolicyArns` property in the IAM Role for CodeBuild was creating a cycle.
- Removed or restructured the policy attachment to break the loop.

This required a deep understanding of how IAM roles and policies interact in CloudFormation.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-cloudformation-updated_e6fd85ed)

---

## Manual Template Adjustments

While the IaC Generator provides a solid foundation, some resources and relationships must be added or refined manually. This includes:

- Fine-tuning IAM policies for least-privilege access.
- Adding missing resources (like CodeBuild/CodeDeploy) with custom configuration.
- Ensuring all resource references use logical IDs, not hardcoded values, for maximum portability and reliability.

---

## Success! Full Automation Achieved

After iterating on the template, resolving errors, and refining dependencies, I achieved a successful deployment. All resources were created automatically, and the CI/CD architecture was fully operational.

**Verification:**  
I confirmed the deployment by reviewing the CloudFormation stack overview and ensuring all resources reached the `CREATE_COMPLETE` state.

![Image](http://learn.nextwork.org/merry_vermilion_zany_llama/uploads/aws-devops-cloudformation-updated_bd8b836b)

---

## Key Learnings

- **CloudFormation is powerful but requires careful attention to resource relationships and dependencies.**
- **Automated tools like the IaC Generator are a great starting point, but manual review and adjustment are essential.**
- **Understanding AWS resource properties and CloudFormation syntax is crucial for troubleshooting and success.**
- **Infrastructure as Code enables rapid, reliable, and repeatable cloud deployments—an essential DevOps skill.**

---

## What's Next?

This project is part of a larger DevOps journey. In the next phase, I'll be expanding the pipeline with more advanced automation, integrating CodeBuild and CodeDeploy, and exploring cross-account deployments.

Stay tuned for more updates as I continue to build out a modern, automated CI/CD pipeline on AWS!

---

If you have questions or want to discuss AWS DevOps automation, feel free to reach out:  
**Yukash Sivaraj** – sivarajyukash@gmail.com

---

*Thanks for reading!*

---
