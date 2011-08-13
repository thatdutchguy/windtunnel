vm    = require 'vm'
fs    = require 'fs'
path  = require 'path'

# === some helper methods

script = (fileName) ->
  file = realpath(fileName)
  vm.createScript(fs.readFileSync(file).toString(), file)

load = (fileName, context = null) ->
  s = script(fileName)
  if context == null
    s.runInThisContext()
  else
    s.runInNewContext(context)

realpath = (path) ->
  fs.realpathSync(path)


exports.script    = script
exports.load      = load
exports.realpath  = realpath
