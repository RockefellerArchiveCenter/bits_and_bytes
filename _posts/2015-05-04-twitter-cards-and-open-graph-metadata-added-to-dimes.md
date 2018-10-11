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
Last week, we made some changes to <a href="http://dimes.rockarch.org/xtf/search" target="_blank">DIMES</a> that will allow for better sharing on social media sites, particularly Facebook and Twitter, by adding embedded metadata.

<!--more-->Previously, if you tried to share a link on Facebook, it would look something like this:

[<img class="alignnone size-full wp-image-1340" src="http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.42.51-AM.png" alt="Screen Shot 2015-04-30 at 11.42.51 AM" width="662" height="179" srcset="http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.42.51-AM.png 662w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.42.51-AM-300x81.png 300w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.42.51-AM-500x135.png 500w" sizes="(max-width: 662px) 100vw, 662px" />](http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.42.51-AM.png)

Ugly, right? And you’d see something equally unattractive when you tried to share one of these links on Twitter. To try and fix this, we added meta tags on finding aid pages that look a little like this:

[<img class="alignnone size-full wp-image-1341" src="http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.28.27-AM.png" alt="Screen Shot 2015-05-04 at 10.28.27 AM" width="677" height="225" srcset="http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.28.27-AM.png 677w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.28.27-AM-300x100.png 300w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.28.27-AM-500x166.png 500w" sizes="(max-width: 677px) 100vw, 677px" />](http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.28.27-AM.png)

If you look closely, you can see there are two sets of tags, which contain some very basic information about the collection. The first set helps produce a <a href="https://dev.twitter.com/cards/overview" target="_blank">Twitter Card</a>, which basically means that when you add a link to one of our finding aids to a tweet, you’ll see a nicely formatted link that might look like this:

[<img class="alignnone size-full wp-image-1342" src="http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.50.21-AM.png" alt="Screen Shot 2015-04-30 at 11.50.21 AM" width="594" height="268" srcset="http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.50.21-AM.png 594w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.50.21-AM-300x135.png 300w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.50.21-AM-500x226.png 500w" sizes="(max-width: 594px) 100vw, 594px" />](http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-11.50.21-AM.png)

See how it has an appropriate description of the collection there, and is also linked to the <a href="https://twitter.com/rockarch_org" target="_blank">RAC’s Twitter page</a>? The second set works with Facebook, using <a href="https://developers.facebook.com/docs/sharing/opengraph" target="_blank">Open Graph</a> metadata to produce better-looking embedded links in posts:

[<img class="alignnone size-large wp-image-1344" src="http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-12.01.22-PM.png" alt="Screen Shot 2015-04-30 at 12.01.22 PM" width="556" height="138" srcset="http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-12.01.22-PM.png 556w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-12.01.22-PM-300x74.png 300w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-12.01.22-PM-500x124.png 500w" sizes="(max-width: 556px) 100vw, 556px" />](http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-04-30-at-12.01.22-PM.png)

Again, you can see how the information included in the meta tags is making its way into the Facebook display.

At this point, you might be asking yourself, “Where does this information in those meta tags come from?” As you might have already guessed, I didn’t enter this information manually into all our 800-plus finding aids! If you look at one of these finding aid pages, you’ll notice that this information actually appears on the page as well:

[<img class="alignnone size-full wp-image-1345" src="http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.41.24-AM.png" alt="Screen Shot 2015-05-04 at 10.41.24 AM" width="647" height="108" srcset="http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.41.24-AM.png 647w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.41.24-AM-300x50.png 300w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.41.24-AM-500x83.png 500w" sizes="(max-width: 647px) 100vw, 647px" />](http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.41.24-AM.png)

What we’ve done is extract information from the collection title as well as the top-level Abstract or Scope and Content note and add it to these meta tags. That means that our collection-level Abstracts and Scope and Content notes are actually pretty important – they give users looking at these links on the web a much better idea of the content they’re likely to find at the other end. For example, a collection that doesn’t have either a collection-level Abstract or a Scope and Content note looks very similar to links without these meta tags:

[<img class="alignnone size-full wp-image-1346" src="http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.51.49-AM.png" alt="Screen Shot 2015-05-04 at 10.51.49 AM" width="487" height="169" srcset="http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.51.49-AM.png 487w, http://blog.rockarch.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.51.49-AM-300x104.png 300w" sizes="(max-width: 487px) 100vw, 487px" />](http://rockarch.org/programs/digital/bitsandbytes/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-10.51.49-AM.png)

So why does this matter? Who cares if links to our finding aid are particularly pretty or well formatted? You may have heard the adage, “you eat with your eyes first,” and much the same is true for users on the web. Links that look reputable and interesting are much more likely to be clicked on or re-shared, which in turn helps drive those URLs higher in search relevance rankings. Since these meta tags also allow us to provide a single and stable URL, we’ll be able to track use of these links much more effectively.