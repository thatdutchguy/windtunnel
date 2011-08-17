var fs = require('fs'),
    sys = require('sys'),
    path = require('path'),
    vm = require('vm')

var lib = path.join(__dirname, '..')

var tools     = require(path.join(lib, 'tools')),
    jasmine   = require(path.join(lib, 'windtunnel/jasmine/helpers')),
    reporter  = require(path.join(lib, 'windtunnel/jasmine/reporter'))

var env = {
  summarizer: null,
  reporter: null,
  path: null
}

function summarizer(name) {
  return require(path.join(lib, 'windtunnel/jasmine/summarizer/' + name)).Summarizer
}



function createContext() {
  var document = require('jsdom').jsdom()
  var sandbox = document.createWindow()
  
  sandbox.document = document
  sandbox.setInterval = setInterval
  sandbox.clearInterval = clearInterval
  sandbox.setTimeout = setTimeout
  sandbox.clearTimeout = clearTimeout
  sandbox.console = console

  // TODO: rethink this part, not sure if I want to expose all of this
  sandbox.require = require
  sandbox.window = sandbox
  // TODO: decide on and document how to access windtunnel internals?
  sandbox.__windtunnel = { env: { path: env.path } }

  jasmine.load(sandbox)
  jasmine.init(sandbox, new reporter.SpecReporter(env.reporter))

  var context = vm.createContext(sandbox)
  context.script = function(p) {
    var fullpath = fs.realpathSync(path.join(env.path, p))
    var s = vm.createScript(fs.readFileSync(fullpath), fullpath)
    s.runInContext(context)
  }
  return context
}

module.exports = {
  version: [0, 0, 2],
  run: function(options) {
    env.reporter = new reporter.Reporter()
    env.summarizer = new (summarizer(options.summarizer))(env.reporter)

    var p = tools.realpath(options.path),
        s = fs.statSync(p)
    if (s.isDirectory()) {
      env.path = p
      this.runPath(p)
    } else {
      env.path = path.dirname(p)
      this.runFile(p)
    }
  },
  runFile: function(path) {
    var context = createContext()
    tools.exec(path, context)
    jasmine.exec(context)
  },
  runPath: function(path) {
    var files = fs.readdirSync(path), file, i
    for (i = 0; i < files.length; i++) {
      file = files[i]
      if (file.match(/\_spec\.js$/)) {
        this.runFile(path + '/' + file)
      }
    }
  }
}
