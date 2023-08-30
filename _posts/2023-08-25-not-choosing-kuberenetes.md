---
title: "On Not Choosing Kubernetes and EKS"
date: 2023-08-25T10:00:00
author: Patrick Galligan
layout: post
categories:
    - DevOps
tags:
    - Kuberenetes
    - DevOps
    - AWS EKS

excerpt_separator: <!--more-->
---

This is not a blog post about our successful implementation of Kubernetes, but rather how and why we decided not to migrate to Kubernetes after two years of work. I will attempt to call out our hypotheses and acknowledge where our thinking was wrong, and ultimately talk about the difficulties we faced and lessons we learned along the way. <!--more--> I’ll be taking a high-level view of the project to keep this post as brief as possible, but please reach out if you want me to talk your ear off about what we learned in depth. In mid-2021 we decided to test EKS – a managed Kubernetes service from AWS – to potentially move our microservice applications to that infrastructure. After almost two years of hands-on experimentation, we decided not to migrate our applications to EKS. This blog will talk about why we thought Kubernetes might be a good solution, where some of our initial hypotheses were off base, and what we learned along the way.

## Background

I wrote a [blog post](https://blog.rockarch.org/choosing-kubernetes) in May of last year about how and why we chose to test EKS. To summarize, we thought EKS would help automate our containerized application deployment, provide high uptime for our applications, simplify infrastructure decisions, and alleviate the pain of critical power or network interruptions at the RAC. Furthermore, we were familiar with Amazon’s cloud ecosystem, which made EKS a reasonable choice. We moved ahead with this plan to evaluate EKS, and I, with a lot of help from the RAC’s IT department, stood up an EKS cluster with two worker nodes, updated two microservice applications for containerized deployment, deployed them on EKS using deployment, configuration, and secret files, connected those containers to RDS databases, and set up an ingress controller, ingress files, and created a service mesh for those applications. However, it slowly became clear through that process of setting up the infrastructure that Kubernetes was not the right solution for the RAC.

## Hypotheses

I’d like to lay out some of our hypotheses that led us to choose EKS, and I’ll talk about our testing results later. None of these are knocks against Kubernetes or EKS, but rather why the approach turned out to not be a great fit for the RAC right now.

  - All our microservice applications should be up all the time, even if they were not running workloads.
  - EKS would simplify our deployment processes.
  - EKS would reduce our response and recovery time from critical infrastructure or application failures.
  - EKS would make networking between disparate microservices easier.
  - EKS would decrease our infrastructure management and maintenance overhead.
  - EKS is a good fit for a small team with a small number of containers.
  - Our development, CI/CD, and Ops methodologies were mature enough to adopt EKS.

## Reality

Our initial goal was to have every microservice application running in EKS 24/7, but some of these applications only run workloads for a few minutes per day or month. What wasn’t clear to us then, but is now two years later, is that it would be completely unnecessary to have applications in a complex ecosystem just to sit there for most of the time. For us, it makes more sense to spin up computing resources and applications as needed for certain applications rather than have them up and always running. With that in mind, was it worthwhile to stand up an entire Kubernetes cluster for about 10 containers?

We also thought that Kubernetes would simplify our deployment processes and would improve our incident response and recovery times. We never got to test the incident response and recovery times, but our deployment processes were not easier. It became clear during our testing that we would have to overhaul our deployment scripts, potentially find other CI/CD tools. We’re currently using a combination of GitHub Actions, TravisCI, and AWS CodeDeploy depending on the applications, and EKS would have us rework these processes. We never fully explored this piece of the equation because we pivoted away from EKS before a close examination of these pipelines, but it quickly became clear that we’d be trading one complicated process for another one.

Application and infrastructure networking in EKS was more complicated than expected as well. I, along with lots of help from our IT team, managed to get pods communicating with each other using an ingress controller, ingress files, and service files, but it was a _lot_ of work to get to that point. It was also a lot of work to get pods and containers talking to an external RDS database. A lot of this was probably our lack of experience working with Kubernetes, but we were ultimately disappointed with how finicky working with an ingress controller and security groups could be in EKS specifically. We were finding it more difficult than other networking projects at the same time.

The next two hypotheses are somewhat tied together in mind. We thought that EKS would help alleviate the overhead cost of managing and maintaining our application infrastructure because it would live on Amazon’s infrastructure, and we could update the Kubernetes version through a few clicks of a button on a dashboard. However, it became very clear when working with the system in a testing environment that we had traded the management overhead of EC2 instances for the overhead of managing an EKS cluster. We had also hypothesized that it would be easy enough to manage a cluster with a relatively small team of 2-3 people. I think that might be achievable with people already experienced working in a Kubernetes environment, but none of our team had any experience at all, and it quickly became clear that we were not getting the most out of the cluster. I had a good handle on how to put all the pieces together into a working model at the end, but there were still a ton of features that felt opaque to me, and I’m sure we were not going to be able to take advantage of them with a small team that other demands on their time.

Finally, we assumed that our CI/CD, development, and Ops methodologies were mature enough to adopt a complicated container orchestration system like Kubernetes. We’re still learning how to make our work more efficient, and some overall strategies to level up our DevOps game. I think Kubernetes works well for companies that have a rock-solid strong DevOps basis, and while we have the fundamentals down, we still have a lot of room to grow. We’re constantly learning and growing, but we need to work on those fundamentals and grow our processes before jumping into the deep end of Kubernetes.

All the above combined to convince us that it was time to pivot away from our Kubernetes test project, even though we had spent the last two years working towards that goal. The project was over its deadline, and we were still struggling to get things to work like we wanted. The workload was so small that the overhead cost of management and maintenance was not worth it, and we didn’t need all the features that Kubernetes was providing like privilege separation of applications. It became very clear that Kubernetes wasn’t going to make our work easier in the specific ways we wanted it to in our current work paradigm, and it was not the right tool for our specific job.

## What We Learned

The goal of this project was to create a proof-of-concept EKS cluster that we could use to evaluate EKS’s fit at the RAC. We did that and have decided to go in another direction. And, it has been a valuable learning experience. Besides learning _a lot_ about EKS (enough to call myself a neophyte), we’ve managed to learn a lot more about current DevOps principles and practices. We’ve learned to not treat our applications like they all have the same requirements. We’re looking at each of our applications individually and deciding what is best for each one, rather than treating them all the same.  

Personally, I got my first AWS certification throughout this process and we’ve all really leveled up our AWS game. We’re much more comfortable working in the AWS infrastructure than we were two years ago. We also have a much clearer picture of what works in our pipelines and processes than we did two years ago, and we have more skills and knowledge to better tackle those specific issues. We can now select better tools for our projects rather than trying to make a single tool fit all our needs.

## What’s Next?

We’re feeling reinvigorated rather than disheartened coming out of this project. We don’t see it as a failure, but rather an opportunity to better address our issues. As such, I’ve taken a holistic view of our DevOps processes and put a recommendation together for future projects that could help us grow as both a team and an organization. We’re going to prioritize those projects over the next few years and hopefully grow ourselves as developers, Ops personnel, and archivists. As a sneak peek, here are a few projects we’re looking into:

  - Help others feel empowered to act as developers.
  - Adopting a [trunk based development strategy]( https://trunkbaseddevelopment.com/).
  - Research [Terraform]( https://www.terraform.io/) and other infrastructure as code tools.
  - Containerize more of our microservice applications.
  - Explore [ECS with Fargate]( https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html)
  - Create a release management strategy.
  - Review our current CI/CD pipeline and tools.
  - And more!

Ultimately, this Kubernetes migration project has become a great clarifying experience and a reminder that sometimes it’s more helpful to take a step back and reorient ourselves rather than pushing forward when something is clearly not working.  

Stay tuned to hear about all the future DevOps projects mentioned above!
