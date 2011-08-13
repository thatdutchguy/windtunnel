VERSION = "0.0.1"

vm    = require 'vm'
util  = require 'util'
fs    = require 'fs'
sys   = require 'sys'

tools = require '../tools.js'
# script    = tools.script
# load      = tools.load
# realpath  = tools.realpath

context     = require '../windtunnel/context.js'
reporter    = require '../windtunnel/jasmine/reporter.js'
jasmine     = require '../windtunnel/jasmine/helpers.js'


class Service
  constructor: (@options) ->
    @reporter = new reporter.Reporter
    summarizer  = require("../windtunnel/jasmine/summarizer/#{@options.summarizer}.js").Summarizer
    new summarizer(@reporter)
  
  createReporter: ->
    new reporter.SpecReporter(@reporter)
    
  createContext: ->
    cxt = context.create()
    jasmine.load(cxt)
    jasmine.init(cxt, @createReporter())
    cxt
  
  runSpecFile: (fileName) ->
    cxt = @createContext()
    tools.load(fileName, cxt)
    jasmine.exec(cxt)

  runSpecPath: (path) ->
    files = fs.readdirSync(path)
    for file in files
      @runSpecFile(path + '/' + file) if file.match(/\_spec\.js$/)

  # use this - it'll figure out what you want to run (dir or file)
  runPath: (pathName) ->
    path = tools.realpath(pathName)
    stat = fs.statSync(path)
    if stat.isDirectory()
      @runSpecPath(path)
    else
      @runSpecFile(path)


exports.VERSION = VERSION
exports.Service = Service
