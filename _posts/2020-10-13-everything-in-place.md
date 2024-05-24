---
title: "Everything in its Place: Developing a Standalone Library Discovery Interface"
date: 2020-10-13T11:00:00
author: Patrick Galligan
layout: post
categories:
    - Collaboration
    - Project Electron
tags:
    - data
    - library

excerpt_separator: <!--more-->
---

The Rockefeller Archive Center just wrapped up a little less than five month long project to separate our archival and bibliographic data, both in our collections management system and our discovery interface. You might have read a little bit about this in Katie Martin’s [blog post]( /overbooked-removing-library-data-from-archivesspace) describing the process of removing our library data from ArchivesSpace, but that only covers a portion of the entire project. The processing group  working on the export scripts in mid-May, finished in mid-June, and we gathered requirements, built, tested, and launched the system from mid-June to the first week of October. Now that our [new library discovery system]( https://library.rockarch.org/) has gone live, this post will provide more context to the project, outline the process, discuss the technical profile of the system, and finally share some lessons we learned along the way.

 <!--more-->

## Project Context

As Katie wrote in her post, the RAC has managed its small, non-circulating library of about 10,000 items in the same systems as its archival material for well over a decade; the description moved from Re:Discovery to Archivists Toolkit to ArchivesSpace. While this cohabitation of library and archival description was never ideal, it had largely been a minor inconvenience until the RAC started to explore the possibilities of data enrichment and systems integrations offered by ArchivesSpace’s API. As soon as we started working with our data in bulk, it became clear to us that our description of bibliographic and archival data differed vastly in ways that made it difficult to work with it in bulk.

We gained more clarity on our divergent description when we started architecting [Project Electron’s](https://projectelectron.rockarch.org/) data model. One of the things that excited us the most about the prospect of Project Electron was the ability to articulate relationships between our archival resources, subjects, agents, and other data points, but it also became clear that we would not be able to realize our full vision for Project Electron’s [discovery interface]( /ux-design-for-archival-discovery) with the library data in its current state. We had essentially two options: undertake a full-scale data remediation and enhancement project on all of the bibliographic materials, or separate the bibliographic and archival materials into their own ecosystems. We settled on what we’re calling a long-term temporary solution that leans towards the latter solution.

Our ultimate goal is to undertake an extensive re-cataloging project on our library and import that reworked data into a lightweight ILS, but that would not be possible within our Project Electron timeframe. In the interim, we decided to remove the library data from ArchivesSpace while preparing for the imminent launch of Project Electron, and develop a new discovery system for bibliographic materials that researchers can use until we can commit time and resources to re-cataloging and provide a more robust discovery system.

## Building the System

Katie’s blog post covers the process of removing the data from ArchivesSpace, so we will focus on the design and development of the discovery system. We knew that we wanted a lightweight system because we may only be using it for a couple of years. However, given how rarely the Digital Team interacted with library data and library materials, we did not have a great idea of what we’d need to include in this new interface. So, aware of how little we knew, we decided to follow one of the [project’s guiding values]( https://projectelectron.rockarch.org/project-values/) and put users at the center of the design process.

In practice, this meant that we needed to gather a list of desired functionalities from our core users. Given the limitations of interacting with our researchers during the pandemic, we opted to send a Google Form to our staff with an open call for user stories; “as a \_ I want \_ because \_.” We kept the form open for two weeks and sent periodic calls to action to all of the RAC staff, and ended up with about 80 unique user stories from our coworkers.

We turned these user stories into system requirements by sorting each story into categories for search, browse, request integration, and data display. The Digital Team met as a group and condensed the stories into actionable requirements that we could design. The development team reviewed these requirements and split them into three groups: will have, nice to have, and will not have. “Will have” made up all of the minimum requirements needed for launch, such as including display of certain data elements, keyword search across all fields, request and retrieval system integration, and more. The “nice to have” section included functionality that would be nice to include if we could in our limited development timeframe. And finally, the “will not have” category included user stories that were deemed out of scope of this project.

With these requirements complete, we needed to decide on the underlying architecture for the system. Because we already had the data in structured JSON and we knew that we wanted a simple site without a database or complicated search infrastructure, we chose to make a customized Jekyll site with a simple [Lunr]( https://lunrjs.com/) search. Our past experience working with Jekyll for this blog and other small sites made the decision even easier. Knowing the underlying architecture, we put together an MVP in about a month through two small and fast development sprints. The system generates static pages from the JSON files for resources, agents, subjects, and containers and uses Lunr to make a search index from that data.

We then conducted virtual hands-on task-oriented user testing on the MVP with a small group of RAC employees across all function areas who will also be involved in user testing for our new archival discovery system. These tests uncovered some major issues with our search implementation, as well as some minor issues with our request management integration and data display. The Digital Team reviewed each testing session and we came up with a list of the most pressing issues based on these user tests. All that we had left to do was to fix the issues our testers identified, demo the site to the RAC staff, circulate a form for coworkers to provide feedback on the site, and then launch it to the public!

## Closing Thoughts

This process has reinforced the idea that design and development cannot happen in a vacuum. The library discovery system has been a truly collaborative project. The processing team helped get the data out of ArchivesSpace, coworkers provided user stories, user testing, and others providing comments on the site after launch. The Digital Team does not interact with the library or its data on a day to day basis, and do not know it as well as others at the RAC. We would have had ideas on where to start working on the system, but would our requirements fall in line with what the everyday users needed? Probably not. It’s impossible to meet your users’ needs without involving them early and often in the development process.

On a more personal note, I found it helpful to switch up some of our usual roles on this project. Hannah has usually tackled all accessibility and user testing, and has become our resident expert and guide on those subjects. However, we tend to rely on her a little too much sometimes for tasks that we could also learn to do. I took on the job of making sure we met our accessibility goals and conducted the user testing with Hannah as a guide in the background this time. Besides giving me even more of an appreciation for the work Hannah does, it helped us spread our domain expertise out a little bit.

Sharing the load has both lightened our load, and made for a better product in the end.
