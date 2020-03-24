---
title: "What We're Working On"
date: 2019-09-17T14:00:00+00:00
author: Hillel Arnold
layout: post
categories:
  - D-Team
  - Digital Preservation
  - Software and Systems
tags:
  - planning
  - accessibility
  - Archivematica
  - user experience
  - technical debt
  - digitization
  - born-digital processing
  - web analytics
  - privacy
  - web design
excerpt_separator: <!--more-->
---

A few weeks ago I wrote about the next phase of Project Electron, which is full of possibilities and challenges, and will involve the time and talents of the entire D-Team, as well as many of our RAC colleagues (I’m not going to recap that here; [go read the post](https://blog.rockarch.org/setting-sail-the-next-leg-of-project-electron) if you’re interested). However, while writing that post it occurred to me that Project Electron is only one part of the D-Team’s work, so I’ve summarized a number of other things we’re doing which may be relevant to the broader archival community below. Please get in touch if you’re working on similar initiatives, or if you have Opinions (good or bad) about what we’re up to!

<!--more-->

## Archivematica-related activities

As Bonnie [wrote](https://blog.rockarch.org/automating-archivematica-ingests) in January, we’ve invested a fair amount of time into scaling ingest of digitized material into Archivematica. A variety of ongoing work has supported this, including staff training, process engineering, policy development, and local product ownership, not to mention healthy doses of troubleshooting and patience. Bonnie has been leading these efforts, and will continue to focus on aligning our [Archivematica workflows](https://docs.rockarch.org/archivematica-local/) with [digital preservation best practices](https://docs.rockarch.org/digital-preservation-policy/), as well as identifying and documenting roles, responsibilities and communication channels to facilitate more effective upgrade and troubleshooting processes. She’s also helping to coordinate the first-ever [Archivematica Con](https://wiki.archivematica.org/Community/Camps/Brooklyn2020), which will be held April 15-17 at the Brooklyn Historical Society.


## Building a UX/A11y program

A number of projects completed in the past year - including [Aurora](https://blog.rockarch.org/project-electron-update-aurora-and-web-accessibility), the [documentation site](https://blog.rockarch.org/an-introduction-to-the-documentation-site-redesign), and the [migration of this blog](https://blog.rockarch.org/introducing-the-new-bits-and-bytes) - had a significant usability testing component, and it’s become clear that this work is a key part of the D-Team’s role here at the RAC. To support that, we’ve been building a program that makes it easier for our colleagues to participate in and contribute to usability testing. Right now we’re working on articulating roles and creating templates to structure creation of and feedback from tests. Thanks to Hannah’s leadership, a big component of usability work has been building our knowledge and capacity in the area of web accessibility, a trajectory we plan on continuing.


## Getting a handle on technical debt

With Project Electron systems now in production, the number of applications in use at the RAC has increased significantly. More importantly, the percentage of applications for which we are the sole source of support (which includes almost all of the Project Electron infrastructure) has spiked. We’re trying to get ahead of the curve on this [technical debt](https://en.wikipedia.org/wiki/Technical_debt), so Patrick has just embarked on a comprehensive audit of the systems and technologies which support archival functions at the RAC, with the goal of understanding the ongoing maintenance demands of each. Based on the outcome of this report, we’ll likely undertake additional actions to decommission, consolidate or update systems and processes.


## Extending Project Electron infrastructure

Although we built the Project Electron platform primarily with born-digital records in mind, it’s occurred to us that both digitized material as well as born-digital records on external media (like floppy disks and CD-ROMs) could benefit from some of the automation, logging and services provided by Project Electron infrastructure. Bonnie conducted an analysis of all these processes which revealed strong conceptual overlap in many of these processes. She’s currently in the early stages of scoping out changes to existing services which would be required in order to iteratively merge processes for digitized and legacy born-digital records with processes for the records acquired through network transfers.


## User Privacy and Web Analytics initiatives

Hannah has just completed a thorough review of our existing web analytics implementation (Google Analytics) and produced a report which recommends a number of action items that she’ll be taking on in the next year:

*   A cleanup of existing Google Analytics properties, views and user accounts to improve consistency and data quality.
*   Training on Google Analytics tools such as Google Tag Manager, custom dashboards and reports, in order to develop organizational competence in analytics and use of data in [measuring progress towards program goals](https://blog.rockarch.org/what-data-can-do-for-you-and-us).

This review of web analytics identified some broader areas of research and policy development related to user privacy, so Hannah will also be driving forward some initiatives in these areas:

*   Research the implications of the [EU General Data Protection Regulation (GDPR)](https://eugdpr.org/) for the RAC (and more broadly archives in the United States) and produce a report recommending necessary changes in policy and practice.
*   Draft and revise a privacy policy for the RAC which applies across systems and function areas.


## Refreshing the RAC’s web presence

The RAC has a new website coming in early to mid November - stay tuned! Part of that project involves developing a web-based design toolkit (similar to the [NYPL’s approach](https://nypl.github.io/design-toolkit/)) to support the consistent styling of elements across RAC web properties as well as ensuring those elements meet accessibility guidelines.

We’ll be blogging about each of these things in detail as we move forward, but if any of this is interesting to you, please do get in touch. We love to hear from our colleagues!
