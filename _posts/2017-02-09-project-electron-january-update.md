---
id: 1668
title: Project Electron January Update
date: 2017-02-09T04:39:35+00:00
author: Hillel Arnold
layout: post
permalink: /?p=1668
categories:
  - Project Electron
tags:
  - personas
  - project electron
  - user centered design
  - user stories
excerpt_separator: <!--more-->
---
As I wrote in my last update, since kicking off Project Electron in September 2016, we've been gathering information through conversations, surveys and a literature review, and then structuring that information into user stories and personas. In line with our "open by default" licensing principle, we're making these design artifacts available with a CC0 license, which means you can take them and use them freely in your own local environments.

**View and download the [user stories](https://github.com/RockefellerArchiveCenter/project_electron/tree/master/user-stories) and [personas](https://github.com/RockefellerArchiveCenter/project_electron/tree/master/personas) on Github.**<!--more-->

Although the end goal of this discovery phase was to have these deliverables in hand, the process by which we developed them is worth explaining.

# How we got here

We started out by listening. We listened - literally - to representatives from our donor and depositor organizations in a series of in-person interviews where we asked about their current recordkeeping practices for digital records, talked through pain points, and imagined ways in which we could acquire, preserve and make accessible their digital records both now and in the future. With help from our [Marist College IT](http://www.marist.edu/it/) partners, we surveyed a wide range of archivists, librarians and museum professionals, as well as our researchers. Because others have mapped the needs of some of these user groups before, we also conducted a survey of existing literature and user studies. Last, and certainly not least, we listened to our staff through conversations, observation and process analysis.

## User Stories

Out of all of this information we created a set of [user stories](https://en.wikipedia.org/wiki/User_story), concise descriptions of the Who, What, When, Where, How and Why of a specific user need that can be addressed by a software system. A typical example might read as follows:

    "As an archivist, I want to create an audit trail of events associated with a group of digital records so that I can ensure their authenticity."

As you can see, there's a lot of information packed into this sentence - a specific user, what that user wants to do, and why they want to do it - which means that even though these are really brief statements it takes a fair amount of work to write them. Still, this is an incredibly worthwhile exercise because it requires specificity and connection to actual people and real needs, as opposed to one's own ideas about what might be useful system functionality.

## Card Sort

After developing these user stories, a group of RAC staff did a [card sorting exercise](https://www.usability.gov/how-to-and-tools/methods/card-sorting.html) to group these individual user stories together to form [personas](https://en.wikipedia.org/wiki/Persona_(user_experience)), and then filled out very basic persona templates with sections for background, goals and motivations, needs, pain points and technology profile.

This was the first time I've done this kind of exercise, and it was very successful both in terms of the final product as well as getting staff involved and invested. We got a ton of really useful information in the persona templates, and even at this early stage, the power of personas in a design process was revealed. At the end of the session one of the participants asked "What happens to these people now? We care about them!"

Still, I think there were things that we could have done better. Most notably, I wish I'd paid more attention to the "Best Practices for Card Sorts" listed on [this page](https://www.usability.gov/how-to-and-tools/methods/card-sorting.html). In some cases, we asked participants to sort too many user stories, and we also discovered that providing clear time parameters was a useful way of keeping them from floundering too much.

## Personas

After some analysis of these groups of user stories, we came up with three sets of user stories, each of which contained four personas.

* **Donors and Depositors** cover the user stories gathered from our donor and depositor organizations. We tried to capture a number of relevant roles within these organizations, as well as a range of organization types, sizes, IT support, and approaches to records management.
* **Researchers** were developed from user stories gathered from RAC researchers, as well as other user studies and literature on researcher needs. In these personas, we wanted to make sure we represented the variety of research interests, methodologies and experience levels of our researchers.
* **Information Professionals** grew out of a combination of user stories from RAC staff, other information professionals we surveyed, and existing user studies. Although we originally started out thinking about the needs of our staff as separate from the needs of information professionals in other archives, libraries and museums, we soon realized that the two groups had a lot in common, so we simply created one set of user personas to address all those user stories.

The important thing to emphasize about this process of creating personas is that it's very much a creative and interpretive one. Personas have been called "[unscientific](https://cnchapman.files.wordpress.com/2007/03/chapman-milham-personas-hfes2006-0139-0330.pdf)," but my experience was that the subjective nature of this process forced me to engage with my own biases and privileges, rather than hiding behind false ideas of data-driven neutrality.

In addition to creating the personas, we'll also create a set of requirements to help guide the development process. These will look something like:

    "Maintain audit trail of preservation events."

As you can see, these requirements are structured differently than either user stories or personas and are oriented primarily towards developers. We'll use the personas to help us prioritize these requirements and the requirements to test system functionality, so that we know whether or not we've met the needs expressed in our user stories.

# Why It Matters to You

I've written about our work in some detail because I feel strongly that this kind of user-driven process is something that archivists can and should be doing a lot more of. Recently, there's been a lot of emphasis in the archival profession on archivists learning hard technical skills like writing code. While it's never a bad idea to have a robust and diverse professional toolbox, this emphasis has, I think, created an unfortunate divide in the profession between archivists who are "tech-savvy" and those who aren't. In my estimation, this divide has hindered the development of a common language to talk about technology and the people it serves in the context of archival principles.

User-centered design processes, such as the ones described above, present a common language to bridge that gap. You don't need to write code to do this work (and you don't need to use exactly the same processes as we did), you just need to listen, think critically and empathetically, and write clearly. Those are all things any good archivist should be equipped to do, and do well.
