export default abstract class BankingAccount {
    protected balance: number = 0;
    protected minBalance: number = 0;

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): number;
    abstract getBalance(): number;
}