// file name : incDecSepComp.jsx
// Component에 호출 (파라메터 전송)

import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "20px" }}>{number}</div>
        <Increment number={number} fun={setNumber} />
        &nbsp;
        <Decrement setNumber={setNumber} />
      </div>
      <hr />
      <li>IncDec.jsx는 오직 한 개의 컴포넌트 App 으로 구성됨</li>
      <li>원래 한 개로 구성된 App component를 3개의 component로 분리: App, Increment, Decrement</li>
      <li>시작 컴포넌트인 App (다른 언어의 main 함수처럼) 에서 Increment와 Decrement를 호출함</li>
      <li>이때 전달되는 파라메터에 유의할 것</li>
      <li>파라메터 및 setNumber 함수를 표현할 때, 축약 되지 않은 원래 모습으로 표현할 것</li>
    </div>
  )
}

const Increment = ({ number: number, fun: setNumber }) => {
  return (
    <button onClick={() => setNumber(number + 1)}>더하기</button>
  )
}

const Decrement = ({ setNumber: setNumber }) => {
  return (
    <button onClick={() => setNumber(preNum => preNum - 1)}>빼기</button>
  )
}

