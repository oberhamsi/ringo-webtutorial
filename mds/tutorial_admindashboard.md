Building the Admin Dashboard
------------------------------
Manually hacking the Url to get into the admin interface is cumbersome. Let's build a simple admin dashboard, reachable under /admin/ that lists all stories with an edit link. This is pretty straight forward so I won't explain much. First the `index` action, which just renders `skins/adminindex.html` with all posts in the context:

    // adminactions.js
    exports.index = function index(req) {
        var posts = model.Post.query().select();
        return Response.skin('skins/adminindex.html', {
            posts: posts,
        });
    };

.. and the accompanying skin `adminindex.html`, which renders all posts, links to their edit page and has a "create new post" link on top:

    // adminindex.html
    <% extends ./base.html %>

    <% subskin content %>
    <h1> Demoblog Admin Interface </h1>
    <a href="./create"> new post </a>
    <ul>
    <% for post in <% posts %> render 'post' %>
    </ul>

    <% subskin 'post' %>
    <li>
        <a href="./edit/<%post._id%>"><% post.title %></a>
        <% post.createtime | dateFormat "dd.MM.yyyy" %>, <% post.author %>
    </li>

Tada: [http://127.0.0.1:8080/admin/](http://127.0.0.1:8080/admin/)
