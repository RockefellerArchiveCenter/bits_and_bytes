---
title: ' Moving from Google to Matomo, to put the "WE" in Web Analytics" '
date: 2022-05-05T11:10:00
author: 
- Andrea Cadornigara
- Erich Chang
- Kathleen Leonard
- Hannah Sistrunk
- Rachel Wimpee
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

We’re planning to transition from Google Universal Analytics to the Matomo platform. This decision came out of a collaborative process, so we’re laying out the why and how in today’s post.
<!--more-->

## Why and How We Use Analytics

Learning how our users engage with our websites provides us with feedback and perspective to continuously improve the user experience. One way we learn about website use is through our web analytics program. With Google Universal Analytics, our current web analytics platform, scheduled to be sunsetted in July 2023, the [Web Analytics Owners Group](https://blog.rockarch.org/analytics-collaboration) at the Rockefeller Archive Center undertook a project to find an alternative that would still meet our needs. This led our Web Analytics Group to research an initial list of 24 platforms and make a recommendation based on specific criteria and requirements defined by the team. The criteria ranged from having an ethical approach to user privacy, to being able to set up custom dashboards, as well as the ease of the prospective transition to a new platform. Our findings pointed towards adopting a cloud-hosted version of [Matomo](https://matomo.org). This would lead to the easiest transition of programs for our staff, while maintaining the quality of the data and its analysis potential.

## The RAC Analytics Owners Group

The Web Analytics Group consists of 5 staff members from each of the different program areas at the Rockefeller Archive Center. We first started as a collaborative group sharing and learning about Google Analytics and Google Tag Manager. This group has helped each other whenever a problem or question arises, and is an example of how cross-collaboration between different departments can generate many ideas and possibilities. 

The group has a shared governance structure where we rotate facilitators and collaborate on creating meeting agendas. We make decisions through discussion and consensus. The group explores all next steps and deadlines through meetings or in chat, which provides members the flexibility, if needed, for additional time at any phase of this project. This set up provided a great collaboration experience across the different teams at the Rockefeller Archive Center. While the group has previously been a space for sharing knowledge and learning, when Google Analytics 4 was released, we took on the project of evaluating whether we should continue with Google or seek an alternative analytics solution. 

## The Research Process

The [Analytics Owners Group](https://blog.rockarch.org/analytics-collaboration) started our work by compiling a list of required and preferred features and data requirements along with evaluation criteria with input from our respective teams (Collections Management, Digital Strategies, Processing, Research + Education, and Reference).

We then drafted a list of existing analytics platforms, compiling 24 options for further evaluation. In a shared document, each member added names, URLs, and brief descriptions of possible platforms, including notes about pros and cons based on the approved criteria.

## Evaluating Web Analytics Platforms

After an initial review against our defined requirements, we were able to eliminate 19 of the initial 24 platforms from consideration. We divided the remaining 5 platforms ([Matomo](https://matomo.org), [Google Analytics 4](https://support.google.com/analytics/answer/10089681?hl=en), [Countly](https://count.ly), Darwin and [Heap](https://heap.io)) among team members to investigate further through demos and documentation, reporting back to the group with the aid of a shared spreadsheet listing all the features, data requirements, and evaluation criteria. 

Each member elaborated on their research and presented an assessment of their assigned platform. At the end of that meeting, we narrowed down the list to Google Analytics 4 and Matomo, with the criteria of user privacy as a primary consideration. Each group member then evaluated these final platforms individually before we convened again to determine our final recommendation. 

We produced a final report exploring the background and summary of the group and the project. It further discussed our methods as separate phases and provided in-depth analysis on Google Analytics 4 and Matomo. We provided an argument about privacy and gaining new insights with Matomo over Google Analytics 4. After presenting the report and gaining organizational approval to migrate to Matomo, the Owners Group continues to discuss our next steps for implementation! 

## Trends in Web Analytics

From the early stages of our research, we could see that we were not alone in our interest in seeking an alternative web analytics platform to Google. The greater field of web analytics appeared to be motivated and responsive to this desire, and while competitor platforms intentionally marketing themselves in comparison to Google, the most dominant analytics platform, seems natural, the influx of new platforms within the past couple of years and the emphasis on privacy and data ownership may indicate a significant shift in web analytics user needs. 

Of the 24 platforms we surveyed, over a fourth of them were released since 2020, including 2 of the 5 we pushed forward for closer analysis, Darwin and Google’s update to Universal Analytics, Google Analytics 4. 

## Seeking Simpler Analytics Tools
A common user need that several of the platforms we surveyed appeared to target was the desire for a simpler set of tools for collecting and viewing user metrics than what Google contains. 

Having been through the learning curve of navigating Google and making decisions about what metrics are useful for each of our analytics properties, we can understand why this would be a driving motivation for users and developers searching for or designing alternative means for web analytics. Platforms like [Splitbee](https://splitbee.io) and [Plausible](https://plausible.io), among others, promote themselves as scaled down alternatives to Google that provide only the metrics that interest their users in clean and fun ways. 

From our analysis of these various platforms, we observed that their primary means for meeting the trend towards more simplicity is by offering a single dashboard view. Of course, lightweight analytics are not right in every context, and complex analytics suites like [Adobe Analytics](https://business.adobe.com/products/analytics/adobe-analytics.html) and [Piwik Pro](https://piwik.pro) do not appear to be cutting down on what they encompass. 

## Balancing Cost and Privacy Concerns
The web analytics field appears to be grappling with concerns over user privacy in the wake of [GDPR](https://blog.rockarch.org/gdpr-report). Over 10 of the platforms we looked at addressed GDPR compliance on their homepages. 

Platforms are taking further steps towards satisfying user concerns about how their data is used by providing users with greater ownership over their data. Many appear to be able to guarantee this ownership by either charging for platform-hosted data storage through a subscription like [Fathom](https://usefathom.com), requiring more upfront development work on the part of the user for self-hosted storage like [Offen](https://www.offen.dev), or offering users a choice between the two options like [Matomo](https://matomo.org). 

Analytics platforms that charge subscriptions argue their case against Google, which is free, by saying that users are paying for ownership of their data rather than giving their data to Google for it to use. 

## User Data Privacy
One of our primary criteria in choosing our next analytics platform was protecting our users’ privacy. Google Analytics is free because its business model is based on leveraging users’ data for advertising products as a third-party tracker. In our current analytics implementation, we partially mitigate and prevent this data collection through IP anonymization, by disabling Google’s Advertising Features, and by providing in our [Privacy Policy](https://rockarch.org/about-us/privacy-policy/) transparency around our use of Google Analytics and guidance on how to disable it. 

However, we sought to explore alternatives that might actively support our goals of protecting our users’ privacy instead of finding ways to work around a model that actively profits from our users’ data.

Informed by A National Forum on Web Privacy and Web Analytics’ [Roadmap](https://scholarworks.montana.edu/xmlui/handle/1/15445) and [Action Handbook](https://scholarworks.montana.edu/xmlui/handle/1/15446), as well as [other reports](https://ejournals.bc.edu/index.php/ital/article/view/12219) from our privacy-focused librarian colleagues, we found that Matomo offered the most robust alternative to Google. It goes beyond the lip-service that many other platforms we evaluated pay to GDPR compliance, providing decent documentation on [privacy-focused implementation options](https://matomo.org/privacy/) and allowing us to own the data without the intervention of third-party interests. We are excited to move toward a more ethical analytics solution that will help us protect our users.

## Next Steps to Move from Google Universal Analytics to Matomo
Since RAC leadership approved our recommendation, we are currently in the planning stages of making the shift to Matomo. With plenty of time left (Universal Analytics will sunset in summer 2023), the shift will ideally be spread out over the course of the next year. This is to prevent data loss, as well as to make the transition as seamless as possible for RAC staff. 

Mainly the Analytics Owners Group will be involved in migrating data, setting up event tracking, and familiarizing ourselves with the new interface. As we learn new strategies to understand our audience, we will have more opportunities to collaborate and expand our analytics expertise. 

As we proceed to implement Matomo, we’ll continue to share our learnings and advice here on the blog. Stay tuned!

| Evaluation Categories | Google Analytics 4    | Matomo                |
| --------------------- |:---------------------:|:---------------------:|
| Open source           | No                    | Yes           |
| Documentation         | Very well documented. Many training and support resources available.| Very extensive and in-depth documentation. Training guides, training videos, and FAQs available.|
| User privacy          | Not privacy-focused; gathers user info for targeted advertising. *RAC would need to implement in a way that protects user data and informs users as much as possible, as we have done with Universal Analytics.*| Emphasizes privacy and encourages data anonymization. Does not track users across multiple sites and does not use data for anything other than analytics.|
| Data ownership        | Owned by Google. No user ownership.| Owned by user, not Matomo. |
| Features              |Has all our data and feature requirements, but the focus is on advertising and e-commerce so there are also a lot of features we do not use.| Includes all our preferred and required features with the possible exception of language data. 
| UX                    | Similar to Universal Analytics, but some frustration adjusting to changes in language and organization. A lot of specialized terminology.| Seems to be a bit more intuitive and easier to navigate than Universal Analytics, although not so different that the transition would be confusing. Documentation and help/definitions of terms are readily available.| 
| Ease of transition    | Implementation would be technically easy to start gathering basic data with no site code changes necessary, but event tracking works differently than in Universal Analytics, so we would have to research and update our use of Google Tag Manager. There are substantial conceptual and interface changes from Universal Analytics, so it would require staff training.|Provides a guide to importing GA data to prevent loss of historic data when transitioning. Would either have to set up Matomo Tag Manager to track events, or connect Matomo to existing Google Tag Manager (this is possible but further research into privacy implications would be needed). In general, the cloud-hosted version would be easier to implement; the implementation lift would be moderate and require a carefully timed transition plan.| 
