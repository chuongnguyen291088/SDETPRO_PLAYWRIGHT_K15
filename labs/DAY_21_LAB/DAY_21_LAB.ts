import BankingAccount from "./BankingAccount";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let checkingAccount: BankingAccount = new CheckingAccount();
checkingAccount.deposit(1000);
console.log(`Checking account balance | ${checkingAccount.getBalance()}`);
checkingAccount.withdraw(500);
console.log(`Checking account balance | ${checkingAccount.getBalance()}`);
checkingAccount.withdraw(500);
console.log(`Checking account balance | ${checkingAccount.getBalance()}`);

let savingAccount: BankingAccount = new SavingAccount();
savingAccount.deposit(2000);
console.log(`Saving account balance | ${savingAccount.getBalance()}`);
savingAccount.withdraw(990);
console.log(`Saving account balance | ${savingAccount.getBalance()}`);
savingAccount.withdraw(1200)
console.log(`Saving account balance | ${savingAccount.getBalance()}`);