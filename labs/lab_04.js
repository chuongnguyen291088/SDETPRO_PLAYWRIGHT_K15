const input = require("../labUtils/inputUtil").getUserInput;
const {generateDate} = require("../labUtils/dateTimeHelper");

const aAccount = new originalObject("John", "40720000190", "7858885234", 5000000);
const bAccount = new originalObject("Peter", "40720000192", "2367941577", 50000000);
const cAccount = new originalObject("May", "40720000193", "4440824950", 10000000);
// const dAccount = new originalObject("Tony", "40720000194", "0440377981", 15000000);
const dAccount = JSON.parse(JSON.stringify(aAccount));
dAccount.name = "Tony";
dAccount.accountNumber = "40720000194";
dAccount.routingNumber = "0440377981";
dAccount.balance = 15000000;
// const eAccount = new originalObject("Adele", "40720000195", "0838892936", 20000000);
const eAccount = JSON.parse(JSON.stringify(aAccount));
eAccount.name = "Adele";
eAccount.accountNumber = "40720000195";
eAccount.routingNumber = "0838892936";
eAccount.balance = 20000000;

const accounts = [aAccount, bAccount, cAccount, dAccount, eAccount];

bankingApplication(accounts);

function originalObject(name, accountNumber, routingNumber, balance) {
  this.name = name;
  this.accountNumber = accountNumber;
  this.routingNumber = routingNumber;
  this.balance = balance;
};

function bankingApplication(accounts) {
  let option = selectOption();
  while (option !== 0) {
    let account = findAccount(accounts);
    switch (option) {
      case 1:
        if (!account) {
          console.error(`\n[ERROR] Your account is not existing. Please try again`);
        } else {
          console.log(`\n[INFO] Account name: ${account.name} \nAccount balance: ${account.balance}`);
          option = selectOption();
        };
        break;
      case 2:
        if (account) {
          updateBalance(account)
          option = selectOption();
        } else {
          console.error(`\n[ERROR] Your account is not existing. Please try again`);
        };
        break;
    }
  }
};

  function selectOption() {
    console.log("\n======== Banking Application ========");
    console.log("1. Find an account");
    console.log("2. Update balance");
    console.log("0. Exit the program");
    let flag = false;
    do {
      let option = input(true, "Please select an option: ");
      if (option <= 2) {
        flag = true;
        return option;
      } else {
        console.error(`\n[ERROR] Invalid option. Please try again`);
      }
    } while (!flag);
  };

  function findAccount(accounts) {
    let expectedAccountNumber = input(false, "\nPlease input account number: "),
      accountNumbers = [];
    for (let i = 0; i < accounts.length; i++) {
      let actualAccountNumber = accounts[i].accountNumber
      accountNumbers.push(actualAccountNumber);
      if (actualAccountNumber === expectedAccountNumber) {
        return accounts[i];
      }
    }
    if (!accountNumbers.includes(expectedAccountNumber)) {
      return null;
    }
  };

  function updateBalance(account) {
    console.log(`\n[INFO] Account name: ${account.name} \nAccount balance: ${account.balance}`);
    console.log("1. Deposit");
    console.log("2. Withdraw");
    let flag = false,
      option;

    while (!flag) {
      option = input(true, "Please select an option: ");
      if (option <= 2 && option !== 0) {
        flag = true;
      } else {
        console.error(`\n[ERROR] Invalid option. Please try again`);
      }
    }

    let amount = input(true, "Please input amount of money: "),
      currentBalance = account.balance,
      newBalance;

    switch (option) {
      case 1:
        newBalance = currentBalance + amount;
        account.balance = newBalance;
        break;
      case 2:
        if (amount <= currentBalance) {
          newBalance = currentBalance - amount;
          account.balance = newBalance;
        } else {
          console.error(`\n[ERROR] You're unable to withdraw an amount of money > ${currentBalance}`);
        }
        break;
    }
    console.log(`\n[INFO] Account name: ${account.name} \nAccount balance: ${account.balance}`);
  };