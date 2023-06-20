const stringFunc= require("./stringFunctions");

describe("Testing out reverse string and Palindrome", () => {
    
    test("stringFunc(Steffan) => naffetS", () => {
      
      expect(stringFunc.reverseString("Steffan")).toEqual("naffetS");
    })

    test("stringFunc(tot) =>true ", ()=>{
        expect(stringFunc.isPalindrome("tot")).toEqual(true);

    })


   

    
  })