'use strict';

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const studs = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 92),
  new Student('D', 40, false, 67),
  new Student('E', 18, true, 80),
];

console.log(studs);

studs.sort((a, b) => a.score - b.score);
console.log(studs);

console.log(studs.map(s => s.name));
console.log(studs.map(s => s.age));
console.log(studs.map(s => s.enrolled));
console.log(studs.map(s => s.score));