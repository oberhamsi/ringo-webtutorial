JavaScript Modules
-------------------------

Ringo follows the [CommonJs] Standard. You will first notice this when dealing with modules. There are multiple JavaScript module patterns out there but in RingoJs you should only use this one:

  * Every file is a module living in its own top-level scope. No special syntax needed.
  * Attach to `exports` any functions or other properties a module should expose.
  * `require('foobar')` returns an object holding all exported properties of the module foobar.
  * `include('foobar')` brings all the exported properties of the module foobar into the including module (by convention: only use `include` in the shell)

An example should make things clearer. A simple module in the file `foobar.js` might look like the following. I want to exposes the function `add` but not the private `adder`:

    // foobar.js
    var adder = function(a, b) {
        return a + b;
    };
    exports.add = function(a, b) {
        return adder(a, b);
    };

You can then either `include()` that module, which would instantly make `add` available:

    >> include('foobar');
    >> add(2,3)
    5

Or - to keep your namespace clean - you can `require()` it and then access `add` as `foobar.add`:

    >> var foobar = require('foobar');
    >> foobar.add(3,4)
    7

Another option is to use [destructuring assignment](https://developer.mozilla.org/en/New_in_JavaScript_1.7) to extract exactly the properties you want from the module you require:

    >> var {add} = require('foobar');
    >> add(2,3)
    5

See [Modules in RingoJs] or the post [RingoJS Modules and how to fix the Global Object](http://hns.github.com/2010/07/30/modules.html) for more details.

