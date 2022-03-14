# Bits & Bytes
The blog of the Rockefeller Archive Center. This repository contains Markdown files and accompanying images for the site.

[![Build Status](https://travis-ci.com/RockefellerArchiveCenter/bits_and_bytes.svg?branch=gh-pages)](https://travis-ci.org/RockefellerArchiveCenter/bits_and_bytes)

## File Names & Locations

### File title
For ease of filing, your file should be named in the following format: `YYYY-MM-DD-title-of-your-post.md`.

### Post location
All posts should be placed in the `_posts` directory. Refer to the directory structure of `gh-pages` if you have any questions about the post location.

### Image location
All images should be placed in the `assets/img/` directory. You should also put the images in the correct Year/Month directory for your posts publication date. If those directories do not exist, create them or ask a member of the D-Team for help on creating them. Make sure your post links to the correct images. Refer to past months in the `gh-pages` branch for reference.

## Post Metadata
Every post should include a section for front matter. The front matter of a post includes necessary metadata to help the blog theme display your post correctly and order it among other posts.

Below is an example of common front matter.

```yaml
---
title: "Introducing the New Bits &amp; Bytes"
date: 2019-01-02T11:10:00
author: Patrick Galligan
layout: post
categories:
  - Bits &amp; Bytes
  - Software and Systems
tags:
  - blogs
  - technology
excerpt_separator: <!--more-->
---
```

### Front Matter Fields

* **Title:** **(Required)** This should be the display title of your post. It will be the title that displays on the site. Titles which include characters like ampersands, colons, exclamation marks or slashes should be enclosed in double quotation marks, as in the example above.
* **Date:** **(Required)** The date that you are making your post public. It should be formatted like the above example. The date will control where in the list of posts your post will display.
* **Author:** **(Required)** The author or authors of the post. A single author should be on a single line, ex.: `author: Patrick Galligan`. Posts with multiple authors should have each author on a separate line.
    ```yaml
    author:
      - Patrick Galligan
      - Hillel Arnold
    ```
* **Layout:** **(Required)** The layout tells the theme how to format your post. It should always be `post`.
* **Categories:** **(Optional)** Associated categories for the post. Choose from existing categories whenever possible. A single category should be on a single line, ex.: `categories: Software and Systems`. Posts with multiple categories should have each category on a separate line.
    ```yaml
    categories:
      - Bits &amp; Bytes
      - Software and Systems
    ```
* **Tags:** **(Optional)** Associated tags for the post. Choose from existing tags whenever possible. A single tag should be on a single line, ex.: `tags: blog`. Posts with multiple tags should have each tag on a separate line.
    ```yaml
    tags:
      - blogs
      - technology
    ```
* **excerpt_separator:** **(Optional)** The excerpt separator tells the theme how much preview text to show on the home page. Only include if you have included `<!--more-->` at some point in your post Markdown, otherwise this will not work. If you do not use this field, the theme will automatically take the first 200 words of your post.

## Posting on Bits & Bytes

### Create a new branch
Create a new GitHub branch from the `gh-pages` branch. This is so we can track any changes and associate them with specific pull requests. You should name your branch `YYYY-MM-DD-post`. See the GitHub documentation on [creating new branches](https://help.github.com/en/articles/creating-and-deleting-branches-within-your-repository) if you have questions.

### Push your files to the new branch
Place your files in the correct locations in your new branch (see "File Names & Locations" section above).

### Create a pull request
Once you have created a branch and placed your post file and images in the correct location you can open a pull request. You should create a pull request from your newly created branch which points at the `gh-pages` branch. See the GitHub documentation on [creating pull requests](https://help.github.com/en/articles/creating-a-pull-request) if you have questions. Request review from another RAC staff member in the pull request.

### Merge the pull request
Once another RAC staff member has reviewed and approved your pull request, you are ready to merge that pull request into the `gh-pages` branch. Merging the pull request will automatically publish the post, so only do this when you are ready for your post to be visible to the world. See the GitHub documentation on [merging pull requests](https://help.github.com/en/articles/merging-a-pull-request) if you have questions.

## Tips and Tricks
In order for **Markdown tables** to render properly, they need to be separated from other block-level elements. This means you should add a blank line before and after a table in order for it to render properly.

## License

Bits &amp; Bytes is released under an [MIT License](LICENSE).

Bits &amp; Bytes content is released under a [CCBY 4.0 License](LICENSE-CCBY-4.0.md).
