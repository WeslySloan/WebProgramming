// Prototype 방식의 상속

function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}

Person.prototype.getName = function () {
  return this.lastName + ' ' + this.firstName;
};

Person.prototype.getLastName = function () { return 'Mr. ' + this.lastName; }


const person = new Person('Gildong', 'Hong');
console.log(person.getName());     // Hong Gildong
console.log(person.getLastName());  // Mr. Hong
