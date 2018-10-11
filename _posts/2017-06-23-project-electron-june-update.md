---
id: 1784
title: Project Electron June Update
date: 2017-06-23T15:56:21+00:00
author: Hillel Arnold
layout: post

permalink: /?p=1784
categories:
  - Project Electron
tags:
  - Bag-It
  - project electron
  - standards
  - transfer
---
This month we’re excited to announce the release of the first version of a [specification for transferring digital records](https://github.com/RockefellerArchiveCenter/project_electron/tree/master/transfer) to the RAC over a network connection. In line with our [project value](http://projectelectron.rockarch.org/?#values) of supporting archival practices and standards, we’ve built many parts of this specification on existing standards and frameworks such as [BagIt](https://en.wikipedia.org/wiki/BagIt), [BagIt Profiles](https://github.com/ruebot/bagit-profiles), [Activity Streams](http://activitystrea.ms/), and [OAIS](https://en.wikipedia.org/wiki/Open_Archival_Information_System). We believe this approach will make the products we come up with more easily reproducible at other institutions, which is another one of our project values.<!--more-->

There are three basic pieces to the proposed transfer specification:

  * A document which outlines the [major requirements for transfers of digital records](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/transfer/requirements.md), including required metadata, structure, notifications, transfer protocol and size, as well as a diagram which provides an [overview of the transfer process](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/transfer/transfer-process-diagram.png).
  * Requirements for the [structure of transfers of digital records](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/transfer/bagit-specification.md), which are based on the BagIt specification. We also included a [BagIt Profile](https://github.com/RockefellerArchiveCenter/project_electron/blob/master/transfer/organizational-bag-profile.json) which encodes these requirements in a machine-readable format to ensure and facilitate compliance.
  * Last, we also created a number of Python scripts to [generate and validate sample bags](https://github.com/RockefellerArchiveCenter/project_electron/tree/master/transfer/example-scripts). These allow users to point to whatever files they want to include in a sample bag’s payload directory.

We’d be very happy to hear from you if you have comments or questions about these documents!

We continue to connect with other information professionals working on projects seeking to address the many challenges of managing digital records. This month we’ve been talking to Andy Weidner from the [Bayou City DAMS project](http://journal.code4lib.org/articles/12342), and Grant Hurley from the [Scholar’s Portal](http://scholarsportal.info/). We’re grateful to have such smart colleagues who are so generous with their time!