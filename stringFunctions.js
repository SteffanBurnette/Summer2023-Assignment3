function reverseString(str){

    if(typeof(str)!="string"){
        return null;
    }
    let tempstr="";
    for(let i=str.length-1;i>=0;i--){
         tempstr+=str[i];
    }
    return tempstr;
}

function isPalindrome(str){

    if(typeof(str)!="string"){
        return null;
    }

    let tempstr="";
    let count=0;
    //reverses the string
    for(let i=str.length-1;i>=0;i--){
         tempstr+=str[i];
    }
    //compares the value in the string to see if they all match by taking count
    for(let i=0;i<str.length;i++){
        if(tempstr[i]===str[i]){
           count++;
        }
    }
    //returns true if all the values match else returns false
    if(count===str.length){
        return true;
    }
    

    return false;
    

}

module.exports={reverseString, isPalindrome};

