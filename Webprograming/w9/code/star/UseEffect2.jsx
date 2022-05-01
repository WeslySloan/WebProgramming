import {useState, useEffect} from 'react';

const UseEffect2 = () => {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')


  const handleCountUpdate = () => setCount(count + 1)
  const handleInputChange = (e) => setName(e.target.value)

  // 마운트 + [item] 변경시 실행됨
  useEffect(() => {
    console.log('count is updated')

  }, [count])

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count} </span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>

    </div>
  );
};

export default UseEffect2;

// UseEffec1 의 수정: 
// 앞서 UseEffect의 callback이 너무 빈번히 실행되므로, 
// onChange에 의한 re-rendering은 제외하고, onClick(즉, count 업데이트) 때만 실행하기로 함.
// => dependency에 count 만을 등록함

// 결과적으로, useEffect의 callback은 맨 처음 rendering 될 때, 그러고 Update 클릭시 실행되며
// input 입력 시에는 실행되지 않음

