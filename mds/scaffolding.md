Webapp Scaffolding
------------

First, let Ringo's `admin-create` command take care of creating the directory structure and a couple of files that every webapp needs:

    $ ringo-admin create demoblog

This will create the `demoblog` folder containing a functional - but not yet very useful - web application. This is a template for your app to get you started. But it is already a runnable web app as you will soon see.

`admin-create` created a couple of files in the top level directory:

 * `main.js` The script bootstrapping your web application.
 * `config.js` Settings for middleware, database, the app itself, etc.
 * `actions.js` Functions creating the Response. The View in MVC.

.. and several directories with rather self explanatory names:

 * `skins/` Put all your skins (templates) in here.
 * `public/` Ringo servers files in this directory as static content.
 * `config/` Holds webserver configuration files. Do not worry about those.
 
Calling `ringo main.js` will start a development webserver, [jetty](http://en.wikipedia.org/wiki/Jetty_%28Web_server%29), on your machine and you can view the demoblog app right away in your browser.

    $ cd demoblog
    $ ringo main.js

This will start the server on [http://127.0.0.1:8080](http://127.0.0.1:8080).

Under Linux instead of typing `ringo main.js` all the time you can start any web application with the `ringo-web` command. `config.js` must be in the directory from which you call `ringo-web`:

    $ ringo-web

If the server did not start that is probably because the default port used by Ringo (8080) is already in use. You can change the port in `config.js` by adding/modifing the `httpConfig.port` property:

    // config.js
    // NOTE: if you do copy&paste, please remove comments.
    // Otherwise some examples will not work, in particular skins.
    
    exports.httpConfig = {
        port: '8787',
    };


