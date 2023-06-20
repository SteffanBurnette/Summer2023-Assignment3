const cartFunc= require("./shoppingCart");

describe("Testing out adding and removing items from the cart", () => {
    
    test("addToCart('Bread', 5) => [{'name':'cheese', amount:3},{'name': 'Bread', 'amount': 5}]", () => {
      
      expect(cartFunc.addToCart("Bread", 5)).toEqual([{'name':"cheese", amount:3},{'name': 'Bread', 'amount': 5}]);
    })

    test("removeFromCart('Bread', 5) => [{'name':'cheese', amount:3}", () => {
      
        expect(cartFunc.removeFromCart("Bread", 5)).toEqual([{'name':"cheese", amount:3}]);
      })

      test("cartFunc() => 3 since I removed bread and 5 leaving only cheese and 3.", () => {
      
        expect(cartFunc.calculateTotal()).toEqual(3);
      })

   

    
  })