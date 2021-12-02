// 할당문 (destructive update) 으로 number 값을 수정할 경우
// 내부적으로는 값이 변동되지만, rendering에 반영되지 않음
// react의 rendering은 useState로 변경할 경우에만 영향을 줌
// Virtual DOM과 Real DOM의 비교는 useState에의한 update 시 발생

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