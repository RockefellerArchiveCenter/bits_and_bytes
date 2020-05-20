---
title: "Building an ArchivesSpace API Helpers Package: An Update (Part 2)"
date: 2020-05-21T09:00:00+00:00
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

This month, we completed our project to create an ArchivesSpace Helpers Package[link]. While the end product looked slightly differently than initially scoped--we're about to embark on a project to add some of the code we've created to the ArchivesSnake library--we created a library of functions and tests that use ArchivesSnake with common use cases. This is the second of two blog posts, where project team members reflect on the project. Here are the code owners, who were paired with code helpers on a rotating basis, and were responsible for writing the code for each sprint, as well as a reflection from me, the scrum master and product owner.

<!--more-->

## Patrick

I think the RAC-ArchivesSpace Helpers Library project has been so positive that I found it difficult to only focus on a couple of takeaways from it. However, on reflecting on the project as a whole, it became clear how much I’ve learned about coding and development through working collaboratively using a sprint system, and how much better the product is when you can work together as a group. In general, I tend to think of myself as a neophyte to coding with some level of skill, and the process of being a code owner responsible for talking through and explaining my work to even newer coders really highlighted how little I knew coming into the project. Having to explain my work forced me to make sure I had a better understanding of the tools I was using and the code I was working with, and helped me become a better communicator too. I could feel myself getting better at reaching out and explaining what I was doing in increments rather than dumping all of the information all at once.
 
Additionally, coding together in sprints with retrospectives produces better products and helps everyone learn. Pair programming takes a lot of trust, and is a skill that I’m still working on, but I think by opening up to my partners when I was stuck, or what I was struggling with, I helped model the coding process that I go through. As a team we were able to overcome the technical challenges we ran into, and I think we all came out of it way more skilled than when we went into the work. Personally, I’m much better at object-oriented programming, Python unit tests, creating fixtures, and working with Python decorators now. I also think I have a much better understanding of how to automatically generate documentation even though I barely worked on that portion of the project thanks to the sprint and retrospective approach that we took. I think the project was a huge stepping stone for me, personally, and I feel more confident in working on more projects moving forwards.

## Hannah

All members of our team started from different places in terms of familiarity with Python, ArchivesSpace data, GitHub workflows, and comfort in learning and teaching new tech and coding skills. I think this project was a big step forward in figuring out collaborative approaches to share knowledge and working together to generate something useful and rooted in best practices. An important aspect of this for me was to approach the work with humility, and put ego aside to be willing to ask questions even if I knew the answers might be obvious to others. Bonnie scheduled time in our sprint meetings for team members to give feedback on project strategy and process as the project unfolded, and I think that was a nice way to seed reflection and communication to help us improve how we worked together and to feel ownership over pieces of the project.

## Hillel

The thing that stands out to me from this project is how significantly writing together positively improved the final product. Not only did we end up with some high-quality code, but there are now seven people who understand, in significant detail, how this code works, where things might go wrong, and how to fix them. Reviewing each other’s work on a regular basis also meant that we were all accountable, and nobody could get away with lazy or overly complex solutions. While having a number of people working collaboratively on the same codebase at the same time presents some challenges, those are actually (as a developer might say) “features, not bugs” because it helps to ensure that functions are properly scoped and isolated from one another. 
 
In fact, this process was so successful that the D-Team is going to shift all our development work towards this model. From here on out, while projects will still be owned by a particular individual, development will never be a solo process. While this is a fairly common practice in tech teams, it’s going to be a new thing for us, and represents the degree to which we’ve matured our individual skill sets as well as the power of working in collaboration with our colleagues.

## Bonnie

Two of my main takeaways from this project were the importance of structure and the importance of flexibility in a team project. As the project went on, we realized we needed to add more structure to meetings as well as to what happened between meetings. Scrum meetings were split into two parts: discussing the work and discussing how the process was going. These were initially free-flowing conversations, but became much more productive after adding some structure. For the presentations of work done, we asked code helpers to focus on these questions: Where did we make a decision? What did we learn? What still puzzles us? What needs more discussion? We also added a version of these questions to pull request templates, which improved the discussions on GitHub. And for the discussion of how the process was going, we asked everyone to answer these questions: What has worked well? What has been difficult? What new ideas can we explore? This helped folks prepare for meetings and participate, and made our discussions more productive.

Adding this additional structure also speaks to the importance of flexibility--especially when trying something new. In addition to what I mentioned above, we made some changes to our process. These changes were the result of checking in about the process--and using activities to make sure everyone's voice was represented--at every scrum meeting. I will definitely take this with me to future projects. One of the biggest changes we made mid-stream was changing sprint length from two weeks to three weeks. This also went along with having pull requests submitted a full week before scrum meetings as opposed to the initial deadline of a few days before. We realized how much discussion was happening on GitHub after pull requests were submitted, and how many changes were being made. Making these changes helped us write better code and transfer knowledge between project team members.


