---
title: "Getting Things Moving: Notes on Improving Data Pipeline Performance"
date: 2020-09-04T09:00:00
author: Hillel Arnold
layout: post
categories:
    - Project Electron
tags:
    - performance
    - data

excerpt_separator: <!--more-->
---

Following on the [initial implementation](https://blog.rockarch.org/making-connections) of our data pipeline back in March, we’ve been looking closely at ways to increase the performance of the pipeline, by which we mean how many objects the pipeline is able to process in a given time interval. This has been a fairly lengthy process with a lot of learning along the way, so I thought it would be good to document some of what we’ve learned here, both for our future reference as well as for the benefit of someone else trying to do this kind of thing in the future.

 <!--more-->

 It may be useful, at the outset, to lay out why we invested so much time in making the data pipeline as fast as possible. In brief, a performant data pipeline allows us a lot more latitude in experimenting with data structures and values, giving us the ability to quickly add or remove data elements. Now that we’re building out the frontend for our new discovery environment, this flexibility has already paid off, and allowed us to course-correct when we make mistakes without huge penalties.

 Because we were trying to minimize our technical debt, we chose to build out the data pipeline in [Django](https://www.djangoproject.com/), a Python web framework in which we’re pretty fluent, thanks to our work on [Aurora](https://github.com/RockefellerArchiveCenter/aurora) and [Zodiac](https://github.com/RockefellerArchiveCenter/zodiac). It also allowed us to take advantage of libraries like Odin, which provide a familiar ORM-like interface for mapping between data objects. However, like most technical choices, there are also downsides. Django (and Python) are not the fastest languages, and are single-threaded, so we incurred a performance hit from that choice. One thing on our wish list is to look at other languages and frameworks as replacements for our current implementation, but we’re not likely to get to that anytime soon.

 However, even given the restrictions of Django, there’s a lot that can be done to improve performance. We saw major gains from the following:
 - Reducing the number of HTTP calls.
   - When fetching data from the ArchivesSpace API, we made use of the [`_resolve` parameter](https://archivesspace.github.io/archivesspace/api/#refs-and-resolve), which allows data from multiple objects to be fetched in a single call. For example, when fetching a resource record, it’s possible to resolve all agent records as well, so for a resource record with three linked agents, you end up with one (slightly slower) HTTP call instead of four.
   - When passing data between Python methods, we bypassed HTTP altogether and passed objects in memory, which unsurprisingly resulted in huge performance gains.
 - Allowing multiple tasks to run at once. We used a library called [asyncio](https://docs.python.org/3/library/asyncio.html) which allows for a form of concurrency in Python. At a very basic and conceptual level, this is a useful strategy for processes which are limited by input/output capacity (which our data pipeline is) rather than CPU processing capacity. If you want a deeper dive, I found [this detailed tutorial](https://realpython.com/async-io-python/) to be quite useful. There was definitely a learning curve to working with asyncio, but the investment of time paid off in much improved performance.

 Last, thanks to conversations with folks at the University of Denver, we substantially simplified our Elasticsearch documents, removing parent-child join relationships and reducing the number of documents. This made a drastic difference in the complexity of the code necessary to index, and also decreased the amount of time it took to index these documents.

 Overall I’d say the lessons I take away from the last few months of focusing on improving the data pipeline’s performance are:
 - Know what’s throttling your application’s performance. This will likely require a variety of tools and approaches, but at a basic level you need to know if your application is CPU-bound or I/O bound.
 - Know what “good enough” looks like. It’s always possible to keep tweaking, but you’ve got to draw the line somewhere.
