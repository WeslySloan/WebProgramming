// https://ko.reactjs.org/docs/hooks-effect.html

import React, { useState, useEffect } from 'react';

export default function ExFun() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  //   console.log(`useEffect : ${count} times`)
  // });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(`useEffect : ${count} times`)
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// console.log 내용
// 맨 처음, 이벤트 발생 전 : (compoentDidMount에 해당)
// useEffect : 0 times (console)
// You clicked 0 times  (웹 화면과 tittle)
// 이벤트 한 번 발생 한 후 : (componentDidUpdate에 해당)
// useEffect : 1 times (console)
// You clicked 1 times (웹 화면과 title)

// https://dev.to/nibble/what-is-useeffect-hook-and-how-do-you-use-it-1p9c
// dependency 사용
// Rect는 dependency의 current value와 previous value를 비교하여, 
// 다른 경우에만 effect 코드를 수행하며 같은 경우에는 코드를 수행하지 않는다. 
// 성능이 향상될 수 있음
// dependency가 정의되지 않으면, 매번 render 할 떄 마다 effect를 실행한다.
// dependency array가 [] 인 경우, effect 함수는 맨 처음 한 번만 실행됨 
// 위의 경우, 버튼을 클릭할 때마다
// You clicked 2 times
// 가 바뀌지만,  title 이나  console은 실행되지 않는다. (componentDidMount 로만 동작)
