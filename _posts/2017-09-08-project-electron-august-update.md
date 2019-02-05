---
post_id: 1832
title: Project Electron August Update
date: 2017-09-08T11:30:21+00:00
author: Hannah Sistrunk
layout: post
redirect_from: /?p=1832
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
excerpt_separator: <!--more-->
---
This month has been all about developing the Project Electron transfer application. The work is based on our [defined specifications](https://github.com/RockefellerArchiveCenter/project_electron/tree/master/transfer) and the development decisions we made last month with our Marist College partners at [the hackathon](/project-electron-july-update). We are really excited about testing transfers in the coming month.

In this post I am going to briefly discuss [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin), which in addition to being a delightful little cucumber, is a language that is used to define the requirements of software in order to document and [test the software's behavior](https://cucumber.io/) as part of [Behavior Driven Development](https://www.agilealliance.org/glossary/bdd/) (BDD). We have been using Gherkin to write Quality Assurance (QA) tests for the functions of our Project Electron transfer application. The language is human-readable, so it can enable communication between teams working in different domains across a project.

<!--more-->

The Gherkin language is structured into statements of Features, Scenarios, and Steps using a syntax of text lines and indentations. As shown in the example below (from the [Gherkin Documentation](https://github.com/cucumber/cucumber/wiki/Feature-Introduction)), a feature defines what is to be tested. A feature will likely have multiple scenarios, which are more specific situations that could occur as part of that feature. Steps are defined is [Givens, Whens, and Thens](https://github.com/cucumber/cucumber/wiki/Given-When-Then). **Given** a precondition, **When** an action occurs **Then** a testable outcome results. **And** is used to add additional Givens, Whens, and Thens.

<figure>
<img src="{{ site.baseurl }}/wp-content/uploads/2016/11/FindItResults.jpg" alt="Gherkin Example Scenario">
<figcaption>Example of a feature and scenario from the Gherkin documentation.</figcaption>
</figure>

As part of the development of the transfer application, we will be testing features of the application. These will include features like bag validation of size and filename, virus checks, validation of bag metadata, user login, and account management. Below is an example of a Gherkin scenario we wrote for the virus check feature, which tests how the application will handle the identification of a virus found in a bag.

<figure>
<img src="{{ site.baseurl }}/wp-content/uploads/2017/09/PEAug2017_GherkinExample2.png" alt="Gherkin example for virus check">
<figcaption>A Gherkin scenario that is part of the "check bag for viruses" feature to test the transfer app.</figcaption>
</figure>

For me, being new to BDD concepts, Gherkin, and unit testing, I found writing these features/scenarios for our work to be useful beyond their functional purpose; the process helped me better understand the functional requirements of the application by forcing me to think through possible scenarios and outcomes. I did struggle initially with avoiding implementation details and focusing on the behaviour of the application in the Gherkin tests. For me, it was essential to step back and take some time to learn the basics of BDD, Test Driven Development (TDD), and unit testing as a conceptual foundation before jumping into writing Gherkin tests.

As we move forward with Project Electron and QA processes, these Gherkin tests will not only help us test the behavior of the transfer app, but also isolate and clarify its expected functions in a language that is accessible to all members of the project. We will be making these Gherkin tests and the rest of our QA process available [on GitHub](https://github.com/RockefellerArchiveCenter/project_electron_transfer) as part of the Project Electron documentation.
