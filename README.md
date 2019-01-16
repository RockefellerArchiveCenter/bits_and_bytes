# Bits & Bytes
Contains the markdown from all of the Bits and Bytes blog posts and accompanying images.

## Post Metadata
Every post should include a section for front matter. The front matter of a post includes necessary metadata to help the blog theme display your post correctly and order it among other posts.

Below is an example of common front matter.

```yaml
---
title: Introducing the New Bits &amp; Bytes
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

* **Title:** **(Required)** This should be the display title of your post. It will be the title that displays on the site. You must encode any special characters like ampersands (&amp;).
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

### File title
For ease of filing, your file should be named in the following format: `YYYY-MM-DD-title-of-your-post.md`.

### Post Location
All posts should be placed in the `_posts` directory of the `gh-pages` tree. [This link will take you to the exact location](https://github.com/RockefellerArchiveCenter/bits_and_bytes/tree/gh-pages/_posts).

### Image Location
All images should be placed in the `wp-content/uploads/` directory of the [`gh-pages` tree](https://github.com/RockefellerArchiveCenter/bits_and_bytes/tree/gh-pages/wp-content/uploads). You should also put the images in the correct Year/Month directory for your posts publication date. If those directories do not exist, create them or ask a member of the D-Team for help on creating them. Make sure your post has the correct image links for your images.

## License

Bits &amp; Bytes is released under an [MIT License](LICENSE).

Bits &amp; Bytes content is released under a [CCBY 4.0 License](LICENSE-CCBY-4.0.md).
