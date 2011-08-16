var fs    = require('fs'),
    sys   = require('sys'),
    path  = require('path'),
    tools = require('tools'),
    paths = require('paths')
    
var puts  = sys.puts
var css   = tools.readfile(path.join(paths.lib, 'windtunnel', 'jasmine', 'summarizer', 'html.css'))

function t(template, replacements) {
  var r, rex
  for (r in replacements) {
    template = template.replace(new RegExp('\{\{' + r + '\}\}', 'g'), replacements[r])
  }
  return template;
}

function prepTrace(traceText) {
  return textMateTrace(filterTrace(traceText.split("\n"))).join("\n")
}

function filterTrace(traceArray) {
  return traceArray.filter(function(line) {
    return !(line.match(paths.lib) || line.match(paths.ext))
  })
}

function textMateTrace(traceArray) {
  return traceArray.map(function(line) {
    return line.replace(/(\/.*\.js):(\d*)/, "<a href=\"txmt://open?url=file://$1&line=$2\">$1:$2</a>");
  })
}

function HTMLSummarizer(reporter) {
  var self = this
  this.reporter = reporter
  this.reporter.finished(function() {
    self.summarize()
  })
  this.exampleCount = 0
  this.failedCount = 0
}

HTMLSummarizer.prototype = {
  summarize: function() {
    puts(t("<!DOCTYPE html><html><head><title>Jasmine results</title><style>{{css}}</style></head><body>" + 
           "<div class='report'><div id='header' class='{{status}}'><h1>Jasmine Code Examples</h1>" + 
           "{{summary}}<div id='results' class='results'>{{results}}</div></div></body></html>", {
      results: this.renderResults(),
      summary: this.renderSummary(),
      status: this.failedCount == 0 ? 'passed' : 'failed',
      css: css
    }))
  },
  renderResults: function() {
    var reporters = this.reporter.specReporters, 
        html = [], reporter, i
    for (i = 0; i < reporters.length; i++) {
      reporter = reporters[i]
      html.push(this.render(reporter.runner.topLevelSuites()))
      html.push(this.render(reporter.runner))
    }
    return html.join('')
  },
  render: function(suitesOrSpecs) {
    var html = [], i, s
    for (i = 0; i < suitesOrSpecs.length; i++) {
      var s = suitesOrSpecs[i]
      if (s.isSuite()) {
        html.push(this.renderSuite(s))
      } else if (s.isSpec()) {
        html.push(this.renderSpec(s))
      }
    }
    return html.join('')
  },
  renderSuite: function(suite) {
    var result = suite.results().passed() ? 'passed' : 'failed',
        content = this.render(suite.children())
    return t("<div class='group {{result}}'><div class='group-name'>{{description}}</div>{{content}}</div", {
             result: result,
             description: suite.description,
             content: content
           })
  },
  renderSpec: function(spec) {
    this.exampleCount++
    var results = spec.results(), result, content = ''
    if (results.passed()) {
      result = 'passed'
    } else {
      this.failedCount++
      result = 'failed'
      content = this.renderSpecFailed(spec)
    }
    return t("<div class='example {{result}}'><div class='example-name'>{{description}}</div>{{content}}</div>", {
             result: result,
             description: spec.description,
             content: content
           })
  },
  renderSpecFailed: function(spec) {
    var html = [],
        results = spec.results(),
        backtrace

    results.getItems().forEach(function(item) {
      if (!item.passed()) {
        backtrace = item.error && item.error.stack || item.trace && item.trace.stack
        html.push(
          t("<div class='example-failure'><div class='message'><pre>{{item}}</pre></div>" + 
            "<div class='backtrace'><pre>{{trace}}</pre></div></div>", {
            item: item.toString(),
            trace: prepTrace(backtrace)
          })
        )
      }
    })
    return html.join('')
  },
  renderSummary: function() {
    var duration = t("Finished in {{duration}}s", { duration: this.reporter.duration() }),
        totals = t("Examples: {{count}}, Failure{{s}}: {{failed}}", {
          failed: this.failedCount,
          count: this.exampleCount,
          s: this.failedCount === 1 ? '' : 's'
        })

    return t("<div class='summary'><p class='totals'>{{totals}}</p>" + 
             "<p class='duration'>{{duration}}</p></div></div>", {
                totals: totals,
                duration: duration
           })
  }
}

exports.Summarizer = HTMLSummarizer