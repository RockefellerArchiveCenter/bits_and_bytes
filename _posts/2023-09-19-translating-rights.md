---
title: "Translating Rights: Creating a User Interface for Authoring PREMIS Rights"
date: 2023-09-19T10:00:00
author: Hillel Arnold
layout: post
categories:
    - Software and Systems
    - Digital Preservation
tags:
    - preservation
    - archivematica
    - PREMIS Rights

excerpt_separator: <!--more-->
---
The Rockefeller Archive Center has a long relationship with Archivematica; I think we were one 
of the first institutions to implement Archivematica in production. Our use of Archivematica 
coincides with our use of PREMIS Rights. Early on, we decided that we would always add PREMIS 
Rights statements to transfers to support mediated access to digitized and born-digital records. 
Having machine-actionable rights statements allows us to flexibly develop and change our 
implementation of mediated access without being tied to a particular model or definition.

As part of scaling up our digitization and born-digital transfer processes, we wanted to distribute 
the work of authoring and managing PREMIS rights statements across the organization. However, 
particularly when serialized in XML, a significant degree of specialized expertise to understand 
and author PREMIS Rights. Over the years we’ve created several different kinds of graphical 
user interfaces aimed at lowering the barrier to the human management of PREMIS Rights.<!--more-->

## Archivematica PREMIS UI
Archivematica provides a built-in UI for authoring PREMIS Rights statements, and that’s how we started 
out associating rights with ingests. However, we ran into some areas of friction:
- The form for creating a rights statement is broken into two pages, one for the basis and one 
  for the acts. This requires users to remember what they entered in a previous page. There are also 
  just a lot of fields.
- Second, this UI only allows you to associate a single set of rights statements with a transfer. That 
  means all the objects in that transfer need to have the same rights, which is not always the case. 
  This resulted in breaking up transfers by rights instead of more archival concepts like provenance.

## CSV Import: object-level PREMIS Rights import
Our first attempt at moving the interface for creating PREMIS Rights outside of Archivematica was 
specifying and sponsoring a new feature which supported the import of PREMIS Rights via a CSV file. 
This feature also allowed these rights to be specified on a per-object basis. While this feature 
simplified the serialization of PREMIS and supported some degree of automation, creation of these 
rights statements (and the management of the scripts necessary to create the spreadsheets) still 
required a lot of specialized knowledge, so we knew we’d have to look for other solutions.

## Aurora: PREMIS Rights from donor agreements
A few years ago, we developed a bunch of different applications and systems integrations to support 
the ongoing transfer of born-digital records from our donor institutions. The “front door” to this 
pipeline is an application called Aurora, which supports the initial transfer, validation, and 
appraisal of packages of records.

One of the things this application does is automatically assign PREMIS Rights to records packages 
by taking the basics of a rights statement and calculating dates based on metadata associated with 
the records package. This means that every born-digital record that we have custody of has at least 
one machine-actionable rights statement associated with it. It’s also important to say that these 
rights statements are translations of prose in our donor agreements. I’ll touch more on this later, 
but that process of translation has proven to be challenging. 

Aurora allows users to create, update and view rights statements. Because it is a Django web application 
just like Archivematica, we ended up “borrowing” much of the code for our implementation from 
Archivematica and then making some enhancements.
- The first major change we made was moving all the elements of a rights statement (basis and acts) to 
  the same page. This makes it possible for users to holistically understand the rights statement while 
  they are creating it. 
- We also added a human-readable display of rights statements, to build confidence for archivists and 
  donors that the correct rights had been assigned to a records package.

We went through several rounds of usability testing and were able to fix several issues. But one of the 
things we were unable to resolve was the translation challenge I alluded to earlier. This is less of a 
technical issue, or a problem with PREMIS and more about the specificity of language in donor agreements 
are as well as the kinds of judgement necessary to interpret often purposefully fuzzy prose into data 
elements. 

## Aquila: PREMIS Rights as-a-service
In our next and most recent iteration, we took a broader view. Taking into consideration digitized as well 
as born-digital records, we started by thinking through our organizational processes and policies around 
the creation and management of rights and clarifying two concepts which we then modeled in the application 
we developed.
- The first of these is a Rights Shell which is basically a PREMIS rights statement with rules for dynamically 
  calculating begin and end dates. 
- We also formalized the idea of a Records Grouping, which is carefully worded to distinguish it from both 
  a record group and a collection. These groupings are not necessarily determined by provenance or internal 
  structure of the records but are more things like “Online exhibit content” or “personal papers” which often 
  cut across collections or other aggregations of records.

Once we’d formalized these concepts, we then worked with our head of arrangement and description to create nine 
standard rights statements that cover most of the cases present in our holdings. We also developed a standardized 
and documented way of adding new rights statements which ensures the proper organizational guardrails are in 
place for this work going forward.

This conceptual and procedural foundation allowed us to create a much simpler UI, particularly for date rules. 
We were able to break date rules into some broad categories, and then control the visible fields in the UI based 
on that category. This tweak was a huge usability improvement. Showing the user only the 
necessary fields removes a ton of cognitive overhead.

Aquila also has a REST API which supports integration with other systems and services, including an endpoint 
which can return a fully valid PREMIS rights statement given a package date range and an identifier for a 
Rights Shell. We currently use Aquila in our pipeline for ingesting digitized content into Archivematica, and 
plan to use it in other similar pipelines for digitized AV and born-digital records.

## Conclusion
One of the main things we learned during the years of working on this problem is that rights management is not 
just a technical problem. PREMIS gives us a great structured framework for rights, but our institutional ways of 
thinking about rights are often fuzzier and less formal than PREMIS wants us to be. People and machines are good 
at different kinds of things, and enabling people to create machine-actionable rights statements requires a lot 
of forwards and backwards translation. These conditions mean we must take an iterative approach that’s based on 
evidence gathered from usability testing. 

I wanted to offer a huge thank you to Bonnie Gordon, whose thinking and doing was instrumental to all our efforts 
around PREMIS Rights. Bonnie is an incredibly sharp thinker who can cut through complex concepts to provide clarity 
which instigates institutional change. Although Bonnie has moved on from the RAC, we’re grateful for her work 
every day!

_This blog post was presented as a lightning talk at the PREMIS Implementation Fair at iPRES 2023._
