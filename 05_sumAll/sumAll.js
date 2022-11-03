const sumAll = function(num1,num2) {
    // check for type of the inputs
    if((typeof num1 !== "number" || typeof num2 !== "number") || (num1 < 0 || num2 < 0)){
        return "ERROR"
    }
    else{
    // check for large number
     let larger = Math.max(num1,num2)
     let smallest = Math.min(num1,num2)
     let result = 0
     for(let i=smallest;i<larger +1;i++){
        result +=i
     }
     return result
    }
};
console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
