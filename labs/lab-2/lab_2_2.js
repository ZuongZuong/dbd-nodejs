const readline = require('readline-sync');

console.log(Number(readline.question('Input your number: ')) % 2 === 0 ? "Even Number" : "Odd Number")