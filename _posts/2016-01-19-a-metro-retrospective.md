---
id: 1441
title: A METRO Retrospective
date: 2016-01-19T10:57:59+00:00
author: Patrick Galligan
layout: post

permalink: /?p=1441
categories:
  - Conferences/Education
  - Software and Systems
tags:
  - conferences
  - digital systems
  - METRO
---
I attended METRO’s annual conference on 1/21. METRO is the Metropolitan New York Library Council, and as members, RAC staff is open to attend any of their events. There were a lot of fantastic panels and speakers at the panel this year, but I’d like to focus on an overarching theme that I picked up on this year: getting our systems to communicate nicely with each other can streamline our work processes and improve our work as archivists.

<!--more-->

The first session, “[Making the Leap Towards Linked Data](https://drive.google.com/file/d/0B3Mh8PAXKHOlZGpoU1ZCUk5WVDA/view),” outlined the American Museum of Natural History’s efforts to create a single entity record, a single biog/hist note, that will act as a representation for each entity and apply to all their different documenting groups (Anthropology, Paleontology, Zoology, Physical Sciences, and their Library). With a single entity record, researchers can look up a person or corporation and see all of their works across the entire system of collecting groups, and better discover materials. To accomplish this work, AMNH is using ArchivesSpace to create EAD files, which they will then transform into RDF files, and then storing these into an RDF triple store. At the same time, the AMNH is using [xEAC](https://github.com/ewg118/xEAC), to create EAC files, which they then convert into RDF files, and place alongside the EAD RDF triples in storage. And finally, they are currently developing an API that will allow them to pull the EAC file for each entity, as well as all of its related resources and objects from the ArchivesSpace RDF, and serve them together in their discovery portal. In this case, getting their EAD and EAC into one system that they can then query is helping them gain much better control of their collections.

During “[Linked Data and Public Works at NYPL](https://drive.google.com/file/d/0B3Mh8PAXKHOlVDBIbEhaR3h5cGs/view)” the presenters also talked about scalable ways to connect their four core systems (Archives, Metadata Management, Museum, ILS) into one linked data layer with normalized core metadata fields. To complete this work, NYPL plans to use a registry layer for all of their core systems, match names, clean them up through automatic matching, turn them into RDF just like AMNH, store the data, and then use an API to query that stored data and serve it to their researchers. To get to this point, NYPL undertook a lot of steps that the RAC will have to during its repository implementation process, and it’s enlightening to see how others have gone about their work and to see where we can learn from them. Ultimately, this work will make it easier for staff and researchers to find underdescribed items and build a system that lets them connect resources in a more agile way.

The final session I attended for the day was “[Beyond Boutique: The Shift from Selective to Mass Digitization](https://drive.google.com/file/d/0B3Mh8PAXKHOlR1JyWnNCUGlzZnM/view)." This panel, while different from the linked data focus of the first two, got me thinking about some of the inefficiencies in our own processes and how we could use systems and automation tools to fix them. A few of the presenters talked about various Python scripts that they could use to automate metadata ingest into their repository systems, Excel macros to transform or prep metadata for ingest, and other automation tools that can help you work through large-scale digitization projects. In many ways, our current processes are filled with manual redundancies that we could eliminate, reduce human error, and improve production by figuring out better ways to interact with our current or upcoming systems.

These three sessions really got me thinking about how the RAC could best use our resources and knowledge to improve the quality of our work by reducing the amount of data entry we do by hand. I’m also really excited about the direction we’re heading towards with our repository solution and how it will help us get new workflows in place. Stay tuned for exciting stuff from the Digital Programs team!