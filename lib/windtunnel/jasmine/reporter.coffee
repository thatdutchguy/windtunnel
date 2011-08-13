# The Wind Tunnel reporter - this collects all the reports from the individually run SpecReporters
class Reporter
  constructor: ->
    @startedAt = null
    @finishedAt = null
    @specReporters = []
    @done = false
    @callbacks =
      finished: [],
      specResults: []

  finished: (cb) ->
    @callbacks.finished.push(cb)
  
  result: (cb) ->
    @callbacks.specResults.push(cb)

  start: ->
    @startedAt = (new Date).getTime()

  duration: ->
    (@finishedAt - @startedAt) / 1000

  finish: ->
    @finishedAt = (new Date).getTime()
    @callbacks.finished.forEach (cb) -> cb()

  register: (specReporter) ->
    @specReporters.push(specReporter)

  checkDone: ->
    remaining = @specReporters.filter (r) -> r.done == false
    @finish() if remaining.length == 0

  reportRunnerStarting: (reporter, runner) ->
    @start() unless @startedAt

  reportRunnerResults: (reporter, runner) ->
    # mark reporter as done
    reporter.done = true
    reporter.runner = runner
    @checkDone()
    
  reportSuiteResults: (reporter, suite) ->
  reportSpecResults: (reporter, spec) -> 
    result = spec.results().passed()
    @callbacks.specResults.forEach (r) -> r(result)
    # print if spec.results().passed() then '.' else 'F'
    
  reportSpecStarting: (reporter, spec) ->

# The SpecReporter is instantiated for every spec file that's being run
class SpecReporter
  constructor: (@reporter) ->
    @reporter.register(@)
    @runner = null
    @done = false

  reportRunnerStarting: (runner)  -> @reporter.reportRunnerStarting(@, runner)
  reportRunnerResults: (runner)   -> @reporter.reportRunnerResults(@, runner)
  reportSuiteResults: (suite)     -> @reporter.reportSuiteResults(@, suite)
  reportSpecStarting: (spec)      -> @reporter.reportSpecStarting(@, spec)
  reportSpecResults: (spec)       -> @reporter.reportSpecResults(@, spec)

exports.Reporter = Reporter
exports.SpecReporter = SpecReporter