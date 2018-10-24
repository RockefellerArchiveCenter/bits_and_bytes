---
id: 1402
title: Automating ArchivesSpace exports, or Better Living Through APIs
date: 2015-08-13T16:52:01+00:00
author: Hillel Arnold
layout: post
permalink: /?p=1402
categories:
  - Software and Systems
  - XTF
tags:
  - APIs
  - ArchivesSpace
  - version control
---
In preparation for upcoming changes to the display of digital objects in DIMES, I’ve been pursuing some enhancements to data export from ArchivesSpace. This began with [a plugin to improve METS exports](https://github.com/RockefellerArchiveCenter/ArchivesSpace-Customizations/tree/mods-mets/plugins/local/backend/model), including embedded MODS records, but then grew into a more comprehensive project to automate the export of updated resource records, version that data, and then push it to [DIMES](http://dimes.rockarch.org/).<!--more-->

In the past, when a staff member made a change to a resource record, they’d have to email our Head of Processing, who would then export the finding aid, move it to a folder on our shared network, and from there a number of scripts would take over and move it to DIMES and kick off an indexing process.

While this process has worked well for us to this point, allowing for good quality control and communication of updates, it’s started to become a little burdensome. The number of finding aids in DIMES has grown exponentially over the last few years, and with the introduction of ArchivesSpace, we have more staff than ever finding and correcting minor errors in our finding aids. In addition, we didn’t have good version control over the exported data – updated files would simply replace older versions in DIMES. It was time for a streamlined solution that provided us with a more robust, automated and transparent workflow.

To do this, we used a couple of tools that are becoming more commonly used in archives: [Git](https://git-scm.com/) for [version control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) and the [ArchivesSpace REST API](http://archivesspace.github.io/archivesspace/api/). Git is a tool that can track changes in files at a character level, which is very helpful if you want to see exactly how a file has changed over time, or if you want to step back to an earlier version. Although its primary use has traditionally been for software developers or other people writing code, an increasing number of archives and libraries are using to [version their data](https://github.com/NYULibraries/findingaids_eads) as well. An [API](https://en.wikipedia.org/wiki/Application_programming_interface), which is short for Application Programming Interface, basically provides a means to interact with a system without having to alter the code of that system or write a program in the same language that system is written in. In the case of the ArchivesSpace API, it leverages [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) technology to communicate over a network using [HTTP commands](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) and predictable URL patterns. What this means is that I just need to send ArchivesSpace a URL it recognizes and it will give me back the data I want.

So after some work, I’ve come up with [a Python script](https://github.com/RockefellerArchiveCenter/asExportIncremental) that uses the ArchivesSpace API to run through our repository, look for [published resource records](https://github.com/RockefellerArchiveCenter/asExportIncremental/blob/master/asExportIncremental.py#L191-L197) that have been [updated since the last time the script ran](https://github.com/RockefellerArchiveCenter/asExportIncremental/blob/master/asExportIncremental.py#L61-L69), and then [export EAD for those records](https://github.com/RockefellerArchiveCenter/asExportIncremental/blob/master/asExportIncremental.py#L96-L109). It will also [generate PDF finding aids](https://github.com/RockefellerArchiveCenter/asExportIncremental/blob/master/asExportIncremental.py#L89-L94) for those records, using a slightly modified version of the [EAD to PDF converter](https://github.com/RockefellerArchiveCenter/ead2pdf) developed by ArchivesSpace. Then it [runs through all of the archival objects](https://github.com/RockefellerArchiveCenter/asExportIncremental/blob/master/asExportIncremental.py#L199-L207) in ArchivesSpace to see if any of them have been updated, and if so exports EAD for the associated resource record and generates a PDF file. After that, it [exports METS files](https://github.com/RockefellerArchiveCenter/asExportIncremental/blob/master/asExportIncremental.py#L111-L123) for any digital object records [associated with updated resources](https://github.com/RockefellerArchiveCenter/asExportIncremental/blob/master/asExportIncremental.py#L217-L223).

Once it’s done that, it will version those files using Git, then push to a [Github](https://github.com/RockefellerArchiveCenter/data) [repository](https://github.com/RockefellerArchiveCenter/data).<a href="#_ftn2" name="_ftnref2"><sup><sup>[1]</sup></sup></a> From there, a [Github webhook](https://github.com/RockefellerArchiveCenter/data-webhook)<a href="#_ftn3" name="_ftnref3"><sup><sup>[2]</sup></sup></a> will copy the updated EAD, METS and PDF files to DIMES and trigger an indexing job.

Here’s a key point: because the script looks for published resource records, we have to be careful not to mark the top level of any resource records in ArchivesSpace as published that we don’t actually want published! In order to make sure we started out with the right resource records published, I wrote a script (again using the ArchivesSpace API) that matches resource IDs against a list to determine which should be published and which should be unpublished.

I'd be remiss if I didn't thank a number of people who helped me with this along the way. First of all, a big thank you to Sibyl Schaefer, our former Head of Digital Programs, for suggesting this workflow a few months back. We hope you like how we’ve implemented it! Andromeda Yelton, Dave Mayo, Mark Matienzo and Mark Triggs reviewed this code and provided excellent suggestions which made the script much easier to maintain, far more robust, and just generally better. I'm very grateful to have such a fantastic and generous professional network!

We’d be really happy to have other people give this code a spin and, if you discover any problems, create an issue or pull request in the [repository](https://github.com/RockefellerArchiveCenter/asExportIncremental)!

* * *

<a href="#_ftnref2" name="_ftn2"><sup><sup>[1]</sup></sup></a> Github is a service that integrates with Git, and provides some really nice tools on top of that. It’s also an easy way to make your code public, and to allow other people to contribute to a project. For example, the recently-released [schema for EAD3](https://github.com/SAA-SDT/EAD-Revision) was developed using Github.

<a href="#_ftnref3" name="_ftn3"><sup><sup>[2]</sup></sup></a> [Github Webhooks](https://developer.github.com/webhooks/) allow you to trigger additional actions based on actions applied to a repository, for example when a new commit is pushed. They are really cool and I wish I’d known about them earlier.
