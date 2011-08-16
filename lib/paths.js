var tools = require('tools'),
    path  = require('path')

var lib = tools.realpath(__dirname),
    ext = tools.realpath(path.join(lib, '..', 'ext'))
 
exports.lib = lib
exports.ext = ext
