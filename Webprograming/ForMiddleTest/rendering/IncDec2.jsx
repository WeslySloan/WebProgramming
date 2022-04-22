import React, { useState } from "react";

const IncDec2 = () => {
  let [number, setNumber] = useState(0);
  console.log("[App] number = ", number);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }}>{number}</div>
      <button onClick={() => setNumber(number + 1)}>더하기</button>
      &nbsp;
      <button onClick={() => {
        number = number - 1;
        console.log("number is ", number);
        setNumber(number);
      }}>뻬기</button>
    </div >
  )
}

export default IncDec2;

// update 된 변수 값을 rendering을 위해서는 setNumber를 반드시 실행해야 함.
// 위의 "빼기" 에서 할당문으로 변수 값을 수정하였지만, setNumber를 실행하지 않으면
// 화면에는 변화된 값으로 디스플레이 되지 않음.
// 두 문장 number = number-1; setNumber(number) 은 한 문장
// setNumber(number-1) 로 표현할 수 있음.