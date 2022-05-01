import {useState} from 'react';

const StateEx = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default StateEx;

// useState
// 함수형 컴포넌트 내에 local 상태 기능을 추가함
// 컴포넌트가 re-render되어도 그 상태 값은 그대로 유지됨
// useState 수행 결과 return 되는 pair (배열) :
//  1. 현재의 상태 값을 담는 변수 (count)
//  2. 이 변수의 값을 업데이트하는 함수 (setCount)
// 이 상태의 초기 값은 useState의 파라메터(인자)로 제공됨.
// 상태 변수의 타입에 유의해야 하는데, 이 초기 값의 타입이 이를 설명하고 있음.
// class 컴포넌트에서는 (this.state) 이 타입이 객체이어야 하지만, 여기서는 그럴 필요 없음.   
// 핸들러 등에서 이 set 함수를 호출하여 상태 값을 변화시키며, 
// 상태가 변화되면 이 컴포넌트는 re-render 됨
// 상태 변수의 초기 값에 따라 첫 페이지가 rendering됨 (초기 값은 단 한번 사용됨)

// Array Destructuring (배열의 구조분해)
// const arr = useState(0)
// const [count, setCount] = arr (구조분해)
// 

