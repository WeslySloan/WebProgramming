import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './styles.scss'

const HomePageActive = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink
            className={({ isActive }) => 'swb' + (isActive ? ' ok' : '')}
            to='/'>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => 'swb' + (isActive ? ' ok' : '')}
            to='about'>
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => 'swb' + (isActive ? ' ok' : '')}
            to='contact'>
            Contact
          </NavLink>
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

export default HomePageActive

// NavLink의 ative style 조정
// 클릭할 때마다, className에 두 개의 이름 "swb ok" 로 지정됨
