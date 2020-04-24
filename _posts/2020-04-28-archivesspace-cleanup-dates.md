---
title: "ArchivesSpace Clean Up: Adding Structured Dates to an Entire Repository"
date: 2020-04-28T11:30:00
author: Amy Berish
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

As you may already know, the Digital Strategies Team is working on developing and integrating a new discovery system for the RAC. In preparation for this new system, we have been working on [cleaning up data in ArchivesSpace] (https://blog.rockarch.org/archivesspace-clean-up-an-outline) so that the new system can more effectively point researchers to relevant material. My involvement in the data cleanup phase included adding structured (begin/end) dates to all archival objects in our ArchivesSpace repository. In this post, I’ll be talking about how we developed a semi-automated plan to clean up date expressions and add structured dates to our repository by parsing date expressions.
<!--more-->

## A Bad First “Date”
Our initial idea to improve discovery was to facilitate faceted date searching by populating structured (begin/end) dates for all series-level components in our ArchivesSpace repository. At first, we thought to use a built-in feature in ArchivesSpace called “Calculate Dates” which automatically generates an accurate date range at a collection, series, or subseries level of a finding aid. Unfortunately, we were unable to use this tool because it relies on the existence of structured dates on archival objects below it, and in most cases, those did not exist.

We realized we needed to get a better idea of the dates that were in ArchivesSpace. With help from the Digital Strategies Team, we were able to export a csv file of all of the date objects in our repository. This csv was then imported as a project in [OpenRefine](https://openrefine.org/). Using the various filters and search capabilities in OpenRefine, we were able to get a birds-eye view of what we were dealing with. We discovered our ArchivesSpace repository contains around 650,000 date objects - approximately 195,000 of those date objects were missing begin/end dates. The lack of structured (begin/end) dates at the archival object level was the reason we were unable to use the Calculate Date feature as previously mentioned. We realized if we wanted structured dates at the top level of our finding aids, we were going to need to add structured dates to all archival objects in our repository - which was massively more work than what was initially conceived.

## Finding A Solution
I began doing some research on a few date parsing tools because manually editing hundreds of thousands of archival objects was off the table. Some of the options we considered were [DateUtil python module](https://dateutil.readthedocs.io/en/stable/), [OpenRefine](https://icantiemyownshoes.wordpress.com/2014/04/24/clean-up-dates-and-openrefine/), [Timewalk plug-in](https://github.com/alexduryee/timewalk), and the [Timetwister gem](https://github.com/alexduryee/timetwister). We were looking for something that would do a lot of the heavy lifting, with minimal manual clean-up required.

We wanted a tool that would:
- Be relatively simple to use and install
- Be able to parse different date formats (other than YYYY/MM/DD)
- Give us high confidence in the data we are changing
- Not erase or replace date expressions it could not understand

Through careful consideration, we decided Timewalk would be a great option. It checked all of our boxes and had the added bonus of being something we could use after this project to ensure future data quality in ArchivesSpace. More on this later!

## Implementing and Testing Timewalk
With assistance from the Digital Strategies Team, we installed the Timewalk plug-in on our ArchivesSpace development server first to get familiar with it and test its functionality. I wanted to get a better idea of what it does and doesn’t do, what happens when it works, and what happens when it doesn’t work? I used date expressions similar to the ones in the date export spreadsheet and tested how Timewalk responded. Here are some examples:

### Date Expressions Timewalk Can Parse:
|     Date Expression     |    Type   |    Begin    |     End    |  Certainty  |
|:-----------------------:|:---------:|:-----------:|:----------:|:-----------:|
|        10/2/1972        |   Single  |  1972-10-02 |            |             |
|       1999 March 1      |   Single  |  1999-03-01 |            |             |
|     December 3, 1958    |   Single  |  1958-12-03 |            |             |
|       Spring 1986       | Inclusive |  1986-03-20 | 1986-06-21 |             |
|       Early 1950s       | Inclusive |     1950    |    1955    |             |
|       1950s-1960s       | Inclusive |     1950    |    1969    |             |
| Apr 1, 1991-Oct 3, 1991 | Inclusive |  1991-04-01 | 1991-10-03 |             |
|       Jan-Nov 1917      | Inclusive |   1917-01   |   1917-11  |             |
|         undated         | [blank]  |  [blank]   | [blank]   |             |
|        Circa 1950       |   Single  |     1950    |            | Approximate |
|         c. 1950         |   Single  |     1950    |            | Approximate |

### Date Expressions Timewalk Cannot Parse:
|           Date Expression           |    Result    |
|:-----------------------------------:|:------------:|
|               No Date               | Does nothing |
| N.D. [or “n.d.”, “n/d”, ”nd”,,“ND”] | Does nothing |
|            N/A [or “n/a”]           | Does nothing |
|               d. 1913               | Does nothing |
|            Dec. 13, 1979            | Does nothing |
|             1979 Jan. 12            | Does nothing |
|             Probably 1938           | Does nothing |
|           Exhibited: 1960           | Does nothing |

You may be wondering why I added a table that includes an entire row that says “Does nothing” - well this is actually really important! The fact that Timewalk will do nothing when it can’t understand a date expression is actually what we want to happen. Other tools might replace the date expression with “NULL” when they are unable to parse it, which means the original data is now lost.

## Not Exactly a Silver Bullet, But Close Enough!
Of course no Python module, Ruby gem, or plug-in would be able to handle some of our really wild date expressions. A chunk of these obscure dates needed to be addressed manually. This manual work took a few days to complete. It included editing certain dates in ArchivesSpace that we knew Timewalk would be unable to parse. By doing some quality control first, we could more confidently rely on Timewalk to do the remainder of the work, ensuring that most of our dates would be parsed.

Additionally, most other expressions that caused Timewalk to fail followed patterns. This meant they could be fixed automatically by a function that essentially would “find and replace” certain patterns in the date expression field. Things like “Jan.” could easily be changed to “January” and “no date” or “n.d.” could be changed to “undated”. We could also easily change “d. 1913” to “1910” by removing any string containing “d.”  and in a similar way, remove “Exhibited: ” from “Exhibited: 1960”.

## Our Solution: A Python script that triggers Timewalk
Working with the Digital Strategies Team, I provided a list of expressions that would need to be changed in the “find and replace” style function. We wanted to take this opportunity to standardize the language used in the date expression field. For example: archival objects with an unknown date should always be “undated” and months should always be spelled out completely (i.e. January, February, March).

We also decided it might be best to take a piecemeal approach, and have the script run on a single finding aid at a time instead of the entire repository. Since we would be running the script on the production server, there was a chance we would be updating a finding aid that another archivist was working on, which would cause confusion in ArchivesSpace. By selecting a specific resource id before running the script, we could ensure that we would not interfere with any processing projects that were currently in progress.

Hillel was able to write a [script](https://github.com/RockefellerArchiveCenter/scripts/blob/master/archivessnake/replace_date_expressions.py) that uses [ArchivesSnake](https://archivesspace-labs.github.io/ArchivesSnake/html/index.html#) to “walk” the tree of a resource record, clean up select text in the date expression field and then save the record. By saving each archival object record, regardless of if the expression text was updated, it triggers the Timewalk plug-in. Upon saving, Timewalk parses the archival object’s date expression and fills out the appropriate structured dates.

I began to systematically run the script on all 1,700 of our finding aids. I was able to complete about 200 finding aids each week, depending on how many archival objects a given finding aid contained. (Larger finding aids took longer since they contained more archival objects.) In order to complete this project more quickly, I was able to get assistance from my teammates, Katie Martin and Darren Young, who are familiar with running scripts and have been working on other ArchivesSpace cleanup projects. We divided the list of finding aids into three sections, and we were able to run the script over all 1,700 of our finding aids in a few weeks.

## Final Thoughts
Now that we’ve done all this work to ensure structured dates exist, what can we do to prevent this from happening again? We, of course, have our professional and institutional standards and a [processing manual](https://docs.rockarch.org/processing-manual/), but there is still a small chance that structured dates might not be entered in the future. Here is where Timewalk really shines! Timewalk, which is now installed on our production instance of ArchivesSpace can ensure that structured dates are always added. As long as a date expression is entered, structured dates will automatically be generated. Since Timewalk automatically adds begin/end dates upon saving, it also saves processing archivists from entering dates twice in a record (once for date expression, and again for the structured (begin/end) dates).

On a more reflective note, automation allows us to delegate more and more tasks to machines, especially with the help of scripts and open source code. But there are times where human intervention is needed. Throughout this project, I constantly encountered the question of “what is a job for a machine, and what is a job for a human?” I think this project is a great example of combining both manual and automated approaches to fulfill a common goal.
