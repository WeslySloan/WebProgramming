"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
arr1[0] = 1;
arr1[1] = 2;
console.log(arr1);                   // [1, 2]

// 2. index position
console.log('\n--- 2. index position ----------------------');
const arr = [3, 4, 5];
console.log(arr.length);             // 3
console.log(arr[1]);                 // 4
console.log(arr[5]);                 // undefined
console.log(arr[arr.length - 1]);    // the last element of arr, 5

// 3. looping over an array
// 1) for
console.log('\n--- 3. looping over an array ----------------------');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);               // 3, 4, 5
}

console.log('\n--- for ... of ----------------------');
// 2) for ... of
for (let j of arr) {
  console.log(j);                    // 3, 4, 5
}

// 3) forEach
console.log('\n--- forEach ----------------------');
// const arr = [3, 4, 5];
// arr.forEach( function (v, index, arr) {console.log(v, index, arr);} );
arr.forEach((v, index, arr) => { console.log(v, index, arr); });

console.log('\n--- forEach Lambda ------------------------');
arr.forEach((v, index) => console.log(v, index)); // 3 0 \n 4 1 \n  5 2
arr.forEach((v) => console.log(v));               // 3 4 5

// 4. Insertion, deletion, copy
console.log('\n--- 4. push, pop, shift ----------------------');
// push: add an item to the end
arr.push(10, 20);
console.log(arr);                               // [3, 4, 5, 10, 20]

// pop: remove an iterm from the end
let a = arr.pop();
console.log(a, arr);                               // 20, [3, 4, 5, 10]

// unshift: add an item to the beginning
arr.unshift(100, 200);
console.log(arr);                               // [100, 200, 3, 4, 5, 10]

// shift: remove an item from the beginning
arr.shift();
console.log(arr);                               // [200, 3, 4, 5, 10]

// splice: remove  items by index position
console.log('\n--- splice ----------------------');
arr.splice(2);                                  // 2번 째부터 끝까지
console.log(arr);                               // [200, 3]
arr.splice(1, 1);                               // 1번 째부터 1 개
console.log(arr);                               // [200]
arr.splice(0, 1, 2000, 3000);       // 0번부터 1개 지우고, 2000과 3000을 add
console.log(arr);                               // [2000, 3000]

// concat :: combine two arrays
console.log('\n--- concat ----------------------');
const arr3 = [10, 20, 30];
const newArr = arr.concat(arr3);
console.log(newArr);                          // [2000, 3000, 10, 20, 30]

// 5. Searching
// indexOf : find the index
console.log('\n--- indexOf ----------------------');
console.log(newArr);
console.log(newArr.indexOf(3000));            // 1

// includes : boolean
console.log(newArr.includes(30));             // true
console.log(newArr.includes(33));             // false
console.log(newArr.indexOf(33));         // -1 해당 값이 없을 경우의 index

// lastIndexOf
console.log('\n--- lastIndexOf ---------------------');
newArr.push(3000);                        // 같은 값을 같는 원소 추가
console.log(newArr);                      // [2000, 3000, 10, 20, 30, 3000]
console.log(newArr.indexOf(3000));        // 1, 첫 번째의 index
console.log(newArr.lastIndexOf(3000));    // 5. 맨 마지막의 index
