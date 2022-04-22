const alphs = ['A', 'B', 'C', 'D', 'E', 'F'];
const nums = ['1', '2', '3', '4', '5', '6'];

// const a = alphs[0]; // 'A'
// const b = alphs[1]; // 'B'


// parts of the whole array
// const [a, b] = alphs;
const [a, , c, ...rest] = alphs;

console.log(a);     // 'A'
// console.log(b);
console.log(c);     // 'C'
console.log(rest);  // [ 'D', 'E', 'F' ]


// combining

const newArr = [...alphs, ...nums];
// const newArr= alphs.concat(nums)
console.log(newArr);    // ['A', 'B', 'C', .... '3', '4','5','6']


// using with functions

function sumMul(a, b) {
  return [a + b, a * b];
  // return [a+b, a*b, a/b];
}

// const [sum, mul] = sumMul(2,3);
const [sum, mul, div = 'No div'] = sumMul(2, 3); // default value
console.log(sum);
console.log(mul);
console.log(div);

console.log('----------- Object Destucturing -------------------');
// based on Key

const person1 = {
  age: 23,
}

const person2 = {
  name: 'Park',
  age: 32,
  address: {
    city: 'Seoul',
    province: 'Kyunggi'
  }
}

const { name, age } = person2;
console.log(name, age);   // 'Park'  32

const { name: firstName, age2, favoriteFood = 'Rice' } = person2;
console.log(firstName, age2, favoriteFood);   // 'Park' undefined 'Rice'

const { name: firstName2, ...rest2 } = person2;
console.log(firstName2);  // 'Park'
console.log(rest2); // { age: 32, address: { city: 'Seoul', province: 'Kyunggi' } }

const { name: firstName3, address: { city } } = person2;
console.log(city); // 'Seoul'

console.log('----------- person3 -------------------');
const person3 = { ...person2, ...person1 };  // override age
console.log(person3);   // {name: 'Park', age: 23, address: { city: 'Seoul', province: 'Kyunggi' }}

console.log('----------- print function ----------------');

function printUser(user) {
  console.log(`Name is: ${user.name}. Age is ${user.age}`);
}

function printUser2({ name, age, favoriteFood = 'Pizza' }) {
  console.log(`Name is: ${name}. Age is ${age}, Food is ${favoriteFood} `);
}

printUser(person2);   // Name is: Park. Age is 32
printUser2(person2);  // Name is: Park. Age is 32, Food is Pizza
