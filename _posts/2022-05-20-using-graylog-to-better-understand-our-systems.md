---
title: "Using Graylog to Better Understand Our Systems"
date: 2022-05-20T09:00:00
author: Patrick Galligan
layout: post
categories:
  - Software and Systems
tags:
  - infrastructure
excerpt_separator: <!--more-->
---
As Hillel mentioned in the most recent ["What We're Working On" post](https://blog.rockarch.org/what-were-working-on), the RAC has recently implemented a log management system called [Graylog](https://www.graylog.org/). Making better use of our log files and improving our system reliability and response time was a core goal of [becoming better maintainers](https://blog.rockarch.org/becoming-better-maintainers) and operationalizing our systems work. We built logging into almost all of our locally-developed systems and had experience sifting through ArchivesSpace logs, but we weren't actively using them as indicators of application health or issues.

<!--more-->

In April 2020, we launched the Log Management Evaluation project to test our hypothesis that a centralized logging analysis and management system would help the D-Team and IT Teams both react quickly to emergencies as well as take proactive measures to avoid future crises. The goal of this project was to test one or more log management solutions that fit an outlined pre-defined feature list that we collaboratively agreed upon. Together, the D-Team and IT Team would identify a log management system that might meet our needs, and then collaborate on the installation and testing of said system.

We broke the desired features into two main categories with separate desired features:
- Troubleshooting
  - Automated alerts
  - Log search interfaces
  - Automated log rotation, collection, and storage
  - Support for logging analytics
- Resource and Performance Monitoring
  - Display application key performance indicators
  - Automated report creation scheduled for regular intervals

After creating this list of requirements, we moved forward with testing Graylog, a widely adopted log management system, because of its robust feature set and low cost. We installed Graylog in a development environment and connected a select few systems to it. This testing included routing ArchivesSpace, Archivematica, VPN, and firewall logs into the system for monitoring. Once we routed log messages to Graylog, we were able to target individual messages for specific error text, experiment with automated notifications, and set up customized dashboards for each application. These dashboards let us monitor key performance indicators, system error messages, and even geolocated connections to the VPN. We could also search through any application logs routed to Graylog and find specific messages much faster than we could on application servers.

Graylog met the most important requirements as defined at the project’s outset: the ability to set up automated alerts, robust log search interfaces, centralized log collection, customizable dashboards for logging analytics, and tools to help track key performance indicators. In testing, we found that Graylog generally made it easier to interact with our log data. The aforementioned features provide methods to improve our response to crises as well as strategically improving application health and performance, all while reducing manual RAC labor.

However, Graylog does not fully support two of the six desired features from the initial project charter, but we did not think that lack of functionality to be blockers to adoption.
- Graylog does not automate log rotation and storage, but these functions can be performed through built in processes on our servers or through AWS integrations; in other words we would still be able to pursue these actions independent of Graylog.
- The free version of Graylog lacks an automated report feature. We did not see this as a roadblock, since these reports are essentially snapshots of dashboards.

Our ultimate goal of implementing a log management system is to decrease the human load required to identify errors and
inconsistencies in our systems logs, and Graylog does that in almost all cases. Graylog supports our most important feature requirements based on our initial testing. More importantly our testing confirmed our initial hypothesis that a log management tool would help the D-Team and IT Teams both react quickly to emergencies as well as take proactive measures to avoid future crises.

We've now been working with Graylog in production for about six months, and it's been a learning experience. Setting up logging on each of our servers for each of our applications has been a slow process, and we're not making the best use of Graylog's streams and dashboards yet. Even with some of these complications, we've seen almost immediate improvements to our handling of ArchivesSpace issues. All log messages that AS prepends with with an error code get automatically sent to one of our Microsoft Teams channels, so we are notified of the issue as soon as it happens. We've also been able to create a dashboard widget to give average response times to various HTTP response codes, which helps us determine how quickly the system is reacting to API requests. We've been able to be more proactive about addressing application errors and issues since adopting a log management system, whereas in the past we'd be reliant on a user identifying an issue and then manually searching log files for instances of that error.

We still have a ways to go in getting our reporting processes fully set up, but Graylog has helped us move towards being better systems implementers and maintainers.
