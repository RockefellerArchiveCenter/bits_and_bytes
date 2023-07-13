---
title: "Keeping Our Heads in the Cloud: Building a Cloud-based Infrastructure for Digitized Audiovisual Files"
date: 2023-07-12T10:00:00
author: Brent Phillips
layout: post
categories:
    - Digitization
tags:
    - Audiovisual
    - audiovisual digitization
    - Bag-It
    - service design
    - infrastructure
    - preservation

excerpt_separator: <!--more-->
---

The Rockefeller Archive Center is developing a system wherein audiovisual file delivery, validation, quality control, and affixing rights statements can occur entirely in a Cloud setting.

<!--more-->

At the RAC, we are committed to the long-term care and preservation of our analog sound and video recordings. As the Audiovisual Archivist, I oversee the digital transfer of hundreds of magnetic media tapes in a variety of obsolete formats every year. Our focus remains on all new analog audiovisual (a/v) acquisitions, in reducing our backlog of obsolete magnetic media formats, and accommodating our on-demand researcher a/v access requests.

As an institution we are acutely aware that, regardless of our optimal vault storage conditions, all analog audiovisual material is actively degrading. Simply put, the knowledge and experience needed to successfully digitize obsolete analog recordings is fading and the legacy playback equipment required for digitizing these obsolete formats is more difficult to obtain. The International Association of Sound and Audiovisual Archives (IASA) has said: “As of 2020, it is widely accepted within the global audiovisual archival community that we have between 6 and 11 years in which to digitally preserve all tape-based audiovisual content held on magnetic media.” Time is of the essence. 

The unforeseen pause in physical labor at the RAC brought about by the COVID-19 pandemic allowed our staff to review, re-think, and re-imagine our current analog audiovisual digitization practices and to seek better efficiency.

## Service Blueprint

I was fortunate to begin this process in collaboration with RAC Digital Archivist Hannah Sistrunk. She introduced me to a methodology called [service design](https://www.nngroup.com/articles/service-design-101/). While effective documentation existed for our current a/v digitization workflows, these procedures were largely separated by media type and didn’t allow for a broad overview of how various processes -- regardless of format -- overlapped and/or diverged. Hannah and I drafted a very-detailed [service blueprint](https://www.nngroup.com/articles/service-blueprints-definition/) which became a strategic tool to think comprehensively about our current procedures. As I learned, the process of creating a service blueprint was in itself a valuable analysis exercise.

We presented our work to RAC Assistant Directors Hillel Arnold (Digital Strategies) and Susan McDade (Collections Management) to brainstorm ideas. The blueprint helped us all to evaluate the logical "flow" of a particular service, identify bottlenecks and “pain points,” understand and align “on-stage” and “back-stage” actions in terms of interfacing with users, making hidden processes more visible, and enabling all RAC staff to holistically view our audiovisual digitization processes. 

One of the most significant factors uncovered had to do with file storage. We were not good at estimating our digital storage needs and, consequently, were running out of local storage space. It was apparent that we needed a scalable solution. 

## The Cloud

Most audiovisual digitization at the RAC is carried out by third-party vendors, with some audio transfer work completed in-house. When digitizing a single item, a variety of files are created: a preservation master, mezzanine-level, and access file. (For audio, we omit the mezzanine derivative.) Each file serves a necessary function and has its own journey and access needs. Previously, these vendor-created a/v files had been delivered to the RAC via external HDD, which we now hoped to move away from given the fragility of these drives and reliability concerns when using commercial mail shipping carriers (FedEx, UPS, etc.). We were pleased to learn that our vendors could deliver new files directly to a Cloud platform. Our post-digitization work could therefore continue securely in the Cloud, offering virtually unlimited capacity, with no physical server space needed or to be maintained.

The group began to envision a system wherein file delivery, validation, quality control, and affixing rights statements could occur entirely in a Cloud setting. This would be followed by immediate ingest and packaging of our preservation master files through the Archivematica system, creating trustworthy Archival Information Packages (AIPs) ready for long-term storage. Hillel was able to begin turning our group’s ideas into a structured reality, conceptualizing a series of applications which would form a pipeline to validate and prepare digitized a/v files for Archivematica ingest.

![service design](/assets/img/2023/07/service-design.png)

## Validation/Quality Control

We were eager to adopt open-source tools for our validation and quality control phases. Before, this intensive work was implemented manually and quite time consuming. Utilizing automated tools will enable us to efficiently check that the basic, machine-readable aspects of our specifications have been adhered to, ruling out major errors right away and allowing RAC staff more time to delve into manual quality control (QC). BagIt has been adopted for delivery and file fixity verification. Additionally, MediaArea’s specification conformance checker, Mediaconch, will now be run against every file to check that they were created according to our requested technical specifications (codec, wrapper, sample rate, bit depth, color space, etc.). This process generates a report that flags any files that do not meet our specifications and will help us catch errors early on and work with our vendors to make needed corrections. 

With MediaConch automated validation being performed on 100% of our deliverables, manual QC will be undertaken on approximately 15-20% of files. This is a human-intensive task requiring a staff member to listen to and/or view a sampling of digital files to judge the accuracy of characteristics that are not typically assessed well by machines (i.e., the nature and severity of analog or digital artifacts, etc.) All manual QC involves comparing the individual file against the transfer technician’s signal report to check for accuracy and make certain that no other artifacts were introduced during digital transfer.

## Affixing Rights 

Following validation and QC, all digitized audiovisual files will now be affixed with machine-readable rights information selected from a controlled group of statements. This will be a manual process. Affixing rights metadata supports the RAC’s goal to expand the distribution of our collections in online environments. Underlying such efforts are donor agreements, intellectual property laws governing copyright, privacy, publicity, and trademarks. As [reported by the Getty Institute](https://www.getty.edu/publications/intrometadata/rights-metadata/ ): “Rights metadata is about being responsible stewards of the works in our collections and their digital surrogates—and in a digital world, it is crucial to the institution’s broader mission of collection, preservation, and access.”

## Archivematica Processing

At present, our focus remains on the journey of our preservation master files, from vendor delivery to long-term storage. The master is the most essential product created in any preservation project. Still, our non-master derivatives are also being considered during this phase of work. For these files, however, further storage investigation is necessary to find adequate solutions that will allow swift (and less costly) accessibility to mezzanine-level and access files for donors, staff, and researchers. 

Happily, a recent scale test of Archivematica’s capacity to ingest our audiovisual masters proved successful. Master files can now be processed through the Archivematica system, and these completed AIPs will be stored in their own separate Amazon S3 Glacier storage location. To finish the process, automatic final notifications will be delivered to RAC staff based on the outcome of the Archivematica ingest.

Testing of the entire system is set to begin soon. Stay tuned!
