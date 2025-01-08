const readline = require('npm install readline-sync');


let arrivalTime = readline.question("Arrival Time: ");
let isHeOnTime = (arrivalTime == 7);

if (isHeOnTime) {
  console.log("let's talk");
} else {
  console.log("write a letter");
}

if (!isHeOnTime) {
    console.log("write a letter");
} else {
    console.log("let's talk");
  }

  //Ternary Operator : toan tu 3 ngoi
  let msg = isHeOnTime ? "let's talk" : "write a letter"
  console.log(msg);
  