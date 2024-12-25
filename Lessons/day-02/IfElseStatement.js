const readline = require('readline-sync');

let arriavalTime = readline.question('Arrival Time: ');

let isHeOnTime = (Number(arriavalTime) === 7);

// >; <; >=; <=; ==; ===; !=; !==
// !: to revert a boolean value

if (isHeOnTime) {
    console.log("Let's talk!");
} else {
    console.log("Write a letter ....");
}

if (!isHeOnTime) {
    console.log("Write a letter ....");
} else {
    console.log("Let's talk!");
}

// Ternary Operator:
let msg = isHeOnTime ? "Let's Talk" : "Write a letter";
console.log(msg)


/**
 * 1. In the root dir: npm init -y
 * 
 *  
 * 
 * 
*/





