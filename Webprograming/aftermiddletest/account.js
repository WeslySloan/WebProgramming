function Account(owner, code, balance) {
  this.owner = owner;
  this.code = code;
  this.balance = balance;
  this.inquiry = function () { return this.balance; }
  this.deposit = function (money) { this.balance += money; }
}

var account1 = new Account("홍길동", "100", 20000);
account1.deposit(10000);
console.log(account1.balance);

// literal object

var account2 = {
  owner: "홍길동",
  code: "100",
  balance: 20000,
  inquiry: function () { return this.balance; },
  deposit: (money) => { this.balance += money; },
};

account2.deposit(10000);
console.log(account2.balance);

// using lambda
var account3 = {
  owner: "홍길동",
  code: "100",
  balance: 20000,
  inquiry: (obj) => obj.balance,
  deposit: (obj, money) => obj.balance += money,
};

account3.deposit(account3, 10000);
console.log(account3.balance);
