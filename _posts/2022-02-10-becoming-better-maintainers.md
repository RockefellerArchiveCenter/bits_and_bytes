---
title: "Becoming Better Maintainers: Improving Application Stability"
date: 2022-02-10T09:00:00
author: Hillel Arnold
layout: post
categories:
  - Software and Systems
tags:
  - maintenance
  - dependencies
  - continuous integration
  - continuous deployment
  - unit tests
excerpt_separator: <!--more-->
---
In the last few years, the Digital Strategies Team has built many – 25, by last count – custom applications to support the work of RAC across all function areas, ranging from acquisition of digital records to providing access to digitized content (and everything in between). Because our colleagues rely on these applications to get things done, we want to ensure their ongoing stability, and also facilitate our ability to confidently make changes to these applications in response to user needs or security threats without breaking core application functionality.

Over the course of the last six months, the Digital Strategies team undertook three related projects to meet these goals:
- Enhanced management of application dependencies to ensure that applications are built on up-to-date and secure dependencies.
- Broader and deeper use of continuous integration (CI) methodologies and tools in order to ensure that applications remain in a working state as changes are made over time.
- Expanded use of continuous deployment (CD) methodologies and tools in order to decrease the time between application feature development and deployment, reduce the amount of manual labor required to deploy an application, and help to document and disseminate knowledge about application deployment.

These projects, which shared the common overall steps of setting a baseline and then implementing tooling to maintain or improve that baseline over time, have helped us level up our shared knowledge of systems, and what it takes to keep them running.
<!--more-->

## Dependency Management

A common characteristic of many open-source applications - including the ones the RAC has developed over the last few years - is their reliance on code libraries or packages, which allow for common functions or application features to be reused. Keeping these dependencies up to date as they are updated by their maintainers, particularly when those changes make the dependencies more secure, is both critical and challenging.

During this project, the Digital Strategies team reviewed the dependencies for each application we maintain to ensure that they are up to date, remove any unnecessary dependencies, and split top-level dependencies from secondary dependencies (we used pip-tools to do this in our Python apps). To keep these dependencies up to date we implemented automated dependency checking and notification using GitHub’s [Dependabot](https://github.com/dependabot), along with an [AWS Lambda script](https://github.com/RockefellerArchiveCenter/dependency_tasks) which creates tasks in Asana on a regular basis for applications which need to be updated. This tooling allows us to proactively ensure that dependencies are up to date.

## Continuous Integration

Continuous integration is the practice of automatically building and unit testing an entire application frequently. The toolchain to support this process includes a version control system, which allows changes to applications to be effectively managed over time, and a CI pipeline, which builds and executes unit tests each time a change to an application is made. Over the past several years, we have used [git](https://git-scm.com/) and [GitHub](https://github.com/) as our version control system and have increasingly used [Travis CI](https://www.travis-ci.com/) as our CI pipeline.

In this project, we built on our existing experience with these tools to expand our approach across all RAC-maintained applications, and also to provide a more consistent and rigorous approach for each application.

Our work was divided between fixes that could be quickly applied and more substantial issues which required significant investment of time. Quick fixes included thing such as updating READMEs, adding [issue templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) in GitHub repositories, setting up [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) for linting using [pre-commit](https://pre-commit.com/), and cleaning up some common mistakes in Travis CI configuration files. Issues were filed for larger problems like improving coverage of unit tests or long build times in the CI pipeline so that work could be more effectively planned and managed.

## Continuous Deployment

Continuous deployment is the practice of deploying every application build after it passes its automated tests run in a CI pipeline. Because it requires the automation of deployment steps, this methodology shortens the time between the development and deployment of new application features. It also greatly reduces the amount of staff time (particularly IT staff) involved in deploying applications, and it means that deployment knowledge can be documented and disseminated, and that more people can responsibly deploy applications needing to create and manage user accounts and permissions on servers.

At the RAC, we’ve been triggering builds in [AWS CodeDeploy](https://aws.amazon.com/codedeploy/) from Travis CI for some, but not all, of our applications. As a result, we had some existing CD tooling in place, and some experience with what worked and what didn’t. In the past few months, we first reviewed our existing CD tooling and documentation, creating a centralized repository for scripts used in deployment and clarifying the use of environment variables (in particular those used to set the ports on which applications were available). We then implemented CD in all the other applications in which it was possible and advantageous to do so.

## Lessons Learned

There were a couple of key things we learned in completing these projects:
- **Investment in maintenance allows you to absorb and negotiate change more effectively.** Since making these changes across our applications, we’ve already seen real benefits in terms of being able to quickly respond to security threats, application bugs, and user needs. You could even say maintenance supports innovation.
- **Some experience in each of these technologies was necessary to set a meaningful baseline.** Had we been starting from scratch, I think the baseline we were trying to meet might have been quite different, and we might have spent a lot of time working on things that weren’t that important (or completely missing things that were). If you’re thinking of picking up some of these projects from scratch, it’s best to just get started and build in time to assess once you’ve had a few months to learn by doing.
- **Documenting your baseline and the process for getting there is key.** For each of these projects, we developed a checklist of actions, as well as documented rationales for each change. This allowed the team to engage in the project when time was available without having to worry about finishing the entire process at once.

We’re not done working in this area! The next frontier for us is deployment of containerized applications. Stay tuned!
