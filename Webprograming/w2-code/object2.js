let person = {};
person.firstName = 'Gildong';
person.lastName = 'Hong';
person.getName = function () { return this.lastName + ' ' + this.firstName; };
person.getLastName = function () { return 'Mr. ' + this.lastName; };

console.log(person.getName());     // Hong Gildong
console.log(person.getLastName());  // Mr. Hong
