"use strict";
//leaning function
//Normal function
//Arrow Function
function add(num1, num2 = 10) {
    return num1 + num2;
}
// add(2,'3') 
const addArrow = (num1, num2) => num1 + num2;
//object --> function ---> method
const poorUser = {
    name: 'sujon',
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const richUser = {
    name: 'Habib',
    balance: 1000,
    reduceBalance(balance) {
        return this.balance - balance;
    }
};
const mainUser = {
    name: 'Omar',
    balance: 2000,
    totalBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
const arr = [1, 2, 3];
const newArray = arr.map((elem) => elem * elem);
const smallArr = [1, 4, 20];
const smallArray = smallArr.map((elem) => elem * elem);
