import { useState, useRef, useEffect } from 'react';

const UseRefStarEx3 = () => {
  const [count, setCount] = useState(0)

  // const [renderCount, setRenderCount] = useState(1)
  // useEffect(() => {
    // console.log('Rendering');
    // setRenderCount(renderCount+1)  // 무한 useEffect 함수 호출
    // })
    
    const renderCount = useRef(0);
    useEffect(() => {
      renderCount.current = renderCount.current + 1;
      console.log('# of Rendering: ', renderCount.current);
    })
  return (
    <div>
      <p>Count: {count}</p>
      <p># of Click: {renderCount.current}</p>
      <button onClick={() => setCount(count+2)}>Increment by 2</button>
    </div>
  );
};

export default UseRefStarEx3;

// "Increment by 2" 버튼의 클릭 횟수를 알기 위해서, useState에 의한 renderCount 변수를 지정하고, 
// 이것이 렌더링될 때마다, useEffect를 실행하도록 하는 위의 코드를 실행하면, 
// 무한 useEffect 함수 호출이 일어남.

// useRef는 용도:
// 변화를 감지하지만, 그 변화가 re-rendering을 발생시키 않고 싶을 때