const readline = require('readline-sync');



// DB
const account1 = {
    accountName: 'Duong',
    accountNumber: '001',
    routingNumber: '123',
    balance: 20000
}

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'Do';
account2.accountNumber = '002';

const accounts = [account1, account2];

// Programe Interface

bankApp();


// Support Functions

function bankApp() {
    let isInteracting = true;
    while (isInteracting) {
        printTheAppMenu();
        const userOption = getUserOption();

        switch (userOption) {
            case 1:
                const foundAccount = findAccount();
                if (foundAccount.accountName) {
                    const { accountName, balance } = foundAccount;
                    console.log(`Account Name: ${accountName} \nBalance: ${balance}`);
                    break;
                }
                break;

            case 2:
                updateBalance();
                break;

            case 0:
                isInteracting = false;
                break;
        
            default:
                console.log('Wrong option!! \n');
        }
    }

    console.log('See you next time!!');

}


// support functions
function printTheAppMenu() {
    console.log('===== Banking Application =====');
    console.log('1. Find an Account');
    console.log('2. Update Balance');
    console.log('0. Exit the programe');
}

function getUserOption() {
    return Number(readline.question('Enter your option: '));
}

function findAccount() {
    let foundAccount = {};
    const inputAccount = readline.question('Enter the account number: ');
    for (const account of accounts) {
        if(account.accountNumber === inputAccount) {
            foundAccount = account;
            break;
        }
    }


    return foundAccount;
}



function updateBalance() {
    const MAX_ALLOWED_ATTEMPTS = 3;
    let attempts = 0;

    do {
        const foundAccount = findAccount();
        const isNotFound = foundAccount.accountName === undefined;
        if (isNotFound) {
            console.log('Account not found!!');
            attempts++;
            continue;
        } else {
            const {balance} = foundAccount;
            console.log(`Current balance: ${balance}`);
            const expectedWithdraw = Number(readline.question('Enter the amount you want to withdraw: '));
            if (expectedWithdraw > balance) {
                console.log('Not enough balance!!');
                attempts++;
                continue;
            } else {
                foundAccount.balance -= expectedWithdraw;
                console.log(`New balance: ${foundAccount.balance}`);
                break;
            }
        }
    } while (attempts < MAX_ALLOWED_ATTEMPTS);
}   