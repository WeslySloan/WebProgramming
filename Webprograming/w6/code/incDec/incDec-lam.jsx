import React, { useState } from "react";

const App = () => {

  const [number, setNumber] = useState(0);
  const handleInc = () => setNumber(number + 1);
  const handleDec = () => setNumber(number - 1);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }}>{number}</div>
      <button onClick={handleInc}>더하기</button>
      &nbsp;
      <button onClick={handleDec}>뻬기</button>
    </div>
  )
}

export default App;