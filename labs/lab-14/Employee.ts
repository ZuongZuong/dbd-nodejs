export default class Employee {

    protected salary: number = 0;
    protected name: string = "";
    protected workdays: number = 0;
    constructor(salary: number, name: string, workdays: number = 0) {
        this.salary = salary * workdays;
        this.name = name;
    }

    getSalary(): number {
        return this.salary;
    }

    getName(): string {
        return this.name;
    }

}