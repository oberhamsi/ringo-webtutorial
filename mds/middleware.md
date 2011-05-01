Middleware
-----------
For authentication we use Ringo's [basic auth middlware](http://ringojs.org/api/master/ringo/middleware/basicauth). Like any middleware it is activated by adding it to the array `middleware` in `config.js`:

    // config.js
    exports.middleware = [
       require('ringo/middleware/gzip').middleware,
       require('ringo/middleware/etag').middleware,
       require('ringo/middleware/static').middleware(module.resolve('public')),
       require('ringo/middleware/responselog').middleware,
       ... cut for clearity ...
    ];

By convention every middleware module - like `ringo/midleware/basicauth` - exports a function named `middleware` which acts as the actual middleware function. BasicAuth is a special middleware as it needs a configuration object. Similar to the Static-Middleware which accepts the path it should serve statically.

We have to setup an auth config object to pass to the middleware. In our case all backend Urls start with '/admin/' so that will be the realm, which only the user 'blogadmin' with the password 'secret' can access. The passwords is given as a SHA1 hash. The final auth config looks like this:

    // config.js
    var authConfig = {
        '/admin/': {
            blogadmin: "e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4" // "secret"
        }
    };

Which we will put into action by passing it to the BasicAuth-middleware:

    // config.js
    exports.middleware = [
        require('ringo/middleware/gzip').middleware,
        require('ringo/middleware/etag').middleware,
        require('ringo/middleware/static').middleware(module.resolve('public')),
        //require('ringo/middleware/responselog').middleware,
        require('ringo/middleware/error').middleware,
        require('ringo/middleware/notfound').middleware,
        require('ringo/middleware/basicauth').middleware(authConfig),
    ];

You can create the SHA1 for a string with Ringo's `ringo/utils/strings` `digest()` method:

    >> var strings = require('ringo/utils/strings')
    >> strings.digest('secret', 'sha1')
    e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4

When you access any of the /admin/ Urls you should now get a basicauth prompt, try [http://127.0.0.1:8080/admin/](http://127.0.0.1:8080/admin/).

FIXME:
  * explain middleware in general, how to write one
  * what does `middleware` function do -> it's a JSGI app
