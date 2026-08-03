---
title: "Writing “A Path to Permanence”: motivations and methods"
date: 2026-08-03T09:00:00
author: Hillel Arnold
layout: post
categories:
  - Software and Systems
  - Collaboration
tags:
  - born-digital transfer
  - salesforce
  - grants data
  - grants management systems
excerpt_separator: <!--more-->
---

A few weeks ago, we published ["A Path to Permanence: Navigating Archival Export from Salesforce for Grantmaking Organizations,"](https://doi.org/10.5281/zenodo.21109060) which defines archival export from grants management systems, evaluates current mechanisms for this kind of export from Salesforce, and outlines several paths for organizations looking to implement archival export of grant records in that system. In line with this blog’s focus on rationale and methodology, I wanted to describe a little about why that report came to be, and dive into how we created it.<!--more-->

## Where we started

In January of 2025, we released the [Fluxx Exporter](https://github.com/RockefellerArchiveCenter/fluxx_exporter), an open-source tool which exports archival grant records from Fluxx, a popular grants management system. We [learned a lot](https://blog.rockarch.org/introducing-the-fluxx-exporter) from the process of building this tool, most importantly that sustained collaboration across institutions and sectors is a necessary precursor to understanding shared challenges, and then defining, building and maintaining effective technical solutions for them. This might seem like an obvious thing to say – it’s certainly a bedrock principle of open-source software – but it’s always worth saying explicitly why working more slowly and introducing additional complexity through a larger group of stakeholders is necessary. 

After we had finished the Fluxx Exporter project, we started looking around at the state of grants management systems (TAG’s [State of Philanthropy Tech survey](https://www.tagtech.org/report/2026-state-of-philanthropy-tech-survey/) was a key informant for us) and realized that Salesforce was being implemented quite broadly across the sector as a grants management system. Full of confidence, we thought, well, we did Fluxx, now let’s do Salesforce!

That turned out to be a little more complicated than we originally thought. I reached out to a few Salesforce experts in the sector to start to test the waters, and it was immediately clear both that Salesforce is an entirely different being than Fluxx, and also that I knew very little about those differences. The more I learned, the more I learned I didn’t know.

## How we worked

So, we took a step back and thought about what worked with the Fluxx Exporter project. If we wanted to repeat our success, we needed to repeat the methods that produced the success and let the shape and outputs of the work be defined by these methods. 

We convened an Advisory Committee composed of experts from across the philanthropic sector, some with deep technical knowledge of Salesforce and others with expertise in grants management and the impact of technical choices on these processes and their users. Our committee members came from foundations which ranged significantly in size and technical capacity, and which work in very different programmatic and geographic areas. Hannah and I brought the archival perspective developed through the Fluxx Exporter project, but also years of working on [Project Electron](https://github.com/RockefellerArchiveCenter/project_electron) and the formation of the [Advancing Foundation Archives community](https://www.archivingphilanthropy.org/). Instead of predetermining that this process would produce another open-source tool, we decided that we wanted to produce a report which gathered, synthesized and presented information about what we wanted to do, the tools and systems that might support these efforts, and gaps which need to be filled. We wanted to give ourselves a map of the landscape and the various paths through it before deciding which path, if any, we needed to take.

Knowing that our committee members were busy people, we designed a process that had enough lightweight structure to support clear expectations as well as multiple modes of engagement. Starting in January, this committee met for an hour every month to review a section of the report that Hannah and I had drafted and circulated ahead of time (which allowed committee members who were unable to attend to contribute asynchronously). We used this time to interrogate assumptions, identify missing areas of research or analysis, and draw from the committee’s expertise and networks to fill gaps in our understanding. By the end of June, we had drafted a complete report and were able to quickly add some contextual framing and bring tone and voice into alignment across the document. 

## What it got us

There are some very concrete benefits to working in this way. We ended up with a far more complete and accurate report than we would have had we just tried to do this on our own. The accountability of monthly meetings helped us move the report forward piece by piece, rather than having to face the psychological challenge of drafting the entire thing from scratch. 

The most important benefits of working this way, though, are less concrete and more long-term. I’m confident that many of the conversations that started among members of the Advisory Committee will continue on into the future. These conversations contribute to the larger discourse about information and records happening at the sector level. This is becoming an increasingly important area of focus, not least because of the broad implementation of AI tools in philanthropic institutions.  Finally, the sense of community and shared vocabulary that was fostered among members of the Advisory Committee is an incredibly important outcome. The more we work together effectively, the more we will want to work together in the future.

One of the questions we often asked ourselves as we were writing the report was how long it would remain relevant, given the depth and detail of the information it contains. While there are certainly parts of the report that will become inaccurate or irrelevant as Salesforce (and technology in general) continues to change, my sense is that working together has helped to build things that are potentially substantial and long-lasting. They may be ethereal and immeasurable but, in my opinion, more important than the measurable short-term outputs.

Finally, I have to express my gratitude to the members of the Advisory Committee, listed below:
- Rashmi Batra – Director of the Office of COO and Application Engineering, Open Society Foundations
- Juliana Chessin – Director, Grants Management, Commonwealth Fund
- Hannah Kahn – Director, Grants Management, Hewlett Foundation
- Julio Lopez – Manager of Technology, Gates Archive
- Randy Manion – Deputy Director, Investment Management & CRM Applications, IT Operations, Gates Foundation
- Mar Paricio Sunyer – Senior Business Analyst, Operations, The Rockefeller Foundation
- Gaby Shorr – Grants Manager, Leon Levy Foundation

All of these folks were incredibly generous with their time and insights. None of this would have happened without that energy, so I’m deeply indebted to all of them for their labor, positivity, and willingness to dive deep and ask hard questions. Thank you!