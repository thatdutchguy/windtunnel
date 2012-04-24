Wind Tunnel
===========

What's this?
------------

A headless JavaScript testing (using Jasmine, https://github.com/pivotal/jasmine) tool that doesn't require a browser, but
does simulate the DOM using jsdom (https://github.com/tmpvar/jsdom).

It's the successor to the (now defunct) webr experiment (https://github.com/thatdutchguy/webr).

Disclaimer
==========

This is a work in progress, and is still in its early stages.
I hammered this out while attending LSRC V. I'm still figuring out this node.js thing and 
am not sure how I'm going to structure this yet. Stuff will change. Stuff will break.


Install
=======
    npm install -g windtunnel
  
Usage
=====
    wt <path> [options]

Examples
--------
    wt jspec/

    wt jspec/ --summarizer html

    wt jspec/awesome_spec.js --summarizer html

The HMTL summarizer has been tailored to work well with TextMate.


Useful tidbits
==============

* Output format can be text or html (a la RSpec).
* Each spec file will run in it's own context, so things won't bleed through into specs run from other files.
* A "script" method is exposed for loading other scripts in your spec. Scripts paths should be relative to the file loading them.
* The "require" method is exposed to the context specs run in, allowing you to do more advanced things like load files
  from disk (for example: template files).
* Works with CoffeeScript: You can write your specs in CoffeeScript and load JavaScript/CoffeeScript.