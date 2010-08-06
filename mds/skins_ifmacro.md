Skins: if macro
----------------------------
Two things are annoying: both, the create and edit page, say 'Edit Post' at the top. A quick fix for this is that we extract the header as a subskin. We should only render the header subskin if the object `post` is set in the skin context. A good opportunity to introduce the `if` macro:

    // edit.skin
    <% extends ./base.html %>

    <% subskin content %>
    <% if <% post %> render editHeader %>

    <form name="blogpost" action="<% href %>" method="POST">
        <h3>Title<h3>
        <input type="text" name="title" size="30" value="<% post.title %>"><br/>
        <h3>Lead<h3>
        <textarea name="lead" cols="50" rows="5"><% post.lead %></textarea>
        <h3>Text</h3>
        <textarea name="text" cols="50" rows="20"><% post.text %></textarea>
    <br/>
    <input type="submit" name="Save" value="save"/>
    </form>

    <% subskin editHeader %>
    <h1> Edit Post '<% post.title %>' </h1>

This will do for now.

