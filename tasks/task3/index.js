/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const bankAccount = {
  _balance: 1000,

  get formattedBalance() {
    return `$${this._balance}`;
  },

  set balance(value) {
    this._balance += value;
  },

  transfer(obj1, obj2, ammount) {
    obj1.balance = -ammount;
    obj2.balance = ammount;
  },
};

const bankAccount2 = {
  _balance: 1000,

  get formattedBalance() {
    return `$${this._balance}`;
  },

  set balance(value) {
    this._balance += value;
  },

  transfer(obj1, obj2, ammount) {
    obj1.balance = -ammount;
    obj2.balance = ammount;
  },
};

bankAccount.transfer(bankAccount, bankAccount2, 100);
