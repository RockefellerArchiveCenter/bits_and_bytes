---
id: 1474
title: 'Code4Lib 2016: On Authorities and Reconciliation'
date: 2016-03-18T09:12:09+00:00
author: Patrick Galligan
layout: post
guid: http://blog.rockarch.org/?p=1474
permalink: /?p=1474
categories:
  - Conferences/Education
  - Data Cleanup
tags:
  - data
  - linked data
  - metadata
  - reconciliation
---
Today I’m going to write about something that came up at Code4Lib, has been on my mind recently, and is near and dear to my heart: authority reconciliation.  You might remember [this blog post](http://blog.rockarch.org/?p=1333) from almost a year ago? If you don’t remember, or don’t have time to go back and read it, I’ll summarize the gist pretty quickly: reconciling large amounts of data against established authorities is complicated, time-consuming, and often frustrating, but we do the best that we can. I think my own experience in doing this type of work is why Christina Harlow’s talk “[Get Your Recon](http://2016.code4lib.org/Get-Your-Recon)” resonated so strongly with me.<!--more-->

Christina’s talk provides a brief narrative of her work with library metadata, and gives a few examples of metadata reconciliation projects she’s undertaken. One thing that everybody working with metadata should understand and accept is that your data is messy, and no matter how much you try, you will always have some normalization and reconciliation work to do. As obvious as it might seem, the answer is not to hire a student worker or intern to manually search names or subjects in the database and past them back into your system; we need sophisticated ways to deal with our metadata that won’t introduce tons of unnecessary errors. Let the computers do what they are good at.

That’s where [LODRefine](https://github.com/sparkica/LODRefine) and [OpenRefine](http://openrefine.org/) come in. However, as datasets and data munging/reconciliation grows more complex, these tools begin to fall flat; SPARQL reconciliation services can only do so much work. And even querying the API at id.loc.gov can have its limitations: timeouts, extra layers of data conversion, and some endpoints don’t even work with SPARQL reconciliation extensions (I’m looking at you Getty). When endpoints and SPARQL fail us, we can use [Linked Data Fragments](http://linkeddatafragments.org/) to help us explore the area between data dumps and SPARQL endpoints. Linked Data Fragments are conceptual frameworks that give us new ways to look and tap into RDF triples using selectors (subject URI, SPARQL query), metadata (variable names, counts), and controls (links or URIs to other fragments).

However, even using Linked Data Fragments we have a ton of authority matching and data reconciliation work to do, and we’re accepting ever-growing amounts of materials, which will need their own metadata creation and enrichment. So what’s the point of this post? I’m not entirely sure. I just wanted to talk about data reconciliation and how hard it is, something that Christina managed to tap into with her talk. In case you’re wondering, Christina has created her own [metadata reconciliation tool](https://github.com/cmh2166/lc-reconcile) that provides a great place to start from for anyone thinking about this work. We’re stumbling towards accurate Linked Data using the tools we can find and hack together, but it’d be great to get together and create a system that is generalizable to many people. Let’s get together and think about this a bit, there are a lot of smart people out there working on this, and it’d be awesome to help each other out. Go forth and experiment!