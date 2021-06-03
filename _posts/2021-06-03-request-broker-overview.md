---
title: "Request Broker: An Overview"
date: 2021-06-03T10:00:00
author: Hillel Arnold
layout: post
categories:
    - RACcess
    - Project Electron
tags:
    - systems
    - integration
    - DIMES
    - Aeon
    - Request Broker

excerpt_separator: <!--more-->
---
As Hannah wrote back in [February](https://blog.rockarch.org/introducing-dimes-tng),
the new DIMES we’ve just released is more than one system; it could more accurately
be described as a system of systems. One of those pieces is the
[Request Broker](https://github.com/RockefellerArchiveCenter/request_broker),
which facilitates requests for records, either onsite in our reading rooms, via
digitization processes, or by downloading or emailing citations. This post
describes that system in more detail, including the motivation behind it, the
process by which it was developed, and our future plans.

<!--more-->
## Why a Request Broker?

The Request Broker was born from frustration. In our previous version of DIMES,
the logic which supported users’ ability to submit requests for records was
embedded throughout the application: in custom Javascript, display templates,
and indexing logic. Because of this, it was difficult to test the implications
of code changes, which meant that unintended consequences were usually discovered
by end users. In addition to this creating a frustrating user experience, it also
resulted in a slow trickle of bug reports delivered to the Digital Strategies via
our reference staff. The infrequency of these issue reports combined with the
tangled nature of the code made for a very painful debugging process, and often
meant that I spent a lot of time figuring out what I had changed previously and why.

Additionally, a significant number of requests sent to Aeon (our request management
system) were not fulfillable because the requested material was restricted, already
available in digital form, or for some other reason. Consequently, a significant
amount of our Reference Team’s time went to monitoring the various Aeon queues and
parsing fulfillable from unfulfillable requests. This was not a good use of their
time or expertise.

## Initial Concept

Once we decided to develop a new interface for DIMES, one of the things we knew
we needed to get right was this piece of the application. Our initial
[RFC](https://github.com/RockefellerArchiveCenter/project_electron/blob/base/rfcs/006-request-broker-service.md)
for the Request Broker articulates the conceptual approach we wanted to take: a
layer between systems that would allow users to “check out” once they’d found
records they were interested in by submitting a request to view them in the reading
room or having them delivered as digitized assets; or getting citations about those
records via email or a spreadsheet. Because of the problems we’d had in the previous
version of DIMES, we opted to decouple the logic for these features from the new
DIMES frontend, and instead to provide more intentional points of integration with
the Request Broker via API endpoints. This allows us to isolate code which compiles
and structures data for requests in a single application, and provides much better
mechanisms for testing that code. It also means that our frontend only needs to know
about data that helps users find and evaluate records and that additional data -
like the location coordinates of those records - can be fetched from the systems
which store it and added to the data which is passed along to request management
systems.

In order to limit the number of unfulfillable requests in Aeon, we also wanted
to implement a pre-request check which would prevent requests which could not be
fulfilled from making their way into Aeon. As defined in the RFC this check marks
items as either “submittable or “unsubmittable” based on three criteria:
- Is the item restricted? We determine this by evaluating structured rights
  statements and Conditions Governing Access notes from ArchivesSpace. Items are
  parsed into three categories:
  - Restricted - the item is definitely restricted and can’t be requested. The item
  is marked as “unsubmittable” and a human-readable reason for this restriction
  (usually the contents of the Conditions Governing Access Note) is returned.
  - Conditionally restricted - the item _might_ be restricted, but it also might be
  possible for a researcher to see the item under certain conditions. The item is
  marked as “submittable”, and we return the human readable text about why we think
  the item might be restricted, and what a user would have to do to gain access
  to it, which will be sent along with the request. In Aeon, this means that the
  request will end up in a different queue where an archivist can review it and
  determine appropriate next steps.
  - Open - the item is definitely open and can be requested. The item is marked
  as “submittable”.
- Is a digital representation of an item available? If we’ve already digitized
  something, we mark the request as “unsubmittable” and provide a link to the
  digitized content.
- Does the item have a container associated with it? In some rare cases (largely
  with some of our legacy description) no containers are associated with an item,
  which means we have no way of knowing where it is, so items which meet that
  criteria are marked as “unsubmittable”.

## Development

Once we’d developed a clear idea of what we wanted the Request Broker to do, it
was time to dig in and start writing code. The entire Digital Strategies team
participated in this process, through the two-week sprint model we solidified
during the [ArchivesSpace API Helpers](https://blog.rockarch.org/not-everything-is-miscellaneous)
project. This model has worked really well for us particularly in our current
remote context, providing a light structure and roles which ease collaboration.

The initial development work was completed quite quickly; most of the work was
done in about six weeks. More importantly, everyone on the D-Team now has a strong
understanding of application logic, and has a chance to weigh in on implementation
details. This means that any of us can jump in to debug and fix problems when those
inevitably arise. Another thing we were able to do was ensure that unit tests were
written along with code, meaning we ended up with an application with verifiable
(and easily testable) inputs and outputs.

We also ended up using the results of our earlier ArchivesSpace API Helpers project,
which have since been included in the [ArchivesSnake](https://github.com/archivesspace-labs/ArchivesSnake)
library. Some of the functionality we added, for example the ability to search
note text for particular strings, came in useful as we developed the application.

One thing we did change as we built out the application was to separate out the
pre-request check from the submission of data. Implementing these as separate API
endpoints helped improve performance and more flexibly support interaction patterns in
the frontend.

## Future enhancements

So far, the Request Broker has proven to be a useful piece of the DIMES infrastructure,
allowing us to easily debug and adjust to user needs. Going forward, we plan to
implement support for new Aeon API endpoints (coming in version 5.1) for the
creation of requests and listing of requests by user. This should  allow us to
develop a more meaningful integration between DIMES and Aeon, without forcing
users to use the Aeon interface in order to create requests.
