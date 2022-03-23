const add = function (x) {
  // x is a local variable in add
  // add returns a function, where x is included
  // the annonymous function in the return includes x, defined outside.
  return function (y) {
    return x + y;
  }
}

console.log("add(100)(200) = ", add(100)(200))

// all those are curried functions
const add2 = x => (y => x + y)  //  the parenthesis can be ommitted
console.log("add2(10)(20) = ", add2(10)(20));
