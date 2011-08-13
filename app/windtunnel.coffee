fs     = require 'fs'
sys    = require 'sys'
path   = require 'path'

global.__projectDir = path.dirname(fs.realpathSync(path.join process.argv[1], '..'))
global.__projectLibDir = path.join __projectDir, 'lib'
global.__projectExtDir = path.join __projectDir, 'ext'

nomnom = require 'nomnom'
wt     = require '../lib/windtunnel/service.js'

cmdLine =
  version:
    string: "--version"
    help: "print version"
    callback: ->
      "Wind Tunnel version " + wt.VERSION
  path:
    position: 0
    help: "file or directory"
  summarizer:
    string: "--summarizer"
    help: "summarizer to use [console/html]"
    default: 'console'

options = nomnom.opts(cmdLine)
parsed = options.parseArgs()

if parsed.path
  service = new wt.Service(parsed)
  service.runPath(parsed.path)
