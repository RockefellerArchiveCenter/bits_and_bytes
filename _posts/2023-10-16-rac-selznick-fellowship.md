---
title: "Reframing My Work as an Audiovisual Archivist: A Collaborative Fellowship Experience at the RAC"
date: 2023-10-16T10:00:00
author: Timbi Shepherd
layout: post
categories:
    - Collaboration
tags:
    - L. Jeffrey Selznick School of Film Preservation RAC Fellowship
    - Audiovisual
    - audiovisual digitization
    - collection management
    - Bag-It
    - user centered design
    - infrastructure
    - preservation

excerpt_separator: <!--more-->
---

Before I began my work as a fellow at the Rockefeller Archive Center in early July, I thought my role would essentially be that of a project archivist, inspecting batches of motion picture films before and after digitization as well as testing the RAC’s new cloud-based infrastructure for digitized audiovisual materials. When I arrived here, however, I quickly realized that the fellowship experience would be much more expansive and provide exposure to the RAC’s functions beyond audiovisual archiving. Whereas my year at the L. Jeffrey Selznick School of Film Preservation taught me a highly specialized set of skills working with analog media, my time at the RAC was equally essential because it allowed me to connect these skills to larger concepts and trends in library and information science.

<!--more-->

My fellowship was with the RAC’s Collections Management team. However, from day one, my supervisor, Audiovisual Archivist Brent Phillips, set up “meet-and-greets” with members of the RAC’s different departments. I was introduced to archival professionals working in processing, research and engagement, curatorial, digital strategies, administration, and access. These conversations were opportunities to network with other people in the field and to learn about how the RAC is approaching such concerns as culturally competent description and the processing of born-digital materials.

Within Collections Management, my teammates were supportive and excited to share their knowledge with me. Archivist Erich Chang organized book cleaning sessions where I learned how to handle bound volumes affected by varying degrees of dirt and red rot. We used archival tools to mitigate signs of decay and rehoused the books in archival storage boxes. Archivist Jenna Fleming invited me to help with relocating some of the RAC’s oversized flat file materials, which was an exercise in handling delicate, century-old poster sheets and using a bone folder to create custom enclosures for them.

I was also tasked with a couple of independent Collections Management projects. The first involved inspecting the 16mm film collections of Rockefeller University medical researchers Zanvil A. Cohn and James G. Hirsch, rehousing the nearly forty films in inert plastic cans, and assigning them locations in the RAC’s vaults. At the end of the project, I provided the Processing team with a CSV file to generate ArchivesSpace resource records for the reels. These films were originally recorded through a microscope and are composed of images of cell movements. The material did not always make for the most entertaining wind-through, but these are key films because they document experiments which led to the discovery that granules in phagocytes are lysosomes that digest microbes. More to the point, Cohn and Hirsch’s films advanced our understanding of cellular biology and the immune response.

{% include image.html dir="2023/10/" file="cohn-hirsch-frames.png" description="“The same cells two minutes later...” Slowly mounting action in Zanvil A. Cohn and James G. Hirsch’s Phagocytosis and Degranulation (1962)." %}

When the opportunity arose, I also lent a hand in inspecting over fifty Rockefeller family films, which the RAC are currently digitizing. I prepared these films to be delivered to Colorlab for 2k and 4k scanning, inventoried the reels, noted their condition, and added head and tail leader. I then verified their physical status upon return. These films included David Rockefeller’s home movie footage of summer trips to Maine shot on Kodachrome—which is much more pleasing to the eyes than cell granules.

Another Collections Management project I undertook involved rehousing and relocating a substantial portion of the RAC’s audiocassette holdings. Tapes from numerous collections had been given unique identifier numbers and stored all together in a cabinet in one of the vaults, but the amassed recordings were still difficult to sort and individual items hard to find. The tapes’ original provenance and accession information was available, but many tapes lack full documentation or, especially in the case of mini-cassettes, have illegible container annotations. The full processing of this magnetic media may require digitization and listening for descriptive information; unfortunately, that was beyond the scope of my time here.

{% include image.html dir="2023/10/" file="minicassettes.png" description="Hard-to-read mini-cassette annotations in the Ford Foundation Records." %}

Drawer by drawer, Brent and I separated the materials and placed them into archival storage boxes by collection. We assigned a barcode to each box and recorded the box dimensions and new shelf locations in a spreadsheet so that top container profiles can be assigned to the audiocassettes in ArchivesSpace. In addition, the Processing team will need to assign finding aid numbers to many of the tape groupings. Assistant Director for Collections Management Suzie McDade gave me a tutorial in the RAC’s project management software, Asana, which I used to document my workflow and outline future steps that will need to be taken to more fully process the audiocassettes and generate/update their ArchivesSpace records.

Asana is only one of the digital tools I learned to use to make project workflows more efficient. As part of my role in testing the RAC’s new cloud-based infrastructure for digitized audiovisual materials, I referenced the Library of Congress and the New York Public Library’s GitHub pages for command line resources to transcode and package audiovisual files. I consolidated applicable command line instructions into a single document for the Collections Management staff to reference and built custom file conformance policies for the RAC. GitHub was a useful tool for reporting issues to the Digital Strategies team and documenting the troubleshooting process. The process by which transfers of digitized audiovisual items are packaged in BagIt-compliant bags and serialized into a single compressed (gzip) TAR file (.tar.gz) for ingest is outlined in [my earlier Bits & Bytes post](/validation-testing). Archival Assistant Emeline Swanson and Usability and Accessibility Analyst Hannah Sistrunk guided me in the editing and publication of these blog entries using markdown and GitHub.

Hannah also introduced me to aspects of UX design including website wireframes and usability testing for implementing the next step in the audiovisual infrastructure pipeline: the quality control module called “Cue See.” Brent and I have begun usability testing with members of the Collections Management team, so stay tuned for more information about Cue See in a future post!
