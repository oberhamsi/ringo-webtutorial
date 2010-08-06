Ringo comes with Batteries included
----------------------------------------------

All those `[object Storable]` are ugly. We should add a nicer string representation for Posts. Even if this is just for our own development sanity.

We will add a `toString` function to the Post protototype that will return a pretty string representation. Ringo comes with many useful Modules, we are going to use `ringo/utils/dates` here to format the date:

    // model.js
    var dates = require('ringo/utils/dates');
    exports.Post.prototype.toString = function() {
        return '[Post: ' + this.title + ' (' + this.author + ', ' +
            dates.format(this.createtime, 'dd.MM.yyyy') + ')]';
    };

Ringo ships with many useful modules. We have [JSON support](http://ringojs.org/api/master/core/json), a module for [file operations](http://ringojs.org/api/master/fs), a [unit testing framework](http://ringojs.org/api/master/assert) and more. Most of the interesting stuff is in the [ringo/](http://ringojs.org/api/master/) namespace.

If you still do not find what you need maybe someone else has already written a packacke that might help you: [List of Ringo Packages](http://ringojs.org/wiki/Packages/).

