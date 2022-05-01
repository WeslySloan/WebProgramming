// https://www.w3schools.com/react/react_useeffect.asp

import {useState, useEffect} from 'react';

const CountSetTimeout2 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => setCount((count) => count + 1), 1000);
  }, []); // 오직 한번 componentDidMount로서 동작

  return <h1>I've rendered {count} times!</h1>
};

export default CountSetTimeout2;

// dependency array가 empty이므로 useEffect의 callback은 오직 한 번만 실행됨
// (componentDidMount)

// 초기 화면: I've rendered 0 times!
// 1초 후 re-rendering된 화면 : I've rendered 1 times!