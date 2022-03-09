---
title: "Bringing Our Digital History Project into the Future: A Cross-Functional Success Story"
date: 2022-03-09T08:00:15
author: Rachel Wimpee
layout: post
categories:
  - Collaboration
tags:
  - migration
  - collaboration
  - digital humanities
  - content
  - usability
excerpt_separator: <!--more-->
---
When launching a digital project, it might seem a bit morbid to plan for its eventual end. In the beginning, feelings of enthusiasm reign: the optimism of a blank canvas, the thrill of trying something new, the promise of new technologies, new methodologies, new answers, and new questions. But then [maintenance](https://blog.rockarch.org/the-maintainers-a-conference-on-keeping-things-working-most-of-the-time) demands resources, technology evolves, staff changes, new needs emerge, institutional processes and priorities shift, users and audiences develop new expectations. Projects run their course, and especially in the digital realm, we need to plan for this inevitability.

A project’s end doesn't have to be morbid, though. In fact, planning for its afterlife ensures its longevity. Not erased, but documented, repurposed, built upon. This is a story about such an afterlife, a new era for a decade-long digital project once called *The Rockefeller Foundation. A Digital History.*

<!--more-->

## Origins of the Digital History Project

In 2010, our nascent Research & Education program began a research and digitization project to document a century of Rockefeller Foundation history -- a story told through hundreds of archival records, overview essays, and biographies of Foundation staff. The Rockefeller Foundation funded the project with a generous grant, and our first institutional initiative to digitize a large number of archival records was born. It was a giant leap forward: at that time, we had yet to develop a way to deliver digital records via our online archival discovery system, DIMES. In fact, DIMES itself or any online search tool for our collections was yet to exist.

The web project launched in 2013 as [100 Years: The Rockefeller Foundation.](https://web.archive.org/web/20130414173915/http://rockefeller100.org/) ([Read more about the project here.](https://resource.rockarch.org/rockefeller-foundation-centennial-project/)) In the following years, we continued to add essays and digitized archival documents and photographs to the site. We eventually migrated the site from the [Omeka CMS](https://omeka.org/) to [Liferay](https://www.liferay.com/), and retitled it *The Rockefeller Foundation: A Digital History*, since the centennial framework no longer applied. At the same time, our Research & Education team expanded capacity and carried out new and diverse research projects, delving into the histories of the Ford Foundation, the Commonwealth Fund, and the Rockefeller Brothers Fund. In 2018, with additional grant funds from the Ford Foundation, we brought together the expertise built through these project  and launched a cross-collection storytelling website, [*RE:source*](https://resource.rockarch.org). The goal of that site, which is built on WordPress, is to serve as our primary online publishing venue for sharing stories of philanthropy across institutions and collections.

Meanwhile, during that time our archives colleagues were at the forefront of [building the infrastructure to support digital archives](https://blog.rockarch.org/introducing-project-electron). The RAC hired additional staff and launched our online discovery system, [DIMES](https://blog.rockarch.org/dimes-update). They honed processing tools and procedures. They built a digitization team and developed an approach to digitization that focused on archival objects, not individual, curated documents.

Encouraged by the promise of these developments and faced with the challenges of maintaining two websites at once (on two different CMS platforms, no less), our Research & Education team decided it was time to bring these activities together and forward, in a more strategic way. We gave ourselves the deadline of January 28, 2022, the date our existing hosting agreement was set to expire, and got to work.

## Goals: Lose No Content, Lose No Users
When we began to plan for the future of the Digital History site, we needed to clearly define our content migration priorities. We landed on an approach that our Director of Research & Education, Barb Shubinski, described as “lose no content, lose no users.” This is based on our team’s goal of sharing knowledge as broadly as possible, and a commitment to serving our users.

To understand our user needs, we built internal team capacity in user testing. Liesel Vink, our visuals editor, worked with archivist Hannah Sistrunk from the Digital Strategies team to conduct two rounds of [user research](https://blog.rockarch.org/dimes-ux). We also gathered data through a user behavior tracker called Hotjar, and [web analytics](https://blog.rockarch.org/analytics-collaboration), to inform our decisions and priorities for the migration.

If we were to lose no content, we needed also to understand the scope of that content. We created an inventory of the archival records displayed on the *Digital History* site, which we knew could now be accessed via the [IIIF viewer in DIMES](https://blog.rockarch.org/iiif-implementation). We began work with our [design and developer consultants](https://10up.com/) to brainstorm ways of integrating the remaining content – namely, the overview essays and biographies – into RE:source, our team’s primary web publishing venue.

## Which Content, Where? Putting Users First

In our data-gathering phase, we learned that our Digital History overview essays and several of the biographies were our most-used and most-searched site content. Although to us the two sites (*RE:source* and *Digital History*) seemed to be quite different – they had different origin stories, different project goals, one looked across institutions while the other focused on a single foundation – to our users, they were in fact quite similar. In both cases, we were providing stories about the history of philanthropy and narrative points of access into the RAC’s archival collections.

The essays proved readily translatable to *RE:source*. Our fall 2021 RAC-CCNY interns, Bethanie Corona and Gabriela Feeney, manually migrated every essay from the *Digital History* site into *RE:source*. During the process, they also engaged with the content as new users. They made suggestions on titles, clarity and, most importantly, text that needed attention to align with [our commitment to culturally competent language](https://blog.rockarch.org/cultural-competency-in-archives-phase-one-of-the-education-campaign).

Because we’ve noticed that our most successful and user-friendly *RE:source* pieces are long-form essays on a single topic, we combined some of the *Digital History* essays that shared subject matter. For example, there were several pieces on hookworm, two on malaria, and a five-part [history of the Rockefeller Foundation.](https://resource.rockarch.org/story/rockefeller-foundation-history-origins-to-2013/) In each instance, we combined the related essays into one story. This is better for users and better for online discovery (search engine optimization or SEO). Furthermore, we had already developed some of the *Digital History* essay topics into *RE:source* stories, which meant that in some cases, we could simply direct users to those existing stories.

Our visuals editor brought the new pieces into alignment with the *RE:source* style, illustrating them with images from both our own collections and outside repositories. Where the *Digital History* site relied solely on our own photographic records, on *RE:source* we often source images from peer repositories, putting our archival content into conversation with other collections.

At the end of the essay migration, what we once presented as seventy-eight individual pieces and pages on the *Digital History* site in the end resulted in publishing thirty-four new stories on *RE:source*. Andrea Cadornigara, our project assistant, created and managed a CSV file of redirects to track which pieces would go where, so that users and search engines who had already indexed the *Digital History* pieces would still find the content they expected.

## A Solution for the Biographies, Right Here at the RAC

The fifty-six biographies we had published on the *Digital History* site posed more of a challenge to our plans than the essays had. That’s because we do not have any existing biographical content or a defined editorial approach to producing biographies on *RE:source*. Where the Digital History essays translated into *RE:source* stories, there was no obvious new home for the biographies on our website.

At first, we thought we might simply create a new section of “people profiles” on *RE:source*, migrating the biographies into this new section and building them out over time to reflect the breadth of institutions and individuals we write about. But with a small team and priorities for producing new stories rather than biographies, we could tell this would be infeasible. We considered building internal capacity for Wikipedia editing, but that would mean new training and a new project to plan out, and additional time we did not have.

Then, after a conversation I had with Hillel Arnold, who heads up our Digital Strategies team, I realized that we have RAC colleagues who literally have biographical description in their purview: the processing team! Biographical overviews already had a home in our archival description. What’s more, thanks to new functionality in ArchivesSpace, our processing staff members were already exploring ways to build out agent pages – instances of people who could be associated with multiple collections in our archival description. Our biographical profiles could flesh out those agent pages in DIMES, and to “lose no users,” we’d simply create a redirect to those pages rather than to any location in *RE:source*. ([Here’s an example.](https://dimes.rockarch.org/agents/buLSSXpwW6jcZ2eWX9NaBL))

## Online Delivery of Digitized Records

As for the delivery of digitized archival records – core to the original *Digital History* project – we were guided by another Research & Education team goal: to complement, not duplicate, the work of the RAC’s archival teams. We wanted to use the tools our institution had developed, through our digitization team and DIMES, and not create parallel workflows or “walled gardens” of duplicate archival records.

The digitized records we curated for and published on the original *Digital History* site were selections of individual records that sat within archival objects – the most granular level of archival description we produce. This meant that we didn’t have a one-to-one correspondence between the records we presented on the original site and the archival objects described in DIMES. To provide access to the digitized records via DIMES, we would need to scan entire archival objects. ([Here’s an example of a digitized archival object.](https://dimes.rockarch.org/objects/C9nBcFQUCdbNZfsv9mU9Vu/view))

Our team created an inventory, and working with the Collections Management and Digitization Teams, we created a master spreadsheet that listed every item previously displayed on the Digital History site and its corresponding archival object. We were fortunate to have the funds to be able to contract with an outside vendor to scan the hundreds of folders that now made up our full inventory. Once the scans arrived back at the RAC, our Digital Strategies team [ran a PII check on them](https://blog.rockarch.org/researching-pii-tools-for-archives) and they were ready to go live.

## Keys to Our Successful Migration

**Cross-team and cross-functional collaboration was the foundation of this migration.** Our commitment to working with and supporting our institution’s archival processes and systems meant that we needed to embed our migration work into those very processes and systems. This meant working with every team at the Archive Center at various points in the migration process. This simply would not have been possible without:

-   The Collections Management team, who located, pulled, and packaged hundreds of archival records for external digitization, then rehoused them upon their return. No small feat.
-   The Reference team, and its Digitization sub-team, who managed the external digitization, tracking the records, ensuring everything was accounted for.
-   The Processing team, who checked our biographical texts against other biographies in our archival description, inventoried all the instances of these texts, helped edit them for tone, and built them out using the new agent functionality in ArchiveSpace.
-   The Digital Strategies team, who  advised us on these processes and also built a system to scan the records for PII and delivering the digitized records to DIMES.
-   The Information Technology team, who flipped the switch on the DNS side, ensuring that all those redirects actually, well, redirected!

**Focusing on the main project goals – lose no content, lose no users – made decision-making easier.** From the start, we knew what we wanted to migrate and why. Keeping our eyes on this high-level target helped us to decide how we would do this. We have been fortunate to contract with an outside vendor for scanning, development, and hosting support for our online publishing projects. But we knew exactly what help we needed so that we could still steer the project forward according to our institutional goals.
