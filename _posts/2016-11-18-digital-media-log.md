---
id: 1643
title: Digital Media Log
date: 2016-11-18T09:40:02+00:00
author: Bonnie Gordon
layout: post
permalink: /?p=1643
categories:
  - Software and Systems
tags:
  - description
  - Digital Preservation
---
I'm excited to announce that the Rockefeller Archive Center's new Digital Media Log is live!<!--more-->

The Digital Media Log is a place for archivists to identify digital media items during processing in order to plan for and perform preservation actions as well as log basic digital media stabilization information. Our new Digital Media Log is replacing the Digital Media Inventory and Tracking Database. The fields for each item are now:

* Unique ID
* AS archival object RefId
* AS parent component and resource title
* Format
* Transfer status
* Transfer method
* Date of transfer
* Container disposition

This is substantially more lightweight than the Digital Media Inventory and Tracking Database, which recorded many fields for each item and had several tables. This is due both to a rethinking of what it means to inventory an item, as well as to our newfound ability to harness ArchivesSpace's API. Whereas the inventorying process previously required a lot of copying and pasting from Archivists Toolkit (and then ArchivesSpace), we can now automatically retrieve an archival object title and parent resource title after supplying a RefId. Additionally, the new system can have multiple simultaneous users, which was a major limitation of the Digital Media Inventory and Tracking Database, an Access database.

This has been a work in progress for a long time. The journey started with figuring out [requirements](https://docs.google.com/document/d/1jFP4O8jgl236PcpP-vqaT6qJNmPi9GXKbAJFDXXuoJo/edit?usp=sharing) and then turning those into wire frames. Then, after many weeks of learning (and struggling with) Ruby, Rails, and JavaScript, we have a new Digital Media Log! The code is up at [GitHub](https://github.com/RockefellerArchiveCenter/dm_log) and archivists at the RAC can find our implementation at [dm-log.rockarch.org](http://dm-log.rockarch.org).
