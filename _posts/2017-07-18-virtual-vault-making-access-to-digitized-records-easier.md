---
post_id: 1804
title: 'Virtual Vault: making access to digitized records easier'
date: 2017-07-18T12:12:20+00:00
author: Hillel Arnold
layout: post
redirect_from: /?p=1804
categories:
  - Collaboration
  - Project Electron
  - Software and Systems
tags:
  - audiovisual digitization
  - digitization
  - virtual vault
excerpt_separator: <!--more-->
---
This month, we launched a system called Virtual Vault, which allows us to deliver digitized content to any user within the RAC network. It's a temporary solution that we hope will help us better understand responsible access to digital archival records. Our thinking around this solution is motivated by one central question: given the limitations of copyright and donor agreement restrictions, what is the most and best access we can provide?<!--more-->

## Where we are

A few months ago, our audiovisual archivist Brent Phillips approached me to brainstorm how we could provide access to our digitized audiovisual content. Access copies of this material had typically ended up on CDs and DVDs, which are easily damaged, challenging to circulate, and require special (and increasingly rare) hardware to view. As we began to ramp up our audiovisual digitization, it was clear this approach was not an effective use of staff time and effort, and was simply not going to scale. However, because most of our collections were created in the latter half of the 20th century, we knew that copyright would would prevent us from providing completely open access on the web to these materials, either via a third-party service like YouTube or Vimeo, or via our own website.

We needed an in-between solution that made a sensible compromise. The more I thought about it, the more it seemed to me that we should aim to under- rather than over-engineer a solution; that it should be designed to teach us as much as possible about user needs relating to access of digitized records as well as our own appetite for strategic risk-taking.

I ended up using the scaffolding of [staticAid](https://github.com/helrond/staticAid) - a [tool I've developed](http://hillelarnold.com/blog/2016/02/a-static-html-site-generator-for-archival-description/) which converts JSON objects provided by the ArchivesSpace API into HTML pages using Jekyll - and adding some additional templates to display audiovisual materials. After digitized files (named using ArchivesSpace identifiers) have passed quality control, an archivist places them in a directory on our network storage. From there, a series of scripts automatically moves digitized files to a server, retrieves data by querying the [ArchivesSpace API](https://archivesspace.github.io/archivesspace/api/) for data about a given identifier, and builds the necessary web pages. Archivists can correct or enhance description for these materials in ArchivesSpace, and those changes will be reflected in the new nightly build of the site.

This approach facilitated the quick implementation of a temporary solution. It also allows us to meet a number of [our values](https://github.com/RockefellerArchiveCenter/dteamValues/blob/master/values.md). By allowing anyone on the RAC's network to view and download digitized material, we can work towards our value of broad and equitable access. The system doesn't collect data on individual users and doesn't require user accounts or other authentication, which lets us meet our value of respecting the privacy of researchers. Since it pulls data from ArchivesSpace via its API, it helps us to build networks rather than silos. Most of all, it helps us to learn by taking strategic risks.

A side-effect of this approach is that we have, in some cases, decoupled the discovery of archival records from their delivery to users. This means that we have two systems instead of one, and potentially introduces some usability barriers. However, because the Virtual Vault is integrated with ArchivesSpace, many of the downsides of multiple systems are diminished, and allows us to think about delivery as a different problem than discovery. And time will tell us more about what usability barriers this approach presents, and might perhaps even suggest ways in which we can overcome them.

## Where we're headed

All too often, our archival anxieties around digital result in overly restrictive access policies and procedures which bar users from downloading, copying, or printing digital records, or even taking photographs of a screen. Typically these rely on hardware or network solutions (or both), but there's often an element of human enforcement as well. In other words, we're expending a lot of technical and human resources to remove or limit the essential qualities of digital records like reproducibility and transmissibility. We can do better.

I'll be the first to admit our approach is far from perfect, but I also believe that any solution for providing access to digital records is a compromise between open access and institutional risk avoidance. What we as a profession need right now are more, and more diverse, examples of how to perform this function. We need approaches that are based in values and centered on the needs of users. We need to experiment and keep taking strategic risks rather than mimicking the most restrictive set of access policies and procedures. I'd like to think that the Virtual Vault is both our contribution to that conversation, as well as something that will inform our choices in the future regarding access to digital records.
