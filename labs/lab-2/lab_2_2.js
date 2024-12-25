const readline = require('readline-sync');

let checkNumber = Number(readline.question('Input your number: '))

let msg = checkNumber % 2 == 0 ? "Odd Number" : "Even Number"

console.log(msg)
