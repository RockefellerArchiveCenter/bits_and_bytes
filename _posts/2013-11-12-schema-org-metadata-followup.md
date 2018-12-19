---
post_id: 865
title: Schema.org Metadata Followup
date: 2013-11-12T16:45:31+00:00
author: Hillel Arnold
layout: post
redirect_from: /?p=865
categories:
  - XTF
tags:
  - Google
  - relevance
  - schema.org
  - search
excerpt_separator: <!--more-->
---

A few weeks ago, I described how we included schema.org metadata in our finding aids and library records, with the hope that this would improve our search relevance and visibility rankings. So, is it working?<!--more-->

The short answer is yes, although it's taking some time for the structured data to be added to Google's index. For example, a search for "rockefeller foundation officers diaries" gets pretty decent results, with the finding aid showing up as the third result (after two other RAC pages).

![rfod]({{ site.baseurl }}/wp-content/uploads/2013/11/rfod.png)

However, other searches aren't so successful. For example, a search for "oswald t. avery papers" doesn't return the finding aid anywhere on the first page.

![avery]({{ site.baseurl }}/wp-content/uploads/2013/11/avery.png)

The reason for this – I think – is that Google has not yet crawled that page and added the structured data to its index. While there are all sort of other factors at play (the uniqueness of search terms, search history, and even geographic location all factor into the results set) a site search of dimes.rockarch.org shows that in some cases the correct title for a number of finding aids has been picked up by Google, and in other cases it hasn't.

![site]({{ site.baseurl }}/wp-content/uploads/2013/11/site.png)

Since the finding aid title is encoded in the structured data, it seems fair to assume that the pages with correct titles have been crawled by Google since structured data has been added to them.

In some cases, even though the incorrect title appears in the search result, the ranking is relatively high, which I believe has more to do with unique search terms than it does with structured data.

![kabat]({{ site.baseurl }}/wp-content/uploads/2013/11/kabat.png)

So the bottom line is that I believe we'll continue to see improvements in search presence and relevance for our finding aids over the coming months. It will be gradual, and there will certainly be opportunities to improve our structured data, but we appear to be headed in the right direction.

Finally, I should have done this in my previous post, but a huge thank you to [Will Sexton](https://twitter.com/willsexton) at [Duke](http://duke.edu/) and [Scott Young](http://hellolibrarian.com/) at [Montana State University](http://www.montana.edu/) for their help on this. They have both put a lot of thought and effort into implementing schema.org metadata at their institutions, and their advice saved me a ton of time and frustration. Thanks to both of you!
