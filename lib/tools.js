var fs = require('fs'),
  vm = require('vm'),
  cf = require('coffee-script');

function realpath(path) {
  return fs.realpathSync(path)
}

function readfile(path) {
  return fs.readFileSync(path).toString()
}

function script(scriptPath, options) {
  var fullpath = realpath(scriptPath);
  var data = convertToJs(readfile(fullpath), fullpath, options);
  return vm.createScript(data, fullpath)
}

function load(path, context) {
  if (typeof context !== 'undefined') {
    script(path).runInContext(context)
  } else {
    script(path).runInThisContext()
  }
}

function exec(path, context) {
  if (typeof context !== 'undefined') {
    script(path).runInContext(context)
  } else {
    throw new Error('Context object not specified.')
  }
}

function convertToJs(code, path, options) {
  // TODO: investigate, making CoffeeScript compile with the bare options makes it easier
  // to test internal logic, but could have side effects. Perhaps explicitly expose if 
  // you want to do that, or make it an option?
  options = options || {bare: true};
  if (/\.coffee$/.test(path)) {
    return cf.compile(code, options)
  }
  return code
}

exports.realpath = fs.realpathSync;
exports.readfile = readfile;
exports.script = script;
exports.load = load;
exports.exec = exec;
exports.convertToJs = convertToJs;
