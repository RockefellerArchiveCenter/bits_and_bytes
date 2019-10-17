---
title: UX design for archival discovery
subtitle: "Project Electron update: user interface research, information architecture, and wireframes"
date: 2019-10-17T14:00:00+00:00
author: Hannah Sistrunk
layout: post
categories:
  - Project Electron
tags:
  - ux
  - discovery
  - user-centered design
  - project electron

excerpt_separator: <!--more-->
---

Back in August, Hillel shared a post describing the [next phase of Project Electron](https://blog.rockarch.org/setting-sail-the-next-leg-of-project-electron), which focuses on enabling users to find and access our archival records. In my role as an archivist who thinks about UX design and usability, I’ve been looking at how we might improve and reimagine the user experience of archival discovery at the RAC in ways that leverage our [data model](https://github.com/RockefellerArchiveCenter/rac-data-model) and data services work and represent what we’ve learned from our [user research](https://blog.rockarch.org/project-electron-revisiting-personas-user-stories). In this post I’ll share our first steps in thinking through a user-facing site for archival discovery through creating wireframes, conducting some participatory site mapping activities with our staff, and looking at how other archives are approaching discovery.

<!--more-->

## Values-driven work

I want to (as always) ground this work in our project values, namely the [Project Electron Values](https://projectelectron.rockarch.org/project-values/) which call for us to “place users at the center of the design process,” and our [Principles For Archival Access](https://projectelectron.rockarch.org/archival-access-values/). At this stage in our work, I particularly want to emphasize the principle that access be **Generative**:

“Support multiple pathways into and through description and records including people, organizations, and subjects. Support multiple modes of inquiry including machines, humans and machine-assisted humans. Encourage and reward curiosity.”

As we decide what and how to present archival data, we have a chance to think creatively about how users might traverse and engage our collections, discover connections between records, and also just quickly and reliably find records that are relevant to their search.

## Wireframes and site mapping

Rather than chasing shiny user interface (UI) components at this early stage, we are focusing on information architecture. I developed a site map and some initial wireframes to inform what data we needed to pull into the site. As we learned from Aurora development, these [wireframes are a valuable communication tool](https://blog.rockarch.org/project-electron-october-update) for our work with our Marist College IT developer partners and RAC processing archivist colleagues.

I also conducted an exercise with four RAC staff members from our various program areas where I asked each of them in one-on-one sessions to describe what they would want and expect as users of an archival discovery site. Through their narrative and scripted questions to provide structure and consistency, we built a site map with index cards on a whiteboard with details about features, interactions, and how they might navigate between pages. Building on our existing user stories and UI requirements, this exercise provided some useful insights primarily related to the search experience. The exercise was also an introduction to participatory design and UX for these participants who will continue to be involved throughout the project as usability testing observers.

## What are other archives doing?

There are a lot of really smart people in our community thinking about and creating archival discovery interfaces and generously sharing their ideas, project artifacts, and code (shout out to [Lighting the Way](https://lightingtheway.stanford.edu/)). The nested and relational nature of archival description poses some unique information architecture and design challenges, and I’ve spent a lot of time in the last month researching search patterns and traversing various kinds of discovery websites -- from shoes to digital collections -- for inspiration and understanding.

[ArcLight](https://wiki.duraspace.org/display/samvera/ArcLight) has been an especially important resource, particularly the design and process documentation and [Arclight Mockups](https://stacks.stanford.edu/file/druid:hd302yz0755/Arclight-Mockups-MVP.pdf) that represent tremendous community-based, transparent, and collaborative efforts around archival discovery.

To highlight a few sites that have provided inspiration and provoked thought, many of the [Blacklight](https://projectblacklight.org/) Project Showcase sites contain interesting components, such as the [Vera & Donald Blinken Open Society Archives’ approach](http://catalog.osaarchivum.org/catalog/O8Bp2WP4#hierarchy) to displaying collection context in a tree view hierarchy. In terms of search, the [Archives of American Art search interface](https://www.aaa.si.edu/search/collections#searchcollections) provides a lot of options up front in a way that brings the user into the collections and encourages browsing versus, say, [Harvard’s Hollis Archives search](https://hollisarchives.lib.harvard.edu/) interface, or the even simpler approach of the [University of Albany Special Collections and Archives](https://library.albany.edu/archive/). [The New York Public Library Archives and Manuscripts](http://archives.nypl.org/) is also a great site to find inspiration in some of the more playful homepage features and beta tools, as well as the ability to explore records through “key terms” links for names, subjects, and material types in the collection overview.

This is all to say that we are not tackling a new problem, and we plan to build on what we can learn from others in a way that supports existing archival standards and practices.

## What’s next

We’ll definitely be blogging more about our front-end development process and UX work in the coming months. We’re always looking to share and learn from folks doing UX and inclusive design work in archives, so please reach out if you are too!
