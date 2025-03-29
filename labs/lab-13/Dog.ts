import Animal from "./Animal";
export default class Dog extends Animal {

    constructor() {
        super(60);
        this.name = "Dog";
    }

    getName(): string {
        return this.name;
    }

    getSpeed(): number {
        return this.speed;
    }

}

