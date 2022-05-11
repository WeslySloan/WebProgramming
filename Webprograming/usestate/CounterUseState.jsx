import { useState } from 'react';

const CounterUseState= () => {
  const [count, setNumber] = useState(0)

  // (state,action) => newState
  const reducer = (count, action) => {
    switch (action.type) {
      case 'increment':
        return (count + 1);
      case 'decrement':
        return (count - 1);
      default:
        throw new Error();
    }
  }
  
  const dispatch = (type) =>  setNumber(reducer(count, type))

  return (
    <div>
      <div>Count: {count}</div> 
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default CounterUseState;

// useState + reducer/dispatch = useReducer
// useReducer는 근본적으로 다른 것이 아니고, useState의 확장된 형태

// useReducer 는 언제 사용? : 
// 상태의 구조가 복잡하고, 현재의 상태를 이용하여 새로운 상태를 구성할 때
