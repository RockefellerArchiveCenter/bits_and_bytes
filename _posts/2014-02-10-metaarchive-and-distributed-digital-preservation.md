---
id: 991
title: MetaArchive and Distributed Digital Preservation
date: 2014-02-10T18:16:11+00:00
author: Sibyl Schaefer
layout: post
permalink: /?p=991
categories:
  - Digital Preservation
tags:
  - Digital Preservation
  - distributed digital preservation
  - LOCKSS
  - MetaArchive
excerpt_separator: <!--more-->
---
About a year ago, I started reviewing ways to secure our digital assets against potential catastrophic losses due to disaster (natural or otherwise), technical error, hardware failure, and system attacks. I wanted a solution that offered geographically-dispersed server space to minimize the risk of loss due to disaster, regular fixity checks to help uncover any potential hardware issues on those servers, and administration differentiation between those servers and our own systems to help alleviate technical error and system attack issues.

After a review of [Distributed Digital Preservation Services]({{ site.baseurl }}/wp-content/uploads/2014/02/DigitalPreservationServices.xlsx) (as of Spring, 2013), we selected [MetaArchive](http://www.metaarchive.org/). MetaArchive is a digital preservation network created and hosted by memory organizations like libraries and archives. It uses [LOCKSS](http://www.lockss.org/) software, which was developed by Stanford University and is used by about 12 different preservation networks worldwide. In a LOCKSS based system, materials are ingested and stored on servers hosted by network members in disparate geographical locations. The fixity of the materials is checked at regular intervals. This system helps prevents data loss occurring during natural disasters or other emergencies, or due to malicious or negligent factors. No one administrator has access to all copies of the data or can tamper without detection. A step-by-step review of how it works can be found [here](http://www.metaarchive.org/methodology). Current MetaArchive [membership institutions](http://www.metaarchive.org/members) span 13 states and 4 countries. These members include many universities, the Library of Congress, and a few smaller libraries. <!--more-->

Perhaps what sold me most on the service was documentation I read from the [NDIPP Operations Plan describing the purposes of MetaArchive](http://metaarchive.org/public/resources/presentations/200910_workshop_houston/ndiip_docs/NDIIPP_Operations_Plan.pdf "NDIPP Management Plan MetaArchive Project"). It states that by outsourcing key missions to vendors (preservation being a key mission), cultural memory organizations suffer in three ways:

>1. Usually, they [cultural heritage institutions] have limited knowledge of how the solution actually works and thus no power to perform it or even clearly assess it for themselves,

>2. They become marginalized as organizations that contract for services rather than performing their own key missions, and

>3. They (and their materials) are subject to the rising prices that vendors will charge in order to maximize their financial gain.

Although there are cheaper services out there - [Preservica](http://preservica.com/), for instance - I agree that farming out preservation activities to such services would result in a loss of our own knowledge, and in my mind, an inability to responsibly act as custodians of the materials in our care. Having the dangers of outsourcing so clearly explicated in documentation describing the purpose of the Collaborative reinforced my own feelings on the matter, and made me want to support the initiative because of its purpose as well as its offered services.

One of the most important aspects of MetaArchive is that, by joining a collaborative effort, we're building the technical infrastructure and creating a knowledge base within our own institution, while also not going it alone. We currently don't have the technical infrastructure to fully participate (this entails hosting a dedicated server and includes having access to the [Internet 2](http://en.wikipedia.org/wiki/Internet2) network), but we'll be working with MetaArchive over the next few years to develop that infrastructure so we can participate more fully.

While I have yet to set up an official matrix of how we'll select materials for ingest into MetaArchive, the general guideline is that if the digital version is the preservation version, it will be ingested into the MetaArchive network. For example, our digitized microfilm files will NOT be ingested, since the microfilm is considered the preservation copy. Most digitized A/V materials WILL be ingested, since the original physical A/V material is unlikely to be accessible for playback post-digitization. There obviously needs to be some more fine-tuning of selection requirements to recognize the resource expenditures digitization requires and that catastrophic loss of those digital files would result in a loss of investment in the generation of those files. It may be the case that we decide to purchase some cheap cloud space like Amazon Glacier to store an additional copy of those types of said files.

Over the next month or so, we'll be working on setting up our MetaArchive workflows. Patrick will be spearheading these developments. The general workflow envisaged is:

Selection - > Ingest to Archivematica- > AIP upload to MetaArchive-accessible server -> Ingest to MetaArchive -> Breathe sigh of relief

Sounds easy, right? We're aiming to have the structure set up by late spring/early summer. Look for more updates, and expect some additional discussion concerning selection requirements!
