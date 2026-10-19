---
title: "Accessibility Is a Program, Not a Project: Take Aways from the 2026 M-Enabling Summit"
date: 2026-09-21T09:00:00
author: Hannah Sistrunk
layout: post
categories:
  - Conferences/Education
tags:
  - conferences
  - accessibility
  - user centered design
excerpt_separator: <!--more-->
---

I recently attended the [M-Enabling Summit](https://www.m-enabling.com/event/c303ac78-b6b9-45b3-a375-10f9ea7bc56b/m-enabling-summit) in Arlington, Virginia, an annual conference organized by the global nonprofit [G3ict](https://g3ict.org/what-we-do/m-enabling-summit) and supported by the International Association of Accessibility Professionals (IAAP). The Summit aims to advance digital accessibility and inclusive technology. Over 2 days and more than 50 sessions, people who build, regulate, use, advocate for, and form strategy related to accessible technology gathered from across domains including government, education, corporate, and nonprofit contexts.

A common theme this year was the importance of establishing and sustaining accessibility work as a program, not just a project. A project ends when the fixes are done, but a program is integrated, continuous, and resourced. In this post, I’ll dig into this idea as explored at the Summit, and from my perspective as User Experience and Accessibility Analyst on the Digital Strategies team here at the Rockefeller Archive Center.
<!--more-->

## Specs, checks, and testing from the start
“Shifting left” in accessibility work is a movement toward planning for and building accessibility in from the start, which saves time, resources, effort, and ultimately results in better solutions for everyone. There is still so much work to do. The [WebAIM Million](https://webaim.org/projects/million/) annual automated accessibility test of the top 1,000,000 homepages on the web found more errors in 2026 than 2025, reversing a trend of incremental improvement over the past 6 years. As AI coding tools become more common, that makes building accessibility in from the start even more important. Without purposeful integration, existing bad patterns proliferate and multiply.

At the M-Enabling Summit, Karl Groves illustrated this in his talk "Vibe Coding Accessibility." Groves presented an experiment illustrating the importance of shifting left even in basic web development tasks using AI tools: he prompted 12 of the leading AI coding products to generate a pizza order form for the web without explicitly mentioning accessibility, and they all produced inaccessible code that would block users or add significant barriers to access. As Groves stated, the models “have been trained on crap” and therefore produce it, quickly accumulating technical debt. However, when Groves specified explicit accessibility requirements and specific applicable [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/) success criteria in the prompts, most (but not all) models produced more accessible forms, although they notably still required manual checks and screen reader testing to identify all the issues. 

Across the Summit, speakers returned to the same idea: accessibility has to be built in early and maintained continuously, with automated checks, tooling, and processes that make it everyone’s responsibility. Ayelet Winer at T-Mobile highlighted her team’s [open source MagentaA11y](https://www.magentaa11y.com/) as a set of component-based accessibility criteria to automate testing. The scale of PDF creation and challenges of remediation came up across many vendor demos and product discussions. And in one session from Christina Adams and Clay Garrard of Siteimprove, they made the case for using established IT frameworks to think about operationalizing accessibility. That session is worth highlighting in more depth.

<blockquote>An audit tells us where we are, but a program is how we keep getting better</blockquote>

## Moving beyond bug fixes and audits
Adams and Garrard argued that teams working on digital accessibility can borrow from [ITIL v4](https://wiki.en.it-processmaps.com/index.php/ITIL_4), an IT service management framework, by mapping its service value chain activities (plan, improve, engage, design and transition, obtain and build, and deliver and support) to accessibility. The goal is a program of continous improvement, with problems treated as systemic rather than as isolated findings arising from a one-off audit. Testing happens in layers and continuously: at creation, in development, and in production. They called for teams to position and understand accessibility as a core requirement that should not need to be re-justified. As Garrard stated, the goal is to “make the right thing the easier thing.”

Fresh off an [org-wide accessibility audit](https://blog.rockarch.org/accessibility-audit-process) and staff training, and now deep in remediation work, I’m turning to what’s next for the Rockefeller Archive Center: to continue building an accessibility program supported by tools like our [Style Library and Guide](https://styles.rockarch.org/) that help us make the right thing easier. An audit tells us where we are, but a program is how we keep getting better and keep supporting [our values](https://rockarch.org/about-us/mission-vision-values/) to be human-centered, responsible, equitable, adaptive, and trustworthy in how and what we build.