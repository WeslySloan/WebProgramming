// 고차 함수 (higher-order functions)
// 함수가 수처럼 저장될 수 있고, 함수의 인자로 전달될 수 있고, return 값이 될 수 있다. 

// 함수형 프로그래밍에서는 의미적으로(semantically) 함수도 값(value) 이다
// 문법적으로 (syntactically) 값은 수식 (expression) 으로 표현될 수도 있다.

// JavaSrcipt에서 문법적으로 함수는 여러 개의 문장(statements)으로 표현될 수도 있고,
// 함수는 수식으로 표현될 수 도 있으며, 

// 함수 정의 : 함수의 정의가 여러 개의 표현됨 (기존 방식, 명령형 프로그래밍)
function adder(a, b) {
  var sum;
  sum = a + b;
  return sum;
}

function k() { return adder; }

function first(a, b) { return a; }

// 할당문의 오른쪽 수식 부분이 함수로 표현됨
// 함수 이름 f는 사용되지 않으므로 삭제 가능 ==> 무명 함수
// 변수 adder1와 adder2가 함수의 의미를 표현함
var adder1 = function f(a, b) { return a + b; }
var adder2 = function (a, b) { return a + b; }

// 무명 함수는 람다 식으로 간결하게 표현될 수 있음. 중괄호가 없을 경우, return도 없음.
// 람다 함수는 일명 화살표 (arrow) 함수라고도 부름.
var adder3 = (a, b) => a + b;

// 여러 문장으로 정의되는 람다 함수는 중괄호로 정의하며, return이 필요함 
var adder4 = (a, b) => {
  var sum;
  sum = a + b;
  return sum;
}

// 파라메터가 없는 람다 함수 
var x = () => 300;

console.log("adder(10,20) = ", adder(10, 20))
console.log("adder1(10,20) = ", adder1(10, 20))
// console.log("f(10,20) = ", f(10, 20))  에러 발생
console.log("adder2(10,20) = ", adder2(10, 20))
console.log("adder3(10,20) = ", adder3(10, 20))
console.log("adder4(10,20) = ", adder4(10, 20))
console.log("x() = ", x())

// 변수에 다른 함수를 할당함
x = adder
console.log("x(10,20) = ", x(10, 20))
x = adder3
console.log("x(10,20) = ", x(10, 20))

// 함수는 배열의 원소로 저장될 수 있음
var arr = [x => x + 1, x => x + 2, x => x + 3]
console.log("arr[2](10) = ", arr[2](10)) // 13, 함수 호출

// 배열에 함수를 저장한 후, iteration을 적용함.
arr = [adder, adder1, adder2, adder3, adder4]
for (const f of arr) {
  console.log(f(5, 6))
}

// ---------- Java의 람다 함수  ------
// BinaryOperator<Integer> adder = (x, y) -> x + y;
// adder.apply(10,20)
