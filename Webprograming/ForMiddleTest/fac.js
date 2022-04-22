// Factorial 함수를 여러 가지 방법으로 표현

// 1. 전역 변수 및 Loop문 사용 : 명령형 프로그래밍
var result = 1;
function fac1(n) {
  while (n > 0) {
    result = n * result;
    n = n - 1;
  }
  return result;
}
console.log("fac1(4) = ", fac1(4))

// 2. 재귀함수로 표현  
function fac2(n) {
  if (n <= 0) return 1;
  else return n * fac2(n - 1);
}
console.log("fac2(4) = ", fac2(4))

// 3. if 대신 3항 연산식 사용
function fac3(n) {
  return (n <= 0) ? 1 : n * fac3(n - 1);
}
console.log("fac3(4) = ", fac3(4))

// 4. 람다 함수로 표현
var fac4 = (n) => {
  return (n <= 0) ? 1 : n * fac4(n - 1);
}
console.log("fac4(4) = ", fac4(4))

// 5. 중괄호 및 return이 생략된 람다 함수로 표현 : 함수형 프로그래밍 
var fac5 = (n) => (n <= 0) ? 1 : n * fac5(n - 1);

console.log("fac5(4) = ", fac5(4))


