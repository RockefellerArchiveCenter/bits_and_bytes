---
title: "Keeping Pace with Change: the next generation of Virtual Vault"
date: 2026-09-18T09:00:00
author: Hillel Arnold
layout: post
categories:
  - Software and Systems
tags:
  - change
  - lifespans
  - technology
excerpt_separator: <!--more-->
---

A little over nine years ago, I wrote that we were implementing a temporary solution to deliver digitized content to onsite researchers, which we named the Virtual Vault. That “temporary” solution has proven to be fairly long-lasting, remaining in place until this week, when we replaced it with a completely rearchitected version. This update has gotten me thinking about strategies for managing change over different timescales.

## How it started/how it’s going
As I wrote in my blog post back in 2017, the original Virtual Vault used a fork of [staticAid](https://github.com/helrond/staticAid), (based on [Jekyll](https://jekyllrb.com/), a popular static site builder) to pull data from ArchivesSpace and generate pages for digitized files. It relied on automation which moved digitized content from local storage to the Virtual Vault server, and then built the pages for the site. This worked well for close to eight years, even as we added records which expanded the scope and scale of the system significantly. Because the site was just HTML, CSS and Javascript, problems were usually confined to specific items, and didn’t impact the Virtual Vault’s overall function.

Over time, however, keeping the system dependencies up to date became increasingly onerous, and an update to the underlying operating system proved to be the final straw. Instead of reinstalling the complex application dependencies on a new server, we decided to convert the application to a [Docker container](https://www.reddit.com/r/docker/comments/keq9el/please_someone_explain_docker_to_me_like_i_am_an/) to make future updates easier. While that migration solved the challenges we had managing dependencies, it revealed other flaws in the application design, which was overly predicated on reading from and writing to files on disk. Given the number of items in the system, which meant a lengthy build process, it became very difficult to troubleshoot what began to feel like a never-ending parade of problems.

While dealing with one of these prolonged troubleshooting sessions, I began to dream of a simpler and more modern system, and started plotting a more complete rearchitecting with our Systems Administrator Max Barkman, who had also been on the front lines troubleshooting the cranky old Virtual Vault. We came up with a system architecture which more cleanly separates updating and storing files and metadata from the user interface which displays the digitized files to an end user, using web frameworks ([Django](https://www.djangoproject.com/) and [NextJS](https://nextjs.org/)) that we know well which are better matched to their intended uses. This update also allowed us to align the user interface with our style library and usability and accessibility best practices.

<figure>
  <img src="/assets/img/2026/09/virtual-vault-architecture.png" alt="Figure 2. The updated architecture of Virtual Vault, showing the frontend and backend separated into two Docker containers. The backend serves up digitized files, and fetches descriptive metadata from ArchivesSpace. The frontend is a NextJS application which provides a simple user interface for the system." />
  <figcaption>Figure 2. The updated architecture of Virtual Vault, showing the frontend and backend separated into two Docker containers. The backend serves up digitized files, and fetches descriptive metadata from ArchivesSpace. The frontend is a NextJS application which provides a simple user interface for the system.</figcaption>
</figure>

This update also allowed us to align the user interface with our [style library](https://styles.rockarch.org/) and usability and accessibility best practices.

<figure>
  <img src="/assets/img/2026/09/virtual-vault-home-page-after.png" alt="Figure 3. The updated user interface for Virtual Vault, which presents a single search box styled using the Rockefeller Archive Center's default colors and fonts." />
  <figcaption>Figure 3. The updated user interface for Virtual Vault, which presents a single search box styled using the Rockefeller Archive Center's default colors and fonts.</figcaption>
</figure>

## What’s changed
Reimplementing this system got me thinking a lot about the many lifespans that our work as archivists and technologists exists within and acts on:
- Carriers of information each have their own periods of popular use and rates of degradation. 
- Technologies used to create, access and migrate information that is stored on these formats, both proprietary and open-source, have their own lifespans of availability and support.
- People (who have lifespans) also have lifespans as employees of a particular organization, and exist within the lifespan of htat organization as well as that of a larger profession. 

As [Octavia Butler reminds us](https://www.goodreads.com/quotes/5732-all-that-you-touch-you-change-all-that-you-change), change is both within and outside of us. We change the world and the world changes us.

A lot has changed since we implemented the first version of Virtual Vault. I’ve already mentioned some of the trends above: our increased scale of digitization and the growth of technologies such as containerization and Javascript web frameworks are two big things. We needed to keep pace with those changes so we could use technology to our advantage, rather than fighting those changes.

Some of the less obvious things are no less important.  We’ve substantially grown our organizational technical expertise: we now have roles dedicated to DevOps as well as user experience and accessibility that sit within our Archives program and are closely tied to user needs and our day-to-day operations. We’ve also intentionally spread development knowledge across the organization, giving teams the ability to automate and improve their own work. 
Perhaps the biggest shift is the least obvious. Reading what I wrote back in 2017 from my vantage point now, it’s clear that I largely imagined our users as the researchers in the reading room, working their way through boxes on carts. Now, in 2026, I know our users are primarily the people we will never see, who use our online systems to interact with us, view and download records, and create diverse research outputs. I know I’m not alone in making that shift. Like many archives, we’ve seen a fairly dramatic change in both the proportion of in-person versus remote researchers, as well as a decrease in the amount of time that in-person researchers are spending in our reading room. That’s a transition that hasn’t happened all at once, and it’s taken some big things like a global pandemic to make it happen, but it’s undeniable. 

This new version of the Virtual Vault, as much as it solves some of the more pressing maintenance and troubleshooting issues, does not fundamentally change what we’re able to do for remote users. So, we’re already thinking about what’s next, and how we can better serve the needs of our global research community. More on that soon!
