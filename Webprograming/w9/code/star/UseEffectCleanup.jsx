import {useState, useEffect} from 'react';

const UseEffectCleanup = () => {
  const [showTimer, setShowtimer] = useState(false)
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={()=>setShowtimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
};

const Timer = (props) => {
  useEffect(() => {
      const timer = 
      setInterval(() => {console.log('타이머 실행 중')}, 1000)
      // return () => { clearInterval(timer); console.log('타이머가 종료됨')}
    }, [])
  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요! </span>
    </div>
  )
}

export default UseEffectCleanup;

// {showTimer && <Timer />} : 오직 showTimer가 true일 때만 <Timer /> 실행
// 맨 처음 showTimer는 false 이므로, <Timer/>는 실행되지 않으며, console 도 출력되는 내용은 없다.
// "Toggle Timer" 를 클릭하면 <Timer/> 가 실행되면서 console에 1초에 1번씩 '타이머 실행 중'이 출력됨
// 다시 "Toggle Timer" 를 클릭하면 showTimer가 false가 되어 Timer 컴포넌트는 unmount 됨.
// 그런데 Timer 가 unmount되었음에도 불구하고 console에 '타이머 실행 중' 는 계속 출력됨
// 이것은 setInterval에 의한 timer가 cleanup 되지 않기 때문이다.
// Cleanup을 위해서 useEffect 내에 return 문을 넣고, 그 안에 clearInteval을 실행함
// return 문은 <Timer/>가 unmount 될 때 실행됨

// <Timer/> 의 unmount 는 showTimer 값이 변화됨에 따라 이 컴포넌트를 다시 실행할 때
// {showTimer && <Timer />} 에 의해 <Timer /> 가 실행되지 않음으로써 rendering에서 
// 제외되는 상황을 의미한다.

