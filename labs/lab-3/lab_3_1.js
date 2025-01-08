let intArr = [2, 3, 4, 5, 10, 1, 8, 7, 6, 9, 11];
let temp = [];

for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] % 2 === 0) {
        temp.push(intArr[index]);
    }
}

console.log("Even numders: " + temp.length);
console.log(`Odd numders: ${(intArr.length - temp.length)}`);
