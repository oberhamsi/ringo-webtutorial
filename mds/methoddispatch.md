RESTful Method Dispatch
-------------------------------

The `edit` action has two tasks: 

  * it must output a form with the Blogpost's data for editing
  * when the user clicks 'save' it must accept the incoming POST request and modify the Blogpost's data accordingly.

Ringo has a builtin mechanism for dispatching on the request method, which we will use here.

So far we have only seen actions that are plain functions. Those plain functions will be triggered for all HTTP methods (POST, GET, etc.). Instead of the action being a function, it can also be an object literal with properties matching the HTTP method names. For our `edit` action we need one for GET and another for POST:

    // adminactions.js
    var {Response} = require('ringo/webapp/response');
    var model = require('./model');

    exports.edit = {};
    exports.edit.GET = function(req, id) {
        // output the model data for displaying
        var post = model.Post.get(id);
        return Response.skin('skins/edit.html', {
            post: post,
        });
    };

    exports.edit.POST = function (req, id) {
        // TODO handle post data
        return Response.redirect(req.path);
    };

The POST action so far only redirects back to the GET action. Let's first deal with the `edit.html` skin. It displays the form for the passed `post` object:

    // edit.html
    <% extends ./base.html %>

    <% subskin content %>
        <h1> Edit Post '<% post.title %>' </h1>
        // href macro without parameters links to _this_ document.
        <form name="blogpost" action="<% href %>" method="POST">
            <h3>Title<h3>
            <input type="text" name="title" size="30" value="<% post.title %>">
            <h3>Lead<h3>
            <textarea name="lead" cols="50" rows="5"><% post.lead %></textarea>
            <h3>Text</h3>
            <textarea name="text" cols="50" rows="20"><% post.text %></textarea>
            <br/>
            <input type="submit" name="Save" value="save"/>
        </form>

This should already work! Try accessing [http://127.0.0.1:8080/admin/edit/1](http://127.0.0.1:8080/admin/edit/1). The form displays and you can press Save and that will redirect you back to the `edit.GET` action.

