var {listPaths, read, write, join} = require('fs');
var {createSkin} = require('ringo/skin');
var strings = require('ringo/utils/strings');
var objects = require('ringo/utils/objects');

// input
var sectionPath = join(module.directory, '../mds/');
var toc = read(join(sectionPath, 'TOC'));

// output
var tocSkin = createSkin(read(join(module.directory, '../skins/toc.md')));
var sectionSkin = createSkin(read(join(module.directory, '../skins/section.md')));
var htdocsPath = join(module.directory, '../htdocs/');

// collect sections to extend them with next/prev link 
var sections = [];
toc.split('\n').every(function(tocLine, idx) {
   // die on empty line
   if (!tocLine) return false;
   // ignore comment for now
   if (strings.startsWith(tocLine, '##')) return true;
   
   // extract first heading for toc display
   var sectionText = read(join(sectionPath, tocLine + '.md'), 'r');
   var sectionHeader = tocLine; // fallback
   var candidate;
   
   sectionText.split('\n').every(function(sectionLine) {
      if (strings.startsWith(sectionLine, '-----')) {
         sectionHeader = candidate;
         return false;
      }
      candidate = sectionLine;
      return true;
   });
   var section = {
      file: tocLine + '.md',
      title: sectionHeader,
      text: sectionText,
   };
   if (idx > 0) {
      section.previous = sections[sections.length-1];
   }
   if (idx > 1) {
      sections[sections.length-1].next = section;
   }
   sections.push(section);
   return true;
});

// write new md files to htdocs
var tocContext = objects.merge(require('ringo/skin/macros'),{sections:sections});
var tocText = tocSkin.render(tocContext);
write(join(htdocsPath, 'index.md'), tocText);
sections.forEach(function(section) {
   write(join(htdocsPath, section.file), sectionSkin.render({section: section}));
});

