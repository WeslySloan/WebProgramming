import React from 'react';
import PropComponent from './PropComponent';

// 컴포넌트 호출 (컴포넌트에 데이터 호출)
export default function App() {
  return (
    <div className="body">
      <span>App: Function </span> <br />
      <MyComponent name="message" />
      <PropComponent name="message2" />
    </div>
  )
}

// 동일한 이름의 파라메터를 사용하거나, 새로운 이름을 사용할 경우
// { name: newName} 형태로 정의함
function MyComponent({ name: newName }) {
  return (
    <span>MyComponent function : {newName} !!</span>
  )
}