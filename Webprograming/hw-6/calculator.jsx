import { useState } from 'react';

const calculator = () => {

    // window.addEventListener("load", function () {
    //     var txtx = document.getElementById("txt-x");
    //     var txty = document.getElementById("txt-y");
    //     var btnadd = document.getElementById("btn-add");
    //     var result = document.getElementById("txt-result");

    //     btnadd.onclick = function () {
    //       var x = parseInt(txtx.value);
    //       var y = parseInt(txty.value);

    //       result.value = x + y;
    //     };
    //   }); -- > ust state

  const [number, setNumber] = useState<number>(0)

  var txtx = document.getElementById("txt-x");
  var txty = document.getElementById("txt-y");

  const equal = () => {
    setNumber(number+txtx+txty);
  }

  return (
    <div>
        <h3>계산기 프로그램</h3>
        <p>더 하기 </p>
        <hr/>
        <div>
            <input id="txt-x" type="text" value="0" dir="rtl" />
            +
            <input id="txt-y" type="text" value="0" dir="rtl" />
            <input id="btn-add" type="button" value="=" onClick={equal}/>
            <input id="txt-result" type="text" value="0" readonly dir="rtl" />
        </div>
    </div>
  );
  
};

export default calculator;