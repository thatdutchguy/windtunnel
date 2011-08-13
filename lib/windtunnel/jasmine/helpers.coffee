JASMINE = "#{__projectExtDir}/jasmine.js"

vm    = require 'vm'
tools = require '../../tools.js'

load = (context) ->
  tools.load(JASMINE, context)

execScript = vm.createScript('jasmineEnv.execute()')
initScript = vm.createScript('''
jasmine.Spec.prototype.isSpec = function() { return true }
jasmine.Spec.prototype.isSuite = function() { return false }

jasmine.Suite.prototype.isSpec = function() { return false }
jasmine.Suite.prototype.isSuite = function() { return true }

var jasmineEnv = jasmine.getEnv()
jasmineEnv.addReporter(wtReporter)
''')
reporterScript = vm.createScript()


exports.load = load
exports.exec = (context) -> execScript.runInNewContext(context)
exports.init = (context, reporter) -> 
  context['wtReporter'] = reporter
  initScript.runInNewContext(context)
