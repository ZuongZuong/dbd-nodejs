const readline = require('readline-sync');

let height = Number(readline.question('Enter your height: '))

let weight = Number(readline.question('Enter your weight: '))

const numberOfBMI = (weight / (height * height)).toFixed(1)

if (numberOfBMI == 0 || numberOfBMI < 0) {
    console.log(`invalid BMI. Please check your height: ${height} and your weight: ${weight} again`)
} else {
    if (numberOfBMI < 18.5) {
        console.log("Underweight")
    } else if (numberOfBMI <= 24.9) {
        console.log("Normal weight")
    } else if (numberOfBMI <= 29.9) {
        console.log("Overweight")
    } else {
        console.log("Obesity")
    }
}
