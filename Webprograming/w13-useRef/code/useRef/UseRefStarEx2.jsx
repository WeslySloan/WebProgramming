import { useState, useRef } from 'react';

const UseRefStarEx2 = () => {
  const [renderer, setRenderer] = useState(0) // no resetting after re-rendering
  const countRef = useRef(0); // no resetting after re-rendering
  let countVar = 0;           // resetting after re-rendering

  const doRendering = () => setRenderer(renderer + 1)
  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref: ', countRef.current)
  }
  
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var: ', countVar);
  }

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`)
  }
  
  return (
    <div>
      <p>State: {renderer}</p>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>State Increment (Rendering)</button><br />
      <button onClick={increaseRef}>Ref Increment (No rendering itself)</button>
      <button onClick={increaseVar}>Var Increment (Resetting after re-rendering)</button>
      <button onClick={printResults}>Console Display (Ref & Var)</button>
    </div>
  );
};

export default UseRefStarEx2;

// Re-rendering이 되면, ref 값은 증가한 모습으로 보이지만 var 값은 0 이다. 
// Re-redering은 코드를 다시 실행하므로 countVar은 매번 그 값이 초기화되어, var 값은 항상 0으로 보이게 됨.
// useState와 useRef에 의해서 설정된 변수 값은 이 컴포넌트가 mount되어 있는 동안 
// re-rendering에 의해서 초기화 되지 않는다.
