Create Md Files
------------------
`bin/rendermds.js` renders the markdown source files from the `md/` directory as pages for the ringo wiki into directory `htdocs/`.

the ringo wiki uses markdown too, but this script adds headers and prev/next links to the raw content described in those files.

the order of the sections is defined by modifying `mds/TOC`.

the templates used to render the resulting markdown can be found in `skins/`.

TODO web app essential
------------------
   * url patterns:
      * url -> function
      * fixed args
   * write your own macros & filters
   * howto write middleware
   * other response types
   * relations comments -> post
   * file upload. image for blog entries

TODO misc
-------
   * unit tests
   * small ringo shell script for.. some blog cleanup task i will have to invent
   * extending java, simple package create walkthrough

Howto Tutorial
-------
one section = one simple concept
  * max 3.5K, good: < 2K

if concept too complex:
  * only show & explain typical use case in tutorial
  * extra topic page
