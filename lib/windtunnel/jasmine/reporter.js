function now() {
  return (new Date).getTime()
}

function Reporter() {
  this.startedAt = null
  this.finishedAt = null
  this.specReporters = []
  this.done = false
  this.callbacks = {
    finished: [],
    specResults: []
  }
}

Reporter.prototype = {
  finished: function (cb) {
    this.callbacks.finished.push(cb)
  },
  result: function (cb) {
    this.callbacks.specResults.push(cb)
  },
  start: function () {
    this.startedAt = now()
  },
  duration: function () {
    return (this.finishedAt - this.startedAt) / 1000
  },
  finish: function () {
    this.finishedAt = now()
    this.callbacks.finished.forEach(function (cb) {
      cb()
    })
  },
  register: function (specReporter) {
    this.specReporters.push(specReporter)
  },
  checkDone: function () {
    var remaining = this.specReporters.filter(function (r) {
      return !r.done
    })
    if (!remaining.length) this.finish()
  },
  reportRunnerStarting: function (reporter, runner) {
    if (!this.startedAt) this.start()
  },
  reportRunnerResults: function (reporter, runner) {
    reporter.done = true
    reporter.runner = runner
    this.checkDone()
  },
  reportSuiteResults: function (reporter, suite) {
  },
  reportSpecResults: function (reporter, spec) {
    var result = spec.results().passed()
    this.callbacks.specResults.forEach(function (r) {
      r(result)
    })
  },
  reportSpecStarting: function (reporter, spec) {
  }
}


function SpecReporter(reporter) {
  this.reporter = reporter;
  this.reporter.register(this);
  this.runner = null;
  this.done = false;
}

SpecReporter.prototype = {
  reportRunnerStarting: function (runner) {
    return this.reporter.reportRunnerStarting(this, runner)
  },
  reportRunnerResults: function (runner) {
    return this.reporter.reportRunnerResults(this, runner)
  },
  reportSuiteResults: function (suite) {
    return this.reporter.reportSuiteResults(this, suite)
  },
  reportSpecStarting: function (spec) {
    return this.reporter.reportSpecStarting(this, spec)
  },
  reportSpecResults: function (spec) {
    return this.reporter.reportSpecResults(this, spec)
  }
}

exports.Reporter = Reporter;
exports.SpecReporter = SpecReporter;
