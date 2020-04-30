---
title: "(Not) Everything is Miscellaneous: Building an ArchivesSpace API Helpers Package"
date: 2019-12-16T14:00:00+00:00
author: Hillel Arnold
layout: post
categories:
  - Collaboration
  - Software and Systems
tags:
  - ArchivesSpace
  - ArchivesSnake

excerpt_separator: <!--more-->
---

In late 2014, the RAC [migrated](/unveiling-archivesspace) from Archivist’s Toolkit to ArchivesSpace. Shortly thereafter, we started working with ArchivesSpace’s API by writing scripts, mostly in Python, to [export EAD](/automating-archivesspace-exports-or-better-living-through-apis), [produce reports](/dacsspace-an-archivesspace-dacs-compliance-evaluation-tool), and otherwise help to manage archival description at scale. After use, they were filed away in a [GitHub repository](https://github.com/RockefellerArchiveCenter/scripts), which over time became a sort of junk drawer.

Flash forward to the end of 2019. While we’re still using the ArchivesSpace API, a lot of other things have changed. Our coding chops, both individually and collectively, have improved dramatically thanks to several years of sustained engagement with [Project Electron](https://projectelectron.rockarch.org/) development work. We’ve also helped to seed the development of efforts like [ArchivesSnake](/hatching-archivessnake), which took all of the disparate code archivists had written to interact with the ArchivesSpace API and combined the best of it into a single Python package. It was time, we thought, to open up the junk drawer and see if there was anything worth saving.

<!--more-->

A review of the scripts repository by members of the D-Team and Processing team revealed that, although there were substantial variations in Python versions, dependencies used, and programming approaches, it also contained a number of common and potentially reusable functions. So we’re embarking on a project to further analyze, extract and refactor reusable pieces of code into a Python package. This package will build on ArchivesSnake to provide helpers or other commonly used shortcuts which are more specific to the RAC’s use cases.

Those of you who are regular readers of this blog will not be surprised to learn that, in addition to creating working code, we have additional things we want to learn and produce through this project:
* A means of intentionally transferring coding knowledge between RAC staff members while developing a shared understanding of the markers of quality code. This includes norms for collaborating through tools like version control, as well as a use of style guides.
* Collaboratively articulate and document categories of somewhat abstracted problems, and patterns for solving them in code.
* High quality code, by which we mean code that is maintainable. We’ll reduce redundancies, align and document Python versions and dependencies, consistently apply best practices, and write unit tests.

As a result, we’re going to try some new-to-us ways of working together, using an [Agile/Scrum-ish](https://en.wikipedia.org/wiki/Agile_software_development) approach. Work will take place in two-week increments (or “sprints”), which will end in a “scrum” meeting at which we’ll review progress to date and establish goals for the next two week cycle.

We’re also going to try dividing up the work into several distinct roles:
* **Code owners** will be primarily responsible for writing code during each sprint, bundled as pull request(s) which close issues assigned to them at the previous scrum meeting.
* **Code helpers** will be paired with a code owner on a rotating basis, and will be responsible for understanding and presenting the work of their partner at the scrum meeting.
* A **scrum master** will be responsible for scheduling and running scrum meetings, and ensuring that each code owner is matched with a code helper and assigned work for the coming period.

This process has been shaped by conversations with Christie Peterson (Smith College) and Max Eckard (Bentley Historical Library), both of whom have been using these methodologies in their work.

We’ll be kicking this process off in the New Year. We're really excited about the possibilities for this project, and will follow up with another post which details the results and lessons learned once we’ve wrapped.
