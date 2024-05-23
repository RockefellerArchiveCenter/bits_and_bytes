---
title: "DACSspace 1.0: Leveling Up Code and Skills"
date: 2022-06-07T03:30:00
author:
- Amy Berish
- Hillel Arnold
- Bonnie Gordon
- Katie Martin
- Darren Young
layout: post
categories:
  - Collaboration
tags:
  - ArchivesSpace
  - ArchivesSnake
  - data
  - description
  - learning
  - agile
  - Python
excerpt_separator: <!--more-->
---

Six years ago, [DACSspace](https://github.com/RockefellerArchiveCenter/DACSspace), a tool that checks an ArchivesSpace repository for DACS compliance, was created by Hillel Arnold and Amy Berish. Since then, the Processing Team has been using DACSspace on a semi-annual basis to ensure that our finding aids maintain a 100% compliance rate to [DACS single-level required](https://github.com/RockefellerArchiveCenter/DACSspace) elements.

More recently, the Digital Strategies Team and the Processing Team collaborated on a new version of DACSspace that includes improved functionality and implements coding best practices we’ve learned throughout other coding projects. This project also marks the first time a coding project was led by someone outside of the Digital Strategies Team, read more about this shift in Hillel’s post, [From Silo to Hub](/from-silo-to-hub).
<!--more-->

## From the Product Owner

DACSspace was one of the first [projects](/dacsspace-an-archivesspace-dacs-compliance-evaluation-tool) I worked on when I started as a processing archivist at the RAC, you can read more about my journey learning python [here](/learning-python-as-a-processing-archivist-a-reflection).

This time around, DACSspace development involved a larger collaborative team that included Hillel and Bonnie (Digital Strategies) and Katie and Darren (Processing). I served as [Product Owner](https://www.scrum.org/resources/what-is-a-product-owner) for the project.

My responsibilities included running weekly meetings, assigning the workload for the week, and making calls along the way about how/when certain work should be done throughout the project. Since this was my first experience running a software development project, I looked to [Bonnie’s expertise](/scrum) to learn more about Scrum framework and Agile project management, both of which focus on collaborative approaches to complex projects.  

Here are some lessons I learned through being a Product Owner:
- It’s important to break up issues into smaller sections of work where possible.
- There are different ways to move a project forward such as doing research into different solutions/approaches, scheduling a pair programming session, etc.
- There may be more than one approach to implement a particular functionality. You may not know the implications of one option vs. another until further into the development process – and that’s okay.

## From the Digital Strategies Team
The initial impetus for updating DACSspace came from a [comprehensive review](/becoming-better-maintainers) conducted by the Digital Strategies team of all the codebases that the RAC maintains in late 2021. As a result of that review, we implemented common tools and processes to keep dependencies up to date, ensure that codebases were covered by unit tests, and automatically publish or deploy applications and libraries when updates are made. We wanted to bring DACSspace up to this same standard.  

However, as we engaged in conversation with members of the Processing team, we collectively realized there might be a larger opportunity for us not only to bring DACSspace up to a baseline, but to further disseminate some of what we’d learned about dependency management, unit tests, and automated deployments; also, to enhance DACSspace’s functionality by building on tools and methodologies we’d used previously:

- Allowing DACSspace to be used both as a command-line utility and as a library which can be integrated into other Python programs by converting it from a standalone script into an installable Python library, a change which also required rewriting the library in an [object-oriented approach](https://en.wikipedia.org/wiki/Object-oriented_programming).
- Using [JSONschema to validate data](/exceptional-validation) and allowing users to pass in their own schema to validate against. This means that validation rules are both highly configurable and transparent.
- Building on the [coding practices we’ve used before in collaboration with the Processing team](/not-everything-is-miscellaneous) by working in weekly sprint cycles, where each of us was responsible for a piece of work.

## From the Processing Team
The processing team has been involved in many collaborative coding projects over the last few years. With each project, we learn more about coding and project management techniques employed by the Digital Strategies Team. This time, with Amy’s leadership on the project, the processing team was directly involved in shaping the collaborative direction of the project.  

We went into this project as a learning experience and, with our role as developers, we shared equal responsibility moving the issues forward. The weekly sprint meetings provided a place to build our confidence talking about code, discuss our next steps if we did not have time to complete an issue, and where we could get help if we were stuck. The DACSspace Teams chat provided another place to work through problems without the formality of a meeting. If there was a need for more hands-on help, we would schedule an hour-long [pair programming session](https://en.wikipedia.org/wiki/Pair_programming) held virtually via Teams. In most cases, the person who needed help shared their screen and was responsible for the typing while Hillel walked them through the issue. If an issue needed further explanation, then a more traditional pair programming session took place with the more experienced coder typing while explaining what they were doing. The pair programming during this project helped us feel less self-conscious admitting that sometimes we do not know how to move something forward. Through this process, we got better at learning when we needed to stop and ask for help from more experienced coders.  

On the technical side of things, we learned about object-oriented programming, unit testing, code maintainability, working with JSON schemas, and utilizing [ArchivesSnake](https://github.com/archivesspace-labs/ArchivesSnake). The challenge of these types of collaborative projects is making time within our day to devote to working through issues. We were fortunate to have the support of Bob Battaly, Assistant Director for Processing throughout the project. In the end, we now have a tool that will ensure our collection guides adhere to RAC standards and will be easier to update in the future.

**See the DACSSpace 1.0 repository [here](https://github.com/RockefellerArchiveCenter/DACSspace)**
