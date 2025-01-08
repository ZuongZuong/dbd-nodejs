
let myArray = [1, 2, 3, 4, 5];

console.log(myArray);

let evenNumber = myArray.filter(function (value, index, array) {
    return value % 2 === 0;
});
