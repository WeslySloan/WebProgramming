// https://www.w3schools.com/react/react_useeffect.asp

import {useState, useEffect} from 'react';

const CountSetTimeout = () => {
  const [count, setCount] = useState(0)

  useEffect(()=> {
    setTimeout(() => setCount(count => count + 1) , 1000);
    console.log('count is = ', count);
  })

  return <h1>I've rendered {count} times!</h1>
};

export default CountSetTimeout;

// <h1>I've rendered 0 times!</h1> 를 rendering 함
// componentDidMount 에 해당되는 useEffect의 callback 실행 (비동기)
// 이 callback에서 1 초 후에 상태 변수 count를 변화시켰으므로, re-rendering이 발생하며
// callback 함수가 다시 실행됨 (componentDidUpdate)