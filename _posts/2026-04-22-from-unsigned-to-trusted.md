---
title: "From Unsigned to Trusted: Implementing Code Signing at the RAC"
date: 2026-04-22T09:00:00
author: Patrick Galligan
layout: post
categories:
  - Software and Systems
tags:
  - code signing
  - fluxx
  - grants data
  - grants management systems
  - trust certificates
excerpt_separator: <!--more-->
---

Over the past year and a half, we’ve been working on a join project with Columbia University to develop the application we call the Fluxx Exporter. You can read more about it in a series of blog posts by Hillel Arnold and Hannah Sistrunk about its [initial release](https://blog.rockarch.org/introducing-the-fluxx-exporter), [testing the UX](https://blog.rockarch.org/fluxx-exporter-testing), [releasing an updated version](https://blog.rockarch.org/making-it-better), and [releasing the last major version 3.0](https://blog.rockarch.org/fluxx-exporter-3). In short, this application helps our donors export digital grant records from the grants management system [Fluxx](https://www.fluxx.io/). After a round of open testing, we released Fluxx Exporter Version 2, which updated the application to make it easier for users to install and get up and running. This release bundle the application into Unix and Windows executables for ease of use.

Unfortunately, that's when best practice and security compliance reared its head.

<!--more-->

## The Problem We Didn’t Expect

We had certainly made it easier for users to get the application up and running, but we had also unintentionally created a situation where we were asking our users to download an executable from the internet and run it on their corporate workstations. That definitely triggered some widespread security concerns from IT departments and automated security controls.

Running the Fluxx Exporter on macOS looked something like this:

- “This app can’t be opened because the developer cannot be verified”
- Right-click → open → confirm → try again
- A lingering sense that something might be wrong
- OR a total blockage of ever running it

And it wasn't any better on Windows.

None of this meant that Fluxx Exporter was broken or untrustworthy. But it *felt* like they were to our users, and they struggled to explain to their IT departments that the code wasn't going to introduce a virus into their systems.

This wasn't a code problem, it was a problem of trust. We needed to find a solution that would bridge that trust gap.

## How Code Signing Became the Solution

Luckily for us, we weren't the first organization to have to deal with this problem. There's a well-documented solution for this very issue: code signing. At a high level, code signing verifies that software comes from a known source and hasn’t been altered between it's creation and a user downloading and running it on their local machine. It works by using cryptographic certificates to attach a digital signature to an application, which operating systems can then validate before allowing it to run. In practice, this helps prevent tampering and reduces security warnings, making it easier for users to trust and run the software.

It also has the side effect of creating:

- Fewer warnings for users running tools  
- Less need for workarounds or documentation explaining “this is safe, we promise”  
- More confidence in what we’re distributing  

We spend a lot of time thinking about authenticity and provenance in the archival context. Code signing is, in a way, an extension of those same ideas into our technical infrastructure. So, we started the process of creating "signed" executables for both Windows and Mac operating systems built into our CI/CD pipeline.

## Choosing a Signer

Code signing on Macs is pretty straightforward: everything gets signed and notarized through [Apple's notary tool](https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution). However, it's not so simple for Windows. There are a lot of options for creating a signing certificate based on your specific needs.

We really only had a few requirements:

- The provider offers Extended Value value certificates (the highest level of trust)
- The provider would be relatively cheap
- It had supported integration with GitHub Actions

That actually significantly narrowed the field for us, and we ended up going with [SSL.com's eSigner](https://www.ssl.com/esigner/) certificate option. However, because we were purchasing an EV certificate, we had to submit documentation verifying our legal and physical existence before we could be approved. This greatly lengthened the time before we get the certificate, and once we did, we had to navigate some very specific rules about who could see certain information about the certificate, who could create them, and what information we would need for our CI/CD workflows. However, after a few months, we were finally ready to start signing.

## Signing in the Pipeline

I built code signing into our existing GitHub Actions build workflow that ran on each new release creation. This made signing automatic, credentials moved into managed CI secrets instead of local environments, and meant we could automatically sign code for every new release. However, it was only after a lot of trial and error that we managed to get signing working like we wanted.

One of the more interesting parts of this work was how different it was to get it up and running on different platforms.

On Windows, the process is pretty direct, but still depended on the external [SSL.com codesign tool](https://github.com/SSLcom/esigner-codesign). Luckily, we were already using [PyInstaller](https://pyinstaller.org/en/stable/) to bundle the application into a single package, so all we needed to do was follow the tools documentation, and we got it working quickly. Apple was another story though.

On macOS, signing is only part of the story. Applications also need to be notarized by Apple, which adds another step, and another place for things to fail. Luckily, we already had an Apple Developer account that I could join. From there, it was really just a matter of figuring out how to get the signing and notarization working in GitHub Actions. The Apple docs are pretty straightforward with the steps you need to take: get your organization's specific signing key, get that into GitHub's environment secrets, install the tools into the GitHub runner, and run the necessary commands. Unfortunately, some of that was easier said than done.

While our .exe file worked great for Windows, Apple is much pickier about trusting and notarizing certain types of files. Apple really wants to see a `.pkg` or `.dmg` file before fully trusting an application. So, besides getting signing and notarization working, we also had to convert our PyInstaller workflow to support MacOS `.dmg` creation. Thankfully, there were a ton of other people that had dealt with this same issue before, so I was able to copy their homework. We got to a point where both the Windows and Mac versions of the application were signed, notarized, and downloadable.

Finally! We were done! Not so fast... We still had to test running the application locally. Everything worked well for Windows, but I couldn't run the new Mac app. It turns out that I was using a laptop with Intel chips, and the `.dmg` file was made on a runner with Apple's ARM chipset. Meaning, we'd have to double the process and add a GitHub Actions runner specifically for Intel chipsets. Now, we were really done!

## A Few Things That Stuck With Us

It was a really long process, and a different blog post could go into all of the tiny little foibles that came up during the process, but it was largely pretty straightforward in the end, despite having to take a ton of detours. I did learn a few lessons and updated my thinking along the way.

**Trust is part of the user experience**  
We don’t always think about OS-level warnings as UX, but they are. And they matter—especially when tools are used outside the team that built them. This work was an essential part of the development process.

**Automation isn’t optional here**  
Manual signing might be fine for a single release. It doesn’t scale. Moving this into CI was necessary.

**Packaging details matter**  
I ran into issues where signing something at the wrong point in the process invalidated the signature entirely. Not obvious, but critical to get right.

## What This Changed

With code signing in place, the experience of running these tools is noticeably smoother:

- Fewer warnings  
- Fewer workarounds  
- More confidence from the people using them  

Reducing that friction makes the whole system feel more reliable and easier to work with, which is really my entire goal in DevOps at the RAC.