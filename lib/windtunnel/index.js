var fs = require('fs'),
  path = require('path'),
  vm = require('vm'),
  glob = require('glob');

var lib = path.join(__dirname, '..');

var tools = require(path.join(lib, 'tools')),
  jasmine = require(path.join(lib, 'windtunnel/jasmine/helpers')),
  reporter = require(path.join(lib, 'windtunnel/jasmine/reporter'));

var env = {
  summarizer: null,
  reporter: null,
  path: null
};

function summarizer(name) {
  return require(path.join(lib, 'windtunnel/jasmine/summarizer/' + name)).Summarizer
}

function getCurrentScriptPath() {
  // TODO: Figure out how to use the --expose-debug-as flag and deal with the built in debug object
  //  - and figure out performance implications

  // FIXME: this needs to go: parse filename out of a stack trace
  // it will scan the stack trace for filenames, and match the first one that's not part of windtunnel
  var stack = new Error('grab stack trace').stack.split("\n");
  var pathMatch = /^\s+at\s(.*)\:\d+\:\d+$/;
  var m, i;
  for (i = 0; i < stack.length; i++) {
    m = stack[i].match(pathMatch);
    if (m && m[1] && tools.realpath(m[1]).indexOf(lib) === -1) {
      return m[1]
    }
  }
}

function createContext() {
  var window = new (require('jsdom').JSDOM)().window;
  var sandbox = vm.createContext();

  for (var k in window) {
    sandbox[k] = window[k]
  }

  sandbox.setInterval = setInterval;
  sandbox.clearInterval = clearInterval;
  sandbox.setTimeout = setTimeout;
  sandbox.clearTimeout = clearTimeout;
  sandbox.console = console;

  // TODO: rethink this part, not sure if I want to expose all of this
  sandbox.require = require;
  vm.runInContext('window = (function() { return this })()', sandbox);
  // TODO: decide on and document how to access windtunnel internals?
  sandbox.__windtunnel = {env: {path: env.path}};

  jasmine.load(sandbox);
  jasmine.init(sandbox, new reporter.SpecReporter(env.reporter));

  sandbox.script = function (scriptPath, options) {
    var fullpath;
    if (/^\//.test(scriptPath)) {
      fullpath = scriptPath
    } else {
      var filename = getCurrentScriptPath();
      var dir = path.dirname(filename);
      fullpath = tools.realpath(path.join(dir, scriptPath))
    }
    var data = tools.readfile(fullpath);
    var s = vm.createScript(tools.convertToJs(data, fullpath, options), fullpath);
    s.runInContext(sandbox)
  };
  return sandbox
}

module.exports = {
  run: function (options) {
    env.reporter = new reporter.Reporter();
    env.summarizer = new (summarizer(options.summarizer))(env.reporter);

    var p = tools.realpath(options.path),
      s = fs.statSync(p);
    if (s.isDirectory()) {
      env.path = p;
      this.runPath(p)
    } else {
      env.path = path.dirname(p);
      this.runFile(p)
    }

    // we have to wait, because specs can be asynchronouss
    function checkDone() {
      if (env.reporter.finishedAt != null) {
        if (env.summarizer.failedCount > 0) {
          // allow some time for reporting
          setTimeout(function () {
            process.exit(1)
          }, 10)
        } else {
          process.exit(0) // normal exit
        }
      } else {
        setTimeout(checkDone, 10)
      }
    }

    checkDone()
  },
  runFile: function (filePath) {
    var context = createContext();
    try {
      tools.exec(filePath, context);
      jasmine.exec(context)
    }
    catch (e) {
      env.summarizer.renderException(e, filePath);
      process.exit(1)
    }
  },
  runPath: function (path) {
    var patterns = ['/**/*_spec.js', '/**/*Spec.js', '/**/*_spec.coffee'],
      files = [], i;
    patterns.forEach(function (p) {
      files = files.concat(glob.sync(path + p))
    });
    for (i = 0; i < files.length; i++) {
      this.runFile(files[i])
    }
  }
};
