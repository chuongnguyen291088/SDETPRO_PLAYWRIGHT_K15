import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {
    constructor() {
        super();
        this.minBalance = 0;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): number {
        let tempBalance = this.balance - amount;
        if(tempBalance < this.minBalance) {
            throw new Error(`Your balance: ${this.balance} | You could NOT withdraw greater than ${this.balance - this.minBalance}`).message;
        }

        this.balance = this.balance - amount;
        return this.balance;
    }

    getBalance(): number {
        return this.balance;
    }
}