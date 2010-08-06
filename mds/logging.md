Logging
--------
Ringo come with a [logging Module](http://ringojs.org/api/master/ringo/logging). Instantiating a logger is easy, put this somewhere at the top of `adminactions.js`:

    // adminactions.js
    var log = require('ringo/logging').getLogger(module.id);

Then in the `edit.POST` and `create.POST` actions we log which user updated what post.

Because of the authbasic middleware we installed earlier the username must be in the header of every request. A small utility function in `adminactions.js` extracts the current user from the request. I copied this from `ringo/middleware/auth`:

    // adminactions.js
    function authUser(req) {
        var credentials = base64.decode(req.headers.authorization
                            .replace(/Basic /, '')).split(':');
        return credentials.length && credentials[0];
    }

Now we can start logging. And while we are at it we can finally fix `create.POST` to actually set the correct author. Note how we use `{}` (curly bracket pairs) for string replacement. The logger will replace the bracket pairs with the following arguments.

    // adminactions.js
    exports.create.POST = function create(req) {
        var post = new model.Post();
        for each (var key in ['text', 'lead', 'title']) {
            post[key] = req.params[key];
        }
        var user = getAuthUser(req);
        post.author = user;
        post.createtime = new Date();
        post.save();
        log.info('{} created by {}', post, user);
        return response.redirectResponse('./edit/' + post._id);
    };
    
This will yield a log line like this:

    8068446 [qtp1868018799-13] INFO  adminactions  - [Post: Second Post (simon, 04.08.2010)] updated by blogadmin

