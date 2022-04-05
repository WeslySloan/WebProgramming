import React from 'react';

const Ex810 = () => {

    function creatDIV() {
        var obj = document.getElementById("parent");
        var newDIV = document.createElement("div");
        newDIV.innerHTML = "새로 생성된 DIV입니다.";
        newDIV.setAttribute("id", "myDiv");
        newDIV.style.backgroundColor = "yellow";
        newDIV.onclick = function() {
            var p = this.parentElement; // 부모 HTML 태그 요소
            p.removeChild(this); // 자신을 부모로부터 제거
        };
        obj.appendChild(newDIV);
    }
    function createA() {
      const a = document.createElement("a");
      a.innerHTML = "DIV 생성"
      a.href="javascript:creatDIV()"
    //   a.SetAttribute("link");
      a.onclick = () => createDIV();
      body.appendChild(a);
    }
    
    return (
      <div>
        <h3>DIV 객체를 동적으로 생성, 삽입, 삭제하는 예제</h3>
        <hr />
        <p>DOM 트리에 동적으로 객체를 삽입할 수 있습니다.
        createElement(), appendChild(), 
        removeChild() 메소드를 이용하여 새로운 객체를 생성,
        삽입, 삭제하는 예제입니다.</p>
        {/* <a href="javascript:createDIV()">DIV 생성</a> */}
      </div>
    )
}

  export default Ex810;
// import React from 'react';

// export default function Ex211() {
//     document.title = "이미지 삽입"
//     return (
//     <div>
//         <h3>이미지 삽입</h3>
//     <hr />
//         <p> 엘비스 프레슬리의 사진입니다.</p>
//     <img src={require ('./Elvis1.jpg')} width="150" height="200"
// 	 	  alt="Elvis" />
//     <img src={require ('media/kitae.jpg')} width="80" height="100"
// 		 alt="황기태사진없음" />
//     <img src={require ('http://img.naver.net/static/www/u/2013/0731/nmms_224940510.gif')}
// 		 alt="사진 주소 변경됨" width="100" height="100" /> 
//     </div>
//     )
// }

// import React from 'react';

// const Ex810 = () => {

//     function createDIV() {
//         var obj = document.getElementById("parent");
//         var newDIV = document.createElement("div");
//         newDIV.innerHTML = "새로 생성된 DIV입니다.";
//         newDIV.setAttribute("id", "myDiv");
//         newDIV.style.backgroundColor = "yellow";
//         newDIV.onclick = function() {
//             var p = this.parentElement; // 부모 HTML 태그 요소
//             p.removeChild(this); // 자신을 부모로부터 제거
//         };
//         obj.appendChild(newDIV);
//       }

//     return (
//       <div>
//         <h3>DIV 객체를 동적으로 생성, 삽입, 삭제하는 예제</h3>
//         <hr />
//         <p>DOM 트리에 동적으로 객체를 삽입할 수 있습니다.
//         createElement(), appendChild(), 
//         removeChild() 메소드를 이용하여 새로운 객체를 생성,
//         삽입, 삭제하는 예제입니다.</p>
//         <a href="createDIV()">DIV 생성</a>
//       </div>
//     )
// }

// export default Ex810;

// import React from 'react';

// export default function Ex203() {
//     document.title = "&lt;div&gt;블록과  &lt;span&gt;인라인"
//     return (
//     <body>
//         <h3>사랑</h3>
//         <hr />
//         <div style={{backgroundColor:"skyblue", padding:"20px"}}>
//         내가 사람의 방언과 천사의 말을 할지라도
//         <span style={{ color: "red" }}> 사랑</span>이 없으면 소리 나는 구리와 울리는 꽹과리가 되고,
//         <span style={{ color: "red" }}> 사랑</span>이 없으면 아무 것도 아니라.
//         </div>
//         <p>
//             ~우리 서로 사랑하며 살아요~
//         </p>
//     </body>
//     )
// }

// import React from 'react';

// export default function Ex211() {
//     document.title = "이미지 삽입"
//     return (
//     <div>
//         <h3>이미지 삽입</h3>
//     <hr />
//         <p> 엘비스 프레슬리의 사진입니다.</p>
//     <img src={require ('./Elvis1.jpg')} width="150" height="200"
// 	 	  alt="Elvis" />
//     <img  width="80" height="100"
// 		 alt="황기태사진없음" />
//     <img 
// 		 alt="사진 주소 변경됨" width="100" height="100" /> 
//     </div>
//     )
// }


// import React from 'react'

// export default function App() { 
//   document.title='첫 타이틀 '
//   return (
//     <div> 
//       <h1>1장 홈페이지 만들기</h1>
//       <h2>1절 HTML</h2>
//     </div>
//   )
// }

// import Ex82multiComp from './w5/code/Ex82multiComp';

// export default function App() { 
//   return (
//     <div> 
//       <Ex82multiComp />
//     </div>
//   )
// }

//////////////////////

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


