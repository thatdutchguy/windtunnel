script("../../sample/coffee/sample.coffee", {bare: true})

describe("testing CoffeeScript", function () {
  it("runs the CoffeeScript script", function () {
    expect(triple(2)).toEqual(6)
  })
})
