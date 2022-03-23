function f() {
  let x = 10;

  function g(y) {
    let a = y * 2;
    return x + a;
  }

  console.log(g(20))
}

f();   // calling f