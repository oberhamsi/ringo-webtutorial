The Request Object
-----------------------

Ringo passes the `Request` object as the first argument `req` to every action. We have seen this before, but in the `edit` action we will finally do something with it. We loop over the list of editable properties, read them from `req.params` and set them on the Blogpost.

    // in an action
    var post = model.Post.get(id);
    for each (var key in ['text', 'lead', 'title']) {
        post[key] = req.params[key];
    }

`req.params` holds all GET as well as POST parameters. See [Request](http://ringojs.org/api/master/ringo/webapp/request) for more info on the Request class.

Finally we `save()` the modified post and redirect back to the `edit.GET` action. This works because `req.path` holds the current request path (`/admin/edit/2` for example). The whole action is still quiet simple:

    // adminactions.js
    exports.edit.POST = function (req, id) {
        var post = model.Post.get(id);
        for each (var key in ['text', 'lead', 'title']) {
            post[key] = req.params[key];
        }
        post.save();
        return Response.redirect(req.path);
    };

The `create` actions are even simpler. The `GET.create` function renders the `edit.html` skin like `edit.GET` does but without passing a post, thereby creating an empty form. And that's it:

    // adminactions.js
    exports.create = {};
    exports.create.GET = function(req) {
        return Response.skin('skins/edit.html');
    };

The `POST.create` stores what properties it gets via `req.params` in a new `Post` object but also attaches the automatically created `author` and `createtime` properties. And finally, it redirects to the `edit.GET` action of the newly saved `Post`:

    // adminactions.js
    exports.create.POST = function(req) {
        var post = new model.Post();
        for each (var key in ['text', 'lead', 'title']) {
            post[key] = req.params[key];
        }
        post.author = 'unknown author';
        post.createtime = new Date();
        post.save();
        // once the Post is stored, redirect to it's edit page
        return Response.redirect('/admin/edit/' + post._id);
    };


Not bad. Startup your blog and try creating a new Post by opening [http://127.0.0.1:8080/admin/create](http://127.0.0.1:8080/admin/create)

