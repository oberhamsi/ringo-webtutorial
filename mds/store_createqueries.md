Create Queries
-----------------------------------

Let's do something with our models. We will create some blog posts in the Ringo shell. Change into the demoblog directory and start the shell:

    $ cd demoblog
    $ ringo

Import the `model` module. If you made any mistakes in `config.js` or `model.js` they will show up now as errors. We can now use the constructor functions we exported in the `model` module to create new Posts:

    >> include('./model');
    >> var post = new Post()
    >> post.author = 'Simon'
    Simon
    >> post.createtime = new Date()
    Tue May 11 2010 13:47:51 GMT+0200 (CEST)
    >> post.text = 'My first blog Post!'
    My first blog Post!
    
That was easy, but the Post is not yet persisted! Instances of store entities have a `save()` function that takes care of that:
    
    >> post.save()
    
There is also a `remove()` function which drops the entity from the store, e.g.:

    >> post.remove() // would remove that post from the store

Its usually nicer to pass the constructor an object holding all the properties you want stored:

    >> var post = new Post({
    ..          title: 'Second Post',
    ..          author: 'simon',
    ..          text: 'Follow up post in which i explain the first Post.',
    ..          createtime: new Date()
    .. })
    >> secondPost.save()

Oh no, the first Post does not have a title. Time to query that post and give it a title!

