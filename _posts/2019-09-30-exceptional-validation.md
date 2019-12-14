---
title: "Exceptional Validation: Working With JSON Schemas"
date: 2019-09-30T16:00:00+00:00
author: Patrick Galligan
layout: post
categories:
  - Project Electron
  - D-Team
  - Software and Systems
tags:
  - data
  - project electron
  - JSON
excerpt_separator: <!--more-->
---

As Hillel mentioned in his post about the [next steps in Project Electron](https://blog.rockarch.org/setting-sail-the-next-leg-of-project-electron), we’re working on three data services for our pipelines into a new archival description interface: fetchers, transformers, and indexers. Once the fetchers grab data from a specific data source, we need the transformers to, for lack of a better word, transform that data from its original structure to a new one that fits with our proposed [discovery data model](https://github.com/RockefellerArchiveCenter/rac-data-model) before we index it for researcher access. But how do we ensure that the transformers are creating structured data that fits our data model as it’s defined? We need some sort of validation process to ensure the standardized structure of our data, which is why we’ve created a rough JSON schema that we can validate transformed data against before pushing it into our index.

<!--more-->

The [RAC JSON Schema](https://github.com/RockefellerArchiveCenter/rac-data-model/blob/master/schema.json) is still a work in progress but it marks our efforts to create a check against any malformed, unstructured, or incomplete data getting into our index, and consequently our discovery interface. As we’ve mentioned before, the RAC won’t be serving EAD to our discovery interface, instead choosing to work directly with JSON data, thus making a JSON schema a powerful tool in our application pipeline. We made a set schema document so that we could have something to validate our transformed data against before serving it to the general public. Our new discovery pipeline and interface is going to be complex with lots of moving parts, and we don’t want to have to be surprised by finding a record that’s missing critical pieces of information. Defining our required fields, field types, and overall data expectations based off our data model will hopefully help us save hours of troubleshooting in the future.

This was my first time creating a JSON schema, but it was a lot easier than expected thanks to the great prep work we’ve done leading up to this point! I used the absolutely fabulous [JSON Schema 7.0 standard and documentation](https://json-schema.org/understanding-json-schema/), and it was one of the most clearly understandable technical outlines I’ve ever worked with. The work involved translating the guidelines that we created in our discovery data model long ago and recreating it in a JSON schema using the examples in the technical documentation as a guide. Our prep work on the data model made life a lot easier because we already had a good sense of the main data objects we needed and the data fields within each object. The exercise was both surprisingly fun and helpful in making us rethink and revise certain data decisions in light of initial discovery system data gathering.

For instance, initial researcher information-gathering has identified date faceting as an important aspect of the research experience, so we’re exploring ways to make structured date objects required on all Collections and Objects, whether through date parsing or inheritance. We also ended up abstracting a lot of repeated elements, like Agents, Terms, Notes, etc. and standardized their appearance across our JSON responses for better machine performance. We’re still in the process of identifying [patterns](https://json-schema.org/understanding-json-schema/reference/object.html#pattern-properties) for many of our properties, but we’re pretty happy with what we have so far. The schema is still a work in progress in many respects (I’m taking a break from working on getting the transformers to validate while writing this post!), but we’re already seeing the benefits of this work.

Creating the schema has allowed us to test our transformers against our test set of data fixtures and identify any problems before going live. We’re in the process of updating all of our transformers to validate them against our schema, which will provide certainty that the data we’re putting into our discovery system is what we expect; we’ve never had quite that level of security with our description before. Passing schema validation is an automated part of our development and deployment process now.

Besides reflecting some systematic changes to level up our application development and deployment work, the JSON schema has proved an invaluable tool in helping us understand where our fetched data and transformers are out of sync with our model. Additionally, while scripting is necessary for making the changes to the transformers, I’d argue that anyone could create the JSON schema, despite their level of coding experience. It’s extremely easy to translate the experience of reading JSON to making a schema. The complexities arise in determining the patterns of and requirements of the data that you are accepting. This schema has been and will continue to be a vital tool for Project Electron moving forward, but it also represents a move towards better systems practices at the RAC. We’re learning on the job and already reaping the benefits of change! As always, feel free to reach out if you have any questions.
