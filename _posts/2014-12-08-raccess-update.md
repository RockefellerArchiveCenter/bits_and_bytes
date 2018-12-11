---
id: 1258
title: RACcess Update
date: 2014-12-08T16:04:53+00:00
author: Hillel Arnold
layout: post
permalink: /?p=1258
categories:
  - RACcess
tags:
  - Aeon
  - RACcess
  - reference
---
It's been a while since we posted anything about our Aeon implementation, so I wanted to share some of what we've been working on, as well as what you can expect in the coming months.<!--more-->

## Naming Contest

The first thing, as you may notice from the title of this post, is that the winner of the naming contest we ran back in June for our local implementation of Aeon was **RACcess**, as suggested by Norine. Researchers (and staff) will be able to access the system's web interface at [raccess.rockarch.org](http://raccess.rockarch.org), and we'll use this name to provide a customized brand for Aeon here at the RAC.

## Site Visits

We just wrapped up a series of site visits to local institutions that have implemented Aeon. Many thanks to our fabulous hosts at Columbia University, Yale University, and the New-York Historical Society for taking time out of their busy schedules to show us around and answer our questions! We followed these visits up with a debriefing session where we discussed the experiences we had at each institution.

I think everyone found these visits useful as a way of understanding some of the differences and commonalities of different Aeon implementations, and in thinking critically about what will or won't work for us here. While it's clear that implementing Aeon will be a big change for us, it was also clear that there are some really great benefits to the system that will help us better serve our researchers by better tracking the location of materials and relieving staff of a great deal of tedious and menial work.

## Researcher Registration

The project team has been largely focused on working through the processes for registering researchers. This has involved revisiting many of the policies presented to researchers when they register in order to streamline the process for both researchers and staff, considering the kind of information we want to collect from researchers, and thinking through how RACcess will interact with existing systems such as DIMES and osTicket. Based on these decisions, we substantially overhauled the default pages for the system's web interface, a process I discussed and demoed in a recent reference staff meeting.

The registration processes are detailed in the workflow diagram below (you'll probably want to click on the image to enlarge it):

![Registration Workflow ]({{ site.baseurl }}/wp-content/uploads/2014/12/Registration-Workflow-New-Page-1.png)

### Policy Revision

Currently, researchers who register have to complete and sign a number of forms relating to use of collections. In addition to general terms and conditions and our digital camera use policy, there are agreements relating to use of specific collections. It was often difficult for staff to track which agreements had been signed, or needed to be signed, so we took a comprehensive look at these agreements and realized there were a lot of redundant terms and conditions. We've combined all of these forms into a single page. All researchers who register with RACcess – in other words, anyone who visits the RAC or who gets copies of material from us – will have to sign off on this complete list of terms and conditions.

Of course, we don't really expect that researchers will carefully read and memorize this page, so we'll continue to explain these rules to researchers during the initial in-person reference interview, and we'll add links to those terms and conditions within the system, so researchers can access them at any time.

### Tracking Researchers

As you can see in the diagram above, RACcess will allow researchers to register in advance, and will also allow them to update their information as it changes. Because of this, we greatly reduced the amount of information we're trying to collect from researchers and also implemented controlled lists in a number of instances to improve the reporting we're able to do based on that data. Many of these decisions were based on our experience capturing a similar data set in ATReference. In that system, the lack of a controlled vocabulary for certain fields (for example, the intended research products such as a dissertation, book, or article) resulted in data that was very messy and not at all useful for reporting purposes. We limited that field to a set of checkbox options, and also revised the existing list for researcher type to separate out overlapping categories and make more logical divisions.

Continuing our current practice, we also opted not to record any personally identified information (such as ID numbers) in the system, since doing so would require us to guarantee that information would be kept secure for perpetuity.

### Systems Integration

We already have a couple of systems in place to assist researchers and reference staff, and RACcess will augment, not replace, those systems. We use osTicket to help manage communication with researchers, and that will continue to be the primary means by which reference staff interacts with researchers; there are all kinds of reference tasks that are much better carried out in conversation. DIMES will also continue to be the place where researchers can find information about our collections. They'll be able to submit requests directly from that system, so instead of them having to interpret information in a finding aid (and instead of reference staff having to interpret handwritten requests) RACcess will import data – including box and folder number, series information and any restrictions – directly from DIMES.

## Researcher Requests

Now that we've got the registration processes hammered out, the project team is moving on to the requesting workflows. These include both requests to see materials in the reading room submitted by researchers in advance of their visit, and also during their research visit; as well as requests for copies of material (photocopies, scans, etc) submitted by onsite and offsite researchers. As you can imagine, there's a lot to think through with these processes, and we're working through them carefully to make sure we don't overlook any critical scenarios or functions. We're also making changes to DIMES to allow researchers to request material or copies of material directly from our finding aids. Starting in January, we'll be doing substantial user testing of this functionality and making additional tweaks to ensure the best user experience possible.

## Timeline

Our launch date for RACcess is **Friday, February 6th, 2015**. This will be preceded by two days of intensive staff training, led by Marilyn Rackley from Atlas Systems. We'll likely be following up on that training a few months after going live with sessions on how to use the system more efficiently.

Stay tuned for more updates as we continue this process, and if you have any questions, please let Michele or I know!
