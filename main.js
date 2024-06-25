#! /usr/bin/env node  
// Learning Object Oriented Programming with TypeScript MyBank Console App - Project
// In this project you are going to follow this video which explains object 
// oriented programming using C# and write the same code in TypeScript.
import chalk from 'chalk';
// Class representing a bank account
class BankAccount {
    accountBalance;
    constructor(accountBalance) {
        this.accountBalance = accountBalance;
    }
    credit(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log(chalk.green(`Credit successful! New balance: ${this.accountBalance}`));
        }
        else {
            console.log(chalk.red('Invalid credit amount.'));
        }
    }
    debit(amount) {
        if (amount > 0 && amount <= this.accountBalance) {
            this.accountBalance -= amount;
            console.log(chalk.green(`Debit successful! New balance: ${this.accountBalance}`));
        }
        else {
            console.log(chalk.red('Invalid debit amount or insufficient balance.'));
        }
    }
}
// Customer class
class Customer {
    personalInfo;
    age;
    gender;
    accountNumber;
    bankAccount;
    constructor(personalInfo, age, gender, accountNumber, bankAccount) {
        this.personalInfo = personalInfo;
        this.age = age;
        this.gender = gender;
        this.accountNumber = accountNumber;
        this.bankAccount = bankAccount;
    }
    display() {
        console.log(`Customer: ${this.personalInfo.firstName} ${this.personalInfo.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Account Number: ${this.accountNumber}`);
    }
}
// Example usage
const account1 = new BankAccount(1500);
const c1 = new Customer({ firstName: 'Abdullah', lastName: 'Kashif' }, 21, 'Male', 1234566, account1);
c1.display();
// Credit $300 to the customer's account
c1.bankAccount.credit(300); // New balance: $1800
