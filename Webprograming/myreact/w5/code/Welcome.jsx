import React from 'react';
import ReactDOM from 'react-dom';

// export default function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

const Welcome = (props) => <h1>Hello, {props.name}</h1>

export default Welcome;

// const element = <Welcome name="Sara" />;

const element =
  <div>
    <Welcome name="Sara" />;
    <Welcome name="Cahal" />;
    <Welcome name="Edite" />;
  </div>

ReactDOM.render(
  element,
  document.getElementById('root')
);


/*
<Welcome name="Sara" /> 엘리먼트로 ReactDOM.render()를 호출
React는 {name: 'Sara'}를 props로 하여 Welcome 컴포넌트를 호출
Welcome 컴포넌트는 결과적으로 <h1>Hello, Sara</h1> 엘리먼트를 반환
React DOM은 DOM을 효율적으로 업데이트 함.
*/