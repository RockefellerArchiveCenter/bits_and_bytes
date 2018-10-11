---
id: 1832
title: Project Electron August Update
date: 2017-09-08T11:30:21+00:00
author: Hannah Sistrunk
layout: post

permalink: /?p=1832
categories:
  - D-Team
  - Project Electron
  - Software and Systems
tags:
  - Behavior Driven Development
  - Cucumber
  - Gherkin
  - project electron
  - transfer
  - unit test
---
<span style="font-weight: 400;">This month has been all about developing the Project Electron transfer application. The work is based on our </span><a href="https://github.com/RockefellerArchiveCenter/project_electron/tree/master/transfer" target="_blank" rel="noopener"><span style="font-weight: 400;">defined specifications</span></a> <span style="font-weight: 400;">and the development decisions we made last month with our Marist College partners at </span><a href="http://blog.rockarch.org/?p=1815" target="_blank" rel="noopener"><span style="font-weight: 400;">the hackathon</span></a><span style="font-weight: 400;">. We are really excited about testing transfers in the coming month.</span>

<span style="font-weight: 400;">In this post I am going to briefly discuss </span><a href="https://github.com/cucumber/cucumber/wiki/Gherkin" target="_blank" rel="noopener"><span style="font-weight: 400;">Gherkin</span></a><span style="font-weight: 400;">, which in addition to being a delightful little cucumber, is a language that is used to define the requirements of software in order to document and </span><a href="https://cucumber.io/" target="_blank" rel="noopener"><span style="font-weight: 400;">test the software’s behavior</span></a> <span style="font-weight: 400;">as part of </span><a href="https://www.agilealliance.org/glossary/bdd/#q=~(filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'bdd))~searchTerm~'~sort~false~sortDirection~'asc~page~1)" target="_blank" rel="noopener"><span style="font-weight: 400;">Behavior Driven Development</span></a> <span style="font-weight: 400;">(BDD). We have been using Gherkin to write Quality Assurance (QA) tests for the functions of our Project Electron transfer application. The language is human-readable, so it can enable communication between teams working in different domains across a project.</span>

<!--more-->

<span style="font-weight: 400;">The Gherkin language is structured into statements of Features, Scenarios, and Steps using a syntax of text lines and indentations</span>_<span style="font-weight: 400;">. </span>_<span style="font-weight: 400;">As shown in the example below (from the <a href="https://github.com/cucumber/cucumber/wiki/Feature-Introduction" target="_blank" rel="noopener">Gherkin Documentation</a>), a feature defines what is to be tested. A feature will likely have multiple scenarios, which are more specific situations that could occur as part of that feature. Steps are defined is </span><a href="https://github.com/cucumber/cucumber/wiki/Given-When-Then" target="_blank" rel="noopener"><span style="font-weight: 400;">Givens, Whens, and Thens</span></a><span style="font-weight: 400;">. </span>**Given** <span style="font-weight: 400;">a precondition, </span>**When** an ****<span style="font-weight: 400;">action occurs </span>**Then** <span style="font-weight: 400;">a testable outcome results. </span>**And** <span style="font-weight: 400;">is used to add additional Givens, Whens, and Thens.</span>

<div id="attachment_1834" style="width: 551px" class="wp-caption alignnone">
  <a href="http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample1.png"><img class="size-full wp-image-1834" src="http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample1.png" alt="Gherkin Example Scenario" width="541" height="222" srcset="http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample1.png 541w, http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample1-300x123.png 300w, http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample1-500x205.png 500w" sizes="(max-width: 541px) 100vw, 541px" /></a>
  
  <p class="wp-caption-text">
    Example of a feature and scenario from the Gherkin documentation.
  </p>
</div>

<span style="font-weight: 400;">As part of the development of the transfer application, we will be testing features of the application. These will include features like bag validation of size and filename, virus checks, validation of bag metadata, user login, and account management. Below is an example of a Gherkin scenario we wrote for the virus check feature, which tests how the application will handle the identification of a virus found in a bag. </span>

<div id="attachment_1836" style="width: 544px" class="wp-caption alignnone">
  <a href="http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample2.png"><img class="size-full wp-image-1836" src="http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample2.png" alt="Gherkin example for virus check" width="534" height="185" srcset="http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample2.png 534w, http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample2-300x104.png 300w, http://blog.rockarch.org/wp-content/uploads/2017/09/PEAug2017_GherkinExample2-500x173.png 500w" sizes="(max-width: 534px) 100vw, 534px" /></a>
  
  <p class="wp-caption-text">
    A Gherkin scenario that is part of the “check bag for viruses” feature to test the transfer app.
  </p>
</div>

<span style="font-weight: 400;">For me, being new to BDD concepts, Gherkin, and unit testing, I found writing these features/scenarios for our work to be useful beyond their functional purpose; the process helped me better understand the functional requirements of the application by forcing me to think through possible scenarios and outcomes. I did struggle initially with avoiding implementation details and focusing on the behaviour of the application in the Gherkin tests. For me, it was essential to step back and take some time to learn the basics of BDD, Test Driven Development (TDD), and unit testing as a conceptual foundation before jumping into writing Gherkin tests. </span>

<span style="font-weight: 400;">As we move forward with Project Electron and QA processes, these Gherkin tests will not only help us test the behavior of the transfer app, but also isolate and clarify its expected functions in a language that is accessible to all members of the project. We will be making these Gherkin tests and the rest of our QA process available </span><a href="https://github.com/RockefellerArchiveCenter/project_electron_transfer" target="_blank" rel="noopener"><span style="font-weight: 400;">on GitHub</span></a> <span style="font-weight: 400;">as part of the Project Electron documentation.</span>