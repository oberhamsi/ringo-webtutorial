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
 
 * `static/` By default Ringo serves files from this directory under the URL /static/
 
 * `config/` Holds jetty configuration files. Do not worry about those.
 
Calling `ringo main.js` will start a jetty webserver on your machine and you can view the demoblog app right away in your browser.

    $ cd demoblog
    $ ringo main.js

This will start a server on [http://127.0.0.1:8080](http://127.0.0.1:8080).

Instead of typing `ringo main.js` all the time you can start any web application with the `ringo-web` command. `config.js` must be in the directory from which you call `ringo-web`:

    $ cd demoblog
    $ ringo-web

If the server did not start that is probably because the default port used by Ringo (8080) is already in use. You can change the port in `config.js` by modifing the `httpConfig.port` property:

    // config.js
    exports.httpConfig = {
        staticDir: 'static',
        port: '8787',
    };

This is also where you can change the directory from which Ringo serves the static files - leave it as "static" for this tutorial.


