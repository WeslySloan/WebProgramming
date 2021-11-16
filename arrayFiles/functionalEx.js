const arr = [4, 9, 3, 2, 1, 5, 7, 8, 8]

// 배열로부터 max 값 찾기
// 첫 원소를 max로 놓고, 
// 나머지 원소들 중에 max 보다 큰 값이 있으면 이를 max로 채택하는 과정을 반복함

// forEach는 return 값이 없음 (side-effect 프로그래밍)
// 계산된 값은 반복적인 할당문의 수행 결과인 max에 남음

let [max, ...rest] = arr  // destructuring of array
rest.forEach((x) => { max = (x > max) ? x : max })
console.log(max)

// accumulate 계산을 reduce로 표현 : 순수 함수형
const max2
  = arr.slice(1).reduce(
    (acc, cur) => (acc > cur) ? acc : cur,
    arr[0])
console.log(max2)

let max2loop = arr[0]                               // initial value
for (let i = 1; i < arr.length; i++)                // rest elements
  max2loop = arr[i] > max2loop ? arr[i] : max2loop; // accumulated binary op
console.log('\nmax2loop : ', max2loop)

const sum = arr.reduce((acc, cur) => acc + cur, 0)
console.log('\nsum by reduce : ', sum)

const product = arr.reduce((acc, cur) => acc * cur, 1)
console.log('\nproduct by reduce : ', product)

console.log('\n======= n 까지의 소수들 (prime numbers) 을 구하기 =========')

// 소수 구하기 알고리즘 : 
// 소수는 1과 자신을 제외한 어떤 수로 나누어지지 않는 수이다. 
// 어떤 한 수 n이 소수인지의 판단은 그 수에 대한 약수들(factors)의 리스트가 [1,n] 인지로 판단한다.
// 따라서 맨 처음 수 n에 대한 약수들의 리스트를 구한다 (factors 함수)
// 이 과정에서 주어진 n에 대하여 리스트 [1,...,n] 를 만들어 내는 함수가 필요함 (one2nArr)
// 그 다음 그 리스트가 [1,n] 과 같은 지를 비교한다 (isPrime).
// 이때, 두 리스트가 동일한지를 판단히기 위한 함수가 필요하다 (arrayEqual)
// 어떤 한 수 n 이 주어졌을 때, 2부터 n 사이에 있는 모든 소수들의 리스트를 구한다 (primes) 
// 이 과정에서 주어진 n에 대하여 리스트 [2,...,n] 를 만들어 내는 함수가 필요함 (two2nArr)

console.log('\n------ 1부터 n 까지의 수로 구성된 배열을 구성하는 함수 -------')

const one2nArr = n => Array.from({ length: n }, (_, i) => i + 1)
console.log(one2nArr(10))

console.log('\n------ 2부터 n 까지의 수로 구성된 배열을 구성하는 함수 -------')
const two2nArr = n => Array.from({ length: n - 1 }, (_, i) => i + 2)
console.log(two2nArr(10))

// 두 배열 내의 값이 같은 지를 비교하는 함수
const arrayEqual = (a, b) =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((val, index) => val === b[index]);

console.log('\n------ 수 n의 약수들을 찾는 함수 -------')

const factors = n => one2nArr(n).filter(x => n % x == 0)
console.log('factors(10) = ', factors(10))

console.log('\n------ 주어진 수 n 이 prime 인지를 판단하는 함수 (predicate) -------\n')
// n의 약수 들의 리스트 == [1, n] 인 지를 비교
const isPrime = n => arrayEqual(factors(n), Array.of(1, n))
console.log('isPrime(10) = ', isPrime(10))
console.log('isPrime(11) = ', isPrime(11))

console.log('\n--------- n 까지의 소수들 (prime numbers) 을 구하는 함수 -----------')
// 2부터 n 까지의 배열에서, prime 인 것을 골라 냄 
const primes = n => two2nArr(n).filter(x => isPrime(x))
console.log(primes(40))
