---
post_id: 1300
title: 'From AT to AS Part 3: Training and Customization'
date: 2015-01-30T12:10:33+00:00
author: Patrick Galligan
layout: post
redirect_from: /?p=1300
categories:
  - Software and Systems
tags:
  - ArchivesSpace
  - data migration
excerpt_separator: <!--more-->
---
## CUSTOMIZING THE APPLICATION – 22 hours in 4 months

While we were mostly happy with the base ArchivesSpace application, we did want to make a few changes to the display and functionality in order to make it more user-friendly. I started out by referencing the [Customizing and Theming ArchivesSpace documentation](https://github.com/archivesspace/archivesspace/wiki/Customizing-&-Theming-ArchivesSpace) as well as the [developer screencasts](https://www.youtube.com/watch?v=Uny736mZVnk).<!--more-->

Most of what we needed to was pretty simple: adding items to the enumerations files in order to have the titles display properly, change the search results columns, rearranging the facet options in the browse screens, and totaling removing the classifications module from all site navigation. All of these desired customizations required very small changes in the code, but unfortunately, I had no experience working with Ruby before AS, so it was a crash course in finding the correct places to make the changes. At least twelve of these twenty-two hours were spent reading code and trying to understand what everything did and which file was the right file to change.

![Enumerations]({{ site.baseurl }}/assets/img/2015/01/Enumerations.jpg)

We did call on the help of the developers and Chris Fitzpatrick was kind enough to create a few quick customizations in the form of local plugins. You can find these files here: <https://gist.github.com/cfitz>. Most of these changes can go into your system's plugins/local/frontend directory, and then if you call "local" plugins in the config.rb file of ArchivesSpace, the plugins will override the base system settings.

![Plugins]({{ site.baseurl }}/assets/img/2015/01/Config_Plugins.jpg)

The trickiest part of this whole section was figuring out what files to change and the correct syntax. I'm sure someone with a better understanding of Ruby could have done this in half of the time, but, [say something about learning, now have more familiarity with the system, those type of positive outcomes from taking this time etc]

## REVIEWING DOCUMENTATION – 85 hours in 8 months

Going into the transition, our AT documentation was excessively long, years old, and out of date even for the work we were doing in our current systems, so we saw the migration as an opportunity to update these manuals into something that users might be more willing to use. We wanted to move away from a more narrative approach to the manuals, so we settled on Quick Reference Charts for both the Accessions and Resources modules in ArchivesSpace. These charts include the name of every field in their respective module, a definition of the field, an example of how we use the field at the RAC, whether they are DACS or locally required, and what level DACS.

![Quick reference guide]({{ site.baseurl }}/assets/img/2015/01/AS-Quick-Reference.jpg)

Compiling the quick reference charts was actually fairly easy, if time consuming. I spent the majority of the time in this section reviewing hundreds of pages of the old documentation, laying out the quick reference chart, and reviewing DACS specifications. With these documents done, we were ready to move onto the final step of our migration process: training.

## Training – 55 hours in 6 months

The final step in our ArchivesSpace preparation was creating customized training sessions for each functional group in the archive. Being a relatively small institution, we had the luxury to have hands-on training with all archivists that would be using the system. In order to better tailor the training to each archivist's specific work and needs, we broke the training up into four discrete functional groups: accessioning, collections and donor management, processing, and reference. We conducted a separate two-hour training session for each of these groups, with different content and exercises. Each member had their own laptop and user account and the desks faced a projector that I used to walk the group members through the system. We found it invaluable that each trainee could follow along on their own laptops; it helped them focus on the system and encouraged them to ask questions as they worked.

Each two-hour session started with a quick rundown of the system, explaining the new terminology, orienting trainees to the layout, and then showing the differences between the public and staff portions of the site. Following this introduction to navigation, we dove into searching and browsing for materials, both through the search all records functionality and the browsing and faceting functionality. To complement this section, we gave each group five records to find: one accession, one resource record, one personal name, one subject, and one location.

Next, we dove deep into the two largest modules in the system: Accessions and Resources. We went through each field in these modules and explained what they were in AT what was new or different about them in ArchivesSpace. We also covered brand new sections like Events, the component tree in Resources, and the updated Rapid Data Entry screen. These sections usually took up the majority of the two hours. We had two different exercises depending on the group: create a new accession record based on information given, or create a new resource record based off of a printed PDF of an old resource record. We found the exercises essential in getting trainees used to and accustomed to the system; while their work in training was rather brief, they had hands-on experience with the interface and were more confident about using the program.

We originally planned to conduct training a few weeks before going live, but when we pushed back our transition date, it turned out that the training was three or four months before our live date. Because of this large gap, we decided to hold two informal, one-hour review sessions the week before migration to give staff members a chance to see any system updates since the last training, and to remind them of the general layout and functionality. We held our final refresher course on a Friday morning, and by that evening we were migrating to production.

## Conclusion

Ultimately, migrating to ArchivesSpace took about one third of my time over the course of a full year. It was a huge task, but possible even for someone who had never worked with the system before. Support is still an ongoing process, but we have finished the real heavy lifting and do not expect ArchivesSpace to take up much of our time moving forward.

As is often necessary with open-source systems, we relied heavily on the help and expertise of the community surrounding the application. Our transition was a success because we took our time, involved other groups in our decision-making process, and tried to keep our end users in mind when making all decisions.

![Patrick in ArchivesSpace hat]({{ site.baseurl }}/assets/img/2015/01/hat4.jpg)
