Configuring a Store
-----------------

By convention you should put all model code into `model.js`. Create that file now in your demoblog folder. We will put all data describing the models as well as any model behaviour into that module. For bigger apps you might want to consider a `model/` directory where each model gets its own module. For this tutorial a single `model.js` will do. First we import the `filestore` model and instantiate a store on which we operate:

    // model.js
    var filestore = require('ringo/storage/filestore');
    var storePath = './db';
    var store = new filestore.Store(storePath);

The filestore, like every store, has the function `defineEntity()` which allows us to, well, define entities that can be put into or retrieved from the store. How many arguments and what kind of arguments `defineEntity()` accepts depends on the store implementation. The filestore only requires one argument: the name of the entity.

    // model.js
    var filestore = require('ringo/storage/filestore');
    var storePath = './db';
    var store = new filestore.Store(storePath);

    exports.Post = store.defineEntity('Post');
    exports.Comment = store.defineEntity('Comment');

That's it. `defineEntity()` returns the constructor for the entities, which we in turn export so other modules can access them. We will later use the `Post` and `Comment` constructors to create Posts and Comments. Those constructors returned by defineEntity also have functions for querying the models - we will look at them later.

The filestore is a schemaless store, which means we do not have to define in advance what properties the entities have; we can simply attach properties to entity instances and whatever we attach will get stored. In a traditional, schemafull store (like MySQL) you would have declare in advance - when creating tables - what properties ("fields") the entities ("tables") have.

