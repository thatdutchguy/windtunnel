# Summarizer summarizes the info in the Reporter in some meaningful way.
fs      = require('fs')
path    = require('path')
sys     = require('sys')
puts    = sys.puts
# 
# filterTrace = (trace) ->
#   trace.split(/\n/).filter((line) ->
#     !(line.match(__projectLibDir) || line.match(__projectExtDir))
#   ).join('\n')

prepTrace = (trace) ->
  textMateTrace(trace.split(/\n/).filter((line) ->
    !(line.match(__projectLibDir) || line.match(__projectExtDir))
  )).join('\n')

textMateTrace = (traceArray) ->
  traceArray.map (line) ->
    line.replace(/(\/.*\.js):(\d*)/, "<a href=\"txmt://open?url=file://$1&line=$2\">$1:$2</a>")


# 
# printTrace = (trace, indent) ->
#   prefix = ([0..indent].map -> '').join(' ')
#   trace.split(/\n/).forEach (line) -> 
#     puts prefix + line unless line.match(__projectLibDir) || line.match(__projectExtDir)


css = '''
<style>
  html, body {
    padding: 0;
    margin: 0;
  }
  body {
    font-size: 80%;
    font-family: "Lucida Grande", Helvetica, sans-serif;
  }
  #header {
    background: #000;
    color: #fff;
    height: 4em;
  }
  #header.passed {
    background-color: #65C400;
  }
  #header.failed {
    background-color: #c40d0d;
  }

  #header h1 {
    font-size: 1.8em;
    margin: 0 10px;
    padding: 10px;
    position: absolute;
  }

  .summary {
    float: right;
    margin: 0;
    padding: 5px 10px;
    right: 0;
    top: 0;
  }
  .summary p {
    margin: 0 0 0 2px;
  }
  .summary .totals {
    font-size: 1.2em;
  }

  #results {
    margin-bottom: 1em;
    padding-right: 10px;
  }

  .group {
    margin: 0 0 5px 10px;
    padding: 0 0 5px;
    font-size: 11px;
  }
  .group-name {
    background-color: #000;
    color: #fff;
    font-weight: bold;
    padding: 3px;
  }
  .group.failed .group-name {
    background-color: #c40d0d;
  }
  .group.passed .group-name {
    background-color: #65C400;
  }

  .example {
    margin: 5px 0 5px 5px;
    padding: 3px 3px 3px 18px;
  }
  .example.failed {
    background-color: #fffbd3;
    border-bottom: 1px solid #c40d0d;
    border-left: 5px solid #c40d0d;
    color: #C20000;
  }
  .example.passed {
    background-color: #DBFFB4;
    border-bottom: 1px solid #65C400;
    border-left: 5px solid #65C400;
    color: #3D7700;
  }
  .example .backtrace {
    color: #000;
  }

</style>
'''


# printTrace = (trace, indent) ->
#   prefix = ([0..indent].map -> '').join(' ')
#   trace.split(/\n/).forEach (line) -> 
#     puts prefix + line unless line.match(__projectLibDir) || line.match(__projectExtDir)

class HTMLSummarizer
  constructor: (@reporter) ->
    self = @
    @reporter.finished(-> self.summarize())
    @exampleCount = 0
    @failedCount = 0
  
  summarize: ->
    results = @renderResults()
    summary = @renderSummary()
    status = if @failedCount > 0 then 'failed' else 'passed'
    puts "<!DOCTYPE html><html><head><title>Jasmine results</title>#{css}</head><body></body><div class='report'><div id='header' class='#{status}'><h1>Jasmine Code Examples</h1>#{summary}<div id='results' class='results'>#{results}</div></div></html>"


  renderResults: ->
    html = []
    for r in @reporter.specReporters
      html.push @render(r.runner.topLevelSuites())
      html.push @render(r.runner)
    html.join('')

  render: (suitesOrSpecs) ->
    html = []
    for s in suitesOrSpecs
      html.push @renderSuite(s) if s.isSuite()
      html.push @renderSpec(s) if s.isSpec()
    html.join('')

  suitePassed: (suite) ->
    suite.results().passed()
    # console.log('x')
    # for item in suite.results().getItems() #.filter((item) -> !item.passed()).length == 0
    #   return false unless item.passed()
    # true
  
  renderSuite: (suite) ->
    result = if @suitePassed(suite) then 'passed' else 'failed'
    content = @render(suite.children())
    "<div class='group #{result}'><div class='group-name'>#{suite.description}</div>#{content}</div>"

  renderSpec: (spec) ->
    @exampleCount++
    results = spec.results()
    if results.passed()
      result = 'passed'
      content = ''
    else
      @failedCount++
      result = 'failed'
      content = @renderSpecFailed(spec)
    "<div class='example #{result}'><div class='example-name'>#{spec.description}</div>#{content}</div>"
    
  renderSpecFailed: (spec) ->
    html = []
    results = spec.results()
    results.getItems().forEach (item) ->
      unless item.passed()
        backtrace = item.error && item.error.stack || item.trace && item.trace.stack
        html.push "<div class='example-failure'><div class='message'><pre>#{item.toString()}</pre></div><div class='backtrace'><pre>#{prepTrace(backtrace)}</pre></div></div>"
    html.join('')
  
  renderSummary: ->
    totals = "Examples: #{@exampleCount}, Failure#{'s' unless @failedCount ==1}: #{@failedCount}"
    duration = "Finished in #{@reporter.duration()}s"
    "<div class='summary'><p class='totals'>#{totals}</p><p class='duration'>#{duration}</p></div></div>"

exports.Summarizer = HTMLSummarizer