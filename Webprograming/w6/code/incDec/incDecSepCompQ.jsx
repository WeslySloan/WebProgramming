// file name : incDecSepComp.jsx

import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "20px" }}>{number}</div>
      </div>
      <hr />
      <li>IncDec.jsx는 오직 한 개의 컴포넌트 App 으로 구성됨</li>
      <li>원래의 파일을 3개의 component로 분리: App, Increment, Decrement</li>
      <li>App (main 함수와 비슷한 기능) 에서 Increment와 Decrement를 호출함</li>
      <li>App 에서 Increment와 Decrement를 호출함</li>
      <li>이때 전달되는 파라메터에 유의할 것</li>
      <li>파라메터 및 setNumber 함수를 표현할 때, 축약 되지 않은 원래 모습으로 표현할 것</li>
    </div>
  )
}

const Increment = () => {
  return (
    <></>
  )
}


const Decrement = () => {
  return (
    <></>
  )
}

