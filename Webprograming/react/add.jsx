import { useState } from 'react';

export default function App() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [result, setResult] = useState(0)

  const handleX = e => { setX(parseInt(e.target.value)) }
  const handleY = e => { setY(parseInt(e.target.value)) }
  const handleResult = () => { setResult(x + y) }

  return (
    <div className="App">
      <h3>계산기 프로그램</h3>
      <p>더 하기 </p>
      <hr />
      <div>
        <input value={x} dir='rtl' onChange={handleX} />
        &nbsp;
        <>+</>
        &nbsp;
        <input value={y} dir='rtl' onChange={handleY} />
        &nbsp;
        <input type="button" value='=' onClick={handleResult} />
        &nbsp;
        <input value={result} readOnly dir='rtl' />
      </div>
    </div>
  );
}
