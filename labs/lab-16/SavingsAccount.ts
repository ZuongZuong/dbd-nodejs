import { BankingAccount } from "./BankingAccount";

export class SavingsAccount extends BankingAccount {
    
    constructor(balance: number, accountNumber: string) {
        super(balance, accountNumber);
    }
    
    public deposit(amount: number): void {
        this.balance += amount;
    }
    
    public withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
        console.log("Insufficient funds");
        }
    }

}