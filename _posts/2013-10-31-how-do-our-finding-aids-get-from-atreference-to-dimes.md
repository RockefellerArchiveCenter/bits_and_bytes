---
id: 851
title: How do our finding aids get from ATReference to DIMES?
date: 2013-10-31T20:07:55+00:00
author: Hillel Arnold
layout: post
permalink: /?p=851
categories:
  - XTF
tags:
  - CSS
  - display
  - EAD
  - HTML
  - search
  - XML
  - XSLT
---
Our finding aids get from AT Reference to DIMES in what is basically a three-step process:

  1. Data is exported from ATReference as EAD files
  2. Those files are then indexed in DIMES
  3. And finally, transformation processes are run on those files to convert them and have them display in a web browser.

On the surface, this is a relatively simple process. However, each of these steps involves a number of different technologies and paradigms for information storage, retrieval, and display.<!--more-->

## Export

Information that is managed using ATReference is stored in a [MySQL database](http://en.wikipedia.org/wiki/MySQL). This is a particular kind of database technology that's often used in open-source projects, and is often used as part of a set of four technologies – the [Linux](http://en.wikipedia.org/wiki/Linux) operating system, [Apache](http://en.wikipedia.org/wiki/Apache_HTTP_Server) web server, MySQL database and [PHP](http://en.wikipedia.org/wiki/PHP) scripting language – that is often referred to as the [LAMP stack](http://en.wikipedia.org/wiki/LAMP_(software_bundle)) (the name comes from the first letter of each of these technologies). This particular technology stack is often used for open-source projects (for example [Omeka](http://omeka.org/) and [WordPress](http://wordpress.org/)) because each of these technologies is open source, and each fulfills a very specific function.

MySQL is a [relational database](http://en.wikipedia.org/wiki/Relational_database) structure, which means that instead of data being stored in rows and columns in a single table (like in an Excel spreadsheet) data is stored in multiple tables that are linked together using keys. Typically, a cell in one table references a row in another table using a [foreign key](http://en.wikipedia.org/wiki/Foreign_key) that specifies both the table and the row to which that cell should be linked. This is a handy way of separating out certain types of data (for example, separating resource records from subjects and names), which allows for better information control.

During the export process, ATReference takes the information in its database tables, bundles it up in a specific order, and outputs it as [Encoded Archival Description (or EAD)](http://en.wikipedia.org/wiki/Encoded_Archival_Description). When this happens, that data undergoes a fundamental transformation from database to document. Databases store information in lots of little bits, which means that the data they contain can be presented and searched in highly flexible ways. You can run incredibly specific queries and get back very specific pieces of information. However, databases are not as good at giving you a sense of the context surrounding a specific piece of information. Documents, on the other hand, have a fixed form (they have specific pieces of information like titles, that appear in a particular order) and are usually designed to be read in a linear fashion, starting at the beginning and ending at the end. Because information is fixed in a particular form, documents give you some context about a particular piece of information, but this also means that they often require you to do a bit of reading to find the specific piece of information you're looking for.

EAD is written in a markup language called [eXtensible Markup Language (XML)](http://en.wikipedia.org/wiki/XML). XML was developed primarily for use with documents, but it can be used for more general data purposes, and is used widely on the web. It is designed to be processed by parsers for multiple applications, which means that XML is a handy way of transporting data from one system to another. XML enforces document structure through the use of schemas, which define what elements should appear, the order in which they are placed, and the hierarchical arrangement of elements. An EAD finding aid is simply an XML document that conforms to a [particular schema of elements](http://loc.gov/ead/).

We go to the trouble of creating EAD because that makes it possible for machines to read and interpret them. It also makes sharing archival description in different systems possible, for example in [ArchiveGrid](http://beta.worldcat.org/archivegrid/) or the [National Library of Medicine's History of Medicine Consortium](http://www.nlm.nih.gov/hmd/consortium/), or the New York State EAD consortium which is currently being developed.

XML is basically made up of tags, elements, attributes and content. A tag is everything that is inside of a set of angle brackets.

`<unitdate normal="1879/1894" type="bulk"><br />
1879-1894<br />
</unitdate>`

In this example, there is just one pair of tags – the first one is an opening tag, and the second is a closing tag (which you can tell by the forward slash in front of the tag name). Tags are made up of elements and attributes. The element name in this example is "unittitle", and the attributes are "normal" and "type." As you can see, those attributes are followed by an equal sign and then some data between quotation marks. That data is the attribute value. The text in between the opening and closing tags – 1879-1894 – is the content. In plain language, this little snippet of code is telling a machine which knows how to interpret it, that the text "1879-1894" is a bulk date with a normalized (meaning machine-readable) value of 1879/1894. So XML allows us to create structured information \*about\* the content as well as the content itself.

There are [five very basic rules](http://www.w3schools.com/xml/xml_syntax.asp) to how all XML should be structured, which are worth covering here.

* First, all elements must have a closing tag. You saw an example of this above, where the closing tag had a forward slash in front of the tag name
* Second, tags are case sensitive. This means that capitalization matters: and element calledis not the same as an element called
* Third, elements must be properly nested. It's easier to show this than explain, but it essentially means that you have to open and close tags in an order that makes logical sense to a computer.
* Fourth, documents must have a root element. This means that for each document, there must be a pair of elements that are the first and last elements in the document.
* Finally, attribute values must be contained within quotation marks. Again, the example above had some attribute values.

## Indexing

Once we have all these EAD documents, we then need to apply a set of predefined transformations to those files so they can be searched and displayed in DIMES. This is done with a technology called [EXtensible Stylesheet Language Transformation](http://en.wikipedia.org/wiki/XSLT), or XSLT. Broadly speaking, this technology takes an input document, processes it through a series of pre-defined actions or steps in a stylesheet, and returns an output document. It is primarily designed to work with an XML input document, and can produce output documents in a number of different formats. For example, it can take an EAD file (which is XML) and produce an HTML document which can be viewed using a web browser.

There are a couple of pretty common transformation processes that you'll see in XSL, all of which can be used to transform data in different ways. The first is an IF loop, which is basically a bunch of code that will be executed if a certain condition is met. If that condition is not met, the code will not execute.

Another common process you'll see is a choose statement. This is a bit more complex, because it involves an xsl:choose element which contains one or more xsl:when statements. The processor looks at that loop, decides which when statements evaluate to true, and then executes the code within all of those statements. This means that instead of a simple true/false loop, you can develop more complex scenarios for output documents.

Finally, there's an apply-templates function, which allows us to create a template, and then apply it multiple times. This is especially handy when you have the same kind of data in different places in a document, and want to do the same thing to all of them.

## XSLT and DIMES

In the case of DIMES, there are actually three sets of transformations that the data passes through, the **textIndexer**, **crossQuery** and the **dynaXML** processes, all of which include multiple stylesheets.

The **textIndexer** stylesheets take the raw EAD finding aid and add it to the index, which makes it searchable in DIMES. Because the index is compressed, it is a much faster and more efficient way to search than searching each individual document for a keyword or subject, much like using an index for a book is a much faster way of finding a particular word or concept than reading the entire thing. This stylesheet also adds weighting to certain terms like titles or dates and can also derive additional data from the finding aid for use in searching.

The **crossQuery** stylesheets control the behavior and appearance of search functionality. When a user conducts a search, they take that query, translate it into a query that XTF can process, and send the resulting query (at the bottom) to the index. The index then returns a set of results in XML. In order to turn that into something that humans can read and understand, there's one more set of transformations that has to happen.

That's the **dynaXML** group, which controls how documents (in our case, finding aids and library records) are displayed. They take the EAD document that comes out of ATReference and turn it into a bunch of HTML pages, using the data in a variety of ways to make things like the table of contents on the left hand side of a finding aid, as well as the various tabs that show front matter and the container list.

## HTML and CSS

I've mentioned HTML a couple of times already and many of you are probably familar, but in case you don't know, it's an acronym for [HyperText Markup Language](http://en.wikipedia.org/wiki/HTML), which means that it's a markup language for creating web pages. Web browsers know how to interpret HTML (although some do it better than others) to display a human-readable and hopefully visually appealing page. HTML is really primarily about display (as opposed to XML, which is primarily about defining the semantic of a document's content and enforcing a particular structure).

HTML has some common tags, many of which you'll see if you right-click on any web page and then select "view source." There are a bunch of tags that define sections of a page, like head, body, and div (which defines a division or section of a page), and there are also some tags specific to text, like h1, h2 and h3, which specify certain kinds of headings, and p, which defines regular paragraph text. It's also possible to embed objects, such as images, forms or videos in HTML.

However, HTML is only part of the equation. The other related technology is CSS, which stands for [Cascading Style Sheets](http://en.wikipedia.org/wiki/Css). As the name suggests, CSS is a way of controlling the appearance of HTML across a website. It allows us to separate content and display, which might not seem like a big deal, but is actually a huge deal, because it means I can change the size of all the paragraph text across an entire website just by changing one rule.

The basic syntax of CSS is one or more selectors followed by declaration blocks with rules controlling the appearance of elements that match the selector. There are a number of different kinds of selectors that can be used with CSS. The first are element names that appear within the HTML, such as h1, p or div. You can also apply rules based on an element's class, which is a common attribute that you'll see in an HTML tag. This allows you to apply the same rules to a bunch of different elements regardless of the element name. You can also do this with IDs, which are also attributes in HTML tags. The difference between IDs and classes is that IDs can only appear once within a document, while classes can appear many times. Within CSS declaration blocks, it is possible to create rules that change the size of elements (including the size of fonts), set colors, define the position of elements on the page, and even whether or not something displays.

All of these technologies work together to produce what we see in our web browsers when we look at DIMES, and it's important to remember that changes in any one of these processes will likely result in changes throughout the rest of the pipeline. That's why it's so important for us to create and follow standardized processes in all the work that we do; something as simple as an improperly capitalized letter can throw everything for a loop!
