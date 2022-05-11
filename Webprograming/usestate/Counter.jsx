import { useReducer } from 'react';

const initialState = {count: 0};

// binary function : (state,action) => newState
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {state.count}</div> 
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default Counter;

// reduce 함수의 일반적인 형태
// value = arr.reduce(<bi-function>, initValue)
// 일반적인 형태의 <bi-function>
//   (acc, cur) => acc `op` cur
// arr에서 연속적으로 제공되는 값을 하나씩 cur로 받아서
// acc `op` cur의 연산을 한 후, 그 결과 값은 acc에 누적되면서
// 반복적인 연산을 실행한다.
// value의 타입은 arr 원소와 동일함 

// reduce = foldl
// [1,2,3].reduce((acc,cur) => acc + cur, 0)
// (1:2:3:[]).reduce((acc,cur) => acc + cur, 0)
// = [2,3].reduce((acc,cur) => acc + cur, (0+1))
// = [3].reduce((acc,cur) => acc + cur, ((0+1)+2))
// = [].reduce((acc,cur) => acc + cur, (((0+1)+2)+3))
// = (((0+1)+2)+3) = 6

// [action].reduce(<reducer>, initState)
// [action] = dispatch 에 의해서 연속적으로 주어지는 action(dec/inc)
// reducer (이진 함수): 상태 변환 함수
// (state, action) => 현재 state에서 해당 action의 의미를 실행하여 그 결과 state 값 업데이트
// dispatch가 이벤트 핸들러가 처리 해야하는 action을 하나씩 reducer에게 전달
// 이 경우 [actions] 의 수는 고정되지 않음 (이벤트 발생 수)
// 여기서는 reduce의 결과 값이 아닌, 계산 과정에서 얻어지는 state 값이 목적

