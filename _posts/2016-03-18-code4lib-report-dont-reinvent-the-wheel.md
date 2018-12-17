---
id: 1472
title: 'Code4Lib Report: Don't Reinvent the Wheel'
date: 2016-03-18T06:14:41+00:00
author: Bonnie Gordon
layout: post
redirect_from: /?p=1472
categories:
  - Conferences/Education
tags:
  - conferences
  - digital policies
  - Digital Preservation
  - documentation
excerpt_separator: <!--more-->
---
A big theme at this year's Code4Lib conference was the importance of collaboration and building upon others' work. Since collaboration and openness are some of the [D-Team's core values](https://github.com/RockefellerArchiveCenter/dteamValues/blob/master/values.md), this really resonated with me. A few different strategies were suggested to increase sharing and collaboration; these included openly sharing tools and documentation on the web, as well as designing code and tools so that they can easily be re-used by others.<!--more-->

In their talk ["Can't Wait for Perfect: Implementing 'Good Enough' Digital Preservation"](https://docs.google.com/presentation/d/1-a0YoUuqWPTTOO6Qah38e7X3scgP5rM7DOcnO0N-ncQ/edit#slide=id.p), Shira Peltzman and Alice Prael talked about the importance of sharing documentation, particularly sharing policy, in implementing a digital preservation program. The RAC's own Digital Preservation Policy is available [on our website](http://www.rockarch.org/programs/digital/DigPresPolicy.php). In developing the policy, we spent a lot of time looking at other institution's policies that were openly available on the web (the sources consulted are listed on that page). Looking at other institutions' policies helped us build a framework for our own digital preservation policy.

Ashley Blewer and Dinah Handel's talk ["Free York Workflows"](http://ablwr.github.io/free_your_workflows/#/) was all about sharing workflows and tools. One positive outcome of increased sharing and collaboration is that by not performing tasks that others have developed tools to automate, archivists can spend our time doing the kinds of things that computers can't. They also discussed implementing a "microservices" model at the institutional level. Microservices are small, independent processes that can be combined to make up a larger application. (Archivematica, which we use at the RAC, implements a [microservices model](https://www.archivematica.org/en/docs/archivematica-1.5/user-manual/overview/microservices/#micro-services).) It is easier to use a small piece of software developed by another institution than a large, all-encompassing system, since they are likely to be highly customized to an individual organization.

This idea was expanded on in Kate Deibel's lightning talk ["Why Cats Prefer Boxes Over Fancy Toys"](https://www.dropbox.com/s/hsl5pqnp3inhe1z/deibel-cats-prefer-boxes.pptx?dl=0), which focused on how to share code in a way that best allows for bits and pieces to be re-used. Others may only want to use part of your code (since the entirety may be only be useful for your institution), but even experienced technologists can have trouble dissecting code. This can be even more difficult for those with little coding experience and resources. One way of overcoming this is to share independent components so that others can more easily understand which pieces of code they'd like to re-use. And, of course, good documentation is super important: dependencies and installation instructions must be clearly documented in order for code to be re-used by a wide community of users.
