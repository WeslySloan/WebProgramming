import React, { useEffect, useRef }  from 'react';

const UseRefDom1 = () => {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, [])

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}`);
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
      
    </div>
  );
};

export default UseRefDom1;

// input을 클릭하면 focus 가 발생하는데, 
// 클릭하지 않아도 자동적으로 input이 focus 되도록 하기 위해 useRef을 이용함

// <input ref={inputRef} ... /> 
// inputRef.current의 값이 input 태그가 되도록 함.
// 마치 inputRef가 input 태크를 포인트하는 것과 같음.
// 이 상황에서 ref 객체 내의 focus 함수를 실행하면 focus가 활성화 됨: 
// inputRef.current.focus()

// "로그인" 클릭 시 alert를 이용하여 환영메시지를 보여준 후, 
// 다시 focus가 되도록 함