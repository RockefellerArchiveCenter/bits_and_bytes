--- 
title: " Implementing Matomo for Web Analytics"
date: 2023-10-04T11:10:00
author: 
- Andrea Cadornigara
- Erich Chang
- Kathleen Leonard
- Hannah Sistrunk
- Darren Young
layout: post
categories:
  - Collaboration
  - Software and Systems
tags:
  - web analytics
  - learning
excerpt_separator: <!--more--> 
---

We are the Web Analytics Owners Group, an internal Rockefeller Archive Center (RAC) working group formed with 5 staff members from each of our program areas. As we prepared for the scheduled sunsetting of Google Analytics in July 2023, our team undertook a project in December 2021 to find an alternative analytics platform that fit our needs. We [analyzed and compared 5 different platforms](https://lucid.app/users/registerOrLogin/free?showLogin=false&invitationId=inv_8975cd1a-a6df-471b-b6f2-402f641b1294&productOpt=chart&invitationType=documentAcceptance&returnUrlOverride=%2Flucidchart%2F23f2ce1d-f1cd-4ba8-8e64-d14d1868e68e%2Fedit%3Fviewport_loc%3D276%252C-124%252C2107%252C1065%252C0_0%26invitationId%3Dinv_8975cd1a-a6df-471b-b6f2-402f641b1294) and ultimately chose Matomo because it was user-friendly, aligned with our requirements, and emphasizes user privacy. In this post, we’ll detail how we implemented Matomo at the RAC and what the next steps are for our group.
<!--more-->

In planning for the switch to Matomo, we had three primary goals:
- Implement Matomo as our web analytics platform, replacing Google Universal Analytics
- Support and respect the privacy of our users
- Continue to develop web analytics expertise within the Web Analytics Owners Group and across the RAC

As the majority of the analytics market is focused on the commercial realm, we wanted to share our processes in a privacy-based, non-commercial context, as well as our ongoing learning of web analytics. In our organization-wide implementation of Matomo, we not only learned to navigate a new platform, but we also developed new competencies in project management, collaboration, and training.

## Implementing Matomo
For others in the process of evaluating Matomo or implementing an analytics solution in your own context, we’ll share some of the details and thinking behind our implementation process.  Based on [our team’s initial research](https://blog.rockarch.org/moving-from-google-matomo-to-put-the-we-in-web-analytics), we decided to use the cloud-hosted version of the tool rather than hosting on-premise. There is an [associated cost](https://matomo.org/pricing/) for cloud-based hosting based on monthly website hits, but the setup and maintenance is more suited to our current IT capacity, and the cloud-hosted version comes with email support and add-on features like targeted form analytics, A/B testing, heatmaps, and other nice-to-have additions to the basic tools.

Once we had purchased Matomo and set up user accounts for the team and our IT staff, our implementation steps were to:
1. **Import our past data from Google Analytics** web properties using [Matomo’s Google Analytics Import tool](https://matomo.org/guide/installation-maintenance/import-google-analytics/). This tool necessitated some troubleshooting and unexpected errors during imports, but ultimately, we were able to get all the data from Google Analytics into Matomo for each of our websites with only a [few limitations](https://matomo.org/faq/general/limitations-when-importing-google-analytics-data/) that were trivial for our purposes.
2. **[Configure privacy settings](https://matomo.org/faq/general/configure-privacy-settings-in-matomo/).** Protecting our users’ privacy was a primary consideration in choosing Matomo, and so we opted for privacy-friendly settings to anonymize IP addresses, track without using cookies, delete raw data from the database every 180 days, allow users to [opt-out of tracking in our Privacy Policy](https://rockarch.org/about-us/privacy-policy/#matomo-analytics), and respecting any “do not track” browser preferences of users. We also updated our Privacy Policy to clearly explain what information Matomo collects and why.
3. **Create tags and triggers using [Matomo Tag Manager](https://matomo.org/guide/tag-manager/).** We previously used Google Tag Manager to track specific actions by users on our sites that would not be captured with data about page views, like clicking on specific buttons or links. Matomo does not have a way to import specific tags and their associated triggers from Google, but we used Google Tag Manager as a reference to set up corresponding tags and triggers in Matomo Tag Manager to continue capturing that data.
4. **Update the code** on [each of our websites](https://github.com/RockefellerArchiveCenter) to start collecting Matomo analytics data.
5. **Implement an account provisioning process** for Rockefeller Archive Center staff who need access to Matomo. Once Matomo was configured and gathering data, we worked with our IT colleagues to get RAC staff the access they required.
6. **Execute a training program** for staff to understand the basics of how to use the tool and what kinds of questions can be answered using analytics. We planned and conducted training for our leadership team, and then each Web Analytics Owners Group member took the training back to their team to train our colleagues as needed.

## Organizing Our Implementation Processes
We outlined three distinct phases of work in our project charter for implementing Matomo: research, implementation, and training. After we completed these three phases, we also set aside time for reflection on the project and strategizing our group’s future directions.
The sections below share the approaches and specific tools we used to carry out these processes.

### Research
Our research phase centered around a set of questions about if and how to implement specific features. We assigned these research questions to group members and used a shared document to record our individual insights and recommendations. Then we discussed these recommendations and formed agreements on how to proceed with implementation. 

The [Matomo documentation](https://matomo.org/guides/) provided a clear and comprehensive resource for our research, and we recommend it to anyone using or considering Matomo. Of course, official documentation cannot account for every specific need and use context of an institution. Group members sharing use cases from their respective teams helped identify and articulate what those needs were, and our communication with the RAC’s IT department helped us setup our first Matomo user accounts and decide how to assign user permission levels to groups of staff.

In addition to informing those decisions, our research phase helped us determine our privacy settings for Matomo, our choice to switch to Matomo Tag Manager from Google Tag Manager, our data importation plan, and our initial training strategy.

### Implementation
For implementation, we adopted a more structured [sprint model](https://medium.com/@concisesoftware/everything-you-need-to-know-about-sprints-in-project-management-4b378a7eb83f) where group members were assigned specific tasks to complete within two-week increments of time. Sprints focused on configuring tags, creating dashboards, and adding Matomo tracking code for each of the RAC’s 13 different web properties. We used the [Asana](https://asana.com/?noredirect) project management platform to keep track of the different tasks across the sites. Everyone completed one of the implementation tasks for at least a couple of the sites. This approach had the benefit of making group members more familiar with the analytics of sites they don’t usually consult because the sites are out of their teams’ areas of focus. 

Group members gained experience editing website code using [GitHub](https://github.com/RockefellerArchiveCenter) and learned to use Tag Manager to track analytics events. To help cultivate this knowledge, group members with more experience performing the tasks would demo how to carry them out and share resources ahead of the respective sprint. Our sprints encouraged collaboration by requiring the use of GitHub pull requests and reviews for the tracking code implementation work. They also included debriefs where group members shared their experiences and discussed any obstacles or questions they had. We made time for larger reflections and check-ins about work process after we completed adding the tracking code for all the sites.

### Training
With Matomo fully implemented and user accounts rolled out to staff outside of our group, we developed training to empower our colleagues to use and understand web analytics as necessary for their work. We leveraged our collective understanding of how the platform can assist staff in their analytics needs to create a single, streamlined training presentation while also providing flexibility in how this training could be shared to match our different teams’ needs. We began with the most common analytics questions staff members would need to answer and then identified which specific features in Matomo answered those questions. Each group member prepared training content on one of those features, but everyone shared and provided enough context and relevant use-case scenarios so that we could all conduct the full training.

Together as a group, we provided training sessions to staff who are not included within our respective teams such as RAC leadership, the Records and Information Program, and the Executive Assistant. This helped group members practice conducting the training together and it reaffirmed the role of the group to our larger organization. Group members then consulted with their individual teams to determine what level of training was required to suit their needs.

### Closing out the Project
As a project retrospective, our group conducted a [What, So What, Now What](https://www.fearlessculture.design/blog-posts/what-so-what-now-what) activity to reflect on the work we accomplished and the processes used to carry out that work, as well as to consider the future direction of the group. In the same way that we adjusted our group’s structure to fulfill the demands of the implementation project, we identified the need to reimage our group’s work following the implementation’s completion. The activity emphasized our need to think out our transition away from project-based work and surfaced facilitation and project management as key areas for growth. As we resume a knowledge-share model for our group during our continued exploration into Matomo and web analytics more broadly, we are committed to experimenting and reflecting on different approaches so our co-learning can be fruitful and participatory.   

## Conclusion
The Web Analytics Owners Group was initially created as a knowledge-sharing space to build organizational capacity and expertise in the domain of web analytics at the RAC. With the project work to evaluate, plan, and implement a new analytics platform, we adapted new working models for the team based in an agile project management approach. Now, with the project complete, we are not only shifting back to a space for sharing and building analytics knowledge, but we are thinking more deliberately and strategically about what and how we can learn and teach in this space.

Our group is unique at the RAC in that it is peer-led and represents all program areas, with managers providing an outside advisory role. This positions our work as a site of learning and experimentation; it is a place to build skills related to facilitation and pedagogy in addition to our web analytics/Matomo knowledge. As the Web Analytics Owners Group strives to broaden our horizons with different learning models, we are also informed by a recent organization-wide, Diversity, Equity, Inclusion, and Belonging (DEIB)-centered review process of RAC programs, policies, structure, physical space, culture, and budget. For review recommendations related to promoting collaboration, trust, accountability, and fostering curiosity and growth, this group is well situated to experiment with and then share approaches and ideas with the wider organization. Stay tuned!
