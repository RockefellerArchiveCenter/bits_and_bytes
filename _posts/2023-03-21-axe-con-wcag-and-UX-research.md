---
title: "axe-con 2023 Highlights: WCAG Updates and UX Research Strategy"
date: 2023-03-21T9:00:00
author:
    - Hannah Sistrunk
layout: post
categories:
    - Conferences/Education
tags:
    - accessibility
    - user experience
    - conferences

excerpt_separator: <!--more-->
---

While my [Digital Strategies team colleagues attended the Code4Lib conference](https://blog.rockarch.org/Code4Lib-Taking-Stock-Slowing-Down) last week, I was able to attend Deque’s [axe-con](https://www.deque.com/axe-con/) 2023 digital accessibility conference, which was a virtual event that included talks on a broad range of topics related to accessibility including organizational strategy, technical development, maintenance, testing, design, and advocacy. In this post I’ll highlight two of these talks that relate to my own work and upcoming projects at the RAC, but axe-con is free and recorded, so all the [talks are available online](https://www.deque.com/axe-con/schedule/) for further exploration.

<!--more-->

## Web Content Accessibility Guidelines 2.2

WCAG is a standard to make web content accessible to people with a wide range of disabilities, and [Melanie Phillipp gave a nice update](https://www.deque.com/axe-con/sessions/wcag-2-2-and-3-0-update/ ) on the upcoming release of [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/) from experience as a W3C contributor to these guidelines. The WCAG 2.x standard is organized into 12-13 guidelines that each have a number of testable success criteria. The success criteria are designated a level of conformance as A, AA, or AAA. Phillipp summarized the updates we can expect in 2.2, including 9 new success criteria, one success criteria that is moving from the AA level to the A level, and 1 success criteria being removed.

### Success Criteria Changes in WCAG 2.2

You can read about the version changes in detail in the [WCAG 2.2 documentation](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/), but I wanted to share this update with some specifics because the documentation can be overwhelming, and I think it’s really important to engage with and understand specific WCAG success criteria to help us achieve a minimum level of access for our websites, especially given that the most recent [WebAIM Million report](https://webaim.org/projects/million/) found that 96.8% of website homepages had WCAG 2.x failures; despite WCAG being around since the mid-nineties, equitable access to the web and digital content is still lacking for people with disabilities.

The 9 new criteria are being added to improve cognitive accessibility and mobility accessibility. They are:

- 2.4.12 and 2.4.13 (AA and AAA): When navigating by keyboard, the focused element must not be (completely) covered by other content. Partially hidden content is allowed by AA.
- 3.2.6 Consistent Help (A): When a help feature is available on multiple pages, it must be provided in a consistent location. For example, including contact information in a standard footer.
- 3.3.7 Redundant Entry (A): Do not require people to enter the same information more than once in a process, like when filling out a form.
- 3.3.8 and 3.3.9 Accessibility Authentication (A and AAA): There must be an authentication method that does not require tasks such as memorizing a password, transcribing codes or words, or solving a puzzle. Authentication should support copy/paste of passwords or use of password management tools.
- 2.5.7 Dragging Movements (AA): Drag and drop cannot be the only way an action can be achieved with a single pointer such as a mouse or a finger.
- 2.5.8 Target Size (AA): Controls must have a minimum size or target offset of 24x24 pixels height and width.

2.4.7 Focus Visible, which requires a visible focus indicator for keyboard operation, is moving from level AA to level A. Finally, 4.1.1 Parsing is being removed entirely in 2.2. It was originally required to ensure that assistive technology could parse HTML, but browsers have solved this issue and it is now an obsolete criterion.

At the RAC we [currently target WCAG 2.1 Level AA](https://rockarch.org/about-us/accessibility/#digital-space) as the minimum standard for our websites and are planning a comprehensive accessibility audit in the next year to build on our ongoing work to implement the [RAC Style Library and Guide](https://blog.rockarch.org/style-library-and-guide). As we’ve been looking ahead to the release of WCAG 2.2, we’ve incorporated some of these updates for newer website features, such as 2.5.8 Target Size when we determined the pixel dimensions of the squares in our DIMES minimap feature. However, I look forward to taking a fresh look at our sites with these new criteria to consider.

## Including Disability in UX Research

The second talk I’d like to highlight came from Michele Williams and was titled Research Through Broken Lenses: the need to “shift left” in UXR. Dr. Williams, a UX researcher and accessibility consultant, focused on UX research as a set of methods to guide us to the right ideas, not validate our existing ideas. In the context of disability inclusion, this means engaging disabled research participants (I’m following Williams’ lead here in using identity-first language), conducting foundational/generative UX research that includes disability from the beginning of a project, building inclusion into project timelines, and interrogating our own ableism. Williams distinguishes between accessibility as a baseline of being able to access and contribute to technology, and therefore something that product teams assess, and usability as the “measure of usefulness and understandability of the technology” that users assess. Therefore guidelines, such as the WCAG standard, are not enough to provide usability for disabled users.

As a UX researcher, I was particularly interested in Williams’ discussion of foundational, “generative” UX research methods that come early in a project to help shape it and understand context before building something. Usability testing, which Williams describes as a “summative” research method, necessarily comes at later phases in the development process once there is already at least a wireframe or prototype to test, and can require more adaptation when testing with disabled users. It’s a method we use frequently at the RAC, most robustly during the development of DIMES where we’ve conducted [many rounds of iterative usability studies](https://blog.rockarch.org/dimes-ux), but not yet tested with users who use screen readers or other assistive tech. But usability testing is not the only UX research method we use, and William’s talk prompted me to consider how we might be more inclusive of different disabled user experiences in some of the more foundational research we do.

Finally, Williams made an important point that is worth repeating in thinking about research design and participant recruitment: that “there is no group of people without disability present unless there is active discrimination”. Disability is all around us and present, and disabled people are not only research participants, but are our “co-creators and colleagues.”
