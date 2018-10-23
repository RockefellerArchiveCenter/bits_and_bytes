---
id: 1689
title: 'Getting More Out of (and Into) Your Collections Management System: DACSspace'
date: 2017-01-31T07:00:21+00:00
author: Amy Berish
layout: post
permalink: /?p=1689
categories:
  - Conferences/Education
tags:
  - ArchivesSpace
  - conferences
  - finding aids
  - METRO
  - presentations
---
Recently, I attended [METRO's Annual Conference](http://metro.org/events/794/) where I presented on a panel titled "Getting More Out of (and Into) Your Collections Management System." I spoke about my experience learning to code as a processing archivist and developing DACSspace. The following is the text from my presentation.<!--more-->

View DACSspace on GitHub [here](https://github.com/RockefellerArchiveCenter/DACSspace).

* * *

I'm going to be talking about an evaluation tool I developed called [DACSspace](http://blog.rockarch.org/?p=1581). DACSspace was a first of many things for me - it was my first time writing code, using version control software like Git, and it was also my first attempt interacting with an API. I’m really excited to talk to you all about this tool, but I'm especially looking forward to sharing what this experience has been like for me as a new professional with no developing experience.

# DACSspace

DACSspace is Python script that uses the ArchivesSpace API to evaluate ArchivesSpace finding aids for DACS compliance. Currently, DACSspace checks finding aids for what is known as [single-level minimum](http://www2.archivists.org/standards/DACS/part_I/chapter_1 compliance, which is made up of seven elements that are considered to be the most basic identifying information that's needed to describe a collection. They include elements such as title, date, creator, scope, and access restrictions.

DACSspace produces the results of its evaluation in the form of a spreadsheet which contains the list of evaluated finding aids and corresponding DACS elements. If a DACS element is present in the resource record, its content will be written to the spreadsheet, if an element is missing the spreadsheet will read “FALSE” for that item. Ultimately, DACSspace gives you a detailed breakdown of your finding aids and their descriptive information.

DACSspace automates this evaluation process by harnessing the power of the ArchivesSpace API. It utilizes the JSON key and value pairs to create a handy report that not only tells us which elements exists and which are missing, but it allows us to further evaluate the content of those elements.

RAC used DACSspace as a way to get to know the quality of our archival description. With the recent migration from Archivist's Toolkit to ArchivesSpace, I don’t think we really had a good sense of where our description was lacking or how it held up to professional standards like DACS. It would be almost impossible, if not completely tedious to try to figure out which of our finding aids were legacy finding aids that were <em>not</em> written according to DACS standards and which finding aids were in fact DACS compliant.

# The DACSspace Report

![DACSpace report](http://blog.rockarch.org/wp-content/uploads/2017/01/DACSPSACE-SNIP-REPORT.png)

As you can see here, DACSspace pulls all of the DACS single-level minimum elements from each resource and if the element is missing, it writes “FALSE.”

At RAC, we discovered that 52% of our online finding aids were not DACS compliant and were missing required elements. We also found that some of our finding aids had an unnecessary amount of creators and some of our access restriction statements were not very straightforward and referenced policies that are no longer in use.

By using the report we were able to address these issues. We added the missing elements and worked to standardize our access restriction statements, making sure they reflected the current practices of RAC while also remaining relatively easy to understand for researchers.

DACSspace ultimately automates checking our resources for DACS compliance, which makes it easy to re-run the script and regularly check our repository as resources continue to be added. This ultimately leads to enhanced description and ensures uniformity and standardization within our institution.

# Coding as a Processing Archivist

Now I’d like to switch gears and talk a little bit about what it was like [learning to code](http://blog.rockarch.org/?p=1483) as a processing archivist. I started this journey almost a year ago as one of the first projects I worked on as a member of the processing team. DACSspace was proposed as a way to combine the efforts of the processing and digital teams with hopes to enhance local description and eventually release an open source tool to the community.

To begin, I was given a digestible amount of code to analyze and interpret. The plan was to have me learn enough of Python so that I could describe what the lines of code where doing and why it worked. Starting with a small, digestible amount of code really helped me stay focused and not get overwhelmed. Before I even took a crack at trying to describe what the script was supposed to do, I took the Codecademy course on [Python](https://www.codecademy.com/learn/python) and [Git](https://www.codecademy.com/learn/learn-git). This was especially helpful because it gave me a foundation to start with and helped me learn the jargon and most basic aspects of coding and version control.

Once I was able to get an idea of what the code was meant to do I began writing my own. I spent a lot of time trying to add my own lines of code without breaking a functioning part of the script. I was afraid that whatever I did could not be undone - or at least I wouldn't be able to figure out how to fix it. Although, when I _did_ run into problems, I tried to interpret online forums and address the issue myself until I reached a point where I could freely admit that I had tried everything I knew how to do. Having the guidance and support from the Digital Team helped me to fix whatever problem I was having, as well as understand why it was an issue in the first place.

# Takeaways

As I mentioned earlier, I don't come from a technical background. The DACSspace project helped me learn about the power of automation and the usefulness of interacting with an API. This experience not only resulted in the development of an opensource tool, but it left me thinking more about digital work in general:

* I found that learning digital tools begins with accepting what you know (or don’t know) as a starting point. Personally, not having any experience with code, scripts, or APIs, I found motivation in accepting my current state of knowledge as a starting point, which _easily_ made anything I learned an improvement upon where I started. Some days I felt confident in what I was doing, other days I felt stuck and frustrated, but whether I spent the day effectively writing working code or reading through online forums to try and figure what I did wrong - I still walked away knowing more than I had started with.
* I also realized that the representation of digital work is what makes learning new tools intimidating_. _Telling someone they need to learn to code can be daunting and learning any new technology can be intimidating. Digital work should be represented as doing something we already know how to do – except we are just utilizing a digital tool to accomplish it. I believe it’s important that we rethink the way we represent digital to work the broader information profession by limiting the overuse of technical  jargon and working to minimize technological boundaries by sharing our knowledge and experiences with colleagues and peers .
* And last, but not least, I’ll end my presentation with one of the most useful pieces of advice I’ve received so far as new professional - which is to have an _ethos of fearless_ when it comes to technology. Putting the fear of impostor syndrome and inflated expectations aside and just being willing to try something without the fear of failure goes a long way. I’ve realized that no one expects you to be an expert on something right away, and people (including myself) tend to shortchange themselves on their technical capabilities, often underestimating their skill level or ability to learn. Fearlessness and confidence are two things I feel like I've gained from this project and I’m looking forward to how I can continue to make use of the ArchivesSpace API as a processing archivist.
