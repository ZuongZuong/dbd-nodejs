let intArr = [2, 3, 4, 5, 10, 1, 8, 7, 6, 9, 11];

for (let i = 0; i < intArr.length; i++) {
    for (let j = i + 1; j < intArr.length; j++) {
        if (intArr[i] > intArr[j]) {
            let temp = intArr[i];
            intArr[i] = intArr[j];
            intArr[j] = temp;
        }
    }
}

console.log("Minimum: " +  intArr[0]);

console.log("Maximum: " +  intArr[intArr.length - 1]);