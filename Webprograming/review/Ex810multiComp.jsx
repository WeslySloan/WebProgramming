import React from 'react';

const Ex810 = () => {

    function creatDIV()
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