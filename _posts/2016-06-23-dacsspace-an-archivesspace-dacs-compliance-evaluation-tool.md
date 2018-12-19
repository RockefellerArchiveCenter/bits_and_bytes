---
post_id: 1581
title: 'DACSspace: An ArchivesSpace DACS Compliance Evaluation Tool'
date: 2016-06-23T06:55:09+00:00
author: Amy Berish
layout: post
redirect_from: /?p=1581
categories:
  - Conferences/Education
  - Software and Systems
tags:
  - ArchivesSpace
  - finding aids
  - Python
  - scripting
excerpt_separator: <!--more-->
---
As the newest member of the Processing Team, I have been working on writing a DACS compliance evaluation script called DACSspace. Creating this tool came with a lot of "firsts" - this was my first experience writing code as well as interacting with an API. After a successful (yet sometimes frustrating) three months, I am excited to introduce DACSspace to the archival community and share a reflection of my work.

To view DACSspace on GitHub click [here](https://github.com/RockefellerArchiveCenter/DACSspace).<!--more-->

# What is DACSspace and How Do I Use It?

DACSspace: a python script that uses the [ArchivesSpace API](http://archivesspace.github.io/archivesspace/api/) to evaluate an ArchivesSpace instance for [DACS single-level minimum](http://www2.archivists.org/standards/DACS/part_I/chapter_1#.V2LOFrsrKUk) compliance.

DACSspace provides ArchivesSpace users with a solution to two issues – content management system (CMS) migration and legacy finding aids. As a result of the recent migration from Archivist Toolkit to ArchivesSpace, institutions may be unaware of how many of their finding aids are not DACS complaint. Further exacerbating the problem are legacy finding aids that were not written according to DACS standards and those that were intentionally added with missing fields to quickly make them available for research. Checking each resource record manually isn't anyone's idea of a glamorous project, regardless of how necessary it may be. Fortunately, DACSspace, an ArchivesSpace-specific DACS compliance tool, saves archivists the tedious task of manually evaluating their entire ASpace repository for DACS compliance by automating the process.

Prior to running DACSspace for the first time, you'll need to install Python, a few required modules, and run a setup configuration file. The setup will ask you a series of questions related to your ASpace instance that will allow the script to interact with your repository. Upon executing DACSspace via the command line, the script will prompt you with two questions allowing you to customize which resources the script will evaluate.

1. Do you want DACSspace to include unpublished resources? y/n (default is n):
2. Do you want to further limit the script by a specific resource id? If so, enter a string that must be present in the resource id (enter to skip):

_Pressing the ENTER key for both questions will use the default version of the script which will get ALL resources._

Limiting by resource id is a useful way to for you to use your institution's unique identifiers to further narrow the scope of DACSspace. For example, the RAC uses a letter/number combination of "FA#" for archival finding aids and "LI#" for library resources.

Depending on the amount of published resources in your repository, the script may take a few hours to complete. As it runs through your ASpace instance it will generate a CSV file containing a list of evaluated resources and DACS single-level requirements. If a required element exists, its content will be copied to the CSV. Alternatively, if the field is blank (and therefore the resource is not DACS compliant) the CSV will read "FALSE" for that element. You can then easily transform the CSV data into various charts and graphs representing the current state of your repository and begin to develop a repository-wide DACS compliance report.

Aside from conducting a compliance evaluation, DACSspace can also be used as a tool to initialize quality assessment and standardization projects. For example, since the script pulls both scope and access restriction notes, it would be relatively easy to evaluate the usefulness of scope notes and restriction statements that exist in your ASpace instance.

# Creating DACSspace: A Processing Archivist's Introduction to Scripting

This project began a few months ago when I was introduced to Python, Git, and GitHub. My earlier post, [Learning Python as a Processing Archivist: A Reflection](http://blog.rockarch.org/?p=1483), documents my learning strategy and early reflections. Creating DACSspace was my first experience learning a programming language, writing code, interacting with an API, and writing technical documentation.

To help me understand how to use the [ArchivesSpace "REST" API](http://archivesspace.github.io/archivesspace/api/#introduction), I used an API development tool called [Postman](https://www.getpostman.com/), which allowed me to interact with the API and view resource records in [JSON](http://www.w3schools.com/json/) (which is a interchangeable data format consisting of key and value pairs). After spending some time looking through different resource records in Postman, I learned how to use certain JSON keys in the script order to write functions specific to the ASpace API.

Simply having a script that ran without breaking called for celebration since it was my first time writing code. There were many moments throughout this process when I thought, "Well, it works, it must be complete," only to realize that I could improve a part of it, or insert logic into a different area of the script. An initial version of DACSspace had a separate function for each DACS required value, which was not the most elegant way of accomplishing what I wanted even though it worked. I learned I could replace multiple functions that do similar things with a single, more abstract function - making it easier to troubleshoot a single function then to get five similar functions to cooperate.

Additionally, building in a section for user input increased the function and flexibility of the script. The purpose of initially prompting users to answer specific questions is twofold. First, it adds flexibility to a script that originally could only do one thing, thereby transforming DACSspace into a multi-faceted tool that runs four different ways. Secondly, it makes running the script less intimidating. Being greeted by a "Welcome!" statement and some questions is more reassuring than watching the script immediately evaluate resources. Additionally, it was useful to add feedback if the user entered something the script didn't understand; being told "Invalid response, try again" is substantially less horrifying then seeing a command line error message. Both enhancements were efforts to make DACSspace as easy to use as possible while keeping in mind that using the command line can be a scary thing.

Aside from creating an open source tool, this project has made me realize two things:

1. _The representation of digital work is what makes learning new tools intimidating. _Telling someone they need to learn to code is generally terrifying. Digital work, especially in archives, should be represented as doing something we already know how to do - just utilizing a digital tool to accomplish it. For example, in writing DACSspace I was using my knowledge of DACS and content management systems. The only "digital/technical" aspect of it was using Python, which is essentially just another tool.
2. _Learning digital tools begins with accepting what you know (or don't know) as a starting point._ Personally, having zero experience with code, scripts, APIs, etc. I found motivation in accepting my current state of knowledge as a starting point, making anything I learned an improvement upon where I started. Some days I felt confident in what I was doing, other days I felt stuck and frustrated, but each day I learned more that day than I had started with. Scripting takes a collective understanding of what works and what doesn't, so a little self-troubleshooting goes a long way.

This project has been professionally rewarding and incredibly enlightening. Understanding what's involved in learning and creating digital tools has affected how I think about the work I do as a processing archivist and how we can more effectively represent digital work to the broader archival community.
