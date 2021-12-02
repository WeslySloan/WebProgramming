// 렌더링 된 엘리먼트 업데이트하기 (Hooks Version)
// https://ko.reactjs.org/docs/rendering-elements.html
// React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 
// DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트합니다.

import React, { useState, useEffect } from 'react';

export default function App() {
  const [date, setDate] = React.useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  React.useEffect(() => {
    var timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);         // cleanup
  });

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

// setInterval() returns an interval ID which uniquely identifies the interval
// so you can remove it later by clearInterval()
// useEffect 는 return을 정의하지 않을 수도 있고 정의할 수도 있는데, 
// return을 정의하는 경우 이는 함수로서, 이 함수는 주로 cleanup, 
// 비동기 함수 kill 등의 기능을 함