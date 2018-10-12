---
id: 1610
title: Cross-Origin Resource Sharing for ArchivesSpace
date: 2016-09-13T07:52:57+00:00
author: Hillel Arnold
layout: post
permalink: /?p=1610
categories:
  - Software and Systems
tags:
  - APIs
  - ArchivesSpace
  - Javascript
---
We’ve written a lot on this blog about [things we’re doing with the ArchivesSpace API](https://github.com/RockefellerArchiveCenter/scripts/tree/master/archivesspace), ranging from [find and replace operations in notes](https://github.com/RockefellerArchiveCenter/scripts/blob/master/archivesspace/advancedNoteEdit.py) to [reporting on our DACS compliance](http://blog.rockarch.org/?p=1581) across our repository. It should be pretty obvious we’re big fans of the power and flexibility it provides to automate what otherwise would be some pretty tedious and error-prone, and also that the data model is getting us to [think about archival description](https://github.com/helrond/staticAid) outside of the EAD box.<!--more-->

However, if you want to use the API, you need to have some familiarity with a scripting language. We’ve used a lot of Python, mostly because it’s super easy to learn and also because it’s used in some of our other systems like Archivematica. Interaction with the API usually happens over the command line, [which can be a bit of an intimidating interface](http://blog.rockarch.org/?p=1483).

It doesn’t have to be that way! We can use the ArchivesSpace API to create user-friendly interfaces with widely-known web programming languages like HTML and JavaScript.

There’s a problem though: for security reasons, JavaScript restricts HTTP requests to within the same domain as the origin, known as the [Same-Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policyhttps://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). So, for example, you can only make a GET request using JavaScript for something in the rockarch.org domain from a page in that same domain.

Fortunately, there’s a solution: [Cross-Origin Resource Sharing (CORS)](http://enable-cors.org/). With a huge assist from the ever-helpful [Mark Triggs](http://dishevelled.net/) at [Hudson Molonglo](http://hudsonmolonglo.com/), I put together [as-cors](https://github.com/RockefellerArchiveCenter/as-cors), an ArchivesSpace plugin that implements CORS in your ArchivesSpace instance using Rack middleware. [As the README suggests](https://github.com/RockefellerArchiveCenter/as-cors/blob/master/README.md#usage), you’ll almost certainly want to be more specific in the Access-Control-Allow-Origin when implementing this in production. You’ll also likely need to take a look at the allowed routes.

This opens up a world of possibilities! You could easily make a web page that uses a JavaScript library like [D3](https://d3js.org/), [Highcharts](http://www.highcharts.com/) or [Chart.js](http://www.chartjs.org/) to display data like your incoming accessions to internal or external stakeholders. You could also use this to create customized interfaces for local purposes.

For example, we’ve built a single-page application that allows users to [search for archival objects by identifier](https://github.com/RockefellerArchiveCenter/find-it), and then returns information about that object (including its location), as well as the resource record with which it’s associated. Doing this in ArchivesSpace currently takes a lot of scrolling and clicking, and we wanted to make this process as simple and fast as possible for staff who digitizing materials as well as adding locations to researcher requests for materials in Aeon.

This means that we can easily build and maintain these interfaces because they only rely on a small number of files written in common languages. And since we don’t have to invest a lot of time in making these pages and keeping them running, it will be much easier to toss them out when they are no longer necessary.

Let’s all go build some things!
