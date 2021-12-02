import { useState } from 'react';

export default function App() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <div>
      <h3>계산기 프로그램</h3>
      <p>더 하기 </p>
      <hr />
      <div>
        <input value={x} dir='rtl' onChange={e => setX(parseInt(e.target.value))} />
        &nbsp;
        <>+</>
        &nbsp;
        <input value={y} dir='rtl' onChange={e => setY(parseInt(e.target.value))} />
        &nbsp;
        <input type="button" value='=' onClick={() => setResult(x + y)} />
        &nbsp;
        <input value={result} readOnly dir='rtl' />
      </div>
    </div>
  );
}
