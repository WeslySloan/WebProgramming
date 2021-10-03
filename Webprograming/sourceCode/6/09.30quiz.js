// // for (var i =0; i< a.length; i++){ 
// //     if (!max) {
// //         max = a[i];
// //     }
// // }
// // console.log(max);

// // let a = [4, 3, 9, 1, 3, 8];
// // let max = a[0];

// max = Math.max.apply(null, a);
// console .log(max);


let a = [4, 3, 9, 1, 3, 8];
let max = a[0];

for (var i = 0 ; i<a.length; i++) {
    max = a[i]>max ? a[i] : max;
}
console.log(max);