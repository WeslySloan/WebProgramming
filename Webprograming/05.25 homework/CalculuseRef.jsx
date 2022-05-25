import { useRef } from 'react';

export default function Calculator() {
  const x = useRef(0)
  const y = useRef(0)
  const result = useRef(0)

  const handleX = e => {
    y.current.value = e.trget.value
  }
  const handleY = e => {
      y.current.value = e.trget.value
  }
  const handleResult = () => { 
      result.current.value = parseInt(x.current.value) + parseInt(y.current.value)
  } 


  return (
    <div className="App">
      <h3>계산기 프로그램</h3>
      <p>더 하기 </p>
      <hr />
      <div>
        <input ref={x} placeholder={0} dir='rtl' onChange={handleX} />
        &nbsp;
        <>+</>
        &nbsp;
        <input ref={y} placeholder={0} dir='rtl' onChange={handleY} />
        &nbsp;
        <input type="button" value='=' onClick={handleResult} />
        &nbsp;
        <input value={result} placeholder={0} readOnly dir='rtl' />
      </div>
    </div>
  );
}
