---
id: 1859
title: Project Electron September Update
date: 2017-10-16T10:00:22+00:00
author: Hannah Sistrunk
layout: post
redirect_from: /?p=1859
categories:
  - Collaboration
  - Project Electron
tags:
  - hackathon
  - milestones
  - project electron
  - scenario mapping
excerpt_separator: <!--more-->
---
It has been a busy month for Project Electron as we near the end of the first phase of development, which focused on building an application to enable the secure transfer and validation of digital records and their metadata according to the [Rockefeller Archive Center BagIt specification](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/transfer/bagit-specification.md). In addition to the transfer application development, much of our work this month has been about planning for the next phase of the project. In this post I will share a few activities and strategies we undertook to prepare for development and to keep [users at the center of the design process](http://projectelectron.rockarch.org/).<!--more-->

## Project Milestones Update

The next phase of the project will be focused on enabling the appraisal and accessioning of digital records once they have been successfully transferred from donors to the RAC. In preparation for the work of building out the transfer application and planned integrations with ArchivesSpace and Archivematica that will enable these essential archival functions, we have updated our [Project Electron Milestones](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/docs/Milestones.md) document to include a timeline of the second year of work.

## User Scenario Mapping

[Back in February](http://blog.rockarch.org/?p=1700), the team developed a set of user scenarios using the project's [twelve personas](https://github.com/RockefellerArchiveCenter/project_electron/tree/master/personas) to help map out requirements for the transfer application. This month, we added four additional scenarios to cover appraisal and accessioning actions necessary for users. The scenarios cover situations like an archivist needing to accept or reject a transfer or approve groups of transfers as accessions, or a donor needing to see the status of a transfer or troubleshoot a failed transfer.

Using the scenarios, we undertook a [scenario mapping](http://www.uxforthemasses.com/scenario-mapping/) activity with our Donor Relations and Collections Management staff during which we walked through the steps that the users in the scenarios might take to accomplish their goals. We used various colored sticky notes to indicate the steps and associated comments, questions, and ideas. This was a collaborative way to gain valuable insights from our colleagues about the requirements for appraising and accessioning records, including important user interface elements that could enable and streamline the process.

## Requirements and Process Diagrams

A key aspect of our planning has been diagramming the processes necessary to move records from the initial transfer through appraisal, accessioning, preservation, and into long-term storage. The diagrams, created using [Lucidchart](https://www.lucidchart.com/), are based on what we learned during the scenario mapping exercise and the resulting requirements that we defined for the appraisal and accessioning functions of the Project Electron transfer application. The diagrams map out the planned integrations with our current systems (ArchivesSpace and Archivematica), as well as notifications that will be triggered to donors and staff using the application. They include both automated machine functions as well as human actions like approving a transfer and adding an appraisal note. Defining the requirements and creating diagrams have been essential not just for our own planning purposes, but also as a document to share with RAC archival staff and Marist College collaborators for clarity and feedback during the design process.

## Wireframes

Finally, with the requirements and process diagrams complete, we created wireframes for the user interfaces of the application that would support the defined requirements.

These include:

* Views for an appraisal queue showing validated transfers and their associated metadata, allowing appraisal archivists to approve or reject transfers.
* An accessioning queue showing approved transfers grouped together into accessions by organization, creator, and record type, allowing an archivist to approve each accession.
* A view of an Accession record that allows the user to edit select fields, add notes, and save the accession.

## Hackathon 2

All of our planning work culminated in a second Hackathon with our collaborators at Marist College. The hackathon served as a kickoff for the second phase of development, and like the [first hackathon](http://blog.rockarch.org/?p=1815), was an effective way to push the development forward with the energy that comes from getting a team together in the same room. The hackathon resulted in more [Gherkin quality assurance (QA) tests](http://blog.rockarch.org/?p=1815) for the next phase of the project, the creation of new user interfaces based on the wireframes, and important knowledge sharing related to topics like PREMIS rights statements and the Django development environment that will allow us to communicate and work more efficiently as we move forward.
