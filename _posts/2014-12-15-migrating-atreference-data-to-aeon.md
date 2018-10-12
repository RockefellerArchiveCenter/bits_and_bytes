---
id: 1274
title: Migrating ATReference data to Aeon
date: 2014-12-15T12:22:12+00:00
author: Hillel Arnold
layout: post
permalink: /?p=1274
categories:
  - Data Cleanup
  - RACcess
  - Reference
  - Software and Systems
tags:
  - Aeon
  - data
  - data migration
  - RACcess
---
Since the RAC was <a href="http://rockarch.org/about/" target="_blank">founded in 1974</a>, we’ve collected information about our researchers, including contact details, visit dates, topics of research, and publications. Starting in the 1980s, we captured this information in a number of different databases. Currently, this data is stored in <a href="https://github.com/RockefellerArchiveCenter/ATReference" target="_blank">ATReference</a>, a customized version of the <a href="http://www.archiviststoolkit.org/" target="_blank">Archivists’ Toolkit</a> that was developed by the RAC. As part of both the <a href="http://www.atlas-sys.com/aeon/" target="_blank">Aeon</a> and <a href="http://archivesspace.org/" target="_blank">ArchivesSpace</a> implementation processes, we needed to migrate that data forward into Aeon so we can continue to access and add to the wealth of information it contains without having to support ATReference.<!--more-->

There were some challenges in this migration, and the RACcess project team made a number of decisions about what data would be migrated, as well as where it would be migrated to in the Aeon database.

The most complex challenge was to try and map data between two slightly different conceptual models. In general, the data model for ATReference is much more detailed and allows for far greater flexibility in recording information. For example, in ATReference we could enter multiple addresses and phone numbers for a single researcher and note a preferred address; or distinguish between home, work and mobile phone numbers. Out of the box, Aeon only allows one address or phone number to be associated with a researcher. Although this may seem like a problem at first, when one realizes that a researcher can update their information at any time (as opposed to ATReference data which would have to be updated either by a researcher while they were onsite, or by staff) as well as the fact that payment processes are handled by PayPal (which means that billing addresses do not need to be stored in the system) this seems to be not much of an issue, and we decided not to store alternate addresses in the system. We also decided to migrate only addresses and phone numbers that were marked as preferred from ATReference to Aeon.

A similar problem occurred with research topics – the people, places, organizations and subjects a researcher is interested in – as well as research purpose, or the expected outcome of the research process, such as a book, dissertation or documentary. In the ATReference model, both of those pieces of information are tied to a research visit; in the Aeon model, they are tied to a particular researcher. Again, the fact that researchers can update their information at any time (and that those changes are tracked within Aeon) helps to explain the difference in the model. For the purposes of migration, we moved all of this information into a note in Aeon, with each note indicating a research visit, the topic and purpose of that visit, and the contact archivist for that researcher.

There were also certain pieces of data we decided not to migrate. In some instances, this was because Aeon tracks this information in other ways, so migrating this data was unnecessary. For example, in ATReference we tracked the individual forms a researcher signed. With Aeon, we’re streamlining the registration process (see my <a title="RACcess Update" href="http://rockarch.org/programs/digital/bitsandbytes/?p=1258" target="_blank">previous post</a> about these changes) and not only will the system track when a researcher has accepted our terms and conditions for research, it will also automatically prompt a researcher to accept those terms and conditions after a year has passed, so we can be sure they review our policies and procedures on an ongoing basis.

There was also some data captured in ATReference that we decided was out of scope for Aeon, and was not migrated. This includes data about funding in ATReference, which we decided would be better tracked elsewhere; we’re able to collect much more relevant and accurate information through our <a href="http://rockarch.org/grants/generalgia.php" target="_blank">Grant-in-Aid</a> applications, and there’s not much of an added benefit to having that information in Aeon.

In addition, there were a number of fields in ATReference that were rarely used, and in those cases we decided not to migrate data, since it was clear that staff had found little use for those fields. This was the case for the funding information mentioned above, as well as information about researcher publications. Additionally, there were very few research visits with either controlled subject terms attached, or that specified particular resource records used, so we decided that migrating those pieces of data forward was not worth the time investment required.

Lastly, as with all migration projects, there was some messy data. In some cases, this data came from a previous migration process (Re:Discovery to ATReference), and we decided it would be better not to migrate that data to Aeon, since in the large majority of cases records containing that data had not been changed in ATReference.

There were also some pieces of data that were not limited to controlled values in ATReference (or were limited to semi-controlled values) which Aeon allows us to control a little more, giving us better data on which to run reports. For example, in ATReference, research purpose was a text field in which researchers could enter whatever they wanted. As a result, it was impossible to run meaningful reports on that data, since almost every researcher entered something slightly different. In Aeon, we’ve provided researchers with a number of possible research outcomes, from which then can select all that apply. As mentioned earlier, we’ve migrated the existing research purpose data from ATReference into a note in Aeon.

The researcher type data in ATReference presented a slightly different challenge. Here, this was a controlled list, but there were some overlapping categories – undergraduate student, undergraduate or MA student, graduate student, Ph.D. candidate – which had to be disambiguated and combined so that we could match researchers to a more meaningful set of categories.

Overall, we’re confident that the work we’ve done to clean up this data and migrate it to Aeon will allow us to better leverage the wealth of information it contains about our researchers, and ultimately to provide them with a better researcher experience.
