import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext(null)

const ThemeContextEx = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page/>
    </ThemeContext.Provider>
  )
}

const Page = () => {
  return (
    <div>
      <Header />
      <Content  />
      <Footer />
    </div>
  )
}

const Header = () => {
  const { isDark } = useContext(ThemeContext)
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

const Content = () => {
  const { isDark } = useContext(ThemeContext)
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

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)
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

export default ThemeContextEx;

// ThemeContext 사용법:
// 기존 컴포넌트 호출 시 (explicitly) props로서 전달하던 내용을 context를 이용하여 implicitly 전달함
// ThemeContext를 전역변수 형태로 정의하고, 전달하고 싶은 내용들을 Provider의 value로 정의함 (여러 개를 객체 형태로)
// 컴포넌트 호출 시 눈에는 보이지 않지만, 그 밑으로 context가 흐르고 있음.
// context에 있는 내용을 이용하기 위해서는 useContext(ThemeContext)를 호출하여 그 내용들을 뽑아 올림.

// Context Calls:
// ThemeContextEx -> Page -> Header, Content, Footer
// ThemeContext : children 컴포넌트들에게 보내고 싶은 내용들을 ThemConext의 Provider value로 전달함.
// Page: isDark와 setIsDark를 모두 사용하지 않으므로, context를 이용하지 않음.
// Header: isDark를 사용, setIsDark는 사용하지 않음. ThemeConext로부터 isDark를 가져옴.
// Content: isDark를 사용, setIsDark는 사용하지 않음. ThemeConext로부터 isDark를 가져옴.
// Footer: isDark와 setIsDark를 모두 사용. ThemeConext로부터 이 둘을 모두 가져옴.
