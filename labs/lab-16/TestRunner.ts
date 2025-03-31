import { BankingAccount } from "./BankingAccount";
import { CheckingAccount } from "./CheckingAcount";
import { SavingsAccount } from "./SavingsAccount";

let checkingAccount: BankingAccount = new CheckingAccount(1000, "CA12345");
let savingsAccount: BankingAccount = new SavingsAccount(2000, "SA12345");

checkingAccount.deposit(500);
checkingAccount.withdraw(200);
console.log("Checking Account Balance: " + checkingAccount.getBalance());
console.log("Checking Account Number: " + checkingAccount.getAccountNumber());
checkingAccount.withdraw(2000); 

console.log("====================================");
savingsAccount.deposit(1000);
savingsAccount.withdraw(500);
console.log("Savings Account Balance: " + savingsAccount.getBalance());
console.log("Savings Account Number: " + savingsAccount.getAccountNumber());
console.log("====================================");








