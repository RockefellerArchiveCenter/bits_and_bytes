---
id: 1675
title: 'Getting More Out of (and Into) Your Collections Management System: Introduction and APIs'
date: 2017-01-31T06:32:46+00:00
author: Patrick Galligan
layout: post

permalink: /?p=1675
categories:
  - Conferences/Education
  - D-Team
  - Software and Systems
tags:
  - APIs
  - ArchivesSpace
---
_The following is the text from the talk I gave at [METRO’s Annual Conference](http://metro.org/events/794/) held this year on January 11, 2017. This talk was part of the panel “Getting More Out of (and Into) Your Collections Management System.”_

<!--more-->

[<img class="aligncenter size-medium wp-image-1681" src="http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-1-300x169.jpg" alt="Getting More out of and Into Your CMS - MetroCon2017-1" width="300" height="169" srcset="http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-1-300x169.jpg 300w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-1-768x432.jpg 768w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-1-1024x576.jpg 1024w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-1-500x281.jpg 500w" sizes="(max-width: 300px) 100vw, 300px" />](http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-1.jpg)

<span style="font-weight: 400;">Hi, thank you all for joining us today. All of the speakers today are from the Rockefeller Archive Center. The RAC is </span><span style="font-weight: 400;">an independent operating foundation that preserves and makes available for research the archival collections of members of the Rockefeller family, institutions and organizations founded by Rockefeller family members, and other philanthropic organizations like the Ford Foundation or the Commonwealth Fund. We’re fully staff at about 45 employees, and while we have two full-time IT professionals, they are not developers. We currently have no developers on staff, and everyone speaking today comes from a traditional archival background and didn’t have previous development experience outside of graduate school. We do have a small three-person Digital Projects team who assists with technological and digital projects around the Archive Center.</span>

<span style="font-weight: 400;">Amy Berish is an Assistant Archivist and a member of the Processing team. Aside from processing incoming collections, she also contributes to various digital projects. Amy holds a Masters in Library and Information Science from the University of Pittsburgh.</span>

<span style="font-weight: 400;">Bonnie Gordon is an assistant digital archivist in the Digital Program Team, where she supports archivists across departments in their work with born digital materials and digital preservation. She received her Master’s in Archives and Public History from New York University.</span>

<span style="font-weight: 400;">Julia Welby is an Assistant Archivist on the Collections Management team. Her primary responsibilities include overseeing the accessioning of all incoming material regardless of format and preserving at risk materials. She holds a MA in Social Science from the University of Chicago.</span>

<span style="font-weight: 400;">And I’m Patrick, I’m a Digital Archivist on the Digital Program Team and I graduated from the University of Michigan with a Master’s of Science in Information.</span>

<span style="font-weight: 400;">We’ll primarily be talking about our work with ArchivesSpace, our current Collection Management System. We migrated all of our data from Archivists Toolkit, and now use ArchivesSpace for almost all aspects of the archival process, from creating finding aids to recording accessions. This is an ArchivesSpace-driven presentation, but most of the lessons we’ve learned throughout the process of working together can’t be applied to other systems or workflows.</span>

<span style="font-weight: 400;">I’d like to take a few minutes to briefly cover APIs before we get to the real meat of our presentations, because ArchivesSpace’s API is really what made all of our work easier and jumpstarted a lot of changes in our data quality.</span>

[<img class="aligncenter size-medium wp-image-1680" src="http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-2-300x169.jpg" alt="Getting More out of and Into Your CMS - MetroCon2017-2" width="300" height="169" srcset="http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-2-300x169.jpg 300w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-2-768x432.jpg 768w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-2-1024x576.jpg 1024w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-2-500x281.jpg 500w" sizes="(max-width: 300px) 100vw, 300px" />](http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-2.jpg)

<span style="font-weight: 400;">API stands for Application Programming Interface, and they basically define different ways to communicate with various software components.</span>

<span style="font-weight: 400;">ArchivesSpace specifically uses a RESTful API, which allows a requesting system, in this case ArchivesSpace, to access and manipulate textual representations of webpages. The REST interface uses common HTTP requests (GET, PUT, UPDATE, DELETE) to return structured data, JSON in this case. </span>

<span style="font-weight: 400;">You can use your command line, another tool like Postman, a script, or an entirely separate application to make calls against ArchivesSpace’s API. What this means is that you can pull collection information from AS to another system, update mass amounts of data, or automate tasks, all without ever opening the ArchivesSpace interface or touching its backend database.</span>

[<img class="aligncenter size-medium wp-image-1679" src="http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-3-300x169.jpg" alt="Getting More out of and Into Your CMS - MetroCon2017-3" width="300" height="169" srcset="http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-3-300x169.jpg 300w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-3-768x432.jpg 768w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-3-1024x576.jpg 1024w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-3-500x281.jpg 500w" sizes="(max-width: 300px) 100vw, 300px" />](http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-3.jpg)

<span style="font-weight: 400;">So, this is just a quick example of some of the structured JSON data that ArchivesSpace’s API returns when you send a simple get request against an Archival Object. This may look pretty technical and scary, but it’s pretty easy to read once you get used to the syntax.</span>

<span style="font-weight: 400;">Everything that you could hand enter into ArchivesSpace, can be retrieved through a GET request. Here, you can see the title as “Correspondence”, the display string is “Correspondence, 2000 - 2016”, and that the language is English. </span>
  
<span style="font-weight: 400;">ArchivesSpace’s REST API has a documented request syntax for each section of the application, and using it can reveal almost anything in the system’s backend database.</span>

<span style="font-weight: 400;">So why is this so cool? Well, in the past with Archivists Toolkit, if you wanted to systematically change every Access Restrictions note from A to B, you’d have to fiddle around with the database directly, risking the chance of compromising your data, or messing up database integrity.</span>

<span style="font-weight: 400;">Now, it’s super easy to pull data from ArchivesSpace, make changes, and push those changes back without worrying that you’re going to damage your database.</span>
  
<span style="font-weight: 400;">Additionally, as our presentations will go into, APIs make systems customizations, plugins, or integrations much easier. With a well-created API, a system opens itself up and makes your data way more inter-operable.</span>

[<img class="aligncenter size-medium wp-image-1678" src="http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-4-300x169.jpg" alt="Getting More out of and Into Your CMS - MetroCon2017-4" width="300" height="169" srcset="http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-4-300x169.jpg 300w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-4-768x432.jpg 768w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-4-1024x576.jpg 1024w, http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-4-500x281.jpg 500w" sizes="(max-width: 300px) 100vw, 300px" />](http://blog.rockarch.org/wp-content/uploads/2017/01/Getting-More-out-of-and-Into-Your-CMS-MetroCon2017-4.jpg)

<span style="font-weight: 400;">Thanks for listening to me signpost and talk about APIs for a couple of minutes, but it’s time for the real cool stuff to start.</span>
  
<span style="font-weight: 400;">Amy Berish will start talking about DACSpace, and her foray into making our finding aids more DACS-compliant.</span>