import { BankingAccount } from "./BankingAccount";

export class CheckingAccount extends BankingAccount {
    minimumBalance: number;
    constructor(balance: number, accountNumber: string) {
        super(balance, accountNumber);
        this.minimumBalance = 50;
    }
    public deposit(amount: number): void {
        this.balance += amount;
    }
    public withdraw(amount: number): void {
        if (this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
        } else {
            console.log("Withdrawal would result in balance below minimum required balance.");
        }
    }

}
