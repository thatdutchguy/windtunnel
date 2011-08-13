# populates a minimal context
createBareContext = ->
  context =
    setInterval: setInterval
    clearInterval: clearInterval
    setTimeout: setTimeout
    clearTimeout: clearTimeout
    console: console,
    require: require

exports.create = createBareContext