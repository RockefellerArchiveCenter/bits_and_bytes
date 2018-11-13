---
id: 532
title: Artefactual Visit Report
date: 2013-05-13T18:18:41+00:00
author: Hillel Arnold
layout: post
permalink: /?p=532
categories:
  - Digital Preservation
  - Digitization
  - XTF
tags:
  - Archivematica
  - Artefactual
  - ATReference
  - digital accessioning workflow
  - digital formats
  - Digital Preservation
  - email
---
Last week we had a visit from Evelyn, Austin and Justin of Artefactual, who were here to continue working on our Archivematica implementation.

<!--more-->The first thing they did was to upgrade our existing installation of Archivematica to the latest version, 0.10-beta. This version has a number of new features – listed in the

[release notes](https://www.archivematica.org/wiki/Archivematica_0.10-beta_Release_Notes) – many of which will be extremely useful to us. These include:

* The ability to configure processing actions, which greatly reduces the amount of time necessary to monitor microprocesses and keep materials moving through the pipeline.
* A number of improvements to the micoprocesses for identifying and normalizing files, which greatly improve the system’s ability to identify and preserve digital material.
* An option to create and manage a backlog of digital materials, which means it is now possible for us to place accessioned digital materials in secure storage before completing any other arrangement and description work. This is significant change that will likely have a major impact on our digital preservation workflow.
* A [Format Policy Registry](https://www.archivematica.org/wiki/Format_policy_registry_requirements) – an online database of file formats and the normalization routines that Archivematica runs on a particular format – is now part of the system. Any institution that has installed Archivematica has access to this information, and in the next release it will allow users to submit their own normalization routines, if they differ from the defaults Archivematica has established. This is important because it will allow the digital preservation community to jointly determine the best way to preserve digital objects, rather than Archivematica implicitly assuming that responsibility.
* The ability to search archival storage (AIPs), using a technology called elasticsearch, and retrieve individual files.
* A bulk metadata upload feature through which descriptive information about multiple digital objects can be uploaded via a comma separated values (CSV) spreadsheet.
* An option to add accession numbers at the transfer stage, which will allow us to explicitly tie digital materials to an accession record (rather than a resource record or collection) and track materials by that number throughout Archivematica processes.

Another major project that Artefactual is working on is integrating the access copies of digital material in Archivematica with ATReference and DIMES. This is a fairly complex process that requires Archivematica to connect directly to the ATReference database so it can create data about digital objects. Because of the complexities, we are first trying to get this integration working for the digitized FCD microfilm, and then will work to create a more generalized process that will work for other collections including the RF Officers’ Diaries, PUMC material, and collections we haven’t even thought about digitizing yet! We are very close to having the integration working for the FCD collection, and went over requirements for a more generic process with Artefactual while they were here.

Lastly, Artefactual continued working on functionality to ingest email into Archivematica. Although there are still some issues to work out, due to the intricacies of email (attachments, viruses and format obsolescence, to start), we are very close to being able to ingest email accounts. This is a major new feature for Archivematica, and will also allow us to responsibly acquire email from our donor institutions.
