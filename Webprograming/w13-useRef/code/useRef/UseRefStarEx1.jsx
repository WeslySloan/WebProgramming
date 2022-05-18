import { useState, useRef } from 'react';

const UseRefStarEx1 = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  
  const increaseCountState = () => setCount(count+1)

  // Increment for counterRef.current is made only internally,
  // but re-redering doesn't occur
  const increaseCountRef = () => {
    console.log("countRef: ", countRef);
    countRef.current = countRef.current + 1;
  }

  return (
    <div>
      <p>State: {count} </p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 증가</button>
      <button onClick={increaseCountRef}>Ref 증가</button>
    </div>
  );
};

export default UseRefStarEx1;

// "State 증가" => re-rendering이 일어남
// "Ref 증가"를 하면 실제 값이 증가하지만 re-redering이 일어나지 않으므로 화면에 변화가 없음 
// 이때 "State 증가"를 클릭하면, re-rendering이 일어나고, 증가된 countRef이 화면에 반영됨

// State가 변화할 때마다 rendering이 발생하는데, 이 rendering을 하고 싶지 않은 경우 (성능 등의 이유로)
// 이를 ref로 정의하면 좋을 듯.