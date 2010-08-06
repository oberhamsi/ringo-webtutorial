<ul>
   <% for section in <% sections %> render 'sectionLi' %>
</ul>

<% subskin 'sectionLi' %>
   <li> [<% section.title %>](./<% section.file %>)
