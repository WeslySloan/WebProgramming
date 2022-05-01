import {useState, useEffect} from 'react';

const UseEffect1 = () => {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')


  const handleCountUpdate = () => setCount(count + 1)
  const handleInputChange = (e) => setName(e.target.value)

  // 렌더링될 때마다 : 맨처음 + re-rendering 때마다 (set변수 변화시) 실행됨
  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('렌더링, executed in useEffect')
  })

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count} </span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>

    </div>
  );
};

export default UseEffect1;

// 컴포넌트가 mount될 때 useEffect의 callback 함수 실행됨.
// button의 onClick 핸들러에서 setCount이 실행됨에 따라 re-rendering이 발생하며,
// 그 때마다 useEffect의 callback이 반복 실행됨 
// input의 onChange의 핸들러에서 setName이 실행됨에 따라 re-rendeing이 발생하며,
// 그때마다 useEffect의 callback이 반복 실행됨
