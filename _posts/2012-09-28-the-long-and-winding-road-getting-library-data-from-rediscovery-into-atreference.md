---
post_id: 105
title: 'The Long and Winding Road: getting library data from Re:Discovery into ATReference'
date: 2012-09-28T00:30:46+00:00
author: Hillel Arnold
layout: post
redirect_from: /?p=105
categories:
  - XTF
tags:
  - data migration
excerpt_separator: <!--more-->
---
Getting our library records out of Re:Discovery and into the Archivists' Toolkit has proven to be a challenging process. This post describes that process in somewhat gory and technical detail. <!--more-->

At the outset, we knew where the library data was (in Re:Discovery), and we knew where we wanted it to end up (our ATReference instance). The question was how to get it there. Initially, my outline for migration looked relatively simple. Dump the data out of Re:discovery in a [MARC21](http://www.loc.gov/marc/bibliographic/) export, convert it into [MarcXML](http://www.loc.gov/standards/marcxml/) using [MarcEdit](http://people.oregonstate.edu/~reeset/marcedit/html/index.php), and then import it into ATReference. Sounds easy, right?

![Initial process diagram]({{ site.baseurl }}/assets/img/2012/09/libraryrecords1.jpg)

The first problem I ran into was that MarcEdit had difficulty parsing the exports from Re:Discovery, which were supposedly in MARC21 format. This prompted me to look at the MARC exports from Re:Discovery a little more carefully. I consequently realized that Re:Discovery's MARC export function did not export all of the data in a record, including (for example) essential fields such as the ISBN or ISSN. So I had no choice but to look at alternative export processes, one of which was to export to a [delimited text file](http://en.wikipedia.org/wiki/Delimiter-separated_values) (where certain characters such as tabs, commas or tildes signify the beginning and end of a piece of data). The next problem was that, although this functionality theoretically existed, the menu option for it was grayed out. After a lot of troubleshooting and searching, it turned out that the account I was using did not have sufficient privileges to run this export process. I have no idea why it makes sense to tie different kinds of export functionality to different user levels, but once I used an administrator-level account I was able to run the export process easily.

This step of the process was made exponentially more difficult by the fact that the process of exporting data out of Re:Discovery is pretty poorly documented. There is no local documentation, and the Re:Discovery website doesn't have much in the way of useful support. I was largely cast on the mercy of whatever Google could turn up for me, plus whatever I could intuit from the application's limited built-in help pages.

So, I now had a somewhat more complex migration path. Instead of exporting in a format that could be converted directly into MarcXML, I now had to drop the delimited text file into Excel, convert it into XML, then run an [EXtensible Stylesheet Language Transformation (XSLT)](http://www.w3.org/Style/XSL/) on that data to turn it into MarcXML:

![Second process diagram]({{ site.baseurl }}/assets/img/2012/09/libraryrecords2.jpg)

This was all well and good until I realized that ATReference does not support batch importing of MarcXML. Since there were over eight thousand records that needed to be added to ATReference, this seemed like a deal breaker. However, it turned out that batch importing EAD was possible, so I opted to take the somewhat counter intuitive route of converting the library data into EAD (yes, really) so I could batch import it all at once. In other words, my migration path now looked like this:

![Third process diagram]({{ site.baseurl }}/assets/img/2012/09/libraryrecords3.jpg)

This seemed like a good plan. That is, until I got the data out of Re:Discovery and into Excel and began to realize how inconsistent, incomplete and inaccurate it was. Name and subject headings were not formed correctly or consistently. In addition, a number of fields needed to be parsed out into separate fields. For example the publisher and date needed to be separated from the imprint field. It was clear that some cleanup needed to be done, and it was clear that Excel was not going to be the right tool for the job. As a result, I turned to [Google Refine](http://code.google.com/p/google-refine/), which is an extremely powerful tool designed specifically for cleaning up messy data. And if the library data in Re:Discovery didn't define the concept of messy data, I don't know what does.

I dumped the Excel data into Google Refine, where I was able to use some of the application's powerful scripting tools to break up certain fields, and Laura was able to use its clustering functionality to clean up some of the inconsistencies in names and subjects. After this process was complete, I re-exported the data to Excel, and then converted the data to XML using the [XML Tools Add-In](http://www.microsoft.com/en-us/download/details.aspx?id=3108). Phew.

I now had a big XML file with all of the library data that looked like [this](https://raw.github.com/RockefellerArchiveCenter/libraryrecords/master/RAC-library-records.xml). Now I had to split it up into over eight thousand individual files for each record, and convert each of those files into EAD. I wrote a [stylesheet](https://github.com/RockefellerArchiveCenter/libraryrecords/blob/master/libraryImport.xsl) that took this large file and did exactly that, creating a whole bunch of tiny EAD files (like [this one](https://github.com/RockefellerArchiveCenter/libraryrecords/blob/master/LI01421.xml)). Keeping my fingers crossed, I tried a batch import of these files into ATReference and, lo and behold, it worked! So my migration path, which started out looking so simple, ended up resembling something more spaghetti-like:

![Final process diagram]({{ site.baseurl }}/assets/img/2012/09/libraryrecords4.jpg)

Bottom line is, we got our library data from Point A to Point B, even if was by the scenic route. If there's a moral to the story, it's that moving our data from one system to another requires a number of steps, and often creative uses of tools and data formats. We can smooth that process, though, by using systems that support a number of import and export formats, and most importantly by documenting the processes by which we create, convert, update and maintain our data.
