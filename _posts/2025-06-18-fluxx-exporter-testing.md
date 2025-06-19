---
title: "Fluxx Exporter Update: Testing the User Experience and Planning A New Release"
date: 2025-06-19T10:00:00
author: Hannah Sistrunk
layout: post
categories:
  - Software and Systems
  - Collaboration
tags:
  - born-digital transfer
  - fluxx
  - grants data
  - grants management systems
  - usability
excerpt_separator: <!--more-->
---
In January, we [announced the initial release of the Fluxx Exporter tool](https://blog.rockarch.org/introducing-the-fluxx-exporter), an open-source tool that integrates with the grants management system [Fluxx](https://www.fluxx.io/) for the purposes of automating exports of select elements of grant records. In the months since its release, our team responsible for continued development and maintenance of the tool (in close consultation with our Columbia University Rare Book & Manuscript Library partner) tested the application with a cohort of Fluxx users at five institutions to identify opportunities to improve the tool based on user experience and feedback. I’d like to share the results of that testing and our planned next steps to address usability issues and add new functionality.

<!--more-->
{% include image.html dir="2025/06/" file="fluxx-exporter-homepage.png" description="The Fluxx Exporter tool website interface showing two saved export jobs." %}

## How we tested the Fluxx Exporter

Our Fluxx Exporter tool testers were volunteer participants from five institutions representing organizations of varying sizes and levels of IT support that use Fluxx to manage grants:

- Charles Stewart Mott Foundation
- Ford Foundation
- Hogg Foundation for Mental Health
- Ralph C. Wilson, Jr. Foundation
- Russell Sage Foundation

Testing consisted of an unmoderated asynchronous usability study designed to prompt participants to work through actions that targeted the primary features and functions of the tool, and to provide feedback on the usability of the application documentation, installation process, and user interface. The testing also guided participants to articulate opportunities for application enhancements based on their individual Fluxx use cases.

When users encountered bugs that blocked application installation actions, the Fluxx Exporter team addressed these immediately to prevent other users from encountering the same barriers. Finally, two participants joined us for a follow-up meeting to help diagnose errors and share additional feedback.

## What we learned from testing

Overall, users were pleased with the interface and optimistic about the tool’s potential, describing it as “very simple and straight-forward to use,” having the “potential to be super useful,” and “a great tool that will be very useful to the sector.”

<blockquote>A great tool that will be very useful to the sector.</blockquote>

The most salient barriers to use were related to installing and configuring the application, with many users citing a lack of technical capacity to support setting up the application and using the command-line to configure it. We also found that it was tough for users who haven’t worked with the Fluxx database backend or API to easily understand Fluxx Exporter Tool options like how to construct filters, and how Fluxx tables and associated field names map to what users see in the Fluxx frontend in the form of cards and their connected files. Finally, testing revealed some bugs and unanticipated errors running the tool in different environments.

From our feedback and discussions with testers, we also learned more about different organizations’ use cases related to exporting files from Fluxx, including the need for files attached to tables other than the grant request table, and to limit which files are exported.

## What’s next for Fluxx Exporter

Over the next several weeks, we’ll be working on a new release to address the [issues and add new features](https://github.com/RockefellerArchiveCenter/fluxx_exporter/issues) that our testers highlighted. We’ll be running a community sprint from July 7-25, and welcome broad participation -- please reach out if you’re interested!

The following updates are now included in our roadmap to enhance Fluxx Exporter:

1. Simplify the installation process by bundling the application in a single executable file. This will allow direct and consistent access to the local filesystem for users, and eliminate the need to install specific versions of dependencies like Python and Docker.
2. Improve export location choices, ideally to allow users to browse their computer to select a location.
3. Improve the Fluxx table API documentation upload process, which may consist of building upload functionality directly into the application interface.
4. Update documentation to clarify how the Fluxx backend data structure differs from the frontend data visible in Fluxx cards, and to provide more information about filtering options.
5. Make improvements to the user interface to better handle the experience of navigating the large number of Fluxx table fields available.
6. Allow users to choose which files to export, instead of defaulting to all the files associated with the grant request table.
7. Fix bugs.

<div style="max-width: 400px;">
{% include image.html dir="2025/06/" file="fluxx-export-location-screenshot.png" description="One planned enhancement in the new release will enable users to browse for an export file location on their computer." %}
</div>

We continue to be committed to the development and maintenance of this tool as free and open source, centering the experience of Fluxx users with the goal of providing an export solution that is flexible and widely applicable across the sector. Follow our development work on the [public GitHub repository](https://github.com/RockefellerArchiveCenter/fluxx_exporter), and feel free to reach out to us at [archive@rockarch.org](mailto:archive@rockarch.org).

Thank you so much to our generous testing cohort for their time and thoughtful feedback that has already helped improve this tool for everyone!
