import {useState, useEffect} from 'react';

const Effect1 = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("count = ", count);
    document.title = ` ${count} times in title`;
  });

  return (
    <div>
      {console.log('in return')}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me </button>
    </div>
  );
};

export default Effect1;

// document.title = ... 은 DOM을 직접 업데이트하는 side-effect 연산이다.
// 이 오퍼레이션은 useEffect 없이도 잘 동작하는 데, useEffect 에 넣으면 어떤 차이점이 있는가?
// < console 출력 결과 >
// 1. useEffect 없을 때 : 위에서 아래 순서대로 실행. 
//    초기 내용 : count = 0, in return
//    클릭 후 : count = 1, in return
// 2. useEffect 사용 시 : return의 내용을 실행 (rendering) 후, useEffect의 callback 실행
//    초기 내용 : in return, count = 0 (componentDidMount)
//    클릭 후 : in return (rendering), count = 1 (componentDidUpdate)

// useEffect의 callback은 맨 처음 (componentDidMount), 그리고 상태 변수인 count 값이 
// 변경되어 re-rendering이 발행 한 후 실행된다 (componentDidUpdate)