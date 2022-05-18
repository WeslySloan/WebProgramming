import { useState } from 'react';

const ThemeState = () => {
  const [isDark, setIsDark] = useState(false)
  return <Page isDark={isDark} setIsDark={setIsDark} />
}

const Page = ({ isDark, setIsDark}) => {
  return (
    <div>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

const Header = ({ isDark }) => {
  return(
    <header 
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark? 'white' : 'black'
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </header>
  )
}

const Content = ({ isDark }) => {
  return (
    <div 
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <p>홍길동님, 좋은 하루 되세요</p>
    </div>
  )
}

const Footer = ({ isDark, setIsDark }) => {
  const toggleTheme = () => setIsDark(!isDark)
  return(
    <footer
      className="footer"
      style={{ backgroundColor: isDark ? 'black' : 'lightgray'}}
    >
      <button className="button" onClick={toggleTheme}> Dark Mode </button>
    </footer>
  )
}


export default ThemeState;

// Context Calls
// ThemeState -> Page -> Header, Content, Footer
// Page: isDark와 setIsDark를 모두 사용하지 않음. 
//       그렇지만, 이 둘을 Children에게 전달하기 위해서 ThemeState로부터 이들을 props로 받아옴.
// Header: isDark를 사용, setIsDark는 사용하지 않음
// Content: isDark를 사용, setIsDark는 사용하지 않음
// Footer: isDark와 setIsDark를 모두 사용