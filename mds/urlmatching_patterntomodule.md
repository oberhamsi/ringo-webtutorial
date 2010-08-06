Url Pattern: mapping a module to Urls
---------------------------------------
Our super simple URL mapping brought as far - with all the automatic parameter capturing & passing that is going on. Though for the admin backend we have to extend it. As I layed out above, all the backend actions will have the common prefix `/admin/`. The easiest way to setup a mapping for this is to put all the admin actions in a separate file - adminactions.js for example - and map every Url that starts with `/admin/` to that file. Easy:

    // config.js
    exports.urls = [
        ['/', './actions'],
        ['/admin/', './adminactions']
    ];

That's it already. For the Url `/admin/create` to work we only need to add a `create` action in `adminactions.js` - will write that in the next section.
