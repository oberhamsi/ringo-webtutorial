Skins and Subskins
------
Since we the "posts" array in our context, we could just put `<% posts %>` in the skin and it would output:

    // rendered skin output of <% posts %>
    [Post: Second Post (simon, 11.05.2010)], [Post: Introductory Post (simon, 11.05.2010)]
    
.. the same string representation we get when issuing `posts` on the shell. But what we really want to do, is loop over each post in that array and render a piece of html. That is as simple as it sounds:

    // in a skin
    <% for post in <% posts %> render 'postOverview' %>
    
    <% subskin 'postOverview' %>
    <h2><% post.title %></h2>

This will render the subskin 'postOverview' for each post in posts. 'postOverview' is a template we re-use in each iteration to render the current post. The way we render 'postOverview' in the for-loop, it has access to the context variable 'post' and uses it to output `<% post.title %>`.

Subskins are an important concept in Ringo. A skin can have a lot of subskins, each of which starts with `<% subskin 'foobar' %>` and ends where the next subskin starts. 

The other use for subskins, besides loop rendering, is to overwrite a subskin of the same name defined in the skin we extend. `index.html` extends from `base.html`. In `index.html` the 'content' will be the list of posts; therefor we overwrite the 'content' subskin with the loop we put together above.

This is how it looks all together.

    // index.html
    <% extends ./base.html %>
    
    <!-- we overwrite the 'content' subskin which was 
         originally defined in base.html -->

    <% subskin content %>
    <% for post in <% posts %> render 'postOverview' %>

    <!-- the 'postOverview' subskins is used by the for loop 
         to render each post -->

    <% subskin 'postOverview' %>
        <h2><% post.title %></h2>
        <p>
            <% post.createtime | dateFormat "dd.MM.yyyy" %>, <% post.author %>
        </p>
        <div>
            <% post.text %>
        </div>
        
There is another new concept in this skin: a filter. The filter `dateFormat` is used to format the date object into something more human readable. More about filters and macros in the next section.
