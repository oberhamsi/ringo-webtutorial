Middleware
-----------
For authentication we use Ringo's [basic auth middlware](http://ringojs.org/api/master/ringo/middleware/basicauth). Like any middleware it is activated by adding it to the array `middleware` in `config.js`:

    // config.js
    exports.middleware = [
        'ringo/middleware/responselog',
        'ringo/middleware/error',
        'ringo/middleware/notfound',
        'ringo/middleware/basicauth'
    ];

But that has no visible effect unless we also define a protected realm. In our case all backend Urls start with '/admin/' so that will be the realm, which only the user 'demoblog' with the password 'secret' can access. The passwords is given as a SHA1 hash. The final auth config looks like this:

    // config.js
    exports.auth = {
        '/admin/': {
            blogadmin: "e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4" // "secret"
        }
    };

You can create the SHA1 for a string with Ringo's `ringo/utils/strings` `digest()` method:

    >> var strings = require('ringo/utils/string')
    >> strings.digest('secret', 'sha1')
    e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4

When you access any of the /admin/ Urls you should now get a basicauth prompt, try [http://127.0.0.1:8080/admin/](http://127.0.0.1:8080/admin/).

FIXME:
  * explain middleware in general, how to write one
