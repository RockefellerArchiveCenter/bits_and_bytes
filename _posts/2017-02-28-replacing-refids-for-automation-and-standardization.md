---
id: 1704
title: Replacing Refids for Automation and Standardization
date: 2017-02-28T09:20:04+00:00
author: Patrick Galligan
layout: post
permalink: /?p=1704
categories:
  - Data Cleanup
  - Digitization
tags:
  - APIs
  - ArchivesSpace
  - digitization
  - refids
  - scripting
excerpt_separator: <!--more-->
---
A few months ago, I wrote about [selected digitization readings](http://blog.rockarch.org/?p=1586) and how we were going to use them to overhaul our digitization workflows. We're now a couple of months into our new digitization workflow, and things are starting to run smoothly, but during the process, we noticed that we wanted a better way to match our digitized files to their description without using semantic filenames or separate metadata sheets. <!--more-->

As such, we began exploring how we could ArchivesSpace refids as our filenames and create unique links between digitized content and its description. We could use these filenames to easily automate linking of digital information packages to description in ArchivesSpace using our automated transfer tools and Archivematica, and move our processes toward even more automation.

If you recall my [blog post](http://blog.rockarch.org/?p=1621) from November 2016, you'll remember that we're also using ArchivesSpace refids for our Find-It application, which has been working well for us, so we decided that it would make a lot of sense to use refids for digitized filenames as well. ArchivesSpace refids are randomly generated 32-bit hexadecimal strings that are unique within each collection in AS, so it's extremely unlikely that the system will create any duplicates, but the same couldn't be said about the data we already had in the system. ArchivesSpace is not the first collection management system we've used at the RAC, and we haven't always placed restrictions on our data quality to ensure we're not messing things up. As such, we had duplicate refids from Archivists Toolkit and refids with numerous different structure (ref\_1234, aspace\_1234, ref501, etc.), none of which matched any existing digitized filenames. We knew that we wanted to standardize and cleanup all of the refids currently in AS before moving forward with any new naming procedures, but the tricky portion was how.

We've been working with the ArchivesSpace API a lot recently, and it seemed like it should be a simple solution to just use the API to search through all archival objects, check to see if their refids met certain rules, and if not, replace them with randomly generated 32-bit hexadecimals. Unfortunately, and probably smartly, ArchivesSpace doesn't let you change refids through the API because you can get yourself into some serious trouble messing around with those things all willy-nilly. Fortunately, the inimitable [Mark Triggs](https://dishevelled.net/) pointed us to the code in the AS codebase that restricted that portion of the API so that we could develop a very small plugin to override any restrictions, and run our refid script.

We of course tested everything on our development installation first, but after everything went smoothly, we were ready to turn the switch on production. We started the script on a long weekend (we knew it would take at least 80 hours or so), and let it do its work. At the beginning of the run we had 741,132 archival objects in our ArchivesSpace database. As the script ran through them all, it replaced 593,660 and found 536 duplicates. When it was done, we had no duplicate refids, and they were all formatted in a standardized manner. We've since disabled the plugin that we used to override the API restrictions, and have clear instructions that all imported EAD cannot include existing refids.

Ultimately, we're super excited to have some completely clean data, and we feel like we're setting ourselves up to succeed in the future by removing semantic filenames that may mean nothing to new staff members in 20 years. Sure, we might have to change all of these refids the next time we migrate to a system, but at least we'll now have a good way to do that, because they're all formatted the same. We also expect that this will help immensely in moving and linking our data to other systems in project electron, specifically with any digital repository that we choose.
