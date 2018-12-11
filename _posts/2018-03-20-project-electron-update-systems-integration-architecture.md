---
id: 1954
title: 'Project Electron Update: Systems Integration Architecture'
date: 2018-03-20T15:26:48+00:00
author: Hannah Sistrunk
layout: post
permalink: /?p=1954
categories:
  - Project Electron
tags:
  - integrations
  - microservices
  - project electron
excerpt_separator: <!--more-->
---
The underlying architecture that enables the movement of data between systems is a key aspect of Project Electron. In our project [values](http://projectelectron.rockarch.org/), we talk about components as modular and generalizable, independently deployable and  flexible enough to accommodate integrations with changing systems. The project value to "support data in motion" recognizes the strength of duplicate and distributed data, and articulates Project Electron's approach to systems as points at which humans interact with or manage that data. All of this is to say that our strategic decisions relating to choosing an approach to system architecture, particularly with regards to systems integration, is essential to the project's success and sustainability. In this post, I'll share some of our current thinking around the various systems integration models and our considerations in choosing an approach that will enable these integrations of archival applications.<!--more-->

# Where we are now

Our current systems environment at the RAC includes several integrations, which are primarily point-to-point (a direct connection between two systems) and unidirectional (data moves in only one direction). These include the [Virtual Vault](http://blog.rockarch.org/?p=1804), [Matchbox](http://blog.rockarch.org/?p=1823), [Find-It](http://blog.rockarch.org/?p=1621), and the [Digital Media Log](http://blog.rockarch.org/?p=1650), all of which are integrated with ArchivesSpace. For example, Find-It is a small application we created to quickly find location information for boxes in our collections by fetching information about archival objects via the ArchivesSpace API. In this integration, data moves one way: from ArchivesSpace to Find-It. With Project Electron, the complexity and number of integrations will increase considerably. Data will need to flow in multiple directions, and be transformed and validated according to multiple schemas. Directly integrating applications such as ArchivesSpace and Archivematica would also be problematic because it would require core changes to code in multiple applications, creating additional layers of dependencies.

With Project Electron, we have an opportunity to implement an architecture that allows us to make points of integration more transparent and visible, and helps move us toward more distributed ownership of integrations and troubleshooting at the RAC.

# Models for integration

As we found in researching integrations models, each approach has advantages and disadvantages and there is often overlap between models. Based on our evaluation, the model that seems to be the best match for our organizational capacities and the requirements of the project is the microservices approach. Simply summarized, this is a style of systems architecture which consists of multiple component services that can be deployed independently of one another. In contrast to a single large application, this approach allows multiple smaller services to be developed, maintained, or decommissioned separately. Each of these services performs a specific, discrete task and communicates with other services by using common protocols and data structures. For Project Electron, this means creating microservices that facilitate communication, data creation, updating, transformation and validation between the transfer application we are developing, the archives management system (ArchivesSpace), preservation system (Archivematica), and the repository (Fedora).

<figure>
<img src="{{ site.baseurl }}/wp-content/uploads/2018/03/Draft-PE-service-based-architecture-overview.png" alt="Project Electron microservices overview diagram">
<figcaption>Draft Diagram - Project Electron microservices overview.</figcaption>
</figure>

## Challenges and benefits for Project Electron

Although there are many benefits to a microservices approach, there are also some challenges,  some of which are discussed [here](http://basho.com/posts/technical/microservices-please-dont/) and [here](https://martinfowler.com/articles/microservice-trade-offs.html). Rather than having complexity across one unified system, microservices distributes complexity across multiple services. Therefore, troubleshooting problems and maintaining system health must also be distributed. At the RAC, this means assuring that ownership of parts of the infrastructure is spread across departments in our organization, and not confined to our Digital Programs team or IT. Our organization has embraced the goal to disperse tech knowledge so that it is not siloed into one department, and  the implementation of Project Electron is an opportunity to continue to build expertise across the organization and embrace a more mature [DevOps](https://en.wikipedia.org/wiki/DevOps) culture and toolset to best support a microservices approach.

Among the advantages of implementing a microservices approach for Project Electron is that we have already been thinking about integrations at the RAC in a similar way. Our current integrations ecosystem that connects tools like FindIt with ArchivesSpace is related, albeit in a simple form, to a microservices architecture with modular applications that perform discrete tasks and are deployed independently. In building and maintaining these various services, we have also emphasized collaboration between the Digital Programs team and other RAC program areas to empower staff to work with new technology and provide opportunities for our colleagues to develop and apply tech competencies.    

Finally, as I alluded to when discussing the Project Electron values, the approach we choose should result in reproducible and modular deliverables that can be implemented by other information professionals for the transfer and management of born-digital records in their own unique organization contexts. While organizations that might benefit from the results of Project Electron will certainly have their own challenges, the microservices approach does provide modularity and reproducibility in the independent deployment of services. An organization would not need to use ArchivesSpace or Archivematica to be able to plugin other services from the Project Electron suite.

We will continue to share what we learn from the planning and development process, and are always open to questions and feedback!
