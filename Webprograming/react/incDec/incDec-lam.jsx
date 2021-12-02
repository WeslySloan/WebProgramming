// 컴포넌트를 람다 식으로 정의하는 경우의 export default
// export default const App = () => ...  사용 불가
// 이 경우, 변수(const) App의 정의와 default 정의를 동시에 하려고 하므로 에러.

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