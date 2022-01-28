---
title: "Researching PII tools for archives"
date: 2022-01-28T09:00:00
author: Patrick Galligan
layout: post
categories:
  - Software and Systems
tags:
  - digitization
  - PII
  - research
excerpt_separator: <!--more-->
---
## Introduction

At the end of last year, the Rockefeller Archive Center undertook a tightly scoped initiative to digitize and make available online a large group of archival records in support of a Research and Education team project. Given that some of these documents were dated as recently as the 1970s, we felt that it would be necessary to perform a scan for personally identifiable information in all documents after a certain date. However, the substantial number of documents, some 100 pages or longer, preemptively made any thought of manual review impossible. We had to find a tool to automatically search OCR’d PDF for PII and that could create a brief report on any potential matches.
<!--more-->

Based on prior knowledge of these documents, we narrowed our search down to tools that could at least find United States Social Security Numbers (SSNs). This post will outline our testing process, the tools we considered, and our ultimate choice for this project. Our goal is to share this information out so that others will be able to choose the right tool for the job.

## Desired Functionality

First, we identified the tool’s key functionality:

- Detect US SSNs in multiple formats within a text file
- Perform detection over a large corpus of files
- Return potential matches that point to specific files or pages
- Minimize false positives

I have already mentioned the need to detect US SSNs above, and our need for an automated search tool, but given the large number and size of our documents it was also important for us to be able to pinpoint locations of potential matches and minimize false positives. A human was going to have to investigate any flagged matches, and we did not want them searching every page of a 100-page PDF file.

## Types of PII Tools

During our research, we broke PII tools into four categories that share similar features but often return slightly different results and types of text matching. The most common methods of text matching include matching common regular expressions in text, machine learning, and natural language processing.

### Command Line Tools

Command line tools such as Bulk Extractor and Microsoft’s Presidio do not have graphical user interfaces and execute through terminal commands. Users can run these tools against a single file or directory of files programmatically. Some tools allow users to customize text matching queries and patterns. Some write results to a single report text file, while others return results either through the program or command line.  

### Cloud-based Tools

Cloud tools like AWS Comprehend and Azure PII Cognitive Services use machine learning to analyze text. Users can query APIs for these services programmatically, and they return structured JSON data which indicates a confidence score in the match and what type of PII the tool thinks it has detected. However, the algorithms and datasets used for text analysis are unknown, and these tools cannot be customized due to their proprietary nature. Each call against a cloud tool costs money, however, the cost is around 1/10000th of a dollar per one hundred characters in a query.  

### Forensic Imaging Tools

These tools, such as Forensic Toolkit and Spirion, are proprietary programs that scan entire computer systems and directories for personally identifiable information. These are licensed desktop-based applications, which means that users install these programs onto a computer and interact with them through a graphical interface. While these tools do allow targeted scanning of directories, their primary use case is searching for sensitive data across an entire system. The tools usually display reports either directly in the user interface, or as a PDF.

### Proprietary File Storage Text Search

Programs like SharePoint and OneDrive have recently launched built-in “data loss prevention” (DLP) tools that let users search for specific types of PII, including US SSNs, in a corpus of documents. DLP policies use keyword matches, the evaluation of regular expressions, internal functions, and other methods to detect content that matches your DLP policies. Like cloud-based tools, they are proprietary and do not allow for much customization. Reporting options include an exportable list of names of documents containing PII.

## Tools Considered

We ended up testing or considering the following tools:

- [AWS Comprehend](https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html)
- [Azure PII Detection](https://docs.microsoft.com/en-us/azure/search/cognitive-search-skill-pii-detection)
- [Bulk Extractor](https://github.com/simsong/bulk_extractor/wiki/BEViewer)
- [Forensic Toolkit](https://www.exterro.com/forensic-toolkit)
- [Microsoft Presidio](https://microsoft.github.io/presidio/)
- [SharePoint Data Loss Prevention](https://docs.microsoft.com/en-us/microsoft-365/compliance/dlp-learn-about-dlp?view=o365-worldwide)
- [Spirion](https://www.spirion.com/products/sensitive-data-platform/)

We ultimately did not test Spirion, SharePoint Data Loss Prevention, and Azure PII Detection. We did not test Azure because we were confident that it would perform like AWS Comprehend. We were unable to test the SharePoint Data Loss Prevention tool because it would have required an organization-wide change to our SharePoint installation, and we deemed that out of scope of this project. And, finally, we were unable to test Spirion due to its cost and proprietary nature. Online demos and documentation on Spirion led us to believe it wasn’t the best tool for our project anyway.

## Testing Process

Before testing, we created a corpus of about 60 automatically generated nine-digit numbers in various formats that might look like Social Security Numbers and sandwiched those different numbers between a couple of words on each side in a text file. We also split them into separate text files so we could test whether the tools could provide both detection and location for matches within a document. We then proceeded to test as many tools as possible available to us and compare the results against our original list.

## Test Results

Based on our test reports, Bulk Extractor identified all nine-digit numbers provided to it as possible Social Security Numbers. However, Bulk Extractor did flag numbers that the Social Security Administration has not assigned (high 700s, 800s, and 900s), indicating that the tool searches for nine-digit numbers in different formats, but isn’t particularly smart about determining whether they were valid Social Security Numbers or not. This means Bulk Extractor is likely to return many false positives. Bulk Extractor returns all results as separate text files written to a specified directory in the tool’s configurations. Verification of these results would require users to look to see which of the specific PII reports have matches and then review the entire document to find potential matches.

Microsoft Presidio performed similarly to Bulk Extractor, but the returns were able to provide a “confidence score” which indicates how confident the tool is that a string contains a Social Security Number. Presidio also allows users to target individual PII types to match against, so we could target SSNs, credit cards, addresses, or phone numbers on their own. Like cloud-based tools, Presidio returns results in a standardized list of key/value pairs that makes it simple to parse programmatically and make automated decisions.

As opposed to Bulk Extractor and Presidio, AWS Comprehend did not match against all files containing nine-digit numbers. It consistently did not detect numbers without dashes in expected locations for SSNs (“290113596”). However, it did detect these same numbers when they are preceded by the strings “SSN” or “Social Security Number.” Where it really differs from the previous two tools is that it can also detect when a number is not a valid SSN. It knows what SSNs are invalid based on the first three digits and will rule any out that are outside of acceptable bounds. Comprehend also provides a confidence score, like Presidio, which opens avenues to automate decisions based on the confidence score returned.  

While we did not test Forensic Toolkit on this specific corpus of data due to our license being assigned to a single computer onsite at the RAC, we are familiar with its functionality. We are confident that the results of Forensic Toolkit would be like Presidio or Bulk Extractor. Forensic Toolkit creates reports within the desktop-based tool. These reports are exportable, but experience indicates that producing them in a machine-actionable format can be difficult.

## Our Choice

It became clear throughout our research that all these tools do their jobs well, but they were not great matches for one-off projects like this. Forensic Toolkit and Spirion work best for computer forensic scans and full-computer scans respectively, and we did not need to perform that level of search for this project. Additionally, none of these tools provide flexible reporting options outside of their user interfaces. We moved forwards with AWS Comprehend because it supported scripting and returned results in a standardized JSON format. The standardized results reporting helped us automate various actions throughout the process and minimize manual intervention unless necessary. While the initial AWS account and billing setup may be hindersome to some, we were already working in the AWS environment. Additionally, Comprehend returned the fewest false positives of all the tools tested which reduced the amount of manual labor necessary in the final review.

## Implementation Lessons

We finished our scan of the documents with AWS Comprehend in late December 2021, and we learned a few lessons about working with the Comprehend API programmatically. First, we used a Python library called [pdfminer.six]( https://pypi.org/project/pdfminer.six/) to extract the OCR’d data from our PDF files. Second, we couldn’t force Comprehend’s Detect PII service to only search for US SSNs, our one concern for this project, so we only logged matches that Comprehend flagged as SSNs and filtered out the rest. And, finally, we quickly found out that Comprehend’s API has a character limit for text queries, meaning that we had to break some text from a single PDF page into multiple parts based on the number of characters it included. This added another layer of complexity to our script.  

At a higher level, it became clear that there’s no perfect tool for automatically detecting PII in archival documents. Much depends on the quality of the OCR; bad OCR will return bad results no matter how good the tool. Most tools don’t have customizable reporting options. And, even the best tools aren’t perfect; there’s always the opportunity for false positives or negatives. The RAC chose the option that would reduce the chances of false positives the most because of the size of our record set and knowledge of its content.  
