---
title: "Making it Better: the next version of Fluxx Exporter"
date: 2025-08-25T10:00:00
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
  - usability
excerpt_separator: <!--more-->
---
We’ve just completed a second round of development on the [Fluxx Exporter](https://github.com/RockefellerArchiveCenter/fluxx_exporter), which sought to address bugs and usability issues we learned about from user. The new version of the application substantially improves ease of installation and configuration and enhances existing functionality in several key areas. Read on for a summary of what we did and what’s next. <!--more-->

## What We Did and How We Did It
After wrapping user testing in the spring, Hannah turned the [bugs, usability challenges, and feature gaps we identified](https://blog.rockarch.org/fluxx-exporter-testing) through that process into clear and actionable issues. This was a key step and allowed us to scope and organize a two-week sprint with participants from the RAC as well as Columbia University’s Rare Book and Manuscript Library.

During this incredibly productive period, we were able to substantially move the application forward, despite other priorities that divided our collective time and attention. Our work was focused on four areas:
-	**Simplifying application install and configuration**: Perhaps the most significant problem identified during user testing was the difficulty of installing and configuring Fluxx Exporter, particularly for users with access to limited technical resources. To alleviate this, we now bundle all application dependencies and code as a single file. Additionally, we added new functionality for users to import Fluxx API tables and fields using the application’s UI, and improved guidance in some of the forms used to create export jobs.
-	**Debugging export mechanics**: We also fixed several interrelated bugs in the logic of the export process which resulted in unexpected behaviors, including duplicate field and table definitions, export of unexpected fields, and large exports failing due to API rate limiting. 
-	**Improving the user interface**: We were able to update the application’s user interface to provide better feedback to users about the status of export jobs, and to support better search and navigation of lengthy lists of fields.
-	**Enhancing user-facing documentation**: A number of the issues identified during user testing could have been avoided or remediated with better user-facing documentation. We conducted a comprehensive review of user-facing documentation to clarify, add to a asdfnd structure documentation.

## What’s Next
Although we made some really good progress in this release of the Fluxx Exporter, there are some things we didn’t get to, and a few new issues we’d like to address. 

The most significant of these is implementing [code signing](https://en.wikipedia.org/wiki/Code_signing) for the single-file executable. Although the install process has been greatly simplified through the creation of a compiled executable as described above, a new challenge has been introduced. Files from unknown sources are by default (and a very reasonable one at that!) blocked by most operating systems, not to mention security software. Although there are ways for users to circumvent these protections, we plan to sign the compiled executable, which verifies that it comes from a known organization and is free of malicious software, and will allow users to run the application without warnings. 

In addition, we hope to make a few other enhancements to the application:
-	Supporting the use of multiple filters in an export job
-	Allowing users to choose which files they want to export 
-	Provide additional guidance on how to use the Fluxx table API documentation
-	Improve documentation for local development.

We’re planning to release another version of Fluxx Exporter before the end of 2025. If you’re interested in supporting this work, please reach out!
