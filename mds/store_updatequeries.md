Update queries
----------------------

Now we can more easily tell which Entity needs fixing. Before we query for the post we should reload the module by include'ing it again:

    >> include('model')
    >> Post.query().select()
    [Post: second post (simon, 11.05.2010)],[Post: undefined (simon, 11.05.2010)]

Pretty. Though now the missing `title` is glaring. Fixing that is easy. We set the `title` attribute on the second post and `save()` it:

    >> var posts = Post.query().select()
    >> posts[1].title = 'Introductory Post'
    Introductory Post
    >> posts[1].save()

Now both Posts show up nicely.

    >> Post.query().select()
    [Post: Second Post (simon, 11.05.2010)],[Post: Introductory Post (simon, 11.05.2010)]

Time to publish our thoughts!

