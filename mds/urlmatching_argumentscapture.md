URL Patterns: Capturing Arguments for Actions
-------------------------------------------------------

Now the 'read more' href links to `/post/id` where `id` is the id of a post. We need a new action to handle the rendering of a single post. Remember how all the methods we export in `actions.js` are already mapped to Urls. This is because currently in `config.js` we just have that one line mapping:

    // config.js
    exports.urls = [
        ['/', './actions'],
    ];

Ringo will convert the pattern string `'/'` into a Regex `/\/.*/`, and that particular Regex will match any request path. Ringo then takes the first part of the path - everything up to the first '/' - and searches for a function with that name in the specified module `actions`.

That simple mechanism worked great for us so far because by default Ringo looks for an "index" action and that is all we needed.

But how will the URL `/post/id` work? The first part is the action name: 'post'. Ringo will pass the rest of the URL, split by `/` (slash), as parameters to the action. The action must accept the correct number of arguments: in this case only one argument, the id.

The `post` action below works like this: It gets the post with the right id, as passed to it as the second argument, and renders that post. This time we use the `get(id)` function of the entity to retrieve only the one post we care about. No need for `query()`.

    // actions.js
    exports.post = function(req, id) {
        var post = model.Post.get(id);
        return Response.skin('skins/post.html', {
            post: post,
        });
    };

.. and the accompanying `skins/post.html`. This skin is even simpler, as it doesn't do any looping. It only overwrites the 'content' subskin to output the post:

    // skins/post.html
    <% extends ./base.html %>

    <% subskin content %>
        <h1><% post.title %></h1>
        <p>
            <% post.createtime | dateFormat "dd.MM.yyyy" %>, <% post.author %>
        </p>
        <div>
            <p><% post.lead %></p>
            <p><% post.text %></p>
        </div>
        <a href="<% href / %>"> back to front </a>


Our app should be fully functional again, let's start the server ...

    $ ringo main.js

... and try it: [http://127.0.0.1:8080](http://127.0.0.1:8080).
