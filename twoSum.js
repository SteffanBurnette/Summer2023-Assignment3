

function twoSum(ary, target){
    let retary=[];
    for(let i=0;i<ary.length;i++){
        for(let j=0;j<ary.length;j++){
            if(ary[i]+ary[j]==target){
                retary.push(ary.indexOf(ary[i]));
                retary.push(ary.indexOf(ary[j]));
                return retary;
            }
        }
    }
}

module.exports=twoSum;

console.log(twoSum([0,1,2,4,3,5],8));