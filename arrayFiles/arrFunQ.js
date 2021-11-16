'use strict';

// 스트링들의 배열을 모두 붙이는 함수 (arr1.join('') 과 동일한 기능)
// 이를 reduce 함수로 표현하라. 
// 이진 함수 str1 + st2 를 적용함. 이때 초기 값은?
let arr1 = ['ab', 'cd', '', 'ef'];
let res1 = `'${arr1.reduce(( acc, cur ) => acc.concat(cur))}'`; 
console.log('res1 = ', res1);                //  'abcdef'

// 배열들로 구성된 배열. reduce 함수를 이용하여, 이 원소들을 모두 합쳐 배열로 만든다.
// 두 배열을 합칠 때 이진 함수 concat 을 이용한다. acc.concat(cur)
// 이때 acc의 초기 값은 무엇이 되어야 하는가?
let arrArr = [[1, 2], [], [3, 4, 5], [6], [7, 8]]
let res2 =`[${arrArr.reduce(( acc, cur ) => acc.concat(cur)).join(",")}]`   
console.log('res2 =', res2);                // [1,2,3,4,5,6,7,8]

// digit으로 구성된 문자열을 수 (10진수)로 변환하기
// 스트링 "12345" 을 배열 [1,2,3,4,5] 로 변환함.
// 맨 처음 스트링을 배열로 변환하기 위하여 split() 함수를 적용하여 ['1', '2', '3', '4', '5']를 만들고,
// 이를 배열 함수를 적용하여 [1,2,3,4,5] 로 만든다. 한 문자 'n'를 수 n 으로 변환하기 위해 n - '0' 적용
// reduce 함수를 적용하여, 배열 [1,2,3,4,5] 을 수 12345 로 변환한다.
// 힌트 : 12345 = (((((0*10 + 1)*10 + 2)*10 + 3)*10 + 4)*10 + 5
let str = "12345"
let numArr = str._________.__________
console.log('numArr = ', numArr)            // [1,2,3,4,5]
let num = numArr.reduce(( acc, cur ) => acc.concat(cur))
console.log('num = ', num)                  // 12345

// map 함수를 적용하여, 수들로 이루어진 각 원소 n 을 [n, n+1] 형태의 배열로 만든다.
// 결과값의 타입은 배열들로 구성되는 배열이 된다.  
let arr3 = [1, 2, 3, 4];
let res3 = arr3.map(x => x + x+1);
console.log('res = ', res3);            // [ [1,2], [2,3], [3,4], [4,5] ]
``
// // 배열의 원소들 중, 동일한 값을 갖는 것은 제거한다. 
// // 예들 들어, ['a', 1, 'a', 2, '1'] 을 ['a', 1, 2, '1'] 로 만든다. 
// // 알고리즘 : 배열의 원소를 처리하는 함수에서 각 원소에 대해서 (value, index, array) 의 3개로 입력을 받음.
// // indexOf(value) === index 임을 체크함. indexOf(value)는 주어진 array 중에서 value가 나타나는 
// // 가장 첫 번째 index를 리턴한다. 따라서, 동일한 값이 두번째 나타나는 경우 indexOf(value) === index 는 false 가 됨.

// let arr4 = ['a', 1, 'a', 2, '1']
// let res4 = arr4.___________________________________________________
// console.log('res4 = ', res4)            // ['a', 1, 2, '1']


