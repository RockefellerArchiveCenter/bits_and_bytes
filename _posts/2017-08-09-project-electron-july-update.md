---
post_id: 1815
title: Project Electron July Update: Hackathon
date: 2017-08-09T14:51:03+00:00
author: Hannah Sistrunk
layout: post
redirect_from: /?p=1815
categories:
  - Project Electron
tags:
  - Bag-It
  - hackathon
  - project electron
  - transfer
excerpt_separator: <!--more-->
---
We kicked off this past month with a hackathon, hosted by our Marist College partners, to plan and start developing the part of Project Electron that enables the transfer of digital records from donor/depositor organizations to the RAC over a secure network connection. We worked with the Marist College team, including Marist students, to diagram the transfer structure and dependencies, building from the [transfer specifications](https://projectelectron.rockarch.org/transfer/) that we released in June and discussed in our [last blog update](/project-electron-june-update). These specify the metadata and structural requirements for transfer and provide a [bag profile](https://github.com/ruebot/bagit-profiles) to validate bags from donors. Additionally, we created wireframes and started building out the user interfaces (UIs) to view and track transfer information, view error messages, and manage user and organizational accounts.<!--more-->

This was the first Project Electron hackathon, and I found it to be a very effective way to dig into this work, as we were able to talk out problems and agree on strategy quickly and collaboratively. It was also easy to incorporate new perspectives and contributions from Marist students and new project members, like myself, in a face-to-face context.

In addition to successfully mapping the transfer structure, we made several important decisions at the hackathon to advance our work. We are:

* Using Python to write the scripts for bag validation and virus checks
* Using [Django](https://www.djangoproject.com/) as our web framework
* Using [AdminLTE](https://adminlte.io/) and Bootstrap 3 to design our UIs
* Writing quality assurance (QA) tests for the transfer using [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)

Building from the foundation and momentum of this hackathon, we are continuing development and looking forward to testing the transfer process very soon. Documentation remains a key aspect of Project Electron, and we will continue to share our work here and on GitHub. As always, we appreciate any questions, ideas, and feedback!
