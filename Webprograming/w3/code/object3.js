// 생성자 함수 (Constructor Function)

function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
  this.getName = function () { return this.lastName + ' ' + this.firstName; };
  this.getLastName = () => 'Mr. ' + this.lastName;
}

const person = new Person('Gildong', 'Hong');
console.log(person.getName());     // Hong Gildong
console.log(person.getLastName());  // Mr. Hong
