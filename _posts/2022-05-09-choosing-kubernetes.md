---
title: "Choosing Kubernetes"
date: 2022-05-09T09:00:00
author: Patrick Galligan
layout: post
categories:
  - Software and Systems
tags:
  - infrastructure
excerpt_separator: <!--more-->
---
As the RAC has increased the number of locally-developed applications used to manage our day-to-day work, the number of servers needed to run these applications has also increased, resulting in a large, complex server and application ecosystem. The IT and D-Teams have collaborated to share the maintenance load of our technological environment: we’ve implemented Continuous Integration and Continuous Delivery mechanisms, automated application deployment as much as possible, and regularized communication channels. We've made great strides in [operationalizing systems](/becoming-better-maintainers) work that used to be time-consuming and difficult by developing in and deploying containerized applications. However, certain challenges remained that still made our work more difficult than it had to be.

<!--more-->

We have found that:
- Updating server operating systems, dependencies, and programming languages (often required on short notice to eliminate system vulnerabilities) remains an onerous and largely manual task which requires a high level of technical knowledge and is not easily repeatable.
- Electrical or internet service interruptions at the RAC or in the local area negatively impact uptime for on-premises applications.
- Changes to server resources, including standing up new servers, setting up DNS routing, and various other technological operations, must be performed by IT, which creates an unnecessary bottleneck and places additional burdens on the IT team.

To address these problems, we are exploring a plan to deploy all locally-developed applications, including all [Project Electron microservices](/project-electron-update-building-microservices-for-integration), as containers in a managed [Kubernetes](https://kubernetes.io/) environment on AWS infrastructure. We believe that this change to our deployment strategy will help the RAC better address security updates in both applications and servers, provide high application uptime by using Amazon’s infrastructure, and will reduce the administrative overhead of managing our application and server ecosystem.

## A New Deployment Strategy

The D-Team has used containers to develop many of our local applications in recent years, and with this strategy, will extend that work to [containerize all locally-developed applications](/what-were-working-on). A container is a unit of software that packages code and all its dependencies together and can be deployed to different environments. Containers are beneficial to our workflow because they are easy to collaboratively develop, are extremely portable, and run consistently across deployment environments. These advantages make deploying containers for all our applications a beneficial strategy given our current pain points.

At its base, Kubernetes is a container deployment orchestration system. It is a platform that allows its users to automate many of the operational tasks associated with deploying containers across multiple computers using clusters made up of computer nodes. It allows users to set configurations and automate application updates, scale computer resources on demand, specify security settings, and set up networking rules. This automation alleviates the burden of updating operating systems, programming languages, and other system vulnerabilities, making it easier to get critical updates out to all applications in a short turnaround time, making it an invaluable tool for any organization that works with containerized applications that need regular updates.

Kubernetes also presents other advantages. It includes built-in security features that allow administrators to limit access to services based on defined roles and identities and control network traffic to clusters. It can restart containers that stop running, replace containers or stops containers that fail health checks, and keep applications private until they are fully ready for production. These functions all help ensure that applications are running smoothly; directly increasing uptimes and making it less likely for there to be application-related business interferences. Reliability and performance of our systems are vitally important to the RAC's day-to-day work since the Project Electron microservices are core components to archival operations.

However, manual provisioning and maintenance of a Kubernetes cluster and its addons can be time-consuming and difficult, which would defeat the purpose of this deployment strategy. There are managed Kubernetes services that reduce the overhead of standing up and maintaining Kubernetes clusters by taking on some or all the work related to setting up the core components. The Digital Strategies and IT teams looked at multiple options for managed Kubernetes services and decided to move forward with a pilot test of Amazon’s [Elastic Kubernetes Service](https://aws.amazon.com/eks/) (EKS), a cloud-based container management system that integrates with Kubernetes to deploy applications using Amazon’s infrastructure.

Using an entirely cloud-based infrastructure is beneficial for our operations because it guarantees a higher level of system uptime than we could for locally-deployed applications, and makes a loss of power or network interruptions less impactful to the RAC’s operations. Amazon is responsible for all management and security of the underlying Kubernetes platform, the Kubernetes API, all the server infrastructure; the RAC would only be responsible for the applications that we deploy to the service and any additional security limits we want to add to each cluster. Finally, most of the RAC’s applications are already deployed to AWS infrastructure, which vastly simplifies the potential migration process.

## Next Steps

The RAC has tentatively decided to adopt Kubernetes for all of our locally-developed applications, but we're not quite ready to jump immediately into the deep end of the pool. None of the members of the IT or D-Teams has hands-on experience working with Kubernetes or AWS EKS, so we're going to spend some time getting intensive about our learning. We'll be focusing on both the basics and core concepts and getting hands on with Kubernetes and EKS through the command line.

We're also giving ourselves about seven months to work with a test EKS cluster hosting only three applications in development. This extended pilot test is designed to give us enough time to work with Kubernetes and test our applications on the platform in a development capacity before fully committing to migrate everything in a production installation. We are especially wary of choosing a solution that is just going to cause more friction and discomfort for us down the line; we do not want to replace our current issues with a whole different set of problems.

Our ultimate goal is to run two clusters, one for development and one for production, with all of our locally-developed applications deployed on EKS. We'll be updating this blog more as we work through the process, so stay tuned!
