// https://www.youtube.com/watch?v=tdORpiegLg0

import { useState, useReducer } from 'react';

const reducer = (balance, action) => {
  switch (action.type) {
    case 'deposit':
      return (balance + action.amount);
    case 'withdraw':
      return (balance - action.amount);
    default:
      throw new Error();
  }
}

const Bank = () => {
  const [number, setNumber] = useState(0)
  const [balance, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고: {balance} 원</p>
      <input 
        type="number" 
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button onClick={()=>dispatch({type: 'deposit', amount: number })}>예금</button>
      <button onClick={()=>dispatch({type: 'withdraw', amount: number })}>출금</button>
    </div>
  );
};

export default Bank;

// <input type="number" step="1000" />
// 두 개의 상태 변수 number, balance
// number : 사용자 input 으로부터 예금/출금으로부터 주어지는 데이터. 클릭 때마다 변화함
// balance : 예금/출금을 하면서 변화되는 잔액. action을 처리할 때마다 변화함
