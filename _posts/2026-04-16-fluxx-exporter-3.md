---
title: "Announcing Fluxx Exporter version 3"
date: 2026-04-16T09:00:00
author: Hillel Arnold
layout: post
categories:
  - Software and Systems
  - Collaboration
tags:
  - born-digital transfer
  - fluxx
  - grants data
  - grants management systems
excerpt_separator: <!--more-->
---

We just released version 3.0 of [Fluxx Exporter]( https://github.com/RockefellerArchiveCenter/fluxx_exporter), an open-source tool that integrates with the [Fluxx](https://www.fluxx.io/) grants management system to allow users to select and export grant information for internal or external uses including long-term preservation, researcher access, and organizational learning and evaluation. The changes to this version of the application are focused largely on simplifying installation and initial setup. <!--more-->

When we released [the last major version of Fluxx Exporter](https://blog.rockarch.org/making-it-better) in August of last year, we attempted to make the application easier to install and configure by bundling all application dependencies and code as a single file. However, this introduced a new challenge: files from unknown sources are blocked by most operating systems, as well as enterprise security software. 

In version 3 of Fluxx Exporter we have now signed the compiled executable to verify that it comes from a known organization and is free of malicious software, which will allow end users to download, install, and run the application with minimal warnings. This is the first time we’ve needed to sign any of the code we own as part of the release process, so we learned a lot about certificates as well as operating-system specific wrinkles. I’m deeply grateful to Patrick Galligan, our DevOps analyst, for leading this initiative and making sure everything he learned was passed on and embedded in documentation and workflows.

We also added some new features to enhance the application:
- Users can now add multiple filters to an export job, supporting complex queries to ensure that very specific sets of grant records can be targeted for export.
- It is also now possible for users to choose which document types and versions they want to export. This supports differing organizational practices for attaching files (and versions of files) to grant records and ensures that only the desired files are exported.
- We made a number of minor improvements to the application user interface and documentation to clarify language and provide additional instructions for local development of the application.
- Finally, thanks to Project Associate Andrea Cadornigara, we’ve added a snazzy new logo for the application!

While all software is a work in progress, at this point we consider Fluxx Exporter to be feature-complete, so our effort will shift to providing maintenance updates to ensure the application dependencies continue to be updated. We continue to be grateful to our partners at Columbia University’s Rare Books and Manuscripts Library, the Ford Foundation, and the Carnegie Corporation for their support in making a good idea a reality!
