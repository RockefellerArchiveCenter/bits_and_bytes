---
title: "FFV1 at the RAC – Part 2: Implementation"
date: 2025-10-29T10:00:00
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

## Decision to Transcode Uncompressed Video Masters 
Until the recent RAC adoption of FFV1/MKV, none of our 10-bit uncompressed video masters had been packaged or ingested into Archivematica. This is because Archivematica cannot easily accept large uncompressed video files, and because the extra size meant more compute resources. For this very reason, we created the [new AWS pipeline](https://blog.rockarch.org/digital-av-infrastructure) to solve this challenge, and incorporated FFV1/MKV because of its interoperability.

The decision was made that the RAC would convert all prior uncompressed video files to FFV1/MKV so that our master holdings are structured towards a single digital preservation standard. This uniformity would enable consistency and accuracy when analyzing data and would decrease future challenges with packaging, storage, and queries.

<!--more-->

In addition, converting uncompressed to FFV1 offered the opportunity to examine the current state of RAC’s video masters in terms of data corruption/degradation, as well as to develop a singular plan for long-term file fixity surveillance and maintenance.

## Creating New Derivatives  
Lastly, we also agreed that new mezzanine-level files (i.e. our high-res use copy) and a new researcher access file were to be produced at the time of uncompressed transcoding. This would: 

* conform all RAC video derivatives to the precise technical structure of current RAC preservation practices; 
* assist us as we aim to automate general access and professional use requests; 
* allow the RAC to confidently provide users with consistent and predictable files for professional use, particularly if they are paying a fee for these files.  

## Results 
In total, 40TB of uncompressed v210 masters were transcoded to FFV1/MKV, along with the creation of a new ProRes422 mezzanine-level and H.264 MP4 access file. All new files were bagged and uploaded to AWS where they underwent validation and the QC process. Rights Statements and Policies were provided, and items were re-packaged for Archivematica ingest. 

Post-transcoding, there were significant savings in both file size and required storage space. We observed an estimated 50% savings in the master files alone, and overall, 30% savings when including the newly created mezzanine and access derivatives. Combined, all three file-levels now total 28TB. 

This project was a collaborative effort, working alongside Associate Director of Information Technology Jose Morillo and Associate Director of Archives and Chief Digital Strategies Officer Hillel Arnold. 

The RAC remains deeply indebted to the accommodating staff at The MediaPreserve for their expertise and abilities to carry out this transcoding work. Their efforts and dedication to this project are sincerely appreciated. 

## Final Thoughts...
As mentioned in an earlier blog post, the RAC had been investigating FFV1/MKV as a possible preservation standard for over six years. And still, change is uncomfortable—it is in our nature as archivists (and as humans) to seek stability and stay in our comfort zones. We also realize that the preservation decisions we make now greatly impact both the longevity and the future accessibility of our archival holdings, particularly in regard to increasingly obsolete magnetic media.   

But here's the truth: sometimes our comfort with decades-old “best practices” can keep us stuck, slowing our growth and potential. Change can be good, if it’s in the right direction -- and in our archival profession, it is unavoidable. 


 
