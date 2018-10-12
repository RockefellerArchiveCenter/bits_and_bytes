---
id: 1815
title: Project Electron July Update
date: 2017-08-09T14:51:03+00:00
author: Hannah Sistrunk
layout: post
permalink: /?p=1815
categories:
  - Project Electron
tags:
  - Bag-It
  - hackathon
  - project electron
  - transfer
---
<span style="font-weight: 400;">We kicked off this past month with a hackathon, hosted by our Marist College partners, to plan and start developing the part of Project Electron that enables the transfer of digital records from donor/depositor organizations to the RAC over a secure network connection. We worked with the Marist College team, including Marist students, to diagram the transfer structure and dependencies, building from the </span>[<span style="font-weight: 400;">transfer specifications</span>](https://github.com/RockefellerArchiveCenter/project_electron/tree/master/transfer) <span style="font-weight: 400;">that we released in June and discussed in our </span>[<span style="font-weight: 400;">last blog update</span>](http://blog.rockarch.org/?p=1784)<span style="font-weight: 400;">. These specify the metadata and structural requirements for transfer and provide a </span>[<span style="font-weight: 400;">bag profile</span>](https://github.com/ruebot/bagit-profiles) <span style="font-weight: 400;">to validate bags from donors. Additionally, we created wireframes and started building out the user interfaces (UIs) to view and track transfer information, view error messages, and manage user and organizational accounts.</span><!--more-->

<span style="font-weight: 400;">This was the first Project Electron hackathon, and I found it to be a very effective way to dig into this work, as we were able to talk out problems and agree on strategy quickly and collaboratively. It was also easy to incorporate new perspectives and contributions from Marist students and new project members, like myself, in a face-to-face context.</span>

<span style="font-weight: 400;">In addition to successfully mapping the transfer structure, we made several important decisions at the hackathon to advance our work. We are:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Using Python to write the scripts for bag validation and virus checks</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Using </span><a href="https://www.djangoproject.com/"><span style="font-weight: 400;">Django</span></a><span style="font-weight: 400;"> as our web framework</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Using </span><a href="https://adminlte.io/"><span style="font-weight: 400;">AdminLTE</span></a><span style="font-weight: 400;"> and Bootstrap 3 to design our UIs</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Writing quality assurance (QA) tests for the transfer using </span><span style="font-weight: 400;"><a href="https://github.com/cucumber/cucumber/wiki/Gherkin">Gherkin</a></span>
</li>

<span style="font-weight: 400;">Building from the foundation and momentum of this hackathon, we are continuing development and looking forward to testing the transfer process very soon. Documentation remains a key aspect of Project Electron, and we will continue to share our work here and on GitHub. As always, we appreciate any questions, ideas, and feedback!</span>
