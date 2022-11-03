const ftoc = function(temp) {
  const newTempValue = ((temp -32) * 5/9)
  return Number.isInteger(newTempValue) ? newTempValue : +newTempValue.toFixed(1)
};

const ctof = function(temp) {
  const newTempValue = ((temp * 9/5) + 32)  
  return Number.isInteger(newTempValue) ? newTempValue : +newTempValue.toFixed(1)
};

// console.log(ftoc(-100));
// console.log(ftoc(32));
// console.log(ftoc(100));
// console.log(ctof(0));
// console.log(ctof(73.2));
// console.log(ctof(-10));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
