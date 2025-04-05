import Employee from './Employee';
import FullTimeEmployee from './FullTimeEmployee';
import ContractEmployee from './ContractEmployee';
import readline from 'readline-sync';
export default class EmployeeController {
    employees: Employee[] = [];

inputEmployee(): Employee {
    const name = readline.question('Enter Employee Name: ')
    const type = readline.question('Enter Employee Type (full-time/contract): ')
    const workdays = readline.question('Enter Employee Workdays: ');
    const workdaysNum = parseInt(workdays);
    if (type === 'full-time') {
        return new FullTimeEmployee(name, workdaysNum);
    } else if (type === 'contract') {
        return new ContractEmployee(name, workdaysNum);
    } else {
        throw new Error('Invalid employee type');
    }
}


addEmployee() {
    const employee = this.inputEmployee();
    this.employees.push(employee);
}

calculateTotalSalary(): number {
    let totalSalary = 0;
    for (const employee of this.employees) {
        totalSalary += employee.getSalary();
    }
    return totalSalary;
}

findMinAndMaxSalary() {
    let minSalary = this.employees[0].getSalary();
    let maxSalary = this.employees[0].getSalary();
    for (const employee of this.employees) {
        const salary = employee.getSalary();
        if (salary < minSalary) {
            minSalary = salary;
        }
        if (salary > maxSalary) {
            maxSalary = salary;
        }
    }
    return { minSalary, maxSalary };
}

displayEmployeeDetails() {
    for (const employee of this.employees) {
        console.log(`Name: ${employee.getName()}, Salary: ${employee.getSalary()}`);
    }
}

findEmployeeBySalary(salary: number): Employee | undefined {
    return this.employees.find(employee => employee.getSalary() === salary);
}

}

