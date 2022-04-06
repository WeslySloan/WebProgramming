import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(1);
  const increaseCount = () => setCount((prevCount) => prevCount + 1);
  return (
    <div>
      <Counter count={count} onAdd={increaseCount} />
    </div>
  )
}

function Counter({ count, onAdd }) {
  return (
    <div>
      현재 카운트: {count}
      <button onClick={onAdd}>카운트 증가</button>
    </div>
  )
}
