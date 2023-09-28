---
title: "Keeping Our Heads in the Cloud, Part 2: File Validation"
date: 2023-09-28T10:00:00
author: Timbi Shepherd, RAC-Selznick School Fellow
layout: post
categories:
    - Digitization
tags:
    - Audiovisual
    - audiovisual digitization
    - Bag-It
    - MediaConch
    - service design
    - infrastructure
    - preservation

excerpt_separator: <!--more-->
---

In early summer 2023, the Rockefeller Archive Center was finalizing  the development of its new cloud-based infrastructure for digitized audiovisual materials. This corresponded with the beginning of my 10-week Fellowship at the RAC. As a recent graduate of The L. Jeffrey Selznick School of Film Preservation, I arrived here with prior experience (primarily)  in the physical and intellectual control of analog audiovisual collections. My RAC Fellowship has allowed me to continue building these skills with various film inspection and vault management projects. However, the Fellowship has also allowed me to broaden my experience with digital asset management as an integral player in the  testing of the RAC’s new digital infrastructure. This  has been an opportunity to develop a working knowledge of command line tools and to become familiar with digital preservation workflows. 

<!--more-->

This testing has been in collaboration with Hillel Arnold (Associate Director of Archives and Chief Digital Strategies Officer),  Jose Morillo (Associate Director of Information Technology), and Brent Phillips (RAC Audiovisual Archivist).

A previous [Bits & Bytes post](https://blog.rockarch.org/digital-av-infrastructure) provided an overview of the new cloud-based environment for the RAC’s post-digitization work, from ingest of newly digitized audiovisual material as SIPs (submission information packages) to the long-term storage of these files as AIPs (archival information packages). Validation, quality control, and the affixing of rights statements  must occur before digitized audiovisual elements reach Archivematica for final packaging.

This post will focus on our work testing the system’s first phase: automated file validation.  Here, the data-checking tools [BagIt](https://libraryofcongress.github.io/bagit-python/) and [MediaConch](https://mediaarea.net/MediaConch) will be instrumental in ensuring the receipt of complete and conforming SIPs.

## Amazon Web Services (AWS)

The pipelines in the RAC’s developing infrastructure are facilitated by Amazon Web Services (AWS), which provides S3 cloud object storage for uploading  newly created digital deliverables and compute services required to execute code.

At the RAC, audiovisual digitization is mostly undertaken by third-party vendors and yields multiple  derivatives: a preservation master, mezzanine-level, and access file. (For audio, the RAC omits the mezzanine copy.) When vendors deliver these  derivatives to the RAC’s S3 buckets, they are required to package these files as SIPs meeting the [Library of Congress BagIt specifications](https://www.digitalpreservation.gov/documents/bagitspec.pdf). In addition, vendors need to save SIPs as compressed archive files via the tar and gzip utilities for uploading.

Once delivered to the appropriate S3 bucket, the contents of the compressed archive files are extracted, and the BagIt validation command checks for standard bag structure. If SIPs pass this first step of validation, they are passed on to a MediaConch command which validates the file conformance of the enclosed media.

## Bagging Files

SIPs are structured as “bags” because these file directories contain machine-readable manifests (or tags) which allow for the automated ingest and fixity checking of the bag’s contents. A standard bag contains a bag declaration text file, a subdirectory called “data” housing the deliverables, a manifest text file containing a list of deliverables and corresponding checksums, and a tag manifest text file (a self-checking mechanism) containing checksums for the declaration and manifest text files.

To package the  RAC’s audiovisual files for testing, I opted to use the Library of Congress’s bagit-python command line utility. This required me to install Python and the bagit-python library on my computer. I then referred to the New York Public Library’s [Born Digital Documentation GitHub page](https://nypl.github.io/born-digital-docs/docs/recording/bagging-files.html) for a simple command to bag files. I was able to modify this command to specify various checksum types; the RAC mainly  uses SHA-256 hashes for checking the fixity of audiovisual files.

## .DS_Store  Files

When creating new bags, the presence of .DS_Store files in the data subdirectory became an issue. These invisible files are created when a folder is viewed in the macOS Finder. If a .DS_Store is present when a directory is conformed to a bag, it will appear on the manifest and prevent successful bag structure validation. The New York Public Library’s [AMI Preservation GitHub page](https://nypl.github.io/ami-preservation/pages/resources.html#ds_store-files) provides useful tips on how to prevent and remedy this issue.

Beyond .DS_Store files, extended file attributes can also inadvertently be created when “tarballing” a directory in macOS. If these do appear, they also get in the way of SIP validation. Advice on how to avoid these files can be found in this [Stack Exchange thread](https://apple.stackexchange.com/questions/75989/why-does-osx-add-extra-filename-when-i-tar-a-directory).

## “Tarballing” and Compressing Files

After a set of derivative files for a single audiovisual element is bagged, the resulting SIP must be saved as a compressed archive file before uploading to an S3 bucket. This involves a command which tarballs and gzips the SIP. Once again, the New York Public Library’s [AMI Preservation GitHub page](https://nypl.github.io/ami-preservation/pages/resources.html#creating-tars) was a useful resource.

## Uploading

Uploading test SIPs began via the AWS Management Console, a web interface. However, it soon became clear that a file transfer client would make large and/or batch uploads more manageable. The open-source program Cyberduck  was recommended as a solution. It was necessary to configure Cyberduck using the command line and a credentials property file, but once the client was set up to connect to AWS, I was able to drop SIPs directly into the  S3 bucket  corresponding to the appropriate audio  or  video  pipeline.

We performed stress testing using large audio files and simultaneous  uploads, and these did not present an issue. We are currently troubleshooting large video uploads, which pose a greater challenge to bandwidth constraints and system timeouts.

## RAC File Validation Testing

### Validation Test, Step 1: Bag Structure

After a SIP is uploaded to an S3 bucket in the form of a compressed tarball, it is automatically extracted and passed through a bag check application, which uses the BagIt validation command. This application will check that the directory contains all expected files—deliverables plus tags—and that these files are correctly organized. If the bag passes inspection, it is passed on to the second step of validation, but if it fails, the system generates an error message and sends it to the archivist via a Microsoft Teams notification.(Note: Teams is the platform used at the RAC for workspace chat, videoconferencing, file storage, and application integration. A specific Teams channel was created for Digitized Audiovisual Notifications.)

To test bag structure validation, several scenarios were enacted:

-   Bags conforming to BagIt specifications, expected to pass
-   Bags missing deliverables, expected to fail
-   Bags missing manifest/tag files, expected to fail
-   Bags where deliverable file names differ from the manifest, expected to fail
-   Bags with nonconforming folder hierarchy (deliverables nested in a sub-subdirectory), expected to fail

{% include image.html dir="2023/09/" file="invalid-bag.png" description="Screenshot of Teams notification for a bag structure validation error where a video package was missing the master and mezzanine files." %}

We worked to troubleshoot the bag check application until we received all expected results. In addition, we edited error notifications for clarity, specificity, and brevity.  We reformatted messages containing  Python traceback  by pulling out the last line (the occurrence) and including this at the top of the notification so that the error is more apparent.

### Validation Test, Step 2: File Conformance

After passing  BagIt validation, a SIP still must pass an additional layer of technical control to make sure that all deliverables were created according to RAC-requested specifications.  MediaConch, an open-source application, is used for this purpose. This tool has a GUI but, in the context of the RAC’s automated ingest, runs as a command line utility. MediaConch allows archives to develop sets of rules and format specifications for their digitized audiovisual files, and the application checks that the files conform to these policies.

RAC custom policies were created to check  audiovisual master, mezzanine (for video), and access copies and implemented in  the  MediaConch commands. If any of the deliverables in a SIP fails its respective file conformance check, the archivist will receive a detailed error notification in Microsoft Teams indicating the specific policy criteria  the file  failed to meet. This allows the archivist to go back to the vendor with specific details about how rejected files can be conformed to specifications.

To test file conformance, again, several scenarios were enacted:

-   Bags with correct file types and formatting, expected to pass
-   Bags with files with misassigned extensions, expected to fail
-   Bags with correct file  types but nonstandard formatting, expected to fail

{% include image.html dir="2023/09/" file="invalid-format.png" description="Screenshot of Teams notification for a conformance validation error where a video package provided a .mov mezzanine file in the DV codec rather than ProRes 422 HQ." %}

MediaConch reports were reproduced in Teams notifications, laying out the entire file conformance policy and indicating  a pass/fail designation for each  criterion. Again, we streamlined the presentation of reports and edited them for clarity and error specificity.

Once all the deliverables in a SIP pass file conformance validation, the SIP will be staged for quality control. Testing of this manual QC phase is set to begin shortly.
