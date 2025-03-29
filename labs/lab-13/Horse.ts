import Animal from "./Animal";

export default class Horse extends Animal {

    constructor() {
        super(75);
        this.name = "Horse";
    }

    getName(): string {
        return this.name;
    }

    getSpeed(): number {
        return this.speed;
    }
}

export { Horse };