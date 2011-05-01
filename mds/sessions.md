Sessions
---------------------

Also it would be nice to have messages like "Post saved successfully" after saving. One way to do this is use the `req.session` (see [ringo/webapp/request.Session](http://ringojs.org/api/master/ringo/webapp/request#Session)). We can set a `message` property on `req.session` in `edit.POST` and read that property from the session in `edit.GET`.

Note how we also unset the `req.session.message` in `edit.GET` - we do no want it lurking in the session forever:

    // adminactions.js
    exports.edit.GET = function(req, id) {
        // ...
        var message = req.session.data.message;
        req.session.data.message = "";
        return Response.skin('skins/edit.html', {
            post: post,
            message: message,
        });
    };
    exports.edit.POST = function(req, id) {
        // ...
        post.save();
        req.session.data.message = "Successfully saved Post " + id;
        return Response.redirect(req.path);
    };

Adding `<% message %>` to the `edit.html` skin is left as an exercise.
