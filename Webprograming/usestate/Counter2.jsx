import { useReducer } from 'react';

const initialState = 0;

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

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {count}</div> 
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default Counter2;

// Counter의 상태는 객체 {count: number} 인 것이 비해,
// 여기서는 상태를 count(Number 타입) 로 수정함.
