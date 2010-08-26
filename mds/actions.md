Actions
-----------------------------------

The current `index` function in `actions.js` only returns a static skin. We will extend the function to load the last ten Posts and pass them to the skin for rendering. At the top we require the `model` module we wrote, so we get access to the `Post` prototype. As before we use `query()` to select all posts - we are only interested in the first ten so we slice them off.

    var posts = model.Post.query().select().slice(0,10);

We also import `ringo/webapp/response` to create the actual Response object the action returns. `Response` has various static helper functions to, for example, quickly return a rendered skin or do a redirect. See the [API docs on Response](http://ringojs.org/api/master/ringo/webapp/response/) for a complete list.

In this case we use `Response.skin(skin, context)` to return the rendered html to the browser. `Response.skin(skin, context)` expects two arguments: the path to the skin file to render and a object with arbitrary properties. We call the later the "skin context".

All the properties defined in the skin context are available for scripting in the skin. I'll show you in a minute. But this is how our action, returning the rendered skin, looks like:

    // actions.js
    var {Response = require('ringo/webapp/response');
    var model = require('./model');

    exports.index = function index(req) {
        var posts = model.Post.query().select().slice(0,10);
        return Response.skin('skins/index.html', {
            posts: posts,
        });
    };

The skin can now access the "posts" array from the context and we will write the necessary view logic to render each post.

This is a very simple action. Later we will look at an action in the admin section of the Blog which creates Posts. It will have to deal with the [Request](http://ringojs.org/api/master/ringo/webapp/request) object which is passed to every action as the first parameter `req`.

See the next section for what happens in the skin.
