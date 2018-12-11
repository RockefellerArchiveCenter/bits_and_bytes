---
id: 920
title: Woodrow Wilson National Fellowship Foundation digital preservation project
date: 2013-11-22T20:04:11+00:00
author: Laura Montgomery
layout: post
permalink: /?p=920
categories:
  - Digital Preservation
tags:
  - Archivematica
  - Bag-It
  - data migration
  - Digital Preservation
  - metadata
  - PREMIS
  - preservation metadata
excerpt_separator: <!--more-->
---
The [Woodrow Wilson National Fellowship Foundation](http://woodrow.org/ "Woodrow Wilson National Fellowship Foundation") (WWNFF) program was designed to encourage college graduates to consider college teaching as a career and provided support for first-year graduate students in the humanities and the social sciences in its early years before expanding to include mathematics and the sciences. Each fellowship file contains application forms, recommendations, transcripts, and other documentation used to track the fellow's progress.

<!--more-->

Rockefeller Archive Center received the 18,517 fellowship program files on 30 CDs.  These files were digitized using [File Magic](http://www.trianglesolutions.com/files/filemagic.html "File Magic"). The paper records were subsequently destroyed after scanning. The Woodrow Wilson National Fellowship Foundation, [Andrew W. Mellon Foundation](http://www.mellon.org/ "Andrew W. Mellon Foundation") and [Spencer Foundation](http://www.spencer.org/ "Spencer Foundation") also received deposits of the fellowship files on CD. By July 2008, these three organizations could not locate or could not access their copies of the electronic records. Soon after, Rockefeller Archive Center began a digital preservation project to migrate the digital records onto a server for eventual ingest into [Archivematica](https://www.archivematica.org/wiki/Main_Page "Archivematica"), a digital preservation management system.

From July 2008 until June 2010, Rockefeller Archive Center staff member Meghan Proehl began a project to convert the 30 CDs of obsolete File Magic files to Adobe PDF. The PDF access copies and original File Magic version were transferred to a server by with efforts from our IT Coordinator, Fernando Carrasco. This project was coordinated by Archivist Nancy Adgent and a finding aid was completed on July 15, 2010.

In 2013, Assistant Digital Archivist Laura Montgomery compared the original File Magic files and PDF access copies on CD with the objects that were transferred to the server to determine the most complete set of files, and in turn which set to be ingested into Archivematica. [WinMerge](http://winmerge.org/ "WinMerge") which can determine the changes between file versions was used for file comparison. The files on the server were deemed the most complete set of WWNFF digital records. These files were bagged using BagIt which is a file packaging software that supports the network transfer of files. The bag contained the Fellowship files, and supporting metadata that documents the storage and transfer of the bag. The metadata includes a manifest that details every digital object in the bag and its corresponding checksum. When a bag is moved from server to server, a user can check the bag by validating the checksum. If the bag is valid then all files were transferred successfully. If a bag is invalid there was an issue with the transfer.

Currently, the bag of WWNFF files is waiting to be ingested into Archivematica for storage. Before the files are ingested into Archivematica, the Rights Team, staffed by Archivists Mary Ann Quinn and Amy Fitch will determine the rights for this collection and devise PREMIS statements for the objects.

A lesson learned from the Woodrow Wilson National Fellowship Foundation fellow file conversion project is that a digital preservation project can take many years to complete. For a project that has spanned five years to be successful, it requires good documentation of the decision making process and a detailed project work plan. Keeping a record of previous work done helps inform and organize future decisions regarding the materials. This digital preservation project also required a lot of input and teamwork across the staff grouping matrix. I would like to send out a big thank you for everyone's efforts involved!
