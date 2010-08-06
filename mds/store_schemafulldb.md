Schemafull DBs - What about MySQL, PostgreSQL, etc.?
---------------------------------------------

For a more traditional, schemafull store, like MySql, `model.js` would be the place to setup the whole database mapping. Typically, you would map every table in your database to a store entity, and the fields of the table would map to properties of the entities.

To give you a taste: in case your using something like MySQL your model definition will look more like the following:

    // model.js (do not use this for tutorial. this is just an example)
    var Post = store.defineEntity('Post', {
        table: 'persons',
        properties: {
            title: {type: 'string', nullable: false},
            text: {type: 'string', nullable: false},
            createtime: {type: 'timestamp', nullable: false},
        }
    });

.. and you would have to instantiate a different store in `config.js` namely Ringo's [Relational Store](http://github.com/robi42/ringo-hibernate/) which you can install with ringo-admin. See [How to install packages][Package_Management] if you need more help with that.

    $ ringo-admin install robi42/ringo-hibernate

ringo-hibernate is work in progress and does not have much documentation. You can most easily find out what is currently possible by checking out [ringo-hiberante's unit tests](http://github.com/robi42/ringo-hibernate/blob/master/test/all.js).

There are in fact other store implementation, check out the Database section in the [list of available packages for Ringo][Packages].

