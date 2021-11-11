'use strict';

console.log('---- join ---------------------');

// 01. 배열의 스트링 원소들을 모두 합쳐서 하나의 스트링으로 만들기
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(',');   // remove the comma, the default separator
console.log(result);

console.log('\n---- split ---------------------');

// 02. 주어진 스트링을 배열로 변환하기
const fruits2 = 'apple,banana,orange';
console.log(fruits2.split(','));              // sperator를 , 하여 분리

console.log('\n---- reverse ---------------------');

// 03. 배열을 reverse 시키기
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());                   // side-effect

console.log('\n---- slice ---------------------');

// 04. 배열의 앞 두 원소를 제외한 나머지로 새로운 배열 만들기
console.log(arr.slice(2, 5));      // return a new array, 원래 배열은 그대로 유지
console.log(arr);                       // [5,4,3,2,1]

console.log('\n---- splice ---------------------');

const res = arr.splice(0, 2);           // 원래 배열을 변경시킴
console.log(res);                       // [5, 4]
console.log(arr);                       // [3,2,1]

// -------------------------------------

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

console.log('\n---- find ---------------------');

// 05. score의 값이 80인 첫 번째 학생 찾기 : find
const res2 = studs.find((stud, index) => stud.score === 80);
// const res2 = studs.find((s) => s.score === 80)
console.log(res2);     // Student { name: 'B', age: 28, enrolled: false, score: 80 }

console.log('\n---- filter ---------------------');

// 06. enrolled 의 값이 true인 모든 학생들 찾기 : filter
const res3 = studs.filter((s) => s.enrolled === true); // 혹은 단순히 s.enrolled
console.log(res3);                         // 3 개 객체로 된 배열

console.log('\n---- map ---------------------');

// 07. 학생들 각각의 score 항목 만을 추출하기 : map
const res4 = studs.map((s) => s.score);
console.log(res4);                        // [ 45, 80, 92, 67, 80 ]

console.log('\n---- some, every ---------------------');

// 08. 모든 학생들의 score 가 50점 이상인지를 점검
// score가 50 이하인 학생이 존재하는지?: some, every
const res5 = studs.some((s) => s.score < 50);
console.log(res5);                                   // true
const res51 = !studs.every((s) => s.score >= 50);
console.log(res51);                                  // true

console.log('\n---- reduce  ---------------------');

// 09. 학생들의 평균 score 구하기 : reduce (함수, init)
const res6 = studs.reduce((acc, cur) => acc + cur.score, 0) / studs.length;
console.log(res6);                               // 72.8

console.log('\n---- map join  ---------------------');

// 10. 학생들의 score를 스트링으로 만들기
const res7 = studs.map((s) => s.score).join('    ');
console.log(res7);                   // 45    80    92    67    80

console.log('\n---- chaining: array.map(Fn).filter(Fn).joing(" ")  ----------');

// 11. Functional chaining
const res8 = studs
  .map((s) => s.score)
  .filter((s) => s >= 50)
  .join(' ');
console.log(res8);                  // 80 92 67 80

console.log('\n---- chaining: array.map(Fn).sort()  --------------------');

// 12. 학생들 점수 추출하여 sorting 하기
const res9
  = studs
    .map((s) => s.score)         // [45, 80, 92, 67.. 80]
    .sort((a, b) => (a > b) ? 1 : -1);      // ascending, -, 0, +
console.log(res9);               // [ 45, 67, 80, 80, 92 ]

console.log('\n============ Array.from(arrayLike[, mapFn])  ===============');

// 13. from을 사용한 배열 생성 : Array.from(arrayLike[, mapFn]) 

let arr1 = Array.from([10, 20, 30])    // 3개의 원소로 이루어진 배열 생성
console.log(arr1)                      // [10, 20, 30]

// Array.from({length : n}) :  n 개의 length를 갖는 배열 만들기 (내용은 undefined)
let arr2 = Array.from({ length: 4 })
console.log(arr2)            // [ undefined, undefined, undefined, undefined ]
console.log(arr2.length)     // 4

let arr3 = Array.from([10, 20, 30]).map(x => x + 2)
console.log(arr3)                     // [12, 22, 32]

// Array.from({length : n}, (x) => ....)
let arr31 = Array.from([10, 20, 30], x => x + 2)
console.log(arr31)                    // [12, 22, 32]

// Array.from({length : n}, (val, index) => ....)
let arr32 = Array.from([10, 20, 30], (v, i) => v + i)
console.log(arr32)                     // [10, 21, 32]

// 수 n ~ m 까지 원소로 구성된 배열 생성
let arr33 = Array.from({ length: 7 }, (_, i) => i + 3)
console.log(arr33)                     // [3, 4, 5, 6, 7, 8, 9]

// 0 ~ 50 사이의 20개 난수
// let arr4 = Array.from({ length: 20 }, () => Math.floor(Math.random() * 51))
let arr4 = Array.from({ length: 20 }, () => Math.round(Math.random() * 50))
console.log(arr4)
