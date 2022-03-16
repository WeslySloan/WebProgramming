// 아래 밑줄 친 부분에 코드를 넣어 프로그램을 완성하세요.

// Factorial 함수를 여러 가지 방법으로 표현

// 1. 전역 변수 및 Loop문 사용 : 명령형 프로그래밍
var result = 1;
function fac1(n) {
  while (n > 0) {
    _____________;
    _________;
  }
  return result;
}
console.log("fac1(4) = ", fac1(4))

// 2. 재귀함수로 표현
function fac2(n) {
  if (n <= 0) return 1;
  else return ___________;
}
console.log("fac2(4) = ", fac2(4))

// 3. if 대신 3항 연산식 사용
function fac3(n) {
  return (n <= 0) ? __ : __________;
}
console.log("fac3(4) = ", fac3(4))

// 4. 람다 함수로 표현
var fac4 = (n) => {
  return __________________;
}
console.log("fac4(4) = ", fac4(4))

// 5. 중괄호 및 return이 생략된 람다 함수로 표현 : 함수형 프로그래밍 
var fac5 = _______________________;
console.log("fac5(4) = ", fac5(4))


