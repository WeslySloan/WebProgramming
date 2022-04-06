import React, { useState } from "react";

const App = () => {
  let [number, setNumber] = useState(0);
  console.log("[App] number = ", number);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }}>{number}</div>
      <button onClick={() => setNumber(number + 1)}>더하기</button>
      &nbsp;
      <button onClick={() => {
        console.log("number is ", number);
        number = number - 1;
        console.log("number is ", number);
      }}>뻬기</button>
    </div >
  )
}

export default App;