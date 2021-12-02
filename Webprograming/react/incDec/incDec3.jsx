// file name :: incDec3.jsx 

import React, { useState } from "react";

const App = () => {
  let [number, setNumber] = useState(0);
  console.log("[App] number = ", number)
  return (
    <div style={{ textAlign: "center" }}>
      <div id="num" style={{ fontSize: "20px" }}>{number}</div>
      <button onClick={() => setNumber(number + 1)}>더하기</button>
      &nbsp;
      <button onClick={() => {
        number = number - 1;
        let num = document.getElementById('num');   // for UI
        num.textContent = number;                   // for UI
      }}>뻬기</button>
    </div >
  )
}

export default App;