---------

Content
--------
<% for section in <% sections %> render 'sectionLi' %>

--------------

<% for section in <% sections %> render 'sectionFull' %>

--------------
This tutorial is maintained on [git](http://github.com/oberhamsi/ringo-webtutorial)

*Modifications directly to this wiki page will be lost*

<% subskin sectionLi %> * [<% section.title %>](#<% section.shortTitle %>)
<% subskin sectionFull %>
<a id="<% section.shortTitle%>" ></a>

<% section.text %>
