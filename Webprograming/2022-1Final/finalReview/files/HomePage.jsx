import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './styles.scss'

const HomePage = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='contact'>Contact</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const Start = () => {
  return (
    <div>
      <h1>Start</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

export default HomePage

// Link 의 to 설정은 Route 의 path와 연결됨
// 맨 처음, Home이 path='/' 와 연결되므로, Start 컴포넌트가 실행됨
// 예: About를 클릭하면, 그에 해당되는 Route 의 <About /> 컴포넌트가 실행됨

// Link의 내부적 표현:
// About을 Inspect 해 보면, 이것은 내부적으로 <a href 로 연결됨을 볼 수 있다.
// Link 된 부분은 클릭시 화면이 refresh 되지 않지만,
// Link 대신 <a href 를 직접 사용하면, 클릭할 때 화면이 refresh되는 차이가 있음.
// 보통 SPA에서는 화면 refresh를 원치 않는 경우가 많으며, 이때는 Link를 사용함
// Link 된 것은 내부적으로 onClick 이벤트가 연결되지만 (no refresh),
// <a 는 onClick 없이 단지 href 로만 연결됨.

// NavLink:
// active한 상태에서 style을 다르게 보이고 싶을 경우
// 내부적으로 <a class="active" 로 연결됨
//