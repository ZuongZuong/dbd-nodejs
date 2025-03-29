import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

const horse = new Horse();
const dog = new Dog();
const tiger = new Tiger();
const speedOfWinner = Math.max(horse.getSpeed(), dog.getSpeed(), tiger.getSpeed());
const nameOfWinner = getWinnerAnimal();

function getWinnerAnimal(){
    if(horse.getSpeed() === speedOfWinner) {
        return horse.getName();
    } else if(dog.getSpeed() === speedOfWinner) {
        return dog.getName();
    } else if(tiger.getSpeed() === speedOfWinner) {
        return tiger.getName();
    }
    return "No winner";
}

console.log(`The winner is ${nameOfWinner} with speed ${speedOfWinner}`);







