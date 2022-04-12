import React, { useState } from 'react';

const Calculator = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [sum, setSum] = useState(0)

  // const equal = () => {
  //   setNumber(number+txtx+txty);
  // }

  return (
    <div>
        <h3>계산기 프로그램</h3>
        <p>더 하기 </p>
        <hr/>
        <div>
            <input type="text" defaultValue="0" dir="rtl" onChange={(e) => {
              setX(parseInt(e.target.value)) 
            }}></input>
            +
            <input type="text" defaultValue="0" dir="rtl" onChange={(e) => {
              setY(parseInt(e.target.value)) 
            }}></input>
            <input type="button" defaultValue="=" onClick={() => {
              setSum(x+y);
            }}/>
            <input type="text" value = {sum} dir="rtl" readOnly = "true" />
        </div>
    </div>
  );
  
};

export default Calculator;