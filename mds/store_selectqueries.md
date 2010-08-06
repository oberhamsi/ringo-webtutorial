Select Queries
------------------

When we defined the store entities in `model.js`, Ringo did something behind our backs: `defineEntity()` not only gave us back a constructor for creating the entities Post and Comment, it also added the `query()` function to each of those.

We can do `Post.query()` which does nothing, but allows us to chain real query functions. As many as we want. Currently Ringo supports the following query functions, all chainable:

  * equals (property, value)
  * greater (property, value)
  * greaterEquals (property, value)
  * less (property, value)
  * lessEquals (property, value)
  
To get all Posts by a certain author you would use `query()` and chain an `equals()` query and then `select()` to actually get the list of matching entities:

    >> Post.query().equals('author', 'simon').select()
    [object Storable],[object Storable]

Or to get all Posts from that author before a certain date, just add another query call:

    >> Post.query().equals('author', 'simon').
    ..      less('createtime', new Date()).select()
    [object Storable],[object Storable]

But once you call `select()` on a query-chain Ringo will return the list of Entities matching the Queries.

In addition to `query()` all store entities have `get(id)`, so we can for example do `Post.get(1)` to get the post with id 1.
