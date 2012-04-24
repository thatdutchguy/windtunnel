Wind Tunnel
===========

What's this?
------------

It's not really done yet, but it's going to be the successor to the webr experiment (https://github.com/thatdutchguy/webr).
A headless JavaScript testing (using Jasmine, https://github.com/pivotal/jasmine) tool that doesn't require a browser, but
can simulate the DOM using jsdom (https://github.com/tmpvar/jsdom).

Output format can be text or html (a la RSpec).

Disclaimer
==========

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
