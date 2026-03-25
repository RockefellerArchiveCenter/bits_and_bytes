---
title: "Web Accessibility Auditing: A Small Team Can Foster Broad Organizational Learning"
date: 2026-03-25T11:10:00
author: Hannah Sistrunk
layout: post
categories:
  - Collaboration
  - Web Development
tags:
  - accessibility
  - collaboration
  - user experience
  - training
excerpt_separator: <!--more-->
---

A team of four with mixed expertise ran a rigorous web accessibility audit of 16 Rockefeller Archive Center (RAC) sites while supporting learning about digital accessibility across the organization. In this post, I’ll walk through our process and key takeaways from the project.
<!--more-->

## The Audit Context

As the RAC [Accessibility Statement](https://rockarch.org/about-us/accessibility/) asserts, we are “committed to providing broad and equitable access to our collections, facilities, programs, services, and websites for people with disabilities in ways that are welcoming and inclusive and that support a right to privacy and self-determination.” As part of this commitment, we target the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) 2.2 AA as our minimum standard for both our public websites and internal web-based tools for staff. It’s a commitment that we’ve continuously and iteratively supported over the past several years through staff training, “shifting left” in design and development practices, and by codifying accessible web components through our [Style Library and Guide](https://blog.rockarch.org/style-library-reflection). This audit project is part of that larger effort to develop technical knowledge in this domain and identify opportunities to provide broader and more equitable access.

<blockquote>“We are committed to providing broad and equitable access [...] in ways that are welcoming and inclusive and that support a right to privacy and self-determination.”</blockquote>

An important contextual note so that readers can calibrate our approach with your own context: The RAC is an organization that builds and maintains many of our own web tools in-house, and therefore faces different accessibility challenges than those that rely primarily on third-party platforms. We have more control, but are also solely responsible for remediation for these tools. The audit scope and planned ownership of remediation work described here may be more extensive than what others encounter as we rely less on existing [Voluntary Product Accessibility Templates (VPATs)](https://www.itic.org/policy/accessibility/vpat) or conversations and advocacy with vendors.

## How We Organized the Work

The audit team consisted of a lead analyst (myself, User Experience and Accessibility Analyst on the Digital Strategies team) and three contributors: Archivists Renee Pappous from our Access team, Darren Young from our Processing team, and Project Associate Andrea Cadornigara from our Research and Engagement Program. Drawing on my knowledge as an [IAAP-certified Web Accessibility Specialist](https://www.accessibilityassociation.org/was-exam#AboutWAS) and UX and web development practitioner, I planned and led the project. I developed a standardized audit process for the team, identified a suite of supporting tools, conducted an initial training for contributors, and coordinated the audit process using a sprint-based agile workflow designed to support collaboration and learning as a team. We scheduled the work at a pace to accommodate other job responsibilities while maintaining project momentum, with an average time commitment of 2–3 hours/week for contributors spread over 7 sprints.

Finally, we leveraged this work as a jumping-off point during the project to share digital accessibility best practices with our entire staff, emphasizing accessibility as an ongoing and shared responsibility rooted in [our organizational values](https://rockarch.org/about-us/mission-vision-values/). We compiled and regularly shared digital accessibility tips in an all-staff message channel that emphasized practical approaches and tools to incorporate accessibility best practices into everyday work. Tips included considerations for use of headings, alt text, use/choice of color, social media posts, link text, presentation slides, and audiovisual content. At the end of the project, the audit team also conducted a training presentation on web accessibility that was open to all staff.

## The Audit Process

Digital accessibility can be a highly technical domain, but there are some basic checks that can quickly and impactfully identify accessibility bugs and issues that impede access. If properly supported by specialists with existing domain knowledge, this opens accessibility auditing work up to a range of contributors with different levels of existing knowledge. A variety of free browser extensions, bookmarklets, and checklists can also aid accessibility auditing. In this post I’ll highlight the tools we used, though this is not inteded to be an exhaustive list. What you need will vary by testing goals and context. For more options, see the [W3C Web Accessibility Initiative's' list of evaluation tools](https://www.w3.org/WAI/test-evaluate/tools/list/).

We approached our audit in a four-step process:

### Step 1: Identify Scope and Set Up An Issue Tracking System

**Tools**: Excel sheet and issue severity rubric

Based on research of existing issue tracking approaches, including the [VPAT](https://www.itic.org/policy/accessibility/vpat), [Website Accessibility Conformance Evaluation Methodology (WCAG-EM)](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/), and [templates shared from Digital Solutions at Harvard Libraries](https://docs.google.com/presentation/d/1EeECT5nktKKNbj8ayIlW1VdtDuqCIVjmpazjAfd7TuQ/edit?usp=sharing), we set up a working Excel tracking sheet to record specific issues targeting WCAG 2.2 AA success criteria across sites. For each issue, we recorded the following actionable information to be able to pass to developers, designers, or content creators to understand, reproduce, and address:

1. **Location**: Website, page title, and page URL  
2. **Page area/element**: e.g., header navigation, all tables, “edit” buttons  
3. **Testing method**: automated, manual review, or screen reader (including specific screen reader-browser combinations)  
4. **Issue description**: describe the issue so that it can be reproduced  
5. **Associated WCAG criteria**, when applicable  
6. **Action recommended**: if known, or can be a note that more research is required (e.g., “research required, pass to developer”)  
7. **Notes**: any additional contextual information or observations that can support understanding and remediation  
8. **Screenshot** if useful  
9. **Severity score**: based on rubric  
10. **WCAG violation?** yes/no – sometimes something is a best practice, but not required by WCAG  

#### Identify Scope

The audit aimed to cover all site features through page sampling. We selected specific pages from each site to include all possible components. For example, on a site like this blog, we didn’t test all 300+ posts going back to 2012 (!); we tested 7 specific pages representing all major elements and layout variations. This approach ensures that remediation efforts prioritize issues affecting the overall accessibility of the site’s design, structure, and functionality.

#### Severity Score Rubric

We used the following rubric to assign severity scores to each issue to help understand impact and prioritize action. This rubric was adapted from a workflow template from [John Jameson associated with a Princeton University Accessibility Review](https://docs.google.com/spreadsheets/d/1tZVraCtjM2pHEZ0o-EtpKYC_zuSMmg-30YZit9q0ncQ/edit?usp=sharing).

<div class="table-responsive">
  <table class="table table-striped">
    <caption class="mt-30 text--bold">Accessibility Issue Severity Levels Rubric</caption>
    <thead>
      <tr>
        <th scope="col">Severity</th>
        <th scope="col">Explanation</th>
        <th scope="col">Examples of Impact</th>
        <th scope="col">Next Steps</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">High</th>
        <td>Blocks access. Certain users cannot or likely cannot perceive or operate this. Fails WCAG 2.2 A or AA.</td>
        <td>
          <ul>
            <li>People using screen readers cannot activate an unlabeled button</li>
            <li>Keyboard-only users cannot reach a control</li>
          </ul>
        </td>
        <td>Fix as soon as possible.</td>
      </tr>
      <tr>
        <th scope="row">Moderate</th>
        <td>Does not block access, but certain users may have difficulty perceiving, understanding or operating this. Fails WCAG 2.2 A or AA.</td>
        <td>
          <ul>
            <li>Users with low vision encounter poor contrast on non-critical elements</li>
            <li>People using screen readers must navigate extra steps to understand and complete task</li>
          </ul>
        </td>
        <td>Fix as soon as possible, if practical within project constraints.</td>
      </tr>
      <tr>
        <th scope="row">Low</th>
        <td>Users should be able to perceive or operate this, but may find it frustrating or will take more time. Either fails WCAG 2.2 A or AA OR violates advisory techniques/best practices.</td>
        <td>
          <ul>
            <li>People using screen magnification or with motor impairments encounter an isolated case where a line of text requires horizontal scroll to access.</li>
            <li>People using screen readers submit a form, and form errors are indicated inline, but there is no summary of all errors on the page.</li>
          </ul>
        </td>
        <td>Evaluate; fix if practical within project constraints or defer to next redesign.</td>
      </tr>
      <tr>
        <th scope="row">Note</th>
        <td>No WCAG violation, but this presents concerns for general usability and code quality.</td>
        <td>
          <ul>
            <li>Aria roles are used redundantly (e.g., &lt;button role="button"&gt;)</li>
            <li>People using braille readers encounter very long link text, though the important info is at the beginning of the text</li>
          </ul>
        </td>
        <td>Evaluate; action may not be required depending on context. Fix within project constraints or defer to next redesign.</td>
      </tr>
    </tbody>
  </table>
</div>

### Step 2: Automated Testing

**Tool**: [SiteImprove Accessibility Checker](https://chromewebstore.google.com/detail/siteimprove-accessibility/djcglbmbegflehmbfleechkjhmedcopn) Chrome browser extension

We ran automated checks using the SiteImprove Accessibility Checker on each in-scope website page, verified any flagged issues, and documented them in our tracking sheet.

SiteImprove is one of many tools available, and I selected it for its ease of use and explanatory content/links for people new to WCAG and auditing. We set the tests to run with four conformance filters applied: Level A, Level AA, WAI-ARIA authoring practices, and accessibility best practices.

Automated testing is a good starting point, but it can only assess about a third of WCAG success criteria. [Steve Faulkner’s A Tool’s Errand](https://html5accessibility.com/stuff/2025/03/24/a-tools-errand/) break down which WCAG success criteria automated tools miss, and Karl Grove examines [what WCAG success criteria can be tested and how](https://karlgroves.com/web-accessibility-testing-what-can-be-tested-and-how/), emphasizing these limitations.

### Step 3: Manual Testing

Because automated tools leave the majority of WCAG unchecked, manual testing supported by various tools is where a lot of the heavy lifting of the audit checks happens.

**Primary tools**:

- [Keyboard](https://www.accessibility-developer-guide.com/knowledge/keyboard-only/browsing-websites/#interacting-with-a-website)  
- [Resize Text by Equa11y](https://chromewebstore.google.com/detail/resize-text-by-equa11y/oeicccmpnoibnakidoiebpigppiicndk) to resize text to 200%  
- [Image alt text viewer](https://chromewebstore.google.com/detail/image-alt-text-viewer/nhmihbneenlkbjjpbimhegikadfleccd) to view alt text  
- Browser zoom to 400% with [Window Resizer](https://chromewebstore.google.com/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) set to test reflow  
- [Text Spacing Editor](https://chromewebstore.google.com/detail/text-spacing-editor/amnelgbfbdlfjeaobejkfmjjnmeddaoj?pli=1) using WCAG values  
- [A11y Tools “Show Focus” styles](https://a11y-tools.com/bookmarklets/) bookmarklet

Assisted by these tools, we conducted 10 manual checks on each page to test for the following:

<div class="table-responsive">
  <table class="table table-striped">
    <caption class="visually-hidden">WCAG Accessibility Manual Checks</caption>
    <thead>
      <tr>
        <th scope="col">Manual Check</th>
        <th scope="col">Associated WCAG Success Criteria</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Descriptive and unique page titles</th>
        <td><a href="https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html">2.4.2 Page Titled</a></td>
      </tr>
      <tr>
        <th scope="row">Skip links</th>
        <td><a href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html">2.4.1 Bypass Blocks</a></td>
      </tr>
      <tr>
        <th scope="row">Keyboard navigation functions</th>
        <td>
          <ul>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html">2.1.1 Keyboard</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html">2.1.2 No Keyboard Trap</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html">2.4.7 Focus Visible</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html">2.4.3 Focus Order</a></li>
          </ul>
        </td>
      </tr>
      <tr>
        <th scope="row">Text resize to 200%</th>
        <td><a href="https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html">1.4.4 Resize Text</a></td>
      </tr>
      <tr>
        <th scope="row">Content reflows at 400% zoom</th>
        <td><a href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html">1.4.10 Reflow</a></td>
      </tr>
      <tr>
        <th scope="row">Text spacing can be adjusted</th>
        <td><a href="https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html">1.4.12 Text Spacing</a></td>
      </tr>
      <tr>
        <th scope="row">Non-text content has alternative text</th>
        <td><a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html">1.1.1 Non-text Content</a></td>
      </tr>
      <tr>
        <th scope="row">Use of color to convey meaning</th>
        <td><a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html">1.4.1 Use of Color</a></td>
      </tr>
      <tr>
        <th scope="row">Correct form function and error handling</th>
        <td>
          <ul>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html">3.3.1 Error Identification</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html">3.3.2 Labels or Instructions</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html">4.1.3 Status Messages</a></li>
          </ul>
        </td>
      </tr>
      <tr>
        <th scope="row">Media content and repetitive flashing</th>
        <td>
          <ul>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html">1.2.1 Audio-only and Video-only</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html">1.2.2 Captions</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html">1.2.3 Audio Description or Media Alternative</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html">1.2.5 Audio Description</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html">2.3.1 Three Flashes or Below Threshold</a></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

The keyboard navigation check is worth singling out: navigating a page using only the Tab, Shift-Tab, Enter, arrow keys, Space, and Escape keys requires no additional tools, and will reveal which interactive elements on a page are visible, focusable, and operable (or not) with a keyboard.

### Step 4: Screen Reader Testing

**Primary tools**:

* [NVDA](https://www.nvaccess.org/download/) with Chrome browser (on Windows) for primary testing
* [A11y Bookmarklets](https://a11y-tools.com/bookmarklets/): “Navigate like a screen reader user” and “Screen reader simulation” tools to supplement screen reader testing.

Testing with a screen reader surfaces a category of issues that neither automated tools nor manual visual checks will reliably catch: issues with dynamic content, form functionality, custom widgets like datepickers, and other use of ARIA attributes are revealed through this testing.

The [WebAim Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey10/) identifies the most common screen reader-browser combinations in use. Based on this data alongside our web analytics, we primarily tested with [NVDA](https://www.nvaccess.org/download/) with Chrome on Windows. For more complex components with documented variability across assistive technologies, we also conducted targeted secondary testing with [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac) on Safari (Mac) and [JAWS](https://support.freedomscientific.com/Downloads/JAWS) on Chrome (Windows).

Screen readers have a steeper learning curve than other tools, so I conducted all testing based on my prior experience, but not as an expert user. Still, even basic navigation with a screen reader exposes issues that sighted testers will miss.

## Audit Results

We summarized our findings in an internal report, and while the audit results are not the emphasis of this post, I’ll share a few points about the nature of what we found in the hopes that they are useful in other contexts. Across our 16 sites, we identified 200+ issues, which feels like a lot. These results are definitely motivational for us to get things fixed, but also encouraging in a few ways:

1. Fewer than 10% of these issues are “high severity”, meaning most issues don't outright block access, and more than 50% were “low severity.” That’s good because users are not encountering major accessibility barriers, but it’s also important to acknowledge that the cumulative friction of many small issues can be detrimental to the overall user experience.
2. Unsurprisingly, most issues were identified in our more complex and larger sites, and encouragingly we found fewer issues in our newer sites pointing to improvements over time in adopting accessibility best practices.
3. The most common recurring issues across sites fell into three categories: responsive reflow behaviour, focus styles lacking sufficient color contrast, and accessible naming of interactive controls. These are areas where a fix in our shared [Style Library](https://styles.rockarch.org/) can impact multiple sites at once, which means that in many cases we can fix multiple problems in one place while improving future design.
4. We did not find many of [the most common website issues](https://webaim.org/projects/million/) like low-contrast text, missing alt text, or missing form labels. This is likely because automated testing already catches these, and over times we've built knowledge and processes to address these more common issues during design, development, and review.

<blockquote>“85% of the issues we identified came from manual or screen reader testing, not automated checks.”</blockquote>

One noteworthy finding came from looking at which of our testing methods resulted in flagged issues, which again emphasized the importance of testing beyond automated tools: 85% of the issues we identified came from manual or screen reader testing, not automated checks.

## Project Takeaways

With a small team and a large scope, we accomplished and learned a lot! Here are a few takeaways that may be helpful for others:

1. **Automated tools are a start, not an end**. Test with a keyboard and do other manual checks. Automated testing is only part of the picture.
2. **Free tools are sufficient**. This work does not require a big budget, but it does require time and detailed attention.
3. **Technical expertise is important**. Audit contributors were new to accessibility testing, though most had basic web development familiarity (HTML and CSS). Expert support was essential for screen reader testing, addressing technical coding questions, and interpreting findings against WCAG success criteria and ARIA best practices. This initial expertise was critical for training and supporting the team, highlighting the value of investing in these skills.
4. **Structure supports collaboration**. Providing structure in the form of scheduled sprints with regular meetings to work through challenges and reflect on process, having a clearly defined audit process that everyone followed, and using a shared issue tracking sheet and rubric all contributed to successful, fulfilling, and actionable collaborative work.
5. **Cross-program team involvement rooted in shared values builds organizational knowledge and buy-in**. Intentionally building a team of contributors who aren’t already accessibility specialists helps build broader organizational awareness of and support for accessibility work as a shared responsibility. Rooting the work in shared values that center people builds enthusiasm and support.

## What’s Next

The audit project is complete, but the work continues. A project is already underway led by our Digital Strategies team to remediate the issues we identified in this audit. Understanding that supporting and improving digital accessibility is ongoing and iterative, we are committed to continuing to center people in how we build and maintain our digital tools.