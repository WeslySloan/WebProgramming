import {useState, useEffect} from 'react';

const UseEffect4 = () => {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')

  const handleCountUpdate = () => setCount(count + 1)
  const handleInputChange = (e) => setName(e.target.value)

  // 맨 처음 마운팅될 때 단 한 번만 실행
  useEffect(() => {
    console.log('mount')
  }, [])
  
  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count} </span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>

    </div>
  );
};

export default UseEffect4;

// useEffect에서 dependency를 [] 로 설정
// 따라서 맨 처음 한 번만 callback이 실행되며,
// count나 name의 값이 변하더라도 callback은 실행되지 않음.

