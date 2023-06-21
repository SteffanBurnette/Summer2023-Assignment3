//Gave it a starting object to help with testing
const cartObj=[{'name':"cheese", amount:3, cost:5}];

function addToCart(item, quantity, price){
    let tempObj={
        name:item,
        amount:quantity,
        cost:price
    };
   cartObj.push(tempObj);
   return cartObj;
}

function removeFromCart(item, quantity){

    for(let i=0;i<cartObj.length;i++){
        if(cartObj[i].name==item&&cartObj[i].amount==quantity){
            cartObj.splice(i,1);
            return cartObj;
        }
    }
    return null;
}

function calculateTotal(){
    let price=0;
    for(let i=0;i<cartObj.length;i++){
        
        price+=(cartObj[i].amount*cartObj[i].cost);
    }
    
    return price;
}

module.exports={addToCart, removeFromCart, calculateTotal};

console.log(calculateTotal());