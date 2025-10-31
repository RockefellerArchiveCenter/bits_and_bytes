---
title: "FFV1 at the RAC – Part 1: The Rationale"
date: 2025-10-28T10:00:00
author: Brent Phillips
layout: post
categories:
    - Digitization
tags:
    - access  
    - Archivematica
    - audiovisual
    - audiovisual digitization
    - av digitization
    - digital formats
    - digital preservation
    - digitization
    - open source
    - preservation
    - video 

excerpt_separator: <!--more-->
---

 In December 2023, a milestone in audiovisual preservation happened when the Library of Congress amended its Recommended Formats Statement (RFS) by upgrading the FFV1 video codec (version 3) in Matroska (.mkv) container from an “Acceptable Format” to its highest ranking: a [“Preferred Format”](https://blogs.loc.gov/thesignal/2023/12/embracing-ffv1-matroska-container-preferred/) for the preservation and long-term access of video materials. Indeed, this authoritative approval signified the culmination of a decades-long evolution, and this recommendation came with the endorsement from the Federal Agencies Digital Guidelines Initiative (FADGI) after years of FFV1/MKV testing.  
 
With these broad changes happening within the archival field around moving image preservation best practices, the Rockefeller Archive Center found itself at a crossroads with our own audiovisual digitization procedures.

<!--more-->

## Background  
Since 2015, RAC has generated 10-bit, uncompressed, v210 codec (in QuickTime container) video preservation master files. While there still is no full consensus in the audiovisual community on the best format for encoding video preservation masters, this uncompressed standard has remained widely adopted within the community.  
Unfortunately, one hour of uncompressed video can produce a 100-gigabyte file. That is at least 50 times larger than an audio preservation file of the same duration, and about 1000 times larger than most still image preservation files. Copying, validating, converting or otherwise processing these large uncompressed files requires substantial time and, as the RAC digitizes more and more moving image material, the costs of extended processing and storing these files was predicted to grow exponentially over the long term.  

Beyond escalating storage costs, uncompressed video put unnecessary stress on every part of our workflow: 

* slow performance; 
* increased network traffic across local and cloud infrastructure; 
* interoperability issues with different applications; 
* fixity conducted at the file level (i.e. meaning that there is an inability to locate within a file an exact error and its severity level.); 
* increased impact on RAC’s carbon footprint due to large file size and compute time.

However, “uncompressed” is not the only option for avoiding loss of image information anymore. There are compression algorithms which reduce the file size, but preserve every bit in its original state, even after recompressing an infinite number of times. This is called "lossless compression." 
 
Since the early 2000s, a group of audiovisual archivists and developers involved with the open-source FFmpeg project have been working to create an interoperable, open-source, lossless codec called FFV1 (FF Video 1).

## What is FFV1? 
With video preservation, there are two main components to each video format: the codec and the container.  
* A codec (short for compressor/decompressor) is a program which can encode and decode a compressed data format.  
* The container is a wrapper that “contains” the data.

So, in simple terms, it has been explained that a container is like a book binding and the codec is the language the pages were written in.  
 
FFV1 was created as an efficient, lossless video codec designed specifically for digital preservation requirements. It has rapidly gained traction in both the development and digital preservation communities and is widely and freely distributed with the ubiquitous ffmpeg and libav libraries for video processing. Additionally, FFV1 version 3 is very flexible, allowing adjustments to the encoding process based on different priorities such as size efficiency, data resilience, and/or encoding speed.  
 
To wrap the codec, the FFV1 codec works in conjunction with the Matroska container (.mkv), which is an open, non-proprietary multimedia container format. 
 
There are several key benefits to lossless FFV1/MKV over uncompressed.  

* FFV1’s lossless compression algorithm allows for a reduction in file size without loss of quality; 
* roughly 65% less data than a comparable uncompressed file;  
* open source, non-proprietary, and hardware independent;  
* decreased processing time; 
* increased flexibility and portability; 
* built-in fixity which employs embedded Cyclic Redundancy Checks (CRCs) for each frame allowing any corruption to be associated with a much smaller digital area than the entire file. (As mentioned, uncompressed file fixity remains at the file level); 
* improved technical structure by supporting wrapper independent aspect ratio, color space, and interlacement information. 

## FFV1/MKV: Community Adoption and Endorsement 
The RAC has been investigating FFV1/MKV as a possible preservation standard for over six years. This has included conversations with other institutions, attending conference sessions, vendor inquiries, studying white-papers and new scholarship, and following listserv discussions on the topic. During this time, FFV1 adoption accelerated among a variety of cultural heritage organizations considered leaders in digital preservation of audiovisual material: the New York Public Library, the British Film Institute, the Smithsonian Institution Archives, Indiana University, WGBH, Duke University Libraries, the Irish Film Institute, and Stanford Libraries, among many others.  

Concurrently, as FFV1 adoption has proliferated, third-party digitization vendors have gained the expertise to fully understand the codec’s capabilities in order to skillfully fulfill their clients’ digitization needs. 

## Why Adopt FFV1 at the RAC? 
Besides the aforementioned advantages, there were specific benefits behind the RAC’s decision to adopt FFV1/MKV as it supports and/or is interoperable with current RAC tooling, including: 

* full alignment with Archivematica; 
* full alignment with FFmpeg (from which FFV1 is a byproduct)- 
FFmpeg is an open-source cross-platform solution to record, convert, and stream audio and video, and is integrated into Archivematica; 
* full alignment with the RAC’s new [AWS Cloud-based pipeline](https://blog.rockarch.org/digital-av-infrastructure) for delivery, validation, and packaging of digitized magnetic media. 
 
Additionally, the adoption of FFV1 keeps the RAC in harmony with several of our key institutional values: embracing change, striving to minimize the negative environmental impact of our work, keeping abreast of developments in our fields, and thoughtfully implementing new solutions to meet our current dilemmas. 
 

We will explore the implementation of FFV1 in a [forthcoming blog post](https://blog.rockarch.org/FFV1-at-the-RAC-Part-2-Implementation). 
