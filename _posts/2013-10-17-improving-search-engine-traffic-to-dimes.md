---
id: 826
title: Improving Search Engine Traffic to DIMES
date: 2013-10-17T20:11:40+00:00
author: Hillel Arnold
layout: post
redirect_from: /?p=826
categories:
  - XTF
tags:
  - discovery
  - Google
  - relevance
  - schema.org
  - search
excerpt_separator: <!--more-->
---
Over the last several months, I've noticed that DIMES is getting a very small number of hits from search engines such as Google, Yahoo! and Bing. In an effort to increase traffic from those sources, I've added some structured data to the pages for finding aids and library materials that major search engines use to improve their search results. By adding this markup to DIMES, we should be able to improve our presence on results pages while also increasing our relevance rankings, which will move us closer to the top of the results set.<!--more-->

The metadata schema I used to do this comes from a website called (appropriately enough) [schema.org](http://schema.org/), which is a collaborative effort between Google, Bing, Yandex and Yahoo! that aims to improve search results for all four companies. Because it is endorsed by the major search engines, schema.org has quickly become the accepted way to embed structured data in web pages.

Right now, I've embedded structured metadata about the title, dates, languages, creator(s) and contributors, as well as the location of the collection into the pages for finding aids and library records. If you go to any finding aid page, view the page source (which you can do by right-clicking and then selecting "view source" or a similar option), and expand the <div> underneath the <title> tag, you'll see a whole bunch of embedded metadata. For example, here is what you'll see on pages for the John D. Rockefeller papers:

![jdr-schema]({{ site.baseurl }}/wp-content/uploads/2013/10/jdr-schema.png)

What these tags and attributes do is apply semantic meaning to particular pieces of information, so the search engine doesn't have to guess. Now it knows exactly what the title is, who the author is, and where this thing is located. You can see what Google sees on this page by dropping the URL into [Google's Structured Data Testing Tool](http://www.google.com/webmasters/tools/richsnippets), as this excerpt shows:

![jdr-structured]({{ site.baseurl }}/wp-content/uploads/2013/10/jdr-structured.png)

It will take a few weeks for search engines to pick up this structured data, but I hope that when they do, we will see an increase in traffic from search engines. Stay tuned!
