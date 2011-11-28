var fs = require('fs'),
    util = require('util'),
    path = require('path')

var lib = path.join(__dirname, '..', '..', '..')
var ext = path.join(lib, '..', 'ext')
var tools = require(path.join(lib, 'tools'))

var puts = util.puts,
    print = util.print

function printTrace(trace, indent) {
  var prefix = '', i
  for (i = 0; i < indent.length; i++) {
    prefix += ' '
  }
  trace.split("\n").forEach(function(line) {
    if (!(line.match(lib) || line.match(ext))) {
      puts(prefix + line)
    }
  })
}

function ConsoleSummarizer(reporter) {
  var self = this
  this.reporter = reporter
  this.reporter.finished(function() { self.summarize() })
  this.reporter.result(function(r) { self.specResult(r) })
  this.exampleCount = 0
  this.skippedCount = 0
  this.failedCount = 0
}
ConsoleSummarizer.prototype = {
  summarize: function() {
    puts("\n")
    this.render()
    puts("")
    puts("Finished in " + (this.reporter.duration()) + "s")
    
    var examples = "Examples: " + this.exampleCount,
        failures = "Failure" + (this.failedCount == 1 ? '' : 's') + ": " + this.failedCount,
        skipped  = "Skipped: " + this.skippedCount,
        results = [examples, failures]

    if (this.skippedCount > 0) {
      results.push(skipped)
    }

    puts(results.join(', '))
  },
  render: function() {
    var self = this
    this.reporter.specReporters.forEach(function(r) {
      self.renderResults(r.runner.topLevelSuites())
      self.renderResults(r.runner)
    })
  },
  renderResults: function(suitesOrSpecs) {
    var i, s
    for (i = 0; i < suitesOrSpecs.length; i++) {
      s = suitesOrSpecs[i]
      if (s.isSuite()) {
        this.renderSuite(s)
      } else if (s.isSpec()) {
        this.renderSpec(s)
      }
    }
  },
  renderSuite: function(suite) {
    this.renderResults(suite.children())
  },
  renderSpec: function(spec) {
    this.exampleCount++
    var results = spec.results(), items, backtrace, logMessages = []
    if (!results.passed()) {
      this.failedCount++
      indent = this.failedCount.toString().length + 4
      
      if (this.failedCount === 1) puts("Failures:")
      puts("  " + this.failedCount + ") " + spec.getFullName())
      items = results.getItems()
      items.forEach(function(item) {
        switch(item.type) {
          case "expect":
            backtrace = item.passed() ? '' : (item.error && item.error.stack || item.trace && item.trace.stack)
            printTrace(backtrace, indent)
            puts("")
            break
          case "log":
            for (var i = 0, values = item.values, len = values.length; i < len; i++) {
              logMessages.push(values[i])
            }
            break
        }
      })
      
      if (logMessages.length) {
        puts("Log messages:")
        for (var i = 0, len = logMessages.length; i < len; i++) {
          puts("* " + logMessages[i])
        }
        puts("")
      }
    } 
    else if(results.skipped) {
      this.skippedCount++
    }
  },
  specResult: function(r) {
    print(r ? '.' : 'F');
  },
  // helper method for exceptions that occur while loading scripts or specs
  renderException: function(e, path) {
    puts("An unhandled exception occurred:")
    if (path) {
      puts("")
      puts("  File: " + path)
      puts("")
    }
    printTrace(e.stack)
  }
}

exports.Summarizer = ConsoleSummarizer;