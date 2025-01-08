/**
 * Input: [12, 34, 1, 16, 28]
 * 
 * Expected output: [1, 12, 16, 28, 34]
 * 
 */
let intArr = [12, 34, 1, 16, 28];

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