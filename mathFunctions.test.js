const mathFunctions = require("./mathFunctions");



describe("add(a, b) returns the sum of a b", () => {
    
    test("mathFunctions(0, 0) => 0", () => {
      
      expect(mathFunctions.add(0, 0)).toEqual(0);
    })

    test("add('s',0) => null", ()=>{
        expect(mathFunctions.add("s",0)).toEqual(null);

    })

  
      test("mathFunctions(0, 0) => 0", () => {
        expect(mathFunctions.subtract(1, 1)).toEqual(0);
      })
      test("mathFunctions(0, 0) => 0", () => {
        expect(mathFunctions.multiply(0, 0)).toEqual(0);
      })
      test("mathFunctions.divide(0, 0) => 0", () => {
        expect(mathFunctions.divide(1, 1)).toEqual(1);
      })


   

    
  })