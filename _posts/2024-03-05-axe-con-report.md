---
title: "axe-con 2024 Reflection: In Defense of Simplicity"
date: 2024-03-05T12:00:00
author: Hannah Sistrunk
layout: post
categories:
    - Conferences/Education
tags:
    - accessibility
    - user experience
    - conferences
excerpt_separator: <!--more-->
---

I recently attended [axe-con](https://www.deque.com/axe-con/), the annual free online digital accessibility conference from Deque. With speakers and talks firmly rooted in the business domain from companies like Hilton, GitHub, Meta, Adobe, ADP, and multiple financial institutions, it was interesting to see the common themes this year. In this post, I’ll share my impressions and takeaways. 

<!--more-->

I would characterize a broad swath of the talks to be from subject-matter experts working in businesses and thinking through how to convince other people that accessibility is important, and then how to incorporate digital accessibility into product design and development processes so that it is not tacked on at the end and therefore a mess of attempted remediation that everyone resents. These talks focused on ways to "shift left”, how to get stakeholder buy-in for accessibility work, change management for dev teams, improving testing efficiency, and driving change through policy and education. All very important topics to address, and all exhausting in that the starting premise is usually that there are a few knowledgeable and dedicated people hired by these companies, and then those people must convince the companies that digital accessibility actually does matter and teach them how to do it while dealing with a lot of pushback. 

## Improve usability and accessibility by not doing things
While I welcomed many of these talks and the strategies that accessibility practitioners shared, in this blog post my exhaustion inspires me to focus on something else that came up in axe-con for me. It’s an idea sparked by Heydon Pickering’s talk [You Don’t Know Your Users (and You Never Will)](https://www.deque.com/axe-con/sessions/the-folly-of-chasing-demographics/). It's the idea that some things shouldn’t exist at all. Interfaces are simply inputs and outputs, and the more things you add, the worse the usability becomes. He advocates for creating simple interfaces to make a comparable (accessible) experience possible. Pickering uses the example of four different [tab interfaces](https://inclusive-components.design/tabbed-interfaces/) that he tested as an A-B-C-D test with screen reader users where the version that was “correctly” coded for accessibility according to the W3C actually performed the worst. The usability was bad because users were not used to the semantics or behavior of tab interfaces. What would be better for users than an accessible tab interface? No tab interface.

This idea came up again in WebAIM Associate Director Jared Smith’s talk, [Using the WebAIM Million and User Surveys to Inform Accessibility Efforts](https://www.deque.com/axe-con/sessions/using-the-webaim-million-and-user-surveys-to-inform-accessibility-efforts/), where Smith shared important data and trends from the annual [WebAIM Million survey](https://webaim.org/projects/million/) that uses the WAVE testing tool to test the accessibility of the top 1 million websites. The trends included the important observations that, for website errors that could be automatically detected by the WAVE tool: 

- There has been a notable increase of page elements on homepages over the past 5 years – the size and complexity of pages is growing. 
- AND there has been a major increase in the number of [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) attributes (excluding landmarks) per homepage, but pages with ARIA had 67% more detectable accessibility errors 

ARIA is associated with more complex elements and custom widgets, so it makes sense that with more complexity and size, we’d see more ARIA. But... more ARIA doesn’t mean more accessible, and to Pickering’s point, more complexity doesn’t necessarily mean better usability for anyone. 

On the (maybe?) positive side, the WebAIM Million Survey also shows us that the vast majority of automatically detectable page errors are (in order of prevalence): 

1. Low contrast text 
2. Missing alt text 
3. Empty links 
4. Missing labels 
5. Empty buttons 
6. Missing page language 

These issues are all relatively easy to fix. So instead of trying to solve the problem of stagnant digital accessibility progress by declaring that [accessibility has failed](https://www.briandeconinck.com/jakob-nielsens-bad-ideas-about-accessibility/), and that it's time to throw our hands up and rely on a yet-to-be-invented AI solution, we need to keep going back to basics and simplify. And yes, that means continuing to share internal strategy on how to convince other people that accessibility is important, and then how to incorporate digital accessibility into product design and development processes, however exhausting that can be. 
