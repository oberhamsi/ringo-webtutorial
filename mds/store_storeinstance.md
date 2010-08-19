Configuring a Store
-----------------

By convention you should put all model code into `model.js`. Create that file now in your demoblog folder. We will put all data describing the models as well as any model behaviour into that module. For bigger apps you might want to consider a `model/` directory where each model gets its own module. For this tutorial a single `model.js` will do.

We import the `config` module to get access to the store instance we setup earlier. The filestore, like every store, has the function `defineEntity()` which allows us to, well, define entities that can be put into or retrieved from the store. How many arguments and what kind of arguments `defineEntity()` accepts depends on the store implementation. The filestore only requires one argument: the name of the entity.

The filestore is a schemaless store, which means we do not have to define in advance what properties the entities have; we can simply attach properties to entity instances and whatever we attach will get stored. In a traditional, schemafull store (like MySQL) you would have declare in advance - when creating tables - what properties ("fields") the entities ("tables") have.

    // model.js
    var config = require('./config');

    exports.Post = config.store.defineEntity('Post');
    exports.Comment = config.store.defineEntity('Comment');

That's it. `defineEntity()` returns the constructor for the entities, which we in turn export so other modules can access them. We will later use the `Post` and `Comment` constructors to create Posts and Comments.

