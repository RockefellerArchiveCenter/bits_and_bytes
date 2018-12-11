---
id: 1720
title: Project Electron March Update
date: 2017-04-06T15:07:34+00:00
author: Hillel Arnold
layout: post
permalink: /?p=1720
categories:
  - Project Electron
tags:
  - preservation
  - standards
  - storage
  - transfer
excerpt_separator: <!--more-->
---
March was a busy month for the Project Electron team, with [conference presentations at Code4Lib](http://blog.rockarch.org/?p=1707), attendance at [LDCX, Born Digital Archiving eXchange and Personal Digital Archiving](http://blog.rockarch.org/?p=1717), and participation in the [DACS Principles revision process](http://blog.rockarch.org/?p=1710). Despite this, we managed to make significant progress on Project Electron, specifically in developing requirements for archival storage as well as transfer of records from donor organizations to the Rockefeller Archive Center.<!--more-->

I wrote [last month](http://blog.rockarch.org/?p=1700) that we'd started digging into requirements for a repository, which I defined as a system which provides storage and management functions to support the long-term digital preservation of archival records. Since that time, though, I've started to refer to this component of Project Electron as "archival storage," broadly conceived of as a set of requirements around storage as well as preservations services - such as [fixity checking](https://en.wikipedia.org/wiki/File_Fixity) and [file format migration](http://www2.archivists.org/glossary/terms/f/format-migration) - that operate on records in that storage. This shift is a conscious effort to separate thinking about generalized groups of functions from systems. There may not necessarily be a one-to-one relationship between a system and a group of functions, and distinguishing our thinking about the two helps us think more flexibly and clearly about our needs and the options for fulfilling those needs.

To date we've developed a list of requirements for archival storage, which as I indicated above have largely fallen into two section: storage and services. We've drawn a lot from existing frameworks and standards - such as [TRAC](https://www.crl.edu/sites/default/files/d6/attachments/pages/trac_0.pdf) and the [NDSA Levels of Digital Preservation](http://ndsa.org/activities/levels-of-digital-preservation/) - for these requirements.

We've also been thinking about how records will be transferred from our donor and depositor organizations to us. This is still very much a work in progress, but I can say that we are moving towards a model that will support frequent network transfers of semantically-meaningful groups of records bundled with some basic metadata about those records in a pre-defined structure. The requirements for this component are taking shape, and we're again leaning heavily on existing standards like [DACS](http://www2.archivists.org/standards/DACS), [BagIt](https://en.wikipedia.org/wiki/BagIt) and of course [OAIS](https://public.ccsds.org/pubs/650x0m2.pdf).

Stay tuned for more news next month, which will likely include requirements, process diagrams, and all kinds of other fun stuff!
