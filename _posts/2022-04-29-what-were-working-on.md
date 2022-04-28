---
title: "What We're Working On"
date: 2022-04-29T09:00:00
author: Hillel Arnold
layout: post
categories:
  - Collaboration
  - Software and Systems
tags:
  - accessibility
  - infrastructure
  - access
  - usability
  - collaboration
excerpt_separator: <!--more-->
---
A while ago, I posted a [general update](https://blog.rockarch.org/what-were-working-on)
laying out the major areas that the D-Team was working on. A bit over six months
later, it seems like a good time to update on where our focus is now.

<!--more-->

## Infrastructure
We continue to devote much of our energy to improving the underlying infrastructure
which supports our applications. We’ve implemented [Graylog](https://www.graylog.org/),
a log management tool, and are currently refining how we use it by building out
dashboards and alerts so we can proactively monitor and quickly remedy any systems
issues.

We’re also embarking on a substantial project to deploy all of our locally developed
applications as [Docker containers](https://www.docker.com/). This will involve
learning about new technologies like [Kubernetes](https://kubernetes.io/), as well
as building on what we already know about containerization. Stay tuned for a more
detailed blog post about that work.

## Access to Archival Collections and Data
Over the past couple of years, we’ve invested a fair amount of time into improving
access to the RAC’s archival collections and data. Following up on the
[launch of our re-visioned discovery platform](https://blog.rockarch.org/introducing-dimes-tng)
(known as DIMES), we’ve recently [launched the RAC Collections API](https://blog.rockarch.org/announce-api),
which provides public access to the underlying data used in DIMES.

We’ve also been working with the Processing Team to enhance data about people,
families, and organizations available in DIMES. We’re close to launching enhanced
pages which pull in data from external sources like
[Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page),
[Wikipedia](https://www.wikipedia.org/) and the
[Social Networks and Archival Context Cooperative](https://snaccooperative.org/).

Another substantial ongoing initiative in this area is scaling processes which
support the availability of digitized content available in DIMES. This includes
turning several manual and/or script-based processes into regular services which
make use of the event-based infrastructure that we created for Project Electron
as well as [automating the Archivematica ingest process](https://blog.rockarch.org/am-aspace-integration-update).

We’ve also just completed a review of our current practices and requirements for
PDFs created as access derivatives of digitized content. This assessment project
will feed into three separate initiatives:
-	Scaling researcher-driven digitization processes by further automating PDF creation.
-	Improving machine-enabled access to digitized content by improving OCR quality.
-	Implementing the [IIIF Content Search API](https://iiif.io/api/search/1.0/) in DIMES.

## Usability and Accessibility
The D-Team is committed to ensuring that every system and interface we implement
or customize is as usable and accessible as possible for the largest number of
people possible. As a result, building organizational awareness and competence in
these areas has been and continues to be a major area of focus for us.

The Usability Observers team, which we put in place during the
[development of DIMES](https://blog.rockarch.org/dimes-ux) continues to provide
invaluable insight and support for ongoing usability testing.

We’ll also be following up on the development of our
[Style Library and Guide](https://blog.rockarch.org/style-library-and-guide) by
implementing those styles across our web properties. In addition to aligning the
visual language, one of the main goals of this project was to raise the accessibility
baseline across all of our web properties.

We’ve just embarked on a project to create an accessibility statement for the RAC.
An accessibility statement is typically found on an organization’s website and
articulates its commitment to accessibility and how people with disabilities can
access and use its services, identifies existing and known barriers or limitations
on accessibility, and provides instructions for reporting an issue or requesting
accommodations. While this document rooted in our current state of accessibility,
it can help us identify and elucidate future projects and plans related to accessibility.
One of these will be a comprehensive web accessibility audit of all our web properties
to bring them into compliance with WCAG 2.1 AA guidelines.

## Collaboration
Underlying all of our work is an ongoing commitment to collaboration, both as a
means of creating excellent work products and more importantly as a way of building
skills and leadership across the organization. Almost of the projects mentioned
above are collaborative in nature and draw on the expertise and perspectives of
our colleagues across the organization.

We’re also working on some other projects which don’t fit neatly into the categories
above, but are important precisely because they involve working very closely with
other teams:
-	With some folks from the Processing Team, we’re updating
[DACSspace](https://blog.rockarch.org/getting-more-out-of-and-into-your-collections-management-system-dacsspace)
– a tool to evaluate resource records in an ArchivesSpace instance for DACS compliance
– to make it more extensible and maintainable. Working on this project together
has reminded all of us just how far we’ve come as developers and maintainers of code.
-	With members of Collections Management and the Records and Information Management
Program, we’re revising user documentation for the transfer of digital records.
-	In collaboration with the Reference Team, we’re looking at ways to streamline
the cost estimation process for digitization requests.
There’s more that we’re doing that’s not articulated here, but if you’re interested
in hearing more about any of these efforts, or if you’ve recently done something
similar, please reach out! We’re always interested in learning from our community.
