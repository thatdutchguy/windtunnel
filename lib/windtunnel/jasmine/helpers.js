var vm = require('vm'),
  path = require('path');

var lib = path.join(__dirname, '..', '..');
var ext = path.join(lib, '..', 'ext');
var tools = require(path.join(lib, 'tools'));

function load(context) {
  tools.load(path.join(ext, 'jasmine.js'), context)
}

var initScript = vm.createScript('var jasmineEnv = jasmine.getEnv()');
var execScript = vm.createScript('jasmineEnv.execute()');

exports.load = load;

exports.exec = function (context) {
  execScript.runInContext(context)
};

exports.init = function (context, reporter) {
  context.jasmine.Spec.prototype.isSpec = function () {
    return true
  };
  context.jasmine.Spec.prototype.isSuite = function () {
    return false
  };
  context.jasmine.Suite.prototype.isSpec = function () {
    return false
  };
  context.jasmine.Suite.prototype.isSuite = function () {
    return true
  };
  initScript.runInContext(context);
  context.jasmineEnv.addReporter(reporter)
};

