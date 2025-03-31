export abstract class BankingAccount {
  protected balance: number;
  protected accountNumber: string;

  constructor(initialBalance: number, accountNumber: string) {
    this.balance = initialBalance;
    this.accountNumber = accountNumber;
  }

  public abstract deposit(amount: number): void;

  public abstract withdraw(amount: number): void;

  public getBalance(): number {
    return this.balance;
  }

  public getAccountNumber(): string {
    return this.accountNumber;
  }
}