---
id: 393
title: Integrating Archivematica, ATReference and XTF
date: 2013-01-30T20:21:14+00:00
author: Hillel Arnold
layout: post
permalink: /?p=393
categories:
  - Digital Preservation
  - XTF
tags:
  - access
  - Archivematica
  - ATReference
  - digital accessioning workflow
  - Digital Preservation
  - Foundation for Child Development
  - special projects
---
Last week, we had a site visit from Evelyn McLellan, a Systems Archivist at Artefactual (the company that is developing Archivematica). We discussed a number of issues related to the integration of Archivematica, XTF and ATReference.<!--more-->

A large part of our discussion was focused on workflows and mechanisms to identify and appropriately handle materials with use and access restrictions. These include the ability to mark restricted digital objects ingested into the Archivematica system with the specific restriction placed on them, and then to revise that restriction, in cases where copyright expires, donor agreements change, a period of restriction ends, or something else happens which involves restrictions being lifted or added. We also came up with solutions to transfer the information about these restrictions to ATReference, so staff can see this information and appropriate actions can be taken in regards to display and use of digital objects.

The display of digital objects is also something we talked about extensively. In order for this to happen, we need to have some way of linking up the access copies of digital objects (contained in Dissemination Information Packages, or DIPs) to our finding aids. This means that Archivematica has to assign each digital object a unique identifier, and then pass that information along to ATReference in the form of a Unique Resource Identifier (URI) that can be exported in a finding aid and displayed in our XTF system. We’ll be making modifications to XTF in order to display these objects in the system.

We’ll be using the digitized FCD microfilm as a pilot project to test all of this functionality out. Once we manage to get that done, and to resolve any unanticipated problems that arise, we’ll move on to the digitized RF Officers’ Diaries.
