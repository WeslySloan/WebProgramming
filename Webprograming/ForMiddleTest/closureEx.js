k = 100;

function f() {
  let x = 10;

  // closure, local function
  function g(y) {
    let a = y * 2;
    return x + a + k;
  }

  console.log(g(20));
}

f();   // calling f
