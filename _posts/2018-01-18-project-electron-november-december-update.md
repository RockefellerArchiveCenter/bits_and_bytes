---
id: 1944
title: Project Electron November-December Update
date: 2018-01-18T09:50:21+00:00
author: Hannah Sistrunk
layout: post

permalink: /?p=1944
categories:
  - Project Electron
tags:
  - accessioning
  - appraisal
  - project electron
---
<span style="font-weight: 400;">In the </span>[<span style="font-weight: 400;">last Project Electron update</span>](http://blog.rockarch.org/?p=1923)<span style="font-weight: 400;">, I discussed the benefits of user interfaces as communication tools during development. This month I want to share more about the archival functions that those user interfaces enable in the application, which has been the focus of our recent development work. Specifically, I will share how the application enables appraisal and accessioning functions, as well as managing structured rights statements.</span>

<!--more-->

## **Appraisal and Accession**

<span style="font-weight: 400;">Much of the preliminary appraisal work is completed automatically by the application through validation processes that check incoming transfers to make sure that they meet the </span>[<span style="font-weight: 400;">requirements for transfer</span>](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/transfer/requirements.md)<span style="font-weight: 400;">, assuring a standard structure and a set of </span>[<span style="font-weight: 400;">minimum metadata elements</span>](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/transfer/bagit-specification.md)<span style="font-weight: 400;">. Additionally, there is a user interface that enables an appraisal archivist to review each records transfer, assure that it is in scope, and manually approve or reject it. If necessary, the archivist can add an appraisal note to that transfer. If the transfer is rejected, the appraisal note is emailed to the donor. </span>

<span style="font-weight: 400;">Once a transfer is accepted, the application groups together multiple transfers into a single accession that are related via organization, record creator, and record type. The accessions are presented in an “accessioning queue” view that allows archivists to review, edit, and save accession records for these groups of transfers. The application updates the status of transfers after an accession record has been saved, allowing a user to track the status of a particular transfer. The functionality of creating an accession record will be expanded in the next phase of Project Electron, which will focus on enabling integrations with other systems for archives management and preservation. We use </span>[<span style="font-weight: 400;">ArchivesSpace</span>](http://archivesspace.org/) <span style="font-weight: 400;">as our archival management system at the RAC, and once integration is implemented, we can add the functions of generating accession numbers, finding existing record creator names from agent records in ArchivesSpace, and pushing data to ArchivesSpace after the accession record is saved.</span>

## **Applying Rights Statements**

<span style="font-weight: 400;">In our recent development work we have also built out the functionality of rights management, enabling appraisal archivists to create and edit default PREMIS rights statements for donor organizations that can be applied to specific record types from that donor. </span>[<span style="font-weight: 400;">PREMIS</span>](https://www.loc.gov/standards/premis/understanding-premis-rev2017.pdf) <span style="font-weight: 400;">is a preservation metadata standard that supports the digital preservation process, and which we have implemented to manage the rights and permissions associated with digital records, including the term of grant or restriction (the time period for which the rights statement applies). </span>

<span style="font-weight: 400;">The ability to view, add, and edit PREMIS rights statements for donor organizations by record type enables these rights to be automatically associated with each transfer in the application, since source organization and record type are among the minimum required metadata elements for a records transfer. The application automatically calculates the term of grant or restriction based on the ‘start’ or ‘end’ dates of the records in the transfer (also required metadata elements). For example, if all grant records for a given donor organization are to be closed to researchers for 10 years from their date of creation, a PREMIS rights statement can be created that the application will apply to all grant records from that organization. The 10-year embargo period is specified in the rights statement, and the application will calculate when the records will be open based on the creation date specified in the donor-provided metadata.</span>

<span style="font-weight: 400;">In addition to applying these rights statements to each transfer, the application merges and saves rights statements which then apply to an entire accession</span><span style="font-weight: 400;">. </span><span style="font-weight: 400;">As I noted, multiple transfers are combined into one accession based on organization, creator, and record type. Because they are all part of the same organization and record type, the same PREMIS rights statements are applied to them. The application calculates grant/restriction periods for the entire accession rather than each individual transfer.</span>

## <span style="font-weight: 400;">-</span>

<span style="font-weight: 400;">Developing these fundamental appraisal and accessioning functions in the application is an important step forward for Project Electron as we build on the ability to securely transfer records and their metadata to functions of management, preservation, and discovery.  As always, we welcome questions and feedback, and look forward to sharing more as we progress!</span>