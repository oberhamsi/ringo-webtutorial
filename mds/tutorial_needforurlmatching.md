Refining our Skins
--------------------
It would be nicer if the startpage of our blog would only show the lead text of every entry with a link to the actual blog post. For that to work we need to set a new `lead` property on all our blog posts, and then define a new action to handle displaying a single post. 

If you have read the part about querying above you will get this without further explanation: We just load the posts and add a property `lead` to each and save.

    >> include('model')
    >> posts = Post.query().select()
    [Post: Second Post (simon, 11.05.2010)],[Post: Introductory Post (simon, 11.05.2010)]
    >> posts[0].lead = 'In which we describe the introduction'
    In which we describe the introduction
    >> posts[0].save()
    >> posts[1].lead = 'In which we introduce the blog'
    In which we introduce the blog
    >> posts[1].save()

Then we modify `index.html` to only render the lead and add a link to the full post. We use the `href` macro to create the links. Use the `href` macro to create relative links within your app.

Let's say every blog post should be reachable by a "read more" link (we will later write the action showing the full blog post):

    // index.html
    <% extends ./base.html %>

    <% subskin content %>
        <% for post in <% posts %> render 'post' %>

    <% subskin 'post' %>
        <h2><% post.title %></h2>
        <p>
            <% post.createtime | dateFormat "dd.MM.yyyy" %>, <% post.author %>
        </p>
        <div>
            <p>
                <% post.lead %>
            </p>
            <a href="<% href post %>/<% post._id %>"> ...read more </a>
        </div>

Now we get links like "/post/1/", "post/2/". In the next sections we will take care of handling those so they actually output the full post.
