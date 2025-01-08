const { bubleSort } = require('./Util');
let intArr = [2, 3, 4, 5, 10, 1, 8, 7, 6, 9, 11];
bubleSort(intArr)
console.log("Minimum: " +  intArr[0]);

console.log("Maximum: " +  intArr[intArr.length - 1]);