import React from 'react'
import ReactDOM from 'react-dom'

export default function ClockTest(props) {
  return (
    <div>
      <h1>Hello, World</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

function tick() {
  ReactDOM.render(
    <ClockTest date={new Date()} />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)

/*  
  이 파일은 App.js 를 통해서 수행된다. 
  App.js 에서 이 컴포넌트를 호출하지 않은 채, 단지 import만 하더라도 이 파일이
  실행된다. 

  이 파일의 실행은 setInterval 로 시작되며,
  ReactDOM.render(<ClockTest date={new Date()} />, document.getElementById('root'))
  가 실행되면서, root에 이 내용이 붙여지게 된다.

*/