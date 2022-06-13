---
title: "Using Wikidata Identifiers to Enhance Agent Discovery"
date: 2022-06-13T09:30:00
author:
- Katie Martin
- Hannah Sistrunk
- Darren Young
layout: post
categories:
  - Data Cleanup
tags:
  - ArchivesSpace
  - access
  - DACS
  - data
  - description
  - discovery
  - DIMES

excerpt_separator: <!--more-->
---

We are excited to announce some new functionality in our archival discovery site, DIMES, that uses Wikidata identifiers to pull in biographic information and links to external authority records about people, organizations, and families that exist in our collections. In this post, we’ll share what this looks like in DIMES and how we are enhancing our agent data in ArchivesSpace to enable these changes. 
<!--more-->

## Enhancing agent discovery in DIMES 

[The Describing Archives: A Content Standard (DACS)](https://saa-ts-dacs.github.io/dacs/04_statement_of_principles.html) principles state that records, agents, activities, and the relationships between them are the “fundamental concepts that constitute archival description”. The connections between these concepts can convey meaning and surface networks that are not apparent from the records themselves. If archival description aims to enable researchers to uncover relationships, the public-facing tools that provide access to that description should surface these networks and offer users various avenues to explore and discover them. As we continue to enhance DIMES and its underlying infrastructure, we’ve been thinking about new ways to support this discovery of relationships, specifically for agents. 

One feature we’ve included in DIMES from the beginning is an “agent page” that provides information about the individual people, organizations, and families described in our collections, allowing users to filter their searches specifically for agents (see Figure 1). The agent pages include links to all the related collections where that agent’s name appears in the title or description (Figure 2). 

{% include image.html dir="2022/06/" file="agent-search-screenshot.png" description="Figure 1. A DIMES filtered for “people” agents showing one search result." %}

{% include image.html dir="2022/06/" file="related-collections-screenshot.png" description="Figure 2. Section of agent page in DIMES displaying links to related collections with search matches for that agents’ name." %}

Continuing to build on the possibilities of agent discovery, our most recent enhancement has expanded these agent pages to pull in external data that links the agents in our collections to authority records and other data from Wikidata to expand the agent information that is available to researchers. 

{% include image.html dir="2022/06/" file="agent-page-external-data-screenshot.png" description="Figure 3. Mathilde Krim agent page in DIMES showing agent information and links to external authority records." %}

The agent pages in DIMES always included birth/death dates and biographic notes from our archival description if they existed and were incorporated into the agent records. Now, by leveraging Wikidata IDs for the agents, we are including additional information for agents, including:

- place of birth 
- occupations 
- positions held 
- nicknames 
- founded by 
- location of headquarters 
- links to additional authority records: Wikidata, Wikipedia, Virtual International Authority File (VIAF), Worldcat Identities, and Social Networks and Archival Context (SNAC).

Additionally, where we do not have descriptive information for an agent in our own description, we now pull in the basic introductory description from Wikipedia. 

## What we learned from testing the changes with users 

As with all our UI updates to DIMES, we tested these changes with users, conducting three [remote moderated usability testing] (https://blog.rockarch.org/dimes-ux) that resulted in some additional design changes and adjustments to better clarify functionality and the source of information on the page. 

What was most illuminating for us during these tests was that users were much more likely to engage with and be excited to explore pages that had even a small amount of descriptive information about an agent in contrast to pages where we only had links to related collections, but no additional description. Even when the description was minimal and only from Wikidata/Wikipedia, as in the case of the page for [Natalia Kanem](https://dimes.rockarch.org/agents/ko52dUbKTXofwY6htxts9i), users appreciated this information as a starting point to make sense of who people were and how they were linked to collections, even if they planned to conduct more in-depth research about an agent. 

We also observed that users were able to traverse between agent pages and collections through multiple routes, including a link to the agent pages of creators available on collection pages (Figure 4), which provides another way to discover relationships and networks.

{% include image.html dir="2022/06/" file="collection-creator-agent-links-screenshot.png" description="Figure 4: Links from collection pages to the agent pages for the records’ creators." %}

## Working with ArchivesSpace and OpenRefine to Enhance Agent Data 

### Previous agent cleanup projects paved the way

In the early conceptual design phases of DIMES development, RAC processing archivists collaborated with the Digital Strategies Team to generate ideas for the agent pages and research potential external data sources for inclusion in those pages. The data cleanup actions that the processing archivists implemented for our institution’s [agent records](https://blog.rockarch.org/archivesspace-cleanup-agents) helped make that data much more useful for the eventual agent functionality provided by the expanded agents module in ArchivesSpace v3.0 by identifying and clearing out duplicate agent records used to represent the same entity as well as inaccurate agent records. Through the ArchivesSpace [Enhanced Agent Merging function](https://www.youtube.com/watch?v=MkOhCkUPJic), we merged or deleted 6,704 agents which accounted for 18% of all our agent records. We also developed [a Python script](https://github.com/RockefellerArchiveCenter/scripts/blob/base/archivessnake/remove-agents.py) which specifically targeted and unlinked agents assigned at the file level. We deployed this script against 18 Ford Foundation grants and catalogued reports collections because it was determined agents assigned to the file level for these collections were not useful. The script successfully unlinked 82,041 agents, and the unlinked agents were later deleted. 

We currently have 1471 agents in our ArchivesSpace repository, including 1092 people agents, 287 corporate agents, and 4 family agents.

## Adding Wikidata IDs to ArchivesSpace

Although the number of agents was now more manageable, we still asked, “how can we automate this process”? After trying several scripts created for reconciling agent names with Wikidata and Wikipedia page titles, we settled on using [OpenRefine]( https://openrefine.org/) OpenRefine is an open-source data wrangling application that can be used to clean data within a browser and can connect it with knowledge bases, including Wikidata. 

To use OpenRefine for this process, we: 

1. Upload a spreadsheet with the names of our agents to OpenRefine 
2. Create the project to work from 
3. Navigate to the column with names to reconcile with Wikidata 
4. Select the dropdown menu at the top of the column. 
5. Find Reconcile 
6. Click ‘start reconciliation’ 
7. Choose the Wikidata option 
8. Allow time for reconciliation to complete 
9. Review and select correct/most likely matches 
10. Select ‘add entity identifiers column’ to create a column of Wikidata identifiers 

{% include image.html dir="2022/06/" file="agents_openrefine_reconciliation.png" description="Figure 5: Using OpenRefine to reconcile our agent list against Wikidata." %}

The initial reconciliation worked well for corporate agents, but we needed to complete a more manual review for people agents due to dates and middle names in the title fields of our agent records that do not reconcile as accurately. 

{% include image.html dir="2022/06/" file=" " description="Figure 6: OpenRefine presents a list of potential matches from Wikidata." %}

Once satisfied with the reconciled list, we can add Wikidata IDs to the Record Identifier field for agent records in ArchivesSpace. 

{% include image.html dir="2022/06/" file="agents_record_id_as.png" description="Figure 7: Record IDs field for agent records in ArchivesSpace." %}

## What does this look like in practice?

A pilot test for fleshing out the content of our agent records and using OpenRefine to retrieve Wikidata identifiers emerged from a [collaborative project with the RAC’s Research and Education Team](https://blog.rockarch.org/bringing-our-digital-history-project-into-the-future). Agent records were identified as the ideal home for biographic content about Rockefeller Foundation Officers R&E sought to migrate from the now decommissioned Rockefeller Foundation Digital History website. Processing Archivists worked to find existing biographic information on these individuals within our ArchivesSpace repository, and with R&E, compared and assessed what was the most appropriate content to include in the agent records. New agent records were created for Officers who did not already have agents to represent them. 

This project also intersected with the RAC’s [Culturally Competent Description campaign](https://docs.rockarch.org/ccd-education-campaign/) in the way that we specifically pinpointed and removed over-valorizing language. Agent records will continue to be an area of focus for our reparative description efforts as we strive to accurately and respectfully represent individuals and organizations documented in our collections and expand access to the histories of people who may have been previously marginalized within our descriptive data. 

We were able to add Wikidata identifiers for 44 of the 56 Rockefeller Foundation Officer agent records using OpenRefine. 

## Next Steps

We are currently working through the person agents to verify identities, remove any false matches, and add Wikidata IDs that might have been missed in the initial reconciliation process. 

Currently, of the 1471 agent records, we will be adding over 500 Wikidata IDs to ArchivesSpace, resulting in the immediate enhancement of the corresponding agent pages in DIMES with new biographic information and links to authority records. 

We will continue to explore the possibilities of enhancing archival discovery through elucidating relationships and networks between collections, agents, and activities. What could it look like to provide an exploration of how agents are related to other agents across our collections? 
