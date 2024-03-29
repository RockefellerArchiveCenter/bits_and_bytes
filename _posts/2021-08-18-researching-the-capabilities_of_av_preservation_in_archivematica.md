---
title: Researching the Capabilities of Audiovisual Preservation in Archivematica
date: 2021-08-18T11:30:00
author: Christian Balistreri
layout: post
categories:
- Collaboration
- Digitization
- Software and Systems
- Digital Preservation
tags:
- L. Jeffrey Selznick School of Film Preservation RAC Fellowship
- Audiovisual
- Film
- Video
- Audio
- audiovisual digitization
- preservation
- Artefactual
- Archivematica
excerpt_separator: <!--more-->
---

I began my work as a Fellow with the Rockefeller Archive Center (RAC) in late May of this year, for a 10-week termed position. Due to the COVID-19 pandemic, the hands-on work that I would have undertaken had to be altered to best accommodate an offsite remote Fellowship. Thus, my work turned towards research. One of my projects involved investigating potential tools and systems for preserving the RAC’s digitized audiovisual files in [Archivematica](https://www.archivematica.org/en/), the RAC’s current digital preservation system. Along with this research I would also be including recommendations for future preservation practices and/or decisions.
<!--more-->

My initial work included educating myself on various aspects of digital preservation and the current policies set in place by Archivematica. This included a refresher in the copious types of metadata, as well as general “best practices” for the care of analog audiovisual material, from the accessioning phase to conservation and digital preservation.  

In order to understand the intricacies of Archivematica I spent a considerable amount of time in reviewing the [plethora of documentation](https://www.archivematica.org/en/docs/archivematica-1.12/user-manual/preservation/preservation-planning/ ) provided by [Artefactual](https://www.artefactual.com/), the lead developer of the application and also of [AtoM](https://www.accesstomemory.org/en/), an open-source application for standards-based archival description.  

One of my project objectives was researching potential tools provided within Archivematica for the characterization, normalization, and validation stages of digital preservation. Each of these stages is a relevant and useful step in the preservation process and, when automated, allows for a productive workflow. [Characterization](https://www.archivematica.org/en/docs/archivematica-1.12/user-manual/preservation/preservation-planning/#characterization) is the process of creating metadata, specifically technical metadata, for an archival object that has been ingested into a preservation system. [Normalization](https://www.archivematica.org/en/docs/archivematica-1.12/user-manual/preservation/preservation-planning/#normalization) is the process of transforming an ingested file format from one file type to another. For example, if an archivist wants to create an access file for an audiovisual object from their preservation file, they may use a rule for normalization to change an MOV wrapper to a MP4 wrapper, allowing for a smaller and easier to access file. [Validation](https://www.archivematica.org/en/docs/archivematica-1.12/user-manual/preservation/preservation-planning/#validation) (or a quality check (QC)), is a tool used to ensure that all files have been created accurately and follow current format specifications. By validating, an archivist is confirming that the digitized file has not lost any information during the ingest and/or transfer, and that no “bugs” or other coding issues occurred during any of the earlier stages. Archivematica also allows for other preservation processes, including identification, extraction, transcription, and verification.  

Within Archivematica there are various tools available in each of the stages being researched. Characterization tools available at default for the RAC include [FFprobe](http://ffmpeg.org/), [MediaInfo](https://mediaarea.net/en/MediaInfo), [ExifTool](https://exiftool.org/index.html) and [fiwalk](https://forensicswiki.xyz/wiki/index.php?title=Fiwalk). While each of these tools can be employed for productive file characterization, only two are fully oriented for the potential audiovisual formats the RAC intends to ingest: FFprobe and MediaInfo. Since the primary purpose at this stage is to collect technical metadata, the final decision for the selection of the proper tool will depend on the type of desired technical information available within each tool. Since FFprobe functions as an offset tool of FFmpeg, a normalization tool that works primarily in FFV1, the final selection becomes dependent on decisions made later in the preservation process.  

The options for normalization tools in Archivematica are just as plentiful. Everything from text files to image files can be normalized within the system. Even with these options, only one tool functions properly for audiovisual files: FFmpeg. Since the RAC’s digitized files were created by third-party vendors to very detailed specifications, the normalization stage of preservation within Archivematica will not need to be undertaken.  

Validation is an activity that can be conducted manually by an audiovisual archivist by comparing and confirming file information and metadata. If a validation tool were to be used for the sake of automation, then the selection of [MediaConch](https://mediaarea.net/MediaConch) would be ideal. MediaConch is an open-source extensible software that implements checks to validate files. It currently works specifically with the Matroska (MKV) wrapper and the FF Video Codec 1 (FFV1) but also seems to allow for new scripts to be written to accommodate other formats.  

Of course, future testing of all relevant tools is recommended for the next phase of exploring digital preservation of audiovisual materials in Archivematica.  

Lastly, this project afforded the RAC the opportunity to reexamine their existing procedures for AV digitization, set in place five years ago. Flowcharts were created documenting the entire life cycle of the RAC’s analog video, sound recordings, and film material: from accessioning and arrangement, through digitization and quality check, as well as long term storage and access. From these, the RAC can now start to uncover “pain points” and processes that can be improved.

While this project was heavy in digital jargon (and new to me in many ways), I appreciated being able to conduct in-depth research pertaining to a digital preservation system. By doing so I have gained a greater understanding of the digitization process, as well as the functionality and practical use of the Archivematica system. This has also provided me insight and knowledge to take with me for use in future endeavors.
