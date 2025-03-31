import Employee from "./Employee";
export default class ContractEmployee extends Employee {

    constructor(name: string, workdays: number = 0) {
        super(40000, name, workdays);
    }

}