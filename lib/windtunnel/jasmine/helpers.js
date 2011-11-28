
var vm = require('vm'),
    path = require('path')
    
var lib = path.join(__dirname, '..', '..')
var ext = path.join(lib, '..', 'ext')
var tools = require(path.join(lib, 'tools'))

var jasmine = require(path.join(ext, 'jasmine'))

function load(context) {
  for (var prop in jasmine) {
    context[prop] = jasmine[prop]
  }
}

var initScript = vm.createScript('var jasmineEnv = jasmine.getEnv()')
var execScript = vm.createScript('jasmineEnv.execute()');

exports.load = load
exports.exec = function(context) {
  execScript.runInNewContext(context)
}
exports.init = function(context, reporter) {
  context.jasmine.Spec.prototype.isSpec = function() { return true }
  context.jasmine.Spec.prototype.isSuite = function() { return false }
  context.jasmine.Suite.prototype.isSpec = function() { return false }
  context.jasmine.Suite.prototype.isSuite = function() { return true }
  initScript.runInNewContext(context)
  context.jasmineEnv.addReporter(reporter)
}
