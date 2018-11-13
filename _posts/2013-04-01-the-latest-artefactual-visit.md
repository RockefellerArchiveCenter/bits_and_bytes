---
id: 498
title: Artefactual visit, March 2013
date: 2013-04-01T19:21:26+00:00
author: Laura Montgomery
layout: post
permalink: /?p=498
categories:
  - Digital Preservation
  - XTF
tags:
  - access
  - Archivematica
  - Artefactual
  - ATReference
---
On Thursday and Friday of last week, we had a visit from Evelyn and Austin of Artefactual Systems, who were here to set up a new version of Archivematica for us to test. This new version has some important functionality which will allow us to present access copies of digitized material online in DIMES.

<!--more-->

The new version of Archivematica connects directly to the ATReference database, which allows it to write information about digital objects directly to that database. Archivematica now allows us to take a group of digital objects designed for access (called a Dissemination Information Package, or DIP), add some bulk metadata to them that specifies how they are to be distributed and displayed, and upload that data to ATReference. From there, we are able to export that same data in EAD and upload it to DIMES, where researchers can view it from anywhere in the world.

For now, this process is very much designed around the FCD collection, but the plan is to use this pilot project as a way to come up with a more generalized process for connecting existing description in the ATReference with digital objects, whether born-digital or digitized later.

This is a complex process, with a number of moving parts, so we'll be testing this process thoroughly in the development environment that Artefactual has set up for us. We'll be providing feedback directly to Artefactual, who will be making changes to the functionality based on our comments. Artefactual will return in early May to upgrade our production system.

While this is happening, we'll also be making changes to DIMES so that these objects can be displayed on the web. Keep an eye on our [development server](http://192.168.50.29/xtf/search) over the next few weeks to see this in progress!

In addition to connecting Archivematica to the ATReference database, Artefactual installed a [Device Side USB 5.25" floppy controller](http://www.deviceside.com). This will allow us to take disk images of the 5.25" floppy disk digital media and begin processing this type of material in the digital workflow.
