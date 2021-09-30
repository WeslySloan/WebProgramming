const person = {
    firstName: 'Gildong',
    lastName: 'Hong',
    getName: function() {return this.lastName + ' ' + this.firstName;},
    // getLastName: function getLastName() {return 'Mr. ' + this.lastName; },   // ES5
    getLastName() {return 'Mr. ' + this.lastName; },   // ES6
};

console.log(person.getName());     // Hong Gildong
console.log(person.getLastName());  // Mr. Hong
