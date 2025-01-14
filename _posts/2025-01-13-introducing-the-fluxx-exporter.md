---
title: "Introducing the Fluxx Exporter"
date: 2025-01-13T10:00:00
author: Hillel Arnold
layout: post
categories:
  - Software and Systems
  - Collaboration
tags:
  - born-digital transfer
  - fluxx
  - grants data
  - grants management systems
excerpt_separator: <!--more-->
---
I’m pleased to announce the release of the [Fluxx Exporter](https://github.com/RockefellerArchiveCenter/fluxx_exporter/), an open-source tool that integrates with the grants management system [Fluxx](https://www.fluxx.io/) for the purposes of automating exports of select elements of grant records. Developed collaboratively by the Rockefeller Archive Center and Columbia University’s Rare Book and Manuscript Library, with support from the Carnegie Corporation of New York  and the Ford Foundation, the tool is built in Python on the Django web framework and uses the Fluxx API to export data from a configured instance. It can export both structured data that is entered into fields and stored in the database as well as files that are uploaded and attached to the grant record. This tool allows grants administrators, information managers, and archivists to select and export grant information for internal or external uses including for long-term preservation, researcher access, and organizational learning and evaluation.

<!--more-->

## How we got here
Over the past fifteen years, one of the major strategic initiatives we’ve been working on here at the Rockefeller Archive Center is supporting the acquisition of digital and born-digital archival records through the development and enhancement of policies, processes, tools, and expertise. We took a big step forward with [Project Electron](https://blog.rockarch.org/tags#project+electron), which resulted in a mechanism for the transfer of digital records over a network connection at scale which integrates with our existing systems for preservation, metadata management, and access.

Throughout this time, however, a major question has loomed: what about digital grant records? Because we largely collect records of philanthropic organizations, these records document the core activities of many of our donor organizations, from the time a grantee begins an application, through the award process, and on to the grantees’ final reporting on activities.

However, because these records are stored in database-backed grants management systems (GMSes) they cannot be transferred to the RAC as easily as office productivity files (documents, spreadsheets, and the like) stored on a shared drive can. These GMSes generally do not support archival export, meaning the ability to export both selected database fields as well as files that are associated with them to the electronic grant record.

Although the GMS landscape is constantly shifting and many different GMSes are in use across the philanthropic sector, we discovered that many of our donor organizations, including the Ford Foundation, were using Fluxx.

It turned out that the RAC was not the only organization facing the challenge of collecting grant records stored in GMSes. In 2019, Kevin Schlottmann, the Head of Archival Processing at Columbia University’s Rare Book and Manuscript Library (RBML) reached out to ask if we had any interest in a joint project to improve archival exports from grants management systems. His interest was driven by the fact that the RBML collects the records of the Carnegie Corporation, which also happens to be a Fluxx user. Together with the RBML, we convened a group of archivists, grants administrators, and information professionals from foundations and archives of different sizes and technical capacities, focused on developing specifications for archival export functionality in the Fluxx application itself. Although we were successful in setting up a call with representatives from Fluxx in May 2020, we were unable to convince them to invest in developing this new feature. Instead, the Fluxx representatives we spoke to suggested we build a tool that used the systems application programming interface (API) to export data. Partially because of the COVID-19 pandemic, but also because we lacked access to a Fluxx instance, this effort sat dormant. 

In late 2022, with another nudge from Kevin, we reconvened a smaller group of archivists. Knowing that we’d have to build our own tool to accomplish the goal of archival export from Fluxx, our focus shifted to developing a conceptual model for grant records, which specified which parts should be permanently retained in an archive and which should not.

{% include image.html dir="2025/01/" file="conceptual_model.png" description="Conceptual model of grants records, showing components and their relationship to each other." %}

Around this same time, we approached both the Carnegie Corporation and the Ford Foundation to see if they’d be interested supporting the development of a Fluxx export tool which could meet their needs but more importantly broadly benefit the philanthropy and archival communities, and they both quickly responded affirmatively. We then developed an RFP which incorporated the conceptual model that we sent out to a number of third-party software development firms who have an official partnership relationship with Fluxx. After several conversations with prospective firms, we selected Armanino, LLP as our development partner and began the development process in January 2024.

Over the course of the next ten months, we worked with Armanino to develop the application, which we came to refer to as the Fluxx Exporter. After compiling detailed user requirements and technical specifications to guide the scope of work, Armanino completed initial development work and delivered the first version of the export application. We’re pleased that Fluxx supported this effort by supplying a test instance of the application at no cost for us to use during the development process.

After internal testing of the initial version of the tool, we did an additional round of development focused on improving the application’s usability and maintainability. We also conducted demos of the application for both the Carnegie Corporation as well as the Ford Foundation before cutting the initial release of the application. 

## What it is and does
At its core, the Fluxx Exporter allows users to create and save “export jobs”, which can be run on demand or on a set schedule. This is accomplished through a user interface in which users can select a Fluxx instance to download data from and specify the export format and location to which that data should be downloaded. Additional fields which allow the export to be scoped to specific grant IDs or limited using a Fluxx API filter query.

{% include image.html dir="2025/01/" file="export_job.png" description="Screenshot of export job in Fluxx Exporter showing fields with values." %}

The Fluxx Exporter also allows users to specify which database fields should be downloaded and which fields from related tables (such as users or organizations) should be resolved and embedded in the data for the grant record.

{% include image.html dir="2025/01/" file="tables_and_fields.png" description="Screenshot of export job in Fluxx Exporter showing fields with values." %}

In order to support this functionality, the application must be properly configured by adding credentials for a Fluxx instance, as well as all the database tables and fields available in the Fluxx API. Because each Fluxx instance is unique, and there are many fields that could potentially be exported, the Fluxx Exporter includes a command-line utility which imports tables and fields from Fluxx API documentation.

## Next steps
The Fluxx Exporter has been released as an open-source tool under the MIT License, and is freely available to download, use, and modify. The RAC is committed to maintaining and enhancing this tool over time. 

To that end, we are forming a cohort of organizations who are Fluxx users and are willing to test the Fluxx Exporter and provide feedback to us. If that’s you, please reach out to us via [archive@rockarch.org](mailto:archive@rockarch.org) and we’ll provide further information on timeline, testing protocol, and feedback expectations.