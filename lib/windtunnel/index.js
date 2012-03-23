var fs = require('fs'),
    util = require('util'),
    path = require('path'),
    vm = require('vm'),
    glob = require('glob')

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
  var window = document.createWindow()
  var sandbox = vm.createContext()

  for (var k in window) {
    sandbox[k] = window[k]
  }

  sandbox.document = document
  sandbox.setInterval = setInterval
  sandbox.clearInterval = clearInterval
  sandbox.setTimeout = setTimeout
  sandbox.clearTimeout = clearTimeout
  sandbox.console = console

  // TODO: rethink this part, not sure if I want to expose all of this
  sandbox.require = require
  vm.runInContext('window = (function() { return this })()', sandbox)
  // TODO: decide on and document how to access windtunnel internals?
  sandbox.__windtunnel = { env: { path: env.path } }

  jasmine.load(sandbox)
  jasmine.init(sandbox, new reporter.SpecReporter(env.reporter))

  sandbox.script = function(p) {
    var fullpath = fs.realpathSync(path.join(env.path, p))
    var s = vm.createScript(fs.readFileSync(fullpath), fullpath)
    s.runInContext(sandbox)
  }
  return sandbox
}

module.exports = {
  version: [0, 0, 7],
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

    function checkDone() {
      if (env.reporter.finishedAt != null) {
        if (env.summarizer.failedCount > 0) {
          // allow some time for reporting
          setTimeout(function() {
            process.exit(1)
          }, 10)
        } else {
          // normal exit
        }
      } else {
        setTimeout(checkDone, 10)
      }
    }
    checkDone()
  },
  runFile: function(path) {
    var context = createContext()
    try {
      tools.exec(path, context)
      jasmine.exec(context)
    }
    catch(e) {
      env.summarizer.renderException(e, path)
    }
  },
  runPath: function(path) {
    var patterns = ['/**/*_spec.js', '/**/*Spec.js'],
        files = [], file, i
    patterns.forEach(function(p) {
      files = files.concat(glob.sync(path + p))
    })
    for (i = 0; i < files.length; i++) {
      file = files[i]
      if (file.match(/\_spec\.js$/) || file.match(/Spec\.js$/)) {
        this.runFile(file)
      }
    }
  }
}
