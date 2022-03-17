// Class와 new를 이용한 객체 생성

class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  getName() { return this.lastName + ' ' + this.firstName; };
  getLastName() { return 'Mr. ' + this.lastName; }
}

const person = new Person('Gildong', 'Hong');
console.log(person.getName());     // Hong Gildong
console.log(person.getLastName());  // Mr. Hong
person.newproperty = 1234;
console.log(person.newproperty);  // 1234