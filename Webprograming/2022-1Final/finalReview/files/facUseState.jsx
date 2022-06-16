// file name : facUseState.jsx 

import React, { useState } from 'react';

const App = () => <div> <Fac /> </div>

function Fac() {
  const [index, setIndex] = useState(0);
  const [arr, setArr] = useState([])

  // const accSum = (n) => { let result = 0; for (let i = 0; i <= n; i++) result = result + i; return result; }
  // const fac = (n) => [...Array(n).keys()].reduce((acc, x) => acc * (x + 1), 1)
  const fac = (n) => (n <= 0) ? 1 : n * fac(n - 1)

  const handleClick = () => {
    let newVal = fac(index);
    setArr(pre => setArr([...pre, newVal]))
    setIndex(index + 1)
  }

  return (
    <>
      <h3>Factorial n! = n * (n-1)! </h3>
      <div><NumberList arr={arr} /> </div>
      <button onClick={handleClick}>클릭</button>
    </>
  );
}

const NumberList = ({ arr }) => {
  const zip = (a, b) => a.map((k, i) => [k, b[i]]);
  const indexArr = [...arr.keys()]           // array of indices

  let arrPair = zip(indexArr, arr)
  const listItems = arrPair.map((x) => <li key={x.toString()}>{x[0]}! : {x[1]}</li>)
  return (<ul>{listItems}</ul>)
}


export default App;