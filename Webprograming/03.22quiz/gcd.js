
// 두 수의 최대 공약수(gcd)를 구하는 함수 구현하는 방법
// Various definitions of the gcd function 

// 1. By Loop
function gcdLoop(x, y) {
  var a = x;
  var b = y;
  while (a != 0) {
    let tmp = a;
    a = b % a;
    b = tmp;
  }
  return b;
}

// 2. By arrow functions 
// 1번에 정의된 함수를 단순히 화살표 함수로 구현함
const gcdLoop2 = (x, y) => {
  let tmp = 1;

  for(let i=2; i<=Math.min(x, y); i++){
      if(x % i === 0 && y % i === 0){
          tmp = i;
      }
  }

  return tmp;
}

// // 3. By arrow and recursive functions
const gcdRec = (x, y) => {
  if (y === 0) return x;
  else  return gcdRec(y, x % y);
}

// 4. By recursive, arrow, and ternary expression
const gcd = (x, y) => (y === 0) ? 0 : gcd(y, x % y);

console.log(gcdLoop(16, 24))   // 8
console.log(gcdLoop2(16, 24))  // 8
console.log(gcdRec(16, 24))    // 8
console.log(gcd(16, 24))       // 8
