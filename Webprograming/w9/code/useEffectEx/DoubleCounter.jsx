// https://www.w3schools.com/react/react_useeffect.asp

import {useState, useEffect} from 'react';

const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default DoubleCounter;

// button(+)을 클릭하면 상태 변수 count 값이 하나 증가하며 re-rendering이 일어난다
// useEffect 에서 dependency에 count가 등록되어 있으므로, count가 변화할 때마다 
// callback 함수가 실행됨. 상태 변수 calculation의 값을 count*2 한 값으로 업데이트한다.
// calculation 값이 변화되었으므로 다시 re-rendering이 발생한다. 
// 이 calculation 값의 변화하더라도 이 변수는 depencency에 등록되어 있지 않으므로 callback은 실행되지 않음.
