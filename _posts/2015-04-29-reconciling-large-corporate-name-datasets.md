---
id: 1333
title: Reconciling Large Corporate Name Datasets
date: 2015-04-29T14:13:59+00:00
author: Patrick Galligan
layout: post

permalink: /?p=1333
categories:
  - Data Cleanup
tags:
  - ArchivesSpace
  - data migration
  - names
  - structured data
---
Over the weekend, we finished up a year-long project to import description for almost every single grant record the Ford Foundation ever gave. This is the same project that I wrote a [post about last October](http://rockarch.org/programs/digital/bitsandbytes/?p=1230). To refresh your memory, we started with 54,644 grant files described in an Excel spreadsheet, and we wanted to transform much of that data into EAD, and then import it into ArchivesSpace. Normally this project wouldn’t require an entire year, but we realized over the course of the project that we did not have efficient ways to reconcile our structured data against Library of Congress vocabularies. The post in October laid out our methods for reconciling subjects against LoC data; this post will detail the methods we took to reconcile corporate names against the LCNAF.<!--more-->

Before I could start reconciling data, I created a list of unique corporate names in our dataset. Given that the data started in a spreadsheet, I could easily use Excel’s pivot table functionality to create an alphabetical list where each corporate name only appears once. We now had a list of 14,698 total corporate names that we wanted to check against LCNAF structured data and we were ready to try to start reconciling these names against a structured data source. Unfortunately, we couldn’t use our previous method described at Free Your Metadata (freeyourmetadata.org) because they did not have a reconciliation service set up for name entities. Our first instinct was to try to duplicate the Free Your Metadata process by setting up a Virtuoso server running SPARQL. We could then load the LCNAF RDF data available from the [LoC downloads](http://id.loc.gov/download/), but we lacked any experience with those systems. Looking for any other way to reconcile these names without manually checking each one, we turned to the Code4Lib listserv for ideas.

We got many great ideas from the list, but the one we eventually went with came from Matt Carruthers at the University of Michigan Library. He wrote JSON code for use with OpenRefine that searches the VIAF API first, limiting results to anything that is a corporate name and has an LC source authority. OpenRefine then extracts the LCCN and puts that through the LCNAF API that OCLC has to get the name. In the end, you get the LC name authority that corresponds to your search term and a link to the authority on the LC Authorities website. Any items without a match in the LCNAF dataset will not have a link.

[<img class="aligncenter size-medium wp-image-1334" src="http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/04/Name-Reconcile-300x165.jpg" alt="Name Reconcile" width="300" height="165" srcset="http://blog.rockarch.org/wp-content/uploads/2015/04/Name-Reconcile-300x165.jpg 300w, http://blog.rockarch.org/wp-content/uploads/2015/04/Name-Reconcile-1024x562.jpg 1024w, http://blog.rockarch.org/wp-content/uploads/2015/04/Name-Reconcile-500x275.jpg 500w" sizes="(max-width: 300px) 100vw, 300px" />](http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/04/Name-Reconcile.jpg)

Before import you also have to replace all white spaces in your files with %20. Caveat emptor: the system is not 100% accurate, and can return some false positives, so manual QC will be necessary if you want to remove all errors. Unfortunately, it also only works at about 500 names at a time and takes 10 to 15 minutes to run through each set of 500. We split the corporate names into 29 separate excel tabs, imported them each into OpenRefine, ran the JSON reconciliation script, exported all of the results, and then reconstituted them into a single document. I performed a metadata quality check of about 5% of the names, and most of them checked out. A few were obviously false positives, but not enough to make me lose confidence in the methodology.

After getting a full list of all corporate names, we appended either <corpname role="aut" source="local"> or <corpname role="aut" source="lcnaf"> to the front of each name identity and replaced all of the %20s with a space, and then appended </corpname> to the end of the name. We now had a fully identified list of which names were local or LCNAF verified. Using the same find and replace script from the subject cleanup, we replaced the modified corporate names in the original document.

<div id="attachment_1234" style="width: 310px" class="wp-caption aligncenter">
  <a href="http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2014/10/VBcode1.jpg"><img class="size-medium wp-image-1234" src="http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2014/10/VBcode1-300x118.jpg" alt="Find and Replace Code" width="300" height="118" srcset="http://blog.rockarch.org/wp-content/uploads/2014/10/VBcode1-300x118.jpg 300w, http://blog.rockarch.org/wp-content/uploads/2014/10/VBcode1-1024x404.jpg 1024w, http://blog.rockarch.org/wp-content/uploads/2014/10/VBcode1-500x197.jpg 500w, http://blog.rockarch.org/wp-content/uploads/2014/10/VBcode1.jpg 1172w" sizes="(max-width: 300px) 100vw, 300px" /></a>
  
  <p class="wp-caption-text">
    Find and Replace Code
  </p>
</div>

We would still like to explore the possibilities of using Virtuoso and SPARQL in the future, but given the time sensitive nature of our project, we needed a quick and dirty way to get our information online. Ultimately, the entire Ford Foundation records, Grant Files EAD equaled 66.6 mb of data, which we had to split up into 11 different resource records because ArchivesSpace could not handle a single resource that large. We also had to tweak the backend code of ArchivesSpace’s EAD converter in order for it to automatically publish notes not marked internal in the EAD, but that was only about 5 to 10 hours of work and testing.

You can find the end product in [DIMES](http://dimes.rockarch.org/FA732A/collection).