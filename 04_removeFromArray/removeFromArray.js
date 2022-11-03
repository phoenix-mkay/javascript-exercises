const removeFromArray = function(arr1,...numItems) {
   
    const restOfItems = []
    restOfItems.push(...numItems)
    const result = arr1.filter(item => !restOfItems.includes(item))
    return result
};
removeFromArray([3,4,5,1],4)

// Do not edit below this line
module.exports = removeFromArray;
