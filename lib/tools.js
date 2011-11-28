var fs    = require('fs'),
    vm    = require('vm'),
    path  = require('path')

function realpath(path) {
  return fs.realpathSync(path)
}

function readfile(path) {
  return fs.readFileSync(path).toString()
}

function script(path) {
  var fullpath = realpath(path)
  return vm.createScript(readfile(fullpath), fullpath)
}

function load(path, context) {
  if (typeof context != 'undefined') {
    script(path).runInContext(context)
  } else {
    script(path).runInThisContext()
  }
}

function exec(path, context) {
  if (typeof context != 'undefined') {
    script(path).runInContext(context)
  } else {
    throw new Error('Context object not specified.')
  }
}

exports.realpath = fs.realpathSync
exports.readfile = readfile
exports.script = script
exports.load = load
exports.exec = exec