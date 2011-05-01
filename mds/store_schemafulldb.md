Schemafull DBs - What about MySQL, PostgreSQL, etc.?
---------------------------------------------

For a more traditional, schemafull store, like MySql, `model.js` would be the place to setup the whole database mapping. Typically, you would map every table in your database to a store entity, and the fields of the table would map to properties of the entities.

To give you a taste: in case your using something like MySQL your model definition will look more like the following:

    // model.js
    // (do not use this for tutorial. this is just an example)
    var Post = store.defineEntity('Post', {
        table: 'persons',
        properties: {
            title: {type: 'string', nullable: false},
            text: {type: 'string', nullable: false},
            createtime: {type: 'timestamp', nullable: false},
        }
    });
    exports.Post = Post;

.. and you would have to instantiate a different store in `config.js`  - you can currently choose between [ringo-sqlstore](http://github.com/grob/ringo-sqlstore) (written in javascript using JDBC) and [ringo-hibernate](http://github.com/robi42/ringo-hibernate/) (which is built on top of <http://hibernate.org/>).

You can install those with ringo-admin. See [How to install packages][Package_Management] if you need more help with that.

    $ ringo-admin install robi42/ringo-hibernate
    $ ringo-admin install grob/ringo-sqlstore

Both of them are work in progress and do not have much documentation, though they do comply to the evolving [Ringo store interface](http://ringojs.org/wiki/Storage/).

[ringo-sqlstore's readme](http://github.com/grob/ringo-sqlstore/blob/master/README.md) gives you a starting point; and [ringo-hiberante's unit tests](http://github.com/robi42/ringo-hibernate/blob/master/test/all.js) will help you understand how it is different and what it's capable of.

There are in fact other store implementation, check out the Database section in the [list of available packages for Ringo][Packages].

