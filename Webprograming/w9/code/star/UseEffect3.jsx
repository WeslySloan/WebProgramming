import {useState, useEffect} from 'react';

const UseEffect3 = () => {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')


  const handleCountUpdate = () => setCount(count + 1)
  const handleInputChange = (e) => setName(e.target.value)

  // 렌더링될 때마다 매번 실행됨
  useEffect(() => {
    console.log('rendering')
  })

  // 마운팅 + count가 업데이트될 때마다
  useEffect(() => {
    console.log('count')
  }, [count])
  
  // 마운팅 + name 이 업데이트될 때마다
  useEffect(() => {
    console.log('name')
  }, [name])

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count} </span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>

    </div>
  );
};

export default UseEffect3;

// 3 개의 useEffect를 정의함. 그 중에서 두 개는 각각 count과 name에 dependent 하고, 
// 처음 것은 아무 것에도 dependent 하지 않으므로, count나 name이 바뀔 때 마다 실행됨

// Update를 클릭하면 콘솔에 rendering 과 count가 출력되지만, name은 출력되지 않음
// Input에 입력을 하면, 콘솔에 rendering 과 name이 출력되지만, count는 출력되지 않음
