export default class Animal {
    protected speed: number;
    protected maxSpeed: number;
    protected name: string

    constructor(maxSpeed: number) {
        this.maxSpeed = maxSpeed;
        this.speed = (Math.floor(Math.random() * 100) + 1) * maxSpeed;
    }

    getName(): string {
        return this.name;
    }

    getSpeed(speed: number, maxSpeed: number) {
         if (speed < 0) {
            console.log("Speed must be greater than 0");
        } else if (speed > this.maxSpeed) {
            console.log("Speed must be less than max speed");
        } else {
            return this.speed;
        }
    }
    
}
