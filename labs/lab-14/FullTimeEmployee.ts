import Employee from "./Employee";
export default class FullTimeEmployee extends Employee {

    constructor(name: string, workdays: number = 0) {
        super(50000, name, workdays);
    }

}