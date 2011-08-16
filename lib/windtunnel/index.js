var fs = require('fs'),
    sys = require('sys'),
    path = require('path')

require.paths.unshift(path.join(__dirname, '..'))

var tools     = require('tools'),
    jasmine   = require('windtunnel/jasmine/helpers'),
    reporter  = require('windtunnel/jasmine/reporter')

var env = {
  summarizer: null,
  reporter: null
}

function summarizer(name) {
  return require('windtunnel/jasmine/summarizer/' + name).Summarizer
}

function createContext() {
  var context = {
    setInterval: setInterval,
    clearInterval: clearInterval,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    console: console,
    require: require  // might want to reconsider this
  }
  jasmine.load(context)
  jasmine.init(context, new reporter.SpecReporter(env.reporter))
  return context
}

module.exports = {
  version: [0, 0, 1],
  run: function(options) {
    env.reporter = new reporter.Reporter()
    env.summarizer = new (summarizer(options.summarizer))(env.reporter)

    var p = tools.realpath(options.path),
        s = fs.statSync(p)
    if (s.isDirectory()) {
      this.runPath(p);
    } else {
      this.runFile(p);
    }
  },
  runFile: function(path) {
    var context = createContext()
    tools.load(path, context)
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
