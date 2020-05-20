---
title: "Building an ArchivesSpace API Helpers Package: An Update (Part 1)"
date: 2020-05-19T09:00:00+00:00
author: Bonnie Gordon
layout: post
categories:
  - Collaboration
  - Software and Systems
tags:
  - ArchivesSpace
  - ArchivesSnake

excerpt_separator: <!--more-->
---

This month, we completed our project to create an [ArchivesSpace Helpers Package](/not-everything-is-miscellaneous). While the end product looked slightly differently than initially scoped--we're about to embark on a project to add some of the code we've created to the ArchivesSnake library--we created a library of functions and tests that builds on ArchivesSnake to support common use cases. This is the first of two blog posts, where project team members reflect on the project. First up are the code helpers, who were paired with code owners on a rotating basis, and were responsible for understanding and presenting the work of their partner at the scrum meetings.

<!--more-->

## Amy

Working on rac_aspace has allowed me to get a better understanding of what ArchivesSnake is. Prior to this project, ArchivesSnake had been described to me by multiple people, in different ways, but the descriptions always seemed very abstract. I knew ArchivesSnake was “a python library for ArchivesSpace,” but if you were to ask me what that phrase really means, I wouldn’t be able to tell you. I know what “Python,” “library,” and “Archivesspace” mean as individual words, but put them together and I become lost. Since rac_asnake involved writing functions that leveraged ArchivesSnake, I became more familiar with the concept of ASnake, and more importantly, how powerful it is. Participating in pair-programming sessions that included writing pseudo-code was extremely helpful for me. It allowed me to understand the purpose of the function we were trying to write first, and then work to match that “thing we want to do” with the tools (in this case, ASnake code) that we could use to make it happen. Now if someone was to ask me what ArchivesSnake is, I feel I could confidently give them a more comprehensive, and concrete answer using examples I’ve learned from this project.

This project also opened my eyes to what collaborative, reusable, public code should look like. In the past, I’ve worked on code that was for internal use only, or one-off scripts that would only be used a handful of times. The rac_aspace repo was my first experience working with more uniform code. This project allowed me to become familiar with concepts that I wouldn’t normally encounter when writing one-off scripts. Things like autodocs, linting, and unit tests were introduced and more importantly, used in context of code I was familiar with. Seeing real-life examples of these concepts allowed me to understand why they are important and demonstrated best practices of using and documenting code. 

Additionally, in past coding projects, typically one person writes a script, or the skeleton of one, adds it to a GitHub repository, and asks for review from another co-worker. Working on rac_aspace was a much more collaborative process. It showed me how to work on code in a much more collaborative setting. We used assigned issues and pull request templates to ensure we each had our own thing to accomplish each sprint, but were also responsible for reviewing and understanding code from other code-owners.

## Darren

One thing about the project that I especially appreciate was the focus on the relationship between the code owners and code helpers. When the project first started, I imagined the code owners/helpers model simply as a means for assigning responsibilities for work to be completed, but as the weeks passed, I experienced how the relationship between the two roles impacted the quality of the work that was done. A change was decided about midway through the project to adopt longer sprint times in order to allow additional opportunities for code owners and helpers to meet. This allowed code helpers to gain a better understanding of why and how changes were made through the process of pull request reviews and mergers. As code helpers, we were then better informed to report out about the code that had been completed during the sprint.

Through continuous processes of owners discussing issues with helpers, helpers learning from owners, and helpers explaining what they have learned, code can become more transparent because teammates with varying levels of expertise take the steps to understand the problems resolved and teach others about them. Decisions and insights made through the course of a sprint were made more explicit because more than one perspective was engaged in the learning and dissemination of that knowledge. Changing code owner/helper pairs after each sprint supported this knowledge sharing and empowered code helpers to contribute more to the project. I felt confident enough to implement Sphinx for generating the rac_aspace documentation because of the bits of information I had learned through working with a previous sprint partner which I then reported on to the group during the corresponding sprint review meeting and then discussed with the new code owner I was assigned. The code owner/helper dynamic did not keep me in a static position with set duties. In fact, it provided a natural opportunity for me to grow and practice what I learned.

## Katie

The API Helpers Project was a great opportunity to learn from more experienced coders as they tackled issues and employed troubleshooting strategies. I learned many new concepts over the course of the project, including linting, unit tests, decorators, fixtures and many others. The sheer pace of the sprints helped me feel more confident in asking for explanations. At the beginning, it could be difficult to absorb all that happened with issues that I was not directly involved in. Sharing notes and talking frequently with fellow code helpers Amy and Darren alleviated this problem. I do not think I am alone in saying this, but sometimes when I write code, I can get stuck and feel discouraged. It was freeing to see that even experienced coders run into problems. In one of the most engaging pair programming sessions, I watched Hillel write unit tests for serializers in real time while he explained his coding choices. While this work would normally take place together in an office, due to the current circumstances, this programming session took place virtually. I think it speaks to the strength of the project that the transition from meeting as a group to working from home was relatively seamless. Between slack conversations and Microsoft Teams virtual face-to-face meetings, the project never lost momentum. Now that the API Helpers Project is wrapping up, I have a stronger understanding of the markers of quality code, new strategies for group work, and a better grasp of object-oriented programming. 

