/**
 * Array 01: [1, 12, 16, 28, 34]
 * Array 02: [1, 13, 16, 27, 99]
 * 
 * Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
 * 
 * 
 */
const { bubleSort } = require('./Util');

let intArr1 = [1, 12, 16, 28, 34];
let intArr2 = [1, 13, 16, 27, 99];

let intArr = intArr1.concat(intArr2);

bubleSort(intArr);


console.log(intArr);