---
id: 1339
title: Twitter Cards and Open Graph metadata added to DIMES
date: 2015-05-04T13:48:14+00:00
author: Hillel Arnold
layout: post
permalink: /?p=1339
categories:
  - XTF
tags:
  - data
  - social media
  - structured data
---
Last week, we made some changes to [DIMES](http://dimes.rockarch.org/xtf/search) that will allow for better sharing on social media sites, particularly Facebook and Twitter, by adding embedded metadata.<!--more-->

Previously, if you tried to share a link on Facebook, it would look something like this:

![Ugly Link](/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.42.51-AM.png)

Ugly, right? And you'd see something equally unattractive when you tried to share one of these links on Twitter. To try and fix this, we added meta tags on finding aid pages that look a little like this:

![Meta tags](/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.28.27-AM.png)

If you look closely, you can see there are two sets of tags, which contain some very basic information about the collection. The first set helps produce a [Twitter Card](https://dev.twitter.com/cards/overview), which basically means that when you add a link to one of our finding aids to a tweet, you'll see a nicely formatted link that might look like this:

![Twitter Card](/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.50.21-AM.png)

See how it has an appropriate description of the collection there, and is also linked to the [RAC's Twitter page](https://twitter.com/rockarch_org)? The second set works with Facebook, using [Open Graph](https://developers.facebook.com/docs/sharing/opengraph) metadata to produce better-looking embedded links in posts:

![Open Graph metadata](/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-12.01.22-PM.png)

Again, you can see how the information included in the meta tags is making its way into the Facebook display.

At this point, you might be asking yourself, "Where does this information in those meta tags come from?" As you might have already guessed, I didn't enter this information manually into all our 800-plus finding aids! If you look at one of these finding aid pages, you'll notice that this information actually appears on the page as well:

![Finding aid data](/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.41.24-AM.png)

What we've done is extract information from the collection title as well as the top-level Abstract or Scope and Content note and add it to these meta tags. That means that our collection-level Abstracts and Scope and Content notes are actually pretty important – they give users looking at these links on the web a much better idea of the content they're likely to find at the other end. For example, a collection that doesn't have either a collection-level Abstract or a Scope and Content note looks very similar to links without these meta tags:

![Another ugly link](/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.51.49-AM.png)

So why does this matter? Who cares if links to our finding aid are particularly pretty or well formatted? You may have heard the adage, "you eat with your eyes first," and much the same is true for users on the web. Links that look reputable and interesting are much more likely to be clicked on or re-shared, which in turn helps drive those URLs higher in search relevance rankings. Since these meta tags also allow us to provide a single and stable URL, we'll be able to track use of these links much more effectively.
