---
title: "ArchivesSpace Clean Up: Removing Legacy Access Restriction Notes"
date: 2020-04-30T11:30:00
author: Katie Martin
layout: post
categories:
    - Data Cleanup
    - Collaboration
tags:
    - data
    - description
    - discovery
    - learning

excerpt_separator: <!--more-->
---

As you might have read in previous blog entries ([here](https://blog.rockarch.org/archivesspace-clean-up-an-outline) and [here](https://blog.rockarch.org/archivesspace-cleanup-dates)), processing archivists Amy Berish, Darren Young, and myself have been cleaning up and improving ArchivesSpace data in preparation for the Rockefeller Archive Center’s new access system. As part of this initiative, I have removed thousands of legacy access restriction notes from our collections.

 <!--more-->

## The Problem

The basis for the project stretches all the way back to October 2018 when legacy access notes were causing headaches in the reading room. Reference staff needed to verify if individual folders were actually restricted or if the restriction notice had just been triggered by a note hidden at the file level of collections within ArchivesSpace. This note was usually a variation of, “Open for scholarly research, with prior archival review. Retrieval time may exceed 24 hours.” The restriction note was no longer useful, but it might appear hundreds of times in a single finding aid. I was approached by Bob Battaly, Head of Processing, Hillel Arnold, Head of Digital Strategies, and Patrick Galligan, Digital Archivist, to create an automated solution to the frustrating notes issue.

## Finding a Solution

We needed a solution that could target and remove thousands of repeating, unnecessary restriction notes within a single ArchivesSpace resource record. Over the last year and a half, I worked with Patrick to write a Python script, [edit_notes.py](https://github.com/RockefellerArchiveCenter/scripts/blob/master/archivessnake/edit_notes.py). Coming into this project, I had no previous experience writing Python scripts. Like many processing archivists, my experience writing code was limited to EAD and TEI before joining the Archive Center, and I had only recently delved into learning Markdown and CSS to help create the RAC’s [documentation site](https://docs.rockarch.org/).

I met with Patrick every week for short fifteen-minute-or-less “standup” meetings to move the project forward and discuss any problems I encountered during the previous week. To learn Python basics, I took the [Python CodeAcademy course](https://www.codecademy.com/learn/learn-python-3). I needed a concrete example to learn how Python and the ArchivesSpace API interact so I based my script on an existing Rockefeller Archive Center script created to edit and delete notes. I updated that original script from Python 2 to Python 3 and incorporated [ArchivesSnake](https://github.com/archivesspace-labs/ArchivesSnake), a client library for working with the ArchivesSpace API. (You can read more about the RAC’s involvement with ArchivesSnake [here](https://blog.rockarch.org/hatching-archivessnake)). These were not easy tasks and took a lot of trial and error. One of the most challenging aspects for me as a beginner was learning how to loop through JSON hierarchies to retrieve a desired object. Learning basic Python mechanics by working with familiar ArchivesSpace resource records was a great introduction.

As I made progress on the basic script, Patrick suggested I incorporate string matching as a way to find and target notes for removal. Within one finding aid, notes might have small variations or extra spaces. String matching can help control how lax or restrictive you want to be when determining what notes you want to remove. Users of the edit notes script need to identify a confidence ratio, the percentage of similarity between the note string you enter into the command line and the note string that exists within the finding aid, before it can be removed. For example, if I needed to remove all versions of “open in 201X,” I would use a lower confidence ratio to ensure that all restriction notes from the 2010s were removed from a finding aid. If I wanted to ensure that only “open in 2020” notes were removed, then I could set the confidence ratio higher. I typically used a confidence ratio of 97 during my work.

One of the hardest aspects of the script was incorporating argparse, a python module that allows users to provide values for variables directly in the command line. Argparse eliminates the need to rewrite lines of code if you want to make a minor change each time you run the script. Adding argparse meant that many of my original functions within the script needed to be consolidated and rethought. Originally, the script required a lot of user input, and the script would ask for one piece of information at a time. With argparse, I write a single command in the command line that includes the note type (ex. access restriction note), the action choice (delete or modify), the search string (the original note in ArchivesSpace), the level of the hierarchy within a finding aid (file, item, or series), and the replacement note string if modifying notes. The script can then take all of this information at once, and hopefully run without issue. You can imagine how time consuming it was to provide all of this information one piece at a time. If a command is written incorrectly, the argparse module provides help messages to get you back on track.

The script went through many iterations as new ideas were implemented. Hillel and Patrick also refactored and streamlined the script throughout the process. Near the end of the project, I adapted the script so it can be used to change or delete any type of note across a finding aid in ArchivesSpace, not just access restriction notes. By the time the script was complete, additional unnecessary legacy notes were identified for removal, and this work could be tied in with other ArchivesSpace cleanup projects. I put the final touches on the script and updated the [README](https://github.com/RockefellerArchiveCenter/scripts/tree/master/archivessnake#edit_notes) in February 2020, and I was finally ready to start the notes cleanup blitz.

## Completing the Project

In early March 2020, Bob Battaly, Head of Processing, sent along a list of approved notes that could be removed from ArchivesSpace, including those original “prior archival review” notes. As I searched the notes in ArchivesSpace to figure out how to approach this massive task, I found that variations of that note appeared more than 20,000 times. That’s where the script came in! I used the search feature in ArchivesSpace to identify finding aids with the outdated legacy notes and created a spreadsheet to track the text of the note deleted, how many notes were deleted, and the finding aid information. Most of these notes were removed via script, but if notes appeared only one time in the finding aid, then I just verified and removed them manually.

Although there will be more notes to delete in the future, so far, I have removed fourteen different types of access notes that appeared over 27,000 times across 679 finding aids.

## Final Thoughts and Reflections

The project has been full of unexpected twists and turns. Putting myself back in 2018, I did not expect it would take over a year to write and rewrite the script. Sometimes other projects take priority (stay tuned for the wrangling agents blog post) and that is okay! The extra time meant that code improvements like argparse could be incorporated, I was able to solve more than one notes-related problem, and, in the end, I was confident the script worked as intended.
