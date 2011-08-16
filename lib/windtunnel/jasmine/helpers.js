var vm = require('vm'),
    path = require('path'),
    tools = require('tools'),
    paths = require('paths')

function load(context) {
  tools.load(path.join(paths.ext, 'jasmine.js'), context)
}

var execScript = vm.createScript('jasmineEnv.execute()');
var initScript = vm.createScript(
  [ // Unfortunately in the reporter we can't use 'instanceof jasmine.Spec' because
    // we either don't have access to the same instance of jasmine. 
    // This workaround will let us determine what kind of object we're dealing with.
    'jasmine.Spec.prototype.isSpec = function() { return true }',
    'jasmine.Spec.prototype.isSuite = function() { return false }',
    'jasmine.Suite.prototype.isSpec = function() { return false }',
    'jasmine.Suite.prototype.isSuite = function() { return true }',
    // prepare the jasmine environment
    'var jasmineEnv = jasmine.getEnv()',
    'jasmineEnv.addReporter(wtReporter)'
  ].join("\n")
)

exports.load = load
exports.exec = function(context) {
  execScript.runInNewContext(context)
}
exports.init = function(context, reporter) {
  context.wtReporter = reporter
  initScript.runInNewContext(context)
}
