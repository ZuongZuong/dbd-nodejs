import readline from 'readline-sync';
import Employee from './Employee';
import EmployeeController from './EmployeeController';

const employeeController = new EmployeeController();

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
                employeeController.addEmployee();
            }
            console.log('Employee Added Successfully!');
            TestRunner();
            break;
        case 2:
            console.log('------------------');
            console.log('Total Salary: ', employeeController.calculateTotalSalary());
            TestRunner();
            break;
        case 3:
            console.log('------------------');
            const { minSalary, maxSalary } = employeeController.findMinAndMaxSalary();
            console.log('Minimum Salary: ', minSalary);
            console.log('Maximum Salary: ', maxSalary);
            TestRunner();
            break;
        case 4:
            console.log('------------------');
            employeeController.displayEmployeeDetails();
            TestRunner();
            break;
        case 5:
            console.log('------------------');
            console.log('Enter Salary to Find Employee: ');
            const salary = parseInt(readline.question('Enter Salary: '));
            const employee = employeeController.findEmployeeBySalary(salary);
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