import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }}>{number}</div>
      <button onClick={() => setNumber(preNum => preNum + 1)}>더하기</button>
      &nbsp;
      <button onClick={() => setNumber(number - 1)}>뻬기</button>
    </div>
  )
}

export default App;