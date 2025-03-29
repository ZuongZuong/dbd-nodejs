import Animal from "./Animal";

export default class Tiger extends Animal {

    constructor() {
        super(100);
        this.name = "Tiger";
    }

    getName(): string {
        return this.name;
    }

    getSpeed(): number {
        return this.speed;
    }

}

