---
title: The Joy of Competence
date: 2019-02-12T14:00:00
author: Hillel Arnold
layout: post
categories:
  - Software and Systems
tags:
  - code
  - refactoring
  -
excerpt_separator: <!--more-->
---

Recently, in support of the D-Team’s strategic goal to stabilize systems maintenance, I’ve been [refactoring](https://en.wikipedia.org/wiki/Code_refactoring) some old Python scripts I’ve written: making them clearer, more modular, and easier to maintain, without introducing new (or breaking existing) functionality. I’ve found this process incredibly satisfying - fun, even - and wanted to spend a bit of time talking about why I’ve enjoyed it so much.

<!--more-->

My work focused on two scripts: a script in the [docs-build repository](https://github.com/RockefellerArchiveCenter/docs-build) which pulls down updated documentation from GitHub and then builds a public and private Jekyll site, and a [script which exports](https://github.com/RockefellerArchiveCenter/asExportIncremental) all our updated finding aids, library records and digital objects from ArchivesSpace every night. I wrote the latter [several years ago](/automating-archivesspace-exports-or-better-living-through-apis), the former about six months ago. In both cases though, the logic of the scripts was difficult to follow (particularly [here](https://github.com/RockefellerArchiveCenter/asExportIncremental/blob/master/asExportIncremental.py#L310-L394)), which made even basic troubleshooting far more challenging than it needed to be. 

I started out by trying to make the functions of the script more obvious and easier to follow. In both cases, this meant changing from a [procedural programming](https://en.wikipedia.org/wiki/Procedural_programming) paradigm to an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) one. Instead of thinking about the scripts simply as a series of functions performed in a certain sequence, I started to think about them as objects with properties and methods. The end result of this was not only that the internal logic in each script became more apparent but also, in the case of the ArchivesSpace export script, the code itself shrank dramatically as I was able to adhere to the [“Don’t repeat yourself” (DRY) principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

What became apparent throughout this process - and a big part of why I found it so rewarding - was that refactoring my own code both reminded me how much I’ve learned in the past years and also solidified the things I’ve learned. In the past year, I’ve been writing a lot of Python code for Project Electron applications, including [Aurora](https://github.com/RockefellerArchiveCenter/aurora), [Zodiac](https://github.com/RockefellerArchiveCenter/zodiac) and the [integration microservices](/project-electron-update-building-microservices-for-integration). Building a baseline level of competence, as well as conversations with experienced software engineers (particularly Darnell Lynch at Marist) have allowed me to be a bit more self-conscious about the quality of the code I’m writing. Instead of just focusing on “Is this thing working?” I’m able to ask “How is this working, and is there a better way of making it work?”

In many ways, this parallels my experience learning guitar. When I first started to play guitar, I was very focused on getting my fingers in the right places and building up enough hand strength to press the strings down. As time passed, I built up the muscle strength and memory necessary to accomplish the mechanics of playing, which made space for me to focus on things like keeping tempo, switching smoothly between chords, and modifying volume. As my guitar teacher told me, “You have to get good enough that you can listen to yourself playing at the same time that you’re playing.” I remember reaching this point when playing guitar; it was as if a switch had been flipped in my brain. Practicing was fun, and I could feel myself getting better each time I practiced. I feel the same way about this refactoring process. Competence allows you to reflect and improve; no wonder Joan Tronto calls it out as one of the ethical elements of care in her book [Moral Boundaries: A Political Argument for an Ethic of Care](https://www.worldcat.org/title/moral-boundaries-a-political-argument-for-an-ethic-of-care/oclc/28113830).

Another thing that became very obvious to me during this process was that not only has my knowledge changed a lot, but the technological context in which code is written is far from static. Since I wrote the initial versions of these scripts, then-current versions of languages have become outdated, and new helper libraries have been developed. Probably the best example of this is [ArchivesSnake](https://github.com/archivesspace-labs/ArchivesSnake/), a Python 3 helper library for working with the ArchivesSpace API. Patrick played a key role in making this project happen, but most of the code was contributed by Greg Wiedeman and Dave Mayo. This library provides many of the common functions needed to work with the ArchivesSpace API (like authentication) and it also has a handy [abstraction layer](https://github.com/archivesspace-labs/ArchivesSnake#abstraction-layer) which allows you to do things like get all the digital objects associated with a resource record in [four lines of very readable code](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

Of course, the changing nature of technology means that software is never done, so knowing when to stop refactoring can be tricky. I’ve been reminding myself, though, that finishing refactoring is really only finishing it _for now_. Maintenance processes like refactoring are never really done, but the more regularly we do them, the easier they become.
