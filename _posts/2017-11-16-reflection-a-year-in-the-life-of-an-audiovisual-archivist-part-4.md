---
id: 1891
title: 'Reflection: A Year in the Life of an Audiovisual Archivist – Part 4'
date: 2017-11-16T06:00:07+00:00
author: Brent Phillips
layout: post
permalink: /?p=1891
categories:
  - Collaboration
tags:
  - access
  - archives profession
  - ArchivesSpace
  - Audio
  - Audiovisual
  - description
  - Film
  - Video
  - virtual vault
  - Year in the Life of an Audiovisual Archivist
excerpt_separator: <!--more-->
---
# Audiovisual Access

I am not alone in the belief that access is an intrinsic part of preservation. In the past, the RAC - like many institutions - relied upon the creation of optical media discs (DVD or CD) for on-site researcher access. Beyond the person-hours required to create these discs, there were other issues such as retrieval time; the cumbersome process of loading discs into a player; and monitoring discs for on-going damage and wear and tear. My topmost concern, however, remained the long-term stability of these discs and the increasingly difficult-to-find drives necessary for playback. In short, we needed a new solution to the issue of audiovisual access.

<!--more-->

Brainstorming with Hillel Arnold, RAC'S Head of Digital Programs, we created the Virtual Vault – a playback portal for on-site viewing, listening, and downloading access copies of digitized audiovisual material at the RAC.

As the Virtual Vault's wizardry is beyond my coding cognizance, I'll concede to Hillel's recent blog [post](http://blog.rockarch.org/?p=1804%20) to describe the system's basic workflow, which _"ended up using the scaffolding of _[_staticAid_](https://github.com/helrond/staticAid)_ – a _[_tool I've developed_](http://hillelarnold.com/blog/2016/02/a-static-html-site-generator-for-archival-description/)_ which converts JSON objects provided by the ArchivesSpace API into HTML pages using Jekyll – and adding some additional templates to display audiovisual materials. After digitized files (named using ArchivesSpace identifiers) have passed quality control, an archivist places them in a directory on our network storage. From there, a series of scripts automatically moves digitized files to a server, retrieves data by querying the _[_ArchivesSpace API_](https://archivesspace.github.io/archivesspace/api/)_ for data about a given identifier, and builds the necessary web pages. Archivists can correct or enhance description for these materials in ArchivesSpace, and those changes will be reflected in the new nightly build of the site."_

<figure>
<img src="{{ site.baseurl }}/wp-content/uploads/2017/11/VirtualVault.jpg" alt="Virtual Vault">
<figcaption>Screenshot of Moving Image playback page/RAC's Virtual Vault.</figcaption>
</figure>

The Virtual Vault's intended uses go beyond the needs of our typical researcher. It is designed to assist filmmakers who can download low-res "screener" copies and later contact the RAC to license higher resolution files. The Virtual Vault allows processing archivists to view/hear digitized audiovisual material when creating content notes; updating resource records; identifying key individuals; and for making decisions on final arrangement. The Virtual Vault is also a place for RAC staff to download audiovisual files for exhibitions and presentations. In other words, the Virtual Vault is envisioned as an aid to the RAC in many areas of a/v dissemination that were otherwise and formerly more complicated.

As is mentioned in Hillel's post, the Virtual Vault is a temporary solution, and it has its imperfections. But as we actively continue to digitize our analog a/v holdings – over nine hundred new titles last year alone – we now have a capable playback system that both allows instant on-site access to RAC users, and re-uses descriptive metadata captured in the ArchivesSpace record.

Come back tomorrow for Part 5: Final thoughts!

_This is a post in a series: [Reflection: A Year in the Life of an Audiovisual Archivist](http://blog.rockarch.org/?tag=year-in-the-life-of-an-audiovisual-archivist)_
