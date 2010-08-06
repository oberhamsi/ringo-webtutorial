Actions
-----------------------------------

The current `index` function in `actions.js` only returns a static skin. We will extend the function to load the last ten Posts and pass them to the skin for rendering. At the top we require the `model` module we wrote, so we get access to the `Post` prototype. As before we use `query()` to select all posts - we are only interested in the first ten so we slice them off.

    var posts = model.Post.query().select().slice(0,10);

After that we use `skinResponse()` to return the rendered html to the browser. `skinResponse()` expects two arguments: the path to the skin file to render and a object with arbitrary properties. We call the later the "skin context". All the properties defined in the skin context are available for scripting in the skin. I'll show you in a minute. But this is how our action, returning the rendered skin, looks like:

    // actions.js
    var response = require('ringo/webapp/response');
    var model = require('./model');

    exports.index = function index(req) {
        var posts = model.Post.query().select().slice(0,10);
        return response.skinResponse('skins/index.html', {
            posts: posts,
        });
    };

In the skin we will now access the "posts" array from the context and render a subskin for each post. See the next section for what happens in the skin.