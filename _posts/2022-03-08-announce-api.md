---
title: "Announcing the Release of Our Public Collections API"
date: 2022-03-08T08:00:00
author: Hannah Sistrunk
layout: post
categories:
  - Software and Systems
tags:
  - access
  - APIs
  - data
  - description
excerpt_separator: <!--more-->
---
The Rockefeller Archive Center is excited to announce the release of our Collections Data API! As part of our commitment to open access, we’ve made our archival description widely available as structured data to open new avenues of access and inquiry through data visualizations, statistical analysis, and other applications that expand the questions that people be asked about our collections.  <!--more-->

An API (Application Programming Interface) is a set of instructions that tells one software application how to "talk to", or transmit data, to another. It’s a way for folks to query our collections and get back usable data to create their own applications and projects. In our case, this data includes all the descriptive information about our archival records that archivists create to provide access and context to the records, including the collections, associated people, organizations, and families, and controlled terms describing topics, geographic places, or record formats. 

## Explore the API

See the [Getting Started with our Collections API](https://docs.rockarch.org/argo) documentation to learn more about what data is available and how access it. You can also jump straight to our browsable API at [https://api.rockarch.org](https://api.rockarch.org) where you’ll find the API endpoints, or points of entry to communicate with the API, and the associated data in the JSON format. For example, see what is returned in the browsable API for a single collection, defined as an intellectually significant group of records, through the collections endpoint in this example of the Rockefeller Foundation [Officers' Diaries collection](https://api.rockarch.org/collections/iqYdKDR7vDiPyXDWrD9R9C). You can find that [same Officers’ Diaries collection in DIMES](https://dimes.rockarch.org/collections/iqYdKDR7vDiPyXDWrD9R9C), our archival discovery site, to see how we used this data in our own user interface, choosing to present the collection along with its associated parent and child collections within the Rockefeller Foundation records. 

We’ve also started to explore using the API ourselves to understand and visualize our collections in different ways. You can read more about some of those experiments on the blog: Using the RAC Collections API to Create Visualizations] (https://blog.rockarch.org/using-the-rac-collections-api-to-create-visualizations). 

## How We Got Here

We [released DIMES last year](https://blog.rockarch.org/introducing-dimes-tng) as part of an effort that included the development of new supporting backend infrastructure including our [data pipeline](https://blog.rockarch.org/making-connections) that fetches, merges, transforms, and indexes data created by archivists in our archives management systems (ArchivesSpace). As part of that effort, we also built [argo](https://github.com/RockefellerArchiveCenter/argo), an application that provides an API that we use to connect the indexed data with the DIMES frontend website. So, while we built this API to power DIMES, we always understood that this flexible architecture meant that the data could be made available to any other internal or external application. With today’s release of that API, the data is available! 

It’s also important to note that in the past few years, the RAC’s processing archivists have tackled some important [data cleanup work](https://blog.rockarch.org/categories#Data+Cleanup) focused on agents (primarily people and organizations) and dates, and continue to take on cleanup and enhancement projects. This work, along with new collections being processed all the time, means the quantity and quality of the data available through the API will continue to improve and grow.  

## Inspiration

Looking to the work of our colleagues in allied cultural institutions, we understand that the release of our collections data is part of a wider set of values and methods that aim to increase broad and equitable access to cultural heritage materials and historical records in archives, libraries, and museums. We gained insight and inspiration from many other institutions, particularly our friends in museums and libraries who continue to innovate in this space including [Cooper Hewitt](https://collection.cooperhewitt.org/api/), [Art Institute of Chicago](https://api.artic.edu/docs/), [NYPL Digital Collections](http://api.repo.nypl.org/), [TROVE](https://trove.nla.gov.au/about/create-something/using-api) from the National Library of Australia, [University of British Columbia Library](https://open.library.ubc.ca/research), [The Brooklyn Museum](https://www.brooklynmuseum.org/opencollection/api/) and many others.  

## We'd Love to Hear From You!

Let us know what you discover and build using our API via Twitter @rockarch or email at archive@rockarch.org. We’re committed to providing access to the data, so please let us know if you have any trouble using the API. 
