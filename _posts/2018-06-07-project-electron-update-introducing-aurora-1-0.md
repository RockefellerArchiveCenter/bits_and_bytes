---
id: 1997
title: 'Project Electron Update: Introducing Aurora 1.0'
date: 2018-06-07T10:14:53+00:00
author: Hannah Sistrunk
layout: post
redirect_from: /?p=1997
categories:
  - Project Electron
  - Software and Systems
  - Uncategorized
tags:
  - accessioning
  - appraisal
  - aurora
  - digital transfers
  - project electron
excerpt_separator: <!--more-->
---
We are very pleased to announce the initial release of Aurora, an application to receive, virus check, and validate the structure and contents of digital records transfers. It provides a read-only interface for representatives of donor organizations to track transfers, so that they can follow their records as they move through the archival lifecycle. It also includes functionality for RAC staff to add or update organization accounts and users associated with them, appraise incoming transfers, and initiate the accessioning process. Aurora is built on community-driven standards and specifications, and we have released it as open source software. This is a major milestone for Project Electron, and we are excited to share it with the world. Many thanks to our partners at Marist College IT and to the Ford Foundation for their generous support of the project.

![Aurora homescreen](http://blog.rockarch.org{{ site.baseurl }}/wp-content/uploads/2018/06/aurora-homescreen.png)

We will continue to improve Aurora as we test and integrate it with a chain of other archival management and digital preservation tools.

Read more about Project Electron [here](http://projectelectron.rockarch.org/).

<!--more-->

## What Aurora Does

We have designed Aurora primarily to enable ongoing transfers of records from active donor organizations in a way that regularizes and streamlines the process. Defining a consistent structure and set of required metadata elements for transfers of records facilitates automation of repetitive and routine administrative activities, allowing archivists to focus time and attention on the content and context of the records. Below is a summary of Aurora's capabilities.

### Transferring and Tracking Digital Records

At regular intervals, Aurora scans a directory structure where transfers are uploaded by donor organizations. Each transfer is first checked for viruses and then validated against the  [BagIt specification](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/transfer/bagit-specification.md) and the donor's [BagIt profile](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/transfer/organizational-bag-profile.json). Transfers that are not structurally valid, contain a virus, or are missing required metadata elements are rejected by the application and deleted immediately with notifications going to donors about the failure. The application displays transfer information in a searchable and sortable table where donors and archivists can track the status of transfers and view metadata. As transfers move through archival processes, their status will be updated in this interface, providing transparency for our donor organizations and increasing the visibility of archival labor.

<figure>
<img src="{{ site.baseurl }}/wp-content/uploads/2018/06/aurora-dashboard.png" alt="Aurora Dashboard Interface">
<figcaption>Aurora Dashboard Interface.</figcaption>
</figure>

### Archival Appraisal

Once a transfer is validated, it moves to the appraisal queue, where appraisal archivists can review the transfers to ensure they are within a repository's collecting scope. Archivists can accept or reject transfers, as well as add appraisal notes. When a transfer is rejected, it is removed from the appraisal queue, and its status is updated in the transfer table.

<figure>
<img src="{{ site.baseurl }}/wp-content/uploads/2018/06/aurora-appraisal-queue.png" alt="Aurora appraisal queue">
<figcaption>Aurora Appraisal Queue.</figcaption>
</figure>

### Archival Accessioning

Transfers accepted by an appraisal archivist move from the appraisal queue to the accessioning queue. Here, transfers are grouped by organization, record creators, and record type. Archivists can initiate the accessioning process by creating accession records for one or more transfers based on aggregated data from transfers grouped in an accession. Future work will integrate Aurora's accessioning functionality with an archival management system (in our context ArchivesSpace) and a digital preservation packaging system (Archivematica).

<figure>
<img src="{{ site.baseurl }}/wp-content/uploads/2018/06/aurora-accession-record.png" alt="Aurora accession record">
<figcaption>Aurora Accession Record.</figcaption>
</figure>

### User and Organization Administration

The application supports the management of organizations, user accounts, user groups, and their associated permissions. Archivists with permissions can declare user accounts active or inactive, associate them with a specific organization, or assign them to a group. Depending on the group that is assigned, users see different views of the application that are specific to their functions (such as appraisal archivist or accessioning archivist). The application also allows certain groups of archivists to create and delete organizations, as well as edit the BagIt Profiles and PREMIS rights statements for organizations.

### Bag-It Profiles

Aurora provides a user interface for archivists to create, edit, and delete [BagIt Profiles](https://github.com/bagit-profiles/bagit-profiles) for organizations. These profiles allow us to specify metadata elements that must be present in each transfer, the repeatability of those elements, as well as control values for certain elements. This ensures that all transfers will include DACS single-level minimum required description, allowing us to automate processes on top of that metadata. The application also provides a JSON representation of the Profile.

### PREMIS Rights Statements

Aurora provides a user interface for archivists to create, edit, and delete [PREMIS Rights Statements](https://www.loc.gov/standards/premis/understanding-premis.pdf), and associate them with specific record types. This automates the creation of rights statements for each transfer of records, since source organization and record type are among the minimum required metadata elements for a records transfer. Having rights statements linked to records defines what can and cannot be done with those records based on factors like copyright and our agreements with donors. The application automatically calculates the term of grant or restriction based on the 'start' or 'end' dates of the records in the transfer (also required metadata elements).

### API

Aurora comes with a [RESTful API](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_Web_services) (built using the [Django Rest Framework](http://www.django-rest-framework.org/)). The application includes a browsable API interface, as well as command-line interaction. This is a key feature that allows Aurora to be integrated with other tools.

## What's Next for Aurora and Project Electron

We continue to push forward on Project Electron through the development of a set of microservices to enable the [integration of Aurora with other systems](http://blog.rockarch.org/?p=1954) such as ArchivesSpace and Archivematica, usability testing of Aurora, and solidifying our [data model](http://blog.rockarch.org/?p=1969#more-1969). For a detailed look at the project plan, check out the [project milestones](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/docs/Milestones.md).

Interested in using our code? Check out [Aurora on GitHub](https://github.com/RockefellerArchiveCenter/aurora) or download the 1.0-alpha source code [here](https://github.com/RockefellerArchiveCenter/aurora/releases).
