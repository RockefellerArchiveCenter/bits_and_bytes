---
post_id: 2101
title: "Project Electron Update: Aurora and Web Accessibility"
date: 2018-11-26T11:01:45+00:00
author: Hannah Sistrunk
layout: post
redirect_from: /?p=2101
categories:
  - Project Electron
tags:
  - accessibility
  - aurora
  - project electron
  - universal design
  - usability
  - user experience
excerpt_separator: <!--more-->
---
Following our [usability testing of Aurora](/project-electron-update-aurora-usability-testing), we undertook an accessibility audit of the application, testing it against the Section 508 and WCAG 2.0 standards and identifying issues. We then made changes to the application and provided recommendations for future improvements. This audit also gave us a chance to reflect more broadly on our approach to accessibility and how we can incorporate universal design concepts into our work at the RAC.

<!--more-->

## Accessibility and Universal Design

Accessibility is the practice of making systems usable by as many people as possible, including individuals who have visual, motor, auditory, speech, or cognitive disabilities. In providing access to digital infrastructure, there are various legal requirements and international standards that guide best practices. In the United States, [Section 508 of the Rehabilitation Act of 1973](https://section508.gov/manage/laws-and-policies#508-policy) provides standards for electronic and information technology accessibility, which have recently been updated to reflect European Commission standards and the World Wide Web Consortium (W3C) [Web Content Accessibility Guidelines (WCAG 2.0)](https://www.w3.org/WAI/standards-guidelines/wcag/). These guidelines provide specific requirements for making web content accessible for everyone including users who access text with screen readers and visual zoom, rely on captions and textual descriptions for audio and video content, and use the keyboard or voice-based navigation. There are three levels of conformance for the WCAG 2.0 standard: A (lowest), AA, and AAA (highest). While these standards and legal requirements provide guidance in addressing web accessibility issues, web accessibility should be an integral part of all user-centered design processes, not just left as a box to tick at the very end of an application's development.

Accessibility is also a central component of universal design, a user-centered approach to the design of a system or environment aimed at making it usable by as many people as possible regardless of their ability, age, size, or other factors. It is rooted in the idea that a diverse range and breadth of human ability is normal, and that rather than adding specialized adaptations for access, the design should strive to be widely inclusive from the outset. For example, designing building entrances without stairs benefits people using wheelchairs, folks with strollers, a person carrying groceries, someone using a cane to walk, movers carrying a couch, or a person in a leg cast recovering from an injury. As defined by a working group at the Center For Universal Design at North Carolina State University in 1997, there are [7 Principles of Universal Design](http://universaldesign.ie/what-is-universal-design/the-7-principles/the-7-principles.html):

1. Equitable Use
2. Flexibility in Use
3. Simple and Intuitive Use
4. Perceptible Information
5. Tolerance for Error
6. Low Physical Effort
7. Size and Space for Approach and Use

This approach helps reduce stigma, promotes creativity and innovation, and contributes to inclusive environments that provide equitable access for a wide range of users including user groups that are often excluded in the design process. Universal design and accessibility are not definitively achieved as part of a project, but are a set of approaches, goals, and best practices that are part of an ongoing effort to engage and empower as many user communities as possible.

## Aurora Accessibility Audit

In testing Aurora, we used WCAG 2.0 AA as a compatibility goal. We measured our compliance by using a few different accessibility evaluation tools, running them on each page of the application's web user interface and recording issues that the tools identified. The tools we used are all browser extensions, available for most modern browsers:

* [Siteimprove Accessibility Checker](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc?hl=en-US) Chrome Extension
* [Wave Evaluation Tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
* [Axe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)

The tools each evaluate a slightly different set of issues, and present the results of their evaluations in different ways, so it was valuable to use all of them to get a comprehensive view of accessibility issues and fixes.

In addition to using these evaluation tools, we also:

* Viewed each page without CSS to review the structure and hierarchy of content.
* Reviewed the text in Aurora to ensure that it would be easy for users to understand.
* Checked to ensure visual information included alternative text or verbal explanation.
* Tested the site navigation using screen readers: [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) browser extension and [VoiceOver](https://www.apple.com/accessibility/mac/vision/) for MacOS).

### Aurora Accessibility Issues

The main accessibility issues identified are as follows. Unless noted, the issues were fixed:

* Add [ARIA labels](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html) to modals, input fields, select boxes, and text areas to enable users with assistive technologies to access forms including Rights and BagIt Profiles, accession records, and dropdown menus and appraisal actions.
* Add sectioning elements/[ARIA landmarks](https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html) to pages. Pages need a "main" landmark to be able to easily bypass menu links in navigation.
* Enable [text resizing](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html) in the html head &lt;meta&gt; tag to enable resizing functions such as scale and zoom.
* Define [human-readable language of the page](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html) in the html &lt;head&gt; element so that screen readers can correctly access the linguistic content.
* Edit [section headings](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html#sectiondef) so that they are descriptive of their associated content, nested properly, and do not skip headings to ensure optimal page organization and navigation for users with assistive technologies.
* Remove bold tags (&lt;b&gt; or &lt;strong&gt;) if they are used for styling instead of semantic purposes so that screen readers do not misinterpret the textual emphasis.
* Change text and link color to provide [sufficient color contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) to improve visual access to content. This issue is pending. The Bootstrap CSS theme used by Aurora does not meet the WCAG 2.0 requirements for an optimal color contrast ratio.
* Provide [visible keyboard focus](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html) to enable keyboard navigation. This issue is pending and has been tagged for the next release of Aurora.

## What's Next

With the accessibility audit, we identified and made some important changes to Aurora that will improve its usability for a wide range of users, and we will continue to incorporate fixes to accessibility issues as part of the usability improvements we make to Aurora. This work is closely tied to the [Project Electron value](https://projectelectron.rockarch.org/project-values/) of placing users at the center of the design process in order to make tools that are empowering, engaging, transparent, and robust. The process has been an important growth opportunity for the RAC, because we have developed new skills and knowledge to be able to improve accessibility across our existing web properties, open source tools, design workflows, and organizational policies. We recognize that we still have a lot to learn in this domain, but we are eager to engage and incorporate existing best practices related to universal design methodologies and accessibility into our work.

As I noted in my discussion of universal design, it is an approach that is widely inclusive from the outset. Our accessibility audit has improved Aurora, but it will be important in future work to incorporate universal design methodologies in all aspects of design and development processes, including creating user stories and personas, defining requirements, wireframing, and throughout development. The process is not just about code, but about an inclusive approach to who our users are and can be.

## Web Accessibility Resources

A11Y Nutrition Cards for Accessible Components. Based in WAI-ARIA Authoring Practices Guide: [https://davatron5000.github.io/a11y-nutrition-cards/](https://davatron5000.github.io/a11y-nutrition-cards/)

Duke Web Accessibility Resources: [https://web.accessibility.duke.edu/](https://web.accessibility.duke.edu/)

MDN Web Docs Handling Common Accessiblity Problems: [https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)

Usability.gov Accessibility Basics: [https://www.usability.gov/what-and-why/accessibility.html](https://www.usability.gov/what-and-why/accessibility.html)

W3C Web Accessibility Initiative How to Meet WCAG2: [https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0)

W3C Web Accessibility Initiative Web Accessibility Tutorials: [https://www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)

WebAIM Accessible Javascript: [https://webaim.org/techniques/javascript/](https://webaim.org/techniques/javascript/)

WebAIM Color Contrast Checker: [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)
