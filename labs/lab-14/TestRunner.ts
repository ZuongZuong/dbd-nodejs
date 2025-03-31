import Employee from './Employee';
import FullTimeEmployee from './FullTimeEmployee';
import ContractEmployee from './ContractEmployee';
import readline from 'readline-sync';
const employees: Employee[] = [];

function inputEmployee(): Employee {
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


function addEmployee() {
    const employee = inputEmployee();
    employees.push(employee);
}

function calculateTotalSalary(): number {
    let totalSalary = 0;
    for (const employee of employees) {
        totalSalary += employee.getSalary();
    }
    return totalSalary;
}

function findMinAndMaxSalary() {
    let minSalary = employees[0].getSalary();
    let maxSalary = employees[0].getSalary();
    for (const employee of employees) {
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

function displayEmployeeDetails() {
    for (const employee of employees) {
        console.log(`Name: ${employee.getName()}, Salary: ${employee.getSalary()}`);
    }
}

function findEmployeeBySalary(salary: number): Employee | undefined {
    return employees.find(employee => employee.getSalary() === salary);
}

function menu() {
    console.log('1. Add Employee');
    console.log('2. Calculate Total Salary');
    console.log('3. Find Minimum and Maximum Salary');
    console.log('4. Display Employee Details');
    console.log('5. Find Employee by Salary');
    console.log('6. Exit');
}

function choose(option: number) {
    switch (option) {
        case 1:
            console.log('------------------');
            const name = (readline.question('Enter Number Employee Need to Input: '));
            for (let i = 0; i < parseInt(name); i++) {
                console.log('------------------');
                console.log(`Employee ${i + 1}`);
                console.log('------------------');
                addEmployee();
            }
            console.log('Employee Added Successfully!');
            TestRunner();
            break;
        case 2:
            console.log('------------------');
            console.log('Total Salary: ', calculateTotalSalary());
            TestRunner();
            break;
        case 3:
            console.log('------------------');
            const { minSalary, maxSalary } = findMinAndMaxSalary();
            console.log('Minimum Salary: ', minSalary);
            console.log('Maximum Salary: ', maxSalary);
            TestRunner();
            break;
        case 4:
            console.log('------------------');
            displayEmployeeDetails();
            TestRunner();
            break;
        case 5:
            console.log('------------------');
            console.log('Enter Salary to Find Employee: ');
            const salary = parseInt(readline.question('Enter Salary: '));
            const employee = findEmployeeBySalary(salary);
            if (employee) {
                console.log(`Employee Found: Name: ${employee.getName()}, Salary: ${employee.getSalary()}`);
            } else {
                console.log('No Employee Found with this Salary');
            }
            TestRunner();
            break;
        case 6:
            console.log('Exiting...');
            break;
        default:
            console.log('Invalid option. Please try again.');
    }

}

function TestRunner() {
    let option: number;
    menu();
    option = parseInt(readline.question('Choose an option: '));
    choose(option);
}


TestRunner();