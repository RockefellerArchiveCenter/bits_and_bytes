---
title: Automating Archivematica Ingests
date: 2019-01-18T14:00:00
author: Bonnie Gordon
layout: post
categories:
  - Software and Systems
tags:
  - Archivematica
  - digitization
excerpt_separator: <!--more-->
---

In November and December of 2018, we ingested 189 Rockefeller Foundation officers' diaries into Archivematica, making access PDFs available on DIMES. These diaries recorded the day-to-day contacts and impressions of officers of the Rockefeller Foundation who visited educational, scientific and research institutions and laboratories throughout the United States and internationally. The fact that we were able to preserve and make available so many digital objects in such a short timespan is also a testament to how far we've come in our Archivematica use in the past several years.

<!--more-->

In 2014, we ingested diaries from 29 diarists into Archivematica. These had been scanned from microfilm, and were digitized by a vendor, and were linked to their description in Archivist's Toolkit via an integration with Archivematica. At that point, our use of Archivematica was very manual. An archivist would "transfer" each diary in the Archivematica dashboard, and choose an option at each decision point for each microservice. Additionally, the archivist would manually add [*PREMIS rights information*](http://docs.rockarch.org/premis-rights-guidelines/) in the Archivematica UI. Ingesting these diaries took a full year, and required hands-on attention from an archivist.

Since then, Archivematica--and our use of it--has evolved. (And, of course, we've moved from the Archivist's Toolkit to ArchivesSpace.)
Since Archivematica 1.2 (released in September 2014), there have been many updates to the software, but two of the most relevant to this project were sponsored by the RAC. This includes an integration with ArchivesSpace to send DIP object metadata to ArchivesSpace, either through manual matching in the dashboard or by including a csv file with ArchivesSpace RefIds, as well as allowing PREMIS rights information to be included as a csv file.

To prepare the Rockefeller Foundation officers' diaries for ingest, I first ran a script to copy all digitized files to directories that were compliant with the Archivematica transfer structure. I then ran a script to create the ArchivesSpace metadata file, matching the RefIDs provided by Kanisha with the file path to the access PDF for each diary. Finally, I ran a third script to create a PREMIS rights metadata file, which parsed the dates in the diaries' filenames to create machine-actionable rights statements. These scripts are all available [*on our GitHub*](https://github.com/RockefellerArchiveCenter/scripts/tree/master/archivematica).

To start the Archivematica ingest, I ran a script Hillel wrote to automatically start and approve a transfer using the Archivematica dashboard API. I had set the Archivematica processing configuration to automate each decision point, so no manual action was required after running the script. I further modified the script to pause for several minutes, so it could safely loop through a set of transfers without overwhelming Archivematica, further automating this work. The final piece of automation we had set up-–which was done by Jose–was moving access objects from the Archivematica DIP Store to our web server, so that the PDFs were accessible in DIMES.

While setting up these automated workflows took time, it was thrilling to see how quickly we got these diaries ingested and online. By taking the time to pause ingests into Archivematica to review and improve workflows, we were able to greatly increase how quickly and efficiently we could complete these tasks--which will carry ahead to future digitization and digital preservation work.

Additionally, our digitization team did an amazing job at getting these diaries–39,131 pages total–digitized so quickly. The diarists that were added in 2018 are:

-   [Thomas Appleget](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA391/FA391.xml;chunk.id%3D5ffc402076654b58944d36038d452a39;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187154000)
    
-   [Marshall Balfour](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA391/FA391.xml;chunk.id%3D63443620c2e241b885be5af2c9819675;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187154000)
    
-   [George Bevier](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA391/FA391.xml;chunk.id%3Da6378681f46741fea53644c3b8b61c44;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187154000)
    
-   [Joseph Black](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA391/FA391.xml;chunk.id%3D676f6e79d4e5401d99452654656ba965;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187155000)
    
-   [Edward D'Arms](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA391/FA391.xml;chunk.id%3Dfe6d29bf513d4450bafea0b2abfd49b5;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187155000)
    
-   [Chadbourne Gilpatric](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA392/FA392.xml;chunk.id%3De48349b049944e0c9a89b91806687bd4;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187155000)
    
-   [Victor Heiser](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA392/FA392.xml;chunk.id%3Dacbfcd7b833f4124b6bd400e62c457dd;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187156000)
	
-   [Alexander Makinsky](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA393/FA393.xml;chunk.id%3D6679542e85d143fab17526a89aa00a95;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187156000)
    
-   [Daniel O'Brien](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA393/FA393.xml;chunk.id%3Db7762b9f837f4205b88c0b8c56a6a84f;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187156000)
    
-   [Dorothy Parker](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA393/FA393.xml;chunk.id%3D42a2f8654fb547168c2b5854b584434b;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187156000)
    
-   [Kenneth Thompson](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA394/FA394.xml;chunk.id%3Dd8fcb937811f4494a52cd8788ca22af9;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187157000)
    
-   [L. Sterling Wortman](https://www.google.com/url?q=http://dimes.rockarch.org/xtf/view?docId%3Dead/FA394/FA394.xml;chunk.id%3Da6cd6525e360441aaf17e2489a5aaee6;brand%3Ddefault%26doc.view%3Ddao&sa=D&ust=1547839187157000)
    




