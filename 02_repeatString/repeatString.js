const repeatString = function(string,count) {
    return count === 0 ? '' : count > 0 ? string.repeat(count) : "ERROR" 
};

// Do not edit below this line
module.exports = repeatString;
