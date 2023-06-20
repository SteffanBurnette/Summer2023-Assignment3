//Gave it a starting object to help with testing
const cartObj=[{'name':"cheese", amount:3}];

function addToCart(item, quantity){
    let tempObj={
        name:item,
        amount:quantity
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
        
        price+=cartObj[i].amount;
    }
    
    return price;
}

module.exports={addToCart, removeFromCart, calculateTotal};