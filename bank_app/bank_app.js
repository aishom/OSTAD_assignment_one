class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}


const account1 = new BankAccount(1001, "Montasir", 1000);
const account2 = new BankAccount(1002, "Rabbil Hasan", 2000);


console.log();
console.log(`Transection Information one:`);

account1.deposit(500);
account1.withdraw(200);
account1.displayAccountInfo();

console.log();
console.log(`Transection Information two:`);

account2.deposit(2000);
account2.withdraw(5000);
account2.displayAccountInfo();
