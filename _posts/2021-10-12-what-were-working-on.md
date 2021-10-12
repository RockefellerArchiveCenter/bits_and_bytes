---
title: What We're Working On
date: 2021-08-12T09:00:00
author: Hillel Arnold
layout: post
categories:
- Collaboration
- Software and Systems
tags:
- maintenance
excerpt_separator: <!--more-->
---

Over the course of the last few years, the Digital Strategies team has built and implemented a ton of new applications, many of which use technologies that we hadn’t used before. We’ve considerably leveled up in our development chops and technical capacity, while also strengthened our partnership with our IT team in the process. Still, there’s no denying that having a whole bunch of applications to maintain adds a different dimension and stress to our work.

As a result, our current efforts are primarily driven by the desire to be better and more responsible maintainers. This requires us to work simultaneously across areas of infrastructure, applications, processes, and people.

## Infrastructure
One major – and new – area of work for us is partnering with our IT team to strategize about how we can make better use of the infrastructure that our applications rely on.

At this level, building sustainability starts with better monitoring capabilities. We’re implementing a **log management** system, which will centralize collection of logs across multiple systems, allowing us to respond more quickly and effectively to system events, as well as take preventative actions to avoid crises in the first place. We’re also reviewing our **web analytics solution**, to determine if it makes sense for us to upgrade to Google Analytics 4, or if this is an opportunity to go with a completely different system.

We’re also looking at our **application deployment strategy**. To this point, we’ve largely deployed applications in a fairly “traditional” way, as files on a filesystem on a virtual server, although we’ve dipped our toes into continuous deployment strategies, and have deployed a few containerized applications locally. This seemed like a good moment to pause and create a more intentional and cohesive strategy for how we deploy applications, both on-site and in the cloud.

Last, we’re developing a plan to **launch the RAC API**. Although this API is already publicly available (and powers our discovery system DIMES) we have not created the necessary documentation or done any outreach (either internally or externally) about the existence of this resource. This launch will likely happen in the new year – stay tuned!

## Applications
As I indicated above, we’ve built a ton of new applications in the past few years. As we’ve done that, we’ve learned a lot about what makes applications more sustainable and maintainable. We’re now working across all our applications to bring **dependency management** and **continuous integration pipelines** (including [code linting](https://en.wikipedia.org/wiki/Lint_(software)) and [unit tests](https://en.wikipedia.org/wiki/Unit_testing)) up to a common baseline.

Because application sustainability is also about humans, we’re renewing our efforts to support user testing across the organization. We’ve recently been working with our colleagues in R+E as they improve their [storytelling platform RE:source](https://resource.rockarch.org/), and are strategizing with folks on our Processing team about how user experience methodologies can be used in their work.

We’ll also be working on improving specific applications.
-	One large ongoing effort is **enhancing functionality in DIMES**. This will include functionality to allow users to more easily jump to hits in collections, building out our display of people, organizations and families (and the relationships between then) and the ability to search OCRed text in digitized content.
-	We’re in the final stages of developing a **style library and guide** which will help us create a consistent visual feel across all our sites, as well as improve their web accessibility. We’ll start implementing this library in the coming year, in collaboration with our colleagues across the organization.

## Workflows
We’re also investing substantial time in trying to align existing workflows so that we can make better use of tooling we’ve already developed. The major effort in this area is to **integrate processes for digitized and legacy born-digital content into Project Electron infrastructure**. This will allow us to scale up both processes dramatically, and will reduce the amount of repetitive, error-prone manual work that these processes currently rely on. As part of this, we’ll be automating the creation of JPEG 2000 and PDF derivatives for digitized content as well as the generation of [IIIF Presentation Manifests](https://iiif.io/api/image/3.0/).

## Collaboration
Last, but definitely not least, we’re expanding the scope of our collaboration. We’re working with our Operations team to find the right technologies to support their processes, whether those are HR-related information resources and forms, or tools to support processes which keep our physical facilities up and running. We’ve also been collaborating with our brand-new Records and Information Management program to get our our records creation and management procedures in alignment with best practices, and to provide additional technology training on an as-needed basis.

We’ll certainly be writing more about each of these efforts as they take shape in the coming months. As always, get in touch with us if you’re working on similar things. We want to learn from you!
