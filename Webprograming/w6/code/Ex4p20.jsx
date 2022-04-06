import React from 'react';
import './Tmp.css'

// Ex 4 p20

export default function Ex4p20() {
  const myWarning = { color: 'green' }
  return (
    <div>
      <div>2학기 <strong>학습 내용</strong></div>
      <ul>
        <li>HTML5</li>
        <li><strong>CSS</strong></li>
        <li>JAVASCRIPT</li>
      </ul>
      {/* <div className="warning">60점 이하는 F!</div> */}
      <div style={myWarning}>60점 이하는 F!</div>
    </div>
  )
}

// Styling 적용 방법

// 1. inline styling (object 로 만들고, style에 할당) : 
//   style={object}, camelCase property:
//   backgroundColor, fontFamily
// <h1 style={{color: "red"}}>Hello Style!</h1>

// 2. CSS Stylesheet 이용
// App.css를 만들고 import './App.css'
// css에서는 프로퍼티가 camelCase가 아님
// backgorund-color  font-family  text-align

// body {
//   background-color: white;
//   color: blue;
//   margin: 10px;
//   font-family: Arial;
//   text-align: center;
// }

// 위의 경우, body에 적용하였으므로 App.css 를 import하면 동작함

// 3. className에 직접 적용
// App.css 에 다음 내용 추가 (클래스 용)

// .mainBody {
//   background-color: white;
//   color: blue;
//   margin: 10px;
//   font-family: Arial;
//   text-align: center;
// }

// .jsx 파일 

// import styles from './App.css';

// class MyJob extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1 className={styles.mainBody}>Hello Style!</h1>
//       </div>
//     );
//   }
// }

