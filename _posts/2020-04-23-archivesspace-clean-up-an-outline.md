---
title: ArchivesSpace Clean Up: An Outline
date: 2020-04-23T16:00:00+00:00
author: Darren Young
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
As Hillel stated in his recent [blog entry](https://blog.rockarch.org/making-connections), the RAC Processing Team has been working on a number of projects to clean up and improve the archival data our institution maintains in order to support the functionality we intend to provide in our discovery and delivery interface. I am writing this post to describe how Amy Berish, Katie Martin, and I have approached deleting and editing a massive collection of data as well to summarize the work we have accomplished to date in collaboration with different colleagues at the RAC. 

<!--more-->

## Realizing the Problems

Facilitating effective discovery and browsing of relationships between archival objects is one of the stated components of [Project Electron’s](https://blog.rockarch.org/setting-sail-the-next-leg-of-project-electron) to improve user experience, and as my colleagues and I have learned, the complex system of relationships that creates and links our archival data can make something as small as a note on an archival item a significant obstacle for archivists and users alike. Speaking for myself, I know that my understanding of archival relationships generally derives from how I describe and interact with them as a processing archivist. The scope of my use of the ArchivesSpace API therefore heavily influences how I perceive different archival objects and the relationships between them. 

For example, in the case of an agent record, I had only ever interacted with that type of object when assigning one to the top level of a resource record by hitting the ‘Add Agent Link’ button in the ArchivesSpace API and filling out the necessary fields. I did not look at the actual agent record because I only focused on my responsibility to show users how the collection I had processed was created. I did not conceive of an agent as its own access point for users to employ, and that may be because our agent records were not optimized for that type of use before we sought to improve them.

When assigning agents to resource records, I did have some idea of what problems might be affecting our agent records because duplicate corporate entity names would appear when I searched for the Ford Foundation entity in the ‘Agent’ field. This did not seem right, but I reasoned that as a long as a user searched ‘Ford Foundation’ in our discovery interface, they would retrieve the proper resource records, no matter which Ford Foundation agent was attached. However, facilitating a keyword search for Ford Foundation as a creator does not provide the same sort of functionality as providing the Ford Foundation agent as an access point. A quality Ford Foundation agent record, linked to the appropriate resource records, could be used to not only retrieve all the collections associated with Ford but also express the relationships between the agent and the resource records.

I have used the word duplicates to describe the different agent records that would appear when I looked to add Ford Foundation as an agent. This is because the names of the different records appeared exactly the same. I did not click on a name to retrieve the actual agent record associated with it, so the text of the name as I saw it within that particular use instance of the ArchivesSpace API encapsulated my whole understanding of the agent record. Text is also the primary means by which a user may understand an agent in our current discovery interface. The image below shows how an agent name is formatted as plain text within a resource record in DIMES. Look under the ‘Overview’ heading to see Ford Foundation listed as one of the creators.

![Example of Agent Name in DIMES Display]({{site.baseurl}}/assets/img/2020/04/dimes-agent.png)

The agent records attached to the duplicate Ford Foundation names I could retrieve with the ‘Add Agent Link Button’ were different though. One aspect of them - the text of the name - was identical, but they possessed a whole assortment of components and relationships that made them unique from one another. These differences may have included how the agents were created and/or modified, if they were authorized agents or not, what sources and rules were associated with them, and what resource records were linked. One agent record could have had significantly more accurate and complete data associated with it, but because I only saw a name when adding an agent to a resource, I may have linked objects of substandard quality to collections. 

Supposing that agent names possessed some type of functionality in DIMES, a user could click ‘Ford Foundation’ on that collection pictured above and retrieve other resource records associated with the foundation. Perhaps, the user returns at a later time and looks at another Ford Foundation collection. That finding aid for that collection would also have a ‘Ford Foundation’ agent listed as a creator, but if there are multiple agent records named ‘Ford Foundation’ in our system, the user may retrieve an entirely different set of results by clicking on it.

I have described how complex relationships between archival objects can be disguised and how that can equally hinder archivists trying to create and enhance description and users trying to discover and browse information. Amy B., Katie, and I have also had to continuously confront this issue in our efforts to clean up the different kinds of data we hold in ArchivesSpace. There have been many times when we thought we had identified an issue we could resolve that would create the improvement in our data that we desired but then learned that the problem was far more convoluted that we believed. With the large amount of data we have to delete and/or modify, we are not relying solely on our eyes to survey the hierarchies linking the different archival objects. We are also using Python scripts to scale down records and target the specific components we want to remove or change. Nonetheless, we have had to first investigate and understand where those components reside in relation to other archival objects in order to automate our processes and devise the best solutions for promoting improved data quality.

## Plan of Action

Our clean up efforts so far have focused on three different types of archival data: Agents, dates, and legacy access/usenotes. Below, I will briefly outline the work completed on each one. Future blog posts will individually delve into our strategies and processes for improving the quality of each data type.

### Agents

Processing Team Assistant Director Bob Battaly and Archivist Amy Fitch collaborated on cleaning up agent records at top level of resource records, including Rockefeller Family agents:

* Project completed, October-November, 2019
* 1,323 resource records updated
* 211 Rockefeller Family resource records updated 

Manually merged/deleted multiple agent records used to represent the same entity as well as records inaccurately representing agents:

* Project completed, October-December, 2019
* 6,704 agents merged/deleted, 18% of total agents in ArchivesSpace

Used script to unlink unnecessary agent records assigned at the file level of Ford Foundation grants and catalogued reports collections

* Project completed, January-March, 2020
* 82,041 file level agents unlinked from across 18 resource records

### Dates

Implemented timewalk plugin 

* Project completed, January-February, 2020
* Data for date ‘Begin’ and ‘End’ fields is now automatically generated by input in date ‘Expression’ field

Ran dates parsing script on legacy collections to replace date expression and activate timewalk

* Project completed, March-April, 2020
* More than 1700 resource records reviewed and updated with timewalk 

### Legacy access/use notes

Ran edit notes script and manually edited notes on legacy collections to remove unhelpful and outdated access/use notes at various levels

* Project completed, March-April, 2020
* Approximately 27,000 notes deleted/modified across 693 finding aids

## Plan Execution

As the plan of action I outlined above indicates, our data clean up work has largely been successful because of our collaboration with other members of our team as well as with colleagues in other departments at the RAC. Our teammate Amy Fitch and our Assistant Director Bob Battaly worked closely together to improve our institution’s use of agents at the top level of resource records. Bob has also provided guidance for us throughout every one of our projects by listening to and giving feedback on the various approaches we have developed and tweaked. Altering such large quantities of data with a single Python script command intimidated us, but Bob continues to affirm his confidence in our decisions and actions.

Our comfort with the automated segments of our work has also been brought about by the assistance provided by the Digital Strategies Team. Hillel Arnold and Patrick Galligan have supplied help and code for the Python scripts that unlink agents from resource records, replace date expressions and trigger timewalk, and modify and delete specified notes in resource records. They have collaborated with Bob Battaly and us on strategizing how to improve the quality of each of the three data types we have tackled so far, and they have worked with our Information Systems Manager, Jose Morillo, on setting up one of the scripts to run directly on our institution’s server.

As the figures supplied in the plan of action may suggest, Amy B., Katie, and I have had to work on an immense amount of data, and we have had to practice effective communication and collaboration amongst ourselves to accomplish the tasks we were assigned. While much of this work has been automated through the use of different Python scripts, we have had to manually review and edit thousands of records because certain processes require human judgement. For example, we had to personally assess and compare agent records with duplicate or similar entity names before merging or deleting them because there were so many various and inconsistent factors impacting what made one agent record the right one to keep and another the wrong one. It would have taken us longer to figure out how to translate that reasoning into logic a machine could execute than to manually do the editing ourselves.

Nevertheless, the work has proved to be tedious at times. Even the automated procedures we perform require careful tracking so that we can maintain a reliable record of what we have done. The support of my colleagues has certainly boosted me on long days devoted totally to making my way down a spreadsheet, running scripts on dozens of collections. I am especially appreciative for the patience Amy B. and Katie have shown me in regards to using the scripts. I came to these projects with considerably less experience at using Python than them, and they have kindly taken the time to help me understand and run the scripts. Reminding each other that even the slightest improvement we can implement makes our data more useful than how it was earlier has helped us all avoid becoming overwhelmed by the messy and convoluted problems we sometimes encounter. 

We are thrilled about the work we have completed because it helps pave the way for our institution’s migration to an improved discovery and delivery interface! As the example I provided earlier about potential functionality for agent records illustrates, we will only succeed at enhancing user experience if our new interface has data of sufficient quality to deliver.   

## Coming Soon

Check back soon to read the blog posts Amy B., Katie, and I are writing to elaborate on our efforts to improve our agents, dates, and access/use notes data!
