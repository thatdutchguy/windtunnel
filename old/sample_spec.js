// var jsdom = require('jsdom')
// var window = jsdom.jsdom().createWindow()
// 
// var done = false
// 
// jsdom.jQueryify(window, '../../ext/jquery.js' , function() {
//   window.$('body').append('<div class="testing">Hello World, It works</div>')
//   // console.log(window.$('.testing').text())
//   
//   describe('a jquery test', function() {
//     it("works", function() {
//       expect(window.$).not.toBeDefined()
//     })
//     
//   })
// 
//   done = true
// 
// })


describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
})
describe('a test', function() {
  it('passes', function() {
    // waitsFor(function() {
    //   return done
    // }, "foo", 1)
    expect(true).toEqual(true)
  })
  it('fails', function() {
    expect(false).toEqual(true)
    expect(false).toEqual(true)
  })
  it('fails too', function() {
    expect(false).toEqual(true)
  })

  // it("waits", function() {
  //   x = false
  //   waitsFor(function() {
  //     return x == true
  //   }, "FAILED", 1)
  //   setTimeout(function() {
  //     x = true
  //   }, 5)
  // })

  describe("that is nested", function() {
    it("may fail", function() {
      expect(true).toEqual(false)
    })
    it("may pass", function() {
      expect(true).toEqual(true)
    })
    
    describe("that is nested", function() {
      it("may fail", function() {
        expect(true).toEqual(false)
      })
      it("may pass", function() {
        expect(true).toEqual(true)
      })


    })
    
  })
  
  
})
