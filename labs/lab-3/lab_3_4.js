/**
 * Array 01: [1, 12, 16, 28, 34]
 * Array 02: [1, 13, 16, 27, 99]
 * 
 * Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
 * 
 * 
 */

let intArr1 = [1, 12, 16, 28, 34];
let intArr2 = [1, 13, 16, 27, 99];

let intArr = intArr1.concat(intArr2);

for (let i = 0; i < intArr.length; i++) {
    for (let j = i + 1; j < intArr.length; j++) {
        if (intArr[i] > intArr[j]) {
            let temp = intArr[i];
            intArr[i] = intArr[j];
            intArr[j] = temp;
        }
    }
}


console.log(intArr);