script "../../sample/coffee/sample.coffee" # defines triple
script "../../sample/coffee/sample.js" # defines double

describe "CoffeeScript support", ->
  it "runs a test", ->
    expect(true).toEqual(true)

  it "runs the CoffeeScript script", ->
    expect(triple 3).toEqual(9)

  it "runs the javascript script", ->
    expect(double 3).toEqual(6)
