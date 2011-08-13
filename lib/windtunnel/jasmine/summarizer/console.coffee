# Summarizer summarizes the info in the Reporter in some meaningful way.
fs      = require('fs')
path    = require('path')
sys     = require('sys')
puts    = sys.puts
print   = sys.print

printTrace = (trace, indent) ->
  prefix = ([0..indent].map -> '').join(' ')
  trace.split(/\n/).forEach (line) -> 
    puts prefix + line unless line.match(__projectLibDir) || line.match(__projectExtDir)


class ConsoleSummarizer
  constructor: (@reporter) ->
    self = @
    @reporter.finished(-> self.summarize())
    @reporter.result((r)-> self.specResult(r))
    @exampleCount = 0
    @failedCount = 0
  
  summarize: ->
    puts ""
    puts ""
    @render()
    puts ""
    
    puts "Finished in #{@reporter.duration()}s"
    puts "Examples: #{@exampleCount}, Failure#{'s' unless @failedCount == 1}: #{@failedCount}"
    
  render: ->
    for r in @reporter.specReporters
      @renderResults(r.runner.topLevelSuites())
      @renderResults(r.runner)
    
  renderResults: (suitesOrSpecs) ->
    for s in suitesOrSpecs
      @renderSuite(s) if s.isSuite()
      @renderSpec(s) if s.isSpec()

  renderSuite: (suite) ->
    @renderResults(suite.children())

  renderSpec: (spec) ->
    @exampleCount++
    results = spec.results()
    unless results.passed()
      @failedCount++
      indent = @failedCount.toString().length + 4

      puts "Failures:" if @failedCount == 1
      puts "  #{@failedCount}) #{spec.getFullName()}"

      for item in results.getItems()
        unless item.passed()
          backtrace = item.error && item.error.stack || item.trace && item.trace.stack
          printTrace(backtrace, indent)
          puts ""
    
  specResult: (r) ->
    print if r then '.' else 'F'

exports.Summarizer = ConsoleSummarizer