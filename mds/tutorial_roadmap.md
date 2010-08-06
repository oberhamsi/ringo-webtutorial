Roadmap for the Rest of the Tutorial
--------------------------------------
Creating Posts in the Ringo shell was a great way to show you how our Storage API works. But in the real world you will have a backend to edit and create posts. That is what we will build now. Keeping it simple, we just add two actions: one to edit posts and another one to create them.

We want the URLs to look like this:

  * /admin/edit/id show the form for editing Post with id
  * /admin/create/ show an empty post form for creating new Posts

Some kind of authentication would be nice. Ringo ships with an [authentication middleware](http://ringojs.org/api/master/ringo/middleware/basicauth) which allows us to define protected URLs and users who can access. That will do for now. We will take a closer look at this middleware in a later section.

To show of Ringo's [logging facility](http://ringojs.org/api/master/ringo/logging) we will also log everything that goes on in the backend.
