import React from 'react';

const Ex82multiComp = () => {
  return (
    <div>
      <CreateH3 />
      <CreateHr />
      <CreateP />
      <CreateInput />
    </div>
  )
}

// const CreateH3 = () => {
//   return (
//     <div>
//       <h3>CSS</h3>
//     </div>
//   )
// }

const CreateH3 = () => <h3>CSS</h3>
const CreateHr = () => <hr />

const CreateP = () =>
  <p style={{ color: "blue" }}>
    이것은 <CreateSpan />
  </p>

const CreateSpan = () =>
  <span id="mySpan" style={{ color: "red" }}>
    문장입니다
  </span>

const CreateInput = () =>
  <input type="button"
    value="스타일변경"
    onClick={() => {
      var span = document.getElementById("mySpan");
      span.style.color = "green";
      span.style.fontSize = "30px";
      span.style.display = "block";
      span.style.width = "6em";
      span.style.border = "3px dotted magenta";
      span.style.margin = "20px";
    }}
  />

export default Ex82multiComp;

/* 프로그램 설명
 - 배경 : HTML의 일부분은 subtree를 구성하고 있는데, 각 부분이 React에서 컴포넌트로 구성될
   수 있음을 보여준다. 
 - 컴포넌트 : 컴포넌트는 함수처럼, 컴포넌트를 정의하고, 이를 호출함으로써 실행된다. 
   컴포넌트는 return 값은 JSX 로서, 이것은 HTML의 태그 표현에 해당된다. 
   HTML 태그 내에 다른 여러 태그들이 사용되는 경우 (트리구조), 이는 컴포넌트에서
   한 컴포넌트 내에서 다른 해당되는 컴포넌트를 호출하는 형태로 표현된다.
 - 일반적으로 한 컴포넌트는 MVC(입력데이터, 비쥬얼, 제어프로그램) 를 표현하는 데,
   여기서는 단순히 HTML을 표현하는 형태로 정의되었는데 (즉, V 위주로 표현), 
 - HTML 태그 내에 사용되는 onclick 에 대한 React 표현은 onClick이다.
 - 이벤트 핸들러 함수는 함수이름을 이용하여 정의될 수도 있으나, react에서는 화살표 함수를 이용하여
   직접 onClick에 대한 할당문으로 표현하는 경우가 많다. 
 - style 값은 객체로 주어지므로 {color: "red"} 형태로 표현된다. 
   그런데 JSX에서 JS의 expression(즉, 값) 또한 {expression} 이므로, 
   style={{ color: "red" }}  (이중 중괄호로 표현됨) 가 된다. 
*/
