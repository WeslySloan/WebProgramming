
var x; 			// 전역변수
function f() {
  var x; 		// 지역변수
  x = 1; 		// 지역변수 x에 1 저장
  this.x = 100; // 전역변수 x에 100 저장
}
console.log(x);  // undefined
f()
console.log(x);  // 100
